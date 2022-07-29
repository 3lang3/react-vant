# 🚀 升级到 v3

### 介绍

本文档将帮助你从 React Vant `1.x` 和 `v2-alpha` 升级到 `3.x` 版本。

### 升级前准备

- **备份好项目代码，建议新拉分支进行升级操作**

### 架构调整

`v2` 起支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+、vite 和 rollup）都支持 Tree Shaking，所以**绝大多数情况下你无需做额外的配置**即可拥有较小的包体积。

> 建议移除项目中 `react-vant` 相关的按需加载代码，例如 `babel-plugin-import` 插件方式、手动按需引入组件样式方式和导入所有组件样式方式。

### 新增组件

- `Space` [间距](/components/space)
- `Card` [卡片](/components/card)
- `FloatingBall` [悬浮球](/components/floating-ball)
- `Input` [输入框](/components/input)
- `Selector` [选择组](/components/selector)
- `Swiper` [轮播](/components/swiper)
- `WaterMask` [水印组件](/components/water-mark)

### 不兼容的变化

`Form.Item` 不再支持 `Field` 组件，请使用 `Input` 代替

```diff
<Form.Item label="输入框">
-  <Field />
+  <Input />
<Form.Item>

<Form.Item label="文本框">
-  <Field type="textarea" />
+  <Input.TextArea />
<Form.Item>
```
#### 废弃组件

- 移除了 `Swipe` 组件，现由 `Swiper` 代替
- 移除了 `Icon` 组件，现由 `@react-vant/icons` 包引入。
- 原 `Card` 组件改名为 `ProductCard`

#### API 调整

- 移除 `readonly` 属性，使用 `readOnly` 替代
- 移除 `maxLength` 属性，使用 `maxLength` 代替
- 移除 `autofocus` 属性，使用 `autoFocus` 代替
- `Steps` 图标尺寸调整
- `Stepper` 圆角风格按钮颜色调整为主题色
- `Search` 移除 `inputAlign` 属性，使用 `align` 代替
- `Typography` 调整 `ellipsis` 属性，现在支持更多形式配置
- `Typography` 移除 `--rv-typography-line-height` css 变量，同时新增部分变量

#### 组件重构

- `List` 组件:
  - 调整 `errorText` 类型
  - 移除 `loading` `error` `immediateCheck` `autoCheck` 属性，现由内部维护。
  - `onLoad` 方法新增 `isRetry` 参数，用来区分请求出错后用户点击底部重试场景。

- `Uploader` 组件:
  - 新增 `upload` 属性，解决上传以及动态状态问题
  - 新增 `statusTextRender` 属性，支持上传是自定义文案
  - 新增 `deleteRender` 属性，支持自定义上传按钮视图
  - 调整 `value` 类型，新增 `defaultValue` 属性 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 调整 `onChange` 类型
  - 调整 `onDelete` 类型
  - 调整 `beforeRead` 类型
  - 移除 `beforeDelete` 属性，现可通过 `onDelete` 实现
  - 移除 `afterRead` 属性，现可通过 `upload` 实现
  
- `Tabs` 组件:
  - 调整 `type` 属性，新增 `capsule` `jumbo` 类型
  - 调整 `color` 属性定义，适配 `type` 属性
  - 调整 `onChange` 类型
  - 调整 `onClickTab` 类型

- `Tabs.TabPane`:
  - 调整 `title` 类型
  - 移除 `renderTitle` 属性，现可通过 `title` 实现
  - 调整 `badge` 属性
  - 移除 `dot` `showZeroBadge` 属性，现可通过 `badge` 实现

- `Field` 组件:
  - 现在内部由 `Input` 实现
  - 移除 `autosize` 属性，使用 `autoSize` 替代
  - 移除 `inputAlign` 属性，使用 `align` 代替
  - 新增 `controlAlign` 属性，控制右侧内容区域对齐
  - 调整 `showWordLimit` 类型，现支持自定义输出
  - 新增 `prefix` 属性，自定义输入框前置内容
  - 移除 `button` 属性，使用 `suffix` 代替

- `Form` 组件:
  - 移除 `inputAlign` 属性，使用 `controlAlign` 代替
  - 新增 `Form.Subscribe`
  - 新增 `Form.useWatch`
  
- `Form.Item` 组件:
  - `Form.Item` 移除 `inputAlign` 属性，使用 `controlAlign` 代替
  - `Form.Item` 移除 `customField` 属性
  - `Form.Item` 调整 `onClick` 属性，现第二个参数为子组件 `ref` 的实例

- `Cascader` 组件:
  - 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 调整 `title` 类型
  - 调整 `value`，`defaultValue` 类型
  - 调整 `onClickTab` 类型
  - 调整 `onChange` 类型
  - 调整 `onFinish` 类型

- `Picker` 组件:
  - 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 调整 `value` 类型
  - 调整 `columns` 类型
  - 移除 `columnsPlaceholder` 属性，现继承 `Picker` 的 `placeholder` 属性
  - 调整 `ref` 类型(实例方法调整)
  - 调整 `onChange` 类型
  - 调整 `onConfirm` 类型
  - 调整 `children` 类型，仅支持 `Function`
  - 新增 `defaultValue` 类型同 `value`
  - 新增 `popup` 属性
  - 新增 `visible` 属性，需开启 `popup` 生效


- `Area` 组件:
  - 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 受 `Picker` 变更影响
  - 移除 `isOverseaCode` 属性
  - 移除 `columnsPlaceholder` 属性，现继承 `Picker` 的 `placeholder` 属性
  - 移除原实例方法，现继承 `Picker` 实例方法
  - `value` 类型调整
  - 新增 `defaultValue` 类型同 `value`
  - 调整 `onChange` 类型
  - 调整 `onConfirm` 类型
  - 调整 `children` 类型，仅支持 `Function`

- `Calendar` 组件:
  - 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 将 `defaultDate` 改为 `defaultValue`
  - 新增 `Picker` 实例方法
  - 调整 `children` 类型，仅支持 `Function`

- `DatetimePicker` 组件:
  - 支持 [受控](https://reactjs.org/docs/forms.html#controlled-components)和[非受控模式](https://reactjs.org/docs/uncontrolled-components.html)
  - 新增 `defaultValue`
  - 新增 `Picker` 实例方法
  - 调整 `children` 类型，仅支持 `Function`

- `Icon` 组件:
  - 属性类型从 `string|ReactNode` 调准为 `ReactNode`
  - `iconPrefix` `iconClass` 属性移除

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
