module.exports = function (api, options) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, NODE_ENV } = process.env;
  const isTest = NODE_ENV === 'test';
  const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: useESModules ? false : 'commonjs',
          loose: options.loose,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      require.resolve('@babel/preset-react'),
    ],
    plugins: [
      require.resolve('babel-plugin-transform-async-to-promises'),
      require.resolve('./babel-transform-less-to-css.cjs'),
    ],
  };
};
