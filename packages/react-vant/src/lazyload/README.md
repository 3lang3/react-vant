# Lazyload 懒加载

### 介绍

当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。

> Lazyload 基于 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)实现， 部分浏览器需要[intersection-observer polyfill](https://www.npmjs.com/package/intersection-observer)支持。

### 引入

```js
import { Lazyload } from 'react-vant';
```

## 代码演示

### 图片懒加载

将 `Image` 组件的 lazyload 属性设为 `true` 即可开启懒加载功能。

```jsx
import React from 'react';
import { Image } from 'react-vant';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

export default () => {
  return (
    <div>
      {imageList.map((img) => (
        <Image className="lazy-img" lazyload src={img} key={img} />
      ))}
    </div>
  );
};
```

```css
.lazy-img {
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 12px;
}
```

### 组件懒加载

将需要懒加载的组件放在 `Lazyload` 组件中，即可实现组件懒加载。

```jsx
import React, { useEffect } from 'react';
import { Lazyload, Image, Typography } from 'react-vant';

const LazyComponent = () => {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <Typography.Text>
        当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
      </Typography.Text>
    </div>
  );
};

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};
```

## API

### Options

| 参数        | 说明               | 类型             | 默认值              |
| ----------- | ------------------ | ---------------- | ------------------- |
| height      | 设置占位容器高度   | _number\|string_ | -                   |
| placeholder | 自定义占位容器视图 | _ReactNode_      | \<Skeleton title /> |
| style       | 占位容器样式       | _CSSProperties_  | -                   |
| className   | 占位容器类名       | _string_         | -                   |
