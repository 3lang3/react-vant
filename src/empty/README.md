# Empty 空状态

### 介绍

空状态时的占位提示，2.6 版本开始支持此组件。

### 引入

```js
import { Empty } from 'rokku';
```

## 代码演示

### 基础用法

```jsx
<Empty description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```jsx
<Empty
  className="custom-empty"
  image="https://img.yzcdn.cn/vant/custom-Empty-image.png"
  description="描述文字"
/>

<style>
  .custom-empty .empty-image {
    width: 170px;
    height: 170px;
  }
  .custom-empty .empty-desc{
    color: red;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片 URL | _string_ | `default` |
| description | 图片下方的描述文字 | _string_ | - |
| className | 定义图片或文字样式 | _string_ | - |
