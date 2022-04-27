---
simulator:
  compact: false
  style:
    background: '#fff'
---

# Uploader 文件上传

## 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

## 引入

```js
import { Uploader } from 'react-vant';
```

## 代码演示

### 基础用法

文件上传完毕后会触发 `afterRead` 回调函数，获取到对应的 `file` 对象。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Uploader } from 'react-vant';

export default () => <Uploader afterRead={(file) => console.log(file)} />;
```

### 文件预览

通过 `value` 可以绑定已经上传的文件列表，并展示文件列表的预览图。

<code title="文件预览" src="./demo/preview.tsx" />

### 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

<code title="上传状态" src="./demo/status.tsx" />

### 限制上传数量

通过 `maxCount` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

<code title="限制上传数量" src="./demo/maxCount.tsx" />

### 限制上传大小

通过 `maxSize` 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 `onOversize` 事件获取。

<code title="限制上传大小" src="./demo/size.tsx" />

如果需要针对不同类型的文件来作出不同的大小限制，可以在 `maxSize` 属性中传入一个函数，在函数中通过 `file.type` 区分文件类型，返回 `true` 表示超出限制，`false` 表示未超出限制。

```jsx | pure
export default () => {
  const isOverSize = (file) => {
    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;
    return file.size >= maxSize;
  };
  return <Uploader maxSize={isOverSize} />;
};
```

### 自定义上传样式

通过默认插槽可以自定义上传区域的样式。

```jsx
/**
 * title: 自定义上传样式
 */
import React from 'react';
import { Uploader, Button } from 'react-vant';

export default () => (
  <Uploader style={{ width: '100%' }}>
    <Button block type="primary" round>
      上传文件
    </Button>
  </Uploader>
);
```

### 自定义预览样式

通过 `previewCoverRender` 属性自定义预览样式。

<code title="自定义预览样式" src="./demo/previewCoverRender.tsx" />

### 上传前置处理

通过传入 `beforeRead` 函数可以在上传前进行校验和处理，返回 `true` 表示校验通过，返回 `false` 表示校验失败。支持返回 `Promise` 对 file 对象进行自定义处理，例如压缩图片。

<code title="上传前置处理" src="./demo/beforeRead.tsx" />

### 禁用文件上传

通过 `disabled` 属性禁用文件上传。

```jsx
/**
 * title: 禁用文件上传
 */
import React from 'react';
import { Uploader } from 'react-vant';

