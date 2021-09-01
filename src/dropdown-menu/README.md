# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

```js
import { DropdownMenu } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu value={value} onChange={setValue}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
```

### 自定义菜单内容

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu value={value} onChange={(v) => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item title="筛选" name="value2">
        <Cell center title="包邮" rightIcon={<Switch size={24} />} />
        <Cell center title="团购" rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};
```

### 自定义高亮颜色

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu activeColor="#f44336" value={value} onChange={(v) => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
```

### 向上展开

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu direction="up" value={value} onChange={(v) => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
```

### 禁用菜单

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu disabled value={value} onChange={(v) => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
};
```

## API

### DropdownMenu Props

| 参数                | 说明                         | 类型               | 默认值    |
| ------------------- | ---------------------------- | ------------------ | --------- |
| disabled            | 是否禁用菜单                 | _boolean_          | false     |
| placeholder         | 占位文本                     | _string_           | `请选择`  |
| activeColor         | 菜单标题和选项的选中态颜色   | _string_           | `#ee0a24` |
| direction           | 菜单展开方向，可选值为`up`   | _string_           | `down`    |
| zIndex              | 菜单栏 z-index 层级          | _number \| string_ | `10`      |
| duration            | 动画时长，单位秒             | _number \| string_ | `0.2`     |
| overlay             | 是否显示遮罩层               | _boolean_          | `true`    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单   | _boolean_          | `true`    |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_          | `true`    |

### DropdownItem Props

| 参数       | 说明                       | 类型                        | 默认值         |
| ---------- | -------------------------- | --------------------------- | -------------- |
| name       | 当前选中项对应的 value key | _number \| string_          | -              |
| title      | 菜单项标题                 | _ReactNode_                    | 当前选中项文字 |
| options    | 选项数组                   | _Option[]_                  | `[]`           |
| disabled   | 是否禁用菜单               | _boolean_                   | `false`        |
| titleClass | 标题额外类名               | _string_ | -              |
| teleport | 指定挂载的节点               | _HTMLElment () => HTMLElement_ | -              |

### DropdownItem Events

| 事件名   | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| onChange | 组件 value 变化时触发 | value    |
| onOpen   | 打开菜单栏时触发              | -        |
| onClose  | 关闭菜单栏时触发              | -        |
| onOpened | 打开菜单栏且动画结束后触发    | -        |
| onClosed | 关闭菜单栏且动画结束后触发    | -        |

