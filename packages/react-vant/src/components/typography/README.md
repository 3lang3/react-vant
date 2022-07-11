---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Typography 文本

## 介绍

文本的基本格式，支持个性化文本省略配置。

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

### 文本省略

使用 `ellipsis` 属性可以定制个性化的文本省略形式

> 开启 `ellipsis` 后，请确保 `children` 为纯**字符串**或**数字**类型

<code title="文本省略" src="./demo/base.tsx" />

### 标题

`Typography.Title` 使用标题组件

```tsx
/**
 * title: 标题
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
      <Typography.Title level={6}>六级测试标题</Typography.Title>
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
  return (
    <Typography.Link href="https://github.com/3lang3/react-vant" target="_blank">
      测试Link
    </Typography.Link>
  );
};
```

## API

### Typography Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型，可选值`danger` ` secondary` `light` `primary` `success` `warning ` | _string_ | - |
| size | 文本大小，可选值`xs` `sm` `md` `lg` `xl` `xxl` | _boolean_ | `md` |
| disabled | 禁用文本 | _boolean_ | `false` |
| ellipsis | 文本省略 | _boolean\|number\|[EllipsisConfig](#ellipsisconfig)_ | `false` |
| delete | 添加删除线样式 | _boolean_ | `false` |
| underline | 添加下划线样式 | _boolean_ | `false` |
| center | 文本居中 | _boolean_ | `false` |
| strong | 文本加粗 | _boolean_ | `false` |
| onClick | 点击事件 | _function_ | - |

### EllipsisConfig

| 参数           | 说明               | 类型                          | 默认值 |
| -------------- | ------------------ | ----------------------------- | ------ |
| rows           | 省略行数           | _number_                      | -      |
| 省略符号       | 省略行数           | _string_                      | `...`  |
| expandText     | 展开操作的文案     | _string_                      | -      |
| collapseText   | 收起操作的文案     | _string_                      | -      |
| suffixText     | 添加后缀文本       | _string_                      | -      |
| suffixCount    | 保留末位文本数量   | _number_                      | -      |
| onExpend       | 保留末位文本数量   | _(isExpend: boolean) => void_ | -      |
| onContentClick | 点击文本内容时触发 | _(e) => void_                 | -      |

### Typography.Title Props

| 参数  | 说明                                     | 类型     | 默认值 |
| ----- | ---------------------------------------- | -------- | ------ |
| level | 重要程度，可选值 `1` `2` `3` `4` `5` `6` | _number_ | `5`    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                            | 默认值                    | 描述 |
| ------------------------------- | ------------------------- | ---- |
| --rv-typography-color           | _var(--rv-text-color)_    | -    |
| --rv-typography-link-color      | _var(--rv-primary-color)_ | -    |
| --rv-typography-font-size-xs    | _10px_                    | -    |
| --rv-typography-font-size-sm    | _12px_                    | -    |
| --rv-typography-font-size       | _var(--rv-font-size-md)_  | -    |
| --rv-typography-font-size-lg    | _16px_                    | -    |
| --rv-typography-font-size-xl    | _20px_                    | -    |
| --rv-typography-font-size-xxl   | _24px_                    | -    |
| --rv-typography-title-size-l1   | _30px_                    | -    |
| --rv-typography-title-size-l2   | _26px_                    | -    |
| --rv-typography-title-size-l3   | _22px_                    | -    |
| --rv-typography-title-size-l4   | _20px_                    | -    |
| --rv-typography-title-size-15   | _16px_                    | -    |
| --rv-typography-title-size-l6   | _14px_                    | -    |
| --rv-typography-primary-color   | _var(--rv-primary-color)_ | -    |
| --rv-typography-danger-color    | _var(--rv-danger-color)_  | -    |
| --rv-typography-success-color   | _var(--rv-success-color)_ | -    |
| --rv-typography-warning-color   | _var(--rv-warning-color)_ | -    |
| --rv-typography-secondary-color | _var(--rv-gray-6)_        | -    |
| --rv-typography-disabled-color  | _var(--rv-gray-5)_        | -    |
| --rv-typography-light-color     | _var(--rv-white)_         | -    |
