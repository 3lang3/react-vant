# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 引入

```js
import { PullRefresh } from 'react-vant';
```

## 代码演示

### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```jsx
<PullRefresh refreshing={isRefreshing} onRefresh={onRefresh}>
  <p>下拉刷新</p>
</PullRefresh>
```

```js
import React, { useState } from 'react';

const [refreshing, setRefreshing] = useState(false);

const onRefresh = () => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 1000);
};
```

### 成功提示

通过 `successText` 可以设置刷新成功后的顶部提示文案。

```jsx
<PullRefresh refreshing={isLoading} successText="刷新成功" onRefresh={onRefresh}>
  <p>下拉刷新</p>
</PullRefresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容。

```jsx
<PullRefresh
  headHeight="80"
  refreshing={refreshing}
  pullingSlot={<img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge.png" />}
  loosingSlot={<img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge.png" />}
  loadingSlot={
    <img className="doge" alt="" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
  }
  onRefresh={() => onRefresh(false)}
>
  <p>{tips}</p>
</PullRefresh>
```

```css
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
```

## API

### Props

| 参数              | 说明                     | 类型               | 默认值            |
| ----------------- | ------------------------ | ------------------ | ----------------- |
| refreshing        | 是否处于加载中状态       | _boolean_          | -                 |
| pullingText       | 下拉过程提示文案         | _string_           | `下拉即可刷新...` |
| loosingText       | 释放过程提示文案         | _string_           | `释放即可刷新...` |
| loadingText       | 加载过程提示文案         | _string_           | `加载中...`       |
| successText       | 刷新成功提示文案         | _string_           | -                 |
| pullingSlot       | 下拉过程自定义内容       | _Element_          | -                 |
| loosingSlot       | 释放过程自定义内容       | _Element_          | -                 |
| loadingSlot       | 加载过程自定义内容       | _Element_          | -                 |
| successSlot       | 刷新成功自定义内容       | _Element_          | -                 |
| successDuration   | 刷新成功提示展示时长(ms) | _number \| string_ | `500`             |
| animationDuration | 动画时长                 | _number \| string_ | `300`             |
| head-height       | 顶部内容高度             | _number \| string_ | `50`              |
| disabled          | 是否禁用下拉刷新         | _boolean_          | `false`           |

### Events

| 事件名  | 说明           | 回调参数 |
| ------- | -------------- | -------- |
| refresh | 下拉刷新时触发 | -        |
| scrollstart | 滚动开始，组件内容过多需要滚动时触发（需设置 overflow: 'auto'） | -        |
| scrollend | 滚动结束（需设置 overflow: 'auto'） | -        |

<!-- ### Slots

| 名称    | 说明                 | 参数                       |
| ------- | -------------------- | -------------------------- |
| default | 自定义内容           | -                          |
| normal  | 非下拉状态时顶部内容 | -                          |
| pulling | 下拉过程中顶部内容   | { distance: 当前下拉距离 } |
| loosing | 释放过程中顶部内容   | { distance: 当前下拉距离 } |
| loading | 加载过程中顶部内容   | { distance: 当前下拉距离 } |
| success | 刷新成功提示内容     | -                          | -->

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                          | 默认值          | 描述 |
| ----------------------------- | --------------- | ---- |
| @pull-refresh-head-height     | `50px`          | -    |
| @pull-refresh-head-font-size  | `@font-size-md` | -    |
| @pull-refresh-head-text-color | `@gray-6`       | -    |

## 常见问题

### PullReresh 的内容未填满屏幕时，只有一部分区域可以下拉？

默认情况下，下拉区域的高度是和内容高度保持一致的，如果需要让下拉区域始终为全屏，可以给 PullRefresh 设置一个与屏幕大小相等的最小高度：

```jsx
<PullRefresh style="min-height: 100vh;" />
```
