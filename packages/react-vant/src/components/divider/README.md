---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Divider 分割线

## 介绍

分隔线可以将内容分成清晰的几组。

## 引入

```js
import { Divider } from 'react-vant';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Divider } from 'react-vant';

export default () => <Divider />;
```

### 展示文字

通过插槽在可以分割线中间插入内容。

```jsx
/**
 * title: 展示文字
 */
import React from 'react';
import { Divider } from 'react-vant';

export default () => <Divider>文字</Divider>;
```

### 内容位置

通过 `contentPosition` 指定内容所在位置。

```jsx
/**
 * title: 内容位置
 */
import React from 'react';
import { Divider } from 'react-vant';

export default () => (
  <>
    <Divider contentPosition="left">左侧内容位置</Divider>
    <Divider contentPosition="right">右侧内容位置</Divider>
  </>
);
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```jsx
/**
 * title: 虚线
 */
import React from 'react';
import { Divider } from 'react-vant';

export default () => <Divider dashed>虚线Divider</Divider>;
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```jsx
/**
 * title: 自定义样式
 */
import React from 'react';
import { Divider } from 'react-vant';

export default () => (
  <Divider style={{ color: '#3f45ff', borderColor: '#3f45ff', padding: '0 16px' }}>
    自定义样式
  </Divider>
);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dashed | 是否使用虚线 | _boolean_ | `false` |
| type | 水平还是垂直类型 | _`horizontal`\|`vertical`_ | `horizontal` |
| hairline | 是否使用 0.5px 线 | _boolean_ | `true` |
| contentPosition | 内容位置，可选值为 `left` `right` | _string_ | `center` |
| className | 类名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                             | 默认值                   | 描述 |
| -------------------------------- | ------------------------ | ---- |
| --rv-divider-margin              | _var(--rv-padding-md) 0_ | -    |
| --rv-divider-text-color          | _var(--rv-gray-6)_       | -    |
| --rv-divider-font-size           | _var(--rv-font-size-md)_ | -    |
| --rv-divider-line-height         | _24px_                   | -    |
| --rv-divider-border-color        | _var(--rv-border-color)_ | -    |
| --rv-divider-content-padding     | _var(--rv-padding-md)_   | -    |
| --rv-divider-content-left-width  | _10%_                    | -    |
| --rv-divider-content-right-width | _10%_                    | -    |
