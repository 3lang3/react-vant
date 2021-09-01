# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

```js
import { ActionSheet } from 'react-vant';
```

## 代码演示

### 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```jsx
const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={() => setVisible(false)} actions={actions} />
    </>
  );
};
```

### 展示取消按钮

设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `onCancel` 事件。

```jsx
const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="取消"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

```jsx
const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '描述信息' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        description="这是一段描述信息"
        cancelText="取消"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色

```jsx
const actions = [
  { name: '选项一', color: '#ee0a24' },
  { name: '选项二', disabled: true },
  { loading: true },
];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="取消"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### 自定义面板

通过插槽可以自定义面板的展示内容，同时可以使用`title`属性展示标题栏

```jsx
export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet title="自定义内容" visible={visible} onCancel={() => setVisible(false)}>
        <div>自定义内容</div>
      </ActionSheet>
    </>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示动作面板 | _boolean_ | `false` |
| actions | 面板选项列表 | _Action[]_ | `[]` |
| title | 顶部标题 | _ReactNode_ | - |
| cancelText | 取消按钮 | _ReactNode_ | - |
| description | 选项上方的描述信息 | _ReactNode_ | - |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIcon | 关闭[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `cross` |
| duration | 动画时长，单位毫秒 | _number \| string_ | `300` |
| round | 是否显示圆角 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| closeOnClickAction | 是否在点击选项后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型             |
| --------- | ------------------------ | ---------------- |
| name      | 标题                     | _string_         |
| subname   | 二级标题                 | _string_         |
| color     | 选项文字颜色             | _string_         |
| className | 为对应列添加额外的 class | _string_         |
| style     | 为对应列添加额外的 style | _CSSProperties_  |
| loading   | 是否为加载状态           | _boolean_        |
| disabled  | 是否为禁用状态           | _boolean_        |
| callback  | 点击时触发的回调函数     | _action: Action_ |

### Events

| 事件名         | 说明                                     | 回调参数                        |
| -------------- | ---------------------------------------- | ------------------------------- |
| onSelect       | 点击选项时触发，禁用或加载状态下不会触发 | _action: Action, index: number_ |
| onCancel       | 点击取消按钮时触发                       | -                               |
| onOpen         | 打开面板时触发                           | -                               |
| onClose        | 关闭面板时触发                           | -                               |
| onOpened       | 打开面板且动画结束后触发                 | -                               |
| onClosed       | 关闭面板且动画结束后触发                 | -                               |
| onClickOverlay | 点击遮罩层时触发                         | _event: MouseEvent_             |
