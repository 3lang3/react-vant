# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```js
import { Rate } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `value` 来绑定当前评分值。

```jsx
<Rate value={3} />
```

```jsx
export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={(current) => setValue(current)} />;
};
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`voidIcon` 属性设置未选中时的图标。

```jsx
<Rate defaultValue={3} icon="like" voidIcon="like-o" />
```

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色。

```jsx
<Rate defaultValue={3} size={25} color="#ffd21e" voidIcon="star" voidColor="#eee" />
```

### 半星

设置 `allowHalf` 属性后可以选中半星。

```jsx
<Rate defaultValue={3.5} allowHalf />
```

### 自定义数量

通过 `count` 属性设置评分总数。

```jsx
<Rate defaultValue={1} count="8" />
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

```jsx
<Rate defaultValue={3} disabled />
```

### 只读状态显示小数

设置 `readonly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。

```jsx
<Rate defaultValue={3.3} readonly allowHalf />
```

## API

### Props

| 参数          | 说明                                         | 类型               | 默认值    |
| ------------- | -------------------------------------------- | ------------------ | --------- |
| value         | 当前分值                                     | _number_           | -         |
| defaultValue  | 默认分值                                     | _number_           | -         |
| count         | 图标总数                                     | _number \| string_ | `5`       |
| size          | 图标大小，默认单位为`px`                     | _number \| string_ | `20px`    |
| gutter        | 图标间距，默认单位为`px`                     | _number \| string_ | `4px`     |
| color         | 选中时的颜色                                 | _string_           | `#ee0a24` |
| voidColor     | 未选中时的颜色                               | _string_           | `#c8c9cc` |
| disabledColor | 禁用时的颜色                                 | _string_           | `#c8c9cc` |
| icon          | 选中时的[图标名称](#/zh-CN/icon)或图片链接   | _string_           | `star`    |
| voidIcon      | 未选中时的[图标名称](#/zh-CN/icon)或图片链接 | _string_           | `star-o`  |
| allowHalf     | 是否允许半选                                 | _boolean_          | `false`   |
| readonly      | 是否为只读状态，只读状态下无法修改评分       | _boolean_          | `false`   |
| disabled      | 是否禁用评分                                 | _boolean_          | `false`   |
| touchable     | 是否可以通过滑动手势选择评分                 | _boolean_          | `true`    |

### Events

| 事件名   | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当前分值变化时触发的事件 | 当前分值 |
