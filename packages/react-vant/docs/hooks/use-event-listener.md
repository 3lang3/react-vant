# useEventListener

### 介绍

方便地进行事件绑定，在组件 `mounted` 时绑定事件，`unmounted` 时解绑事件。

## 代码演示

### 基本用法

```jsx | pure
import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  // 在 window 上绑定 resize 事件
  // 未指定监听对象时，默认会监听 window 的事件
  hooks.useEventListener('resize', () => {
    console.log('window resize');
  });

  // 在 body 元素上绑定 click 事件
  hooks.useEventListener(
    'click',
    () => {
      console.log('click body');
    },
    { target: document.body },
  );
  return null;
};
```

### 类型定义

```ts
type Options = {
  target?: (() => HTMLElement) | HTMLElement | React.MutableRefObject | Window | Document;
  capture?: boolean;
  passive?: boolean;
};

function useEventListener(type: string, listener: EventListener, options?: Options): void;
```

## API

### 参数

| 参数     | 说明                     | 类型       | 默认值 |
| -------- | ------------------------ | ---------- | ------ |
| type     | 监听的事件类型           | _string_   | -      |
| listener | 点击外部时触发的回调函数 | _Function_ | -      |
| options  | 可选的配置项             | _Options_  | -      |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 绑定事件的元素 | _(() => HTMLElement) \| HTMLElement \| React.MutableRefObject \| Window \| Document_ | `window` |
| capture | 是否在事件捕获阶段触发 | _boolean_ | `false` |
| passive | 设置为 `true` 时，表示 `listener` 永远不会调用 `preventDefault` | _boolean_ | `false` |
