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
  const [value, setValue] = useState({});
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
| value               | 下拉菜单值                   | _Record<any, any>_ | -         |
| defaultValue        | 下拉菜单默认值               | _Record<any, any>_ | -         |
| disabled            | 是否禁用菜单                 | _boolean_          | false     |
| activeColor         | 菜单标题和选项的选中态颜色   | _string_           | `#ee0a24` |
| direction           | 菜单展开方向，可选值为`up`   | _string_           | `down`    |
| zIndex              | 菜单栏 z-index 层级          | _number \| string_ | `10`      |
| duration            | 动画时长，单位秒             | _number \| string_ | `0.2`     |
| overlay             | 是否显示遮罩层               | _boolean_          | `true`    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单   | _boolean_          | `true`    |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_          | `true`    |

### DropdownItem Props

| 参数        | 说明                       | 类型                           | 默认值         |
| ----------- | -------------------------- | ------------------------------ | -------------- |
| name        | 当前选中项对应的 value key | _number \| string_             | -              |
| title       | 菜单项标题                 | _ReactNode_                    | 当前选中项文字 |
| placeholder | 占位文本                   | _string_                       | `请选择`       |
| options     | 选项数组                   | _Option[]_                     | `[]`           |
| disabled    | 是否禁用菜单               | _boolean_                      | `false`        |
| titleClass  | 标题额外类名               | _string_                       | -              |
| teleport    | 指定挂载的节点             | _HTMLElment () => HTMLElement_ | -              |

### DropdownMenu Events

| 事件名   | 说明                       | 回调参数 |
| -------- | -------------------------- | -------- |
| onChange | 组件 value 变化时触发      | value    |
| onOpen   | 打开菜单栏时触发           | -        |
| onClose  | 关闭菜单栏时触发           | -        |
| onOpened | 打开菜单栏且动画结束后触发 | -        |
| onClosed | 关闭菜单栏且动画结束后触发 | -        |

### DropdownItem Events

| 事件名   | 说明                       | 回调参数 |
| -------- | -------------------------- | -------- |
| onOpen   | 打开菜单栏时触发           | -        |
| onClose  | 关闭菜单栏时触发           | -        |
| onOpened | 打开菜单栏且动画结束后触发 | -        |
| onClosed | 关闭菜单栏且动画结束后触发 | -        |

### DropdownMenu 方法

通过 ref 可以获取到 DropdownMenu 实例并调用实例方法。

| 方法名     | 说明                 | 参数           | 返回值 |
| ---------- | -------------------- | -------------- | ------ |
| toggleItem | 切换指定菜单展示状态 | _index:number_ | -      |
| showItem   | 显示指定菜单展示状态 | _index:number_ | -      |
| close      | 关闭菜单             |                | -      |

### 类型定义

组件导出以下类型定义：

```js
import type { DropdownMenuInstance, DropdownItemOption, DropdownMenuDirection } from 'react-vant';
```

`DropdownMenuInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { DropdownMenuInstance } from 'react-vant/es/dropdown-menu';

const dropdownRef = useRef < DropdownMenuInstance > null;

dropdownRef.current?.toggleItem(0);
```

### Option 数据结构

| 键名  | 说明                                   | 类型               |
| ----- | -------------------------------------- | ------------------ |
| text  | 文字                                   | _string_           |
| value | 标识符                                 | _number \| string_ |
| icon  | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_           |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                         | 默认值                                  | 描述 |
| -------------------------------------------- | --------------------------------------- | ---- |
| --rv-dropdown-menu-height                    | _48px_                                  | -    |
| --rv-dropdown-menu-background-color          | _var(--rv-white)_                       | -    |
| --rv-dropdown-menu-box-shadow                | _0 2px 12px fade(var(--rv-gray-7), 12)_ | -    |
| --rv-dropdown-menu-title-font-size           | _15px_                                  | -    |
| --rv-dropdown-menu-title-text-color          | _var(--rv-text-color)_                  | -    |
| --rv-dropdown-menu-title-active-text-color   | _var(--rv-danger-color)_                | -    |
| --rv-dropdown-menu-title-disabled-text-color | _var(--rv-gray-6)_                      | -    |
| --rv-dropdown-menu-title-padding             | _0 var(--rv-padding-xs)_                | -    |
| --rv-dropdown-menu-title-line-height         | _var(--rv-line-height-lg)_              | -    |
| --rv-dropdown-menu-option-active-color       | _var(--rv-danger-color)_                | -    |
| --rv-dropdown-menu-content-max-height        | _80%_                                   | -    |
| --rv-dropdown-item-z-index                   | _10_                                    | -    |
