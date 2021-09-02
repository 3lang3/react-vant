# ImagePreview 图片预览

### 介绍

图片预览，支持函数调用和组件调用两种方式。

### 函数调用

`ImagePreview.open` 是一个函数，调用函数后会直接在页面中展示图片预览界面。

```js
import { ImagePreview } from 'react-vant';

ImagePreview.open({ images: ['https://img.yzcdn.cn/vant/apple-1.jpg'] });
```

### 组件调用

通过组件调用 `ImagePreview` 时，可以通过下面的方式进行注册。

```jsx
import { ImagePreview, Button } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>组件调用</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});
```

### 指定初始位置

`ImagePreview` 支持传入配置对象，并通过 `startPosition` 选项指定图片的初始位置（索引值）。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  startPosition: 1,
});
```

### 展示关闭按钮

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用`closeIconPosition` 属性可以自定义图标位置。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  closeable: true,
});
```

### 监听关闭事件

通过 `onClose` 选项监听图片预览的关闭事件。

```js
import { Toast } from 'react-vant';

ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  onClose() {
    Toast('关闭');
  },
});
```

### 异步关闭

`ImagePreview.open`会返回实例的销毁方法。

```js
const destory = ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});

setTimeout(() => {
  // 调用实例的销毁方法手动关闭图片预览
  destory();
}, 2000);
```

### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
import { ImagePreview, Button } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>组件调用</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## API

### Options

通过函数调用 `ImagePreview.open` 时，支持传入以下选项：

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| images | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| startPosition | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipeDuration | 动画时长，单位为 `ms` | _number \| string_ | `300` |
| showIndex | 是否显示页码 | _boolean_ | `true` |
| showIndicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `clear` |
| closeIconPosition | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| onClosed | 完全关闭时的回调 | _Function_ | - |
| onChange | 切换图片时的回调函数，回调参数为当前索引 | _Function_ | - |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(active) => boolean \| Promise_ | - |
| teleport | 指定挂载的节点 | _HTMLElement \| () => HTMLElement_ | `body` |

### onClose 回调参数

| 参数名 | 说明             | 类型     |
| ------ | ---------------- | -------- |
| url    | 当前图片 URL     | _string_ |
| index  | 当前图片的索引值 | _number_ |
