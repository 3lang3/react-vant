import { transform, transformAsync } from '@babel/core';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { outputFileSync, removeSync } from 'fs-extra';
import { replaceExt } from '../common';

import { consola } from '../common/logger';

function getDefaultJsCompileOpts(type, filePath) {
  return {
    filename: filePath,
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          targets: { browsers: ['last 2 versions', 'IE 10'] },
          modules: type === 'esmodule' ? false : 'auto',
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
      [
        require.resolve('@babel/plugin-transform-runtime'),
        {
          useESModules: type === 'esmodule',
          version: require('@babel/runtime/package.json').version,
        },
      ],
    ],
  }
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

export async function compileJsPath(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (filePath.includes('.d.ts')) {
      resolve();
      return;
    }

    const code = readFileSync(filePath, 'utf-8');
    const type = process.env.BABEL_MODULE;

    transformAsync(code, getDefaultJsCompileOpts(type, filePath))
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
