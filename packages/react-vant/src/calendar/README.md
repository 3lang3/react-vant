# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

```js
import { Calendar } from 'react-vant';
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `onConfirm` 事件。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  const onConfirm = (date) => {
    const dateStr = formatDate(date);
    setText(dateStr);
    setVisible(false);
  };
  return (
    <>
      <Cell title="选择单个日期" value={text} onClick={() => setVisible(true)} />
      <Calendar visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `onConfirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const onConfirm = (dates) => {
    setText(`选择了 ${dates.length} 个日期`);
    setVisible(false);
  };
  return (
    <>
      <Cell title="选择多个日期" value={text} onClick={() => setVisible(true)} />
      <Calendar type="multiple" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `onConfirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
  const onConfirm = ([start, end]) => {
    setText(`${formatDate(start)} - ${formatDate(end)}`);
    setVisible(false);
  };
  return (
    <>
      <Cell title="选择日期区间" value={text} onClick={() => setVisible(true)} />
      <Calendar type="range" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allowSameDay 属性来允许选择同一天。

### 快捷选择

将 `showConfirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `onConfirm` 事件。

```jsx
<Calendar visible={visible} showConfirm={false} />
```

### 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```jsx
<Calendar visible={visible} color="#1989fa" />
```

### 自定义日期范围

通过 `minDate` 和 `maxDate` 定义日历的范围。

```jsx
const minDate = new Date(2010, 0, 1);
const maxDate = new Date(2010, 0, 31);

<Calendar visible={visible} minDate={minDate} maxDate={maxDate} />;
```

### 自定义按钮文字

通过 `confirmText` 设置按钮文字，通过 `confirmDisabledText` 设置按钮禁用时的文字。

```jsx
<Calendar
  visible={visible}
  type="range"
  confirmText="完成咯"
  confirmDisabledText="请选择结束时间啊"
/>
```

### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```jsx
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};

<Calendar visible={visible} type="range" formatter={formatter} />;
```

### 自定义星期文案/月标题

通过 `weekdays` 属性可以实现星期内容的自定义，通过 `formatMonthTitle` 函数可以实现月标题的自定义渲染。

```jsx
<Calendar
  weekdays={['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓']}
  formatMonthTitle={(date) => `${date.getFullYear()}🥑${date.getMonth() + 1}🍪`}
  visible={visible}
/>
```

### 自定义弹出位置

通过 `position` 属性自定义弹出层的弹出位置，可选值为 `top`、`left`、`right`。

```jsx
<Calendar visible={visible} round={false} position="right" />
```

### 日期区间最大范围

选择日期区间时，可以通过 `maxRange` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```jsx
<Calendar visible={visible} type="range" maxRange={3} />
```

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。

```jsx
<Calendar firstDayOfWeek={1} />
```

### 平铺展示

将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```jsx
<Calendar title="日历" poppable={false} showConfirm={false} style={{ height: 500 }} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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
| defaultDate | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | _Date \| Date[] \| null_ | 今天 |
| rowHeight | 日期行高 | _number \| string_ | `64` |
| formatter | 日期格式化函数 | _(day: Day) => Day_ | - |
| poppable | 是否以弹层的形式展示日历 | _boolean_ | `true` |
| lazyRender | 是否只渲染可视区域的内容 | _boolean_ | `true` |
| showMark | 是否显示月份背景水印 | _boolean_ | `true` |
| showTitle | 是否展示日历标题 | _boolean_ | `true` |
| showSubtitle | 是否展示日历副标题（年月） | _boolean_ | `true` |
| showConfirm | 是否展示确认按钮 | _boolean_ | `true` |
| readonly | 是否为只读状态，只读状态下不能选择日期 | _boolean_ | `false` |
| confirmText | 确认按钮的文字 | _string_ | `确定` |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | _string_ | `确定` |
| firstDayOfWeek | 设置周起始日 | _0-6_ | `0` |
| firstDayOfWeek | 设置周起始日 | _0-6_ | `0` |

