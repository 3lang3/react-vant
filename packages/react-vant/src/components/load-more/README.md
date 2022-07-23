---
simulator:
  compact: false
  style:
    background: '#fff'
---

# LoadMore 加载更多

## 介绍

在右上角展示徽标数字或小红点。

## 引入

```js
import { LoadMore } from 'react-vant';
```

## 代码演示

### 基础用法



## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _ReactNode_ | - |
| color | 徽标背景颜色 | _string_ | `#f44336` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - |
| offset | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | - |
| showZero | 当 content 为数字 0 时，是否展示徽标 | _boolean_ | `true` |

### 事件

| 事件名  | 说明       | 回调参数       |
| ------- | ---------- | -------------- |
| onClick | 点击时触发 | _event: Event_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                        | 默认值                                                  | 描述 |
| --------------------------- | ------------------------------------------------------- | ---- |
| --rv-badge-size             | _16px_                                                  | -    |
| --rv-badge-color            | _var(--rv-white)_                                       | -    |
| --rv-badge-padding          | _0 3px_                                                 | -    |
| --rv-badge-font-size        | _var(--rv-font-size-sm)_                                | -    |
| --rv-badge-font-weight      | _var(--rv-font-weight-bold)_                            | -    |
| --rv-badge-border-width     | _var(--rv-border-width-base)_                           | -    |
| --rv-badge-background-color | _var(--rv-danger-color)_                                | -    |
| --rv-badge-dot-color        | _var(--rv-danger-color)_                                | -    |
| --rv-badge-dot-size         | _8px_                                                   | -    |
| --rv-badge-font-family      | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | -    |
