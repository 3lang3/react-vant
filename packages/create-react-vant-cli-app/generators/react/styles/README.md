# 内置样式

### 介绍

默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```jsx
<!-- 最多显示一行 -->
<div className="rv-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div className="rv-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div className="rv-multi-ellipsis--l3">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```jsx
<!-- 上边框 -->
<div className="rv-hairline--top"></div>

<!-- 下边框 -->
<div className="rv-hairline--bottom"></div>

<!-- 左边框 -->
<div className="rv-hairline--left"></div>

<!-- 右边框 -->
<div className="rv-hairline--right"></div>

<!-- 上下边框 -->
<div className="rv-hairline--top-bottom"></div>

<!-- 全边框 -->
<div className="rv-hairline--surround"></div>
```

### 动画

这里通过 `react-transition-group` 第三方库使用内置的动画

```bash
# 安装
yarn add react-transition-group
```

```js
import { CSSTransition } from 'react-transition-group';
```

```jsx
<!-- 淡入 -->
<CSSTransition in={visible} timeout={500} classNames="rv-fade" unmountOnExit>
  <div>Fade</div>
</CSSTransition>

<!-- 上滑进入 -->
<CSSTransition in={visible} timeout={500} classNames="rv-slide-up" unmountOnExit>
  <div>Slide Up</div>
</CSSTransition>

<!-- 下滑进入 -->
<CSSTransition in={visible} timeout={500} classNames="rv-slide-down" unmountOnExit>
  <div>Slide Down</div>
</CSSTransition>

<!-- 左滑进入 -->
<CSSTransition in={visible} timeout={500} classNames="rv-slide-left" unmountOnExit>
  <div>Slide Left</div>
</CSSTransition>

<!-- 右滑进入 -->
<CSSTransition in={visible} timeout={500} classNames="rv-slide-right" unmountOnExit>
  <div>Slide Right</div>
</CSSTransition>
```
