# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

```js
import { Slider } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(`当前值：${v}`);
  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.info(`当前值：${v}`);
  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 指定选择范围

```jsx
<Slider value={value} onChange={setValue} min={-50} max={50} />
```

### 禁用

```jsx
<Slider disabled value={value} />
```

### 指定步长

```jsx
<Slider value={value} step={10} />
```

### 自定义样式

```jsx
<Slider value={value} onChange={setValue} barHeight={4} activeColor="#ee0a24" />
```

### 自定义按钮

```jsx
<Slider
  value={value}
  onChange={setValue}
  activeColor="#ee0a24"
  button={<div className="custom-button">{value}</div>}
/>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```jsx
<Slider vertical value={value} onChange={setValue} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前进度百分比，在双滑块模式下为数组格式 | \_number | [number, number]\_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步长 | _number \| string_ | `1` |
| barHeight | 进度条高度，默认单位为 `px` | _number \| string_ | `2px` |
| buttonSize | 滑块按钮大小，默认单位为 `px` | _number \| string_ | `24px` |
| activeColor | 进度条激活态颜色 | _string_ | `#3f45ff` |
| inactiveColor | 进度条非激活态颜色 | _string_ | `#e5e5e5` |
| range | 是否开启双滑块模式 | _boolean_ | `false` |
| reverse | 是否将进度条反转 | _boolean_ | `false` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法修改滑块的值 | _boolean_ | `false` |
| vertical | 是否垂直展示 | _boolean_ | `false` |
| button | 自定义滑块按钮 | _ReactNode_ | - |
| leftButton | 自定义左侧滑块按钮（双滑块模式下） | _ReactNode_ | - |
| rightButton | 自定义右侧滑块按钮 （双滑块模式下） | _ReactNode_ | - |

### Events

`SliderValue`指`props.value`

| 事件名        | 说明                         | 回调参数                                  |
| ------------- | ---------------------------- | ----------------------------------------- |
| onChange      | 进度变化时**实时触发**       | _value: SliderValue_                      |
| onChangeAfter | 进度变化且**结束拖动后触发** | _value: SliderValue_                      |
| onDragStart   | 开始拖动时触发               | _event: TouchEvent_, _value: SliderValue_ |
| onDragEnd     | 结束拖动时触发               | _event: TouchEvent_, _value: SliderValue_ |
