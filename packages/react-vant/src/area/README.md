# Area 省市区选择

### 介绍

省市区三级联动选择，通常与[弹出层](#/zh-CN/popup)组件配合使用。

### 引入

```js
import { Area } from 'react-vant';
```

## 代码演示

### 基础用法

初始化省市区组件时，需要通过 `areaList` 属性传入省市区数据。

```jsx
import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  return <Area title="标题" areaList={areaList} />;
};
```

### areaList 格式

areaList 为对象结构，包含 `province_list`、`city_list`、`county_list` 三个 key。

每项以地区码作为 key，省市区名字作为 value。地区码为 6 位数字，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。比如北京的地区码为 `11`，以 0 补足 6 位，为 `110000`。

示例数据如下：

```js
const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    // ....
  },
};
```

### @vant/area-data

Vant 官方提供了一份默认的省市区数据，可以通过 [@vant/area-data](https://github.com/youzan/vant/tree/dev/packages/vant-area-data) 引入：

```bash
yarn add @vant/area-data
```

```jsx
import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  return <Area title="标题" areaList={areaList} />;
};
```

### 选中省市区

如果想选中某个省市区，需要传入一个 `value` 属性，绑定对应的地区码。

```jsx
import React, { useState } from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  const [value, setValue] = useState('330302');
  return <Area title="标题" value={value} areaList={areaList} />;
};
```

### 配置显示列

可以通过 `columnsNum` 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 `2`，则只会显示省市选择。

```jsx
import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  return <Area title="标题" columnsNum={2} areaList={areaList} />;
};
```

### 配置列占位提示文字

可以通过 `columnsPlaceholder` 属性配置每一列的占位提示文字。

```jsx
import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  return (
    <Area
      title="标题"
      areaList={areaList}
      columnsPlaceholder={['请选择🤔', '请选择🤔', '请选择🤔']}
    />
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项对应的地区码 | _string_ | - |
| title | 顶部栏标题 | _ReactNode_ | - |
| confirmButtonText | 确认按钮文字 | _ReactNode_ | `确认` |
| cancelButtonText | 取消按钮文字 | _ReactNode_ | `取消` |
| areaList | 省市区数据，格式见下方 | _object_ | - |
| columnsPlaceholder | 列占位提示文字 | _string[]_ | `[]` |
| columnsTop | 自定义选项上方内容 | _ReactNode_ | - |
| columnsBottom | 自定义选项下方内容 | _ReactNode_ | - |
| optionRender | 自定义选项内容 | _(option: string \| object) => ReactNode_ | - |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| itemHeight | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| columnsNum | 显示列数，3-省市区，2-省市，1-省 | _number \| string_ | `3` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |
| isOverseaCode | 根据地区码校验海外地址，海外地址会划分至单独的分类 | _() => boolean_ | - |

### Events

| 事件      | 说明               | 回调参数                       |
| --------- | ------------------ | ------------------------------ |
| onConfirm | 点击完成按钮时触发 | _result: ConfirmResult_        |
| onCancel  | 点击取消按钮时触发 | -                              |
| onChange  | 选项改变时触发     | 所有列选中值，当前列对应的索引 |

### ConfirmResult 格式

onConfirm 事件返回的数据整体为一个数组，数组每一项对应一列选项中被选中的数据。

```js
[
  {
    code: '110000',
    name: '北京市',
  },
  {
    code: '110100',
    name: '北京市',
  },
  {
    code: '110101',
    name: '东城区',
  },
];
```

### 方法

通过 ref 可以获取到 Area 实例并调用实例方法。

| 方法名 | 说明                                                 | 参数            | 返回值 |
| ------ | ---------------------------------------------------- | --------------- | ------ |
| reset  | 根据地区码重置所有选项，若不传地区码，则重置到第一项 | _code?: string_ | -      |

### 类型定义

组件导出以下类型定义：

```js
import type { AreaList, AreaInstance, AreaColumnOption } from 'react-vant';
```

`AreaInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { AreaInstance } from 'react-vant';

const areaRef = useRef<AreaInstance>();

areaRef.value?.reset();
```

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
