# ActionBar 动作栏

## 介绍

用于为页面相关操作提供便捷交互。

## 引入

```js
import { ActionBar } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx" />

### 徽标提示

在 ActionBar.Icon 组件上可以设置 `badge` 属性。

<code title="徽标提示" src="./demo/badge.tsx" />

### 自定义图标颜色

通过 `ActionBar.Icon` 的 `icon` 属性自定义，可以灵活设置 icon。

<code title="自定义图标颜色" src="./demo/iconColor.tsx" />

### 自定义按钮颜色

通过 `ActionBar.Button` 的 `color` 属性可以自定义按钮的颜色，支持传入 `linear-gradient` 渐变色。

<code title="自定义按钮颜色" src="./demo/btnColor.tsx" />

## API

### ActionBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage) | _boolean_ | `true` |

### ActionBarIcon Props

| 参数    | 说明               | 类型              | 默认值 |
| ------- | ------------------ | ----------------- | ------ |
| text    | 按钮文字           | _ReactNode_       | -      |
| icon    | 图标               | _ReactNode_       | -      |
| badge   | 图标右上角徽标设置 | _BadgeProps_      | -      |
| onClick | 点击事件           | _(event) => void_ | -      |

### ActionBarButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _ReactNode_ | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧图标 | _ReactNode_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| onClick | 点击事件 | _(event) => void_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                  | 默认值                      | 描述 |
| ------------------------------------- | --------------------------- | ---- |
| --rv-action-bar-background-color      | _var(--rv-white)_           | -    |
| --rv-action-bar-height                | _50px_                      | -    |
| --rv-action-bar-icon-width            | _48px_                      | -    |
| --rv-action-bar-icon-height           | _100%_                      | -    |
| --rv-action-bar-icon-color            | _var(--rv-text-color)_      | -    |
| --rv-action-bar-icon-size             | _18px_                      | -    |
| --rv-action-bar-icon-font-size        | _var(--rv-font-size-xs)_    | -    |
| --rv-action-bar-icon-active-color     | _var(--rv-active-color)_    | -    |
| --rv-action-bar-icon-text-color       | _var(--rv-gray-7)_          | -    |
| --rv-action-bar-icon-background-color | _var(--rv-white)_           | -    |
| --rv-action-bar-button-height         | _40px_                      | -    |
| --rv-action-bar-button-warning-color  | _var(--rv-gradient-orange)_ | -    |
| --rv-action-bar-button-danger-color   | _var(--rv-gradient-red)_    | -    |
