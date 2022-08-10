---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Badge 徽标

## 介绍

在右上角展示徽标数字或小红点。

## 引入

```js
import { Badge } from 'react-vant';
```

## 代码演示

### 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  );
};
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```jsx
/**
 * title: 最大值
 */
import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  );
};
```

### 自定义颜色和偏移量

- 通过 `color` 属性来设置徽标的颜色
- 通过 `offset` 属性来调整徽标的偏移量

```jsx
/**
 * title: 自定义颜色和偏移量
 */
import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge dot offset={['100%', 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, '100%']} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={['100%', '100%']} color="orange">
        <Child />
      </Badge>
    </Space>
  );
};
```

### 自定义徽标内容

<code title="自定义徽标内容" src="./demo/custom.tsx" />

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```jsx
/**
 * title: 独立展示
 */
import React from 'react';
import { Space, Badge } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _ReactNode_ | - |
| color | 徽标背景颜色 | _string_ | `#f44336` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - |
| offset | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | - |
| showZero | 当 content 为数字 0 时，是否展示徽标 | _boolean_ | `true` |

### 事件

| 事件名  | 说明       | 回调参数       |
| ------- | ---------- | -------------- |
| onClick | 点击时触发 | _event: Event_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-badge-size | _16px_ | - |
| --rv-badge-color | _var(--rv-white)_ | - |
| --rv-badge-padding | _0 3px_ | - |
| --rv-badge-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-badge-font-weight | _var(--rv-font-weight-bold)_ | - |
| --rv-badge-border-width | _var(--rv-border-width-base)_ | - |
| --rv-badge-background-color | _var(--rv-danger-color)_ | - |
| --rv-badge-dot-color | _var(--rv-danger-color)_ | - |
| --rv-badge-dot-size | _8px_ | - |
| --rv-badge-font-family | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | - |
