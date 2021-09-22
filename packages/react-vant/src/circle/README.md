# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

```js
import { Circle } from 'react-vant';
```

## 代码演示

### 基础用法

`rate` 属性表示进度条的进度，当 `rate` 发生变化时，进度条会以 `speed` 的速度变化，直至达到 `rate` 设定的值。

```jsx
import { setState } from 'react';
import { Circle, Button } from 'react-vant';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };
  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Circle rate={rate} speed={100} text={`${rate}%`} />
      <Button.Group>
        <Button onClick={add} type="primary">
          增加
        </Button>
        <Button onClick={reduce} type="danger">
          减少
        </Button>
      </Button.Group>
    </>
  );
};
```

### 宽度定制

通过 `strokeWidth` 属性来控制进度条宽度。

```jsx
<Circle rate={rate} strokeWidth={60} text="宽度定制" />
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layer-color` 属性来控制轨道颜色。

```jsx
<Circle rate={rate} layerColor="#ebedf0" text="颜色定制" />
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

```jsx
<Circle
  rate={rate}
  text="渐变色"
  color={{
    '0%': '#3fecff',
    '100%': '#6149f6',
  }}
/>
```

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```jsx
<Circle rate={rate} clockwise={false} text="逆时针方向" />
```

### 大小定制

通过 `size` 属性设置圆环直径。

```jsx
<Circle rate={rate} size={120} text="大小定制" />
```

### 起始位置

进度条默认从顶部开始，可以通过 `startPosition` 属性设置起始位置。

```jsx
<Circle defaultRate={70} text="左侧" startPosition="left" />
<Circle defaultRate={70} text="右侧" startPosition="right" />
<Circle defaultRate={70} text="底部" startPosition="bottom" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultRate | 默认进度 | _number_ | - |
| rate | 当前进度 | _number_ | - |
| size | 圆环直径，默认单位为 `px` | _number \| string_ | `100px` |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#1989fa` |
| layerColor | 轨道颜色 | _string_ | `white` |
| fill | 填充颜色 | _string_ | `none` |
| speed | 动画速度（单位为 rate/s） | _number \| string_ | `0` |
| text | 文字 | _string_ | - |
| strokeWidth | 进度条宽度 | _number \| string_ | `40` |
| strokeLinecap | 进度条端点的形状，可选值为 `square` `butt` | _string_ | `round` |
| clockwise | 是否顺时针增加 | _boolean_ | `true` |
| startPosition | 进度起始位置，可选值为 `left`、`right`、`bottom` | _CircleStartPosition_ | `top` |

### 类型定义

组件导出以下类型定义：

```js
import type { CircleStartPosition } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                          | 默认值                        | 描述 |
| ----------------------------- | ----------------------------- | ---- |
| --van-circle-size             | _100px_                       | -    |
| --van-circle-color            | _var(--van-primary-color)_    | -    |
| --van-circle-layer-color      | _var(--van-white)_            | -    |
| --van-circle-text-color       | _var(--van-text-color)_       | -    |
| --van-circle-text-font-weight | _var(--van-font-weight-bold)_ | -    |
| --van-circle-text-font-size   | _var(--van-font-size-md)_     | -    |
| --van-circle-text-line-height | _var(--van-line-height-md)_   | -    |
