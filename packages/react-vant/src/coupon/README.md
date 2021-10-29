# Coupon 优惠券选择器

### 介绍

用于优惠券的兑换和选择。

### 引入

```js
import { CouponCell, CouponList } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
import { useState } from 'react'
import { CouponList, CouponCell, Toast } from 'react-vant'


const data = {
  id: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  description: '描述信息',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
const discountCoupon = {
  ...data,
  id: 2,
  value: 12,
  valueDesc: '8.8',
  unitDesc: '折',
};

const disabledCoupon = {
  ...data,
  id: 3,
  reason: '优惠券不可用原因',
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  valueDesc: '1',
  unitDesc: '折',
  id: 4,
  reason: '优惠券不可用原因',
};

const getRandomId = (max = 999999) => String(Math.floor(Math.random() * max) + 1);

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon]);
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon]);
  const [chosenCoupon, setChosenCoupon] = useState(-1);
  const [visible, setVisible] = useState(false);

  const onChange = (index: number) => {
    setVisible(false);
    setChosenCoupon(index);
  };

  const onExchange = (code) => {
    console.log('object', code);
    Toast('兑换成功');
    setCoupons((v) => [...v, { ...data, id: getRandomId() } as any]);
  };

  return (
    <>
      <CouponCell coupons={coupons} chosenCoupon={chosenCoupon} onClick={() => setVisible(true)} />
      <Popup
        round
        position="bottom"
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  );
};
```

## API

### CouponCell Props

| 参数         | 说明                 | 类型               | 默认值   |
| ------------ | -------------------- | ------------------ | -------- |
| title        | 单元格标题           | _ReactNode_        | `优惠券` |
| chosenCoupon | 当前选中优惠券的索引 | _number \| string_ | `-1`     |
| coupons      | 可用优惠券列表       | _Coupon[]_         | `[]`     |
| editable     | 能否切换优惠券       | _boolean_          | `true`   |
| border       | 是否显示内边框       | _boolean_          | `true`   |
| currency     | 货币符号             | _string_           | `¥`      |

### CouponList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 当前输入的兑换码 | _string_ | - |
| chosenCoupon | 当前选中优惠券的索引 | _number_ | `-1` |
| coupons | 可用优惠券列表 | _Coupon[]_ | `[]` |
| disabledCoupons | 不可用优惠券列表 | _Coupon[]_ | `[]` |
| enabledTitle | 可用优惠券列表标题 | _string_ | `可使用优惠券` |
| disabledTitle | 不可用优惠券列表标题 | _string_ | `不可使用优惠券` |
| exchangeButtonText | 兑换按钮文字 | _string_ | `兑换` |
| exchangeButtonLoading | 是否显示兑换按钮加载动画 | _boolean_ | `false` |
| exchangeButtonDisabled | 是否禁用兑换按钮 | _boolean_ | `false` |
| exchangeMinLength | 兑换码最小长度 | _number_ | `1` |
| displayedCouponIndex | 滚动至特定优惠券位置 | _number_ | - |
| showCloseButton | 是否显示列表底部按钮 | _boolean_ | `true` |
| closeButtonText | 列表底部按钮文字 | _string_ | `不使用优惠` |
| inputPlaceholder | 输入框文字提示 | _string_ | `请输入优惠码` |
| showExchangeBar | 是否展示兑换栏 | _boolean_ | `true` |
| currency | 货币符号 | _string_ | `¥` |
| emptyImage | 列表为空时的占位图 | _string_ | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| showCount | 是否展示可用 / 不可用数量 | _boolean_ | `true` |
| listFooter | 优惠券列表底部 | _ReactNode_ | - |
| disabledListFooter | 不可用优惠券列表底部 | _ReactNode_ | - |

### CouponList Events

| 事件名     | 说明           | 回调参数                |
| ---------- | -------------- | ----------------------- |
| onChange   | 优惠券切换回调 | index, 选中优惠券的索引 |
| onExchange | 兑换优惠券回调 | code, 兑换码            |

### Coupon 数据结构

| 键名        | 说明                            | 类型     |
| ----------- | ------------------------------- | -------- |
| id          | 优惠券 id                       | _string_ |
| name        | 优惠券名称                      | _string_ |
| condition   | 满减条件                        | _string_ |
| startAt     | 卡有效开始时间 (时间戳, 单位秒) | _number_ |
| endAt       | 卡失效日期 (时间戳, 单位秒)     | _number_ |
| description | 描述信息，优惠券可用时展示      | _string_ |
| reason      | 不可用原因，优惠券不可用时展示  | _string_ |
| value       | 折扣券优惠金额，单位分          | _number_ |
| valueDesc   | 折扣券优惠金额文案              | _string_ |
| unitDesc    | 单位文案                        | _string_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                                        | 描述 |
| --------------------------------------- | --------------------------------------------- | ---- |
| --rv-coupon-margin                      | _0 var(--rv-padding-sm) var(--rv-padding-sm)_ | -    |
| --rv-coupon-content-height              | _84px_                                        | -    |
| --rv-coupon-content-padding             | _14px 0_                                      | -    |
| --rv-coupon-background-color            | _var(--rv-white)_                             | -    |
| --rv-coupon-active-background-color     | _var(--rv-active-color)_                      | -    |
| --rv-coupon-border-radius               | _var(--rv-border-radius-lg)_                  | -    |
| --rv-coupon-box-shadow                  | _0 0 4px rgba(0, 0, 0, 0.1)_                  | -    |
| --rv-coupon-head-width                  | _96px_                                        | -    |
| --rv-coupon-amount-color                | _var(--rv-danger-color)_                      | -    |
| --rv-coupon-amount-font-size            | _30px_                                        | -    |
| --rv-coupon-currency-font-size          | _40%_                                         | -    |
| --rv-coupon-name-font-size              | _var(--rv-font-size-md)_                      | -    |
| --rv-coupon-disabled-text-color         | _var(--rv-gray-6)_                            | -    |
| --rv-coupon-description-padding         | _var(--rv-padding-xs) var(--rv-padding-md)_   | -    |
| --rv-coupon-description-border-color    | _var(--rv-border-color)_                      | -    |
| --rv-coupon-corner-checkbox-icon-color  | _var(--rv-danger-color)_                      | -    |
| --rv-coupon-list-background-color       | _var(--rv-background-color)_                  | -    |
| --rv-coupon-list-field-padding          | _5px 0 5px var(--rv-padding-md)_              | -    |
| --rv-coupon-list-exchange-button-height | _32px_                                        | -    |
| --rv-coupon-list-close-button-height    | _40px_                                        | -    |
| --rv-coupon-list-empty-image-size       | _200px_                                       | -    |
| --rv-coupon-list-empty-tip-color        | _var(--rv-gray-6)_                            | -    |
| --rv-coupon-list-empty-tip-font-size    | _var(--rv-font-size-md)_                      | -    |
| --rv-coupon-list-empty-tip-line-height  | _var(--rv-line-height-md)_                    | -    |
| --rv-coupon-cell-selected-text-color    | _var(--rv-text-color)_                        | -    |
