# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

```js
import { Swipe } from '@zhpfe/design';
```

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```jsx
<Swipe className="my-swipe" autoplay="3000">
  <Swipe.Item>1</Swipe.Item>
  <Swipe.Item>2</Swipe.Item>
  <Swipe.Item>3</Swipe.Item>
  <Swipe.Item>4</Swipe.Item>
</Swipe>

<style>
  .my-swipe .zf-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
```

### 懒加载

当 Swipe 中含有图片时，可以通过 `lazyRender` 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页和下一页。

```jsx
<Swipe autoplay="3000" lazyRender>
  {images.map((item) => (
  <Swipe.Item key="{item}">
    <img src="{item}" alt="" />
  </Swipe.Item>
  ))}
</Swipe>
```

```js
const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
];
```

### 监听 change 事件

```jsx
<Swipe onChange="{onChange}">
  <Swipe.Item>1</Swipe.Item>
  <Swipe.Item>2</Swipe.Item>
  <Swipe.Item>3</Swipe.Item>
  <Swipe.Item>4</Swipe.Item>
</Swipe>
```

```js
import { Toast } from '@zhpfe/design';

const onChange = (index: number) => Toast(`当前 Swipe 索引：${index}`);
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```jsx
 <Swipe
  autoplay="3000"
  vertical
  style={{ height: '200px' }}
  className="demo-swipe--vertical"
>
  <Swipe.Item>1</Swipe.Item>
  <Swipe.Item>2</Swipe.Item>
  <Swipe.Item>3</Swipe.Item>
  <Swipe.Item>4</Swipe.Item>
</Swipe>
```

## API

### Swipe Props

| 参数            | 说明                     | 类型               | 默认值    |
| --------------- | ------------------------ | ------------------ | --------- |
| autoplay        | 自动轮播间隔，单位为 ms  | _number \| string_ | -         |
| duration        | 动画时长，单位为 ms      | _number \| string_ | `500`     |
| initialSwipe    | 初始位置索引值           | _number \| string_ | `0`       |
| width           | 滑块宽度，单位为`px`     | _number \| string_ | `auto`    |
| height          | 滑块高度，单位为`px`     | _number \| string_ | `auto`    |
| loop            | 是否开启循环播放         | _boolean_          | `true`    |
| showIndicators  | 是否显示指示器           | _boolean_          | `true`    |
| vertical        | 是否为纵向滚动           | _boolean_          | `false`   |
| touchable       | 是否可以通过手势滑动     | _boolean_          | `true`    |
| stopPropagation | 是否阻止滑动事件冒泡     | _boolean_          | `true`    |
| lazyRender      | 是否延迟渲染未展示的轮播 | _boolean_          | `false`   |
| indicatorColor  | 指示器颜色               | _string_           | `#1989fa` |

### Swipe Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwipeItem Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

<!-- ### Swipe 方法

通过 ref 可以获取到 Swipe 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev | 切换到上一轮播 | - | - |
| next | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | index: number, options: Options | - |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - | -->

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                       | 默认值          | 描述 |
| ------------------------------------------ | --------------- | ---- |
| @swipe-indicator-size                      | `6px`           | -    |
| @swipe-indicator-margin                    | `@padding-sm`   | -    |
| @swipe-indicator-active-opacity            | `1`             | -    |
| @swipe-indicator-inactive-opacity          | `0.3`           | -    |
| @swipe-indicator-active-background-color   | `@blue`         | -    |
| @swipe-indicator-inactive-background-color | `@border-color` | -    |

<!-- ## 常见问题

### 滑动轮播时为什么触发了 click 事件？

这种情况通常是由于项目中引入了`fastclick`库导致的。`fastclick`的原理是通过 Touch 事件模拟出 click 事件，而 Swipe 内部默认会阻止 touchmove 事件冒泡，干扰了 fastclick 的判断，导致出现这个问题。

将 Swipe 组件的 stop-propagation 属性设置为 false 即可避免该问题。

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### Swipe 组件功能太少，无法实现复杂效果？

Vant 中的 Swipe 组件是比较轻量的，因此功能也比较基础。如果需要更复杂的轮播效果，推荐使用社区里一些优质的轮播库，比如 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)。

### 组件从隐藏状态切换到显示状态时，无法正确渲染？

Swipe 组件在挂载时，会获取自身的宽度，并计算出轮播图的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法正确计算位置。

#### 解决方法

方法一，如果是使用 `v-show` 来控制组件展示的，则替换为 `v-if` 即可解决此问题：

```jsx
<!-- Before -->
<Swipe v-show="show" />
<!-- After -->
<Swipe v-if="show" />
```

方法二，调用组件的 resize 方法来主动触发重绘：

```jsx
<Swipe v-show="show" ref="swipe" />
```

```js
this.$refs.swipe.resize();
``` -->
