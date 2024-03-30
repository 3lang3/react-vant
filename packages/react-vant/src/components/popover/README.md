---
simulator:
  compact: false
---

# Popover 气泡弹出框

## 介绍

弹出式的气泡菜单。

## 引入

```js
import { Popover } from 'react-vant';
```

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 属性的内容进行定位。

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import { Popover, Space, Toast, Button } from 'react-vant';

const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];

export default () => {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={actions}
        onSelect={select}
        reference={<Button type="primary">浅色风格</Button>}
      />
      <Popover
        actions={actions}
        theme="dark"
        onSelect={select}
        reference={<Button type="primary">深色风格</Button>}
      />
    </Space>
  );
};
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```tsx
/**
 * title: 弹出位置
 * compact: true
 */
import React, { useRef, useState } from 'react';
import { Toast, Popover, Popup, Picker, Cell } from 'react-vant';
import type { PopoverInstance, PopoverPlacement } from 'react-vant';

const popupActions = [{ text: '选项一' }, { text: '选项二' }];

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default () => {
  const popover = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <>
      <Cell title="选择弹出位置" onClick={() => setVisible(true)} isLink />
      <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '110px 0' }}>
          <Popover
            ref={popover}
            theme="dark"
            actions={popupActions}
            onSelect={select}
            placement={placement}
            reference={
              <div style={{ width: 60, height: 60, backgroundColor: '#3f45ff', borderRadius: 8 }} />
            }
          />
        </div>
        <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
      </Popup>
    </>
  );
};
```

`placement` 支持以下值：

```bash
top           # 顶部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left          # 左侧中间位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right         # 右侧中间位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom        # 底部中间位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

### 选项配置

- 在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标。
- 在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

<code title="选项配置" src="./demo/config.tsx" />

### 自定义内容

通过 children，可以在 Popover 内部放置任意内容。

<code title="自定义内容" src="./demo/custom.tsx" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 选项列表 | _Action[]_ | `[]` |
| placement | 弹出位置 | _string_ | `bottom` |
| theme | 主题风格，可选值为 `dark` | _string_ | `light` |
| trigger | 触发方式，可选值为 `manual` | _string_ | `click` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| visible | 受控的是否显示菜单 | _boolean_ | - |
| offset | 出现位置的偏移量 | _[number, number]_ | `[0, 8]` |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _CSSProperties_ | - |
| closeOnClickAction | 是否在点击选项后关闭 | _boolean_ | `true` |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| children | 自定义菜单内容 | _React.ReactNode_ | - |
| reference | 触发 Popover 显示的元素内容 | _React.ReactNode_ | - |
| teleport | 指定挂载的节点 | _Element\|() => Element_ | - |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型        |
| --------- | ------------------------ | ----------- |
| text      | 选项文字                 | _string_    |
| icon      | 文字左侧的图标           | _ReactNode_ |
| color     | 选项文字颜色             | _string_    |
| disabled  | 是否为禁用状态           | _boolean_   |
| className | 为对应选项添加额外的类名 | _string_    |

### Events

| 事件名         | 说明                     | 回调参数                        |
| -------------- | ------------------------ | ------------------------------- |
| onSelect       | 点击选项时触发           | _action: Action, index: number_ |
| onOpen         | 打开菜单时触发           | -                               |
| onClose        | 关闭菜单时触发           | -                               |
| onOpened       | 打开菜单且动画结束后触发 | -                               |
| onClosed       | 关闭菜单且动画结束后触发 | -                               |
| onClickOverlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### 方法

通过 ref 可以获取到 Popover 实例并调用实例方法。

| 方法名 | 说明         | 参数 | 返回值 |
| ------ | ------------ | ---- | ------ |
| show   | 显示 popover | -    | -      |
| hide   | 关闭 popover | -    | -      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --rv-popover-arrow-size | _6px_ | - |
| --rv-popover-border-radius | _var(--rv-border-radius-lg)_ | - |
| --rv-popover-action-width | _128px_ | - |
| --rv-popover-action-height | _44px_ | - |
| --rv-popover-action-font-size | _var(--rv-font-size-md)_ | - |
| --rv-popover-action-line-height | _var(--rv-line-height-md)_ | - |
| --rv-popover-action-icon-size | _20px_ | - |
| --rv-popover-light-text-color | _var(--rv-text-color)_ | - |
| --rv-popover-light-background-color | _var(--rv-white)_ | - |
| --rv-popover-light-action-disabled-text-color | _var(--rv-gray-5)_ | - |
| --rv-popover-dark-text-color | _var(--rv-white)_ | - |
| --rv-popover-dark-background-color | _#4a4a4a_ | - |
| --rv-popover-dark-action-disabled-text-color | _var(--rv-gray-6)_ | - |

## 常见问题

### Popover 的点击事件无法正确触发？

这种情况通常是由于项目中引入了 `fastclick` 库导致的。建议移除 `fastclick`，或者配置 `fastclick` 的 [ignore 规则](https://github.com/ftlabs/fastclick#advanced)。
