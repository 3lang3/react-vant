---
simulator:
  style:
    background: '#fff'
---

# Checkbox 复选框

## 介绍

用于在选中和非选中状态之间进行切换。

## 引入

```js
import { Checkbox } from 'react-vant';
```

## 代码演示

### 基础用法

- 通过 `defaultChecked` 值默认复选框的勾选状态。
- 通过设置 `disabled` 属性可以禁用复选框。
- 设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。

<code title="基础用法" src="./demo/base.tsx" />

### 自定义

- 将 `shape` 属性设置为 `square`，复选框的形状会变成方形。
- 通过 `checkedColor` 属性设置选中状态的图标颜色。
- 通过 `iconSize` 属性可以自定义图标的大小。

<code title="自定义" src="./demo/custom.tsx" />

### 异步更新

设置 `checked` 属性后，点击图标状态不会改变，而是直接执行 `onChange` 方法，在此方法中更换状态

<code title="异步更新" src="./demo/async.tsx" />

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `defaultChecked` 数组默认复选框的勾选状态。

<code title="复选框组" src="./demo/group.tsx" />

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

<code title="水平排列" src="./demo/direction.tsx" />

### 最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

<code title="最大可选数" src="./demo/max.tsx" />

### 全选与反选

通过 `CheckboxGroup` 实例上的`toggleAll`方法可以实现全选与反选。

<code title="全选与反选" src="./demo/ref.tsx" />

### 搭配单元格组件使用

此时你需要再引入 `Cell` 和 `Cell.Group` 组件。

<code title="搭配单元格组件使用" src="./demo/cell.tsx" />

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否为选中状态 | _boolean_ | `false` |
| defaultChecked | 默认选中项的标识符 | _any[]_ | - |
| name | 标识符 | _any_ | - |
| shape | 形状，可选值为 `square` | _string_ | `round` |
| disabled | 是否禁用复选框 | _boolean_ | `false` |
| labelDisabled | 是否禁用复选框文本点击 | _boolean_ | `false` |
| labelPosition | 文本位置，可选值为 `left` | _string_ | `right` |
| iconSize | 图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| iconRender | 自定义图标 | _({ checked, disabled }) => ReactNode_ | - |
| checkedColor | 选中状态颜色 | _string_ | `#3f45ff` |
| bindGroup | 是否与复选框组绑定 | _boolean_ | `true` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 所有选中项的标识符 | _any[]_ | - |
| defaultChecked | 默认选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数 | _number \| string_ | - |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| iconSize | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checkedColor | 所有复选框的选中状态颜色 | _string_ | `#3f45ff` |

### Checkbox Events

| 事件名   | 说明                     | 回调参数            |
| -------- | ------------------------ | ------------------- |
| onChange | 当绑定值变化时触发的事件 | _checked: boolean_  |
| onClick  | 点击复选框时触发         | _event: MouseEvent_ |

### CheckboxGroup Events

| 事件名   | 说明                     | 回调参数       |
| -------- | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _names: any[]_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | - |

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | - |

### 类型定义

通过 `CheckboxInstance` 和 `CheckboxGroupInstance` 获取 Checkbox 实例的类型定义（从 3.2.0 版本开始支持）。

```ts
import { useRef } from 'react';
import type { CheckboxInstance, CheckboxGroupInstance } from 'react-vant';

const checkboxRef = useRef<CheckboxInstance>();
const checkboxGroupRef = useRef<CheckboxGroupInstance>();

checkboxRef.current?.toggle();
checkboxGroupRef.current?.toggleAll();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-checkbox-size | _20px_ | - |
| --rv-checkbox-border-color | _var(--rv-gray-5)_ | - |
| --rv-checkbox-transition-duration | _var(--rv-animation-duration-fast)_ | - |
| --rv-checkbox-label-margin | _var(--rv-padding-xs)_ | - |
| --rv-checkbox-label-color | _var(--rv-text-color)_ | - |
| --rv-checkbox-checked-icon-color | _var(--rv-primary-color)_ | - |
| --rv-checkbox-disabled-icon-color | _var(--rv-gray-5)_ | - |
| --rv-checkbox-disabled-label-color | _var(--rv-gray-5)_ | - |
| --rv-checkbox-disabled-background-color | _var(--rv-border-color)_ | - |
