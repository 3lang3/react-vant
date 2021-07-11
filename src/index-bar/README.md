# IndexBar 索引栏

### 引入

```js
import { IndexBar } from '@rokku/design';
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```jsx
<IndexBar>
  <IndexBar.Anchor index="A" />
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />

  <IndexBar.Anchor index="B" />
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />

  ...
</IndexBar>
```

### 自定义索引列表

可以通过 `indexList` 属性自定义展示的索引字符列表。

```jsx
<IndexBar indexList={indexList}>
  <IndexBar.Anchor index="1">标题1</IndexBar.Anchor>
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />

  <IndexBar.Anchor index="2">标题2</IndexBar.Anchor>
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />

  ...
</IndexBar>
```

```js
const indexList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indexList | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| highlightColor | 索引字符高亮颜色 | _string_ | `#2879ff` |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |

### IndexBar Events

| 事件名            | 说明                         | 回调参数                  |
| ----------------- | ---------------------------- | ------------------------- |
| select            | 点击索引栏的字符时触发       | _index: number \| string_ |
| change         | 当前高亮的索引字符变化时触发 | _index: number \| string_ |

### IndexAnchor Slots

| 名称    | 说明                             |
| ------- | -------------------------------- |
| default | 锚点位置显示内容，默认为索引字符 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                  | 默认值              | 描述 |
| ------------------------------------- | ------------------- | ---- |
| @index-bar-sidebar-z-index            | `2`                 | -    |
| @index-bar-index-font-size            | `@font-size-xs`     | -    |
| @index-bar-index-line-height          | `@line-height-xs`   | -    |
| @index-bar-index-active-color         | `@blue`              | -    |
| @index-anchor-z-index                 | `1`                 | -    |
| @index-anchor-padding                 | `0 @padding-md`     | -    |
| @index-anchor-text-color              | `@text-color`       | -    |
| @index-anchor-font-weight             | `@font-weight-bold` | -    |
| @index-anchor-font-size               | `@font-size-md`     | -    |
| @index-anchor-line-height             | `32px`              | -    |
| @index-anchor-background-color        | `transparent`       | -    |
| @index-anchor-sticky-text-color       | `@blue`              | -    |
| @index-anchor-sticky-background-color | `@white`            | -    |