export default () => (
  <Uploader
    value={[
      {
        url: 'https://img.yzcdn.cn/vant/sand.jpg',
        status: 'done',
        name: '图片名称',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'done',
        name: '图片名称',
      },
    ]}
    disabled
  />
);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 已上传的文件列表 | _FileListItem[]_ | - |
| accept | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | 标识符，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| previewSize | 预览图和上传区域的尺寸，默认单位为 `px` | _number \| string_ | `80px` |
| previewImage | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| previewFullImage | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| previewOptions | 全屏图片预览的配置项，可选值见 [ImagePreview](#/zh-CN/image-preview) | _object_ | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| readonly | 是否将上传区域设置为只读状态 | _boolean_ | `false` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| showUpload | 是否展示上传区域 | _boolean_ | `true` |
| capture | 图片选取模式，可选值为 `camera` (直接调起摄像头) | _string_ | - |
| afterRead | 文件读取完成后的回调函数 | _Function_ | - |
| beforeRead | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | _Function_ | - |
| beforeDelete | 文件删除前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | _Function_ | - |
| maxSize | 文件大小限制，单位为 `byte` | _number \| string \| (file: File) => boolean_ | - |
| maxCount | 文件上传数量限制 | _number \| string_ | - |
| resultType | 文件读取结果类型，可选值为 `file` `text` | _string_ | `dataUrl` |
| uploadText | 上传区域文字提示 | _string_ | - |
| imageFit | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件 | _string_ | `cover` |
| uploadIcon | 上传区域图标 | _ReactNode_ | `<Photograph />` |

> 注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。

### Events

| 事件名         | 说明                   | 回调参数                 |
| -------------- | ---------------------- | ------------------------ |
| onChange       | 组件值更新时调用       | _UploaderFileListItem[]_ |
| onOversize     | 文件大小超过限制时触发 | 同 `afterRead`           |
| onClickUpload  | 点击上传区域时触发     | _event: MouseEvent_      |
| onClickPreview | 点击预览图时触发       | 同 `afterRead`           |
| onClosePreview | 关闭全屏图片预览时触发 | -                        |
| onDelete       | 删除文件预览时触发     | 同 `afterRead`           |

### 回调参数

beforeRead、afterRead、beforeDelete 执行时会传递以下回调参数：

| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | file 对象                         | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |

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
import type { UploaderInstance, UploaderResultType, UploaderFileListItem } from 'react-vant';
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

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                   | 默认值                        | 描述 |
| -------------------------------------- | ----------------------------- | ---- |
| --rv-uploader-size                     | _80px_                        | -    |
| --rv-uploader-icon-size                | _24px_                        | -    |
| --rv-uploader-icon-color               | _var(--rv-gray-4)_            | -    |
| --rv-uploader-text-color               | _var(--rv-gray-6)_            | -    |
| --rv-uploader-text-font-size           | _var(--rv-font-size-sm)_      | -    |
| --rv-uploader-upload-background-color  | _var(--rv-gray-1)_            | -    |
| --rv-uploader-upload-active-color      | _var(--rv-active-color)_      | -    |
| --rv-uploader-delete-color             | _var(--rv-white)_             | -    |
| --rv-uploader-delete-icon-size         | _14px_                        | -    |
| --rv-uploader-delete-background-color  | _rgba(0, 0, 0, 0.7)_          | -    |
| --rv-uploader-file-background-color    | _var(--rv-background-color)_  | -    |
| --rv-uploader-file-icon-size           | _20px_                        | -    |
| --rv-uploader-file-icon-color          | _var(--rv-gray-7)_            | -    |
| --rv-uploader-file-name-padding        | _0 var(--rv-padding-base)_    | -    |
| --rv-uploader-file-name-margin-top     | _var(--rv-padding-xs)_        | -    |
| --rv-uploader-file-name-font-size      | _var(--rv-font-size-sm)_      | -    |
| --rv-uploader-file-name-text-color     | _var(--rv-gray-7)_            | -    |
| --rv-uploader-mask-text-color          | _var(--rv-white)_             | -    |
| --rv-uploader-mask-background-color    | _fade(var(--rv-gray-8), 88%)_ | -    |
| --rv-uploader-mask-icon-size           | _22px_                        | -    |
| --rv-uploader-mask-message-font-size   | _var(--rv-font-size-sm)_      | -    |
| --rv-uploader-mask-message-line-height | _var(--rv-line-height-xs)_    | -    |
| --rv-uploader-loading-icon-size        | _22px_                        | -    |
| --rv-uploader-loading-icon-color       | _var(--rv-white)_             | -    |
| --rv-uploader-disabled-opacity         | _var(--rv-disabled-opacity)_  | -    |

## 常见问题

### 拍照上传的图片被旋转 90 度？

部分手机在拍照上传时会出现图片被旋转 90 度的问题，这个问题可以通过 [compressorjs](https://github.com/fengyuanchen/compressorjs) 或其他开源库进行处理。

compressorjs 是一个开源的图片处理库，提供了图片压缩、图片旋转等能力。

#### 示例

使用 compressorjs 进行处理的示例代码如下:

```jsx | pure
export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs 默认开启 checkOrientation 选项
      // 会将图片修正为正确方向
      new Compressor(file, {
        success: resolve,
        error(err) {
          console.log(err.message);
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
