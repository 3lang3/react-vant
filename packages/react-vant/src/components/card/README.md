---
simulator:
  compact: false
---

# Card 卡片

## 介绍

最基础的卡片容器，可承载文字、列表、图片、段落。

```js
import { Card } from 'react-vant';
```

## 代码演示

### 基础用法

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Card } from 'react-vant';
export default () => {
  return (
    <Card>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>
  );
};
```

### 圆角卡片

`round`属性开启圆角样式

```jsx
/**
 * title: 圆角卡片
 */
import React from 'react';
import { Card } from 'react-vant';
export default () => {
  return (
    <Card round>
      <Card.Header>圆角卡片</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>
  );
};
```

### 底部内容

通过 `Card.Footer` 设置底部内容。

```jsx
/**
 * title: 底部内容
 */
import React from 'react';
import { Card, Button } from 'react-vant';

export default () => {
  return (
    <Card round>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>
        React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
      </Card.Body>
      <Card.Footer>
        <Button type="primary" round block size="small">
          查看更多
        </Button>
      </Card.Footer>
    </Card>
  );
};
```

### 封面展示

使用 `Card.Cover` 可以方便的展示封面，随意调整位置

<code title="封面展示" src="./demo/cover.tsx" />

### 展示边框

`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框

```jsx
/**
 * title: 展示边框
 */
import React from 'react';
import { Card, Button } from 'react-vant';

export default () => {
  return (
    <Card round>
      <Card.Header border>卡片标题</Card.Header>
      <Card.Body
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        卡片内容区域
      </Card.Body>
      <Card.Footer border>
        <Button type="primary" round block size="mini">
          查看更多
        </Button>
      </Card.Footer>
    </Card>
  );
};
```

### 自定义卡片样式

```jsx
/**
 * title: 自定义卡片样式
 */
import React from 'react';
import { Card } from 'react-vant';

export default () => {
  return (
    <Card round style={{ backgroundColor: '#ccc', color: 'white' }}>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        卡片内容区域
      </Card.Body>
      <Card.Footer>
        <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
      </Card.Footer>
    </Card>
  );
};
```

## API

### Card Props

| 参数      | 说明         | 类型                      | 默认值  |
| --------- | ------------ | ------------------------- | ------- |
| round     | 开启圆角     | _boolean_                 | `false` |
| border    | 显示边框     | _boolean_                 | `false` |
| className | css 类名     | _string_                  | -       |
| style     | css 样式     | _CSSProperties_           | -       |
| onClick   | 卡片点击事件 | _(e: MouseEvent) => void_ | -       |

### Card.Header Props

| 参数      | 说明           | 类型                      | 默认值 |
| --------- | -------------- | ------------------------- | ------ |
| extra     | 右侧内容       | _ReactNode_               | -      |
| border    | 是否显示下边框 | _boolean_                 | -      |
| className | css 类名       | _string_                  | -      |
| style     | css 样式       | _CSSProperties_           | -      |
| onClick   | 点击事件       | _(e: MouseEvent) => void_ | -      |

### Card.Body Props

| 参数      | 说明     | 类型                      | 默认值 |
| --------- | -------- | ------------------------- | ------ |
| className | css 类名 | _string_                  | -      |
| style     | css 样式 | _CSSProperties_           | -      |
| onClick   | 点击事件 | _(e: MouseEvent) => void_ | -      |

### Card.Footer Props

| 参数      | 说明           | 类型                      | 默认值 |
| --------- | -------------- | ------------------------- | ------ |
| border    | 是否显示下边框 | _boolean_                 | -      |
| compact   | 不需要内边距   | _boolean_                 | -      |
| className | css 类名       | _string_                  | -      |
| style     | css 样式       | _CSSProperties_           | -      |
| onClick   | 点击事件       | _(e: MouseEvent) => void_ | -      |

### Card.Cover Props

| 参数      | 说明     | 类型                      | 默认值 |
| --------- | -------- | ------------------------- | ------ |
| className | css 类名 | _string_                  | -      |
| style     | css 样式 | _CSSProperties_           | -      |
| onClick   | 点击事件 | _(e: MouseEvent) => void_ | -      |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-card-size | _var(--rv-font-size-md)_ | - |
| --rv-card-color | _var(--rv-text-color)_ | - |
| --rv-card-background-color | _var(--rv-white)_ | - |
| --rv-card-radius | _var(--rv-border-radius-lg)_ | - |
| --rv-card-body-padding | _0 var(--rv-padding-md)_ | - |
| --rv-card-header-padding | _var(--rv-padding-sm) var(--rv-padding-md)_ | - |
| --rv-card-header-size | _var(--rv-font-size-lg)_ | - |
| --rv-card-header-color | _var(--rv-black)_ | - |
| --rv-card-footer-padding | _var(--rv-padding-sm) var(--rv-padding-md)_ | - |
