# useTouch

### 介绍

管理触摸事件的 Hook

## 代码演示

### 基本用法

通过`useTouch`返回的对象可以获取很多直观的信息，例如触摸偏移量、触摸方向。

> 在触摸时根据 touch 返回的数据可以实现很多常见效果，例如[下拉刷新](https://github.com/3lang3/react-vant/blob/main/packages/react-vant/src/components/pull-refresh/PullRefresh.tsx)

```jsx | pure
import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const touch = hooks.useTouch();
  const onTouchStart = (event) => {
    touch.start(event);
  };
  const onTouchMove = (event) => {
    touch.move(event.nativeEvent);
  };

  return (
    <div style={{ width: 400, height: 400 }} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <p>touch direction: {touch.direction}</p>
      <p>
        touch start: [{touch.startX}, {touch.startY}]
      </p>
      <p>
        touch delta: [{touch.deltaX}, {touch.deltaY}]
      </p>
    </div>
  );
};
```

## API

### 类型定义

```ts
type TouchState = {
  // 开始点x坐标
  startX: number;
  // 开始点y坐标
  startY: number;
  // x坐标方向触摸偏移量
  deltaX: number;
  // y坐标方向触摸偏移量
  deltaY: number;
  // x方向绝对偏移量
  offsetX: number;
  // y方向绝对偏移量
  offsetY: number;
  // 触摸方向
  direction: '' | 'vertical' | 'horizontal';
  // 触摸时方法
  move: (event: React.TouchEvent) => void;
  // 开始触摸方法
  start: (event: React.TouchEvent) => void;
  // 重置数据
  reset: () => void;
  // 是否是垂直方向的触摸
  isVertical: () => boolean;
  // 是否是水平方向的触摸
  isHorizontal: () => boolean;
};

function useTouch(): TouchState;
```
