# 从 v1 升级

### 介绍

本文档提供了从 React Vant `1.x` 到 `2.x` 的升级指南。

### Breaking Change

#### 新增组件

- `Space`
- `Card`

#### 废弃组件

- 移除了 `Swipe` 组件
- 移除了 `Icon` 组件
- 原 `Card` 组件改名为 `ProductCard`

#### API 调整

- 组件 `icon` 属性类型从 `string|ReactNode` 调准为 `ReactNode`
- 组件 `iconPrefix` `iconClass` 属性移除

### 图标升级

在 `2.0` 中，我们引入了 svg 图标（[为何使用 svg 图标？](https://github.com/ant-design/ant-design/issues/10353)）。使用了字符串命名的图标 API 无法做到按需加载，这大大增加了打包产物的尺寸。在 2.0 中，我们调整了图标的使用 API 从而支持 tree shaking，减少默认包体积。

2.0 中采用按需引入的方式：

```diff
import { Button } from 'react-vant';

// tree-shaking supported
- import { Icon } from 'react-vant';
+ import { Arrow } from '@react-vant/icons';

const Demo = () => (
  <div>
-   <Icon type="arrow" />
+   <Arrow />
    <Button icon={<Arrow />} />
  </div>
);
```
