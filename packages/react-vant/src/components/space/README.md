---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Space 间距

## 介绍

设置组件之间的间距，避免组件紧贴在一起，拉开统一的空间。

## 引入

```js
import { Space } from 'react-vant';
```

## 代码演示

### 基础用法

相邻组件水平间距。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space align="center">
      Space
      <Button type="primary">Button</Button>
      <Button>Confirm</Button>
    </Space>
  );
};
```

### 分隔符

相邻组件分隔符。

```jsx
/**
 * title: 分隔符
 */
import React from 'react';
import { Space, Typography, Divider } from 'react-vant';

export default () => {
  return (
    <Space align="center" divider={<Divider type="vertical" />}>
      <Typography.Link>Info</Typography.Link>
      <Typography.Link>Edit</Typography.Link>
      <Typography.Link type="danger">Delete</Typography.Link>
    </Space>
  );
};
```

### 垂直间距

相邻组件垂直间距，可以设置 width: 100% 独占一行。

```jsx
/**
 * title: 垂直间距
 */
import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space direction="vertical">
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};
```

### 间距大小

通过 `gap` 属性可以调整间距大小。

- `gap` 设置为数组时可以同时调整垂直方向和水平方向的间距大小

```jsx
/**
 * title: 间距大小
 */
import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};
```

### 对齐

设置对齐模式。

- 通过 `justify` 属性可以灵活调整主轴对齐方式。
- 通过 `align` 属性可以灵活调整交叉轴对齐方式。

```jsx
/**
 * title: 对齐方式
 */
import React from 'react';
import { Space, Button } from 'react-vant';

const Child = ({ children }) => (
  <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 4 }}>{children}</div>
);

export default () => {
  return (
    <>
      {/* 主轴对齐 */}
      <Space justify="center" block style={{ marginBottom: 20 }}>
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
      {/* 交叉轴对齐 */}
      <Space align="end">
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
    </>
  );
};
```

### 自动换行

```jsx
/**
 * title: 自动换行
 */
import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space wrap gap={[8, 20]}>
      {new Array(6).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gap | 间距大小 | _string\|number\|[string, string]_ | - |
| justify | 主轴对齐方式 | _'start'\| 'end'\| 'center'\| 'between'\| 'around'\| 'evenly'\| 'stretch'_ | - |
| align | 交叉轴对齐方式 | _'start'\| 'end'\| 'center'\| 'baseline'_ | - |
| direction | 间距方向 | _'vertical' \| 'horizontal'_ | `horizontal` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | _boolean_ | `false` |
| block | 是否渲染为块级元素 | _boolean_ | `false` |
| divider | 分隔符 | _ReactNode_ | - |

### 事件

| 事件名  | 说明       | 回调参数            |
| ------- | ---------- | ------------------- |
| onClick | 点击时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称           | 默认值 | 描述     |
| -------------- | ------ | -------- |
| --rv-space-gap | _8px_  | 间距大小 |
