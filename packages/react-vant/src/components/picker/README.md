# Picker 选择器

## 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](/components/popup)组件配合使用。

## 引入

```js
import { Picker } from 'react-vant';
```

## 代码演示

### 基础用法

- Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。
- 顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。
- 选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

<code title="基础用法" card src="./demo/base.tsx" />

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见[下方表格](/components/picker#pickercolumn-数据结构)。

<code title="多列选择" card src="./demo/columns.tsx" />

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果，`value` 字段可以指定选项返回值

<code title="级联选择" card src="./demo/cascader.tsx" />

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用 `setColumnValues` 方法实现多列联动。

<code title="动态设置选项" card src="./demo/dynic.tsx" />

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

<code title="加载状态" card src="./demo/loading.tsx" />

### 启用弹出层

可以通过 `popup` 属性启用弹出层特性

<code title="启用弹出层" src="./demo/popup.tsx">

> 启用 `popup` 属性后，一般使用 `onConfirm` 事件代替 `onChange` 更新外部值

### 自定义 Columns 的结构

<code title="自定义 Columns 的结构" card src="./demo/columnsFieldNames.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中项 | _string\|string[]_ | - |
| defaultValue | 默认选中项 | _string\|string[]_ | - |
| columns | 对象数组，配置每一列显示的数据 | _PickerColumn\| PickerColumn[]_ | `[]` |
| columnsFieldNames | 自定义 `columns` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| title | 顶部栏标题 | _ReactNode_ | - |
| placeholder | 占位符内容 | _ReactNode\|ReactNode[]_ | `请选择` |
| confirmButtonText | 确认按钮文字 | _ReactNode_ | `确认` |
| cancelButtonText | 取消按钮文字 | _ReactNode_ | `取消` |
| toolbar | 自定义整个顶部栏的内容 | _ReactNode_ | - |
| toolbarPosition | 顶部栏位置，可选值为 `bottom` | _string_ | `top` |
| columnsTop | 自定义选项上方内容 | _ReactNode_ | - |
| columnsBottom | 自定义选项下方内容 | _ReactNode_ | - |
| optionRender | 自定义选项内容 | _(option: string \| object) => ReactNode_ | - |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| itemHeight | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `300` |

### Events

当选择器有多列时，事件回调参数会返回数组。

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | 点击完成按钮时触发 | 单列：选中值，选择项，选中项对应的索引<br>多列：所有列选中值，所有列选中项，所有列选中项对应的索引 |
| onChange | 选项改变时触发 | 单列：选中值，选择项，选中项对应的索引<br>多列：所有列选中值，所有列选中项，所有列选中项对应的索引 |
| onCancel | 点击取消按钮时触发 | - |

### PickerColumn 数据结构

```ts | pure
export type PickerColumnOption = {
  text?: React.ReactNode;
  value?: string;
  children?: PickerColumnOption[];
  disabled?: boolean;
} & Record<string, any>;

export type PickerColumn<T = PickerColumnOption> = (string | T)[];
```

### 方法

开启 `popup` 属性后, 通过 `ref` 可以获取到 `Picker` 实例并调用实例方法，详见[组件实例方法](/guide/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                         | 类型         |
| ------ | ---------------------------- | ------------ |
| open   | 显示 Picker                  | _() => void_ |
| close  | 关闭 Picker                  | _() => void_ |
| toggle | 切换 Picker 的显示和隐藏状态 | _() => void_ |

### 类型定义

通过 `PickerPopupActions` 获取 Picker 实例的类型定义。

```ts
import { useRef } from 'react';
import type { PickerPopupActions } from 'react-vant';

const pickerRef = useRef<PickerPopupActions>();

pickerRef.current?.open();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-picker-background-color | _var(--rv-white)_ | - |
| --rv-picker-toolbar-height | _44px_ | - |
| --rv-picker-title-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-picker-title-line-height | _var(--rv-line-height-md)_ | - |
| --rv-picker-action-padding | _0 var(--rv-padding-md)_ | - |
| --rv-picker-action-font-size | _var(--rv-font-size-md)_ | - |
| --rv-picker-confirm-action-color | _var(--rv-text-link-color)_ | - |
| --rv-picker-cancel-action-color | _var(--rv-gray-6)_ | - |
| --rv-picker-option-padding | _0 var(--rv-padding-base)_ | - |
| --rv-picker-option-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-picker-option-text-color | _var(--rv-black)_ | - |
| --rv-picker-option-disabled-opacity | _0.3_ | - |
| --rv-picker-loading-icon-color | _var(--rv-primary-color)_ | - |
| --rv-picker-loading-mask-color | _rgba(255, 255, 255, 0.9)_ | - |
| --rv-picker-mask-background-image | _linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),<br> linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))_ | - |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](/guide/advanced-usage)。
