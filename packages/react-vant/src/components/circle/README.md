---
simulator:
  compact: false
---

# Circle 环形进度条

## 介绍

圆环形的进度条组件，支持进度渐变动画。

## 引入

```js
import { Circle } from 'react-vant';
```

## 代码演示

### 基础用法

`rate` 属性表示进度条的进度，当 `rate` 发生变化时，进度条会以 `speed` 的速度变化，直至达到 `rate` 设定的值。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Circle } from 'react-vant';

export default () => {
  return <Circle rate={70} speed={100} text="70%" />;
};
```

### 自定义

通过 `strokeWidth` 属性来控制进度条宽度。

```jsx
/**
 * title: 样式定制
 */
import React, { useState } from 'react';
import { Circle, Flex, Button, Space } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

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
      <Space wrap>
        <Circle strokeWidth={60} rate={rate} text="宽度定制" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="颜色定制" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="渐变色"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="逆时针"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="大小定制"
          style={{ marginTop: 15 }}
        />
      </Space>

      <Flex style={{ marginTop: 15 }} align="center" justify="center">
        <Button.Group>
          <Button onClick={add} type="primary">
            增加
          </Button>
          <Button onClick={reduce} type="danger">
            减少
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};
```

### 起始位置

进度条默认从顶部开始，可以通过 `startPosition` 属性设置起始位置。

```jsx
/**
 * title: 起始位置
 */
import React from 'react';
import { Space, Circle } from 'react-vant';

export default () => {
  return (
    <Space>
      <Circle defaultRate={70} text="左侧" startPosition="left" />
      <Circle defaultRate={70} text="右侧" startPosition="right" />
      <Circle defaultRate={70} text="底部" startPosition="bottom" />
    </Space>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultRate | 默认进度 | _number_ | - |
| rate | 当前进度 | _number_ | - |
| size | 圆环直径，默认单位为 `px` | _number \| string_ | `100px` |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#3f45ff` |
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

```ts
import type { CircleStartPosition } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                         | 默认值                       | 描述 |
| ---------------------------- | ---------------------------- | ---- |
| --rv-circle-size             | _100px_                      | -    |
| --rv-circle-color            | _var(--rv-primary-color)_    | -    |
| --rv-circle-layer-color      | _var(--rv-white)_            | -    |
| --rv-circle-text-color       | _var(--rv-text-color)_       | -    |
| --rv-circle-text-font-weight | _var(--rv-font-weight-bold)_ | -    |
| --rv-circle-text-font-size   | _var(--rv-font-size-md)_     | -    |
| --rv-circle-text-line-height | _var(--rv-line-height-md)_   | -    |
