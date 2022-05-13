---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Loading 加载

## 介绍

加载图标，用于表示加载中的过渡状态。

## 引入

```js
import { Loading } from 'react-vant';
```

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner` 和 `ball`。

```jsx
/**
 * title: 加载类型
 * card: true
 */
import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="ball" />
      </Flex.Item>
    </Flex>
  );
};
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```jsx
/**
 * title: 自定义颜色
 * card: true
 */
import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading color="#3f45ff" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" color="#3f45ff" />
      </Flex.Item>
    </Flex>
  );
};
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```jsx
/**
 * title: 自定义大小
 * card: true
 */
import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading size="24" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" size="24px" />
      </Flex.Item>
    </Flex>
  );
};
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```jsx
/**
 * title: 加载文案
 * card: true
 */
import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return <Loading size="24px">加载中...</Loading>;
};
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```jsx
/**
 * title: 垂直排列
 * card: true
 */
import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} size="24px" vertical>
      加载中...
    </Loading>
  );
};
```

### 自定义文本颜色

通过 `color` 和 `f44336` 属性，可以自定义文本颜色。

```jsx
/**
 * title: 自定义文本颜色
 * card: true
 */
import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} vertical textColor="#3f45ff">
      加载中...
    </Loading>
  );
};
```

## API

### Props

| 参数      | 说明                         | 类型               | 默认值     |
| --------- | ---------------------------- | ------------------ | ---------- |
| color     | 颜色                         | _string_           | `#c9c9c9`  |
| type      | 类型，可选值为 `spinner`     | _string_           | `circular` |
| size      | 加载图标大小，默认单位为`px` | _number \| string_ | `30px`     |
| textSize  | 文字大小，默认单位为`px`     | _number \| string_ | `14px`     |
| textColor | 文字颜色                     | _string_           | `#c9c9c9`  |
| vertical  | 是否垂直排列图标和文字内容   | _boolean_          | `false`    |

### 类型定义

组件导出以下类型定义：

```ts
import type { LoadingType } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                    | 默认值                   | 描述 |
| --------------------------------------- | ------------------------ | ---- |
| --rv-loading-text-color                 | _var(--rv-gray-6)_       | -    |
| --rv-loading-text-font-size             | _var(--rv-font-size-md)_ | -    |
| --rv-loading-spinner-color              | _var(--rv-gray-5)_       | -    |
| --rv-loading-spinner-size               | _30px_                   | -    |
| --rv-loading-spinner-animation-duration | _0.8s_                   | -    |
