# Form 表单

## 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。

> Form 组件是基于[rc-field-form](https://github.com/react-component/field-form)的封装。

## 引入

```js
import { Form } from 'react-vant';
```

## 代码演示

### 基础用法

在表单中，每个 Form.Item 组件代表一个表单项，使用 Form.Item 的 `rules` 属性定义校验规则，**Form.Item 是基于 Field 和 [RcField](https://github.com/react-component/field-form#field) 的封装**。

<code title="基础用法" src="./demo/base.tsx" />

### 校验规则

通过 `rules` 定义表单校验规则，点击此处查看文档[rule](https://github.com/react-component/field-form#rule)。

<code title="校验规则" src="./demo/rules.tsx" />

### 表单项类型

<code title="表单项类型" src="./demo/type.tsx" />

### 动态增减表单项

Form.List 为字段提供数组化管理。

<code title="动态增减表单项" src="./demo/list.tsx" />

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 表单布局 | _horizontal \| vertical_ | `horizontal` |
| border | 统一设置表单项底部边框显示 | _boolean_ | `true` |
| colon | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 | _boolean_ | `false` |
| showValidateMessage | 是否显示验证错误信息 | _boolean_ | `true` |
| labelAlign | 统一设置左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 统一设置右侧内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| footer | 表单底部内容 | _ReactNode_ | - |

> 更多 Form API 参见：[rc-field-form](https://github.com/react-component/field-form#form)

### Form.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 单独设置表单项布局 | _horizontal \| vertical_ | - |
| border | 单独设置表单项底部边框是否显示 | _boolean_ | - |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | _boolean_ | `false` |
| showValidateMessage | 是否显示验证信息 | _boolean_ | `true` |
| intro | 额外的提示信息 | _ReactNode_ | - |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | _boolean_ | `false` |
| tooltip | 字段提示信息 | _ReactNode \|_ [DialogProps & { icon: ReactNode }](/#/zh-CN/dialog#props) | - |
| customField | 自定义 item，此时不会渲染内置的 field，通常用于自定义表单项 | _boolean_ | `false` |
| disabled | 是否禁用标单项 | _boolean_ | `false` |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 右侧内容对齐方式，可选值为 `center` `right` | _string_ | `left` |

> 更多 Form.Item API 参见：[rc-field-form](https://github.com/react-component/field-form#field)

### Form.List Props

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| children | 渲染函数 | _(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode_ |
| initialValue | 设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准 | _any[]_ |
| name | 字段名，支持数组 | _string \| number \| (string \| number)[]_ |

#### operation

| 参数   | 说明       | 类型                                                 |
| ------ | ---------- | ---------------------------------------------------- |
| add    | 新增表单项 | _(defaultValue?: any, insertIndex?: number) => void_ |
| move   | 移动表单项 | _(from: number, to: number) => void_                 |
| remove | 删除表单项 | _(index: number \| number[]) => void_                |

### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| type | 类型，常见有 `string` `number` `boolean` `url` `email`。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | _string_ |
| enum | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`） | _any[]_ |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | _number_ |
| max | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | _number_ |
| min | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | _number_ |
| transform | 将字段值转换成目标值后进行校验 | _(value) => any_ |
| whitespace | 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效 | _boolean_ |
| required | 是否为必选字段 | _boolean_ |
| message | 错误提示文案 | _string_ |
| validator | 自定义校验，接收 Promise 作为返回值 | _(rule, value, callback: (error?: string) => void, form) => Promise \| void_ |
| pattern | 正则表达式匹配 | _RegExp_ |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 validateTrigger 的子集 | _string\| string[]_ |
