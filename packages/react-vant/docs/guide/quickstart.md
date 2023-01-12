# ⚡️ 快速上手

### 通过 npm 安装

在现有项目中使用，可以通过`npm`或`yarn`安装

```bash
# 通过 npm 安装
npm i react-vant

# 通过 yarn 安装
yarn add react-vant
```

> 当前为rc版本，API 可能出现 break change，推荐使用 `lockfile` 锁定版本

### 引入

直接引入组件即可，react-vant 会自动为你加载 css 样式文件：

```js
import { Button } from 'react-vant';
```

### 模版

#### 在 create-react-app 中使用

参考[react-vant-cra](https://github.com/3lang3/react-vant-template/tree/main/next/cra)

#### 在 umijs 使用

参考[react-vant-umi](https://github.com/3lang3/react-vant-template/tree/main/next/umijs)

#### 在 nextjs 使用

参考[react-vant-nextjs](https://github.com/3lang3/react-vant-template/tree/main/next/nextjs)

#### 在 remix 使用

参考[react-vant-remix](https://github.com/3lang3/react-vant-template/tree/main/next/remix)

#### 在 astro 使用

参考[react-vant-astro](https://github.com/3lang3/react-vant-template/tree/main/next/astro)


#### vite 集成

参考[react-vant-vite](https://github.com/3lang3/react-vant-template/tree/main/next/vite)

### 手动的按需加载(不推荐)

如果你的环境不支持 Tree Shaking，那么你可以手动引入部分组件：

```js
import Button from 'react-vant/es/button';
```

需要注意的是，在手动按需加载时，你还需要在入口文件中引入 global 文件来加载 react-vant 的全局性逻辑和样式：

```js
import 'react-vant/es/styles';
```

当然，如果你觉得上面的写法过于繁琐，你也可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行自动语法转换。可以在 .babelrc 中这样配置：

> 即便你使用了 babel-plugin-import，你依然需要在**入口文件**中手动引入 `react-vant/es/styles` 文件。

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'react-vant',
        libraryDirectory: 'es',
        style: false,
      },
    ],
  ],
};
```

不难发现，手动按需加载是非常难以维护的，特别是在你的项目中存在多个入口文件时。所以除非你对打包构建的过程和 react-vant 本身都有足够的了解，否则我们非常不推荐这样手动处理。
