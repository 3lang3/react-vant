# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 函数调用

Notify 是一个函数，调用后会直接在页面中弹出相应的消息提示。

```js
import { Notify } from 'reactvant';

Notify.show('通知内容');
```

### 组件调用

通过组件调用 Notify 时，可以通过下面的方式进行注册：

```js
import { useState } from 'react';
import { Notify, Flex, Icon, Button } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>打开Notify</Button>
      <Notify visible={visible} type="success">
        <Flex style={{ width: '100%' }} align="center" justify="between">
          <div />
          <div>
            <Icon name="bell" style={{ marginRight: 4 }} />
            <span>通知内容</span>
          </div>
          <Icon name="close" onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
```

## 代码演示

### 基础用法

```jsx
Notify.show('通知内容');
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```js
// 主要通知
Notify.show({ type: 'primary', message: '通知内容' });

// 成功通知
Notify.show({ type: 'success', message: '通知内容' });

// 危险通知
Notify.show({ type: 'danger', message: '通知内容' });

// 警告通知
Notify.show({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```jsx
Notify.show({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify.show({
  message: '自定义时长',
  duration: 1000,
});
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notify | 展示提示 | `options \| message` | notify 实例 |
| Notify.clear | 关闭提示 | - | `void` |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `options` | `void` |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string\|React.ReactNode_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number_ | `3000` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _string \| Array \| object_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `false` |
| onClick | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |
