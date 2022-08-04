# Style 内置样式

## 介绍

默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```jsx
/**
 * title: 文字省略
 */
import React from 'react';
import './demo/ellipsis.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
      <div className="rv-multi-ellipsis--l2">
        这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略
      </div>
      <div className="rv-multi-ellipsis--l3">
        这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示三行的文字，多余的内容会被省略
      </div>
    </div>
  );
};
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```jsx
/**
 * title: 1px 边框
 */
import React from 'react';
import './demo/hairline.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-hairline--top"></div>
    </div>
  );
};
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

<code src="./demo/transition.tsx" title="动画" />
