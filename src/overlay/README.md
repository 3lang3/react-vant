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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否展示遮罩层 | _boolean_ | `false` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| class-name | 自定义类名 | _string_ | - |
| custom-style | 自定义样式 | _object_ | - |
| lock-scroll `v2.6.2` | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值               | 描述 |
| ------------------------- | -------------------- | ---- |
| @overlay-z-index          | `1`                  | -    |
| @overlay-background-color | `rgba(0, 0, 0, 0.7)` | -    |
