# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { Grid } from 'react-vant';
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```jsx
<Grid>
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
</Grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `columnNum` 自定义列数。

```jsx
<Grid columnNum={3}>
  {Array.from({ length: 6 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```jsx
<Grid border={false} columnNum={3}>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </Grid.Item>
</Grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```jsx
<Grid square>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```jsx
<Grid gutter={10}>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```jsx
<Grid direction="horizontal" columnNum={3}>
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
</Grid>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```jsx
<Grid columnNum={2}>
  <Grid.Item icon="home-o" text="文字" dot />
  <Grid.Item icon="search" text="文字" badge="99+" />
</Grid>
```

## API

### Grid Props

| 参数      | 说明                                      | 类型                  | 默认值  |
| --------- | ----------------------------------------- | --------------------- | ------- |
| columnNum | 列数                                      | _number_              | `4`     |
| iconSize  | 图标大小，默认单位为`px`                  | _number \| string_    | `28px`  |
| gutter    | 格子之间的间距，默认单位为`px`            | _number_              | `0`     |
| border    | 是否显示边框                              | _boolean_             | `true`  |
| center    | 是否将格子内容居中显示                    | _boolean_             | `true`  |
| square    | 是否将格子固定为正方形                    | _boolean_             | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | `vertical`            |
| reverse   | 是否调换图标和文本的位置                  | _boolean_             | `false` |
| className | 类名                                      | _string_              | -       |
| style     | style                                     | _React.CSSProperties_ | -       |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | [图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [classPrefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| iconColor | 图标颜色，等同于 Icon 组件的 [color 属性](#/zh-CN/icon#props) | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| className | 类名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |
| contentClassName | 内容类名 | _string_ | - |
| contentStyle | 内容 style | _React.CSSProperties_ | - |

### GridItem Events

| 事件名  | 说明           | 回调参数            |
| ------- | -------------- | ------------------- |
| onClick | 点击格子时触发 | _event: MouseEvent_ |
