# 组合式 API

### 介绍

React Vant 内置了一系列的 Hooks，对于安装了 `react-vant` 的项目，可以直接使用这些 API 进行开发。

### 示例

引入 `useWindowSize` 方法，然后进行调用，即可获取到当前 Window 的宽度和高度。

```js
import { useWindowSize } from 'react-vant';

const { width, height } = useWindowSize();

console.log(width); // 窗口宽度
console.log(height); // 窗口高度
```

### API 列表

下面是 React Vant 对外提供的所有 Hooks，点击名称可以查看详细介绍：

| 名称                                             | 描述                               |
| ------------------------------------------------ | ---------------------------------- |
| [useClickAway](#/zh-CN/use-click-away)           | 监听点击元素外部的事件             |
| [useCountDown](#/zh-CN/use-count-down)           | 提供倒计时管理能力                 |
| [useEventListener](#/zh-CN/use-event-listener)   | 方便地进行事件绑定                 |
| [usePageVisibility](#/zh-CN/use-page-visibility) | 获取页面的可见状态                 |
| [useRect](#/zh-CN/use-rect)                      | 获取元素的大小及其相对于视口的位置 |
| [useScrollParent](#/zh-CN/use-scroll-parent)     | 获取元素最近的可滚动父元素         |
| [useTouch](#/zh-CN/use-touch)                    | 用于在布尔值之间进行切换           |
| [useWindowSize](#/zh-CN/use-window-size)         | 获取浏览器窗口的视口宽度和高度     |
