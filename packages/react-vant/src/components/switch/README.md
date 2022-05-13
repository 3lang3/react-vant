---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Switch 开关

## 介绍

用于在打开和关闭状态之间进行切换。

## 引入

```js
import { Switch } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `defaultChecked` 默认开关的选中状态，`true` 表示开，`false` 表示关。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch defaultChecked />;
};
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```jsx
/**
 * title: 禁用状态
 * card: true
 */
import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch disabled defaultChecked />;
};
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```jsx
/**
 * title: 加载状态
 * card: true
 */
import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch loading defaultChecked />;
};
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```jsx
/**
 * title: 自定义大小
 * card: true
 */
import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch size="24px" defaultChecked />;
};
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```jsx
/**
 * title: 自定义颜色
 * card: true
 */
import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />;
};
```

### 异步控制

需要异步控制开关时，可以使用 `checked` 属性和 `onChange` 事件代替 `defaultChecked`，并在事件回调函数中手动处理开关状态。

```jsx
/**
 * title: 异步控制
 * card: true
 */
import React, { useState } from 'react';
import { Switch, Dialog } from 'react-vant';

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？',
      });
      setValue(checked);
    } catch {
      // 取消dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};
```

### 搭配单元格使用

```jsx
/**
 * title: 搭配单元格使用
 * card: true
 */
import React from 'react';
import { Cell, Switch } from 'react-vant';

export default () => {
  return (
    <Cell
      center
      title="标题"
      rightIcon={
        <Switch
          size={24}
          defaultChecked
          onChange={(checked) => console.log(`switch to ${checked}`)}
        />
      }
    />
  );
};
```

## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| checked        | 开关选中状态             | _any_              | `false`   |
| defaultChecked | 开关选中状态             | _any_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| activeColor    | 打开时的背景色           | _string_           | `#3f45ff` |
| inactiveColor  | 关闭时的背景色           | _string_           | `white`   |
| activeValue    | 打开时对应的值           | _any_              | `true`    |
| inactiveValue  | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名   | 说明               | 回调参数       |
| -------- | ------------------ | -------------- |
| onChange | 开关状态切换时触发 | _value: any_   |
| onClick  | 点击时触发         | _event: Event_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-switch-size | _30px_ | - |
| --rv-switch-width | _2em_ | - |
| --rv-switch-height | _1em_ | - |
| --rv-switch-node-size | _1em_ | - |
| --rv-switch-node-background-color | _var(--rv-white)_ | - |
| --rv-switch-node-box-shadow | _0 3px 1px 0 rgba(0, 0, 0, 0.05)_ | - |
| --rv-switch-background-color | _var(--rv-white)_ | - |
| --rv-switch-on-background-color | _var(--rv-primary-color)_ | - |
| --rv-switch-transition-duration | _var(--rv-animation-duration-base)_ | - |
| --rv-switch-disabled-opacity | _var(--rv-disabled-opacity)_ | - |
| --rv-switch-border | _var(--rv-border-width-base) solid rgba(0, 0, 0, 0.1)_ | - |
