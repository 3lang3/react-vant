# Picker 选择器

## 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](#/zh-CN/popup)组件配合使用。

## 引入

```js
import { Picker } from 'react-vant';
```

## 代码演示

### 基础用法

- Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。
- 顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。
- 单列选择时，可以通过 `defaultIndex` 属性设置初始选中项的索引。
- 选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

<code title="基础用法" card src="./demo/base.tsx" />

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见[下方表格](#/zh-CN/picker#column-shu-ju-jie-gou)。

<code title="多列选择" card src="./demo/columns.tsx" />

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果。

<code title="级联选择" card src="./demo/cascader.tsx" />

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用 `setColumnValues` 方法实现多列联动。

<code title="动态设置选项" card src="./demo/dynic.tsx" />

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

<code title="加载状态" card src="./demo/loading.tsx" />

### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

<code title="搭配弹出层使用" card src="./demo/popup.tsx" />

### 自定义 Columns 的结构

<code title="自定义 Columns 的结构" card src="./demo/columnsFieldNames.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Column[]_ | `[]` |
| columnsFieldNames | 自定义 `columns` 结构中的字段 | _object_ | `{ text: 'text', values: 'values', children: 'children' }` |
| title | 顶部栏标题 | _ReactNode_ | - |
| confirmButtonText | 确认按钮文字 | _ReactNode_ | `确认` |
| cancelButtonText | 取消按钮文字 | _ReactNode_ | `取消` |
| toolbar | 自定义整个顶部栏的内容 | _ReactNode_ | - |
| toolbarPosition | 顶部栏位置，可选值为 `bottom` | _string_ | `top` |
| columnsTop | 自定义选项上方内容 | _ReactNode_ | - |
| columnsBottom | 自定义选项下方内容 | _ReactNode_ | - |
| optionRender | 自定义选项内容 | _(option: string \| object) => ReactNode_ | - |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| defaultIndex | 单列选择时，默认选中项的索引 | _number \| string_ | `0` |
| itemHeight | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

当选择器有多列时，事件回调参数会返回数组。

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| onCancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| onChange | 选项改变时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，当前列对应的索引 |

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`:

| 键名         | 说明                       | 类型                        |
| ------------ | -------------------------- | --------------------------- |
| values       | 列中对应的备选值           | _Array<string \| number>_   |
| defaultIndex | 初始选中项的索引，默认为 0 | _number_                    |
| className    | 为对应列添加额外的类名     | _string \| Array \| object_ |
| children     | 级联选项                   | _Column_                    |

### 方法

通过 ref 可以获取到 Picker 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名          | 说明                            | 参数                     | 返回值      |
| --------------- | ------------------------------- | ------------------------ | ----------- |
| getValues       | 获取所有列选中的值              | -                        | values      |
| setValues       | 设置所有列选中的值              | values                   | -           |
| getIndexes      | 获取所有列选中值对应的索引      | -                        | indexes     |
| setIndexes      | 设置所有列选中值对应的索引      | indexes                  | -           |
| getColumnValue  | 获取对应列选中的值              | columnIndex              | value       |
| setColumnValue  | 设置对应列选中的值              | columnIndex, value       | -           |
| getColumnIndex  | 获取对应列选中项的索引          | columnIndex              | optionIndex |
| setColumnIndex  | 设置对应列选中项的索引          | columnIndex, optionIndex | -           |
| getColumnValues | 获取对应列中所有选项            | columnIndex              | values      |
| setColumnValues | 设置对应列中所有选项            | columnIndex, values      | -           |
| confirm         | 停止惯性滚动并触发 confirm 事件 | -                        | -           |

### 类型定义

通过 `PickerInstance` 获取 Picker 实例的类型定义。

```ts
import { useRef } from 'react';
import type { PickerInstance } from 'react-vant';

const pickerRef = useRef<PickerInstance>();

pickerRef.current?.confirm();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                | 默认值                      | 描述 |
| ----------------------------------- | --------------------------- | ---- |
| --rv-picker-background-color        | _var(--rv-white)_           | -    |
| --rv-picker-toolbar-height          | _44px_                      | -    |
| --rv-picker-title-font-size         | _var(--rv-font-size-lg)_    | -    |
| --rv-picker-title-line-height       | _var(--rv-line-height-md)_  | -    |
| --rv-picker-action-padding          | _0 var(--rv-padding-md)_    | -    |
| --rv-picker-action-font-size        | _var(--rv-font-size-md)_    | -    |
| --rv-picker-confirm-action-color    | _var(--rv-text-link-color)_ | -    |
| --rv-picker-cancel-action-color     | _var(--rv-gray-6)_          | -    |
| --rv-picker-option-padding          | _0 var(--rv-padding-base)_  | -    |
| --rv-picker-option-font-size        | _var(--rv-font-size-lg)_    | -    |
| --rv-picker-option-text-color       | _var(--rv-black)_           | -    |
| --rv-picker-option-disabled-opacity | _0.3_                       | -    |
| --rv-picker-loading-icon-color      | _var(--rv-primary-color)_   | -    |
| --rv-picker-loading-mask-color      | _rgba(255, 255, 255, 0.9)_  | -    |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
