# Calendar 日历

## 介绍

日历组件用于选择日期或日期区间。

## 引入

```js
import { Calendar } from 'react-vant';
```

## 代码演示

### 基础使用

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `onConfirm` 事件。

<code src="./demo/base.tsx" title="选择单个日期" />

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 `allowSameDay` 属性来允许选择同一天。

### 快捷选择

将 `showConfirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `onConfirm` 事件。

<code src="./demo/quick.tsx" title="快捷选择" />

### 自定义日历

- 通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效
- 通过 `minDate` 和 `maxDate` 定义日历的范围
- 通过传入 `formatter` 函数来对日历上每一格的内容进行格式化
- 通过 `weekdays` 属性可以实现周标题自定义，通过 formatMonthTitle 函数可以实现月标题自定义

<code title="自定义" src="./demo/custom.tsx" />

### 平铺展示

将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。

<code title="平铺展示" src="./demo/poppable.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | _Date \| Date[] \| null_ | - |
| defaultValue | 默认选中的日期，同 `value` | _Date \| Date[] \| null_ | `new Date()` |
| type | 选择类型:<br>`single` 表示选择单个日期，<br>`multiple` 表示选择多个日期，<br>`range` 表示选择日期区间 | _string_ | `single` |
| title | 日历标题 | _string\|React.ReactNode_ | `日期选择` |
| subtitle | 自定义日历副标题 | _string\|React.ReactNode_ | - |
| weekdays | 自定义星期文案 | _React.ReactNode[]_ | `['日', '一', '二', '三', '四', '五', '六']` |
| formatMonthTitle | 自定义月标题 | _(date: Date) => React.ReactNode_ | - |
| footer | 自定义底部区域内容 | _string\|React.ReactNode_ | - |
| topInfoRender | 自定义日期上方的提示信息 | _(day: Day) => React.ReactNode_ | - |
| bottomInfoRender | 自定义日期下方的提示信息 | _(day: Day) => React.ReactNode_ | - |
| color | 主题色，对底部按钮和选中日期生效 | _string_ | `#ee0a24` |
| minDate | 可选择的最小日期 | _Date_ | 当前日期 |
| maxDate | 可选择的最大日期 | _Date_ | 当前日期的六个月后 |
| rowHeight | 日期行高 | _number \| string_ | `64` |
| formatter | 日期格式化函数 | _(day: Day) => Day_ | - |
| horizontal | 水平滑动 | _boolean_ | - |
| poppable | 是否以弹层的形式展示日历 | _boolean_ | `true` |
| lazyRender | 是否只渲染可视区域的内容 | _boolean_ | `false` |
| showMark | 是否显示月份背景水印 | _boolean_ | `true` |
| showTitle | 是否展示日历标题 | _boolean_ | `true` |
| showSubtitle | 是否展示日历副标题（年月） | _boolean_ | `true` |
| showConfirm | 是否展示确认按钮 | _boolean_ | `true` |
| readOnly | 是否为只读状态，只读状态下不能选择日期 | _boolean_ | `false` |
| confirmText | 确认按钮的文字 | _string_ | `确定` |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | _string_ | `确定` |
| firstDayOfWeek | 设置周起始日 | _0-6_ | `0` |
| children | 渲染函数 | _(val: Date\|Date[], actions: PickerActions) => ReactNode_ | - |

### Calendar Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示日历弹窗 | _boolean_ | `false` |
| position | 弹出位置，可选值为 `top` `right` `left` | _string_ | `bottom` |
| round | 是否显示圆角弹窗 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage) | _boolean_ | `true` |

### Calendar Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxRange | 日期区间最多可选天数 | _number \| string_ | 无限制 |
| rangePrompt | 范围选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |
| showRangePrompt | 范围选择超过最多可选天数时，是否展示提示文案 | _boolean_ | `true` |
| allowSameDay | 是否允许日期范围的起止时间为同一天 | _boolean_ | `false` |

### Calendar Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxRange | 日期最多可选天数 | _number \| string_ | 无限制 |
| rangePrompt | 选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| date | 日期对应的 Date 对象 | _Date_ |
| type | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | 中间显示的文字 | _string_ |
| topInfo | 上方的提示信息 | _string_ |
| bottomInfo | 下方的提示信息 | _string_ |
| className | 额外类名 | _string_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onSelect | 点击并选中任意日期时触发 | _value: Date \| Date[]_ |
| onConfirm | 日期选择完成后触发，若 `showConfirm` 为 `true`，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| onClose | 关闭弹出层时触发 | - |
| onClosed | 关闭弹出层且动画结束后触发 | - |
| onUnselect | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发 | _value: Date_ |
| onMonthShow | 当某个月份进入可视区域时触发 | _{ date: Date, title: string }_ |
| onOverRange | 范围选择超过最多可选天数时触发 | - |
| onClickSubtitle | 点击日历副标题时触发 | _event: MouseEvent_ |

### 方法

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| reset | 将选中的日期重置到指定日期，未传参时会重置到默认日期 | _(date?: Date \| Date[]) => void_ |
| scrollToDate | 滚动到某个日期 | _(date: Date) => void_ |
| open | `poppable` 开启时， 显示 `Calendar` | _() => void_ |
| close | `poppable` 开启时，关闭 `Calendar` | _() => void_ |
| toggle | `poppable` 开启时，切换 `Calendar` 的显示和隐藏状态 | _() => void_ |

### 类型定义

通过 `CalendarInstance` 获取 Calendar 实例的类型。

```js
import { useRef } from 'react';
import type { CalendarInstance } from 'react-vant';

const calendarRef = ref<CalendarInstance>();

calendarRef.value?.reset();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-calendar-background-color | _var(--rv-white)_ | - |
| --rv-calendar-popup-height | _80%_ | - |
| --rv-calendar-header-box-shadow | _0 2px 10px rgba(125, 126, 128, 0.16)_ | - |
| --rv-calendar-header-title-height | _44px_ | - |
| --rv-calendar-header-title-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-calendar-header-subtitle-font-size | _var(--rv-font-size-md)_ | - |
| --rv-calendar-weekdays-height | _30px_ | - |
| --rv-calendar-weekdays-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-calendar-month-title-font-size | _var(--rv-font-size-md)_ | - |
| --rv-calendar-month-mark-color | _fade(var(--rv-gray-2), 80%)_ | - |
| --rv-calendar-month-mark-font-size | _160px_ | - |
| --rv-calendar-day-height | _64px_ | - |
| --rv-calendar-day-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-calendar-range-edge-color | _var(--rv-white)_ | - |
| --rv-calendar-range-edge-background-color | _var(--rv-danger-color)_ | - |
| --rv-calendar-range-middle-color | _var(--rv-danger-color)_ | - |
| --rv-calendar-range-middle-background-opacity | _0.1_ | - |
| --rv-calendar-selected-day-size | _54px_ | - |
| --rv-calendar-selected-day-color | _var(--rv-white)_ | - |
| --rv-calendar-info-font-size | _var(--rv-font-size-xs)_ | - |
| --rv-calendar-info-line-height | _var(--rv-line-height-xs)_ | - |
| --rv-calendar-selected-day-background-color | _var(--rv-danger-color)_ | - |
| --rv-calendar-day-disabled-color | _var(--rv-gray-5)_ | - |
| --rv-calendar-confirm-button-height | _36px_ | - |
| --rv-calendar-confirm-button-margin | _7px 0_ | - |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
