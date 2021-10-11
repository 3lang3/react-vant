# Progress 进度条

### 介绍

用于展示操作的当前进度。

### 引入

```js
import { Progress } from 'react-vant';
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```jsx
<Progress percentage={50} />
```

### 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

```jsx
<Progress percentage={50} strokeWidth={8} />
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```jsx
<Progress inactive percentage={50} />
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```jsx
<Progress color="#f2826a" percentage="25" pivotText="橙色" />
<Progress color="#ee0a24" percentage="50" pivotText="红色" />
<Progress
  color="linear-gradient(to right, #be99ff, #7232dd)"
  percentage="75"
  pivotColor="#7232dd"
  pivotText="紫色"
/>
```

## API

### Props

| 参数         | 说明                       | 类型               | 默认值       |
| ------------ | -------------------------- | ------------------ | ------------ |
| percentage   | 进度百分比                 | _number \| string_ | `0`          |
| strokeWidth | 进度条粗细，默认单位为`px` | _number \| string_ | `4px`        |
| color        | 进度条颜色                 | _string_           | `#3f45ff`    |
| trackColor  | 轨道颜色                   | _string_           | `#e5e5e5`    |
| pivotText   | 进度文字内容               | _ReactNode_           | 百分比       |
| pivotColor  | 进度文字背景色             | _string_           | 同进度条颜色 |
| textColor   | 进度文字颜色               | _string_           | `white`      |
| inactive     | 是否置灰                   | _boolean_          | `false`      |
| showPivot   | 是否显示进度文字           | _boolean_          | `true`       |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                  | 默认值                     | 描述 |
| ------------------------------------- | -------------------------- | ---- |
| --rv-progress-height                 | _4px_                      | -    |
| --rv-progress-color                  | _var(--rv-primary-color)_ | -    |
| --rv-progress-background-color       | _var(--rv-gray-3)_        | -    |
| --rv-progress-pivot-padding          | _0 5px_                    | -    |
| --rv-progress-pivot-text-color       | _var(--rv-white)_         | -    |
| --rv-progress-pivot-font-size        | _var(--rv-font-size-xs)_  | -    |
| --rv-progress-pivot-line-height      | _1.6_                      | -    |
| --rv-progress-pivot-background-color | _var(--rv-primary-color)_ | -    |
