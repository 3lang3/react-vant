# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

```js
import { Toast } from 'react-vant';
```

## 代码演示

### 文字提示

```js
Toast('提示内容');
Toast.info({ message: '提示内容' });
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

```js
Toast.loading({
  message: '加载中...',
  forbidClick: true,
});
```

### 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```js
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 message 属性可以实现动态更新提示的效果。

```jsx
let remain = 4;
const updateConfig = Toast.info({
  message: `还剩 ${remain + 1} 秒`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
const timer = setInterval(() => {
  updateConfig({ message: `还剩 ${remain--} 秒` });
}, 1000);
```

### 自定义图标

通过 `icon` 选项可以自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接，通过`loadingType` 属性可以自定义加载图标类型。

```js
Toast({
  message: '自定义图标',
  icon: 'like-o',
});

Toast({
  message: '自定义图片',
  icon: 'https://img01.yzcdn.cn/vant/logo.png',
});

Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```js
Toast({
  message: '顶部展示',
  position: 'top',
});

Toast({
  message: '底部展示',
  position: 'bottom',
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

```js
const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second -= 1;
  if (second) {
    toast.setMessage(`倒计时 ${second} 秒`);
  } else {
    clearInterval(timer);
    // 手动清除 Toast
    Toast.clear();
  }
}, 1000);
```

## API

### 方法

| 方法名        | 说明         | 参数                 | 返回值     |
| ------------- | ------------ | -------------------- | ---------- |
| Toast         | 展示提示     | `options \| message` | toast 实例 |
| Toast.info    | 展示文字提示 | `options \| message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options \| message` | toast 实例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 实例 |
| Toast.fail    | 展示失败提示 | `options \| message` | toast 实例 |
| Toast.clear   | 关闭提示     | `clearAll: boolean`  | `void`     |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `info` | _string_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _string_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` | - |
| icon | 自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _any_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| getContainer | 自定义轻提示的父容器 | _HTMLElement_ _(() => HTMLElement))_ | `document.body` |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                            | 默认值                    | 描述 |
| ------------------------------- | ------------------------- | ---- |
| @toast-max-width                | `70%`                     | -    |
| @toast-font-size                | `@font-size-md`           | -    |
| @toast-text-color               | `@white`                  | -    |
| @toast-loading-icon-color       | `@white`                  | -    |
| @toast-line-height              | `@line-height-md`         | -    |
| @toast-border-radius            | `@border-radius-lg`       | -    |
| @toast-background-color         | `fade(@black, 70%)`       | -    |
| @toast-icon-size                | `36px`                    | -    |
| @toast-text-min-width           | `96px`                    | -    |
| @toast-text-padding             | `@padding-xs @padding-sm` | -    |
| @toast-default-padding          | `@padding-sm 10px`        | -    |
| @toast-default-width            | `88px`                    | -    |
| @toast-default-min-height       | `88px`                    | -    |
| @toast-position-top-distance    | `20%`                     | -    |
| @toast-position-bottom-distance | `20%`                     | -    |
