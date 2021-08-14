# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

### 引入

```js
import { Badge } from 'react-vant';
```

## 代码演示

### 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```jsx
<Badge content="5">
  <div class="child" />
</Badge>
<Badge content="10">
  <div class="child" />
</Badge>
<Badge content="Hot">
  <div class="child" />
</Badge>
<Badge dot>
  <div class="child" />
</Badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```jsx
<Badge content="20" max="9">
  <div class="child" />
</Badge>
<Badge content="50" max="20">
  <div class="child" />
</Badge>
<Badge content="200" max="99">
  <div class="child" />
</Badge>
```

### 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```jsx
<Badge content="5" color="#1989fa">
  <div class="child" />
</Badge>
<Badge content="10" color="#1989fa">
  <div class="child" />
</Badge>
<Badge dot color="#1989fa">
  <div class="child" />
</Badge>
```

### 自定义徽标内容

```jsx
<Badge content={<Icon name="success" className="badge-icon" />}>
  <div class="child" />
</Badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```jsx
<Badge content="20" />

<Badge content="200" max="99" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _number \| string_ \| _ReactNode_ | - |
| color | 徽标背景颜色 | _string_ | `#ee0a24` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - |
| offset `v3.0.5` | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | - |
| show-zero `v3.0.10` | 当 content 为数字 0 时，是否展示徽标 | _boolean_ | `true` |
