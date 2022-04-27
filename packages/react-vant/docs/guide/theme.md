# 定制主题

### 废弃提示

本文档已废弃，React Vant 提供了更方便的 [ConfigProvider](#/zh-CN/config-provider) 全局配置组件进行主题配置。基于 Less 变量进行定制的方式**将在下个大版本废弃**。

### 介绍

react-vant 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法。

### 样式变量

react-vant 使用了 [Less](http://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/youzan/vant/blob/dev/src/style/var.less)。

```less
// Component Colors
@text-color: #333333;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f7f8fa;
@background-color-light: #fafafa;
```

## 定制方法

### 步骤一 引入样式源文件

定制主题时，需要引入组件对应的 Less 样式文件，支持按需引入和手动引入两种方式。

#### 按需引入样式（推荐）

在 babel.config.js 中配置按需引入样式源文件，注意 babel6 不支持按需引入样式，请手动引入样式。

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'react-vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`,
      },
      'react-vant',
    ],
  ],
};
```

### 步骤二 修改样式变量

使用 Less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                'text-color': '#111',
                'border-color': '#eee',
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "your-less-file-path.less";`,
              },
            },
          },
        },
      ],
    },
  ],
};
```
