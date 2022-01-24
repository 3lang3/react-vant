# Tabs 标签页

### 引入

```js
import { Tabs } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```jsx
<Tabs active="active">
  <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
  <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
  <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
  <Tabs.TabPane title="标签 4">内容 4</Tabs.TabPane>
</Tabs>
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```jsx
<Tabs active="b">
  <Tabs.TabPane title="标签 1" name="a">
    内容 1
  </Tabs.TabPane>
  <Tabs.TabPane title="标签 2" name="b">
    内容 2
  </Tabs.TabPane>
  <Tabs.TabPane title="标签 3" name="c">
    内容 3
  </Tabs.TabPane>
</Tabs>
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```jsx
<Tabs>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`标签${item}`}>
      内容 {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`disabled` 事件。

```jsx
<Tabs>
  <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
  <Tabs.TabPane title="标签2" disabled>
    内容2
  </Tabs.TabPane>
  <Tabs.TabPane title="标签3">内容3</Tabs.TabPane>
</Tabs>
```

### 对齐方式

设置 `align` 属性即可改变标签栏对齐方式。

```jsx
<Tabs align="start">
  <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
  <Tabs.TabPane title="标签2">内容2</Tabs.TabPane>
  <Tabs.TabPane title="标签3">内容3</Tabs.TabPane>
</Tabs>
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```jsx
<Tabs type="card">
  <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
  <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
  <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
</Tabs>
```

### 点击事件

可以在 `Tabs` 上绑定 `onClick` 事件，事件传参为标签对应的标识符和标题。

```jsx
<Tabs onClick={(name, title) => Toast(title)}>
  <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
  <Tabs.TabPane title="标签2">内容2</Tabs.TabPane>
</Tabs>
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```jsx
<Tabs active={2} sticky>
  {[1, 2, 3, 4].map((item) => (
    <Tabs.TabPane key={item} title={`标签${item}`}>
      <div style={{ height: '50vh' }}>内容 {item}</div>
    </Tabs.TabPane>
  ))}
</Tabs>
```

### 滚动导航

通过 `scrollspy` 和 `sticky` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```jsx
<Tabs sticky scrollspy>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`标签${item}`}>
      内容 {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| align | 标签栏对齐方式, 可选值 `start` `center` | _string_ | `center` |
| color | 标签主题色 | _string_ | `#ee0a24` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒 | _number \| string_ | `0.3` |
| lineWidth | 底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| lineHeight | 底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` |
| lazyRender | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| scrollspy | 是否开启滚动导航 | _boolean\|ScrollspyConfig_ | `false` |
| offsetTop | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |
| beforeChange | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |

### ScrollspyConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocusLast | 滚动导航模式下，容器滚动触底时是否将最后一个 tab 转为 Active 状态 | _boolean_ | - |
| reachBottomThreshold | 触底偏移量 | _number_ | - |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| renderTitle | 自定义标题 | _ReactNode \|(active: boolean) => ReactNode_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| dot | 是否在标题右上角显示小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| titleStyle | 自定义标题样式 | _CSSProperties_ | - |
| titleClass | 自定义标题类名 | _string_ | - |
| showZeroBadge | 当 badge 为数字 0 时，是否展示徽标 | _boolean_ | `true` |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClickTab | 点击标签时触发 | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| onChange | 当前激活的标签改变时触发 | _name: string \| number, title: string_ |
| onScroll | 滚动时触发，仅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

> 提示：click 和 disabled 事件已废弃，请使用 click-tab 事件代替。

### Tabs 方法

通过 ref 可以获取到 Tabs 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |
| scrollTo | 滚动到指定的标签页，在滚动导航模式下可用 | _name: string \| number_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                     | 描述 |
| ------------------------------ | -------------------------- | ---- |
| --rv-tab-text-color            | _var(--rv-gray-7)_         | -    |
| --rv-tab-active-text-color     | _var(--rv-text-color)_     | -    |
| --rv-tab-disabled-text-color   | _var(--rv-gray-5)_         | -    |
| --rv-tab-font-size             | _var(--rv-font-size-md)_   | -    |
| --rv-tab-line-height           | _var(--rv-line-height-md)_ | -    |
| --rv-tabs-default-color        | _var(--rv-danger-color)_   | -    |
| --rv-tabs-line-height          | _44px_                     | -    |
| --rv-tabs-card-height          | _30px_                     | -    |
| --rv-tabs-nav-background-color | _var(--rv-white)_          | -    |
| --rv-tabs-bottom-bar-width     | _40px_                     | -    |
| --rv-tabs-bottom-bar-height    | _3px_                      | -    |
| --rv-tabs-bottom-bar-color     | _var(--rv-danger-color)_   | -    |
