---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Rate 评分

## 介绍

用于对事物进行评级操作。

## 引入

```js
import { Rate } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `value` 来绑定当前评分值。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={setValue} />;
};
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`voidIcon` 属性设置未选中时的图标。

<code title="自定义图标" card src="./demo/icon.tsx" />

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色。

```jsx
/**
 * title: 自定义样式
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(3);
  return <Rate size="32" color="#3f45ff" voidColor="#111" value={value} onChange={setValue} />;
};
```

### 半星

设置 `allowHalf` 属性后可以选中半星。

```jsx
/**
 * title: 半星
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(3.5);
  return <Rate allowHalf value={value} onChange={setValue} />;
};
```

### 自定义数量

通过 `count` 属性设置评分总数。

```jsx
/**
 * title: 自定义数量
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(4);
  return <Rate value={value} onChange={setValue} count={8} />;
};
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

```jsx
/**
 * title: 禁用状态
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(4);
  return <Rate value={value} onChange={setValue} disabled />;
};
```

### 只读状态显示小数

设置 `readOnly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。

```jsx
/**
 * title: 只读状态显示小数
 * card: true
 */
import React, { useState } from 'react';
import { Rate } from 'react-vant';

export default () => {
  const [value, setValue] = useState(3.3);
  return <Rate value={value} onChange={setValue} readOnly allowHalf />;
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前分值 | _number_ | - |
| defaultValue | 默认分值 | _number_ | - |
| count | 图标总数 | _number \| string_ | `5` |
| size | 图标大小，默认单位为`px` | _number \| string_ | `20px` |
| gutter | 图标间距，默认单位为`px` | _number \| string_ | `4px` |
| color | 选中时的颜色 | _string_ | `#ee0a24` |
| voidColor | 未选中时的颜色 | _string_ | `#c8c9cc` |
| disabledColor | 禁用时的颜色 | _string_ | `#c8c9cc` |
| icon | 选中时的图标或图片链接 | _ReactNode_ | - |
| voidIcon | 未选中时的图标或图片链接 | _ReactNode_ | - |
| allowHalf | 是否允许半选 | _boolean_ | `false` |
| readOnly | 是否为只读状态，只读状态下无法修改评分 | _boolean_ | `false` |
| disabled | 是否禁用评分 | _boolean_ | `false` |
| touchable | 是否可以通过滑动手势选择评分 | _boolean_ | `true` |

### Events

| 事件名   | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| onChange | 当前分值变化时触发的事件 | 当前分值 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                          | 默认值                   | 描述 |
| ----------------------------- | ------------------------ | ---- |
| --rv-rate-icon-size           | _20px_                   | -    |
| --rv-rate-icon-gutter         | _var(--rv-padding-base)_ | -    |
| --rv-rate-icon-void-color     | _var(--rv-gray-5)_       | -    |
| --rv-rate-icon-full-color     | _var(--rv-danger-color)_ | -    |
| --rv-rate-icon-disabled-color | _var(--rv-gray-5)_       | -    |
