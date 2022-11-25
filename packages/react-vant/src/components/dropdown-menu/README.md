# DropdownMenu 下拉菜单

## 介绍

向下弹出的菜单列表。

## 引入

```js
import { DropdownMenu } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx" />

### 自定义菜单内容

<code title="自定义菜单内容" src="./demo/custom.tsx" />

### 自定义高亮颜色

<code title="自定义高亮颜色" src="./demo/color.tsx" />

### 向上展开

<code title="向上展开" src="./demo/direction.tsx" />

### 禁用菜单

<code title="禁用菜单" src="./demo/disabled.tsx" />

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 下拉菜单值 | _Record<any, any>_ | - |
| defaultValue | 下拉菜单默认值 | _Record<any, any>_ | - |
| disabled | 是否禁用菜单 | _boolean_ | false |
| activeColor | 菜单标题和选项的选中态颜色 | _string_ | `#ee0a24` |
| activeIcon | 自定义选项的选中态勾选icon | _ReactNode_ | - |
| direction | 菜单展开方向，可选值为`up` | _string_ | `down` |
| zIndex | 菜单栏 z-index 层级 | _number \| string_ | `10` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.2` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 当前选中项对应的 value key | _number \| string_ | - |
| title | 菜单项标题 | _ReactNode_ | 当前选中项文字 |
| placeholder | 占位文本 | _string_ | `请选择` |
| options | 选项数组 | _Option[]_ | `[]` |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| titleClass | 标题额外类名 | _string_ | - |
| teleport | 指定挂载的节点 | _HTMLElment () => HTMLElement_ | - |

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

```ts
import type { DropdownMenuInstance, DropdownItemOption, DropdownMenuDirection } from 'react-vant';
```

`DropdownMenuInstance` 是组件实例的类型，用法如下：

```ts
import { useRef } from 'react';
import type { DropdownMenuInstance } from 'react-vant';

const dropdownRef = useRef<DropdownMenuInstance>(null);

dropdownRef.current?.toggleItem(0);
```

### Option 数据结构

| 键名  | 说明     | 类型               |
| ----- | -------- | ------------------ |
| text  | 文字     | _ReactNode_        |
| value | 标识符   | _number \| string_ |
| icon  | 左侧图标 | _ReactNode_        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-dropdown-menu-height | _48px_ | - |
| --rv-dropdown-menu-background-color | _var(--rv-white)_ | - |
| --rv-dropdown-menu-box-shadow | _0 2px 12px fade(var(--rv-gray-7), 12)_ | - |
| --rv-dropdown-menu-title-font-size | _15px_ | - |
| --rv-dropdown-menu-title-text-color | _var(--rv-text-color)_ | - |
| --rv-dropdown-menu-title-active-text-color | _var(--rv-danger-color)_ | - |
| --rv-dropdown-menu-title-disabled-text-color | _var(--rv-gray-6)_ | - |
| --rv-dropdown-menu-title-padding | _0 var(--rv-padding-xs)_ | - |
| --rv-dropdown-menu-title-line-height | _var(--rv-line-height-lg)_ | - |
| --rv-dropdown-menu-option-active-color | _var(--rv-danger-color)_ | - |
| --rv-dropdown-menu-content-max-height | _80%_ | - |
| --rv-dropdown-item-z-index | _10_ | - |
