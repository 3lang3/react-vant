---
fluid: true
slug: false
simulator:
  compact: false
  style:
    background: '#fff'
---

# Icon 图标

## 介绍

语义化的矢量图形。使用图标组件，你需要安装 `@react-vant/icons` 图标组件包：

```bash
npm install --save @react-vant/icons
# or
yarn add @react-vant/icons
```

然后从这个包中引入你所需要的图标即可：

```jsx | pure
import { Arrow } from '@react-vant/icons';
```

> 主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

## 图标列表

<code src="./demo/index.tsx" inline />

## 代码演示

### 基础使用

<code title="基础使用" src="./demo/base.tsx" />

### 徽标提示

结合`badge`组件可以实现带徽标的 Icon。

<code title="徽标提示" src="./demo/badge.tsx" />

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

<code title="图标颜色" src="./demo/color.tsx" />

### 图标旋转

`Icon` 的 `spin` 属性用来设置图标旋转，默认单位为 `false`。

<code title="图标旋转" src="./demo/rotate.tsx" />

### 自定义图标

通过方法`createFromIconfontCN` 引入[iconfont.cn](https://www.iconfont.cn)上的 js 文件

<code title="自定义图标" src="./demo/custom.tsx" />

## API

### 方法

| 方法名               | 说明             | 参数                 | 返回值      |
| -------------------- | ---------------- | -------------------- | ----------- |
| createFromIconfontCN | 自定义 font 图标 | `string \| string[]` | _Icon 组件_ |

### Props

| 参数     | 说明                      | 类型               | 默认值    |
| -------- | ------------------------- | ------------------ | --------- |
| color    | svg 的 `color` 属性       | _string_           | `inherit` |
| fontSize | 图标大小，如 `20px` `2em` | _number \| string_ | `inherit` |
| spin     | 是否开启旋转动画          | _boolean_          | `false`   |
| rotate   | 图标旋转角度              | _number_           | `false`   |

### Events

| 事件名  | 说明           | 回调参数       |
| ------- | -------------- | -------------- |
| onClick | 点击图标时触发 | _event: Event_ |
