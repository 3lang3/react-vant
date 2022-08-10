---
mobile-className: 'vant-doc-demo-section--card'
---

# Sidebar 侧边导航

## 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

## 引入

```js
import { Sidebar, SidebarItem } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `value` 绑定当前选中项的索引。

```jsx
/**
 * title: 基础用法
 */
import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant';

export default () => {
  const [active, setActive] = useState(2);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(`标签名 ${v + 1}`);
      }}
    >
      <Sidebar.Item title="标签名1" />
      <Sidebar.Item title="标签名2" />
      <Sidebar.Item title="标签名3" />
    </Sidebar>
  );
};
```

### 徽标提示

设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```jsx
/**
 * title: 徽标提示
 */
import React from 'react';
import { Sidebar } from 'react-vant';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="标签名" dot />
      <Sidebar.Item title="标签名" badge={5} />
      <Sidebar.Item title="标签名" badge={20} />
    </Sidebar>
  );
};
```

### 禁用选项

通过 `disabled` 属性禁用选项。

```jsx
/**
 * title: 徽标提示
 */
import React from 'react';
import { Sidebar } from 'react-vant';

export default () => {
  return (
    <Sidebar>
      <Sidebar.Item title="标签名" />
      <Sidebar.Item title="标签名" disabled />
      <Sidebar.Item title="标签名" />
    </Sidebar>
  );
};
```

### 自定义内容区

```jsx
/**
 * title: 自定义内容区
 */
import React, { useState } from 'react';
import { Sidebar, Toast } from 'react-vant';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(`内容区 ${v + 1}`);
      }}
    >
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="内容1">
        我是内容区1
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="内容2">
        我是内容区2
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: '#fff', padding: '18px 10px' }} title="内容3">
        我是内容区3
      </Sidebar.Item>
    </Sidebar>
  );
};
```

## API

### Sidebar Props

| 参数          | 说明             | 类型               | 默认值 |
| ------------- | ---------------- | ------------------ | ------ |
| className     | 自定义类名       | _string_           | -      |
| style         | 自定义样式       | _CSSProperties_    | -      |
| sideClassName | 左侧容器类名     | _string_           | -      |
| sideStyle     | 左侧容器样式     | _CSSProperties_    | -      |
| value         | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名   | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| onChange | 切换导航项时触发 | _index: number_ |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容 | _string \| React.ReactNode_ | `''` |
| dot | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |
| contentClassName | 内容区域类名 | _string_ | - |
| contentStyle | 内容区域样式 | _CSSProperties_ | - |

### SidebarItem Events

| 事件名  | 说明       | 回调参数        |
| ------- | ---------- | --------------- |
| onClick | 点击时触发 | _index: number_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                   | 默认值                       | 描述 |
| -------------------------------------- | ---------------------------- | ---- |
| --rv-sidebar-width                     | _80px_                       | -    |
| --rv-sidebar-font-size                 | _var(--rv-font-size-md)_     | -    |
| --rv-sidebar-line-height               | _var(--rv-line-height-md)_   | -    |
| --rv-sidebar-text-color                | _var(--rv-text-color)_       | -    |
| --rv-sidebar-disabled-text-color       | _var(--rv-gray-5)_           | -    |
| --rv-sidebar-padding                   | _20px var(--rv-padding-sm)_  | -    |
| --rv-sidebar-active-color              | _var(--rv-active-color)_     | -    |
| --rv-sidebar-background-color          | _var(--rv-background-color)_ | -    |
| --rv-sidebar-selected-font-weight      | _var(--rv-font-weight-bold)_ | -    |
| --rv-sidebar-selected-text-color       | _var(--rv-text-color)_       | -    |
| --rv-sidebar-selected-border-width     | _4px_                        | -    |
| --rv-sidebar-selected-border-height    | _16px_                       | -    |
| --rv-sidebar-selected-border-color     | _var(--rv-danger-color)_     | -    |
| --rv-sidebar-selected-background-color | _var(--rv-white)_            | -    |
