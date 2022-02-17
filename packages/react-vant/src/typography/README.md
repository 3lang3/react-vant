---
mobile-className: 'vant-doc-demo-section--card'
mobile-background: '#fff'
---

# Typography 文本

## 介绍

文本的基本格式。

## 引入

```js
import { Typography } from 'react-vant';
```

## 代码演示

### 基础用法

```tsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Text>
      In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
      <Typography.Text delete>desktop</Typography.Text>applications development,
      <Typography.Text type="primary"> many different</Typography.Text> design specs and <Typography.Text
        underline
      >
        implementations
      </Typography.Text>would be <Typography.Text type="warning">involved</Typography.Text>
    </Typography.Text>
  );
};
```

### 类型

设置 `type` 属性后，文本会展示不同的 ui 状态。

```tsx
/**
 * title: 类型
 */
import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text type="danger">这是一条文本</Typography.Text>
      <Typography.Text type="primary">这是一条文本</Typography.Text>
      <Typography.Text type="warning">这是一条文本</Typography.Text>
      <Typography.Text type="secondary">这是一条文本</Typography.Text>
    </>
  );
};
```

### 文本省略

设置 `ellipsis` 属性后，文本超出部分将省略。

```tsx
/**
 * title: 文本省略
 */
import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text ellipsis>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>

      <br />
      <Typography.Text ellipsis={2}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>
    </>
  );
};
```

### 标题

`Typography.Title` 使用标题组件

```tsx
/**
 * title: 类型
 */
import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Title level={1}>一级测试标题</Typography.Title>
      <Typography.Title level={2}>二级测试标题</Typography.Title>
      <Typography.Title level={3}>三级测试标题</Typography.Title>
      <Typography.Title level={4}>四级测试标题</Typography.Title>
      <Typography.Title level={5}>五级测试标题</Typography.Title>
    </>
  );
};
```

### 链接样式

`Typography.Link` 使用链接样式组件

```tsx
/**
 * title: 链接样式
 */
import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return <Typography.Link>测试Link</Typography.Link>;
};
```

## API

### Typography.Text Typography.Link Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型，可选值`danger` ` secondary` `light` `primary` `success` `warning ` | _string_ | - |
| size | 文本大小，可选值`xs` `sm` `md` `lg` `xl` `xxl` | _boolean_ | `md` |
| disabled | 禁用文本 | _boolean_ | `false` |
| ellipsis | 文本省略 | _boolean_ _number_ | `false` |
| delete | 添加删除线样式 | _boolean_ | `false` |
| underline | 添加下划线样式 | _boolean_ | `false` |
| center | 文本居中 | _boolean_ | `false` |
| strong | 文本加粗 | _boolean_ | `false` |
| onClick | 点击事件 | _function_ | - |

### Typography.Title Props

| 参数  | 说明                                 | 类型     | 默认值 |
| ----- | ------------------------------------ | -------- | ------ |
| level | 重要程度，可选值 `1` `2` `3` `4` `5` | _number_ | `4`    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                            | 默认值                     | 描述 |
| ------------------------------- | -------------------------- | ---- |
| --rv-typography-color           | _var(--rv-text-color)_     | -    |
| --rv-typography-link-color      | _var(--rv-primary-color)_  | -    |
| --rv-typography-font-size       | _var(--rv-font-size-md)_   | -    |
| --rv-typography-line-height     | _var(--rv-line-height-md)_ | -    |
| --rv-typography-primary-color   | _var(--rv-primary-color)_  | -    |
| --rv-typography-danger-color    | _var(--rv-danger-color)_   | -    |
| --rv-typography-success-color   | _var(--rv-success-color)_  | -    |
| --rv-typography-warning-color   | _var(--rv-warning-color)_  | -    |
| --rv-typography-secondary-color | _var(--rv-gray-6)_         | -    |
| --rv-typography-disabled-color  | _var(--rv-gray-5)_         | -    |
| --rv-typography-light-color     | _var(--rv-white)_          | -    |
