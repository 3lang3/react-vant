# SubmitBar 提交订单栏

## 介绍

用于展示订单金额与提交订单。

```js
import { SubmitBar } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar price="3050" buttonText="提交订单" /></div>;
};
```

### 禁用状态

禁用状态下不会触发 `onSubmit` 事件。

<code title="禁用状态" src="./demo/disabled.tsx" />

### 加载状态

加载状态下不会触发 `onSubmit` 事件。

```jsx
/**
 * title: 加载状态
 */
import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar loading price="3050" buttonText="提交订单" /></div>;
};
```

### 高级用法

自定义内容。

```jsx
/**
 * title: 高级用法
 */
import React from 'react';
import { SubmitBar, Checkbox } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      price="3050"
      buttonText="提交订单"
      tip={
        <>
          你的收货地址不支持同城送,
          <span style={{ color: '#1989fa' }}>修改地址</span>
        </>
      }
    >
      <Checkbox>全选</Checkbox>
    </SubmitBar>
    </div>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 金额（单位分） | _number\| string_ | - |
| decimalLength | 金额小数点位数 | _number \| string_ | `2` |
| label | 金额左侧文案 | _ReactNode_ | `合计：` |
| suffixLabel | 金额右侧文案 | _ReactNode_ | - |
| textAlign | 金额文案对齐方向，可选值为 `left` | _string_ | `right` |
| buttonText | 按钮文字 | _string_ | - |
| buttonType | 按钮类型 | _[ButtonType](/components/button)_ | `danger` |
| buttonColor | 自定义按钮颜色 | _string_ | - |
| tip | 在订单栏上方的提示文案 | _string\|ReactNode_ | - |
| tipIcon | 提示文案左侧的图标 | _ReactNode_ | - |
| currency | 货币符号 | _string_ | `¥` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示将按钮显示为加载中状态 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](/guide/advanced-usage) | _boolean_ | `true` |
| button | 自定义按钮 | _ReactNode_ | - |
| top | 自定义订单栏上方内容 | _ReactNode_ | - |

### Events

| 事件名   | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| onSubmit | 按钮点击事件回调 | -        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-submit-bar-height | _50px_ | - |
| --rv-submit-bar-z-index | _100_ | - |
| --rv-submit-bar-background-color | _var(--rv-white)_ | - |
| --rv-submit-bar-button-width | _110px_ | - |
| --rv-submit-bar-price-color | _var(--rv-danger-color)_ | - |
| --rv-submit-bar-price-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-submit-bar-price-integer-font-size | _20px_ | - |
| --rv-submit-bar-price-font-family | _var(--rv-price-integer-font-family)_ | - |
| --rv-submit-bar-text-color | _var(--rv-text-color)_ | - |
| --rv-submit-bar-text-font-size | _var(--rv-font-size-md)_ | - |
| --rv-submit-bar-tip-padding | _var(--rv-padding-xs) var(--rv-padding-sm)_ | - |
| --rv-submit-bar-tip-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-submit-bar-tip-line-height | _1.5_ | - |
| --rv-submit-bar-tip-color | _#f56723_ | - |
| --rv-submit-bar-tip-background-color | _#fff7cc_ | - |
| --rv-submit-bar-tip-icon-size | _12px_ | - |
| --rv-submit-bar-button-height | _40px_ | - |
| --rv-submit-bar-padding | _0 var(--rv-padding-md)_ | - |
