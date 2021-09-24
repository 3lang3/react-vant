# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

### 引入

```js
import { Cascader } from 'react-vant';
```

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```jsx
import { Field, Popup, Cascader, useSetState } from 'react-vant';

// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

export default () => {
  const [state, set] = useSetState({
    visible: false,
    value: '',
  });
  // 全部选项选择完毕后，会触发 finish 事件
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="地区"
        placeholder="请选择所在地区"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="请选择所在地区"
          options={options}
          onClose={() => set({ visible: false })}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### 自定义颜色

通过 `activeColor` 属性来设置选中状态的高亮颜色。

```jsx
<Cascader title="请选择所在地区" activeColor="#f44336" options={options} />
```

### 异步加载选项

可以监听 `onChange` 事件并动态设置 `options`，实现异步加载选项。

```jsx
import { useState } from 'react'
import { Toast, Field, Popup, Cascader, useSetState } from 'react-vant';

export default () => {
  const [dynamicOpts, setDynamicOpts] = useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ]);
  const onChange = ({ value }) => {
    if (value === dynamicOpts[0].value) {
      Toast.loading({ message: '加载中...', duration: 0 });
      setTimeout(() => {
        Toast.clear()
        const newOpts = [...dynamicOpts];
        newOpts[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="地区"
        placeholder="请选择所在地区"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="请选择所在地区"
          options={options}
          onClose={() => set({ visible: false })}
          onChange={onChange}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### 自定义字段名

通过 `fieldNames` 属性可以自定义 `options` 里的字段名称。

```jsx
const options = [
  {
    name: '浙江省',
    code: '330000',
    items: [{ name: '杭州市', code: '330100' }],
  },
  {
    name: '江苏省',
    code: '320000',
    items: [{ name: '南京市', code: '320100' }],
  },
];

<Cascader
  title="请选择所在地区"
  options={options}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items',
  }}
/>;
```

### 受控组件

通过 `value` 属性可以 Cascader 成为受控组件。

> 此处 options 数据和右侧 demo 数据不一致，完整数据请看 [options](https://github.com/3lang3/react-vant/blob/main/src/cascader/demo/index.tsx#L7-L128)

```jsx
import { useState } from 'react';
import { Cascader, Button, Popup, Field } from 'react-vant';

// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

// 从当前选中值获取选中文本
// 在实际业务中可能需要结合childrenKey，valueKey等进行调整
function getTextFromValue(value, opts) {
  const rs = [];
  value.reduce((a, v) => {
    const matchOpt = a.find((opt) => opt.value === v);
    rs.push(matchOpt.text);
    return matchOpt.children;
  }, opts);
  return rs.join('/');
}

export default () => {
  const [text, setText] = useState(getTextFromValue(['330000', '330100', '330103'], options));
  const [value, setValue] = useState(['330000', '330100', '330103']);
  const [visible, setVisible] = useState(false);

  const onFinish = ({ selectedOptions }) => {
    setText(selectedOptions.map((option) => option.text).join('/'));
    setValue(selectedOptions.map((option) => option.value));
    setVisible(false);
  };

  const onSetting = () => {
    const newValue = ['330000', '330100', '330104'];
    setText(getTextFromValue(newValue, options));
    setValue(newValue);
  };
  return (
    <>
      <Field
        isLink
        readonly
        value={text}
        label="地区"
        placeholder="请选择所在地区"
        errorMessage={<div>当前值:{JSON.stringify(value)}</div>}
        onClick={() => setVisible(true)}
      />
      <Popup visible={visible} round position="bottom" onClose={() => setVisible(false)}>
        <Cascader
          title="请选择所在地区"
          options={options}
          value={value}
          onClose={() => setVisible(false)}
          onFinish={onFinish}
        />
      </Popup>

      <Button onClick={onSetting}>外部设置</Button>
    </>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _ReactNode_ | - |
| value | 当前选中的值 | _(string \| number)[]_ | - |
| defaultValue | 默认选中的值 | _(string \| number)[]_ | - |
| options | 可选项数据源 | _Option[]_ | `[]` |
| optionRender | 自定义选项文字 | _({ option: Option, selected: boolean }) => ReactNode_ | - |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| activeColor | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIcon | 关闭图标 | _string\|ReactNode_ | `cross` |
| fieldNames | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Option 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 选项文字（必填）         | _string_                    |
| value     | 选项对应的值（必填）     | _string \| number_          |
| color     | 选项文字颜色             | _string_                    |
| children  | 子选项列表               | _Option[]_                  |
| disabled  | 是否禁用选项             | _boolean_                   |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |

### Events

| 事件       | 说明                   | 回调参数                               |
| ---------- | ---------------------- | -------------------------------------- |
| onChange   | 选中项变化时触发       | `{ value, selectedOptions, tabIndex }` |
| onFinish   | 全部选项选择完成后触发 | `{ value, selectedOptions, tabIndex }` |
| onClose    | 点击关闭图标时触发     | -                                      |
| onClickTab | 点击标签时触发         | _tabIndex: number, title: string_      |




## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                   | 默认值                    | 描述 |
| -------------------------------------- | ------------------------- | ---- |
| --rv-cascader-header-height           | _48px_                    | -    |
| --rv-cascader-header-padding          | _0 var(--rv-padding-md)_ | -    |
| --rv-cascader-title-font-size         | _var(--rv-font-size-lg)_ | -    |
| --rv-cascader-title-line-height       | _20px_                    | -    |
| --rv-cascader-close-icon-size         | _22px_                    | -    |
| --rv-cascader-close-icon-color        | _var(--rv-gray-5)_       | -    |
| --rv-cascader-close-icon-active-color | _var(--rv-gray-6)_       | -    |
| --rv-cascader-selected-icon-size      | _18px_                    | -    |
| --rv-cascader-tabs-height             | _48px_                    | -    |
| --rv-cascader-active-color            | _var(--rv-danger-color)_ | -    |
| --rv-cascader-options-height          | _384px_                   | -    |
| --rv-cascader-option-disabled-color   | _van(--rv-gray-5)_       | -    |
| --rv-cascader-tab-color               | _var(--rv-text-color)_   | -    |
| --rv-cascader-unselected-tab-color    | _var(--rv-gray-6)_       | -    |
