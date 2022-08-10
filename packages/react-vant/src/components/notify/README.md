# Notify 消息提示

## 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 函数调用

Notify 是一个函数，调用后会直接在页面中弹出相应的消息提示。

```js
import { Notify } from 'react-vant';

Notify.show('通知内容');
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return <Cell title="基础用法" isLink onClick={() => Notify.show('通知内容')} />;
};
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```jsx
/**
 * title: 通知类型
 * card: true
 */
import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="主要通知"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '通知内容' })}
      />
      <Cell
        title="成功通知"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '通知内容' })}
      />
      <Cell
        title="危险通知"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '通知内容' })}
      />
      <Cell
        title="警告通知"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '通知内容' })}
      />
    </>
  );
};
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```jsx
/**
 * title: 自定义通知
 * card: true
 */
import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="自定义颜色"
        isLink
        onClick={() =>
          Notify.show({ message: '自定义颜色', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="自定义时长"
        isLink
        onClick={() => Notify.show({ message: '自定义时长', duration: 1000 })}
      />
    </>
  );
};
```

### 组件调用

通过组件调用 Notify 时，可以通过下面的方式进行注册：

<code title="组件调用" card src="./demo/component.tsx" />

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notify.show | 展示提示 | `options \| message` | notify 实例 |
| Notify.clear | 关闭提示 | - | `void` |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `options` | `void` |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string\|React.ReactNode_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number_ | `3000` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _string_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `false` |
| onClick | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |
| teleport | 指定挂载的节点 | _HTMLElement \| () => HTMLElement_ | `body` |

### 类型定义

组件导出以下类型定义：

```ts
import type { NotifyType, NotifyProps } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-notify-text-color | _var(--rv-white)_ | - |
| --rv-notify-padding | _var(--rv-padding-xs) var(--rv-padding-md)_ | - |
| --rv-notify-font-size | _var(--rv-font-size-md)_ | - |
| --rv-notify-line-height | _var(--rv-line-height-md)_ | - |
| --rv-notify-primary-background-color | _var(--rv-primary-color)_ | - |
| --rv-notify-success-background-color | _var(--rv-success-color)_ | - |
| --rv-notify-danger-background-color | _var(--rv-danger-color)_ | - |
| --rv-notify-warning-background-color | _var(--rv-warning-color)_ | - |
