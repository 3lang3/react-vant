---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Uploader 文件上传

## 介绍

用于将本地的图片或文件上传至服务器。

## 引入

```js
import { Uploader } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx" />

### 自动上传

通过 `upload` 方法可以完成文件自动上传。

<code title="自动上传" src="./demo/upload.tsx" />

### 上传限制

`maxCount` `maxSize` 可以设置最大上传尺寸和最大数量。

<code title="上传限制" src="./demo/limit.tsx" />

### 自定义预览

- `previewCoverRender` 可以自定义预览信息
- 想要自定义尺寸则可以使用 `previewSize`

<code title="自定义预览" src="./demo/preview.tsx" />

### 异步关闭

`onDelete` 支持返回 `Promise`, 可以很方便的用 `Dialog` 来完成确认功能。

<code title="异步关闭" src="./demo/close.tsx" />

### 表单中使用

`Uploader` 组件天生支持 `Form.Item` 嵌套，请放心使用，如果你需要对数据结构进行处理，可以参考下面的例子

<code title="表单中使用" src="./demo/form.tsx" />

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 已上传的文件列表 | _UploaderValueItem[]_ | - |
| defaultValue | 默认上传的文件列表 | _UploaderValueItem[]_ | `[]` |
| accept | 允许上传的文件类型，[doc](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | 标识符，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| isImageUrl | 手动指定是否为图片，使用 `<img />` 标签进行显示 | _(file: UploaderValueItem) => void_ | - |
| previewSize | 预览图和上传区域的尺寸，默认单位为 `px` | _number \| string_ | `80px` |
| previewImage | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| previewFullImage | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| previewCoverRender | 自定义覆盖在预览区域上方的内容 | _(item: UploaderValueItem) => React.ReactNode_ | - |
| previewOptions | 全屏图片预览的配置项，可选值见 [ImagePreview](/components/image-preview) | _object_ | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| readOnly | 是否将上传区域设置为只读状态 | _boolean_ | `false` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| deleteRender | 自定义删除按钮视图 | _(del: () => void) => ReactNode_ | - |
| showUpload | 是否展示上传区域 | _boolean_ | `true` |
| capture | 图片选取模式，可选值为 `camera` (直接调起摄像头) | _string_ | - |
| maxSize | 文件大小限制，单位为 `byte` | _number \| string \| (file: File) => boolean_ | - |
| maxCount | 文件上传数量限制 | _number \| string_ | - |
| resultType | 文件读取结果类型，可选值为 `file` `text` | _string_ | `dataUrl` |
| uploadText | 上传区域文字提示 | _string_ | - |
| statusTextRender | 自定义上传状态文案 | _(status: 'failed' \| 'pending') => ReactNode_ | - |
| imageFit | 预览图裁剪模式，可选值见 [Image](/components/image) 组件 | _string_ | `cover` |
| uploadIcon | 上传区域图标 | _ReactNode_ | `<Photograph />` |
| children | 自定义上传按钮 | _ReactNode_ | - |

> 注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| upload | 上传方法 | _(file: File) => Promise\<UploaderValueItem\>_ |
| onChange | 组件值更新时调用 | _UploaderValueItem[]_ |
| onOversize | 文件大小超过限制时触发 | _(files: File[]) => void_ |
| onClickUpload | 点击上传区域时触发 | _event: MouseEvent_ |
| onClickPreview | 点击预览图时触发 | _(item: UploaderValueItem, index: number) => void_ |
| onClosePreview | 关闭全屏图片预览时触发 | _() => void_ |
| onDelete | 删除文件预览时触发 | _(item: UploaderValueItem) => boolean\|Promise\<boolean\>\|void_ |
| beforeRead | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | _(file: File,files: File[]) => Promise\<File \| false\> \| File \| false_ | - |

### UploaderValueItem 类型

| 属性      | 说明       | 类型               | 默认值   |
| --------- | ---------- | ------------------ | -------- |
| key       | 唯一标识   | `string \| number` | 数组下标 |
| url       | 资源地址   | `string`           | -        |
| thumbnail | 缩略图地址 | `string`           | `url`    |
| file      | 源文件     | `File`             | -        |

### ResultType 可选值

`resultType` 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值      | 描述                                           |
| ------- | ---------------------------------------------- |
| file    | 结果仅包含 File 对象                           |
| text    | 结果包含 File 对象，以及文件的文本内容         |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

### 类型定义

组件导出以下类型定义：

```js
import type { UploaderInstance, UploaderResultType, UploaderValueItem } from 'react-vant';
```

`UploaderInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { UploaderInstance } from 'react-vant';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-uploader-gap | _var(--rv-padding-xs)_ | `上传视图间距` |
| --rv-uploader-size | _80px_ | `上传视图尺寸` |
| --rv-uploader-icon-size | _24px_ | - |
| --rv-uploader-icon-color | _var(--rv-gray-4)_ | - |
| --rv-uploader-text-color | _var(--rv-gray-6)_ | - |
| --rv-uploader-text-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-uploader-upload-background-color | _var(--rv-gray-1)_ | - |
| --rv-uploader-upload-active-color | _var(--rv-active-color)_ | - |
| --rv-uploader-delete-color | _var(--rv-white)_ | - |
| --rv-uploader-delete-icon-size | _14px_ | - |
| --rv-uploader-delete-background-color | _rgba(0, 0, 0, 0.7)_ | - |
| --rv-uploader-file-background-color | _var(--rv-background-color)_ | - |
| --rv-uploader-file-icon-size | _20px_ | - |
| --rv-uploader-file-icon-color | _var(--rv-gray-7)_ | - |
| --rv-uploader-file-name-padding | _0 var(--rv-padding-base)_ | - |
| --rv-uploader-file-name-margin-top | _var(--rv-padding-xs)_ | - |
| --rv-uploader-file-name-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-uploader-file-name-text-color | _var(--rv-gray-7)_ | - |
| --rv-uploader-mask-text-color | _var(--rv-white)_ | - |
| --rv-uploader-mask-background-color | _fade(var(--rv-gray-8), 88%)_ | - |
| --rv-uploader-mask-icon-size | _22px_ | - |
| --rv-uploader-mask-message-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-uploader-mask-message-line-height | _var(--rv-line-height-xs)_ | - |
| --rv-uploader-loading-icon-size | _22px_ | - |
| --rv-uploader-loading-icon-color | _var(--rv-white)_ | - |
| --rv-uploader-disabled-opacity | _var(--rv-disabled-opacity)_ | - |

## 常见问题

### 拍照上传的图片被旋转 90 度？

部分手机在拍照上传时会出现图片被旋转 90 度的问题，这个问题可以通过 [compressorjs](https://github.com/fengyuanchen/compressorjs) 或其他开源库进行处理。

> `compressorjs` 是一个开源的图片处理库，提供了图片压缩、图片旋转等能力。

#### 示例

使用 `compressorjs` 进行处理的示例代码如下:

```jsx | pure
export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs 默认开启 checkOrientation 选项
      // 会将图片修正为正确方向
      new Compressor(file, {
        success: () => resolve(file),
        error(err) {
          console.log(err.message);
          resolve(false)
        },
      });
    });
  };
  return <Uploader beforeRead={beforeRead} />;
};
```

### 上传 HEIC/HEIF 格式的图片后无法展示？

目前 Chrome、Safari 等浏览器不支持展示 HEIC/HEIF 格式的图片，因此上传后无法在 Uploader 组件中进行预览。

[HEIF] 格式的兼容性请参考 [caniuse](https://caniuse.com/?search=heic)。
