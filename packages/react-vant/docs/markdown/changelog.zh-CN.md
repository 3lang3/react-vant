# 更新日志

### 介绍

React Vant 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### v1.3.0

`2021-11-03`

**New Component**

- 新增 [Swiper](#/zh-CN/swiper) 轮播组件，用于替换 Swipe 组件 [#127](https://github.com/3lang3/react-vant/pull/127)

**Feature**

- Sidebar: 新增 Item `children`支持，提供自定义内容渲染 [#129](https://github.com/3lang3/react-vant/issues/129)
- ImagePreview: 新增缩放功能 [#3339d78](https://github.com/3lang3/react-vant/commit/3339d78385c3f717ec63f8c14d3f7e8194e830ad)
- Swipe: 标记为废弃
- 主题定制: 标记为废弃

**Bug Fixes**

- Popup: 外部销毁时没有 unLockScroll 的问题 [#133](https://github.com/3lang3/react-vant/issues/133)
