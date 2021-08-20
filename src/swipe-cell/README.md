# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

```js
import { SwipeCell } from 'react-vant';
```

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `leftAction` 和 `rightRight` 两个属性，用于定义两侧滑动区域的内容。

```jsx
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
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```jsx
<SwipeCell
  rightAction={
    <Button style={{ height: '100%' }} square type="danger">
      删除
    </Button>
  }
>
  <Flex className="demo-card" align="stretch">
    <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-card__img" />
    <Flex direction="column" justify="between" className="demo-card__content">
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

<style>
.demo-card {
  padding: @padding-xs @padding-md;
  background-color: @white;

  &__img {
    width: 88px;
    height: 88px;
    margin-right: @padding-xs;
  }

  &__content {
    flex: 1;
  }
}
</style>
```

### 异步关闭

通过传入 `beforeClose` 回调函数，可以自定义两侧滑动内容关闭时的行为。

```jsx
export default () => {
  const beforeClose = ({ position }) => {
    switch (position) {
      case 'left':
      case 'cell':
      case 'outside':
        return true;
      case 'right':
        return new Promise((resolve) => {
          Dialog.confirm({
            title: '确定删除吗？',
          }).then(resolve);
        });
    }
  };
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

```jsx
import { useRef } from 'react';
import { SwipeCell, Cell, Button, Flex } from 'react-vant';
import type { SwipeCellInstance } from 'react-vant';

export default () => {
  const swipeCellRef = useRef<SwipeCellInstance>();

  return (
    <>
      <SwipeCell
        ref={swipeCellRef}
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

      <Flex justify="around">
        <Button icon="arrow-left" onClick={() => swipeCellRef.current?.open('left')}>
          左滑打开
        </Button>
        <Button icon="arrow" onClick={() => swipeCellRef.current?.open('right')}>
          右滑打开
        </Button>
        <Button icon="cross" onClick={() => swipeCellRef.current?.close()}>
          关闭
        </Button>
      </Flex>
    </>
  );
};
```

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