### Calendar Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示日历弹窗 | _boolean_ | `false` |
| position | 弹出位置，可选值为 `top` `right` `left` | _string_ | `bottom` |
| round | 是否显示圆角弹窗 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

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

| 参数        | 说明                             | 类型               | 默认值                   |
| ----------- | -------------------------------- | ------------------ | ------------------------ |
| max-Range   | 日期最多可选天数                 | _number \| string_ | 无限制                   |
| rangePrompt | 选择超过最多可选天数时的提示文案 | _string_           | `选择天数不能超过 xx 天` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名       | 说明                                                                | 类型     |
| ---------- | ------------------------------------------------------------------- | -------- |
| date       | 日期对应的 Date 对象                                                | _Date_   |
| type       | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text       | 中间显示的文字                                                      | _string_ |
| topInfo    | 上方的提示信息                                                      | _string_ |
| bottomInfo | 下方的提示信息                                                      | _string_ |
| className  | 额外类名                                                            | _string_ |

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

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| reset | 将选中的日期重置到指定日期，未传参时会重置到默认日期 | _date?: Date \| Date[]_ | - |
| scrollToDate | 滚动到某个日期 | _date: Date_ | - |

### 类型定义

通过 `CalendarInstance` 获取 Calendar 实例的类型定义（从 3.2.0 版本开始支持）。

```js
import { useRef } from 'react';
import type { CalendarInstance } from 'react-vant';

const calendarRef = ref<CalendarInstance>();

calendarRef.value?.reset();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                          | 默认值                                 | 描述 |
| --------------------------------------------- | -------------------------------------- | ---- |
| --rv-calendar-background-color                | _var(--rv-white)_                      | -    |
| --rv-calendar-popup-height                    | _80%_                                  | -    |
| --rv-calendar-header-box-shadow               | _0 2px 10px rgba(125, 126, 128, 0.16)_ | -    |
| --rv-calendar-header-title-height             | _44px_                                 | -    |
| --rv-calendar-header-title-font-size          | _var(--rv-font-size-lg)_               | -    |
| --rv-calendar-header-subtitle-font-size       | _var(--rv-font-size-md)_               | -    |
| --rv-calendar-weekdays-height                 | _30px_                                 | -    |
| --rv-calendar-weekdays-font-size              | _var(--rv-font-size-sm)_               | -    |
| --rv-calendar-month-title-font-size           | _var(--rv-font-size-md)_               | -    |
| --rv-calendar-month-mark-color                | _fade(var(--rv-gray-2), 80%)_          | -    |
| --rv-calendar-month-mark-font-size            | _160px_                                | -    |
| --rv-calendar-day-height                      | _64px_                                 | -    |
| --rv-calendar-day-font-size                   | _var(--rv-font-size-lg)_               | -    |
| --rv-calendar-range-edge-color                | _var(--rv-white)_                      | -    |
| --rv-calendar-range-edge-background-color     | _var(--rv-danger-color)_               | -    |
| --rv-calendar-range-middle-color              | _var(--rv-danger-color)_               | -    |
| --rv-calendar-range-middle-background-opacity | _0.1_                                  | -    |
| --rv-calendar-selected-day-size               | _54px_                                 | -    |
| --rv-calendar-selected-day-color              | _var(--rv-white)_                      | -    |
| --rv-calendar-info-font-size                  | _var(--rv-font-size-xs)_               | -    |
| --rv-calendar-info-line-height                | _var(--rv-line-height-xs)_             | -    |
| --rv-calendar-selected-day-background-color   | _var(--rv-danger-color)_               | -    |
| --rv-calendar-day-disabled-color              | _var(--rv-gray-5)_                     | -    |
| --rv-calendar-confirm-button-height           | _36px_                                 | -    |
| --rv-calendar-confirm-button-margin           | _7px 0_                                | -    |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。

对此问题的详细解释：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
