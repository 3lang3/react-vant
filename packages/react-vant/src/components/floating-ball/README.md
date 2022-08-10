# FloatingBall 悬浮球

## 介绍

悬浮球用于提供全局悬浮快捷操作入口，可以自由拖动，支持 1 ～ 5 个操作选项。

## 引入

```js
import { FloatingBall } from 'react-vant';
```

### 示例代码

<code title="基础示例" src="./demo/base.tsx" />

## API

### FloatingBall Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| menu | 菜单配置项 | _[MenuProps](#menuprops)_ | - |
| adsorb | 近边吸附能力 | _boolean \| [AdsorbProps](#adsorbprops)_ | `true` |
| draggable | 是否开启拖拽 | _boolean_ | `true` |
| boundary | 限制拖动范围在屏幕边界内 | _boolean_ | `true` |
| offset | 初始位置 | _[OffsetProps](#offsetprops)_ | `{ right: 0, bottom: '30vh' }` |
| disabled | 是否禁用 | _boolean_ | - |
| disabledClassName | 禁用时的 class | _string_ | - |
| children | 悬浮球包裹的内容 | _ReactNode \| ({ active, indenting }) => ReactNode_ | - |

### MenuProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 菜单元素，最多支持 5 个 | _ReactNode[]_ | - |
| active | 菜单激活状态 | _boolean_ | - |
| defaultActive | 默认的菜单激活状态 | _boolean_ | - |
| direction | 菜单展开方向 | _around \| vertical \| horizontal_ | `around` |
| itemClickClose | 点击菜单项关闭菜单 | _boolean_ | `true` |
| onChange | 菜单状态变化的回调 | _(active: boolean) => void_ | - |

### AdsorbProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indent | 滚动时元素缩进比率，支持 0-1 的数字 | _boolean \| number_ | `0.5` |
| indentClassName | 缩进时的 class | _string_ | - |
| distance | 近边停靠距离 | _number_ | `0` |

### OffsetProps

| 参数   | 说明           | 类型                      |
| ------ | -------------- | ------------------------- |
| top    | 距离顶部的距离 | _CSSProperties['top']_    |
| right  | 距离右侧的距离 | _CSSProperties['right']_  |
| bottom | 距离底部的距离 | _CSSProperties['bottom']_ |
| left   | 距离左侧的距离 | _CSSProperties['left']_   |

### FloatingBall 方法

通过 ref 可以获取到 FloatingBall 实例并调用实例方法。

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| open   | 激活菜单 | -    |
| close  | 关闭菜单 | -    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                       | 默认值 | 描述                  |
| -------------------------- | ------ | --------------------- |
| --rv-floating-ball-size    | _48px_ | 悬浮元素大小          |
| --rv-floating-ball-z-index | _8_    | 悬浮元素`z-index`层级 |
