# Form 表单

## 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。

> Form 组件是基于[rc-field-form](https://github.com/react-component/field-form)的封装

## 引入

```js
import { Form } from 'react-vant';
```

## 代码演示

### 基础用法

在表单中，每个 Form.Item 组件代表一个表单项，使用 Form.Item 的 `rules` 属性定义校验规则。

<code title="基础用法" src="./demo/base.tsx" />

### 校验规则

通过 `rules` 定义表单校验规则，查看更多[rule 文档](https://github.com/react-component/field-form#rule)。

<code title="校验规则" src="./demo/rules.tsx" />

### 表单项类型

<code title="表单项类型" src="./demo/type.tsx" />

### 自定义表单项

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

- 提供受控属性 `value` 值同名的属性。
- 提供 `onChange` 事件。

<code src="./demo/custom.tsx" title="自定义表单项" />

### 更新订阅

在某些场景，例如修改某个字段值后出现新的字段选项、或希望表单任意变化都对某一个区域进行渲染，可以通过 `Form.Subscribe` 或者 `Form.useWatch` hook 实现。

#### Form.Subscribe 实现更新订阅

<code title="Form.Subscribe"  src="./demo/subscribe.tsx" />

#### Form.useWatch 实现更新订阅

<code title="Form.useWatch"  src="./demo/watch.tsx" />

### 复杂联动

大部分场景下，你只需要编写代码或者与 `dependencies` 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 `shouldUpdate` 修改 `Form.Item` 的更新逻辑

<code title="复杂联动" src="./demo/shouldUpdate.tsx" />

### 动态增减表单项

Form.List 为字段提供数组化管理。

<code title="动态增减表单项" src="./demo/list.tsx" />

## Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | 表单布局 | _horizontal \| vertical_ | `horizontal` |
| border | 统一设置表单项底部边框显示 | _boolean_ | `true` |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 | _boolean_ | `false` |
| required | 配置 Form.Item 的 `required` 的默认值 | _boolean_ | - |
| showValidateMessage | 是否显示验证错误信息 | _boolean_ | `true` |
| labelAlign | 统一设置左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| controlAlign | 统一设置右侧内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| footer | 表单底部内容 | _ReactNode_ | - |

> 更多 Form API 参见：[rc-field-form](https://github.com/react-component/field-form#form)

## Form.Item Props

Form.Item 的布局是基于 `Field` 实现的，所以它支持 [Field](./field#props) 的部分属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | 
| dependencies | 设置依赖字段，说明见下 | `string | number | (string | number)[]` | - |
| disabled | 是否禁用 | `boolean` | 父级 Form 的 `disabled` |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | `any` | - |
| messageVariables | 默认验证字段的信息 | `Record<string, string>` | - |
| noStyle | 不使用样式，只使用字段管理 | `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |
| required | 是否必选 | `boolean` | `false`（如有设置 `rules`，则会根据 `rules` 判断） |
| rules | 校验规则，设置字段的校验逻辑 | `Rule[]` | - |
| shouldUpdate | 自定义字段更新逻辑，说明见下 | `boolean \| (prevValue, curValue) => boolean` | `false` |
| trigger | 设置收集字段值变更的时机 | `string` | `onChange` |
| validateTrigger | 设置字段校验的时机 | `string \| string[]` | `onChange` |
| valuePropName | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | `string` | `value` |
| layout | 单独设置表单项布局 | _horizontal \| vertical_ | - |
| border | 单独设置表单项底部边框是否显示 | _boolean_ | - |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | _boolean_ | `false` |
| showValidateMessage | 是否显示验证信息 | _boolean_ | `true` |
| intro | 额外的提示信息 | _ReactNode_ | - |
| tooltip | 字段提示信息 | _ReactNode \|_ [DialogProps & { icon: ReactNode }](/components/dialog#props) | - |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| controlAlign | 右侧输入控件容器的对齐方式，可选值为 `center` `right` | _string_ | `left` |
| leftIcon | 左侧图标 | _ReactNode_ | - |
| rightIcon | 右侧图标 | _ReactNode_ | - |
| prefix | 自定义控件前部内容 | _ReactNode_ | - |
| suffix | 自定义控件尾部内容 | _ReactNode_ | - |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |

> 更多 Form.Item API 参见：[rc-field-form](https://github.com/react-component/field-form#field)

## Form.Subscribe

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 渲染函数 | `(changedValues: Record<string, any>, form: FormInstance) => ReactNode` | - |
| to | 同 Form.Item 的 `dependencies` | `NamePath[]` | - |

## Form.List Props

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| children | 渲染函数 | _(fields: Field[], [operation](#operation), meta: { errors }) => React.ReactNode_ |
| initialValue | 设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准 | _any[]_ |
| name | 字段名，支持数组 | _string \| number \| (string \| number)[]_ |

### operation

| 参数   | 说明       | 类型                                                 |
| ------ | ---------- | ---------------------------------------------------- |
| add    | 新增表单项 | _(defaultValue?: any, insertIndex?: number) => void_ |
| move   | 移动表单项 | _(from: number, to: number) => void_                 |
| remove | 删除表单项 | _(index: number \| number[]) => void_                |

## Rule 数据结构

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

## FAQ

- 摘自 [antd-mobile](https://mobile.ant.design/zh/components/form#formitem-%E5%A6%82%E4%BD%95%E9%85%8D%E5%90%88-picker--datepicker--cascadepicker-%E4%BD%BF%E7%94%A8)

被设置了 `name` 属性的 `Form.Item` 包装的控件，表单控件会**自动添加** `value`（或 `valuePropName` 指定的其他属性） `onChange`（或 `trigger` 指定的其他属性），数据同步将被 Form 接管，因此，如果你给 `Form.Item` 设置了 `name` 属性，**那么请确保它的 `children` 是一个有效的 `ReactElement` 控件** ，并且能够接受上文中提到的 `value` 和 `onChange` 属性（或指定的其他属性），例如：

```jsx | pure
<Form.Item name="foo">
  <Input />
</Form.Item>
```

而下面这些写法都是错误的：

```jsx | pure
<Form.Item name="foo">
  <Input />
  <div>hello</div>
</Form.Item>
// 错误：Form.Item 的 children 中包含了多个元素
```

```jsx | pure
<Form.Item name="foo">
  hello
  <Input />
</Form.Item>
// 错误：同上，Form.Item 的 children 中包含了多个元素
```

```jsx | pure
<Form.Item name="foo">
  <div>
    <Input />
  </div>
</Form.Item>
// 错误：Form.Item 的 children 其实是 div，而 div 并不能接受 value 和 onChange 属性
```

同时请注意：

1. 你**不再需要也不应该**用 `onChange` 来做数据收集同步（你可以使用 Form 的 `onValuesChange`），但还是可以继续监听 `onChange` 事件。
2. 你不能用控件的 `value` 或 `defaultValue` 等属性来设置表单域的值，默认值可以用 Form 里的 `initialValues` 来设置。注意 `initialValues` 不能被 `setState` 动态更新，你需要用 `setFieldsValue` 来更新。
3. 你不应该用 `setState`，可以使用 `form.setFieldsValue` 来动态改变表单值。

举个例子，下面的这种写法是错误的：

```jsx | pure
<Form.Item name="foo">
  <Input
    value={myInputValue} // 错误：value 不应该被手动控制
    onChange={(v) => {
      setMyInputValue(v);
    }} // 错误：虽然你可以监听 onChange 事件，但是你不应该在这里去维护自己的状态
  />
</Form.Item>
```

### dependencies

当字段间存在依赖关系时使用。如果一个字段设置了 `dependencies` 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 `dependencies` 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。

`dependencies` 不应和 `shouldUpdate` 一起使用，因为这可能带来更新逻辑的混乱。

### shouldUpdate

Form 通过增量更新方式，只更新被修改的字段相关组件以达到性能优化目的。大部分场景下，你只需要编写代码或者与 [`dependencies`](#dependencies) 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 `shouldUpdate` 修改 Form.Item 的更新逻辑。

当 `shouldUpdate` 为 `true` 时，Form 的任意变化都会使该 Form.Item 重新渲染。这对于自定义渲染一些区域十分有帮助：

```jsx | pure
<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>
```

当 `shouldUpdate` 为方法时，表单的每次数值更新都会调用该方法，提供原先的值与当前的值以供你比较是否需要更新。这对于是否根据值来渲染额外字段十分有帮助：

```jsx | pure
<Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
  {() => {
    return (
      <Form.Item name="other">
        <Input />
      </Form.Item>
    );
  }}
</Form.Item>
```

### messageVariables

你可以通过 `messageVariables` 修改 Form.Item 的默认验证信息。

```jsx | pure
<Form>
  <Form.Item messageVariables={{ another: 'good' }} label="user">
    <Input />
  </Form.Item>
  <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>}>
    <Input />
  </Form.Item>
</Form>
```

### Form.Item 如何配合 Picker / DatePicker / CascadePicker 使用？

首先，我们可以通过 Picker 的 `children` 渲染函数，来渲染当前已经选择的值，这里我们已 DatePicker 为例，但是对于其他两种 Picker，也是大同小异的：

```jsx | pure
<DatetimePicker>
  {value =>
    value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
  }
</DatetimePicker>
```

接下来我们需要处理 Picker 的显示/隐藏状态，这是 Picker 组件和其他表单组件差异最大、也最容易让人迷惑的地方了。如果我们直接把 Picker 放在 Form.Item 里面，是没有办法展示给用户的，无论怎么点击，都不会让 Picker 弹出来：

```tsx | pure
<Form.Item
  name='birthday'
  label='Birthday'
>
  <DatePicker>
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatePicker>
</Form.Item>
```

在绝大多数情况下，我们需要实现的效果是，点击外层的 Form.Item，会触发内部 Picker 的显示。但是，在 Form.Item 上，怎么才能控制到 Picker 呢？或许你会想自己声明一个 state 来手动控制，例如：

```tsx | pure
const [visible, setVisible] = useState(false)
```

```tsx | pure
<Form.Item
  name='birthday'
  label='Birthday'
  onClick={() => {
    setVisible(true)
  }}
>
  <DatetimePicker
    visible={visible}
    onClose={() => {
      setVisible(false)
    }}
  >
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatetimePicker>
</Form.Item>
```

但是这样写实在是太繁琐了，而且如果一个表单内存在多个 Picker 或者要配合 Form.Array 使用时，简直会令人崩溃。

所以 antd-mobile 提供了一个便捷方法，你可以在 Form.Item 的 `onClick` 事件中，直接获取到内部 `children` 的 ref，因此我们可以这么写：

```tsx | pure
<Form.Item
  name='birthday'
  label='Birthday'
  onClick={(e, datePickerRef: RefObject<PickerPopupActions>) => {
    datePickerRef.current?.open() // ⬅️
  }}
>
  <DatetimePicker>
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatetimePicker>
</Form.Item>
```

最后，别忘了 Picker 组件的确认事件是 `onConfirm` 而不是 `onChange`，因此你需要配置一下 `trigger`：

```tsx | pure
<Form.Item
  name='birthday'
  label='Birthday'
  trigger='onConfirm'  // ⬅️
  onClick={(e, datePickerRef: RefObject<PickerPopupActions>) => {
    datePickerRef.current?.open()
  }}
>
  ...
</Form.Item>
```
