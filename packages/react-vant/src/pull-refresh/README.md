# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 引入

```js
import { PullRefresh } from 'react-vant';
```

## 代码演示

### 基础用法

下拉刷新时会触发 `onRefresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后表示加载完成。

> 和 vant 不同的是，react-vant 根据onRefresh在组件内部维护了loading状态。


```jsx
export default () => {
  const onRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  return (
    <PullRefresh onRefresh={onRefresh}>
      <p>下拉刷新</p>
    </PullRefresh>
  );
};
```

### 成功提示

通过 `successText` 可以设置刷新成功后的顶部提示文案。

```jsx
<PullRefresh successText="刷新成功" onRefresh={onRefresh}>
  <p>下拉刷新</p>
</PullRefresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容。

```jsx
<PullRefresh
  headHeight={80}
  pullingText={({ distance }) => (
    <img
      className="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      style={{ transform: `scale(${distance / 80})` }}
    />
  )}
  loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
  loadingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />}
  onRefresh={onRefresh}
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pullingText | 下拉过程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `下拉即可刷新...` |
| loosingText | 释放过程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `释放即可刷新...` |
| loadingText | 加载过程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `加载中...` |
| successText | 刷新成功提示文案 | _ReactNode\|({ distance }) => ReactNode_ | - |
| successDuration | 刷新成功提示展示时长(ms) | _number \| string_ | `500` |
| animationDuration | 动画时长 | _number \| string_ | `300` |
| headHeight | 顶部内容高度 | _number \| string_ | `50` |
| pullDistance | 触发下拉刷新的距离 | _number \| string_ | 与 `headHeight` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名    | 说明           | 类型                     | 回调参数 |
| --------- | -------------- | ------------------------ | -------- |
| onRefresh | 下拉刷新时触发 | _() => (Promise\|void)_ | -        |

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
