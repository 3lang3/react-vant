# ImagePreview 图片预览

## 介绍

图片预览，支持函数调用和组件调用两种方式。

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() =>
        ImagePreview.open({
          images,
          onChange: (index) => console.log(`当前展示第${index + 1}张`),
        })
      }
    />
  );
};
```

### 配置项

- `ImagePreview` 支持传入配置对象，并通过 `startPosition` 选项指定图片的初始位置（索引值）。
- 设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用`closeIconPosition` 属性可以自定义图标位置。
- 通过 `onClose` 选项监听图片预览的关闭事件。
- `ImagePreview.open`会返回实例的销毁方法。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { ImagePreview, Cell, Toast } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <>
      <Cell
        title="指定初始位置"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2 })}
      />
      <Cell
        title="展示关闭按钮"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
      />
      <Cell
        title="只允许点击关闭按钮关闭"
        isLink
        onClick={() =>
          ImagePreview.open({ images, closeable: true, closeOnlyClickCloseIcon: true })
        }
      />
      <Cell
        title="监听关闭事件"
        isLink
        onClick={() =>
          ImagePreview.open({
            images,
            startPosition: 2,
            onClose: () => {
              Toast.info('关闭预览');
            },
          })
        }
      />
      <Cell
        title="展示指示点"
        isLink
        onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
      />
    </>
  );
};
```

### 异步关闭

`ImagePreview.open`会返回实例的销毁方法。

```jsx
/**
 * title: 异步关闭
 */
import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() => {
        const destory = ImagePreview.open({ images });
        setTimeout(() => destory(), 2000);
      }}
    />
  );
};
```

### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
/**
 * title: 组件调用
 */
import React, { useState } from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </>
  );
};
```

### 指定挂载节点

通过 `teleport` 属性，可以让组件在指定节点内渲染。

```jsx
/**
 * title: 指定挂载节点
 */
import React from 'react';
import { ImagePreview, Cell } from 'react-vant';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default () => {
  const ref = React.useRef(null);
  return (
    <>
      <Cell
        title="指定挂载节点"
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <div ref={ref} />
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
| lazyload | 是否开启懒加载 | _boolean\|[Lazyload Props](/components/lazyload)_ | `false` |
| startPosition | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipeDuration | 动画时长，单位为 `ms` | _number \| string_ | `300` |
| showIndex | 是否显示页码 | _boolean_ | `true` |
| showIndicators | 是否显示轮播指示器 | _boolean_ | `false` |
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

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-image-preview-index-text-color | _var(--rv-white)_ | - |
| --rv-image-preview-index-font-size | _var(--rv-font-size-md)_ | - |
| --rv-image-preview-index-line-height | _var(--rv-line-height-md)_ | - |
| --rv-image-preview-index-text-shadow | _0 1px 1px var(--rv-gray-8)_ | - |
| --rv-image-preview-overlay-background-color | _rgba(0, 0, 0, 0.9)_ | - |
| --rv-image-preview-close-icon-size | _22px_ | - |
| --rv-image-preview-close-icon-color | _var(--rv-gray-5)_ | - |
| --rv-image-preview-close-icon-active-color | _var(--rv-gray-6)_ | - |
| --rv-image-preview-close-icon-margin | _var(--rv-padding-md)_ | - |
| --rv-image-preview-close-icon-z-index | _1_ | - |
