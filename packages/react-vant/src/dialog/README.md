# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 函数调用

Dialog 是一个函数，调用后会直接在页面中弹出相应的模态框。

```js
import { Dialog } from 'react-vant';
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```js
Dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### Promise 调用

Dialog 支持 promise

```js
try {
  await Dialog.confirm({
    title: '标题',
    message: '弹窗内容',
  });
  // after confirm do something
  console.log('confirm');
} catch (erorr) {
  // after cancel do something
}
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```js
Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗，该选项从 2.10.0 版本开始支持。

```jsx
Dialog.alert({
  title: '标题',
  message: '弹窗内容',
  theme: 'round-button',
});

Dialog.alert({
  message: '弹窗内容',
  theme: 'round-button',
});
```

### 自定义内容

通过 `children` 属性可以传入 `JSX`, 来自定义显示的内容。

```jsx
Dialog.alert({
  title: '标题',
  closeable: true,
  theme: 'round-button',
  children: (
    <div style={{ textAlign: 'center', margin: '16px' }}>
      代码是写出来给人看的，附带能在机器上运行
    </div>
  ),
});
```

### 异步关闭

通过 `onConfirm` 和 `onCancel` 属性返回`Promise`函数，在弹窗关闭前进行特定操作。

```jsx
const onConfirm = (action, done) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
      Toast.success({ message: '确认按钮异步' });
    }, 3000);
  });
};

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
  onConfirm,
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```js
const [show, setShow] = useState(false);
```

```jsx
<Dialog
  visible={show}
  title="标题"
  showCancelButton
  onCancel={() => setShow(false)}
  onConfirm={() => alert('confirm button click')}
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
</Dialog>
```

## API

### 方法

| 方法名         | 说明             | 参数      | 返回值            |
| -------------- | ---------------- | --------- | ----------------- |
| Dialog         | 弹窗组件         | `options` | `React.ReactNode` |
| Dialog.show    | 展示提示弹窗     | `options` | `Promise`         |
| Dialog.alert   | 展示消息提示弹窗 | `options` | `Promise`         |
| Dialog.confirm | 展示消息确认弹窗 | `options` | `Promise`         |

### Props

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _number \| string_ | `320px` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为`round` | _string_ | `default` |
| className | 自定义类名 | _any_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#ee0a24` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeable | 是否展示关闭图标 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| transition | 动画类名 [see](https://reactcommunity.org/react-transition-group/) | _string_ | - |
| onCancel | 点击取消按钮时触发 | _Function_ | - |
| onConfirm | 点击确认按钮时触发 | _Function_ | - |
| onClose | Dialog 关闭时的回调 | _Function_ | - |
| onClosed | Dialog 完全关闭时的回调 | _Function_ | - |
| teleport | 指定挂载的节点 | _HTMLElement \| () => HTMLElement_ | `body` |
| footer | 自定义底部按钮区域 | _ReactNode_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                      | 默认值                              | 描述 |
| ----------------------------------------- | ----------------------------------- | ---- |
| --rv-dialog-width                         | _320px_                             | -    |
| --rv-dialog-small-screen-width            | _90%_                               | -    |
| --rv-dialog-font-size                     | _var(--rv-font-size-lg)_            | -    |
| --rv-dialog-transition                    | _var(--rv-animation-duration-base)_ | -    |
| --rv-dialog-border-radius                 | _16px_                              | -    |
| --rv-dialog-background-color              | _var(--rv-white)_                   | -    |
| --rv-dialog-header-font-weight            | _var(--rv-font-weight-bold)_        | -    |
| --rv-dialog-header-line-height            | _24px_                              | -    |
| --rv-dialog-header-padding-top            | _26px_                              | -    |
| --rv-dialog-header-isolated-padding       | _var(--rv-padding-lg) 0_            | -    |
| --rv-dialog-message-padding               | _var(--rv-padding-lg)_              | -    |
| --rv-dialog-message-font-size             | _var(--rv-font-size-md)_            | -    |
| --rv-dialog-message-line-height           | _var(--rv-line-height-md)_          | -    |
| --rv-dialog-message-max-height            | _60vh_                              | -    |
| --rv-dialog-has-title-message-text-color  | _var(--rv-gray-7)_                  | -    |
| --rv-dialog-has-title-message-padding-top | _var(--rv-padding-xs)_              | -    |
| --rv-dialog-button-height                 | _48px_                              | -    |
| --rv-dialog-round-button-height           | _36px_                              | -    |
| --rv-dialog-confirm-button-text-color     | _var(--rv-danger-color)_            | -    |
