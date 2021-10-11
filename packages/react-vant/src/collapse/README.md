# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

```js
import { Collapse } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `initExpanded` 控制展开的面板列表，`initExpanded` 为数组格式。

```js
const initExpanded = ['1'];
```

```jsx
<Collapse initExpanded={initExpanded}>
  <Collapse.Item title="标题1" name="1">
    内容
  </Collapse.Item>
  <Collapse.Item title="标题2" name="2">
    内容
  </Collapse.Item>
  <Collapse.Item title="标题3" name="3">
    内容
  </Collapse.Item>
</Collapse>
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `initExpanded` 为字符串格式。

```jsx
<Collapse initExpanded="1" accordion>
  <Collapse.Item title="标题1" name="1">
    内容
  </Collapse.Item>
  <Collapse.Item title="标题2" name="2">
    内容
  </Collapse.Item>
  <Collapse.Item title="标题3" name="3">
    内容
  </Collapse.Item>
</Collapse>
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```jsx
<Collapse initExpanded="initExpanded">
  <Collapse.Item title="标题1" name="1">
    内容
  </Collapse.Item>
  <Collapse.Item title="标题2" name="2" disabled>
    内容
  </Collapse.Item>
  <Collapse.Item title="标题3" name="3" disabled>
    内容
  </Collapse.Item>
</Collapse>
```

### 自定义标题内容

通过 `title` 插槽可以自定义标题栏的内容。

```jsx
<Collapse initExpanded="initExpanded">
  <Collapse.Item
    name="1"
    title={
      <div>
        标题1 <Icon name="question-o" />
      </div>
    }
  >
    内容
  </Collapse.Item>
  <Collapse.Item title="标题2" name="2" icon="shop-o">
    内容
  </Collapse.Item>
</Collapse>
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initExpanded | 当前展开面板的 name | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | - |
| accordion | 是否开启手风琴模式 | _boolean_ | `false` |
| border | 是否显示外边框 | _boolean_ | `true` |

### Collapse Events

| 事件名   | 说明           | 回调参数                                       |
| -------- | -------------- | ---------------------------------------------- |
| onChange | 切换面板时触发 | initExpanded: 类型与 initExpanded 绑定的值一致 |

### CollapseItem Props

| 参数        | 说明                                         | 类型               | 默认值  |
| ----------- | -------------------------------------------- | ------------------ | ------- |
| name        | 唯一标识符，默认为索引值                     | _number \| string_ | `index` |
| icon        | 标题栏左侧图标 | _string\|ReactNode_           | -       |
| size        | 标题栏大小，可选值为 `large`                 | _string_           | -       |
| title       | 标题栏左侧内容                               | _number \| string_ | -       |
| value       | 标题栏右侧内容                               | _number \| string_ | -       |
| label       | 标题栏描述信息                               | _number \| string_ | -       |
| border      | 是否显示内边框                               | _boolean_          | `true`  |
| isLink      | 是否展示标题栏右侧箭头并开启点击反馈         | _boolean_          | `true`  |
| disabled    | 是否禁用面板                                 | _boolean_          | `false` |
| titleClass | 左侧标题额外类名                             | _string_           | -       |
| valueClass | 右侧内容额外类名                             | _string_           | -       |
| labelClass | 描述信息额外类名                             | _string_           | -       |

### CollapseItem 方法

通过 ref 可以获取到 CollapseItem 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle  | 切换面试展开状态，传 `true` 为展开，`false` 为收起，不传参为切换 | _expand?: boolean_ | - |


### 类型定义

组件导出以下类型定义：

```js
import type { CollapseItemInstance } from 'react-vant';
```

`CollapseItemInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { CollapseItemInstance } from 'react-vant';

const collapseItemRef = useRef<CollapseItemInstance>();

collapseItemRef.current?.toggle();
```



## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-collapse-item-transition-duration | _var(--rv-animation-duration-base)_ | - |
| --rv-collapse-item-content-padding | _var(--rv-padding-sm) var(--rv-padding-md)_ | - |
| --rv-collapse-item-content-font-size | _var(--rv-font-size-md)_ | - |
| --rv-collapse-item-content-line-height | _1.5_ | - |
| --rv-collapse-item-content-text-color | _var(--rv-gray-6)_ | - |
| --rv-collapse-item-content-background-color | _var(--rv-white)_ | - |
| --rv-collapse-item-title-disabled-color | _var(--rv-gray-5)_ | - |
