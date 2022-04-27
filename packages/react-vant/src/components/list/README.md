# List 列表

## 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 引入

```js
import { List } from 'react-vant';
```

## 代码演示

### 基础用法

List 组件滚动到底部时，会触发 `onLoad` 事件，此时可以发起异步操作并更新数据，若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

> 和 vant 不同的是，react-vant 根据 onLoad 在组件内部维护了 loading 和 error 状态。

<code src="./demo/base.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否处于加载状态，加载过程中不触发`load`事件 | _boolean_ | `false` |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | _boolean_ | `false` |
| error | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`load`事件，必须使用`sync`修饰符 | _boolean_ | `false` |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | _number \| string_ | `300` |
| loadingText | 加载过程中的提示文案 | _ReactNode_ | `加载中...` |
| finishedText | 加载完成后的提示文案 | _ReactNode_ | - |
| errorText | 加载失败后的提示文案 | _ReactNode_ | - |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | _boolean_ | `true` |
| autoCheck | 是否在 onLoad 执行后再次检查滚动位置 | _boolean_ | `true` |

### Events

| 事件名 | 说明                               | 类型                      | 回调参数 |
| ------ | ---------------------------------- | ------------------------- | -------- |
| onLoad | 滚动条与底部距离小于 offset 时触发 | _() => (Promise \| void)_ | -        |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法

| 方法名 | 说明                                                     | 参数 | 返回值 |
| ------ | -------------------------------------------------------- | ---- | ------ |
| check  | 检查当前的滚动位置，若已滚动至底部，则会触发 onLoad 事件 | -    | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                        | 默认值                   | 描述 |
| --------------------------- | ------------------------ | ---- |
| --rv-list-text-color        | _var(--rv-gray-6)_       | -    |
| --rv-list-text-font-size    | _var(--rv-font-size-md)_ | -    |
| --rv-list-text-line-height  | _50px_                   | -    |
| --rv-list-loading-icon-size | _16px_                   | -    |

## 常见问题

### List 的运行机制是什么？

List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于`offset`时，List 会触发一次 load 事件。

### 为什么 List 初始化后会立即触发 load 事件？

List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过`immediateCheck`属性关闭。

### 为什么会连续触发 load 事件？

如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？

`List`有以下三种状态，理解这些状态有助于你正确地使用`List`组件：

- 非加载中，`loading`为`false`，此时会根据列表滚动位置判断是否触发`load`事件（列表内容不足一屏幕时，会直接触发）
- 加载中，`loading`为`true`，表示正在发送异步请求，此时不会触发`load`事件
- 加载完成，`finished`为`true`，此时不会触发`load`事件

在每次请求完毕后，需要手动将`loading`设置为`false`，表示加载结束

### 在 html、body 上设置 overflow 后一直触发加载？

如果在 html 和 body 标签上设置了`overflow-x: hidden`样式，会导致 List 一直触发加载。

```css
html,
body {
  overflow-x: hidden;
}
```

这个问题的原因是当元素设置了`overflow-x: hidden`样式时，该元素的`overflow-y`会被浏览器设置为`auto`，而不是默认值`visible`，导致 List 无法正确地判断滚动容器。解决方法是去除该样式，或者在 html 和 body 标签上添加`height: 100%`样式。
