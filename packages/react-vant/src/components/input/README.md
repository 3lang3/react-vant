# Input 输入框

## 介绍

用户可以在文本框内输入或编辑文字。

## 引入

```js
import { Input } from 'react-vant';
```

## 代码演示

### 基础用法

可以通过 `value` 和 `onChange` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```jsx
/**
 * title: 基础用法
 */
import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input type="number" placeholder="请输入文本" value={value} onChange={setValue} />
    </Cell>
  );
};
```

### 清除按钮

可以通过 `clearable` `clearIcon` `clearTrigger` 可以控制清除按钮的展示时机以及自定义按钮内容。

```jsx
/**
 * title: 清除按钮
 */
import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input
        placeholder="请输入文本"
        value={value}
        onChange={setValue}
        clearable
        clearTrigger="always"
      />
    </Cell>
  );
};
```

### 最大输入字符

`maxLength` 属性可以控制输入框最大输入字符数量。

```jsx
/**
 * title: 最大输入字符
 */
import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input placeholder="最多输入10个字符" value={value} onChange={setValue} maxLength={10} />
    </Cell>
  );
};
```

### 对齐方式

可以通过 `align` 属性可以控制输入框内容对齐方式。

```jsx
/**
 * title: 对齐方式
 */
import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="内容剧中" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input placeholder="内容右对齐" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};
```

### 输入框状态

- `readOnly` 控制只读状态
- `disabled` 控制禁用状态

```jsx
/**
 * title: 输入框状态
 */
import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('只读模式');
  const [value2, setValue2] = useState('禁用模式');
  return (
    <>
      <Cell>
        <Input value={value1} onChange={setValue1} readOnly />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input value={value2} onChange={setValue2} disabled />
      </Cell>
    </>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _string_ | - |
| defaultValue | 默认值 | _string_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit` `number` `textarea` `password` 等 | _string_ | `text` |
| maxLength | 输入的最大字符数 | _number_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readOnly | 是否只读 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clearIcon | 自定义清除图标 | _ReactNode_ | `<Clear />` |
| clearTrigger | 显示清除图标的时机，<br /> `always` 表示输入框不为空时展示，<br /> `focus` 表示输入框聚焦且不为空时展示 | `always` `focus` | `focus` |
| autoFocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |

### Events

| 事件     | 说明                 | 回调参数            |
| -------- | -------------------- | ------------------- |
| onChange | 当值变化时触发       | _val: string_       |
| onFocus  | 输入框获得焦点时触发 | _event: MouseEvent_ |
| onBlur   | 输入框失去焦点时触发 | _event: MouseEvent_ |
| onClear  | 点击清除按钮时触发   | _event: MouseEvent_ |
| onClick  | 点击 `Input` 时触发  | _event: MouseEvent_ |

### 方法

通过 `ref` 可以获取到 `Input` 实例并调用实例方法

| 方法名        | 说明                  | 参数                       | 返回值 |
| ------------- | --------------------- | -------------------------- | ------ |
| focus         | 获取输入框焦点        | -                          | -      |
| blur          | 取消输入框焦点        | -                          | -      |
| clear         | 清空输入内容          | -                          | -      |
| nativeElement | 获取原始 `input` 元素 | _HtmlInputElement \| null_ | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                              | 默认值                 | 描述 |
| --------------------------------- | ---------------------- | ---- |
| --rv-input-text-color             | _var(--rv-text-color)_ | -    |
| --rv-input-background-color       | _transparent_          | -    |
| --rv-input-disabled-text-color    | _var(--rv-gray-5)_     | -    |
| --rv-input-placeholder-text-color | _var(--rv-gray-5)_     | -    |
| --rv-input-clear-icon-size        | _16px_                 | -    |
| --rv-input-clear-icon-color       | _var(--rv-gray-5)_     | -    |
| --rv-input-disabled-text-color    | _var(--rv-gray-5)_     | -    |

## 常见问题

### 设置 type 为 number 后，为什么 input 标签的类型仍为 text?

HTML 原生的 `type="number"` 属性在 iOS 和 Android 系统上都存在一定问题，比如 maxlength 属性不生效、无法获取到完整的输入内容等。因此设置 type 为 `number` 时，`Input` 不会使用原生的 `type="number"` 属性，而是用现代浏览器支持的 [inputmode 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)来控制输入键盘的类型。

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[桌面端适配](/guide/advanced-usage)。
