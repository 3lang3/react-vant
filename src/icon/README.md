# Icon 图标
### 介绍

基于字体的图标集，可以通过 `Icon` 组件使用，也可以在其他组件中通过`icon`属性引用


### 引入

```js
import { Icon } from '@rokku/design';
```
## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```jsx
<Icon name="chat-o" />
<Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```jsx
<Icon name="cart-o" color="#1989fa" />
<Icon name="fire-o" color="#ee0a24" />
```

### 多色图标

`Icon` 的 `theme` 属性用来设置图标的主题。目前只是特指地图相关的图标

```jsx
<Icon theme="multi" name="map-user" />
```


### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```jsx
<Icon name="chat-o" size="40" />
<Icon name="chat-o" size="3rem" />
```

### 自定义图标

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
<Icon classPrefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `inherit` |
| classPrefix | 类名前缀，用于使用自定义图标 | _string_ | `rk-icon` |
| tag | HTML 标签 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |
