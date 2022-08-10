---
simulator:
  compact: false
---

# CountDown 倒计时

## 介绍

用于实时展示倒计时数值，支持毫秒精度。

## 引入

```js
import { CountDown } from 'react-vant';
```

## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} />;
};
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```jsx
/**
 * title: 自定义格式
 */
import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />;
};
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```jsx
/**
 * title: 毫秒级渲染
 */
import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />;
};
```

### 自定义样式

通过`children`自定义倒计时的样式，[react render prop](https://reactjs.org/docs/render-props.html)文档。

```jsx
/**
 * title: 自定义样式
 */
import React from 'react';
import { CountDown } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {(timeData) => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  );
};
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

<code title="手动控制" src="./demo/ref.tsx" />

## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number \| string_ | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| autoStart   | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名   | 说明             | 回调参数                   |
| -------- | ---------------- | -------------------------- |
| onFinish | 倒计时结束时触发 | -                          |
| onChange | 倒计时变化时触发 | _currentTime: CurrentTime_ |

### CurrentTime 格式

| 名称         | 说明                   | 类型     |
| ------------ | ---------------------- | -------- |
| total        | 剩余总时间（单位毫秒） | _number_ |
| days         | 剩余天数               | _number_ |
| hours        | 剩余小时               | _number_ |
| minutes      | 剩余分钟               | _number_ |
| seconds      | 剩余秒数               | _number_ |
| milliseconds | 剩余毫秒               | _number_ |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若 `autoStart` 为 `true`，重设后会自动开始倒计时 | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { CountDownInstance, CountDownCurrentTime } from 'react-vant';
```

`CountDownInstance` 是组件实例的类型，用法如下：

```ts
import { useRef } from 'react';
import type { CountDownInstance } from 'react-vant';

const countDownRef = useRef<CountDownInstance>(null);

countDownRef.current?.start();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                        | 默认值                     | 描述 |
| --------------------------- | -------------------------- | ---- |
| --rv-count-down-text-color  | _var(--rv-text-color)_     | -    |
| --rv-count-down-font-size   | _var(--rv-font-size-md)_   | -    |
| --rv-count-down-line-height | _var(--rv-line-height-md)_ | -    |

## 常见问题

### 在 iOS 系统上倒计时不生效？

如果你遇到了在 iOS 上倒计时不生效的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
