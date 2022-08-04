# 浏览器适配

`react-vant` 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 进行转换。

下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportUnit: "vw",
      fontViewportUnit: "vw",
    },
  },
};
```

由于 `react-vant` 是按照 `375px` 来开发的， 如果你的设计稿是 `750px` 的话，则需要调整配置（其他尺寸同理）

```js
// postcss.config.js
const px2viewport = require('postcss-px-to-viewport');

module.exports = () => {
  return {
    plugins: [
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 375,
        exclude: [/^(?!.*node_modules\/react-vant)/]
      }),
      px2viewport({
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        viewportWidth: 750,
        exclude: [/node_modules\/react-vant/i]
      })
    ]
  }
}
```

- **[postcss config demo](https://github.com/3lang3/react-vant-template/blob/main/next/vite/postcss.config.js)**

> Tips: 在配置 postcss-loader 时，应避免 ignore `node_modules` 目录，否则将导致 `react-vant` 样式无法被编译。
