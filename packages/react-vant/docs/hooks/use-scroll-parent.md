# useScrollParent

### 介绍

获取元素最近的可滚动父元素。

## 代码演示

### 基本用法

```jsx | pure
import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const root = React.useRef();
  const scrollParent = hooks.useScrollParent(root);

  hooks.useEventListener(
    'scroll',
    () => {
      console.log('scroll');
    },
    { target: scrollParent },
  );

  return <div ref={root} />;
};
```

## API

### 类型定义

```ts
function useScrollParent(
  element: React.MutableRefObject<Element | undefined>,
): Element | HTMLElement | Window;
```

### 参数

| 参数    | 说明     | 类型                        | 默认值 |
| ------- | -------- | --------------------------- | ------ |
| element | 当前元素 | _MutableRefObject\|Element_ | -      |

### 返回值

| 参数         | 说明               | 类型      |
| ------------ | ------------------ | --------- |
| scrollParent | 最近的可滚动父元素 | _Element_ |
