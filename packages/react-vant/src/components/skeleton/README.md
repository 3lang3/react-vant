---
simulator:
  style:
    background: '#fff'
---

# Skeleton 骨架屏

## 介绍

用于在内容加载过程中展示一组占位图形。

## 引入

```js
import { Skeleton } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Skeleton } from 'react-vant';

export default () => {
  return <Skeleton title />;
};
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

```jsx
/**
 * title: 显示头像
 */
import React from 'react';
import { Skeleton } from 'react-vant';

export default () => {
  return <Skeleton avatar />;
};
```

### 自定义高度

通过 `rowHeight` 属性显示头像占位图。

```jsx
/**
 * title: 自定义高度
 */
import React from 'react';
import { Skeleton } from 'react-vant';

export default () => {
  return <Skeleton rowHeight={10} />;
};
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

```jsx
/**
 * title: 基础用法
 */
import React, { useState } from 'react';
import { Flex, Typography, Switch, Skeleton } from 'react-vant';
import './demo/style.less';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="demo-skeleton">
      <Switch checked={loading} onChange={setLoading} size={24} />
      <Skeleton avatar loading={loading}>
        <Flex className="demo-preview">
          <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
          <div className="demo-content">
            <Typography.Title>关于 Vant</Typography.Title>
            <Typography.Text type="secondary">
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </Typography.Text>
          </div>
        </Flex>
      </Skeleton>
    </div>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | _number \| string_ | `3` |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | _number \| string \|<br>(number \| string)[]_ | `100%` |
| rowHeight | 段落占位图高度，可传数组来设置每一行的高度 | _number \| string \|<br>(number \| string)[]_ | - |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| loading | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_ | `true` |
| animate | 是否开启动画 | _boolean_ | `true` |
| round | 是否将标题和段落显示为圆角风格 | _boolean_ | `false` |
| titleWidth | 标题占位图宽度 | _number \| string_ | `40%` |
| avatarSize | 头像占位图大小 | _number \| string_ | `32px` |
| avatarShape | 头像占位图形状，可选值为 `square` | _string_ | `round` |
| className | 类名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称                                  | 默认值                   | 描述 |
| ------------------------------------- | ------------------------ | ---- |
| --rv-skeleton-row-height              | _16px_                   | -    |
| --rv-skeleton-row-background-color    | _var(--rv-active-color)_ | -    |
| --rv-skeleton-row-margin-top          | _var(--rv-padding-sm)_   | -    |
| --rv-skeleton-title-width             | _40%_                    | -    |
| --rv-skeleton-avatar-size             | _32px_                   | -    |
| --rv-skeleton-avatar-background-color | _var(--rv-active-color)_ | -    |
| --rv-skeleton-animation-duration      | _1.2s_                   | -    |
