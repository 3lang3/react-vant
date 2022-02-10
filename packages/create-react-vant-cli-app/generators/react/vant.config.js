/* eslint-disable no-param-reassign */
module.exports = {
  name: 'react-vant',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: './',
    },
  },
  site: {
    defaultLang: 'zh-CN',
    locales: {
      'zh-CN': {
        title: '<%= name %>',
        description: 'React Vant Cli',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        links: [
          {
            logo: 'https://raw.githubusercontent.com/3lang3/react-vant/main/screenshots/github.svg',
            url: 'https://github.com/3lang3/react-vant',
          },
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              { path: 'home', title: '介绍' },
              { path: 'quickstart', title: '快速上手' },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
            ],
          },
        ],
      },
      'en-US': {
        title: '<%= name %>',
        description: 'Mobile UI Components built on React',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: 'En',
        links: [
          {
            logo: 'https://raw.githubusercontent.com/3lang3/react-vant/main/screenshots/github.svg',
            url: 'https://github.com/3lang3/react-vant',
          },
        ],
        nav: [
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button',
              },
            ],
          },
        ],
      },
    },
  },
};
