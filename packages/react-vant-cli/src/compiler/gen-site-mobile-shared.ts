import { join } from 'path';
import fse from 'fs-extra';
import slash from 'slash2';
import { SITE_MOBILE_SHARED_FILE, SRC_DIR } from '../common/constant.js';
import { decamelize, getVantConfig, pascalize, smartOutputFile } from '../common/index.js';

const { existsSync, readdirSync } = fse;

type DemoItem = {
  name: string;
  path: string;
  component: string;
};

function genImports(demos: DemoItem[]) {
  const vantConfig = getVantConfig();
  return demos
    .map((item) => `import ${item.name} from '${slash(join(vantConfig.name, item.path))}';`)
    .join('\n');
}

function genExports(demos: DemoItem[]) {
  return `export const demos = {\n  ${demos.map((item) => item.name).join(',\n  ')}\n};`;
}

function genConfig(demos: DemoItem[]) {
  const vantConfig = getVantConfig();
  const demoNames = demos.map((item) => decamelize(item.name));

  function demoFilter(nav: any[]) {
    return nav.filter((group) => {
      group.items = group.items.filter((item: any) => demoNames.includes(item.path));
      return group.items.length;
    });
  }

  const { nav, locales } = vantConfig.site;
  if (locales) {
    Object.keys(locales).forEach((lang: string) => {
      if (locales[lang].nav) {
        locales[lang].nav = demoFilter(locales[lang].nav);
      }
    });
  } else if (nav) {
    vantConfig.site.nav = demoFilter(nav);
  }

  return `export const config = ${JSON.stringify(vantConfig, null, 2)}`;
}

function genCode(components: string[]) {
  const demos = components
    .map((component) => ({
      component,
      name: pascalize(component),
      path: slash(join(component, 'demo/index.tsx')),
    }))
    .filter((item) => existsSync(join(SRC_DIR, item.path)));

  return `
 ${genImports(demos)}
 ${genExports(demos)}
 ${genConfig(demos)}
`;
}

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);

  smartOutputFile(SITE_MOBILE_SHARED_FILE, code);
}
