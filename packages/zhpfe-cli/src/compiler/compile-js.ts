import { transform } from '@babel/core';
import chalk from 'chalk';

import { consola } from '../common/logger';

interface IBabelOpts {
  file: any;
  type: 'esm' | 'cjs';
}

export function compileJs(options: IBabelOpts) {
  const { file, type } = options;

  consola.log(`Transform to ${type} for ${chalk.yellow(file.path)}`);
  return transform(file.contents, {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          targets: { browsers: ['last 2 versions', 'IE 10'] },
          modules: type === 'esm' ? false : 'auto',
        },
      ],
      [require.resolve('@babel/preset-typescript')],
      [require.resolve('@babel/preset-react')],
    ],
    plugins: [
      ...(type === 'cjs'
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
          useESModules: type === 'esm',
          version: require('@babel/runtime/package.json').version,
        },
      ],
    ],
    filename: file.path,
  }).code;
}
