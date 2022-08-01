# 进阶用法

### 介绍

通过本章节你可以了解到一些进阶用法，比如多种浏览器适配方式。

### 组件实例方法

React Vant 中的许多组件提供了实例方法，调用实例方法时，我们需要通过 `useRef` 来引用组件实例，我们可以通过`ref.current`访问到对应的组件实例，并调用上面的实例方法。

```jsx | pure
import { useRef } from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  const checkboxRef = useRef(null);
  return <Checkbox ref={checkboxRef}>复选框</Checkbox>;
};
```

### 触摸事件模拟

这是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 `touch` 事件，没有监听桌面端的 `mouse` 事件。

如果你需要在桌面端使用，可以引入我们提供的 [@vant/touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator)，这个库会在桌面端自动将 `mouse` 事件转换成对应的 `touch` 事件，使得组件能够在桌面端使用。

```bash
# 安装模块
npm i @vant/touch-emulator -S
```

```js
// 引入模块后自动生效
import '@vant/touch-emulator';
```

### 底部安全区适配

iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行安全区适配。部分组件提供了 `safeAreaInsetTop` 或 `safeAreaInsetBottom` 属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

```html
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

<!-- 开启顶部安全区适配 -->
<Navbar safeAreaInsetTop />

<!-- 开启底部安全区适配 -->
<NumberKeyboard safeAreaInsetBottom />
```

<img src="https://img.yzcdn.cn/vant/safearea.png">
