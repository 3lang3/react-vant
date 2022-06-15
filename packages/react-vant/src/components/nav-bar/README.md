# NavBar 导航栏

## 介绍

为页面提供导航功能，常用于页面顶部。

## 引入

```js
import { NavBar } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Toast, NavBar } from 'react-vant';

export default () => {
  return (
    <NavBar
      title="标题"
      leftText="返回"
      rightText="按钮"
      onClickLeft={() => Toast('返回')}
      onClickRight={() => Toast('按钮')}
    />
  );
};
```

### 自定义内容

自定义导航栏两侧的内容。

<code title="自定义内容" src="./demo/custom.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _ReactNode_ | `''` |
| leftText | 左侧文案 | _ReactNode_ | `''` |
| rightText | 右侧文案 | _ReactNode_ | `''` |
| leftArrow | 自定义左侧箭头 | _boolean\|ReactNode_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| zIndex | 导航栏 z-index | _number \| string_ | `1` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetTop | 是否开启[顶部安全区适配](/guide/advanced-usage) | _boolean_ | `false` |

### Events

| 事件名       | 说明               | 回调参数 |
| ------------ | ------------------ | -------- |
| onClickLeft  | 点击左侧按钮时触发 | -        |
| onClickRight | 点击右侧按钮时触发 | -        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                          | 默认值                    | 描述 |
| ----------------------------- | ------------------------- | ---- |
| --rv-nav-bar-height           | _46px_                    | -    |
| --rv-nav-bar-background-color | _var(--rv-white)_         | -    |
| --rv-nav-bar-arrow-size       | _16px_                    | -    |
| --rv-nav-bar-icon-color       | _var(--rv-primary-color)_ | -    |
| --rv-nav-bar-text-color       | _var(--rv-primary-color)_ | -    |
| --rv-nav-bar-title-font-size  | _var(--rv-font-size-lg)_  | -    |
| --rv-nav-bar-title-text-color | _var(--rv-text-color)_    | -    |
| --rv-nav-bar-z-index          | _1_                       | -    |
