# IndexBar 索引栏

### 引入

```js
import { IndexBar } from 'react-vant';
```

> 注意: IndexBar 嵌套在 Tabs 组件中时，请关闭 Tabs 的 animated 和 swipeable 属性，详见[Tabs 和 IndexBar 组合使用问题](https://github.com/3lang3/react-vant/issues/70)

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
const indexList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## API

### IndexBar Props

| 参数            | 说明                       | 类型                     | 默认值    |
| --------------- | -------------------------- | ------------------------ | --------- |
| indexList       | 索引字符列表               | _string[] \| number[]_   | `A-Z`     |
| zIndex          | z-index 层级               | _number \| string_       | `1`       |
| sticky          | 是否开启锚点自动吸顶       | _boolean_                | `true`    |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_                 | `0`       |
| highlightColor  | 索引字符高亮颜色           | _string_                 | `#3f45ff` |
| teleport        | 指定索引栏挂载的节点       | _Element\|() => Element_ | -         |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |

### IndexBar Events

| 事件名   | 说明                         | 回调参数                  |
| -------- | ---------------------------- | ------------------------- |
| onSelect | 点击索引栏的字符时触发       | _index: number \| string_ |
| onChange | 当前高亮的索引字符变化时触发 | _index: number \| string_ |

### IndexBar 方法

通过 ref 可以获取到 IndexBar 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名   | 说明           | 参数                      | 返回值 |
| -------- | -------------- | ------------------------- | ------ |
| scrollTo | 滚动到指定锚点 | _index: number \| string_ | -      |

### 类型定义

组件导出以下类型定义：

```js
import type { IndexBarInstance } from 'react-vant';
```

`IndexBarInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { IndexBarInstance } from 'react-vant';

const indexBarRef = useRef<IndexBarInstance>();

indexBarRef.current?.scrollTo('B');
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                      | 默认值                       | 描述 |
| ----------------------------------------- | ---------------------------- | ---- |
| --rv-index-bar-sidebar-z-index            | _2_                          | -    |
| --rv-index-bar-index-font-size            | _var(--rv-font-size-xs)_     | -    |
| --rv-index-bar-index-line-height          | _var(--rv-line-height-xs)_   | -    |
| --rv-index-bar-index-active-color         | _var(--rv-danger-color)_     | -    |
| --rv-index-anchor-z-index                 | _1_                          | -    |
| --rv-index-anchor-padding                 | _0 var(--rv-padding-md)_     | -    |
| --rv-index-anchor-text-color              | _var(--rv-text-color)_       | -    |
| --rv-index-anchor-font-weight             | _var(--rv-font-weight-bold)_ | -    |
| --rv-index-anchor-font-size               | _var(--rv-font-size-md)_     | -    |
| --rv-index-anchor-line-height             | _32px_                       | -    |
| --rv-index-anchor-background-color        | _transparent_                | -    |
| --rv-index-anchor-sticky-text-color       | _var(--rv-danger-color)_     | -    |
| --rv-index-anchor-sticky-background-color | _var(--rv-white)_            | -    |
