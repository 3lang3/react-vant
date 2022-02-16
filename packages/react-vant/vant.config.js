/* eslint-disable no-param-reassign */
module.exports = {
  name: 'react-vant',
  build: { css: { preprocessor: 'less' }, site: { publicPath: './' } },
  site: {
    defaultLang: 'zh-CN',
    versions: [{ label: 'v2', link: 'https://3lang3.github.io/react-vant' }],
    locales: {
      'zh-CN': {
        title: 'React Vant',
        description: '轻量、可靠的移动端 React 组件库',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: '中文',
        links: [
          {
            logo: 'https://user-images.githubusercontent.com/7098719/140293692-8c3c109d-ae11-4038-82b2-074b52aca315.png',
            url: 'https://github.com/mallfoundry/taroify/',
            alt: 'taro版本',
          },
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
              { path: 'advanced-usage', title: '进阶用法' },
              { path: 'changelog', title: '更新日志' },
              { path: 'contribution', title: '贡献指南' },
            ],
          },
          { title: '布局组件', items: [{ path: 'flex', title: 'Flex 布局' }] },
          {
            title: '基础组件',
            items: [
              { path: 'button', title: 'Button 按钮' },
              { path: 'cell', title: 'Cell 单元格' },
              { path: 'config-provider', title: 'ConfigProvider 全局配置' },
              { path: 'typography', title: 'Typography 文本' },
              { path: 'icon', title: 'Icon 图标' },
              { path: 'image', title: 'Image 图片' },
              { path: 'popup', title: 'Popup 弹出层' },
              { path: 'styles', title: 'Style 内置样式' },
              { path: 'toast', title: 'Toast 轻提示' },
            ],
          },
          {
            title: '表单组件',
            items: [
              { path: 'calendar', title: 'Calendar 日历' },
              { path: 'cascader', title: 'Cascader 级联选择' },
              { path: 'checkbox', title: 'Checkbox 复选框' },
              { path: 'datetime-picker', title: 'DatetimePicker 时间选择' },
              { path: 'field', title: 'Field 输入框' },
              { path: 'form', title: 'Form 表单' },
              { path: 'number-keyboard', title: 'NumberKeyboard 数字键盘' },
              { path: 'password-input', title: 'PasswordInput 密码输入框' },
              { path: 'picker', title: 'Picker 选择器' },
              { path: 'radio', title: 'Radio 单选框' },
              { path: 'rate', title: 'Rate 评分' },
              { path: 'search', title: 'Search 搜索' },
              { path: 'slider', title: 'Slider 滑块' },
              { path: 'stepper', title: 'Stepper 步进器' },
              { path: 'switch', title: 'Switch 开关' },
              { path: 'uploader', title: 'Uploader 文件上传' },
            ],
          },
          {
            title: '反馈组件',
            items: [
              { path: 'action-sheet', title: 'ActionSheet 动作面板' },
              { path: 'dialog', title: 'Dialog 弹出框' },
              { path: 'dropdown-menu', title: 'DropdownMenu 下拉菜单' },
              { path: 'loading', title: 'Loading 加载' },
              { path: 'notify', title: 'Notify 消息通知' },
              { path: 'overlay', title: 'Overlay 遮罩层' },
              { path: 'pull-refresh', title: 'PullRefresh 下拉刷新' },
              { path: 'share-sheet', title: 'ShareSheet 分享面板' },
              { path: 'swipe-cell', title: 'SwipeCell 滑动单元格' },
            ],
          },
          {
            title: '展示组件',
            items: [
              { path: 'badge', title: 'Badge 徽标' },
              { path: 'circle', title: 'Circle 环形进度条' },
              { path: 'collapse', title: 'Collapse 折叠面板' },
              { path: 'count-down', title: 'CountDown 倒计时' },
              { path: 'divider', title: 'Divider 分割线' },
              { path: 'empty', title: 'Empty 空状态' },
              { path: 'image-preview', title: 'ImagePreview 图片预览' },
              { path: 'lazyload', title: 'Lazyload 懒加载' },
              { path: 'list', title: 'List 列表' },
              { path: 'skeleton', title: 'Skeleton 骨架屏' },
              { path: 'steps', title: 'Steps 步骤条' },
              { path: 'notice-bar', title: 'NoticeBar 通知栏' },
              { path: 'popover', title: 'Popover 气泡弹出框' },
              { path: 'progress', title: 'Progress 进度条' },
              { path: 'sticky', title: 'Sticky 粘性布局' },
              { path: 'swiper', title: 'Swiper 轮播' },
              { path: 'tag', title: 'Tag 标签' },
            ],
          },
          {
            title: '导航组件',
            items: [
              { path: 'action-bar', title: 'ActionBar 动作栏' },
              { path: 'grid', title: 'Grid 宫格' },
              { path: 'index-bar', title: 'IndexBar 索引栏' },
              { path: 'nav-bar', title: 'NavBar 导航栏' },
              { path: 'pagination', title: 'Pagination 分页' },
              { path: 'sidebar', title: 'Sidebar 侧边导航' },
              { path: 'tabs', title: 'Tabs 标签页' },
              { path: 'tabbar', title: 'Tabbar 标签栏' },
            ],
          },
          {
            title: '业务组件',
            items: [
              { path: 'area', title: 'Area 省市区选择' },
              { path: 'card', title: 'Card 卡片' },
              { path: 'coupon-list', title: 'Coupon 优惠券' },
              { path: 'submit-bar', title: 'SubmitBar 提交订单栏' },
              { path: 'sku', title: 'Sku 商品规格' },
            ],
          },
          {
            title: 'Hooks (beta)',
            items: [
              {
                path: 'use-intro',
                title: '介绍',
              },
              {
                path: 'use-click-away',
                title: 'useClickAway',
              },
              {
                path: 'use-count-down',
                title: 'useCountDown',
              },
              {
                path: 'use-event-listener',
                title: 'useEventListener',
              },
              {
                path: 'use-form-smart',
                title: 'useFormSmart',
              },
              {
                path: 'use-in-viewport',
                title: 'useInViewport',
              },
              {
                path: 'use-mount',
                title: 'useMount',
              },
              {
                path: 'use-page-visibility',
                title: 'usePageVisibility',
              },
              {
                path: 'use-set-state',
                title: 'useSetState',
              },
              {
                path: 'use-scroll-parent',
                title: 'useScrollParent',
              },
              {
                path: 'use-touch',
                title: 'useTouch',
              },
              {
                path: 'use-update-effect',
                title: 'useUpdateEffect',
              },
              {
                path: 'use-window-size',
                title: 'useWindowSize',
              },
            ],
          },
          {
            title: '废弃',
            items: [
              { path: 'swipe', title: 'Swipe 轮播' },
              { path: 'theme', title: '定制主题' },
            ],
          },
        ],
      },
      'en-US': {
        title: 'react-vant',
        description: 'Mobile UI Components built on React',
        logo: 'https://img01.yzcdn.cn/vant/logo.png',
        langLabel: 'En',
        links: [
          {
            logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            url: 'https://github.com/3lang3/react-vant',
          },
        ],
        nav: [
          {
            title: 'Essentials',
            items: [
              { path: 'home', title: 'Introduction' },
              { path: 'quickstart', title: 'Quickstart' },
              { path: 'theme', title: 'Custom Theme' },
            ],
          },
          { title: 'Basic Components', items: [{ path: 'button', title: 'Button' }] },
        ],
      },
    },
  },
};
