# NavBar 导航栏

### 引入

```js
import { NavBar } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
<NavBar
  title="标题"
  leftArrow
  rightText="按钮"
  onClickLeft={() => Toast('返回')}
  onClickRight={() => Toast('按钮')}
/>
```

### 自定义内容

自定义导航栏两侧的内容。

```jsx
<NavBar
  title="标题"
  leftArrow
  rightText="按钮"
  onClickLeft={() => Toast('返回')}
  rightSlot={() => <Icon name="search" size={24} />}
  onClickRight={() => Toast('按钮')}
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| leftText | 左侧文案 | _string_ | `''` |
| rightText | 右侧文案 | _string_ | `''` |
| leftArrow | 是否显示左侧箭头 | _boolean_ | `false` |
| border | 是否显示下边框 | _boolean_ | `true` |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| zIndex | 导航栏 z-index | _number \| string_ | `1` |

### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| titleSlot | 自定义标题         |
| leftSlot  | 自定义左侧区域内容 |
| rightSlot | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数 |
| ----------- | ------------------ | -------- |
| click-left  | 点击左侧按钮时触发 | -        |
| click-right | 点击右侧按钮时触发 | -        |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值          | 描述 |
| ------------------------- | --------------- | ---- |
| @nav-bar-height           | `46px`          | -    |
| @nav-bar-background-color | `@white`        | -    |
| @nav-bar-arrow-size       | `16px`          | -    |
| @nav-bar-icon-color       | `@gray-8`         | -    |
| @nav-bar-text-color       | `@gray-8`         | -    |
| @nav-bar-title-font-size  | `@font-size-lg` | -    |
| @nav-bar-title-text-color | `@text-color`   | -    |
| @nav-bar-z-index          | `1`             | -    |
