# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 [rc-field-form](https://github.com/react-component/field-form) 搭配使用。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```bash
yarn add rc-field-form
```

```js
import { Form } from 'react-vant';
```

## 代码演示

### 基础用法

在表单中，每个 Form.Item 组件代表一个表单项，使用 Form.Item 的 `rules` 属性定义校验规则。

> Form.Item 基于 Field 和 RcFormItem 进行的封装

```jsx
import React from 'react';
import { Form, Field } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="username" label="用户名">
        <Field />
      </Form.Item>
    </Form>
  );
};
```

### 校验规则

通过 `rules` 定义表单校验规则，点击此处查看文档[rule](https://github.com/react-component/field-form#rule)。

### 表单项类型 - 开关

在表单中使用 [Switch 组件](#/zh-CN/switch)。

```jsx
import React from 'react';
import { Form, Switch } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="switch" label="开关" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 复选框

在表单中使用 [Checkbox 组件](#/zh-CN/checkbox)。

```jsx
import React from 'react';
import { Form, Checkbox } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="checkbox" label="复选框" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="复选框组">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            复选框1
          </Checkbox>
          <Checkbox shape="square" name="c2">
            复选框2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 单选框

在表单中使用 [Radio 组件](#/zh-CN/radio)。

```jsx
import React from 'react';
import { Form, Radio } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="radio" label="单选框">
        <Radio.Group direction="horizontal">
          <Radio name="r1">单选框1</Radio>
          <Radio name="r2">单选框2</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 步进器

在表单中使用 [Stepper 组件](#/zh-CN/stepper)。

```jsx
import React from 'react';
import { Form, Stepper } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="stepper" label="步进器" initialValue={1}>
        <Stepper />
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 评分

在表单中使用 [Rate 组件](#/zh-CN/rate)。

```jsx
import React from 'react';
import { Form, Rate } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="rate" label="评分" initialValue={3}>
        <Rate />
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 滑块

在表单中使用 [Slider 组件](#/zh-CN/slider)。

```jsx
import React from 'react';
import { Form, Slider } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="slider" label="滑块" initialValue={50}>
        <Slider />
      </Form.Item>
    </Form>
  );
};
```

### 表单项类型 - 文件上传

在表单中使用 [Uploader 组件](#/zh-CN/uploader)。

```jsx
import React from 'react';
import { Form, Uploader } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item
        name="uploader"
        label="文件上传"
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: '图片名称',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
    </Form>
  );
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label-width | 表单项 label 宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| label-align |  表单项 label 对齐方式，可选值为 `center` `right` | _string_ | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| validate-trigger | 表单校验触发时机，可选值为 `onChange`、`onSubmit`，详见下表 | _string_ | `onBlur` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| disabled | 是否禁用表单中的所有输入框 | _boolean_ | `false` |
| readonly | 是否将表单中的所有输入框设置为只读状态 | _boolean_ | `false` |
| validate-first | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scroll-to-error | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| show-error | 是否在校验不通过时标红输入框 | _boolean_ | `false` |
| show-error-message | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |
| submit-on-enter | 是否在按下回车键时提交表单 | _boolean_ | `true` |

> 表单项的 API 参见：[Field 组件](#/zh-CN/field#api)

### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | _boolean_ |
| message | 错误提示文案 | _string \| (value, rule) => string_ |
| validator | 通过函数进行校验 | _(value, rule) => boolean \| string \| Promise_ |
| pattern | 通过正则表达式进行校验 | _RegExp_ |
| trigger | 本项规则的触发时机，可选值为 `onChange`、`onBlur` | _string_ |
| formatter | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |

### validate-trigger  可选值

通过 `validate-trigger` 属性可以自定义表单校验的触发时机。

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| onSubmit | 仅在提交表单时触发校验               |
| onBlur   | 在提交表单和输入框失焦时触发校验     |
| onChange | 在提交表单和输入框内容变化时触发校验 |

### Events

| 事件名 | 说明                       | 回调参数                                          |
| ------ | -------------------------- | ------------------------------------------------- |
| submit | 提交表单且验证通过后触发   | _values: object_                                  |
| failed | 提交表单且验证不通过后触发 | _errorInfo: { values: object, errors: object[] }_ |

### 方法

通过 ref 可以获取到 Form 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单，与点击提交按钮的效果等价 | - | - |
| validate | 验证表单，支持传入 `name` 来验证单个或部分表单项 | _name?: string \| string[]_ | _Promise_ |
| resetValidation | 重置表单项的验证提示，支持传入 `name` 来重置单个或部分表单项 | _name?: string \| string[]_ | - |
| scrollToField | 滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部 | _name: string, alignToTop: boolean_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { FormInstance } from 'vant';
```

`FormInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { FormInstance } from 'vant';

const formRef = ref<FormInstance>();

formRef.value?.submit();
```

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 表单内容 |

## 常见问题

### 如何自定义表单项？

Vant 支持在 Form 组件中插入自定义的表单项，具体用法参见 [useCustomFieldValue](#/zh-CN/use-custom-field-value)。
