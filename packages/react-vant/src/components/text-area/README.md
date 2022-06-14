# TextArea 多行输入框

## 介绍

用于多行输入或编辑文字。

## 引入

```js
import { TextArea } from 'react-vant';
```

## 代码演示

### 基础用法

可以通过 `value` 和 `onChange` 双向绑定文本域的值，通过 `placeholder` 设置占位提示文字。

```jsx
/**
 * title: 基础用法
 */
import React, { useState } from 'react';
import { TextArea, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <TextArea placeholder="请输入内容" value={value} onChange={setValue} />
    </Cell>
  );
};
```

### 自适应高度

`autosize` 可以使文本域自适应高度，还能设置其最小和最大高度。

```jsx
/**
 * title: 自适应高度
 */
import React, { useState } from 'react';
import { TextArea, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <TextArea placeholder="自适应高度" autosize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <TextArea
          placeholder="最小高度80，最大高度120"
          autosize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};
```

### 字数统计

通过 `maxLength` 和 `showWordLimit` 可以开启文本域输入字数显示。

```jsx
/**
 * title: 字数统计
 */
import React, { useState } from 'react';
import { TextArea, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <TextArea placeholder="字数统计" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <TextArea
          placeholder="自定义输出"
          showWordLimit={({ currentCount }) => <span>已经输入{currentCount}个字啦 ✍️</span>}
        />
      </Cell>
    </>
  );
};
```

### 文本域状态

通过 `maxLength` 和 `showWordLimit` 可以开启文本域输入字数显示。

```jsx
/**
 * title: 文本域状态
 */
import React, { useState } from 'react';
import { TextArea, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <TextArea defaultValue="Hello React Vant 只读状态" readOnly />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <TextArea defaultValue="Hello React Vant 禁用状态" disabled />
      </Cell>
    </>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入值 | _string_ | - |
| defaultValue | 默认值 | _string_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| rows | 输入框行数 | _number_ | 2 |
| maxLength | 输入的最大字符数 | _number_ | - |
| placeholder | 文本域占位提示文字 | _string_ | - |
| disabled | 是否禁用文本域 | _boolean_ | `false` |
| readOnly | 是否只读 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空文本域 | _boolean_ | `false` |
| clearIcon | 自定义清除图标 | _ReactNode_ | `<Clear />` |
| clearTrigger | 显示清除图标的时机，<br /> `always` 表示文本域不为空时展示，<br /> `focus` 表示文本域聚焦且不为空时展示 | `always` `focus` | `focus` |
| autoFocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| showWordLimit | 是否显示字数统计，支持自定义内容 | _boolean\|({ currentCount, maxLengh }) => ReactNode_ | `false` |
| autosize | 是否自适应内容高度，可传入对象,如 `{ maxHeight: 100, minHeight: 50 }`，单位为`px` | _boolean \| object_ | `false` |

### Events

| 事件        | 说明                            | 回调参数            |
| ----------- | ------------------------------- | ------------------- |
| onChange    | 文本域内容变化时触发            | _val: string_       |
| onFocus     | 文本域获得焦点时触发            | _event: MouseEvent_ |
| onBlur      | 文本域失去焦点时触发            | _event: MouseEvent_ |
| onClear     | 点击清除按钮时触发              | _event: MouseEvent_ |
| onClick     | 点击 `TextArea` 时触发          | _event: MouseEvent_ |
| onOverlimit | 当输入值超出 `maxLength` 时触发 | -                   |

### 方法

通过 `ref` 可以获取到 `TextArea` 实例并调用实例方法

| 方法名        | 说明                     | 参数                          | 返回值 |
| ------------- | ------------------------ | ----------------------------- | ------ |
| focus         | 获取文本域框焦点         | -                             | -      |
| blur          | 取消文本域框焦点         | -                             | -      |
| clear         | 清空文本域内容           | -                             | -      |
| nativeElement | 获取原始 `textarea` 元素 | _HtmlTextAreaElement \| null_ | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                    | 默认值                   | 描述 |
| --------------------------------------- | ------------------------ | ---- |
| --rv-textaea-text-color                 | _var(--rv-text-color)_   | -    |
| --rv-textaea-background-color           | _transparent_            | -    |
| --rv-textaea-disabled-text-color        | _var(--rv-gray-5)_       | -    |
| --rv-textaea-placeholder-text-color     | _var(--rv-gray-5)_       | -    |
| --rv-textaea-placeholder-text-font-sise | _var(--rv-font-size-md)_ | -    |
| --rv-textaea-clear-icon-size            | _16px_                   | -    |
| --rv-textaea-clear-icon-color           | _var(--rv-gray-5)_       | -    |
| --rv-textaea-min-height                 | _60px_                   | -    |
| --rv-textaea-word-limit-color           | _var(--rv-gray-7)_       | -    |
| --rv-textaea-word-limit-font-size       | _var(--rv-font-size-sm)_ | -    |
| --rv-textaea-word-limit-line-height     | _16px_                   | -    |

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[桌面端适配](/guide/advanced-usage)。
