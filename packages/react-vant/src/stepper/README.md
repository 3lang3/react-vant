# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

```js
import { Stepper } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `value` 绑定输入值，可以通过 `onChange` 事件监听到输入值的变化。

```jsx
import React, { useState } from 'react';
import Stepper from 'react-vant';

export default () => {
  const [value, setValue] = (useState < string) | (number > 1);
  return <Stepper value={value} onChange={(val = setValue(val))} />;
};
```

### 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```jsx
<Stepper value={value} step="2" onChange={(val = setValue(val))} />
```

### 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

```jsx
<Stepper value={value} min="5" max="8" onChange={(val = setValue(val))} />
```

### 限制输入整数

设置 `integer` 属性后，输入框将限制只能输入整数。

```jsx
<Stepper value={value} integer onChange={(val = setValue(val))} />
```

### 禁用状态

通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```jsx
<Stepper value={value} disabled onChange={(val) => setValue(val)} />
```

### 禁用输入框

通过设置 `disableInput` 属性来禁用输入框，此时按钮仍然可以点击。

```jsx
<Stepper value={value} disableInput onChange={(val = setValue(val))} />
```

### 固定小数位数

通过设置 `decimalLength` 属性可以保留固定的小数位数。

```jsx
<Stepper value={value} step="0.2" decimalLength="1" onChange={(val = setValue(val))} />
```

### 自定义大小

通过 `inputWidth` 属性设置输入框宽度，通过 `buttonSize` 属性设置按钮大小和输入框高度。

```jsx
<Stepper value={value} inputWidth="40px" buttonSize="32px" onChange={(val = setValue(val))} />
```

### 异步变更

```jsx
<Stepper
  value={value}
  onChange={(val) => {
    Toast.loading({ forbidClick: true });

    clearTimeout(timer);
    timer = setTimeout(() => {
      Toast.clear();
      // 注意此时修改 value 后会再次触发 change 事件
      setValue(val);
    }, 500);
  }}
/>
```

### 圆角风格

将 `theme` 设置为 `round` 来展示圆角风格的步进器。

```jsx
<Stepper value={value} theme="round" buttonSize="22" disableInput />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number\|string_ | - |
| min | 最小值 | _number \| string_ | `1` |
| max | 最大值 | _number \| string_ | - |
| defaultValue | 初始值，当 value 为空时生效 | _number\|string_ | `1` |
| step | 步长，每次点击时改变的值 | _number \| string_ | `1` |
| name | 标识符，可以在 `change` 事件回调参数中获取 | _number \| string_ | - |
| inputWidth | 输入框宽度，默认单位为 `px` | _number \| string_ | `32px` |
| buttonSize | 按钮大小以及输入框高度，默认单位为 `px` | _number \| string_ | `28px` |
| decimalLength | 固定显示的小数位数 | _number \| string_ | - |
| theme | 样式风格，可选值为 `round` | _string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| integer | 是否只允许输入整数 | _boolean_ | `false` |
| disabled | 是否禁用步进器 | _boolean_ | `false` |
| disablePlus | 是否禁用增加按钮 | _boolean_ | `false` |
| disableMinus | 是否禁用减少按钮 | _boolean_ | `false` |
| disableInput | 是否禁用输入框 | _boolean_ | `false` |
| beforeChange | 输入值变化前的回调函数，返回 `false` 可阻止输入，支持返回 Promise | _(value) => boolean \| Promise_ | `false` |
| showPlus | 是否显示增加按钮 | _boolean_ | `true` |
| showMinus | 是否显示减少按钮 | _boolean_ | `true` |
| showInput | 是否显示输入框 | _boolean_ | `true` |
| longPress | 是否开启长按手势 | _boolean_ | `true` |
| allowEmpty | 是否允许输入的值为空 | _boolean_ | `false` |

### Events

| 事件名      | 说明                     | 回调参数                                  |
| ----------- | ------------------------ | ----------------------------------------- |
| onChange    | 当绑定值变化时触发的事件 | _value: string, detail: { name: string }_ |
| onOverlimit | 点击不可用的按钮时触发   | -                                         |
| onPlus      | 点击增加按钮时触发       | -                                         |
| onMinus     | 点击减少按钮时触发       | -                                         |
| onFocus     | 输入框聚焦时触发         | _event: Event_                            |
| onBlur      | 输入框失焦时触发         | _event: Event_                            |

### 类型定义

组件导出以下类型定义：

```js
import type { StepperTheme } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                         | 默认值                       | 描述 |
| -------------------------------------------- | ---------------------------- | ---- |
| --rv-stepper-active-color                    | _#e8e8e8_                    | -    |
| --rv-stepper-background-color                | _var(--rv-active-color)_     | -    |
| --rv-stepper-button-icon-color               | _var(--rv-text-color)_       | -    |
| --rv-stepper-button-disabled-color           | _var(--rv-background-color)_ | -    |
| --rv-stepper-button-disabled-icon-color      | _var(--rv-gray-5)_           | -    |
| --rv-stepper-button-round-theme-color        | _var(--rv-danger-color)_     | -    |
| --rv-stepper-input-width                     | _32px_                       | -    |
| --rv-stepper-input-height                    | _28px_                       | -    |
| --rv-stepper-input-font-size                 | _var(--rv-font-size-md)_     | -    |
| --rv-stepper-input-line-height               | _normal_                     | -    |
| --rv-stepper-input-text-color                | _var(--rv-text-color)_       | -    |
| --rv-stepper-input-disabled-text-color       | _var(--rv-gray-5)_           | -    |
| --rv-stepper-input-disabled-background-color | _var(--rv-active-color)_     | -    |
| --rv-stepper-border-radius                   | _var(--rv-border-radius-md)_ | -    |
