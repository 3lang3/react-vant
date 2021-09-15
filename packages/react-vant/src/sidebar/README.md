# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

### 引入

```js
import { Sidebar, SidebarItem } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `value` 绑定当前选中项的索引。

```jsx
import { useState } from 'react';
import { Sidebar } from 'react-vant';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="标签名称" />
      <Sidebar.Item title="标签名称" />
      <Sidebar.Item title="标签名称" />
    </Sidebar>
  );
};
```

### 徽标提示

设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```jsx
<Sidebar>
  <Sidebar.Item title="标签名" dot />
  <Sidebar.Item title="标签名" badge={5} />
  <Sidebar.Item title="标签名" badge={20} />
</Sidebar>
```

### 禁用选项

通过 `disabled` 属性禁用选项。

```jsx
<Sidebar>
  <Sidebar.Item title="标签名" />
  <Sidebar.Item title="标签名" disabled />
  <Sidebar.Item title="标签名" />
</Sidebar>
```

### 监听切换事件

设置 `onChange` 方法来监听切换导航项时的事件。

```jsx
import { useState } from 'react';
import { Sidebar } from 'react-vant';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="标签名称" />
      <Sidebar.Item title="标签名称" />
      <Sidebar.Item title="标签名称" />
    </Sidebar>
  );
};
```

## API

### Sidebar Props

| 参数    | 说明             | 类型               | 默认值 |
| ------- | ---------------- | ------------------ | ------ |
| value | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数        |
| ------ | ---------------- | --------------- |
| onChange | 切换导航项时触发 | _index: number_ |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容 | _string \| React.ReactNode_ | `''` |
| dot | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |

### SidebarItem Events

| 事件名 | 说明       | 回调参数        |
| ------ | ---------- | --------------- |
| onClick  | 点击时触发 | _index: number_ |
