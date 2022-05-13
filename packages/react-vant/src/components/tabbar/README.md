# Tabbar 标签栏

## 介绍

底部导航栏，用于在不同页面之间进行切换。

## 引入

```js
import { Tabbar } from 'react-vant';
```

## 代码演示

### 基础用法

点击 `Tabbar.Item` 即可切换选中的标签(非受控状态)。

<code title="基础用法" src="./demo/base.tsx" />

### 受控组件

- `value` 默认绑定选中标签的索引值，通过修改 `value` 即可切换选中的标签。
- 在标签指定 `name` 属性的情况下，`value` 的值为当前标签的 `name`。

<code title="受控组件" src="./demo/control.tsx" />

### 徽标提示

通过 `badge` 属性，可以设置图标相应的徽标内容。

<code title="徽标提示" src="./demo/badge.tsx" />

### 自定义

- 通过 `icon` 属性自定义图标。
- 通过 `activeColor` 属性设置选中标签的颜色，通过 `inactiveColor` 属性设置未选中标签的颜色。

<code title="自定义" src="./demo/custom.tsx" />

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中标签的名称或索引值 | _number \| string_ | - |
| defaultValue | 默认选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number \| string_ | `1` |
| activeColor | 选中标签的颜色 | _string_ | `#3f45ff` |
| inactiveColor | 未选中标签的颜色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage)，设置 fixed 时默认开启 | _boolean_ | `false` |

### Tabbar Events

| 事件名   | 说明           | 回调参数                   |
| -------- | -------------- | -------------------------- |
| onChange | 切换标签时触发 | _active: number \| string_ |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | 图标 | _ReactNode \| (active: boolean) => React.ReactNode_ | - |
| badge | 图标右上角徽标的内容 | _BadgeProps_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                     | 默认值                    | 描述 |
| ---------------------------------------- | ------------------------- | ---- |
| --rv-tabbar-height                       | _50px_                    | -    |
| --rv-tabbar-z-index                      | _1_                       | -    |
| --rv-tabbar-background-color             | _var(--rv-white)_         | -    |
| --rv-tabbar-item-font-size               | _var(--rv-font-size-sm)_  | -    |
| --rv-tabbar-item-text-color              | _var(--rv-gray-7)_        | -    |
| --rv-tabbar-item-active-color            | _var(--rv-primary-color)_ | -    |
| --rv-tabbar-item-active-background-color | _var(--rv-white)_         | -    |
| --rv-tabbar-item-line-height             | _1_                       | -    |
| --rv-tabbar-item-icon-size               | _22px_                    | -    |
| --rv-tabbar-item-icon-margin-bottom      | _var(--rv-padding-base)_  | -    |
