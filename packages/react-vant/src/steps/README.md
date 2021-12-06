# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

```js
import { Step, Steps } from 'react-vant';
```

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```jsx
import { useState } from 'react';
import { Steps } from 'react-vant';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Steps active={active}>
      <Steps.Item>买家下单</Steps.Item>
      <Steps.Item>商家接单</Steps.Item>
      <Steps.Item>买家提货</Steps.Item>
      <Steps.Item>交易完成</Steps.Item>
    </Steps>
  );
};
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```jsx
<Steps active={active} activeIcon="success" activeColor="#38f">
  <Steps.Item>买家下单</Steps.Item>
  <Steps.Item>商家接单</Steps.Item>
  <Steps.Item>买家提货</Steps.Item>
  <Steps.Item>交易完成</Steps.Item>
</Steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```jsx
<Steps direction="vertical" active={0}>
  <Steps.Item>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </Steps.Item>
  <Steps.Item>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </Steps.Item>
  <Steps.Item>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </Steps.Item>
</Steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤对应的索引值 | _number \| string_ | `0` |
| direction | 步骤条方向，可选值为 `vertical` | _string_ | `horizontal` |
| activeIcon | 当前步骤对应的底部图标，可选值见 [Icon 组件](#/zh-CN/icon)，支持自定义 | _string \| React.ReactNode_ | `checked` |
| inactiveIcon | 非当前步骤对应的底部图标，可选值见 [Icon 组件](#/zh-CN/icon)，支持自定义 | _string \| React.ReactNode_ | - |
| finishIcon | 已完成步骤对应的底部图标，优先级高于 `inactive-icon`，可选值见 [Icon 组件](#/zh-CN/icon)，支持自定义 | _string \| React.ReactNode_ | - |
| activeColor | 当前步骤和已完成步骤的颜色 | _string_ | `#07c160` |
| inactiveColor | 未激活步骤的颜色 | _string_ | `#969799` |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### Steps.Item Props

| 参数         | 说明                 | 类型        | 默认值 |
| ------------ | -------------------- | ----------- | ------ |
| activeIcon   | 支持自定义激活图标   | _ReactNode_ | -      |
| inactiveIcon | 支持自定义非激活图标 | _ReactNode_ | -      |
| finishIcon   | 支持自定义已完成图标 | _ReactNode_ | -      |

### Steps Events

| 事件名      | 说明                       | 回调参数        |
| ----------- | -------------------------- | --------------- |
| onClickStep | 点击步骤的标题或图标时触发 | _index: number_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --rv-step-text-color                 | _var(--rv-gray-6)_        | -    |
| --rv-step-active-color               | _var(--rv-success-color)_ | -    |
| --rv-step-process-text-color         | _var(--rv-text-color)_    | -    |
| --rv-step-font-size                  | _var(--rv-font-size-md)_  | -    |
| --rv-step-line-color                 | _var(--rv-border-color)_  | -    |
| --rv-step-finish-line-color          | _var(--rv-success-color)_ | -    |
| --rv-step-finish-text-color          | _var(--rv-text-color)_    | -    |
| --rv-step-icon-size                  | _12px_                    | -    |
| --rv-step-circle-size                | _5px_                     | -    |
| --rv-step-circle-color               | _var(--rv-gray-6)_        | -    |
| --rv-step-horizontal-title-font-size | _var(--rv-font-size-sm)_  | -    |
| --rv-steps-background-color          | _var(--rv-white)_         | -    |
