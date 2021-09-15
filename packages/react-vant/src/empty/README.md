# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

```js
import { Empty } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
<Empty description="描述文字" />
```

### 图片类型

```jsx
<Empty image="error" description="描述文字" />
<Empty image="network" description="描述文字" />
<Empty image="search" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```jsx
<Empty
  className="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>

<style>
  .custom-image .rv-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
```

### 底部内容

通过 children 可以在 Empty 组件的下方插入内容。

```jsx
<Empty description="描述文字">
  <Button round type="primary" className="bottom-button">按钮</Button>
</Empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string\|ReactNode_ | `default` |
| description | 图片下方的描述文字 | _ReactNode_ | - |
| className | 定义图片或文字样式 | _string_ | - |
