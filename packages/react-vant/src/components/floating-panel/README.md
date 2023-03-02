# FloatingPanel 浮动面板

## 介绍

可以上下拖动的浮动面板。

## 引入

```js
import { FloatingPanel } from 'react-vant';
```

## 代码演示

### 基础用法

<code title="基础用法" src="./demo/base.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| anchors | 可拖拽至哪些高度，单位为 `px`	 | _number[]_ | `[100]` |
| onHeightChange | 面板高度变化时触发 | _(height: number) => void_ | - |

### 方法

通过 `ref` 可以获取到 `FloatingPanel` 实例并调用实例方法，详见[组件实例方法](/guide/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                         | 类型         |
| ------ | ---------------------------- | ------------ |
| moveTo   | 移动到指定高度                  | _(height: number) => void_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
|--rv-floating-panel-z-index | 1001 | 面板堆叠显示优先级 |
|--rv-floating-panel-background-color | var(--rv-white) | - |
|--rv-floating-panel-header-background-color | var(--rv-white) | - |
|--rv-floating-panel-header-padding | 8px | - |
|--rv-floating-panel-thumb-background-color | var(--rv-gray-5) | 滑块颜色 |
|--rv-floating-panel-thumb-width | 20px | 滑块宽度 |
|--rv-floating-panel-thumb-height | 4px | 滑块高度 |
