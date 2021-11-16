module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:prettier/recommended', // 添加 prettier 插件
    'next/core-web-vitals',
  ],
  rules: {
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
};
