import { ConfigAPI } from '@babel/core';

module.exports = (api?: ConfigAPI) => {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, NODE_ENV, BUILD_TARGET } = process.env;
  const isTest = NODE_ENV === 'test';
  const isProd = NODE_ENV === 'production' && BUILD_TARGET !== 'site';
  const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs',
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          useESModules,
        },
      ],
      isProd && [
        'import',
        {
          libraryName: 'react-vant',
          libraryDirectory: useESModules ? 'es' : 'lib',
          style: true,
        },
        'react-vant',
      ],
    ].filter(Boolean),
  };
};

export default module.exports;
