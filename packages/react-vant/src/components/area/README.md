# Area 省市区选择

## 介绍

省市区三级联动选择，适配 `@vant/area-data` 数据包，当然你也可以通过 `columns` [定制自己的省市区内容](/components/picker#级联选择)。

## 引入

```js
import { Area } from 'react-vant';
```

### @vant/area-data

Vant 官方提供了一份默认的省市区数据，可以通过 [@vant/area-data](https://github.com/youzan/vant/tree/dev/packages/vant-area-data) 引入：

```bash
yarn add @vant/area-data
```

## 代码演示

### 基础用法

初始化省市区组件时，需要通过 `areaList` 属性传入省市区数据。

<code title="基础用法" src="./demo/base.tsx" />

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

### 配置显示列

可以通过 `columnsNum` 属性配置省市区显示的列数，默认情况下会显示省市区，当你设置为 `2`，则只会显示省市选择。

<code title="配置显示列" src="./demo/column.tsx" />

### 搭配弹出层使用

可以通过 `popup` 属性启用弹出层特性。

<code title="搭配弹出层使用" src="./demo/popup.tsx" />

> 启用 `popup` 属性后，一般使用 `onConfirm` 事件代替 `onChange` 更新外部值

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中项 | _string[]_ | - |
| defaultValue | 默认选中项 | _string[]_ | - |
| title | 顶部栏标题 | _ReactNode_ | - |
| columns | 对象数组，配置每一列显示的数据 | _PickerColumn\| PickerColumn[]_ | `[]` |
| columnsFieldNames | 自定义 `columns` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| confirmButtonText | 确认按钮文字 | _ReactNode_ | `确认` |
| cancelButtonText | 取消按钮文字 | _ReactNode_ | `取消` |
| areaList | 省市区数据，格式见下方 | _object_ | - |
| columnsPlaceholder | 列占位提示文字 | _string[]_ | `[]` |
| columnsTop | 自定义选项上方内容 | _ReactNode_ | - |
| columnsBottom | 自定义选项下方内容 | _ReactNode_ | - |
| optionRender | 自定义选项内容 | _(option: string \| object) => ReactNode_ | - |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readOnly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| itemHeight | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| columnsNum | 显示列数，3-省市区，2-省市，1-省 | _number \| string_ | `3` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `300` |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 选项改变触发 | _(val: string[], options: AreaColumnOption[])_ |
| onConfirm | 点击完成按钮触发 | _(val: string[], options: AreaColumnOption[]_ |
| onCancel | 点击取消按钮触发 | - |

### AreaColumnOption 格式

```ts
type AreaColumnOption = {
  value: string;
  text: string;
};
```

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](/guide/advanced-usage)。
