# Icon 图标

### 介绍

基于字体的图标集，可以通过 `Icon` 组件使用，也可以在其他组件中通过`icon`属性引用

### 引入

```js
import { Icon } from 'react-vant';
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```jsx
<Icon name="chat-o" />
<Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 徽标提示

`Icon` 的 `badge` 属性用来设置徽标内容。

```jsx
<Icon name="chat-o" badge={{ dot: true }} />
<Icon name="chat-o" badge={{ content: "99+" }} />
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```jsx
<Icon name="cart-o" color="#1989fa" />
<Icon name="fire-o" color="#ee0a24" />
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```jsx
<Icon name="chat-o" size="40" />
<Icon name="chat-o" size="3rem" />
```

### 自定义图标

#### 方式一

如果需要在现有 `Icon` 的基础上使用更多图标，可以引入第三方 `iconfont` 对应的字体文件和 `CSS` 文件，之后就可以在 `Icon` 组件中直接使用

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```jsx
<!-- 通过 classPrefix 指定类名为 my-icon -->
<Icon classPrefix="my-icon" name="extra"/>
```

#### 方式二

通过方法`createFromIconfontCN` 引入[iconfont.cn](https://www.iconfont.cn)上的 js 文件

```jsx
const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/xxx.js');
<!-- classPrefix 属性失效不要再指定 -->
<IconFont name="cuIcon-thank"/>

```

### 图标旋转

`Icon` 的 `spin` 属性用来设置图标旋转，默认单位为 `false`。

```jsx
<Icon name="clock-o" spin/>
<IconFont name="cuIcon-classify_fill" spin/>
```

## API

### 方法

| 方法名                    | 说明            | 参数                | 返回值      |
| ------------------------- | --------------- | ------------------- | ----------- |
| Icon.createFromIconfontCN | 创建第三方 Icon | `scriptUrl: string` | _Icon 组件_ |

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| badge | 图标右上角徽标 | [_BadgeProps_](#/zh-CN/badge) | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `inherit` |
| classPrefix | 类名前缀，用于使用自定义图标 | _string_ | `van-icon` |
| tag | HTML 标签 | _string_ | `i` |
| spin | 图标旋转 | _boolean_ | `false` |

### Events

| 事件名  | 说明           | 回调参数       |
| ------- | -------------- | -------------- |
| onClick | 点击图标时触发 | _event: Event_ |
