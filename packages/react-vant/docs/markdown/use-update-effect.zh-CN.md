# useUpdateEffect

### 介绍

只在依赖更新时执行的 `useEffect` hook。

## 代码演示

### 基本用法

使用上与 useEffect 完全相同，只是它忽略了首次渲染，且只在依赖项更新时运行。

```jsx
import React, { useEffect, useState } from 'react';
import { hooks } from 'react-vant';

export default () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  hooks.useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
  }, [count]);

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};
```

## API

### 类型定义

```js
function useUpdateEffect(
  effect: () => (void | (() => void | undefined)),
  deps?: deps,
)
```

### 参数

| 参数   | 说明                       | 类型               | 默认值 |
| ------ | -------------------------- | ------------------ | ------ |
| effect | 可执行函数                 | _() => void_       | -      |
| deps   | 可选项，传入依赖变化的对象 | _Array\|undefined_ | -      |
