# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```js
import { Button } from 'react-vant';
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger` 五种类型，默认为 `default`。

```jsx
<Button type="primary">主要按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="default">默认按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
<Button plain type="primary">朴素按钮</Button>
<Button plain type="primary">朴素按钮</Button>
```
