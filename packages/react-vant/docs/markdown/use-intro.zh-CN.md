# React Vant Hooks (Beta)

### 介绍

React Vant 内置了一系列的 Hooks，可以直接使用这些 API 进行开发。

> 在 beta 阶段我们有可能会在后续的新版本中发布 break change，建议使用 lockfile 锁定版本或手动锁定版本

### 示例

引入 `hooks.useWindowSize` 方法，即可获取到当前 Window 的宽度和高度。

```js
import { hooks } from 'react-vant';

const { width, height } = hooks.useWindowSize();

console.log(width); // 窗口宽度
console.log(height); // 窗口高度
```

### API 列表

下面是 React Vant 对外提供的所有 Hooks，点击名称可以查看详细介绍：

| 名称 | 描述 |
| --- | --- |
| [useClickAway](#/zh-CN/use-click-away) | 监听点击元素外部的事件 |
| [useCountDown](#/zh-CN/use-count-down) | 提供倒计时管理能力 |
| [useEventListener](#/zh-CN/use-event-listener) | 方便地进行事件绑定 |
| [useFormSmart](#/zh-CN/use-form-smart) | 方便地进行 form 操作 |
| [useInViewport](#/zh-CN/use-in-viewport) | 用于判断 dom 元素是否在可视范围之内 |
| [useMount](#/zh-CN/use-mount) | 只在组件 `mount` 时执行的 hook |
| [usePageVisibility](#/zh-CN/use-page-visibility) | 获取页面的可见状态 |
| [useSetState](#/zh-CN/use-set-state) | 管理 `object` 类型 state 的 Hooks，同时支持返回 state 最新状态 |
| [useScrollParent](#/zh-CN/use-scroll-parent) | 获取元素最近的可滚动父元素 |
| [useTouch](#/zh-CN/use-touch) | 用于在布尔值之间进行切换 |
| [useUpdateEffect](#/zh-CN/use-update-effect) | 只在依赖更新时执行的 `useEffect` hook |
| [useWindowSize](#/zh-CN/use-window-size) | 获取浏览器窗口的视口宽度和高度 |
