module.exports = {
  name: '<%= name %>',
  build: {
    css: {
      preprocessor: '<%= preprocessor %>',
    },
    site: {
      publicPath: '/<%= name %>/',
    },
  },
  site: {
    // TODO 层级读取问题
    defaultLang: 'zh-CN',
    locales: {
      'zh-CN': {
        title: '<%= name %>',
        description: 'React Vant Cli',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
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
    },
  },
};
