/* eslint-disable @typescript-eslint/no-shadow */
import { get } from 'lodash-es';
import { existsSync, readFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { join, dirname, isAbsolute } from 'path';

export const CONFIG_FILE_NAME = 'vant.config.mjs';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(fileURLToPath(import.meta.url));

function findRootDir(dir: string): string {
  if (existsSync(join(dir, CONFIG_FILE_NAME))) {
    return dir;
  }

  const parentDir = dirname(dir);
  if (dir === parentDir) {
    return dir;
  }

  return findRootDir(parentDir);
}
// Colors
export const GREEN = '#07c160';

// Root paths
export const CWD = process.cwd();
export const ROOT = findRootDir(CWD);
export const ES_DIR = join(ROOT, 'es');
export const LIB_DIR = join(ROOT, 'lib');
export const DOCS_DIR = join(ROOT, 'docs');
export const DOC_DIST_DIR = join(ROOT, 'site');
export const PACKAGE_JSON_FILE = join(ROOT, 'package.json');
export const ROOT_WEBPACK_CONFIG_FILE = join(ROOT, 'webpack.config.js');
export const ROOT_POSTCSS_CONFIG_FILE = join(ROOT, 'postcss.config.js');
export const CACHE_DIR = join(ROOT, 'node_modules/.cache');
export const SITE_DIST_DIR = join(ROOT, 'site');
export const VANT_CONFIG_FILE = join(ROOT, CONFIG_FILE_NAME);

// Relative paths
export const CJS_DIR = join(__dirname, '..', '..', 'cjs');
export const DIST_DIR = join(__dirname, '../../dist');
export const SITE_DIR = join(__dirname, '../../site');
export const CONFIG_DIR = join(__dirname, '../config');
export const SITE_SRC_DIR = join(__dirname, '..', '..', 'site');

// Site files
export const SITE_MOBILE_COMPONENTS = join(SITE_DIR, 'mobile', 'components');

// Dist files
export const PACKAGE_ENTRY_FILE = join(DIST_DIR, 'package-entry.js');
export const PACKAGE_STYLE_FILE = join(DIST_DIR, 'package-style.css');
export const SITE_MOBILE_SHARED_FILE = join(DIST_DIR, 'site-mobile-shared.js');
export const SITE_DESKTOP_SHARED_FILE = join(DIST_DIR, 'site-desktop-shared.js');
export const SITE_MOBILE_DEMO_FILE = join(DIST_DIR, 'site-mobile-demo.js');
export const STYLE_DEPS_JSON_FILE = join(DIST_DIR, 'style-deps.json');

// Config files
export const BABEL_CONFIG_FILE = join(CONFIG_DIR, 'babel.config.js');
export const POSTCSS_CONFIG_FILE = join(CJS_DIR, 'postcss.config.js');
export const JEST_SETUP_FILE = join(CJS_DIR, 'jest.setup.cjs');
export const JEST_CONFIG_FILE = join(CJS_DIR, 'jest.config.cjs');
export const JEST_TRANSFORM_FILE = join(CONFIG_DIR, 'jest.transform.js');
export const JEST_FILE_MOCK_FILE = join(CONFIG_DIR, 'jest.file-mock.js');
export const JEST_STYLE_MOCK_FILE = join(CONFIG_DIR, 'jest.style-mock.js');

export const SCRIPT_EXTS = ['.js', '.jsx', '.ts', '.tsx'];
export const STYLE_EXTS = ['.css', '.less', '.scss'];

export function getPackageJson() {
  const rawJson = readFileSync(PACKAGE_JSON_FILE, 'utf-8');
  return JSON.parse(rawJson);
}

async function getVantConfigAsync() {
  try {
    // https://github.com/nodejs/node/issues/31710
    // absolute file paths don't work on Windows
    return (await import(pathToFileURL(VANT_CONFIG_FILE).href)).default;
  } catch (err) {
    return {};
  }
}

const vantConfig = await getVantConfigAsync();

export function getVantConfig() {
  return vantConfig;
}

/**
 * src absolute path
 */
function getSrcDir() {
  const vantConfig = getVantConfig();
  const srcDir = get(vantConfig, 'build.srcDir');

  if (srcDir) {
    if (isAbsolute(srcDir)) {
      return srcDir;
    }
    return join(ROOT, srcDir);
  }
  return join(ROOT, 'src');
}

export const SRC_DIR = getSrcDir();
export const STYLE_DIR = join(SRC_DIR, 'styles');

function ComponentClassification(): {
  ComponentClassificationArray: Array<string>;
  navArray: Array<any>;
} {
  let ComponentClassificationArray = [];
  let navArray = [];
  if (existsSync(VANT_CONFIG_FILE)) {
    const config = vantConfig;
    const { nav } = config.site.locales['zh-CN'];
    navArray = nav;
    ComponentClassificationArray = nav.map((item) => {
      return item.title;
    });
  }
  return { ComponentClassificationArray, navArray };
}

export const { ComponentClassificationArray: COMPONENT_CLASSIFICATION, navArray: nav } =
  ComponentClassification();
