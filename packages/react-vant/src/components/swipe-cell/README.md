# SwipeCell 滑动单元格

## 介绍

可以左右滑动来展示操作按钮的单元格组件。

## 引入

```js
import { SwipeCell } from 'react-vant';
```

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `leftAction` 和 `rightRight` 两个属性，用于定义两侧滑动区域的内容。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { SwipeCell, Button, Cell, Toast } from 'react-vant';

export default () => {
  return (
    <SwipeCell
      onOpen={() => Toast.info('打开')}
      onClose={() => Toast.info('关闭')}
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          删除
        </Button>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
```

### 事件监听

```jsx
/**
 * title: 事件监听
 */
import React from 'react';
import { SwipeCell, Button, Cell } from 'react-vant';

export default () => {
  return (
    <SwipeCell
      leftAction={
        <Button square type="primary">
          选择
        </Button>
      }
      rightAction={
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```jsx
/**
 * title: 自定义内容
 */
import React from 'react';
import { SwipeCell, Flex, Button, Image, Typography } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <SwipeCell
      rightAction={
        <Button style={{ height: '100%' }} square type="danger">
          删除
        </Button>
      }
    >
      <Flex className="demo-product-card" align="stretch">
        <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-product-card__img" />
        <Flex direction="column" justify="between" className="demo-product-card__content">
          <div>
            <Typography.Title level={5}>商品标题</Typography.Title>
            <Typography.Text type="secondary">这里是商品描述</Typography.Text>
          </div>
          <Flex justify="between" align="center">
            <Typography.Text strong size="lg">
              ¥2.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </SwipeCell>
  );
};
```

### 异步关闭

通过传入 `beforeClose` 回调函数，可以自定义两侧滑动内容关闭时的行为。

```jsx
/**
 * title: 异步关闭
 */
import React from 'react';
import { SwipeCell, Button, Cell, Dialog } from 'react-vant';

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return (
        new Promise() <
        boolean >
        ((resolve) => {
          Dialog.confirm({
            title: '确定删除吗？',
          }).then(resolve);
        })
      );
    default:
      return true;
  }
};

export default () => {
  return (
    <SwipeCell
      beforeClose={beforeClose}
      leftAction={
        <Button square type="primary">
          选择
        </Button>
      }
      rightAction={
        <Button square type="danger">
          删除
        </Button>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
```

### 外部调用

通过 `ref` 获取 SwipeCell 实例的类型定义。

<code title="外部调用" src="./demo/ref.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在事件参数中获取到 | _number \| string_ | `''` |
| leftWidth | 指定左侧滑动区域宽度，单位为 `px` | _number \| string_ | `auto` |
| rightWidth | 指定右侧滑动区域宽度，单位为 `px` | _number \| string_ | `auto` |
| leftAction | 左侧滑动区域的内容 | _ReactNode_ | -- |
| rightAction | 右侧滑动区域的内容 | _ReactNode_ | -- |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | 是否禁用滑动 | _boolean_ | `false` |
| stopPropagation | 是否阻止滑动事件冒泡 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击时触发 | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| onOpen | 打开时触发 | _{ name: string \| number, position: 'left' \| 'right' }_ |
| onClose | 关闭时触发 | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名   | 说明             | 类型                                       |
| -------- | ---------------- | ------------------------------------------ |
| name     | 标识符           | _string \| number_                         |
| position | 关闭时的点击位置 | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法。

| 方法名 | 说明             | 参数                      | 返回值 |
| ------ | ---------------- | ------------------------- | ------ |
| open   | 打开单元格侧边栏 | position: `left \| right` | -      |
| close  | 收起单元格侧边栏 | -                         | -      |
