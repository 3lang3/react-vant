---
simulator:
  style: 
    background: '#fff'
---

# ProductCard 商品卡片

## 介绍

商品卡片，用于展示商品的图片、价格等信息。

```js
import { ProductCard } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { ProductCard, Tag, Button } from 'react-vant';

export default () => {
  return (
    <ProductCard
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  );
};
```

### 营销信息

通过 `originPrice` 设置商品原价，通过 `tag` 设置商品左上角标签。

```jsx
/**
 * title: 营销信息
 */
import React from 'react';
import { ProductCard, Tag, Button } from 'react-vant';

export default () => {
  return (
    <ProductCard
      tag="标签"
      num="2"
      price="2.00"
      originPrice="10.00"
      desc="描述信息"
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  );
};
```

### 自定义内容

`ProductCard` 组件提供了多个插槽，可以灵活地自定义内容。

```jsx
/**
 * title: 自定义内容
 */
import React from 'react';
import { ProductCard, Tag, Button } from 'react-vant';

export default () => {
  return (
    <ProductCard
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      tags={
        <>
          <Tag plain type="danger" style={{ marginRight: 5 }}>
            标签
          </Tag>
          <Tag plain type="danger">
            标签
          </Tag>
        </>
      }
      footer={
        <>
          <Button size="mini" round plain style={{ marginRight: 2 }}>
            标签1
          </Button>
          <Button size="mini" round plain>
            标签2
          </Button>
        </>
      }
    />
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 左侧图片 URL，或自定义内容 | _string\| React.ReactNode_ | - |
| title | 标题 | _ReactNode_ | - |
| desc | 描述 | _ReactNode_ | - |
| tag | 图片角标 | _ReactNode_ | - |
| num | 商品数量 | _number \| string_ | _ReactNode_ |
| price | 商品价格 | _number \| string_ | _ReactNode_ |
| decimal | 补全价格两位小数 | _boolean_ | `true` |
| originPrice | 商品划线原价 | _number\| string_ | _ReactNode_ |
| centered | 内容是否垂直居中 | _boolean_ | `false` |
| currency | 货币符号 | _string_ | `¥` |
| thumbLink | 点击左侧图片后跳转的链接地址 | _string_ | - |
| lazyload | 是否开启图片懒加载 | _boolean_ | `false` |
| priceTop | 自定义价格上方区域 | _ReactNode_ | - |
| bottom | 自定义价格下方区域 | _ReactNode_ | - |
| tags | 自定义描述下方标签区域 | _ReactNode_ | - |
| footer | 自定义右下角内容 | _ReactNode_ | - |

### Events

| 事件名       | 说明                 | 回调参数            |
| ------------ | -------------------- | ------------------- |
| onClick      | 点击时触发           | _event: MouseEvent_ |
| onClickThumb | 点击自定义图片时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-product-card-padding | _var(--rv-padding-xs) var(--rv-padding-md)_ | - |
| --rv-product-card-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-product-card-text-color | _var(--rv-text-color)_ | - |
| --rv-product-card-background-color | _var(--rv-background-color-light)_ | - |
| --rv-product-card-thumb-size | _88px_ | - |
| --rv-product-card-thumb-border-radius | _var(--rv-border-radius-lg)_ | - |
| --rv-product-card-title-line-height | _16px_ | - |
| --rv-product-card-desc-color | _var(--rv-gray-7)_ | - |
| --rv-product-card-desc-line-height | _var(--rv-line-height-md)_ | - |
| --rv-product-card-price-color | _var(--rv-gray-8)_ | - |
| --rv-product-card-origin-price-color | _var(--rv-gray-6)_ | - |
| --rv-product-card-num-color | _var(--rv-gray-6)_ | - |
| --rv-product-card-origin-price-font-size | _var(--rv-font-size-xs)_ | - |
| --rv-product-card-price-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-product-card-price-integer-font-size | _var(--rv-font-size-lg)_ | - |
| --rv-product-card-price-font-family | _var(--rv-price-integer-font-family)_ | - |
