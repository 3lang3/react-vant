<p align="center">
    <img alt="logo" src="https://user-images.githubusercontent.com/7098719/132332142-f84a2bb9-879d-47e6-8e99-638d8e4b4740.png" width="240" style="margin-bottom: 10px;">
</p>

<h1 align="center">React Vant</h1>

<p align="center">参照 <a href="https://github.com/youzan/vant">Vant</a> 打造的 React 框架移动端组件库。</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/react-vant/latest?style=flat-square" alt="npm version" />
</p>

<p align="center">
  🔥 <a href="https://lang3.gitee.io/react-vant/">文档网站（国内）</a>
  &nbsp;
  🌈 <a href="https://3lang3.github.io/react-vant/">文档网站（GitHub）</a>
</p>

## 路线图

[Roadmap](https://github.com/3lang3/react-vant/discussions/16)概览

## 特性

- 🚀 性能极佳，组件平均体积小于 1KB（min+gzip）
- 🚀 60+ 个高质量组件，覆盖移动端主流场景
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 📖 提供完善的文档和组件示例
- 🍭 支持主题定制，内置 700+ 个主题变量
- 🍭 支持按需引入和 Tree Shaking
- 🍭 [支持服务器端渲染](https://github.com/3lang3/react-vant-template/tree/main/template/nextjs)
- 🍭 支持 [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite)

## 安装

[![react-vant](https://nodei.co/npm/react-vant.png)](https://npmjs.org/package/react-vant)

## 快速开始

```jsx
import ReactDOM from 'react-dom';
import { Button } from 'react-vant';
import 'react-vant/lib/index.css';

function App() {
  return <Button>Default Button</Button>;
}

ReactDOM.render(<App />, mountNode);
```

### 快速集成

#### 在 create-react-app 中使用

参考[react-vant-cra](https://github.com/3lang3/react-vant-template/tree/main/template/create-react-app)

#### 在 umijs 使用

参考[react-vant-umi](https://github.com/3lang3/react-vant-template/tree/main/template/umi)

#### 在 nextjs 使用

参考[react-vant-nextjs](https://github.com/3lang3/react-vant-template/tree/main/template/nextjs)

#### vite 集成

参考[react-vant-vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite)

请参阅[Quickstart](https://3lang3.github.io/react-vant/#/zh-CN/)中的更多内容。

## 浏览器支持

React Vant 支持现代浏览器以及 Chrome >= 51、iOS >= 10.0。

## 贡献代码

修改代码请阅读我们的 [贡献指南](https://3lang3.github.io/react-vant/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/3lang3/react-vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/3lang3/react-vant/pulls)。

## 贡献者

<a href="https://github.com/3lang3/react-vant/graphs/contributors">
  <img style="width: 420px" src="https://contrib.rocks/image?repo=3lang3/react-vant"/>
</a>
<br />
<br />

- 部分图形设计来自[BiscuitCoder](https://github.com/BiscuitCoder)

> 欢迎加入我们的微信讨论组

<img src="https://user-images.githubusercontent.com/7098719/130221473-851855c7-1429-4a36-838d-4f7f95a48418.jpg" width="140">

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://user-images.githubusercontent.com/7098719/132332336-20429085-18b7-4639-8022-a5e7098610ad.png" width="200" height="200" >

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jakebolam.com"><img src="https://avatars.githubusercontent.com/u/3534236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jake Bolam</b></sub></a><br /><a href="#infra-jakebolam" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/3lang3/react-vant/commits?author=jakebolam" title="Tests">⚠️</a> <a href="https://github.com/3lang3/react-vant/commits?author=jakebolam" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/BiscuitCoder"><img src="https://avatars.githubusercontent.com/u/17230944?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BiscuitCoder</b></sub></a><br /><a href="#design-BiscuitCoder" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
