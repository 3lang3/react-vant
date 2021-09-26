# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

```js
import { Tabbar } from 'react-vant';
```

## 代码演示

### 基础用法

`value` 默认绑定选中标签的索引值，通过修改 `value` 即可切换选中的标签。

```jsx
import { useState } from 'react';
import { Tabbar } from 'react-vant';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Tabbar value={active} onChange={setActive}>
      <Tabbar.Item icon="home-o">标签</Tabbar.Item>
      <Tabbar.Item icon="search">标签</Tabbar.Item>
      <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
      <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
    </Tabbar>
  );
};
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`value` 的值为当前标签的 `name`。

```jsx
<Tabbar
  value={name}
  onChange={(v) => {
    setName(v as string);
  }}
>
  <Tabbar.Item name="home" icon="home-o">
    标签
  </Tabbar.Item>
  <Tabbar.Item name="search" icon="search">
    标签
  </Tabbar.Item>
  <Tabbar.Item name="firends" icon="friends-o">
    标签
  </Tabbar.Item>
  <Tabbar.Item name="setting" icon="setting-o">
    标签
  </Tabbar.Item>
</Tabbar>
```

### 徽标提示

通过 `badge` 属性，可以设置图标相应的徽标内容。

```jsx
<Tabbar>
  <Tabbar.Item icon="home-o">标签</Tabbar.Item>
  <Tabbar.Item badge={{ dot: true }} icon="search">
    标签
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 5 }} icon="friends-o">
    标签
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 20 }} icon="setting-o">
    标签
  </Tabbar.Item>
</Tabbar>
```

### 自定义图标

通过 `icon` 属性自定义图标。

```jsx
const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

<Tabbar>
  <Tabbar.Item icon={(ac) => <img alt="" src={ac ? icon.active : icon.inactive} />}>
    标签
  </Tabbar.Item>
  <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
  <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
</Tabbar>;
```

### 自定义颜色

通过 `activeColor` 属性设置选中标签的颜色，通过 `inactiveColor` 属性设置未选中标签的颜色。

```jsx
<Tabbar activeColor="#f44336" inactiveColor="#000">
  <Tabbar.Item icon="home-o">标签</Tabbar.Item>
  <Tabbar.Item icon="search">标签</Tabbar.Item>
  <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
  <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
</Tabbar>
```

### 监听切换事件

通过 `onChange` 事件来监听选中标签的变化。

```jsx
<Tabbar onChange={(v) => Toast.info(`标签${+v + 1}`)}>
  <Tabbar.Item icon="home-o">标签</Tabbar.Item>
  <Tabbar.Item icon="search">标签</Tabbar.Item>
  <Tabbar.Item icon="friends-o">标签</Tabbar.Item>
  <Tabbar.Item icon="setting-o">标签</Tabbar.Item>
</Tabbar>
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中标签的名称或索引值 | _number \| string_ | - |
| defaultValue | 默认选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number \| string_ | `1` |
| activeColor | 选中标签的颜色 | _string_ | `#1989fa` |
| inactiveColor | 未选中标签的颜色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)，设置 fixed 时默认开启 | _boolean_ | `false` |

### Tabbar Events

| 事件名   | 说明           | 回调参数                   |
| -------- | -------------- | -------------------------- |
| onChange | 切换标签时触发 | _active: number \| string_ |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | 图标 | _string \| (active: boolean) => React.ReactNode_ | - |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [classPrefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| badge | 图标右上角徽标的内容 | _BadgeProps_ | - |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-tabbar-height | _50px_ | - |
| --rv-tabbar-z-index | _1_ | - |
| --rv-tabbar-background-color | _var(--rv-white)_ | - |
| --rv-tabbar-item-font-size | _var(--rv-font-size-sm)_ | - |
| --rv-tabbar-item-text-color | _var(--rv-gray-7)_ | - |
| --rv-tabbar-item-active-color | _var(--rv-primary-color)_ | - |
| --rv-tabbar-item-active-background-color | _var(--rv-white)_ | - |
| --rv-tabbar-item-line-height | _1_ | - |
| --rv-tabbar-item-icon-size | _22px_ | - |
| --rv-tabbar-item-icon-margin-bottom | _var(--rv-padding-base)_ | - |
