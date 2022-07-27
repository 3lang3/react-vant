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

| 名称                                           | 默认值                    | 描述 |
| ---------------------------------------------- | ------------------------- | ---- |
| --rv-swipe-slide-size                          | _100%_                    | -    |
| --rv-swipe-track-offset                        | _0%_                      | -    |
| --rv-swipe-border-radius                       | _0px_                     | -    |
| --rv-swipe-indicator-size                      | _6px_                     | -    |
| --rv-swipe-indicator-margin                    | _var(--rv-padding-sm)_    | -    |
| --rv-swipe-indicator-active-opacity            | _1_                       | -    |
| --rv-swipe-indicator-inactive-opacity          | _0.3_                     | -    |
| --rv-swipe-indicator-active-background-color   | _var(--rv-primary-color)_ | -    |
| --rv-swipe-indicator-inactive-background-color | _var(--rv-border-color)_  | -    |
