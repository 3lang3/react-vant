# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

```js
import { Overlay } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
const [show, setShow] = useState(false);

<Button type="primary" onClick={() => setShow(true)}>显示遮罩层</Button>
<OverLay visible={show} onClick={() => setShow(false)} />
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```jsx
const [showEmbedded, setShowEmbedded] = useState(false);

<Button type="primary" onClick={() => setShowEmbedded(true)}>嵌入内容</Button>
<OverLay visible={showEmbedded} onClick={() => setShowEmbedded(false)}>
  <div className="wrapper">
    <div className="block" />
  </div>
</OverLay>
```

## API

### Props

| 参数        | 说明                                             | 类型               | 默认值  |
| ----------- | ------------------------------------------------ | ------------------ | ------- |
| visible     | 是否展示遮罩层                                   | _boolean_          | `false` |
| zIndex      | z-index 层级                                     | _number \| string_ | `1`     |
| duration    | 动画时长，单位毫秒                               | _number \| string_ | `0.3`   |
| className   | 自定义类名                                       | _string_           | -       |
| customStyle | 自定义样式                                       | _object_           | -       |
| lockScroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_          | `true`  |

### Events

| 事件名  | 说明       | 回调参数       |
| ------- | ---------- | -------------- |
| onClick | 点击时触发 | _event: Event_ |
