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
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <DropdownMenu value={value} onChange={setValue}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item name="value2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
    </DemoSection>
  );
};
```

## API

### DropdownMenu Props

| 参数                | 说明                         | 类型               | 默认值    |
| ------------------- | ---------------------------- | ------------------ | --------- |
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
| title      | 菜单项标题                 | _string_                    | 当前选中项文字 |
| options    | 选项数组                   | _Option[]_                  | `[]`           |
| disabled   | 是否禁用菜单               | _boolean_                   | `false`        |
| titleClass | 标题额外类名               | _string \| Array \| object_ | -              |

### DropdownItem Events

| 事件名   | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| onChange | 组件 value 变化时触发 | value    |
