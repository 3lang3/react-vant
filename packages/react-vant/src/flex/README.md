# Flex 布局

### 介绍

`Flex` 组件是 CSS `flex` 布局的一个封装。

### 引入

```js
import { Flex } from 'react-vant';
```

### 基础用法

`Flex` 组件提供了`24列栅格`。使用单一的一组 `Flex` 和 `Flex.Item` 栅格组件，就可以创建一个基本的栅格系统，所有列（`Flex.Item`）必须放在 `Flex` 内。

```jsx
<Flex>
  <Flex.Item span={12}>span: 12</Flex.Item>
  <Flex.Item span={12}>span: 12</Flex.Item>
</Flex>
<Flex>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### 区域间隔

通过`gutter`属性可以设置列元素之间的间距，默认间距为 `0`; 如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]`

```jsx
<Flex gutter={16}>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### 方向

通过`direction`属性设置弹性布局方向。默认是 `row`

```jsx
<Flex direction="row">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
<Flex direction="row-reverse">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
```

## API

### Flex

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 项目定位方向，可选值为 `row` `row-reverse` `column` `column-reverse` | _string_ | `row` |
| wrap | 子元素的换行方式，可选值为 `nowrap` `wrap` `wrap-reverse` | _string_ | `nowrap` |
| gutter | 列元素之间的间距。可以使用数组形式同时设置 `[水平间距, 垂直间距]` | _number \| array_ | `0` |
| align | 垂直对齐方式，可选值为 `start` `center` `end` `baseline` `stretch` | _string_ | `start` |
| justify | 水平排列方式，可选值为 `start` `end` `center` `around` `between` | _string_ | `start` |

### Flex.Item

| 成员 | 说明                                        | 类型               | 默认值 |
| ---- | ------------------------------------------- | ------------------ | ------ |
| flex | flex 布局属性                               | _string \| number_ | `-`    |
| span | 栅格占位格数，为 0 时相当于 `display: none` | _number_           | `-`    |
