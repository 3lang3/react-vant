---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Image 图片

## 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 引入

```js
import { Image } from 'react-vant';
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

<code title="基础用法" src="./demo/base.tsx"></code>

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

<code title="填充模式" src="./demo/fit.tsx"></code>

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

<code title="圆形图片" src="./demo/round.tsx"></code>

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIcon` 自定义内容。

<code title="加载中提示" src="./demo/loading.tsx"></code>

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `errorIcon` 自定义内容。

<code title="加载失败提示" src="./demo/error.tsx"></code>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为 `px` | _number \| string_ | - |
| height | 高度，默认单位为 `px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为 `px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazyload | 是否开启懒加载 | _boolean\|[Lazyload Props](/components/lazyload)_ | `false` |
| showError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| showLoading | 是否展示图片加载中提示 | _boolean_ | `true` |
| errorIcon | 失败时提示的图标 | _ReactNode_ | `<PhotoFail />` |
| loadingIcon | 加载时提示的图标 | _ReactNode_ | `<Photo />` |
| iconSize | 加载图标和失败图标的大小 | _number \| string_ | `32px` |

### 图片填充模式

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名  | 说明               | 回调参数            |
| ------- | ------------------ | ------------------- |
| onClick | 点击图片时触发     | _event: MouseEvent_ |
| onLoad  | 图片加载完毕时触发 | -                   |
| onError | 图片加载失败时触发 | -                   |

### 类型定义

组件导出以下类型定义：

```js
import type { ImageFit } from 'react-vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-image-placeholder-text-color | _var(--rv-gray-6)_ | - |
| --rv-image-placeholder-font-size | _var(--rv-font-size-md)_ | - |
| --rv-image-placeholder-background-color | _var(--rv-background-color)_ | - |
| --rv-image-loading-icon-size | _32px_ | - |
| --rv-image-loading-icon-color | _var(--rv-gray-4)_ | - |
| --rv-image-error-icon-size | _32px_ | - |
| --rv-image-error-icon-color | _var(--rv-gray-4)_ | - |

## 常见问题

### 如何引用本地图片？

在 .tsx, jsx 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 `require()`，将图片 URL 转换为 webpack 模块请求，并结合 [file-loader](https://github.com/webpack-contrib/file-loader) 或者 [url-loader](https://github.com/webpack-contrib/url-loader) 进行处理。

```html
// 错误写法
<image src="./image.png" />

// 正确写法
<image src="require('./image.png')" />
```
