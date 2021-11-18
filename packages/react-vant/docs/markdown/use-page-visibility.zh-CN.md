# usePageVisibility

### 介绍

获取页面的可见状态。

## 代码演示

### 基本用法

```js
import { useEffect } from 'react';
import { hooks } from 'react-vant';

export default () => {
  const pageVisibility = hooks.usePageVisibility();

  useEffect(() => {
    console.log('page visibility: ', value);
  }, [pageVisibility]);

  return null;
};
```

## API

### 类型定义

```js
type VisibilityState = 'visible' | 'hidden';

function usePageVisibility(): VisibilityState;
```

### 返回值

| 参数            | 说明                                                  | 类型              |
| --------------- | ----------------------------------------------------- | ----------------- |
| visibilityState | 页面当前的可见状态，`visible` 为可见，`hidden` 为隐藏 | _VisibilityState_ |
