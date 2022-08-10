# NumberKeyboard 数字键盘

## 介绍

虚拟数字键盘，可以配合[密码输入框组件](/components/password-input)或自定义的输入框组件使用。

## 引入

```js
import { NumberKeyboard } from 'react-vant';
```

## 代码演示

### 基础用法

- 数字键盘提供了 `onInput`、`onDelete`、`onBlur` 事件，分别对应输入内容、删除内容和失去焦点的动作。
- 将 theme 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。
- 通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。
- 通过 `title` 属性可以设置键盘标题。
- 当 theme 为 `custom` 时，支持以数组的形式配置两个 `extraKey`。
- 通过 `randomKeyOrder` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

<code title="基础用法" card src="./demo/base.tsx" />

> 点击键盘以外的区域时，键盘会自动收起，通过阻止元素上的 touchstart 事件冒泡可以避免键盘收起。

### 双向绑定

可以通过 `value` 绑定键盘当前输入值，并通过 `maxlength` 属性来限制输入长度。

<code title="双向绑定" card src="./demo/control.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入值 | _string_ | - |
| show | 是否显示键盘 | _boolean_ | - |
| title | 键盘标题 | _ReactNode_ | - |
| delete | 键盘标题 | _ReactNode_ | - |
| numberKeyRender | 自定义数字按键内容 | _(item: KeyConfig) => ReactNode_ | - |
| deleteRender | 自定义删除按键内容 | _() => ReactNode_ | - |
| extraKeyRender | 自定义左下角按键内容 | _() => ReactNode_ | - |
| theme | 样式风格，可选值为 `custom` | _string_ | `default` |
| maxlength | 输入值最大长度 | _number \| string_ | - |
| transition | 是否开启过场动画 | _boolean_ | `true` |
| zIndex | 键盘 z-index 层级 | _number_ | `100` |
| extraKey | 底部额外按键的内容 | _string \| string[]_ | `''` |
| closeButtonText | 关闭按钮文字，空则不展示 | _string_ | - |
| deleteButtonText | 删除按钮文字，空则展示删除图标 | _string_ | - |
| closeButtonLoading | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | _boolean_ | `false` |
| showDeleteKey | 是否展示删除图标 | _boolean_ | `true` |
| blurOnClose | 是否在点击关闭按钮时触发 blur 事件 | _boolean_ | `true` |
| hideOnClickOutside | 是否在点击外部时收起键盘 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage) | _boolean_ | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | _boolean_ | `false` |

### Events

| 事件名   | 说明                           | 回调参数      |
| -------- | ------------------------------ | ------------- |
| onInput  | 点击按键时触发                 | key: 按键内容 |
| onDelete | 点击删除键时触发               | -             |
| onClose  | 点击关闭按钮时触发             | -             |
| onBlur   | 点击关闭按钮或非键盘区域时触发 | -             |
| onShow   | 键盘完全弹出时触发             | -             |
| onHide   | 键盘完全收起时触发             | -             |

### 类型定义

组件导出以下类型定义：

```js
import type { NumberKeyboardTheme } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-number-keyboard-background-color | _var(--rv-gray-2)_ | - |
| --rv-number-keyboard-key-height | _48px_ | - |
| --rv-number-keyboard-key-font-size | _28px_ | - |
| --rv-number-keyboard-key-active-color | _var(--rv-gray-3)_ | - |
| --rv-number-keyboard-key-background-color | _van(--rv-white)_ | - |
| --rv-number-keyboard-delete-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-number-keyboard-title-color | _var(--rv-gray-7)_ | - |
| --rv-number-keyboard-title-height | _34px_ | - |
| --rv-number-keyboard-title-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-number-keyboard-close-padding | _0 var(--rv-padding-md)_ | - |
| --rv-number-keyboard-close-color | _var(--rv-text-link-color)_ | - |
| --rv-number-keyboard-close-font-size | _var(--rv-font-size-md)_ | - |
| --rv-number-keyboard-button-text-color | _var(--rv-white)_ | - |
| --rv-number-keyboard-button-background-color | _var(--rv-primary-color)_ | - |
| --rv-number-keyboard-z-index | _100_ | - |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](/guide/advanced-usage)。
