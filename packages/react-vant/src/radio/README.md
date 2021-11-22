# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

### 引入

```js
import { Radio } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `defaultValue` 值默认当前选中项的 name。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1">单选框 1</Radio>
  <Radio name="2">单选框 2</Radio>
</Radio.Group>
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```jsx
<Radio.Group defaultValue="1" direction="horizontal">
  <Radio name="1">单选框 1</Radio>
  <Radio name="2">单选框 2</Radio>
</Radio.Group>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```jsx
<Radio.Group defaultValue="1" disabled>
  <Radio name="1">单选框 1</Radio>
  <Radio name="2">单选框 2</Radio>
</Radio.Group>
```

### 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" shape="square">
    单选框 1
  </Radio>
  <Radio name="2" shape="square">
    单选框 2
  </Radio>
</Radio.Group>
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" checkedColor="#ee0a24">
    单选框 1
  </Radio>
  <Radio name="2" checkedColor="#ee0a24">
    单选框 2
  </Radio>
</Radio.Group>
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" iconSize="24px">
    单选框 1
  </Radio>
  <Radio name="2" iconSize="24px">
    单选框 2
  </Radio>
</Radio.Group>
```

### 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发单选框切换。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" labelDisabled>
    单选框 1
  </Radio>
  <Radio name="2" labelDisabled>
    单选框 2
  </Radio>
</Radio.Group>
```

### 异步更新

设置 `value` 属性后，点击图标状态不会改变，而是直接执行 `onChange` 方法，在此方法中更换状态

```jsx
<Radio.Group
  value={value}
  onChange={(val) => {
    Toast.loading({ forbidClick: true });

    clearTimeout(timer);
    timer = setTimeout(() => {
      Toast.clear();
      // 注意此时修改 value 后会再次触发 change 事件
      setValue(val);
    }, 500);
  }}
>
  <Radio name="1" labelDisabled>
    单选框 1
  </Radio>
  <Radio name="2" labelDisabled>
    单选框 2
  </Radio>
</Radio.Group>
```

### 与 Cell 组件一起使用

此时你需要再引入 `Cell` 和 `CellGroup` 组件。

```jsx
<Radio.Group value="1">
  <Cell.Group>
    <Cell title="单选框1" icon="shop-o" rightIcon={<Radio name="1" />} />{' '}
    <Cell title="单选框2" icon="shop-o" rightIcon={<Radio name="2" />} />
  </Cell.Group>
</Radio.Group>
```

## API

### Radio Props

| 参数          | 说明                      | 类型                                   | 默认值    |
| ------------- | ------------------------- | -------------------------------------- | --------- |
| name          | 标识符                    | _any_                                  | -         |
| shape         | 形状，可选值为 `square`   | _string_                               | `round`   |
| disabled      | 是否为禁用状态            | _boolean_                              | `false`   |
| labelDisabled | 是否禁用文本内容点击      | _boolean_                              | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_                               | `right`   |
| iconSize      | 图标大小，默认单位为`px`  | _number \| string_                     | `21px`    |
| checkedColor  | 选中状态颜色              | _string_                               | `#3f45ff` |
| iconRender    | 自定义图标                | _({ checked, disabled }) => ReactNode_ | -         |

### RadioGroup Props

| 参数         | 说明                                 | 类型               | 默认值     |
| ------------ | ------------------------------------ | ------------------ | ---------- |
| value        | 当前选中项的标识符                   | _any_              | -          |
| disabled     | 是否禁用所有单选框                   | _boolean_          | `false`    |
| direction    | 排列方向，可选值为`horizontal`       | _string_           | `vertical` |
| iconSize     | 所有单选框的图标大小，默认单位为`px` | _number \| string_ | `21px`     |
| checkedColor | 所有单选框的选中状态颜色             | _string_           | `#3f45ff`  |

### Radio Events

| 事件名  | 说明             | 回调参数       |
| ------- | ---------------- | -------------- |
| onClick | 点击单选框时触发 | _event: Event_ |

### RadioGroup Events

| 事件名   | 说明                     | 回调参数       |
| -------- | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _name: string_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                 | 默认值                              | 描述 |
| ------------------------------------ | ----------------------------------- | ---- |
| --rv-radio-size                      | _20px_                              | -    |
| --rv-radio-border-color              | _var(--rv-gray-5)_                  | -    |
| --rv-radio-transition-duration       | _var(--rv-animation-duration-fast)_ | -    |
| --rv-radio-label-margin              | _var(--rv-padding-xs)_              | -    |
| --rv-radio-label-color               | _var(--rv-text-color)_              | -    |
| --rv-radio-checked-icon-color        | _var(--rv-primary-color)_           | -    |
| --rv-radio-disabled-icon-color       | _var(--rv-gray-5)_                  | -    |
| --rv-radio-disabled-label-color      | _var(--rv-gray-5)_                  | -    |
| --rv-radio-disabled-background-color | _var(--rv-border-color)_            | -    |
