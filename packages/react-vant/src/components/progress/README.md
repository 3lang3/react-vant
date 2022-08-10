---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Progress 进度条

## 介绍

用于展示操作的当前进度。

## 引入

```js
import { Progress } from 'react-vant';
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress percentage="50" />;
};
```

### 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

```jsx
/**
 * title: 线条粗细
 */
import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress strokeWidth={8} percentage="50" />;
};
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```jsx
/**
 * title: 置灰
 */
import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress inactive percentage="50" />;
};
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```jsx
/**
 * title: 样式定制
 */
import React from 'react';
import { Space, Progress } from 'react-vant';

export default () => {
  return (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress style={{ marginBottom: 20 }} color="#f2826a" percentage="25" pivotText="橙色" />
      <Progress style={{ marginBottom: 20 }} color="#ee0a24" percentage="50" pivotText="红色" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>紫色</div>}
      />
    </Space>
  );
};
```

### 过渡效果

```jsx
/**
 * title: 过渡效果
 */
import React, { useState } from 'react';
import { Flex, Button, Progress } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <>
      <Progress percentage={percentage} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
          增加
        </Button>
        <Button type="danger" size="small" onClick={reduce}>
          减少
        </Button>
      </Flex>
    </>
  );
};
```

## API

### Props

| 参数        | 说明                       | 类型               | 默认值       |
| ----------- | -------------------------- | ------------------ | ------------ |
| percentage  | 进度百分比                 | _number \| string_ | `0`          |
| strokeWidth | 进度条粗细，默认单位为`px` | _number \| string_ | `4px`        |
| color       | 进度条颜色                 | _string_           | `#3f45ff`    |
| trackColor  | 轨道颜色                   | _string_           | `#e5e5e5`    |
| pivotText   | 进度文字内容               | _ReactNode_        | 百分比       |
| pivotColor  | 进度文字背景色             | _string_           | 同进度条颜色 |
| textColor   | 进度文字颜色               | _string_           | `white`      |
| inactive    | 是否置灰                   | _boolean_          | `false`      |
| showPivot   | 是否显示进度文字           | _boolean_          | `true`       |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --rv-progress-height                 | _4px_                     | -    |
| --rv-progress-color                  | _var(--rv-primary-color)_ | -    |
| --rv-progress-background-color       | _var(--rv-gray-3)_        | -    |
| --rv-progress-pivot-padding          | _0 5px_                   | -    |
| --rv-progress-pivot-text-color       | _var(--rv-white)_         | -    |
| --rv-progress-pivot-font-size        | _var(--rv-font-size-xs)_  | -    |
| --rv-progress-pivot-line-height      | _1.6_                     | -    |
| --rv-progress-pivot-background-color | _var(--rv-primary-color)_ | -    |
