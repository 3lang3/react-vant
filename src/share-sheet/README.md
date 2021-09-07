# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

```js
import { ShareSheet } from 'reactvant';
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```jsx
import { useState } from 'react';
import { Cell, ShareSheet } from 'react-vant';
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  return (
    <>
      <Cell isLink title="显示分享面板" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享给好友"
        onCancel={close}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close();
        }}
      />
    </>
  );
};
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```js
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```js
const options = [
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```js
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link', description: '描述信息' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

<ShareSheet
  title="立即分享给好友"
  description="描述信息"
  options={options}
/>;
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示分享面板 | _boolean_ | `false` |
| options | 分享选项 | _Option[]_ | `[]` |
| title | 顶部标题 | _ReactNode_ | - |
| cancelText | 取消按钮文字，传入空字符串可以隐藏按钮 | _ReactNode_ | `'取消'` |
| description | 标题下方的辅助描述文字 | _ReactNode_ | - |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _CSSProperties_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Option 数据结构

`options` 属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 分享渠道名称 | _string_ |
| description | 分享选项描述 | _string_ |
| icon | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`，支持传入图片 URL | _string_ |
| className | 分享选项类名 | _string_ |

### Events

| 事件名   | 说明               | 回调参数                        |
| -------- | ------------------ | ------------------------------- |
| onSelect | 点击分享选项时触发 | _option: Option, index: number_ |
| onCancel | 点击取消按钮时触发 | -                               |

## 常见问题

### 如何实现分享逻辑？

在不同的 App 或浏览器中，存在各式各样的分享接口或分享方式，因此 ShareSheet 组件不提供具体的分享逻辑，需要开发者根据业务场景自行实现。

#### 微信内分享

由于微信未提供分享相关的 API，需要引导用户点击右上角进行分享。

#### App 内分享

可以通过 JSBridge 调用原生应用的 SDK 进行分享。

#### 分享海报或二维码

可以通过 [Popup](#/zh-CN/popup) 组件以弹层的形式展示图片，然后引导用户保存图片进行分享。
