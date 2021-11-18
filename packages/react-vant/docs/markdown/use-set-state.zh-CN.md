# useSetState

### 介绍

管理 `object` 类型 state 的 Hooks，同时支持返回 state 最新状态。

## 代码演示

### 基本用法

```jsx
import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const [state, setState] = hooks.useSetState({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button type="button" onClick={() => setState({ hello: 'world' })}>
        set hello
      </button>
      <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
        count + 1
      </button>
    </div>
  );
};
```

### 获取 state 最新状态

```jsx
import React, { useEffect } from 'react';
import { useSetState } from 'react-vant';

export default () => {
  const [state, setState, stateRef] = useSetState({
    count: 0,
  });

  useEffect(() => {
    setInterval(() => {
      setState((prev) => ({ count: prev.count + 1 }));
      console.log(state.count, stateRef.current.count);
    }, 1000);
  }, []);

  return null;
};
```

## API

### 类型定义

用法与 class 组件的 this.setState 基本一致

```js
function useSetState<T extends object>(
  initialState: T = {} as T
): [
  T,
  (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void,
  React.MutableRefObject<T>
]
```
