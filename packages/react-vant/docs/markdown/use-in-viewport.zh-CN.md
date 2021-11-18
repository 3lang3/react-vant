# useInViewport

### 介绍

用于判断 dom 元素是否在可视范围之内

> [Lazyload 懒加载](/#/zh-CN/lazyload)组件基于此 hook 实现

## 代码演示

### 基本用法

使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内

```jsx
import React, { useRef } from 'react';
import { hooks } from 'react-vant';

export default () => {
  const ref = useRef();
  const inViewPort = hooks.useInViewport(ref);
  return (
    <div>
      <div ref={ref}>observer dom</div>
      <div style={{ marginTop: 70, color: inViewPort ? '#87d068' : '#f50' }}>
        {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};
```

## API

### 类型定义

```js
function useInViewport(target): boolean;
```

### 参数

| 参数   | 说明           | 类型                                                         | 默认值 |
| ------ | -------------- | ------------------------------------------------------------ | ------ |
| target | 需要监听的元素 | _HTMLElement \| () => HTMLElement \| React.MutableRefObject_ | -      |
