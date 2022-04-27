# PasswordInput 密码输入框

## 介绍

密码输入框

## 引入

```js
import { PasswordInput } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};
```

### 限制长度

```jsx
/**
 * title: 限制长度
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};
```

### 格子间距

```jsx
/**
 * title: 格子间距
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};
```

### 明文展示

```jsx
/**
 * title: 明文展示
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};
```

### 只允许数字

```jsx
/**
 * title: 只允许数字
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};
```

### 自定义规则

> 如果设置的初始值不符合规则, 将不会展示

```jsx
/**
 * title: 只允许数字
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value={123}
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};
```

### 自动聚焦

```jsx
/**
 * title: 只允许数字
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} autoFocus onSubmit={onSubmit} />;
};
```

### 提示信息

```jsx
/**
 * title: 提示信息
 */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>密码为6位数字</div>} />;
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 值 | _string_ | - |
| type | 类型 默认为 text | _string_ | `number` `text` |
| info | 输入框下方文字提示 | _ReactNode_ | - |
| length | 密码最大长度 | _number \| string_ | `6` |
| gutter | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `0` |
| autoFocus | 自动聚焦 | _boolean_ | false |
| mask | 是否隐藏密码 | _boolean_ | true |
| validator | 自定义规则, 这个规则并非单个输入框的 | _function_ | - |
| highlightClass | 高亮样式(mask=true 时不生效) | _string_ | - |

### Events

| 事件名   | 说明             | 回调参数      |
| -------- | ---------------- | ------------- |
| onChange | 数据改变时触发   | val: _string_ |
| onSubmit | 数据输满时触发   | val: _string_ |
| onFocus  | 输入框聚焦时触发 | -             |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                          | 默认值                   | 描述 |
| --------------------------------------------- | ------------------------ | ---- |
| --rv-password-input-height                    | _50px_                   | -    |
| --rv-password-input-margin                    | _0 var(--rv-padding-md)_ | -    |
| --rv-password-input-font-size                 | _20px_                   | -    |
| --rv-password-input-border-radius             | _6px_                    | -    |
| --rv-password-input-background-color          | _var(--rv-white)_        | -    |
| --rv-password-input-info-color                | _var(--rv-gray-6)_       | -    |
| --rv-password-input-info-font-size            | _var(--rv-font-size-md)_ | -    |
| --rv-password-input-error-info-color          | _var(--rv-danger-color)_ | -    |
| --rv-password-input-dot-size                  | _10px_                   | -    |
| --rv-password-input-dot-color                 | _var(--rv-black)_        | -    |
| --rv-password-input-text-color                | _var(--rv-text-color)_   | -    |
| --rv-password-input-cursor-color              | _var(--rv-text-color)_   | -    |
| --rv-password-input-cursor-width              | _1px_                    | -    |
| --rv-password-input-cursor-height             | _40%_                    | -    |
| --rv-password-input-cursor-animation-duration | _1s_                     | -    |
| --rv-password-input-item-border-radius        | _0px_                    | -    |
