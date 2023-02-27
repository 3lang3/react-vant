# Toast 轻提示

## 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 引入

```js
import { Toast } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx"></code>

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 message 属性可以实现动态更新提示的效果。

<code title="动态更新提示" src="./demo/dynic.tsx"></code>

### 自定义图标

通过 `icon` 选项可以自定义图标，通过`loadingType` 属性可以自定义加载图标类型。

<code title="自定义图标" src="./demo/icon.tsx"></code>

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

<code title="自定义位置" src="./demo/position.tsx"></code>

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

```js
let remain = 4;
let timer;
const toast = Toast.info({
  message: `还剩 ${remain + 1} 秒`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
timer = setInterval(() => {
  toast.config({ message: `还剩 ${remain--} 秒` });
}, 1000);
```

### 多例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：

<code title="单例模式" src="./demo/multiple.tsx"></code>

### 修改默认配置

通过 `Toast.setDefaultOptions` 函数可以全局修改 Toast 的默认配置。

```js
Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast | 展示提示 | `options \| message` | toast 实例 |
| Toast.info | 展示文字提示 | `options \| message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options \| message` | toast 实例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options \| message` | toast 实例 |
| Toast.clear | 关闭提示 | `clearAll: boolean` | `void` |
| Toast.allowMultiple | 允许同时存在多个 Toast | - | `void` |
| Toast.setDefaultOptions | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `type \| options` | `void` |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效。<br>传入 type 可以重置指定类型的默认配置 | `type` | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success` `fail` `info` | _string_ | `info` |
| position | 位置，可选值为 `top` `bottom` | _string_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` |
| icon | 自定义图标 | _ReactNode_ | - |
| iconSize | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](/components/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _string_ | - |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| transition | 动画类名 | _string_ | `rv-fade` |
| teleport | 指定挂载的节点 | _HTMLElement_ _(() => HTMLElement))_ | `document.body` |

### 类型定义

组件导出以下类型定义：

```js
import type { ToastType, ToastOptions, ToastPosition } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-toast-max-width | _70%_ | - |
| --rv-toast-font-size | _var(--rv-font-size-md)_ | - |
| --rv-toast-text-color | _var(--rv-white)_ | - |
| --rv-toast-loading-icon-color | _var(--rv-white)_ | - |
| --rv-toast-line-height | _var(--rv-line-height-md)_ | - |
| --rv-toast-border-radius | _var(--rv-border-radius-lg)_ | - |
| --rv-toast-background-color | _fade(var(--rv-black), 70%)_ | - |
| --rv-toast-icon-size | _36px_ | - |
| --rv-toast-text-min-width | _96px_ | - |
| --rv-toast-text-padding | _var(--rv-padding-xs) var(--rv-padding-sm)_ | - |
| --rv-toast-default-padding | _var(--rv-padding-md)_ | - |
| --rv-toast-default-width | _88px_ | - |
| --rv-toast-default-min-height | _88px_ | - |
| --rv-toast-position-top-distance | _20%_ | - |
| --rv-toast-position-bottom-distance | _20%_ | - |
