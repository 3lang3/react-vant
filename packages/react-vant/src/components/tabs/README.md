# Tabs 标签页

选项卡切换组件，提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 引入

```js
import { Tabs } from 'react-vant'
```

## 代码演示

### 基础用法

提供了 4 种展现形式

- `line` 下划线风格
- `capsule` 胶囊风格
- `jumbo` 带描述信息展示
- `card` 卡片风格

<code title="基础用法" src="./demo/base.tsx" />

### 通过名称匹配

在标签指定 `name` 属性的情况下，`active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```jsx
/**
 * title: 通过名称匹配
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active='c'>
        {['a', 'b', 'c'].map((item, index) => (
          <Tabs.TabPane name={item} key={item} title={`标签${index + 1}`}>
            内容 {index + 1}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```jsx
/**
 * title: 标签栏滚动
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`disabled` 事件。

```jsx
/**
 * title: 禁用标签
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active={1}>
        <Tabs.TabPane title='标签1'>内容1</Tabs.TabPane>
        <Tabs.TabPane title='标签2' disabled>
          内容2
        </Tabs.TabPane>
        <Tabs.TabPane title='标签3'>内容3</Tabs.TabPane>
      </Tabs>
    </div>
  )
}
```

### 对齐方式

设置 `align` 属性即可改变标签栏对齐方式。

```jsx
/**
 * title: 对齐方式
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs align='start'>
        {[1, 2, 3].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```jsx
/**
 * title: 粘性布局
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs sticky swipeable>
        {[1, 2, 3, 4].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            内容 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
```

### 滚动导航

通过 `scrollspy` 和 `sticky` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```jsx
/**
 * title: 滚动导航
 */
import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs
        sticky
        scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            <div style={{ height: '50vh' }}>内容 {item}</div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前选中项的标识符 | _number \| string_ | - |
| defaultActive | 默认选中项的标识符 | _number \| string_ | `0` |
| type | 样式风格类型 | _line\|card\|capsule\|jumbo_ | `line` |
| align | 标签栏对齐方式, 可选值 `start` `center` | _string_ | `center` |
| color | 标签主题色 <br/> `type` 为 `line` 时，下划线颜色和选中项颜色<br/> `type` 为 `capsule` 时，选中项背景色<br/> `type` 为 `jumbo` 时，选中项颜色和描述信息背景色<br/> `type` 为 `card` 时，线框色和选中项背景色 | _string_ | `#ee0a24` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒 | _number \| string_ | `300ms` |
| lineWidth | `type` 为 `line` 时生效，底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| lineHeight | `type` 为 `line` 时生效，底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字，对 `jumbo` 无效， | _boolean_ | `true` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| stickyInitScrollbar | `sticky` 模式下点击标签重置滚动条位置 | _boolean_ | `true` |
| swipeable | 是否开启手势滑动切换 | _boolean\|TabsSwiperProps_ | `false` |
| lazyRender | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| lazyRenderPlaceholder | 启延迟渲染占位符 | _ReactNode_ | - |
| scrollspy | 是否开启滚动导航 | _boolean\|ScrollspyConfig_ | `false` |
| offsetTop | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |
| beforeChange | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |

### TabsSwiperProps

| 参数          | 说明                 | 类型      | 默认值 |
| ------------- | -------------------- | --------- | ------ |
| autoHeight    | 自适应高度           | _boolean_ | `true` |
| preventScroll | 是否阻止内部滚动行为 | _boolean_ | `true` |

### ScrollspyConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocusLast | 滚动导航模式下，容器滚动触底时是否将最后一个 tab 转为 Active 状态 | _boolean_ | - |
| reachBottomThreshold | 触底偏移量 | _number_ | - |
| scrollImmediate | 点击标签，立即展示对应内容区域，取消滚动动画 | _boolean_ | `true` |

### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _ReactNode \|(active: boolean) => ReactNode_ | - |
| description | 描述信息，`type` 为 `jumbo` 时生效 | _ReactNode \|(active: boolean) => ReactNode_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string\|[BadgeProps](/components/badge#props)_ | - |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| titleStyle | 自定义标题样式 | _CSSProperties_ | - |
| titleClass | 自定义标题类名 | _string_ | - |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClickTab | 点击标签时触发 | _{ name: string \| number, event: MouseEvent, disabled: boolean }_ |
| onChange | 当前激活的标签改变时触发 | _name: string \| number, tabIndex: number_ |
| onScroll | 滚动时触发，仅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

> `提示：onClick` 已废弃，请使用 `onClickTab` 事件代替。

### Tabs 方法

通过 ref 可以获取到 Tabs 实例并调用实例方法，详见[组件实例方法](/guide/advanced-usage)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| scrollTo | 滚动到指定的标签页，在滚动导航模式下可用 | _name: string \| number_ | - |
| swiper.disable | 开启 `swipeable`后获得， 禁用 Swiper 能力（如果已启用） | - | - |
| swiper.enable | 开启 `swipeable`后获得， 动态启用 Swiper 能力（如果已经禁用） | - | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-tab-text-color | _var(--rv-gray-7)_ | - |
| --rv-tab-active-text-color | _var(--rv-text-color)_ | - |
| --rv-tab-disabled-text-color | _var(--rv-gray-5)_ | - |
| --rv-tab-font-size | _var(--rv-font-size-md)_ | - |
| --rv-tab-line-height | _var(--rv-line-height-md)_ | - |
| --rv-tabs-default-color | _var(--rv-danger-color)_ | - |
| --rv-tabs-line-height | _44px_ | - |
| --rv-tabs-card-height | _30px_ | - |
| --rv-tabs-nav-background-color | _var(--rv-white)_ | - |
| --rv-tabs-bottom-bar-width | _40px_ | - |
| --rv-tabs-bottom-bar-height | _3px_ | - |
| --rv-tabs-bottom-bar-color | _var(--rv-danger-color)_ | - |
| --rv-tabs-jumbo-height | _64px_ | - |
| --rv-tab-capsule-padding | _var(--rv-padding-xs) var(--rv-padding-sm)_ | - |
| --rv-tab-jumbo-title-size | _var(--rv-font-size-lg)_ | - |
| --rv-tab-description-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-tab-description-color | _var(--rv-grey-6)_ | - |
| --rv-tab-description-background-color | _var(--rv-grey-6)_ | - |
