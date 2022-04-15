# Field 输入框

## 介绍

表单中的输入框组件。

## 引入

```js
import { Field } from 'react-vant';
```

## 代码演示

### 基础用法

可以通过 `value` 和 `input` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React, { useState } from 'react';
import { Field } from 'react-vant';

// Field 是基于 Cell 实现的，可以使用 Cell.Group 作为容器来提供外边框。
export default () => {
  const [value, setValue] = useState('');
  return (
    <Field
      label="文本"
      tooltip="提示tooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="请输入文本"
      value={value}
      onChange={setValue}
    />
  );
};
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

<code title="自定义类型" card src="./demo/type.tsx" />

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```jsx
/**
 * title: 禁用输入框
 * card: true
 */
import React from 'react';
import { Cell, Field } from 'react-vant';

export default () => {
  return (
    <Cell.Group>
      <Field label="文本" value="输入框只读" readonly />
      <Field label="文本" value="输入框已禁用" disabled />
    </Cell.Group>
  );
};
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

<code title="显示图标" card src="./demo/icon.tsx" />

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

<code title="错误提示" card src="./demo/error.tsx" />

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```jsx
/**
 * title: 插入按钮
 * card: true
 */
import React from 'react';
import { Field, Button } from 'react-vant';

export default () => {
  return (
    <Field
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      button={
        <Button size="small" type="primary">
          发送
        </Button>
      }
    />
  );
};
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `format-trigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

<code title="格式化输入内容" card src="./demo/formatter.tsx">

### 高度自适应

对于 textarea，可以通过 `autosize` 属性设置高度自适应。

```jsx
/**
 * title: 高度自适应
 * card: true
 */
import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      autosize
      value={content}
      onChange={setContent}
      label="留言"
      type="textarea"
      placeholder="请输入留言"
    />
  );
};
```

### 显示字数统计

设置 `maxlength` 和 `showWordLimit` 属性后会在底部显示字数统计。

```jsx
/**
 * title: 显示字数统计
 * card: true
 */
import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autosize
      label="留言"
      type="textarea"
      placeholder="请输入留言"
      value={content}
      onChange={setContent}
      maxlength={50}
      showWordLimit
    />
  );
};
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `center`、`right`。

```jsx
/**
 * title: 显示字数统计
 * card: true
 */
import React from 'react';
import { Field } from 'react-vant';

export default () => {
  return <Field label="文本" placeholder="输入框内容右对齐" inputAlign="right" />;
};
```

### ref 调用

通过 ref 可以获取到 Field 实例并调用实例方法。

<code title="ref调用" card src="./demo/ref.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number \| string_ | - |
| label | 输入框左侧文本 | _string_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否只读 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| intro | 额外的输入框提示信息 | _ReactNode_ | - |
| tooltip | 字段提示信息 | _ReactNode \|_ [DialogProps & { icon: ReactNode }](/#/zh-CN/dialog#props) | - |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clearIcon | 清除图标名称或图片链接 | _ReactNode_ | `<Clear />` |
| clearTrigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，`focus` 表示输入框聚焦且不为空时展示 | FieldClearTrigger | `focus` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| showWordLimit | 是否显示字数统计，需要设置`maxlength`属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| formatter | 输入内容格式化函数 | _Function_ | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| autosize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| leftIcon | 左侧图标 | _ReactNode_ | - |
| rightIcon | 右侧图标 | _ReactNode_ | - |
| button | 自定义输入框尾部按钮 | _ReactNode_ | - |

### Events

| 事件             | 说明                 | 回调参数                |
| ---------------- | -------------------- | ----------------------- |
| onChange         | 当值变化时触发      | _val: string \| number_ |
| onFocus          | 输入框获得焦点时触发 | _event: MouseEvent_     |
| onBlur           | 输入框失去焦点时触发 | _event: MouseEvent_     |
| onClear          | 点击清除按钮时触发   | _event: MouseEvent_     |
| onClick          | 点击 Field 时触发    | _event: MouseEvent_     |
| onClickInput     | 点击输入区域时触发   | _event: MouseEvent_     |
| onClickLeftIcon  | 点击左侧图标时触发   | _event: MouseEvent_     |
| onClickRightIcon | 点击右侧图标时触发   | _event: MouseEvent_     |

### 方法

通过 ref 可以获取到 Field 实例并调用实例方法

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                 | 默认值                   | 描述 |
| ------------------------------------ | ------------------------ | ---- |
| --rv-field-label-width               | _6.2em_                  | -    |
| --rv-field-label-color               | _var(--rv-gray-7)_       | -    |
| --rv-field-label-margin-right        | _var(--rv-padding-sm)_   | -    |
| --rv-field-input-text-color          | _var(--rv-text-color)_   | -    |
| --rv-field-input-background-color    | _transparent_            | -    |
| --rv-field-input-error-text-color    | _var(--rv-danger-color)_ | -    |
| --rv-field-input-disabled-text-color | _var(--rv-gray-5)_       | -    |
| --rv-field-placeholder-text-color    | _var(--rv-gray-5)_       | -    |
| --rv-field-icon-size                 | _16px_                   | -    |
| --rv-field-clear-icon-size           | _16px_                   | -    |
| --rv-field-clear-icon-color          | _var(--rv-gray-5)_       | -    |
| --rv-field-right-icon-color          | _var(--rv-gray-6)_       | -    |
| --rv-field-error-message-color       | _var(--rv-danger-color)_ | -    |
| --rv-field-error-message-font-size   | _12px_                   | -    |
| --rv-field-text-area-min-height      | _60px_                   | -    |
| --rv-field-word-limit-color          | _var(--rv-gray-7)_       | -    |
| --rv-field-word-limit-font-size      | _var(--rv-font-size-sm)_ | -    |
| --rv-field-word-limit-line-height    | _16px_                   | -    |
| --rv-field-disabled-text-color       | _var(--rv-gray-5)_       | -    |
| --rv-field-required-mark-color       | _var(--rv-red)_          | -    |

## 常见问题

### 设置 type 为 number 后，为什么 input 标签的类型仍为 text?

HTML 原生的 `type="number"` 属性在 iOS 和 Android 系统上都存在一定问题，比如 maxlength 属性不生效、无法获取到完整的输入内容等。因此设置 type 为 `number` 时，Field 不会使用原生的 `type="number"` 属性，而是用现代浏览器支持的 [inputmode 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)来控制输入键盘的类型。

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
