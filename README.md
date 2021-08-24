# react-vant

参照 Vant 打造的 React 框架移动端组件库。

[![NPM version][npm-image]][npm-url] 

[npm-image]: http://img.shields.io/npm/v/react-vant.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-vant

> 👼 缺失的组件会持续同步，有特别需要的可以在[此处留言](https://github.com/3lang3/react-vant/issues/5)

## 特性

- 40+ 高质量组件，覆盖移动端基本场景
- 支持按需引入
- 支持主题定制
- 支持 TypeScript

## Install

[![react-vant](https://nodei.co/npm/react-vant.png)](https://npmjs.org/package/react-vant)

## Quickstart

```jsx
import ReactDOM from 'react-dom';
import { Button } from 'react-vant';
import 'react-vant/lib/index.css';

function App() {
  return <Button>Default Button</Button>;
}

ReactDOM.render(<App />, mountNode);
```

请参阅[Quickstart](https://3lang3.github.io/react-vant/#/zh-CN/)中的更多内容。

## 📦 Dev App

npm

```bash
npm install
```

yarn

```bash
yarn
```

### 启动文档

```bash
yarn start
```

### 打包文档

```bash
yarn build:site
```

### 发布文档

```bash
yarn release:site
```

### 打包组件

```bash
yarn build
```

### 测试组件

```bash
yarn test
```

### Contributor group

> [Roadmap](https://github.com/3lang3/react-vant/discussions/16)概览

欢迎加入我们的微信讨论组

<img src="https://user-images.githubusercontent.com/7098719/130221473-851855c7-1429-4a36-838d-4f7f95a48418.jpg" width="200">

## Components completion status

### Layout Components

- [x] Flex 布局

### Basic Components

- [x] Button 按钮
- [x] Typography 文本
- [x] Icon 图标
- [x] Image 图片
- [x] Popup 弹出框
- [x] Cell 单元格
- [x] Toast 轻提示
- [x] 内置样式（IPhoneX 适配，细边框等）

### Form Components

- [x] Field 输入框
- [x] CheckBox 复选框
- [x] Radio 单选框
- [x] Rate 评分
- [x] Picker 选择器
- [x] Stepper 步进器
- [x] Search 搜索
- [x] DatetimePicker 时间选择
- [x] PasswordInput 密码输入框

### Display Components

- [x] Badge 徽标
- [x] Collapse 折叠面板
- [x] CountDown 倒计时
- [x] Empty 空状态
- [x] ImagePreview 图片预览
- [x] List 列表
- [x] NoticeBar 通知栏
- [x] Sticky 粘性布局
- [x] Swipe 轮播
- [x] Tag 标签

### Action Components

- [x] ActionSheet 动作面板
- [x] Loading 加载
- [x] Overlay 遮罩层
- [x] Dialog 弹出层
- [x] PullRefresh 下拉刷新

### Navigation Components

- [x] IndexBar 索引栏
- [x] NavBar 导航栏
- [x] Tabs 标签页
