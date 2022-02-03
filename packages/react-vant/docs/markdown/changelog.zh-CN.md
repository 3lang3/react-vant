# 更新日志

### 介绍

React Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### 1.4.12

`2022-01-21`

**Bug Fixes**

- Typography: `ellipsis` 属性在 Button 中失效的问题 [#305](https://github.com/3lang3/react-vant/issues/305) ([#306](https://github.com/3lang3/react-vant/issues/306)) ([1507945](https://github.com/3lang3/react-vant/commit/150794543b10423488ef039a40c460f07b91a15e))

**Features**

- Tabs: 新增 `align` 属性 ([8012a3d](https://github.com/3lang3/react-vant/commit/8012a3df3eada86cfff95fbfcec6e95ee4652267)) [#307](https://github.com/3lang3/react-vant/issues/307)

### 1.4.11

`2021-12-30`

**Bug Fixes**

- 移除 `React.createElement` 调用, 解决 vite 构建差异 ([3dc95cf](https://github.com/3lang3/react-vant/commit/3dc95cf74e430860e89882d3ecddb4949e4a20f7))
- Stepper: 修复 value 重置后计算错误的问题 ([2f8c4df](https://github.com/3lang3/react-vant/commit/2f8c4df31c1660255bf3a87e7e37c096b60c29cd))

### 1.4.10

`2021-12-24`

**Bug Fixes**

- Checkbox: `Checkbox.Group` children 为非预期类型时报错的问题 ([2a7b619](https://github.com/3lang3/react-vant/commit/2a7b619035168d5ca4742d982ba63787d0a49a72))
- IndexBar: 被 Popup 组件包裹时在 ios 浏览器 `stickyOffsetTop` 计算错误的问题 ([35379d6](https://github.com/3lang3/react-vant/commit/35379d6afa5217904fa07565510ea1789294d8db))

### 1.4.9

`2021-12-17`

**Bug Fixes**

- Stepper: 值为 0 时显示不正确的问题 ([#283](https://github.com/3lang3/react-vant/issues/283))
- IndexBar: 点击 `Anchor` 时 `stickyOffsetTop` 值计算错误的问题 ([#284](https://github.com/3lang3/react-vant/issues/288))
- Overlay: 修复 `lockScroll` 在 `ios` 下失效的问题 ([09a8a71](https://github.com/3lang3/react-vant/commit/09a8a715ce7699facbfadc50ef50dc645355ea85)) [#284](https://github.com/3lang3/react-vant/issues/284)
- Overlay: 移除多余的`onTouchMove`事件 ([64c0dea](https://github.com/3lang3/react-vant/commit/64c0dea6914beef59ac91867dad7c9f6c71c94a2))

**Features**

- Stepper: `onMinus` `onPlus` 事件新增`event`和`value`参数 ([#285](https://github.com/3lang3/react-vant/pull/285))

### 1.4.8

`2021-12-14`

**Bug Fixes**

- Calendar: 日期`onClick`事件修复 ([2371086](https://github.com/3lang3/react-vant/commit/2371086aa0c4671d48058f6e6cc3cc45a122ec34))
- Field: 修复清除按钮在自定义的情况不垂直居中的问题 ([8aa7b82](https://github.com/3lang3/react-vant/commit/8aa7b82f1e026a0b5ee9e9ee75bc5ae5b4cb5c46))
- PasswordInput: onFocus 事件修复 ([8c021e7](https://github.com/3lang3/react-vant/commit/8c021e73edc9e54bae8846842f1dd94663a107df))
- Field: `onFocus`,`onBlur`事件参数类型修复 ([bb5c689](https://github.com/3lang3/react-vant/commit/bb5c68959eeaefc8e9a385f85b3612a0b03a1345))

**Features**

- PasswordInput: 新增 `onBlur` 事件 ([83072f9](https://github.com/3lang3/react-vant/commit/83072f9fab75ed11b0101f13f59c4ee09cd159f7))
- Search: 新增`onBlur`, `onFocus`事件。 ([4358a9d](https://github.com/3lang3/react-vant/commit/4358a9df70a65db6be600776fd89b2232bc95d6f))

### 1.4.7

`2021-12-08`

**Bug Fixes**

- PasswordInput: 修复不传`onFocus`事件导致触发报错的问题 ([055fec1](https://github.com/3lang3/react-vant/commit/055fec1691d6941896f77e8af870e9e36361761c))

**Features**

- Card: 新增`decimal`允许控制价格小数是否显示 ([5383526](https://github.com/3lang3/react-vant/commit/538352646f9b0437b4e143e1490f55bd40ca6313))

### 1.4.6

`2021-12-07`

**Bug Fixes**

- PasswordInput: 修复 onSubmit 执行问题以及优化事件判断 ([e985208](https://github.com/3lang3/react-vant/commit/e985208483d83425e14271db3e90da12a8c2680a))

**Features**

- PasswordInput: 密码输入框支持单个 Item 自定义 border-radius ([ff04288](https://github.com/3lang3/react-vant/commit/ff04288af2bacf999ed23758314b97f2c9c0947c))

### 1.4.5

`2021-12-6`

**Bug Fixes**

- Cell: 修复 `arrowDirection` 为 `right` 时向右箭头消失的问题 [#268](https://github.com/3lang3/react-vant/issues/268) ([0e12b8c](https://github.com/3lang3/react-vant/commit/0e12b8c471e224f72bc7464f6e1d55378a81f920))
- Image: 修复 `style` 未生效的问题 [#261](https://github.com/3lang3/react-vant/issues/261) ([cb12462](https://github.com/3lang3/react-vant/commit/cb124629415e5d641e094f07672a26c9dc226b68))

**Features**

- Calendar: 新增`weekdays`和`formatMonthTitle`支持星期文案和月标题自定义 [#263](https://github.com/3lang3/react-vant/issues/263) ([88a7623](https://github.com/3lang3/react-vant/commit/88a76237292ebbe57dd4dd655f6f0646c4016612))
- Field: 支持自定义 placeholder 样式的字体大小 ([46ca35e](https://github.com/3lang3/react-vant/commit/46ca35e7af66859fb9184972f43a4989bf6c3503))
- Steps: `Steps.Item`各个状态 icon 支持自定义 [#274](https://github.com/3lang3/react-vant/issues/274) ([b425afa](https://github.com/3lang3/react-vant/commit/b425afa78f7547f4b0b5d993805e398e4998a9ea))

### 1.4.4

`2021-11-30`

**Bug Fixes**

- Area: 修复无法选中正确值的问题 ([0526e69](https://github.com/3lang3/react-vant/commit/0526e6911ea0eb9dddc145bae3ef62636f463fd0))
- Badge: 修复无法设置 X 轴正数的问题 ([a14401a](https://github.com/3lang3/react-vant/commit/a14401a4e3b64a8d1bac1ab5eee604eca15086de))
- Popup: `visible`默认为`true`时, zIndex 自定义失败的问题 ([5b85978](https://github.com/3lang3/react-vant/commit/5b85978597e313d8b47760a8f829a4c26f649914))
- Skeleton: 数量为 1 时不处理宽度为 60% ([44d0dd2](https://github.com/3lang3/react-vant/commit/44d0dd212b289fa447211a233539fee2d69afff0))

**Performance**

- useRefState: 优化内部 ref 更新时机 ([0526e69](https://github.com/3lang3/react-vant/commit/0526e6911ea0eb9dddc145bae3ef62636f463fd0))

### 1.4.3

`2021-11-25`

**Bug Fixes**

- Datetimepicker: type 为`time`时选择后会回到最初的 value 值 [#256](https://github.com/3lang3/react-vant/issues/256) ([e72bfd7](https://github.com/3lang3/react-vant/commit/e72bfd7a69d312f36451a80b121cda8267742e4b))
- Badge

**Performance**

- DatePicker: 优化 columns 更新时的动画效果 ([225b67c](https://github.com/3lang3/react-vant/commit/225b67c34b42c643e4a856d385f7e63f65e1ed13))
- Picker: 使用`raf`代替部分`setTimeout` ([022709a](https://github.com/3lang3/react-vant/commit/022709a14913d2579c20018d817abe08bb094cbb))

**Types**

- Badge: 更新`offset`类型 ([d468e85](https://github.com/3lang3/react-vant/commit/d468e85ccbdba2ac44ffb21389edbe3eebdc35a2))

### 1.4.2

`2021-11-23`

**Features**

- Field: 新增 css 变量 `field-input-background-color` ([9fe0e87](https://github.com/3lang3/react-vant/commit/9fe0e8719485100060f2c3e80d1dca52dcf6e07a))

**Bug Fixes**

- Overlay: 错误执行`unlockScroll`的问题 ([554a2ad](https://github.com/3lang3/react-vant/commit/554a2ad6ec5d68a68f5f792fde73a581298a3450)) [#252](https://github.com/3lang3/react-vant/issues/252)
- useDountDown: `current`引用非最新值导致`reset`行为错误的问题 ([efeb6f8](https://github.com/3lang3/react-vant/commit/efeb6f899ec45990a871a0f3a0686969c39a6716))

### 1.4.1

`2021-11-18`

**Features**

- 新增 useFormSmart 导出 ([db2f5ef](https://github.com/3lang3/react-vant/commit/db2f5ef36f45fa3f74ea83128df22931f1a5d3c3))

**Bug Fixes**

- hooks: 修复 hooks 导出不兼容 babel-plugin-import 的问题 ([bb81503](https://github.com/3lang3/react-vant/commit/bb81503e9f8765a482548bf4c2844fbeda787923))

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
