# Cascader 级联选择

## 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

## 引入

```js
import { Cascader } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx" />

### Form中使用

<code title="Form中使用" src="./demo/form.tsx" />

### 异步加载选项

可以监听 `onChange` 事件并动态设置 `options`，实现异步加载选项。

<code title="异步加载选项" src="./demo/async.tsx" />

### 自定义字段名

通过 `fieldNames` 属性可以自定义 `options` 里的字段名称。

<code title="自定义字段名" src="./demo/fieldNames.tsx" />

### 受控组件

通过 `value` 属性可以 Cascader 成为受控组件。

<code title="受控组件" src="./demo/value.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _ReactNode_ | - |
| value | 当前选中的值 | _string[]_ | - |
| defaultValue | 默认选中的值 | _string[]_ | - |
| options | 可选项数据源 | _Option[]_ | `[]` |
| optionRender | 自定义选项文字 | _({ option: Option, selected: boolean }) => ReactNode_ | - |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| activeColor | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIcon | 关闭图标 | _ReactNode_ | `<Cross />` |
| fieldNames | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| children | 渲染函数 | _(val: string[], selectedRows: CascaderOption[], actions: PickerActions) => ReactNode_ | - |

### Events

| 事件 | 说明 | 类型 |
| --- | --- | --- |
| onChange | 选中项变化时触发 | _(val: string[], selectedRows: CascaderOption[]) => void_ |
| onFinish | 全部选项选择完成后触发 | _(val: string[], selectedRows: CascaderOption[]) => void_ |
| onClose | 点击关闭图标时触发 | _() => void_ |
| onClickTab | 点击标签时触发 | _(tabIndex: number, title: string) => void_ |

### CascaderOption 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 选项文字（必填）         | _string_                    |
| value     | 选项对应的值（必填）     | _string \| number_          |
| color     | 选项文字颜色             | _string_                    |
| children  | 子选项列表               | _Option[]_                  |
| disabled  | 是否禁用选项             | _boolean_                   |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                  | 默认值                   | 描述 |
| ------------------------------------- | ------------------------ | ---- |
| --rv-cascader-header-height           | _48px_                   | -    |
| --rv-cascader-header-padding          | _0 var(--rv-padding-md)_ | -    |
| --rv-cascader-title-font-size         | _var(--rv-font-size-lg)_ | -    |
| --rv-cascader-title-line-height       | _20px_                   | -    |
| --rv-cascader-close-icon-size         | _22px_                   | -    |
| --rv-cascader-close-icon-color        | _var(--rv-gray-5)_       | -    |
| --rv-cascader-close-icon-active-color | _var(--rv-gray-6)_       | -    |
| --rv-cascader-selected-icon-size      | _18px_                   | -    |
| --rv-cascader-tabs-height             | _48px_                   | -    |
| --rv-cascader-active-color            | _var(--rv-danger-color)_ | -    |
| --rv-cascader-options-height          | _384px_                  | -    |
| --rv-cascader-option-disabled-color   | _var(--rv-gray-5)_       | -    |
| --rv-cascader-tab-color               | _var(--rv-text-color)_   | -    |
| --rv-cascader-unselected-tab-color    | _var(--rv-gray-6)_       | -    |
