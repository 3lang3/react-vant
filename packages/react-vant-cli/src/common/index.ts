import { sep, join } from 'path';
import { lstatSync, existsSync, readdirSync, readFileSync, outputFileSync } from 'fs-extra';
import merge from 'webpack-merge';
import {
  SRC_DIR,
  getVantConfig,
  ROOT_WEBPACK_CONFIG_FILE,
  ROOT_POSTCSS_CONFIG_FILE,
} from './constant';
import { WebpackConfig } from './types';

export const EXT_REGEXP = /\.\w+$/;
export const DEMO_REGEXP = new RegExp(`\\${sep}demo$`);
export const TEST_REGEXP = new RegExp(`\\${sep}test$`);
export const ASSET_REGEXP = /\.(png|jpe?g|gif|webp|ico|jfif|svg|woff2?|ttf)$/i;
export const STYLE_REGEXP = /\.(css|less|scss)$/;
export const SCRIPT_REGEXP = /\.(js|ts|jsx|tsx)$/;
export const TYPESCRIPT_REGEXP = /\.(ts||tsx)$/;
export const ENTRY_EXTS = ['js', 'ts', 'tsx', 'jsx'];

export function removeExt(path: string) {
  return path.replace('.js', '');
}

export function replaceExt(path: string, ext: string) {
  return path.replace(EXT_REGEXP, ext);
}

export function hasDefaultExport(code: string) {
  return code.includes('export default') || code.includes('export { default }');
}

/**
 * Get components Array
 * return ['action-bar','action-sheet','cascader',……]
 */
export function getComponents(): Array<string> {
  const EXCLUDES = ['.DS_Store'];
  const dirs = readdirSync(SRC_DIR);
  return dirs
    .filter((dir) => !EXCLUDES.includes(dir))
    .filter((dir) =>
      ENTRY_EXTS.some((ext) => {
        const path = join(SRC_DIR, dir, `index.${ext}`);
        if (existsSync(path)) {
          return hasDefaultExport(readFileSync(path, 'utf-8'));
        }
        return false;
      }),
    );
}

export function isDir(dir: string) {
  return lstatSync(dir).isDirectory();
}

export function isDemoDir(dir: string) {
  return DEMO_REGEXP.test(dir);
}

export function isTestDir(dir: string) {
  return TEST_REGEXP.test(dir);
}

export function isAsset(path: string) {
  return ASSET_REGEXP.test(path);
}

export function isStyle(path: string) {
  return STYLE_REGEXP.test(path);
}

export function isScript(path: string) {
  return SCRIPT_REGEXP.test(path) && !path.endsWith('.d.ts');
}

export function isTsFile(path: string) {
  return TYPESCRIPT_REGEXP.test(path) && !path.endsWith('.d.ts');
}

const camelizeRE = /-(\w)/g;
const pascalizeRE = /(\w)(\w*)/g;

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function pascalize(str: string): string {
  return camelize(str).replace(pascalizeRE, (_, c1, c2) => c1.toUpperCase() + c2);
}

export function decamelize(str: string, sepc = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, `$1${sepc}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${sepc}$2`)
    .toLowerCase();
}

export function normalizePath(path: string): string {
  return path.replace(/\\/g, '/');
}

export function getWebpackConfig(defaultConfig: WebpackConfig) {
  if (existsSync(ROOT_WEBPACK_CONFIG_FILE)) {
    const config = require(ROOT_WEBPACK_CONFIG_FILE);

    // 如果是函数形式，可能并不仅仅是添加额外的处理流程，而是在原有流程上进行修改
    // 比如修改markdown-loader,添加options.enableMetaData
    if (typeof config === 'function') {
      return merge(defaultConfig, config(defaultConfig));
    }

    return merge(defaultConfig, config);
  }

  return defaultConfig;
}

export function getPostcssConfig() {
  if (existsSync(ROOT_POSTCSS_CONFIG_FILE)) {
    return require(ROOT_POSTCSS_CONFIG_FILE);
  }

  return {};
}

export type ModuleEnv = 'esmodule' | 'commonjs';
export type NodeEnv = 'production' | 'development' | 'test';
export type BuildTarget = 'site' | 'package';

export function setModuleEnv(value: ModuleEnv) {
  process.env.BABEL_MODULE = value;
}

/**
 * set Node Env / 设置Node环境
 * @param value
 */
export function setNodeEnv(value: NodeEnv) {
  process.env.NODE_ENV = value;
}

export function setBuildTarget(value: BuildTarget) {
  process.env.BUILD_TARGET = value;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}

// smarter outputFileSync
// skip output if file content unchanged
export function smartOutputFile(filePath: string, content: string) {
  if (existsSync(filePath)) {
    const previousContent = readFileSync(filePath, 'utf-8');

    if (previousContent === content) {
      return;
    }
  }

  outputFileSync(filePath, content);
}

export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

export { getVantConfig };
