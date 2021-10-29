# Sku 商品规格

### 引入

```js
import { Sku } from 'reactvant';
```

## 代码演示

### 基础用法

> 完整 Sku demo 代码详见[demo](https://github.com/3lang3/react-vant/tree/main/packages/react-vant/src/sku/demo/index.tsx)。

```jsx
import React, { useRef } from 'react';
import { Cell, Sku } from 'react-vant';
import type { SkuInstance } from 'react/vant/es/sku';

// demo数据详见https://github.com/3lang3/react-vant/tree/main/packages/react-vant/src/sku/demo/data.ts
const demoData = {};

export default () => {
  const ref = useRef < SkuInstance > null;
  return (
    <>
      <Cell title="打开sku" onClick={() => ref.current.show()} />
      <Sku
        ref={ref}
        goodsId={demoData.goods_id}
        sku={demoData.sku}
        properties={demoData.properties}
        goods={demoData.goods_info}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
      />
    </>
  );
};
```

### 自定义试图

```jsx
<Sku
  sku={demoData.sku}
  goods={demoData.goods_info}
  goodsId={demoData.goods_id}
  properties={demoData.properties}
  skuHeaderPriceRender={(price) => {
    return `😄 ¥ ${price}`;
  }}
  skuActionsTop={<div className="sku-actions-top">商品不多，赶快购买吧</div>}
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| sku | 商品 sku 数据 | _object_ | - |
| goods | 商品信息 | _object_ | - |
| goodsId | 商品 id | _number \| string_ | - |
| priceTag | 显示在价格后面的标签 | _ReactNode_ | - |
| hideStock | 是否显示商品剩余库存 | _boolean_ | `false` |
| hideQuotaText | 是否显示限购提示 | _boolean_ | `false` |
| hideSelectedText | 是否隐藏已选提示 | _boolean_ | `false` |
| stockThreshold | 库存阈值。低于这个值会把库存数高亮显示 | _boolean_ | `50` |
| showAddCartBtn | 是否显示加入购物车按钮 | _boolean_ | `true` |
| buyText | 购买按钮文字 | _string_ | `立即购买` |
| addCartText | 加入购物车按钮文字 | _string_ | `加入购物车` |
| quota | 限购数，0 表示不限购 | _number_ | `0` |
| quotaUsed | 已经购买过的数量 | _number_ | `0` |
| resetOnHide | 隐藏时重置选择的商品数量 | _boolean_ | `false` |
| disableStepperInput | 是否禁用步进器输入 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| stepperTitle | 数量选择组件左侧文案 | _ReactNode_ | `购买数量` |
| customStepperConfig | 步进器相关自定义配置 | _object_ | `{}` |
| customSkuValidator | 自定义 sku 校验规则 | _(type,selectedValue) => void \| boolean \| Promise\<boolean\>_ | - |
| initialSku | 默认选中的 sku，具体参考高级用法 | _object_ | - |
| getContainer | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |
| showSoldoutSku | 是否展示售罄的 sku，默认展示并置灰 | _boolean_ | `true` |
| disableSoldoutSku | 是否禁用售罄的 sku | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| startSaleNum | 起售数量 | _number_ | `1` |
| properties | 商品属性 | _array_ | - |
| previewOnClickImage | 是否在点击商品图片时自动预览 | _boolean_ | `true` |
| showHeaderImage | 是否展示头部图片 | _boolean_ | `true` |
| lazyload | 是否开启图片懒加载 | _boolean_ | `false` |
| bodyOffsetTop | sku 距视窗顶部距离 | _number_ | 200 |

### Events

| 事件名            | 说明                   | 回调参数                                     |
| ----------------- | ---------------------- | -------------------------------------------- |
| onAddCart         | 点击添加购物车回调     | skuData: object                              |
| onBuyClicked      | 点击购买回调           | skuData: object                              |
| onStepperChange   | 购买数量变化时触发     | value: number                                |
| onSkuSelected     | 切换规格类目时触发     | { skuValue, selectedSku, selectedSkuComb }   |
| onSkuPropSelected | 切换商品属性时触发     | { propValue, selectedProp, selectedSkuComb } |
| onOpenPreview     | 打开商品图片预览时触发 | data: object                                 |
| onClosePreview    | 关闭商品图片预览时触发 | data: object                                 |

### 方法

通过 ref 可以获取到 Sku 实例并调用实例方法。

| 方法名     | 说明                     | 参数         | 返回值  |
| ---------- | ------------------------ | ------------ | ------- |
| getSkuData | 获取当前 skuData         | -            | skuData |
| reset      | 重置 Sku 到初始状态      | -            | -       |
| show       | 打开 Sku，支持设置默认值 | initialValue | -       |

### 自定义渲染

Sku 组件默认划分好了若干区块，这些区块都支持自定义渲染，可以按需进行替换。区块顺序见下表：

| 名称                 | 说明                                           |
| -------------------- | ---------------------------------------------- |
| skuHeader            | 商品信息展示区，包含商品图片、名称、价格等信息 |
| skuHeaderPrice       | 自定义 sku 头部价格展示                        |
| skuHeaderOriginPrice | 自定义 sku 头部原价展示                        |
| skuHeaderExtra       | 额外 sku 头部区域                              |
| skuHeaderImageExtra  | 自定义 sku 头部图片额外的展示                  |
| skuBodyTop           | sku 展示区上方的内容，无默认展示内容，按需使用 |
| skuGroup             | 商品 sku 展示区                                |
| skuGroupExtra        | 额外商品 sku 展示区，一般用不到                |
| skuStepper           | 商品数量选择区                                 |
| skuActionsTop        | 操作按钮区顶部内容，无默认展示内容，按需使用   |
| skuActions           | 操作按钮区                                     |

### sku 对象结构

```js
sku: {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1', // skuValueId：规格值 id
          name: '红色', // skuValueName：规格值名称
          imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
        },
        {
          id: '1',
          name: '蓝色',
          imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
        }
      ],
      largeImageMode: true, //  是否展示大图模式
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2259, // skuId
      s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
      price: 100, // 价格（单位分）
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  messages: [
    {
      // 商品留言
      datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
      multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      name: '留言', // 留言名称
      type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      required: '1', // 是否必填 '1' 表示必填
      placeholder: '', // 可选值，占位文本
      extraDesc: ''  // 可选值，附加描述文案
    }
  ],
  hide_stock: false // 是否隐藏剩余库存
}
```

### properties 对象结构

```js
[
  // 商品属性
  {
    k_id: 123, // 属性id
    k: '加料', // 属性名
    is_multiple: true, // 是否可多选
    v: [
      {
        id: 1222, // 属性值id
        name: '珍珠', // 属性值名
        price: 1, // 属性值加价
      },
      {
        id: 1223,
        name: '椰果',
        price: 1,
      },
    ],
  },
];
```

### initialSku 对象结构

```js
{
  // 初始选中数量
  selectedNum: 3,
  selectedSku: {
    // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
    // 值：skuValueId（规格值 id）
    s1: '1',
    s2: '1',
  }
  // 初始选中的商品属性
  selectedProp: {
    // 键：属性id
    // 值：属性值id列表
    123: [1222]
  }
}
```

### goods 对象结构

```js
goods: {
  // 默认商品 sku 缩略图
  picture: 'https://img01.yzcdn.cn/1.jpg';
}
```

### customStepperConfig 对象结构

```js
customStepperConfig: {
  // 自定义限购文案
  quotaText: '每次限购xxx件',
  // 自定义步进器超过限制时的回调
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1  ? `${startSaleNum}件起售` : '至少选择一件商品');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `单次限购${quota}件`;
        if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('库存不够了');
      }
    }
  },
  // 步进器变化的回调
  handleStepperChange: currentValue => {},
  // 库存
  stockNum: 1999,
}
```

### 添加购物车和点击购买回调函数接收的 skuData 对象结构

```js
skuData: {
  // 商品 id
  goodsId: '946755',
  // 选择的商品数量
  selectedNum: 1,
  // 选择的 sku 组合
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111,
    properties: [
      {
        k_id: 123,
        k: '加料',
        is_multiple: true,
        v: [
          {
            id: 1223,
            name: '椰果',
            price: 1
          }
        ]
      }
    ],
    property_price: 1
  },
}
```
