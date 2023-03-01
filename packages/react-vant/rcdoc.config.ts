import { defineConfig } from '@rcdoc/cli'

export default defineConfig({
  title: 'react vant',
  description: '轻量、可靠的移动端 React 组件库',
  logo: '/logo.svg',
  locales: [
    ['zh', '🇨🇳 中文'],
    ['en', '🇺🇸 English'],
  ],
  navs: {
    zh: [
      {
        title: '首页',
        path: '/',
        index: true,
      },
      {
        title: '文档',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: 'Hooks',
        path: '/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/youzan/vant',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
    en: [
      {
        title: 'Home',
        path: '/en',
        index: true,
      },
      {
        title: 'Guide',
        path: '/en/guide',
      },
      {
        title: 'Components',
        path: '/en/components',
      },
      {
        title: 'Hooks',
        path: '/en/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/ant-design/ant-design',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
  },
  menus: {
    '/guide': [
      {
        children: [
          '/guide/about',
          '/guide/quickstart',
          '/guide/migrate',
          '/guide/theme',
          '/guide/advanced-usage',
        ],
      },
    ],
    '/components': [
      {
        title: '布局组件',
        children: ['/components/flex', '/components/space'],
      },
      {
        title: '基础组件',
        children: [
          '/components/button',
          '/components/cell',
          '/components/config-provider',
          '/components/typography',
          '/components/icon',
          '/components/image',
          '/components/popup',
          '/components/styles',
          '/components/toast',
        ],
      },
      {
        title: '表单组件',
        children: [
          '/components/calendar',
          '/components/cascader',
          '/components/checkbox',
          '/components/datetime-picker',
          '/components/form',
          '/components/input',
          '/components/number-keyboard',
          '/components/password-input',
          '/components/picker',
          '/components/radio',
          '/components/rate',
          '/components/search',
          '/components/selector',
          '/components/slider',
          '/components/stepper',
          '/components/switch',
          '/components/uploader',
        ],
      },
      {
        title: '反馈组件',
        children: [
          '/components/action-sheet',
          '/components/dialog',
          '/components/dropdown-menu',
          '/components/loading',
          '/components/notify',
          '/components/overlay',
          '/components/pull-refresh',
          '/components/share-sheet',
          '/components/swipe-cell',
        ],
      },
      {
        title: '展示组件',
        children: [
          '/components/badge',
          '/components/card',
          '/components/circle',
          '/components/collapse',
          '/components/count-down',
          '/components/divider',
          '/components/empty',
          '/components/floating-ball',
          '/components/field',
          '/components/image-preview',
          '/components/lazyload',
          '/components/list',
          '/components/skeleton',
          '/components/steps',
          '/components/notice-bar',
          '/components/popover',
          '/components/progress',
          '/components/sticky',
          '/components/swiper',
          '/components/tag',
          '/components/water-mark',
          '/components/floating-panel',
        ],
      },
      {
        title: '导航组件',
        children: [
          '/components/action-bar',
          '/components/grid',
          '/components/index-bar',
          '/components/nav-bar',
          '/components/pagination',
          '/components/sidebar',
          '/components/tabs',
          '/components/tabbar',
        ],
      },
      {
        title: '业务组件',
        children: [
          '/components/area',
          '/components/product-card',
          '/components/coupon-list',
          '/components/submit-bar',
          '/components/sku',
        ],
      },
    ],
    '/hooks': [
      {
        children: ['/hooks/intro'],
      },
    ],
  },
  site: {
    injectComponentCss: false,
    favicon: '/favicon.png',
    github: 'https://github.com/3lang3/react-vant',
    versions: [
      { title: 'v1', path: 'https://react-vant-v1.3lang.dev' },
      { title: 'v2 alpha', path: 'https://react-vant-v2.surge.sh' },
    ],
    themeConfig: {
      simulator: {
        include: ['/components', '/en/components'],
        compact: true,
      },
    },
    // algolia: {
    //   appId: 'XTQTEX7VE6',
    //   apiKey: 'ce7bcb03b0899b14a9198b12a717f7c4',
    //   indexName: 'react-vant',
    // },
    sitemap: {
      hostname: 'https://react-vant.3lang.dev',
    },
  },
  resolve: {
    stackblitz: {
      extra: 'import "react-vant/lib/index.css";',
    },
  },
  build: {
    cjs: {
      dist: 'lib',
    },
    entry: './src/components',
    bundleDir: 'bundle',
    style: './style/index.less',
  },
  vite: {
    optimizeDeps: {
      include: [
        '@react-vant/icons',
        'react-transition-group',
        'rc-field-form',
        '@react-spring/web',
        '@use-gesture/react',
      ],
    },
    server: {
      host: true,
    },
  },
})
