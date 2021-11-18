# useWindowSize

### 介绍

获取浏览器窗口的视口宽度和高度，并在窗口大小变化时自动更新。

## 代码演示

### 基本用法

```js
import React, { useEffect } from 'react';
import { hooks } from 'react-vant';

export default () => {
  const { width, height } = hooks.useWindowSize();

  console.log(width); // -> 窗口宽度
  console.log(height); // -> 窗口高度

  useEffect(
    [width, height],
    () => {
      console.log('window resized');
    },
    [width, height],
  );

  return null;
};
```

## API

### 类型定义

```ts
function useWindowSize(): {
  width: number;
  height: number;
};
```

### 返回值

| 参数   | 说明           | 类型     |
| ------ | -------------- | -------- |
| width  | 浏览器窗口宽度 | _number_ |
| height | 浏览器窗口高度 | _number_ |
