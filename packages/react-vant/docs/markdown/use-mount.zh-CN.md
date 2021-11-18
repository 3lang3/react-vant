# useMount

### 介绍

只在组件 `mount` 时执行的 hook。

## 代码演示

### 基本用法

在组件首次渲染时，执行方法。

```jsx
import React, { useState } from 'react';
import { hooks, Toast } from 'react-vant';

const MyComponent = () => {
  hooks.useMount(() => {
    Toast.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow((v) => !v)}>
        {show ? 'unmount' : 'mount'}
      </button>
      {show && <MyComponent />}
    </>
  );
};
```

## API

### 类型定义

```js
function useMount(fn: () => void);
```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | mount 时执行的函数 | _() => void_ | -      |
