# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```js
import { Switch } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `defaultChecked` 默认开关的选中状态，`true` 表示开，`false` 表示关。

```jsx
<Switch defaultChecked />
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```jsx
<Switch defaultChecked disabled />
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```jsx
<Switch defaultChecked loading />
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```jsx
<Switch defaultChecked size="24px" />
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```jsx
<Switch defaultChecked activeColor="#ee0a24" inactiveColor="#dcdee0" />
```

### 异步控制

需要异步控制开关时，可以使用 `checked` 属性和 `onChange` 事件代替 `defaultChecked`，并在事件回调函数中手动处理开关状态。

```jsx
<Switch
  checked={value}
  onChange={(checked) => {
    Dialog.confirm({
      title: '提醒',
      message: '是否切换开关？',
    }).then(() => {
      setValue(checked);
    });
  }}
/>
```

### 搭配单元格使用

```jsx
<Cell
  center
  title="标题"
  rightIcon={
    <Switch size={24} defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
  }
/>
```

## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| checked        | 开关选中状态             | _any_              | `false`   |
| defaultChecked | 开关选中状态             | _any_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| activeColor    | 打开时的背景色           | _string_           | `#1989fa` |
| inactiveColor  | 关闭时的背景色           | _string_           | `white`   |
| activeValue    | 打开时对应的值           | _any_              | `true`    |
| inactiveValue  | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名   | 说明               | 回调参数       |
| -------- | ------------------ | -------------- |
| onChange | 开关状态切换时触发 | _value: any_   |
| onClick  | 点击时触发         | _event: Event_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                          | 默认值                                        | 描述 |
| ----------------------------- | --------------------------------------------- | ---- |
| @switch-size                  | `30px`                                        | -    |
| @switch-width                 | `51px`                                        | -    |
| @switch-height                | `1em`                                         | -    |
| @switch-node-size             | `1em`                                         | -    |
| @switch-node-background-color | `@white`                                      | -    |
| @switch-node-box-shadow       | `0 3px 1px 0 rgba(0, 0, 0, 0.05)`             | -    |
| @switch-background-color      | `@white`                                      | -    |
| @switch-on-background-color   | `@blue`                                       | -    |
| @switch-transition-duration   | `@animation-duration-base`                    | -    |
| @switch-disabled-opacity      | `@disabled-opacity`                           | -    |
| @switch-border                | `@border-width-base solid rgba(0, 0, 0, 0.1)` | -    |
