# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```js
import { Cell } from 'react-vant';
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `Cell.Group` 搭配使用，`Cell.Group` 可以为 `Cell` 提供上下外边框。

```jsx
<Cell.Group>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</Cell.Group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```jsx
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" label="描述信息" size="large" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```jsx
<Cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```jsx
<Cell value="内容" />
```

### 展示箭头

设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向。

```jsx
<Cell title="单元格" isLink />
<Cell title="单元格" isLink value="内容" />
<Cell title="单元格" isLink arrowDirection="down" value="内容" />
```

### 分组标题

通过 `Cell.Group` 的 `title` 属性可以指定分组标题。

```jsx
<Cell.Group title="分组1">
  <Cell title="单元格" value="内容" />
</Cell.Group>
<Cell.Group title="分组2">
  <Cell title="单元格" value="内容" />
</Cell.Group>
```

### 卡片类型

通过 `Cell.Group` 的 `inset` 属性可以可以展示卡片类型。

```jsx
<Cell.Group inset>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" />
</Cell.Group>
```

### 自定义内容

如以上用法不能满足你的需求，可以来自定义内容。

```jsx
<Cell title="单元格" icon="shop-o">
  <div>自定义内容</div>
</Cell>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```jsx
<Cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值 |
| ------ | ---------------------- | --------- | ------ |
| title  | 分组标题               | _string_  | -      |
| border | 是否显示外边框         | _boolean_ | `true` |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | -      |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _ReactNode_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _ReactNode_ | - |
| extra | 自定义单元格最右侧的额外内容 | _ReactNode_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧图标 | _string\|ReactNode_ | - |
| rightIcon | 自定义右侧按钮，默认为`arrow` | _string\|ReactNode_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon) | _string_ | `van-icon` |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| titleStyle | 左侧标题额外样式 | _string_ | - |
| titleClass | 左侧标题额外类名 | _string_ | - |
| valueClass | 右侧内容额外类名 | _string_ | - |
| labelClass | 描述信息额外类名 | _string_ | - |

### Cell Events

| 事件名  | 说明             | 回调参数       |
| ------- | ---------------- | -------------- |
| onClick | 点击单元格时触发 | _event: Event_ |

### 类型定义

组件导出以下类型定义：

```js
import type { CellArrowDirection } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-cell-font-size | _var(--rv-font-size-md)_ | - |
| --rv-cell-line-height | _24px_ | - |
| --rv-cell-vertical-padding | _10px_ | - |
| --rv-cell-horizontal-padding | _var(--rv-padding-md)_ | - |
| --rv-cell-text-color | _var(--rv-text-color)_ | - |
| --rv-cell-background-color | _var(--rv-white)_ | - |
| --rv-cell-border-color | _var(--rv-border-color)_ | - |
| --rv-cell-active-color | _var(--rv-active-color)_ | - |
| --rv-cell-required-color | _var(--rv-danger-color)_ | - |
| --rv-cell-label-color | _var(--rv-gray-6)_ | - |
| --rv-cell-label-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-cell-label-line-height | _var(--rv-line-height-sm)_ | - |
| --rv-cell-label-margin-top | _var(--rv-padding-base)_ | - |
| --rv-cell-value-color | _var(--rv-gray-6)_ | - |
| --rv-cell-icon-size | _16px_ | - |
| --rv-cell-right-icon-color | _var(--rv-gray-6)_ | - |
| --rv-cell-large-vertical-padding | _var(--rv-padding-sm)_ | - |
| --rv-cell-large-title-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-cell-large-label-font-size | _var(--rv-font-size-md)_ | - |
| --rv-cell-group-background-color | _var(--rv-white)_ | - |
| --rv-cell-group-title-color | _var(--rv-gray-6)_ | - |
| --rv-cell-group-title-padding | _var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs)_ | - |
| --rv-cell-group-title-font-size | _var(--rv-font-size-md)_ | - |
| --rv-cell-group-title-line-height | _16px_ | - |
| --rv-cell-group-inset-padding | _0 var(--rv-padding-md)_ | - |
| --rv-cell-group-inset-border-radius | _var(--rv-border-radius-lg)_ | - |
| --rv-cell-group-inset-title-padding | _var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs) var(--rv-padding-xl)_ | - |
