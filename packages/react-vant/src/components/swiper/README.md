# Swiper 轮播

## 介绍

用于循环播放一组图片或内容。

## 引入

```js
import { Swiper } from 'react-vant';
```

## 代码演示

### 基础用法

每个 Swiper.Item 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Swiper } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};
```

### 懒加载

当 Swiper 中含有图片时，可以通过设置图片 `lazyload` 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页，上一页和下一页。

```jsx
/**
 * title: 懒加载
 */
import React from 'react';
import { Swiper, Image } from 'react-vant';
import { images } from './demo/images';
import './demo/images.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper>
        {images.map((image) => (
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};
```

### 监听 onChange 事件

在每一页轮播结束后，会触发 `onChange` 事件。

```jsx
/**
 * title: 监听 onChange 事件
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper onChange={(i) => Toast(`当前索引${i}`)}>{items}</Swiper>
    </div>
  );
};
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```jsx
/**
 * title: 纵向滚动
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000} vertical style={{ height: 150 }}>
        {items}
      </Swiper>
    </div>
  );
};
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `slideSize` 属性改变滑块宽度。

```jsx
/**
 * title: 自定义滑块大小
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80}>{items}</Swiper>
    </div>
  );
};
```

### 滑块居中

通过 `trackOffset` 改变滑块偏移量实现居中展示。

```jsx
/**
 * title: 滑块居中
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};
```

### 垂直滑块居中

```jsx
/**
 * title: 垂直滑块居中
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/base.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  );
};
```

### 自定义指示器

通过 `indicator` 属性可以自定义指示器的样式。

```jsx
/**
 * title: 自定义指示器
 */
import React from 'react';
import { Swiper, Toast } from 'react-vant';
import { items } from './demo/items';
import './demo/indicator.less';

export default () => {
  return (
    <div className="demo-swiper">
      <Swiper
        indicator={(total, current) => (
          <div className="custom-indicator">
            {current + 1}/{total}
          </div>
        )}
      >
        {items}
      </Swiper>
    </div>
  );
};
```

## API

### Swipe Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 自动轮播间隔，单位为 ms | _number \| boolean_ | `false` |
| duration | 动画时长，单位为 ms | _number_ | `300` |
| initialSwipe | 初始位置索引值 | _number_ | `0` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| enabled | 是否启用 Swiper | _boolean_ | `true` |
| vertical | 是否为纵向滚动 | _boolean_ | `false` |
| touchable | 是否可以通过手势滑动 | _boolean_ | `true` |
| preventScroll | 是否阻止内部滚动行为 | _boolean_ | `true` |
| slideSize | 滑块的宽度百分比 | _number_ | `100` |
| trackOffset | 滑块轨道整体的偏移量百分比 | _number_ | `0` |
| rubberband | 是否在拖动超出内容区域时启用橡皮筋效果，仅在非 loop 模式下生效 | _boolean_ | `true` |
| stuckAtBoundary | 是否在边界两边卡住，避免出现空白，仅在非 `loop` 模式且 `slideSize` < 100 时生效 | _boolean_ | `false` |
| indicator | 自定义指示器 | _boolean \| (total, current) => ReactNode_ | - |
| indicatorProps | 指示器属性 | _IndicatorProps_ | - |
| onChange | 每一页轮播结束后触发 | _(index:当前页的索引) => void_ | - |

### IndicatorProps 格式

| 名称      | 说明       | 类型     |
| --------- | ---------- | -------- |
| className | 指示器类名 | _string_ |
| style     | 指示器样式 | _string_ |

### SwiperItem Events

| 事件名  | 说明       | 回调参数            |
| ------- | ---------- | ------------------- |
| onClick | 点击时触发 | _event: MouseEvent_ |

### Swiper 方法

通过 ref 可以获取到 Swiper 实例并调用实例方法。

| 方法名    | 说明                            | 参数            | 返回值 |
| --------- | ------------------------------- | --------------- | ------ |
| swipePrev | 切换到上一轮播                  | -               | -      |
| swipeNext | 切换到下一轮播                  | -               | -      |
| swipeTo   | 切换到指定位置                  | _index: number_ | -      |
| disable   | 禁用 Swiper（如果已启用）       | -               | -      |
| enable    | 动态启用 Swiper（如果已经禁用） | -               | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type { SwiperInstance } from 'react-vant';
```

`SwiperInstance` 是组件实例的类型，用法如下：

```ts
import { useRef } from 'react';
import type { SwiperInstance } from 'react-vant';

const swipeRef = useRef<SwipeInstance>(null);

swipeRef.current?.swipeNext();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-swipe-slide-size | _100%_ | - |
| --rv-swipe-track-offset | _0%_ | - |
| --rv-swipe-border-radius | _0px_ | - |
| --rv-swipe-indicator-size | _6px_ | - |
| --rv-swipe-indicator-margin | _var(--rv-padding-sm)_ | - |
| --rv-swipe-indicator-active-opacity | _1_ | - |
| --rv-swipe-indicator-inactive-opacity | _0.3_ | - |
| --rv-swipe-indicator-active-background-color | _var(--rv-primary-color)_ | - |
| --rv-swipe-indicator-inactive-background-color | _var(--rv-border-color)_ | - |
