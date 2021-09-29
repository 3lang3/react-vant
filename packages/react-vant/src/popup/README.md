# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```js
import { Popup } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `visible` 以及 `onClose` 控制弹出层是否展示。

```js
const [showPopup, setShowPopup] = useState(false);
```

```jsx
<Cell title="展示弹出层" isLink onClick={() => setShowPopup(true)} />
<Popup
  visible={showPopup}
  onClose={() => setShowPopup(false)}>
  内容
</Popup>
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```jsx
<Popup visible={show} position="top" style={{ height: '30%' }} />
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```jsx
<Popup visible={show} closeable position="bottom" style={{ height: "30%" }} />
<!-- 自定义图标 -->
<Popup visible={show} closeable closeIcon="close" position="bottom" style={{ height: "30%" }} />
<!-- 图标位置 -->
<Popup
  visible={show}
  closeable
  closeIconPosition="top-left"
  position="bottom"
  style={{ height: "30%" }}
/>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
<Popup visible={show} round position="bottom" style={{ height: '30%' }} />
```

### 标题弹窗

设置 `title` 和 `description` 属性后，弹窗会显示标题和描述文字，建议在 `bottom` 弹框下使用。

```jsx
<Popup
  visible={show}
  closeable
  title="标题"
  descrition="这是一段很长很长的描述"
  style={{ height: '30%' }}
  position="bottom"
  round
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹出层 | _boolean_ | `false` |
| className | popup 类名 | _boolean_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| title | 弹出层标题 | _string_ | - |
| descrition | 弹出层描述 | _string_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| destroyOnClose | 关闭时销毁 Popup 里的子元素 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `cross` |
| closeIconPosition | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | 动画类名，等价于 [transtion](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的`name`属性 | _string_ | - |
| teleport | 指定挂载的节点 | _HTMLElement | (() => HTMLElement)_ | - |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名           | 说明                       | 回调参数       |
| ---------------- | -------------------------- | -------------- |
| onClick          | 点击弹出层时触发           | _event: Event_ |
| onClickOverlay   | 点击遮罩层时触发           | -              |
| onClickCloseIcon | 点击关闭图标时触发         | _event: Event_ |
| onOpen           | 打开弹出层时触发           | -              |
| onClose          | 关闭弹出层时触发           | -              |
| onOpened         | 打开弹出层且动画结束后触发 | -              |
| onClosed         | 关闭弹出层且动画结束后触发 | -              |


### 类型定义

组件导出以下类型定义：

```js
import type { PopupPosition, PopupCloseIconPosition } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-popup-background-color | _var(--rv-white)_ | - |
| --rv-popup-transition | _transform var(--rv-animation-duration-base)_ | - |
| --rv-popup-round-border-radius | _16px_ | - |
| --rv-popup-close-icon-size | _22px_ | - |
| --rv-popup-close-icon-color | _var(--rv-gray-5)_ | - |
| --rv-popup-close-icon-active-color | _var(--rv-gray-6)_ | - |
| --rv-popup-close-icon-margin | _16px_ | - |
| --rv-popup-close-icon-z-index | _1_ | - |
