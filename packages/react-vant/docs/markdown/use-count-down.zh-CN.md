# useCountDown

### 介绍

提供倒计时毫秒级管理能力

> [CountDown 倒计时](/#/zh-CN/count-down)组件基于此 hook 实现。

## 代码演示

### 基本用法

```jsx
import { hooks } from 'react-vant';

export default () => {
  const { current } = hooks.useCountDown({
    // 倒计时 24 小时
    time: 24 * 60 * 60 * 1000,
    // 自动开始倒计时
    autostart: true
  });

  return (
    <>
      <span>总时间：{{ current.total }}</span>
      <span>剩余天数：{{ current.days }}</span>
      <span>剩余小时：{{ current.hours }}</span>
      <span>剩余分钟：{{ current.minutes }}</span>
      <span>剩余秒数：{{ current.seconds }}</span>
      <span>剩余毫秒：{{ current.milliseconds }}</span>
    </>
  )
};
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 millisecond 选项可以开启毫秒级渲染。

```jsx
import { useCountDown } from 'react-vant';

export default () => {
  const { current } = useCountDown({
    // 倒计时 24 小时
    time: 24 * 60 * 60 * 1000,
    // 自动开始倒计时
    autostart: true,
    // 开启毫秒级渲染
    millisecond: true,
  });

  return (
    <>
      <span>总时间：{{ current.total }}</span>
      <span>剩余天数：{{ current.days }}</span>
      <span>剩余小时：{{ current.hours }}</span>
      <span>剩余分钟：{{ current.minutes }}</span>
      <span>剩余秒数：{{ current.seconds }}</span>
      <span>剩余毫秒：{{ current.milliseconds }}</span>
    </>
  )
};
```

## API

### 类型定义

```js
type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type CountDown = {
  start: () => void;
  pause: () => void;
  reset: (totalTime: number) => void;
  current: ComputedRef<CurrentTime>;
};

type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

function useCountDown(options: UseCountDownOptions): CountDown;
```

### 参数

| 参数        | 说明                       | 类型                             | 默认值  |
| ----------- | -------------------------- | -------------------------------- | ------- |
| time        | 倒计时时长，单位毫秒       | _number_                         | -       |
| millisecond | 是否开启毫秒级渲染         | _boolean_                        | `false` |
| onChange    | 倒计时改变时触发的回调函数 | _(current: CurrentTime) => void_ | -       |
| onFinish    | 倒计时结束时触发的回调函数 | -                                |

### 返回值

| 参数    | 说明                               | 类型                    |
| ------- | ---------------------------------- | ----------------------- |
| current | 当前剩余的时间                     | _CurrentTime_           |
| start   | 开始倒计时                         | _() => void_            |
| pause   | 暂停倒计时                         | _() => void_            |
| reset   | 重置倒计时，支持传入新的倒计时时长 | _(time?: number): void_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 剩余总时间（单位毫秒） | _number_ |
| days         | 剩余天数               | _number_ |
| hours        | 剩余小时               | _number_ |
| minutes      | 剩余分钟               | _number_ |
| seconds      | 剩余秒数               | _number_ |
| milliseconds | 剩余毫秒               | _number_ |
