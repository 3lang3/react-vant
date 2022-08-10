# Grid 宫格

## 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](/guide/advanced-usage#zu-jian-zhu-ce)。

```js
import { Grid } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

<code title="基础用法" src="./demo/base.tsx" />

### 自定义列数

默认一行展示四个格子，可以通过 `columnNum` 自定义列数。

<code title="自定义列数" src="./demo/column.tsx" />

### 自定义内容

通过插槽可以自定义格子展示的内容。

<code title="自定义内容" src="./demo/children.tsx" />

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

<code title="正方形格子" src="./demo/square.tsx" />

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

<code title="格子间距" src="./demo/gutter.tsx" />

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

<code title="内容横排" src="./demo/direction.tsx" />

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

<code title="徽标提示" src="./demo/badge.tsx" />

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columnNum | 列数 | _number_ | `4` |
| iconSize | 图标大小，默认单位为`px` | _number \| string_ | `28px` |
| gutter | 格子之间的间距，默认单位为`px` | _number_ | `0` |
| border | 是否显示边框 | _boolean_ | `true` |
| center | 是否将格子内容居中显示 | _boolean_ | `true` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | `vertical` |
| reverse | 是否调换图标和文本的位置 | _boolean_ | `false` |
| className | 类名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | 图标 | _React.ReactNode_ | - |
| iconColor | 图标颜色，等同于 Icon 组件的 [color 属性](/components/icon#props) | _string_ | - |
| badge | 图标右上角徽标的内容 | _BadgeProps_ | - |
| className | 类名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |
| contentClassName | 内容类名 | _string_ | - |
| contentStyle | 内容 style | _React.CSSProperties_ | - |

### GridItem Events

| 事件名  | 说明           | 回调参数            |
| ------- | -------------- | ------------------- |
| onClick | 点击格子时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { GridDirection } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-grid-item-content-padding | _var(--rv-padding-md) var(--rv-padding-xs)_ | - |
| --rv-grid-item-content-background-color | _var(--rv-white)_ | - |
| --rv-grid-item-content-active-color | _var(--rv-active-color)_ | - |
| --rv-grid-item-icon-size | _28px_ | - |
| --rv-grid-item-text-color | _var(--rv-gray-7)_ | - |
| --rv-grid-item-text-font-size | _var(--rv-font-size-sm)_ | - |
