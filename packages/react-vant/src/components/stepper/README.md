# Stepper 步进器

## 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字，支持长按调整。

## 引入

```js
import { Stepper } from 'react-vant';
```

## 代码演示

### 基础示例

通过 `value` 绑定输入值，可以通过 `onChange` 事件监听到输入值的变化。

<code title="基础示例" src="./demo/base.tsx"></code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number\|null_ | - |
| defaultValue | 默认值 | _number\|null_ | `0` |
| min | 最小值 | _number_ | - |
| max | 最大值 | _number_ | - |
| step | 步长，每次点击时改变的值 | _number_ | `1` |
| name | 标识符，可以在 `change` 事件回调参数中获取 | _string_ | - |
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
| showPlus | 是否显示增加按钮 | _boolean_ | `true` |
| showMinus | 是否显示减少按钮 | _boolean_ | `true` |
| showInput | 是否显示输入框 | _boolean_ | `true` |
| longPress | 是否开启长按手势 | _boolean_ | `true` |
| allowEmpty | 是否允许输入的值为空 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击输入框时触发 | _event: Event_ |
| onChange | 当绑定值变化时触发的事件 | _value: number\|null, detail: { name: string }_ |
| onOverlimit | 点击不可用的按钮时触发 | - |
| onPlus | 点击增加按钮时触发 | - |
| onMinus | 点击减少按钮时触发 | - |
| onFocus | 输入框聚焦时触发 | _event: Event_ |
| onBlur | 输入框失焦时触发 | _event: Event_ |

### Stepper 方法

通过 ref 可以获取到 Swiper 实例并调用实例方法。

| 方法名 | 说明                | 参数 | 返回值 |
| ------ | ------------------- | ---- | ------ |
| focus  | 输入框 `focus` 事件 | -    | -      |
| blur   | 输入框 `blur` 事件  | -    | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type { StepperTheme, StepperInstance } from 'react-vant';
```

`StepperInstance` 是组件实例的类型，用法如下：

```ts
import { useRef } from 'react';
import type { StepperInstance } from 'react-vant';

const stepperRef = useRef<StepperInstance>(null);

swipeRef.current?.focus();
swipeRef.current?.blur();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-stepper-active-color | _#e8e8e8_ | - |
| --rv-stepper-background-color | _var(--rv-active-color)_ | - |
| --rv-stepper-button-icon-color | _var(--rv-text-color)_ | - |
| --rv-stepper-button-disabled-color | _var(--rv-background-color)_ | - |
| --rv-stepper-button-disabled-icon-color | _var(--rv-gray-5)_ | - |
| --rv-stepper-button-round-theme-color | _var(--rv-danger-color)_ | - |
| --rv-stepper-input-width | _32px_ | - |
| --rv-stepper-input-height | _28px_ | - |
| --rv-stepper-input-font-size | _var(--rv-font-size-md)_ | - |
| --rv-stepper-input-line-height | _normal_ | - |
| --rv-stepper-input-text-color | _var(--rv-text-color)_ | - |
| --rv-stepper-input-disabled-text-color | _var(--rv-gray-5)_ | - |
| --rv-stepper-input-disabled-background-color | _var(--rv-active-color)_ | - |
| --rv-stepper-border-radius | _var(--rv-border-radius-md)_ | - |
