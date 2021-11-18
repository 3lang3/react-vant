# 更新日志

### 介绍

React Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### v1.4.0

`2021-11-18`

**Features**

- Hooks 导出 ([7f109ab](https://github.com/3lang3/react-vant/commit/7f109abde5c76988ba90871f43d135c39fa8725b))
  - useClickAway
  - useCountDown
  - useEventListener
  - useInViewport
  - useMount
  - usePageVisibility
  - useUpdateEffect
  - useSetState
  - useTouch
  - useWindowSize

**Bug Fixes**

- Picker: 修复在惯性滚动没结束的情况下就点击确定无法选中预期的值的问题 [#240](https://github.com/3lang3/react-vant/issues/240) ([e112b8d](https://github.com/3lang3/react-vant/commit/e112b8d85e15f4313eaddb81910bb4715f10ccea))

**Performance**

- 优化 hooks 结构 ([73a979f](https://github.com/3lang3/react-vant/commit/73a979f4f55f40237296c4d1799900ff9f29a081))

### v1.3.8

`2021-11-17`

**Features**

- Swiper: 新增`slideSize` `trackOffset` `stuckAtBoundary`属性 ([c6b5a34](https://github.com/3lang3/react-vant/commit/c6b5a348d54919d56affd86a7f7ef6e99d3e3b5a))

**Bug Fixes**

- Swiper: 修复只有一个 Swiper.Item 时`loop`行为错乱的问题 ([d9cbcc3](https://github.com/3lang3/react-vant/commit/d9cbcc3daab158ad40dcbb59d1bc572a48c75d48))
- Field: 修复 Props 定义错误的问题 [#155](https://github.com/3lang3/react-vant/issues/155) ([4977ef4](https://github.com/3lang3/react-vant/commit/4977ef4cf598e1d5af5ab8a726e98e3850b807ec))

**Performance**

- 使用`clsx`替换`classnames`减小包尺寸 ([f20b148](https://github.com/3lang3/react-vant/commit/f20b14891481880e52cfd8bc1539df17a970e912))

### v1.3.7

`2021-11-15`

**Bug Fixes**

- Cell.Group: 修复 style 和 className 作用范围不包括 title 的问题 [#153](https://github.com/3lang3/react-vant/issues/153) ([5549afa](https://github.com/3lang3/react-vant/commit/5549afac3ffe420c4bff0e95bc3c06ef02c39b4c))

### v1.3.6

`2021-11-11`

**Bug Fixes**

- Field: 修复`disabled`时`onClickInput`失效的问题 [#149](https://github.com/3lang3/react-vant/issues/149) ([2d681ce](https://github.com/3lang3/react-vant/commit/2d681cea253323eb21dfda2a3086a068af1e647f))

- 修复 package.json 中`sideEffect` 值错误，导致打包产物无 css 文件问题 [#145](https://github.com/3lang3/react-vant/issues/145) ([37a1bdb](https://github.com/3lang3/react-vant/commit/37a1bdb33b93b67a3d4e9e3baf8faa0ae2347368))

### v1.3.5

`2021-11-09`

**Bug Fixes**

- DropdownMenu: 已经选中的状态下再次点击不会收起 [#146](https://github.com/3lang3/react-vant/issues/146) ([8bd349b](https://github.com/3lang3/react-vant/commit/8bd349b1c2bba31dcb51d8c55a464580194b8df2))
- DropdownMenu: 默认值 [#146](https://github.com/3lang3/react-vant/issues/146) ([2d95b7c](https://github.com/3lang3/react-vant/commit/2d95b7cdc7e2ca21376c7930acb171cf47f21a03))
- useRefState: 移除 useLayoutEffect 兼容 ssr [#144](https://github.com/3lang3/react-vant/issues/144) ([91d1f36](https://github.com/3lang3/react-vant/commit/91d1f36dfeed59cf650994215024072e4d83fa9d))

**Features**

- Cell: 修复`Cell.Group`没有挂在`style`和`className`的问题 [#147](https://github.com/3lang3/react-vant/issues/147) ([46130b1](https://github.com/3lang3/react-vant/commit/46130b1e0351bf227530adcf0eee33a1b2efacda))
- Swiper: 手势滑动同方向无法正常滚动的问题 ([6a0b407](https://github.com/3lang3/react-vant/commit/6a0b407f7504d49db28ec399014916b06b8daf13))

### v1.3.4

`2021-11-05`

**Bug Fixes**

- 移除 package.json 的`sideEffects`修复，打包忽略样式文件的 bug ([099712d](https://github.com/3lang3/react-vant/commit/099712da6cd150f6f4d3c1b17b64112575d7fc02))
- Typography: `type`为`light`时颜色丢失的问题 ([2f47ddc](https://github.com/3lang3/react-vant/commit/2f47ddcdbdae4d2fcd46afc8e4794bcfe51a124f))

### v1.3.3

`2021-11-04`

**Bug Fixes**

- package.json 新增 sideEffect 支持 tree-sharking [#145](https://github.com/3lang3/react-vant/issues/145) ([31a43ae](https://github.com/3lang3/react-vant/commit/31a43ae6352efd4b1ee03377eabd5195ae806fdb))

### v1.3.2

`2021-11-04`

**Bug Fixes**

- DropdownMenu: className 错误 ([dfb4dd8](https://github.com/3lang3/react-vant/commit/dfb4dd8a4b421476da13605e7365ddea95158e17))

### v1.3.1

`2021-11-04`

**Features**

- 新增`useUnmountedRef`钩子，避免因组件卸载后更新状态而导致的内存泄漏 ([75e0b2c](https://github.com/3lang3/react-vant/commit/75e0b2cba68cf1c539c588e6a984454b8c9a2b66))

**Bug Fixes**

- List: 修复 demo 页面在卸载后报错的问题 [#143](https://github.com/3lang3/react-vant/issues/143) ([d1eee8a](https://github.com/3lang3/react-vant/commit/d1eee8aaeeec431ea5362167cddd8906d7c677b7))

- ConfigProvider: 优化`themeVars`使用体验 [#138](https://github.com/3lang3/react-vant/issues/138) ([f771c7b](https://github.com/3lang3/react-vant/commit/f771c7b211bae6dd5b6447cc323bd07545d4101e))
- ConfigProvider: `prefixCls` 矫正 ([083f3b8](https://github.com/3lang3/react-vant/commit/083f3b83ff0328a4eb5d4b639e6aee77702430e6))
- DropdownMenu: 文档勘误 [#137](https://github.com/3lang3/react-vant/issues/137) ([0a34b82](https://github.com/3lang3/react-vant/commit/0a34b82ac258a5819fff12d905a6283bbcd58a90))
- DropdownMenu: 修复 `style`和`className` 失效的问题 ([1d7d430](https://github.com/3lang3/react-vant/commit/1d7d430947099431d9b4a68241783be1851528f3)) [#140](https://github.com/3lang3/react-vant/issues/140)
- Overlay: 修复背景不能禁止滚动 [#139](https://github.com/3lang3/react-vant/issues/139) ([3f36388](https://github.com/3lang3/react-vant/commit/3f36388c4b7fbacf0a862a8b832b449826a35eb8))
- Sidebar: 修复默认值问题 ([1aa5dd6](https://github.com/3lang3/react-vant/commit/1aa5dd608c6de8598d30dce24939f8dd85458bed)), closes [#135](https://github.com/3lang3/react-vant/issues/135)

### [v1.3.0](https://github.com/3lang3/react-vant/compare/v0.5.10...v1.3.0)

`2021-11-03`

**New Component**

- 新增 [Swiper](#/zh-CN/swiper) 轮播组件，用于替换 Swipe 组件 [#127](https://github.com/3lang3/react-vant/pull/127)

**Features**

- Sidebar: 新增 Item `children`支持，提供自定义内容渲染 [#129](https://github.com/3lang3/react-vant/issues/129)
- ImagePreview: 新增缩放功能 [#3339d78](https://github.com/3lang3/react-vant/commit/3339d78385c3f717ec63f8c14d3f7e8194e830ad)
- Swipe: 标记为废弃
- 主题定制: 标记为废弃

**Bug Fixes**

- Popup: 外部销毁时没有 unLockScroll 的问题 [#133](https://github.com/3lang3/react-vant/issues/133)
