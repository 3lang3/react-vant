### 高清适配 (beta)

在部分项目中，你可能希望使用 2 倍大小的样式文件，react-vant 为了降低你的接入成本，内置了一套经过预处理的 2 倍大小的代码，放置在 2x 子目录下。

你可以把项目中对 react-vant 的 import 替换为 react-vant/2x，这样加载的就是 2 倍大小版本的组件了，例如：

```diff
- import { Button } from 'react-vant';
// ⬇️
+ import { Button } from 'react-vant/2x';
```

如果你觉得每次引入都要额外加个 2x 太麻烦，可以考虑在 webpack/vite 中配置一个从 react-vant 到 react-vant/2x 的别名，具体的配置方法请参考 [webpack](https://webpack.js.org/configuration/resolve/#resolvealias)/[vite](https://vitejs.dev/config/#resolve-alias) 文档。
