import { transform, transformAsync } from '@babel/core';
import chalk from 'chalk';
import { createRequire } from 'module';
import { readFileSync } from 'fs';
import fse from 'fs-extra';
import { replaceExt } from '../common/index.js';
import { consola } from '../common/logger.js';

const { outputFileSync, removeSync } = fse;

function getDefaultJsCompileOpts(type, filePath) {
  const require = createRequire(import.meta.url);
  return {
    filename: filePath,
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          loose: true,
          modules: false,
        },
      ],
      [require.resolve('@babel/preset-typescript')],
      [require.resolve('@babel/preset-react')],
    ],
    plugins: [
      ...(type === 'commonjs'
        ? [
            [
              require.resolve('@babel/plugin-transform-modules-commonjs'),
              {
                lazy: true,
              },
            ],
          ]
        : []),
      require.resolve('../../cjs/babel-transform-less-to-css.cjs'),
    ],
  };
}

interface IBabelOpts {
  file: any;
  type: 'esm' | 'cjs';
}

export function compileJs(options: IBabelOpts) {
  const { file, type } = options;

  consola.log(`Transform to ${type} for ${chalk.yellow(file.path)}`);
  return transform(file.contents, getDefaultJsCompileOpts(type, file.path)).code;
}

export async function compileScript(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (filePath.includes('.d.ts')) {
      resolve();
      return;
    }

    const code = readFileSync(filePath, 'utf-8');
    const type = process.env.BABEL_MODULE;

    transformAsync(code, { filename: filePath })
      .then((result) => {
        if (result) {
          const jsFilePath = replaceExt(filePath, '.js');

          removeSync(filePath);
          outputFileSync(jsFilePath, result.code);
          resolve();
        }
      })
      .catch(reject);
  });
}
