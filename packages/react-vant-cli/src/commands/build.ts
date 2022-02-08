import execa from 'execa';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import postcssMultiple from 'postcss-px-multiple';
import chokidar from 'chokidar';
import { join, relative } from 'path';
import fse from 'fs-extra';
import { ora, consola, slimPath } from '../common/logger.js';
import {
  isAsset,
  isDemoDir,
  isDir,
  isScript,
  isStyle,
  isTestDir,
  setBuildTarget,
  setModuleEnv,
  setNodeEnv,
} from '../common/index.js';
import { clean } from './clean.js';
import { LIB_DIR, ES_DIR, SRC_DIR, HD_2X_DIR, PACKAGE_JSON_FILE } from '../common/constant.js';
import { genStyleDepsMap } from '../compiler/gen-style-deps-map.js';
import { genPackageEntry } from '../compiler/gen-package-entry.js';
import { genPackageStyle } from '../compiler/gen-package-style.js';
import { CSS_LANG } from '../common/css.js';
import { compileScript } from '../compiler/compile-js.js';
import { compileBundles } from '../compiler/compile-bundles.js';
import { compileStyle } from '../compiler/compile-style.js';

const { remove, copy, readdir, existsSync } = fse;

async function compileFile(filePath: string) {
  if (isScript(filePath)) {
    return compileScript(filePath);
  }

  if (isStyle(filePath)) {
    return compileStyle(filePath);
  }

  if (isAsset(filePath)) {
    return Promise.resolve();
  }

  return Promise.resolve();
}

/**
 * Pre-compile
 * 1. Remove unneeded dirs
 * 2. compile sfc into scripts/styles
 */
async function preCompileDir(dir: string) {
  const files = await readdir(dir);

  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath);
      }
      if (isDir(filePath)) {
        return preCompileDir(filePath);
      }
      if (isScript(filePath)) {
        return compileScript(filePath);
      }
      return Promise.resolve();
    }),
  );
}

async function compileDir(dir: string) {
  const files = await readdir(dir);

  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath);
      }

      if (isDir(filePath)) {
        return compileDir(filePath);
      }

      return compileFile(filePath);
    }),
  );

  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);

      if (/\.(less|md)/.test(filePath)) {
        return remove(filePath);
      }

      return Promise.resolve();
    }),
  );
}

async function copySourceCode() {
  await copy(SRC_DIR, ES_DIR);
  await copy(SRC_DIR, LIB_DIR);
}

async function buildPackageScriptEntry() {
  const esEntryFile = join(ES_DIR, 'index.js');
  const libEntryFile = join(LIB_DIR, 'index.js');

  genPackageEntry({
    outputPath: esEntryFile,
    pathResolver: (path: string) => `./${relative(SRC_DIR, path)}`,
  });

  await copy(esEntryFile, libEntryFile);
}

async function buildStyleEntry() {
  await genStyleDepsMap();
}

async function buildPackageStyleEntry() {
  const styleEntryFile = join(LIB_DIR, `index.${CSS_LANG}`);

  genPackageStyle({
    outputPath: styleEntryFile,
    pathResolver: (path: string) => path.replace(SRC_DIR, '.'),
  });
}

async function buildTypeDeclarations() {
  // await Promise.all([preCompileDir(ES_DIR), preCompileDir(LIB_DIR)]);

  const tsConfig = join(process.cwd(), 'tsconfig.declaration.json');

  if (existsSync(tsConfig)) {
    await execa('tsc', ['-p', tsConfig]);
  }
}

async function buildESMOutputs() {
  setModuleEnv('esmodule');
  setBuildTarget('package');
  await compileDir(ES_DIR);
  // await compile({ targetPath: ES_DIR, watch: cmd.watch, type: 'esm' });
}

async function buildCJSOutputs() {
  setModuleEnv('commonjs');
  setBuildTarget('package');
  await compileDir(LIB_DIR);
  // await compile({ targetPath: LIB_DIR, watch: cmd.watch, type: 'cjs' });
}

async function buildBundledOutputs() {
  setModuleEnv('esmodule');
  await compileBundles();
}

async function build2xResouces() {
  await copy(ES_DIR, join(HD_2X_DIR, 'es'));
  await copy(ES_DIR, join(HD_2X_DIR, 'lib'));
  await copy(PACKAGE_JSON_FILE, join(HD_2X_DIR, 'package.json'));
  const pxMultiplePlugin = postcssMultiple({ times: 2 });
  gulp
    .src(join(HD_2X_DIR, '**/*.css'), {
      base: HD_2X_DIR,
    })
    .pipe(postcss([pxMultiplePlugin]))
    .pipe(gulp.dest(HD_2X_DIR), {
      overwrite: true,
    });
}

const tasks = [
  {
    text: 'Copy Source Code',
    task: copySourceCode,
  },
  {
    text: 'Build Package Script Entry',
    task: buildPackageScriptEntry,
  },
  {
    text: 'Build Component Style Entry',
    task: buildStyleEntry,
  },
  {
    text: 'Build Package Style Entry',
    task: buildPackageStyleEntry,
  },
  {
    text: 'Build Type Declarations',
    task: buildTypeDeclarations,
  },
  {
    text: 'Build ESModule Outputs',
    task: buildESMOutputs,
  },
  {
    text: 'Build CommonJS Outputs',
    task: buildCJSOutputs,
  },
  {
    text: 'Build Bundled Outputs',
    task: buildBundledOutputs,
  },
  {
    text: 'Build 2x resources',
    task: build2xResouces,
  },
];

async function runBuildTasks() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tasks.length; i++) {
    const { task, text } = tasks[i];
    const spinner = ora(text).start();

    try {
      /* eslint-disable no-await-in-loop */
      await task();
      spinner.succeed(text);
    } catch (err) {
      spinner.fail(text);
      console.log(err);
      throw err;
    }
  }

  consola.success('Compile successfully');
}

function watchFileChange() {
  consola.info('Watching file changes...');

  chokidar.watch(SRC_DIR).on('change', async (path) => {
    if (isDemoDir(path) || isTestDir(path)) {
      return;
    }

    const spinner = ora('File changed, start compilation...').start();
    const esPath = path.replace(SRC_DIR, ES_DIR);
    const libPath = path.replace(SRC_DIR, LIB_DIR);

    try {
      await copy(path, esPath);
      await copy(path, libPath);
      await compileFile(esPath);
      await compileFile(libPath);
      await genStyleDepsMap();
      spinner.succeed(`Compiled: ${slimPath(path)}`);
    } catch (err) {
      spinner.fail(`Compile failed: ${path}`);
      console.log(err);
    }
  });
}

export async function build(cmd: { watch?: boolean } = {}) {
  setNodeEnv('production');

  try {
    await clean();
    await runBuildTasks();

    if (cmd.watch) {
      watchFileChange();
    }
  } catch (err) {
    consola.error('Build failed');
    process.exit(1);
  }
}
