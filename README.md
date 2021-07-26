👼**缺失的组件会持续同步**

<hr />

## 特性

- 30+ 高质量组件，覆盖移动端基本场景
- 支持按需引入
- 支持主题定制
- 支持 TypeScript

## Install

```bash
npm i react-vant
```

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

### 发布 npm 包

```bash
yarn release
```

## Components completion status

### Layout Components

- [x] Flex 布局

### Basic Components

- [x] Button 按钮
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
- [x] NoticeBar 通知栏
- [x] Sticky 粘性布局
- [x] Swipe 轮播
- [x] Empty 空状态
- [x] List 列表
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
