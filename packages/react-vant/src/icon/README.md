# Icon 图标

### 介绍

语义化的矢量图形。使用图标组件，你需要安装 `@react-vant/icons` 图标组件包：

> 从 2.0 开始，react-vant 不再内置 Icon 组件，请使用独立的包 @react-vant/icons。

```bash
npm install --save @react-vant/icons
# or
yarn add @react-vant/icons
```

### 引入

主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

```js
import { Add } from '@react-vant/icons';
```

## 代码演示

### 基础示例

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

### 徽标提示

结合`badge`组件可以实现带徽标的 Icon。

```jsx | pure
import React from 'react';
import { Badge } from 'react-vant';
import { ChatO } from '@react-vant/icons';

export default () => {
  return (
    <>
      <Badge dot>
        <ChatO />
      </Badge>
      <Badge content="99+">
        <ChatO />
      </Badge>
    </>
  );
};
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```jsx | pure
import React from 'react';
import { ChatO, FireO } from '@react-vant/icons';

export default () => {
  return (
    <>
      <ChatO color="#f44336" />
      <FireO color="#3f45ff" />
    </>
  );
};
```

### 图标大小

`Icon` 的 `fontSize` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```jsx | pure
import React from 'react';
import { ChatO, FireO } from '@react-vant/icons';

export default () => {
  return (
    <>
      <ChatO fontSize={40} />
      <FireO fontSize="3rem" />
    </>
  );
};
```

### 自定义图标

通过方法`createFromIconfontCN` 引入[iconfont.cn](https://www.iconfont.cn)上的 js 文件

```jsx | pure
import React from 'react';
import { createFromIconfontCN } from '@react-vant/icons';

const IconFont = createFromIconfontCN('//at.alicdn.com/t/font_1619071_dqiwns2g0d.js');

export default () => {
  return (
    <>
      <IconFont name="icon-weunblock" />
      <IconFont name="icon-1111" />
    </>
  );
};
```

### 图标旋转

`Icon` 的 `spin` 属性用来设置图标旋转，默认单位为 `false`。

```jsx | pure
import React from 'react';
import { ChatO, FireO } from '@react-vant/icons';

export default () => {
  return (
    <>
      <ClockO spin />
      <FireO spin />
    </>
  );
};
```

## API

### 方法

| 方法名               | 说明             | 参数                 | 返回值      |
| -------------------- | ---------------- | -------------------- | ----------- |
| createFromIconfontCN | 自定义 font 图标 | `string \| string[]` | _Icon 组件_ |

### Props

| 参数     | 说明                      | 类型               | 默认值    |
| -------- | ------------------------- | ------------------ | --------- |
| name     | 自定义图标名称            | _string_           | -         |
| color    | svg 的 `color` 属性       | _string_           | `inherit` |
| fontSize | 图标大小，如 `20px` `2em` | _number \| string_ | `inherit` |
| spin     | 是否开启旋转动画          | _boolean_          | `false`   |
| rotate   | 图标旋转角度              | _number_           | `false`   |

### Events

| 事件名  | 说明           | 回调参数       |
| ------- | -------------- | -------------- |
| onClick | 点击图标时触发 | _event: Event_ |
