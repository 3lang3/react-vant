# 命令

react-react-vant-cli 内置了一系列的命令，可以将命令添加到 npm script 中使用

```json
// package.json
{
  "scripts": {
    "dev": "react-vant-cli dev",
    "test": "react-vant-cli test",
    "lint": "react-vant-cli lint",
    "release": "react-vant-cli release",
    "build-site": "react-vant-cli build-site"
  }
}
```

也可以通过 npm 自带的 [npx](https://github.com/npm/cli) 直接执行某个命令:

```bash
npx react-vant-cli dev
```

## dev

运行本地开发环境。

运行 dev 命令时，Vant Cli 会通过 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 启动一个本地服务器，用于在开发过程中对文档和示例进行预览。

### build

构建组件库。

运行 build 命令会在 `es` 和 `lib` 目录下生成可用于生产环境的组件代码
