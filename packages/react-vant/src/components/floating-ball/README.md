# FloatingBall 悬浮球

## 介绍

悬浮球用于提供全局悬浮快捷操作入口，可以自由拖动，支持1～5个操作选项。

## 引入

```js
import { FloatingBall } from 'react-vant';
```

### 示例代码

<code title="悬浮球" src="./demo/base.tsx" />

## API

### FloatingBall Props

| 参数                | 说明                         | 类型               | 默认值    |
| ------------------- | ---------------------------- | ------------------ | --------- |
| color              | 悬浮球颜色                    | _string_          |   -   |
| direction          | 方向                         | _around \| vertical \| horizontal_ | `around` |
| disdrag            | 是否禁止拖动                  | _boolean_ | `false` |
| disabled           | 是否禁用                     | _boolean_ | `false` |
| icon               | 显示图标                     | _ReactNode_ |   -   |
| menus              | 操作项 (**最多支持5个**)      | _menuItem[]_ |   -   |
| position           | 位置                        | _top-left \| top-right \| bottom-left \| bottom-right_ |   `bottom-right`   |

#### menuItem
| 参数                | 说明                   | 类型               |
| ------------------ | ---------------------- | ------------------ |
| color              | 颜色                    | _string_          |
| disabled           | 是否禁用                 | _false_          |
| icon               | 显示图标                 | _ReactNode_ |
| onClick            | 点击操作项的触发函数       | _() => void_ |


### FloatingBall Events

| 事件名   | 说明                       | 回调参数 |
| -------- | -------------------------- | -------- |
| onAction | 点击悬浮球时触发(只有一个选项/通过实例激活时不会触发) | _active: boolean_  |


### FloatingBall 方法

通过 ref 可以获取到 FloatingBall 实例并调用实例方法。

| 方法名     | 说明                 | 参数           | 返回值 |
| ---------- | -------------------- | -------------- | ------ |
| action | 激活悬浮球 | _active: boolean_ | -      |