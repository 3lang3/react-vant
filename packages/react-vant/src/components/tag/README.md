# Tag 标签

## 引入

```js
import { Tag } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="primary 类型">
        <Tag type="primary">标签</Tag>
      </Cell>
      <Cell title="success 类型">
        <Tag type="success">标签</Tag>
      </Cell>
      <Cell title="danger  类型">
        <Tag type="danger">标签</Tag>
      </Cell>
      <Cell title="warning  类型">
        <Tag type="warning">标签</Tag>
      </Cell>
    </>
  );
};
```

### 样式风格

- 设置 `plain` 属性设置为空心样式。
- 通过 `round` 设置为圆角样式。
- 通过 `mark` 设置为标记样式(半圆角)。
- 添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `onClose` 事件，可以执行隐藏标签的逻辑。

```jsx
/**
 * title: 样式风格
 * card: true
 */
import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Cell title="空心样式">
        <Tag plain type="primary">
          标签
        </Tag>
      </Cell>
      <Cell title="圆角样式">
        <Tag round type="primary">
          标签
        </Tag>
      </Cell>
      <Cell title="标记样式">
        <Tag mark type="primary">
          标签
        </Tag>
      </Cell>
      <Cell title="可关闭标签">
        <Tag
          show={show}
          plain
          closeable
          size="medium"
          type="primary"
          onClose={() => setShow(false)}
        >
          标签
        </Tag>
      </Cell>
    </>
  );
};
```

### 标签大小

通过 `size` 属性调整标签大小。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="小号标签">
        <Tag type="primary">标签</Tag>
      </Cell>
      <Cell title="中号标签">
        <Tag size="medium" type="primary">
          标签
        </Tag>
      </Cell>
      <Cell title="大号标签">
        <Tag size="large" type="primary">
          标签
        </Tag>
      </Cell>
    </>
  );
};
```

### 自定义颜色

通过 `color` 和 `textColor` 属性设置标签颜色。

```jsx
/**
 * title: 基础用法
 * card: true
 */
import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="背景颜色">
        <Tag color="#7232dd">标签</Tag>
      </Cell>
      <Cell title="文字颜色">
        <Tag color="#ffe1e1" textColor="#ad0000">
          标签
        </Tag>
      </Cell>
      <Cell title="空心颜色">
        <Tag color="#7232dd" plain>
          标签
        </Tag>
      </Cell>
    </>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为 `large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| show | 是否展示标签 | _boolean_ | `true` |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| textColor | 文本颜色，优先级高于 `color` 属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |

### Events

| 事件名  | 说明           | 回调参数            |
| ------- | -------------- | ------------------- |
| onClick | 点击时触发     | _event: MouseEvent_ |
| onClose | 关闭标签时触发 | _event: MouseEvent_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-tag-padding | _0 var(--rv-padding-base)_ | - |
| --rv-tag-text-color | _var(--rv-white)_ | - |
| --rv-tag-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-tag-border-radius | _2px_ | - |
| --rv-tag-line-height | _16px_ | - |
| --rv-tag-medium-padding | _2px 6px_ | - |
| --rv-tag-large-padding | _var(--rv-padding-base) var(--rv-padding-xs)_ | - |
| --rv-tag-large-border-radius | _var(--rv-border-radius-md)_ | - |
| --rv-tag-large-font-size | _var(--rv-font-size-md)_ | - |
| --rv-tag-round-border-radius | _var(--rv-border-radius-max)_ | - |
| --rv-tag-danger-color | _var(--rv-danger-color)_ | - |
| --rv-tag-primary-color | _var(--rv-primary-color)_ | - |
| --rv-tag-success-color | _var(--rv-success-color)_ | - |
| --rv-tag-warning-color | _var(--rv-warning-color)_ | - |
| --rv-tag-default-color | _var(--rv-gray-6)_ | - |
| --rv-tag-plain-background-color | _var(--rv-white)_ | - |
