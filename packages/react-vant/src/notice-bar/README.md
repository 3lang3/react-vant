# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

```js
import { NoticeBar } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `leftRcon` 属性设置通知栏左侧的图标。

```jsx
<NoticeBar leftIcon="speaker-s" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```jsx
<NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```jsx
<NoticeBar wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```jsx
<!-- closeable 模式，在右侧显示关闭按钮 -->
<NoticeBar mode="closeable">技术是开发它的人的共同灵魂。</NoticeBar>

<!-- link 模式，在右侧显示链接箭头 -->
<NoticeBar mode="link">技术是开发它的人的共同灵魂。</NoticeBar>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```jsx
<NoticeBar color="#1989fa" background="#ecf9ff" leftIcon="info">
  技术是开发它的人的共同灵魂。
</NoticeBar>
```

### 垂直滚动

搭配 NoticeBar 和 Swiper 组件可以实现垂直滚动的效果。

```jsx
import React from 'react';
import { NoticeBar, Swiper } from 'react-vant';

export default () => {
  return (
    <NoticeBar leftIcon="info">
      <Swiper autoplay={3000} vertical className="notice-swipe">
        <Swiper.Item>内容 1</Swiper.Item>
        <Swiper.Item>内容 2</Swiper.Item>
        <Swiper.Item>内容 3</Swiper.Item>
      </Swiper>
    </NoticeBar>
  );
};
```

```css
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
```

## API

### Props

| 参数                | 说明                                     | 类型                | 默认值    |
| ------------------- | ---------------------------------------- | ------------------- | --------- |
| mode                | 通知栏模式，可选值为 `closeable` `link`  | _string_            | `''`      |
| text                | 通知文本内容                             | _ReactNode_         | `''`      |
| color               | 通知文本颜色                             | _string_            | `#f60`    |
| background          | 滚动条背景                               | _string_            | `#fff7cc` |
| leftIcon            | 左侧图标                                 | _string\|ReactNode_ | -         |
| rightIcon           | 自定义右侧图标                           |
| _string\|ReactNode_ | -                                        |
| delay               | 动画延迟时间 (s)                         | _number \| string_  | `1`       |
| speed               | 滚动速率 (px/s)                          | _number \| string_  | `60`      |
| scrollable          | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_           | -         |
| wrapable            | 是否开启文本换行，只在禁用滚动时生效     | _boolean_           | `false`   |

### Events

| 事件名   | 说明                         | 回调参数       |
| -------- | ---------------------------- | -------------- |
| onClick  | 点击通知栏时触发             | _event: Event_ |
| onClose  | 关闭通知栏时触发             | _event: Event_ |
| onReplay | 每当滚动栏重新开始滚动时触发 | -              |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                             | 默认值                                      | 描述 |
| -------------------------------- | ------------------------------------------- | ---- |
| --rv-notice-bar-height           | _40px_                                      | -    |
| --rv-notice-bar-padding          | _0 var(--rv-padding-md)_                    | -    |
| --rv-notice-bar-wrapable-padding | _var(--rv-padding-xs) var(--rv-padding-md)_ | -    |
| --rv-notice-bar-text-color       | _var(--rv-orange-dark)_                     | -    |
| --rv-notice-bar-font-size        | _var(--rv-font-size-md)_                    | -    |
| --rv-notice-bar-line-height      | _24px_                                      | -    |
| --rv-notice-bar-background-color | _var(--rv-orange-light)_                    | -    |
| --rv-notice-bar-icon-size        | _16px_                                      | -    |
| --rv-notice-bar-icon-min-width   | _24px_                                      | -    |
