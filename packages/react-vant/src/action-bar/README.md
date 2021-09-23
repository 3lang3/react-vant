# ActionBar 动作栏

### 介绍

用于为页面相关操作提供便捷交互。

### 引入

```js
import { ActionBar } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <ActionBar>
      <ActionBar.Icon icon="chat-o" text="客服" />
      <ActionBar.Icon icon="cart-o" text="购物车" />
      <ActionBar.Icon icon="shop-o" text="店铺" />
      <ActionBar.Button type="danger" text="立即购买" />
    </ActionBar>
  );
};
```

### 徽标提示

在 ActionBar.Icon 组件上可以设置 `badge` 属性。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" badge={{ dot: true }} text="客服" />
  <ActionBar.Icon icon="cart-o" badge={{ content: 5 }} text="购物车" />
  <ActionBar.Icon icon="shop-o" badge={{ content: 12 }} text="店铺" />
  <ActionBar.Button type="warning" text="加入购物车" />
  <ActionBar.Button type="danger" text="立即购买" />
</ActionBar>
```

### 自定义图标颜色

通过 ActionBarIcon 的 `color` 属性可以自定义图标的颜色。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" color="#ee0a24" text="客服" />
  <ActionBar.Icon icon="cart-o" text="购物车" />
  <ActionBar.Icon icon="star" color="#ff5000" text="店铺" />
  <ActionBar.Button type="warning" text="加入购物车" />
  <ActionBar.Button type="danger" text="立即购买" />
</ActionBar>
```

### 自定义按钮颜色

通过 ActionBarButton 的 `color` 属性可以自定义按钮的颜色，支持传入 `linear-gradient` 渐变色。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" text="客服" />
  <ActionBar.Icon icon="cart-o" text="购物车" />
  <ActionBar.Button color="#be99ff" type="warning" text="加入购物车" />
  <ActionBar.Button color="#7232dd" type="danger" text="立即购买" />
</ActionBar>
```

## API

### ActionBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### ActionBarIcon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _ReactNode_ | - |
| icon | 图标 | _string\|ReactNode_ | - |
| color | 图标颜色 | _string_ | `#323233` |
| iconClass | 图标额外类名 | _string_ | - |
| icoPrefix  | 图标类名前缀，等同于 Icon 组件的 [classPrefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| badge | 图标右上角徽标设置 | _BadgeProps_ | - |
| onClick | 点击事件 | _(event) => void_ | - |

### ActionBarButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _ReactNode_ | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| onClick | 点击事件 | _(event) => void_ | - |



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                   | 默认值                       | 描述 |
| -------------------------------------- | ---------------------------- | ---- |
| --van-action-bar-background-color      | _var(--van-white)_           | -    |
| --van-action-bar-height                | _50px_                       | -    |
| --van-action-bar-icon-width            | _48px_                       | -    |
| --van-action-bar-icon-height           | _100%_                       | -    |
| --van-action-bar-icon-color            | _var(--van-text-color)_      | -    |
| --van-action-bar-icon-size             | _18px_                       | -    |
| --van-action-bar-icon-font-size        | _var(--van-font-size-xs)_    | -    |
| --van-action-bar-icon-active-color     | _var(--van-active-color)_    | -    |
| --van-action-bar-icon-text-color       | _var(--van-gray-7)_          | -    |
| --van-action-bar-icon-background-color | _var(--van-white)_           | -    |
| --van-action-bar-button-height         | _40px_                       | -    |
| --van-action-bar-button-warning-color  | _var(--van-gradient-orange)_ | -    |
| --van-action-bar-button-danger-color   | _var(--van-gradient-red)_    | -    |
