# 快速上手

### 通过 npm 安装

在现有项目中使用，可以通过`npm`或`yarn`安装

```bash
# 通过 npm 安装
npm i react-vant -S

# 通过 yarn 安装
yarn add react-vant
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "react-vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'react-vant',
      libraryDirectory: 'es',
      style: true
    }, 'react-vant']
  ]
};
```

```js
// 接着你可以在代码中直接引入 react-vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'react-vant';
```

> Tips: 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'react-vant/lib/button';
import 'react-vant/lib/button/style';
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。


### 通过 CDN 安装

使用 react-vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量 `react-vant` 访问到所有组件。

```html
<!-- 引入样式文件 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vant@next/lib/index.css"
/>

<!-- 引入 Vue 和 Vant 的 JS 文件 -->
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@next/lib/vant.min.js"></script>
```
