# Selector 选择组

在一组选项中选择一个或多个。

## 代码演示

### 基础用法

提供多个选项供用户选择，一般在筛选和表单中使用。

<code src="./demo/base.tsx"></code>

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中项 | `SelectorValue[]` | - |
| defaultValue | 默认项 | `SelectorValue[]` | `[]` |
| onChange | 选项改变时触发 | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | - |
| disabled | 是否全局禁止选中 | `boolean` | `false` |
| multiple | 是否允许多选 | `boolean` | `false` |
| options | 可选项 | `SelectorOption[]` | - |
| showCheckMark | 是否显示对勾角标 | `boolean` | `true` |

## 类型定义

### SelectorValue

```ts | pure
type SelectorValue = string | number;
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| description | 描述     | `ReactNode`     | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |
| label       | 文字     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |

### SelectorValue

```ts | pure
type SelectorValue = string | number;
```

## 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```tsx | pure
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={(arr) => console.log(arr)}
/>
```

### SelectorOption

| 属性        | 说明     | 类型            | 默认值  |
| ----------- | -------- | --------------- | ------- |
| description | 描述     | `ReactNode`     | -       |
| disabled    | 是否禁用 | `boolean`       | `false` |
| label       | 文字     | `ReactNode`     | -       |
| value       | 选项的值 | `SelectorValue` | -       |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-selector-color | var(--rv-gray-2) | 背景色 |
| --rv-selector-checked-color | #efefff | 选中背景色 |
| --rv-selector-text-color | var(--rv-text-color) | 文本色 |
| --rv-selector-checked-text-color | var(--rv-primary-color) | 选中文本色 |
| --rv-selector-border | none | 边框 |
| --rv-selector-checked-border | none | 选中边框 |
| --rv-selector-border-radius | var(--rv-border-radius-sm) | 圆角 |
| --rv-selector-padding | var(--rv-padding-xs) var(--rv-padding-md) | 内边距 |
| --rv-selector-margin | 0 var(--rv-padding-xs) var(--rv-padding-xs) 0 | 间距 |
