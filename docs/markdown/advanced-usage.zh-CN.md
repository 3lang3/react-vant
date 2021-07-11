# 进阶用法

### 介绍

通过本章节你可以了解到 Rokku 的一些进阶用法，比如多种浏览器适配方式。


## 浏览器适配

### Rem 布局适配

Rokku 中的样式默认使用 `px` 作为单位，如果需要使用 `rem` 单位，推荐使用以下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

#### PostCSS 配置

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改。

```js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

> Tips: 在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Rokku 样式无法被编译。

### 触摸事件模拟

Rokku 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 `touch` 事件，没有监听桌面端的 `mouse` 事件。

如果你需要在桌面端使用 Rokku，可以引入我们提供的 [@rokku/touch-emulator](https://github.com/youzan/Rokku/tree/dev/packages/Rokku-touch-emulator)，这个库会在桌面端自动将 `mouse` 事件转换成对应的 `touch` 事件，使得组件能够在桌面端使用。

```bash
# 安装模块
npm i @rokku/touch-emulator -S
```

```js
// 引入模块后自动生效
import '@rokku/touch-emulator';
```

### 底部安全区适配

iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行安全区适配。Rokku 中部分组件提供了 `safe-area-inset-top` 或 `safe-area-inset-bottom` 属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

```jsx
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

<!-- 开启顶部安全区适配 -->
<van-nav-bar safe-area-inset-top />

<!-- 开启底部安全区适配 -->
<van-number-keyboard safe-area-inset-bottom />
```

<img src="https://img.yzcdn.cn/vant/safearea.png">
