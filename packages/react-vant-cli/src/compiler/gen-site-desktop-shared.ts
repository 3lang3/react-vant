import glob from 'fast-glob';
import { join, parse } from 'path';
import fse from 'fs-extra';

import {
  pascalize,
  removeExt,
  getVantConfig,
  smartOutputFile,
  normalizePath,
} from '../common/index.js';
import {
  SRC_DIR,
  DOCS_DIR,
  getPackageJson,
  VANT_CONFIG_FILE,
  SITE_DESKTOP_SHARED_FILE,
} from '../common/constant.js';

const { existsSync, readdirSync } = fse;

type DocumentItem = {
  name: string;
  path: string;
};

function formatName(component: string, lang?: string) {
  component = pascalize(component);
  if (lang) {
    return `${component}_${lang.replace('-', '_')}`;
  }
  return component;
}

/**
 * i18n mode:
 *   - action-sheet/README.md       => ActionSheet_EnUS
 *   - action-sheet/README.zh-CN.md => ActionSheet_ZhCN
 *
 * default mode:
 *   - action-sheet/README.md => ActionSheet
 */
function resolveComponentDocuments(components: string[]): DocumentItem[] {
  const vantConfig = getVantConfig();
  const { locales, defaultLang } = vantConfig.site;

  const docs: DocumentItem[] = [];

  if (locales) {
    const langs = Object.keys(locales);
    langs.forEach((lang) => {
      const fileName = lang === defaultLang ? 'README.md' : `README.${lang}.md`;
      components.forEach((component) => {
        docs.push({
          name: formatName(component, lang),
          path: join(SRC_DIR, component, fileName),
        });
      });
    });
  } else {
    components.forEach((component) => {
      docs.push({
        name: formatName(component),
        path: join(SRC_DIR, component, 'README.md'),
      });
    });
  }

  return [...docs.filter((item) => existsSync(item.path))];
}

function resolveStaticDocuments(): DocumentItem[] {
  const vantConfig = getVantConfig();
  const { defaultLang } = vantConfig.site;

  const staticDocs = glob.sync(normalizePath(join(DOCS_DIR, '**/*.md'))).map((path) => {
    const pairs = parse(path).name.split('.');
    return {
      name: formatName(pairs[0], pairs[1] || defaultLang),
      path,
    };
  });

  return [...staticDocs];
}

function resolveDocuments(components: string[]): DocumentItem[] {
  return [...resolveStaticDocuments(), ...resolveComponentDocuments(components)];
}

// config.js
function genImportConfig() {
  return `import config from '${removeExt(normalizePath(VANT_CONFIG_FILE))}';`;
}

function genExportConfig() {
  return 'export { config };';
}

function genExportVersion() {
  return `export const packageVersion = '${getPackageJson().version}';`;
}

// 引入所有.md
// ps: 这里需要使用 loader 转译 markdown
function genImportDocuments(items: DocumentItem[]) {
  return items
    .map((item) => `import * as ${item.name} from '${normalizePath(item.path)}';`)
    .join('\n');
}

// 导出所有.md
function genExportAllDocuments(items: DocumentItem[]) {
  return `export const documents = {
  ${items.map((item) => item.name).join(',\n  ')}
};`;
}

// 导出所有组件.md
function genExportDocuments(items: DocumentItem[]) {
  return `export const componentNames = [
    ${items.map((item) => `'${item.name}'`).join(',\n  ')}
  ];`;
}

export function genSiteDesktopShared() {
  const dirs = readdirSync(SRC_DIR);
  const componentDocuments = resolveComponentDocuments(dirs);
  const staticDocuments = resolveStaticDocuments();
  const documents = [...staticDocuments, ...componentDocuments];
  const code = `${genImportConfig()}
${genImportDocuments(documents)}
${genExportConfig()}
${genExportAllDocuments(documents)}
${genExportDocuments(componentDocuments)}
${genExportVersion()}
`;
  smartOutputFile(SITE_DESKTOP_SHARED_FILE, code);
}
