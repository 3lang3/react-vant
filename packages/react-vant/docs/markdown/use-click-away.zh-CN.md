# useClickAway

### 介绍

管理目标元素外点击事件的 Hook。

## 代码演示

### 基本用法

```jsx
import { useRef } from 'React';
import { useClickAway } from 'react-vant';

export default () => {
  const ref = useRef();

  useClickAway(ref, () => {
    console.log('click outside!');
  });

  return <div ref={ref} />;
};
```

### 自定义事件

通过 `eventName` 选项可以自定义需要监听的事件类型。

```jsx
import { useRef } from 'React';
import { hooks } from 'react-vant';

export default () => {
  const ref = useRef();

  hooks.useClickAway(
    ref,
    () => {
      console.log('click outside!');
    },
    'touchstart',
  );

  return <div ref={ref} />;
};
```

## API

### 类型定义

```js
function useClickAway(
  target: HTMLElement | React.MutableRefObject | () => HTMLElement,
  listener: EventListener,
  eventName?: string;
): void;
```

### 参数

| 参数      | 说明                     | 类型            | 默认值                 |
| --------- | ------------------------ | --------------- | ---------------------- | ------------------- | --- |
| target    | 绑定事件的元素           | \_HTMLElement   | React.MutableRefObject | () => HTMLElement\_ | -   |
| listener  | 点击外部时触发的回调函数 | _EventListener_ | -                      |
| eventName | 事件名称                 | _string_        | _click_                |
