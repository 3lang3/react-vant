# useFormSmart

### 介绍

更加轻松管理`Form`组件,提供数据同步功能,每次 value 变化都会更新表单

## 代码演示

### 基本用法

> 默认情况 value 被设置值后再次变化不再重复设置,和 Form initialValues 行为一致,只是增加了空值判定

```jsx
import React, { useCallback, useState } from 'react';
import { Field, Form, hooks } from 'react-vant';

function useRequest() {
  const [data, setData] = useState({});
  const run = useCallback(() => {
    setTimeout(() => {
      setData({
        age: 32,
        name: '张楚岚',
      });
    }, 2000);
  }, []);

  return [data, run];
}

export default () => {
  const [data, run] = useRequest(); //模拟请求
  const [ref, { set, get, getAll, clear, submit }] = hooks.useFormSmart({ value: data });
  // 当有数据返回且不为空时,会自动设置表单
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="名字">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="名字">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>请求数据</button>
      <button onClick={() => set({ age: 30 })}>设置数据</button>
      <button onClick={() => get('name')}>获取数据</button>
      <button onClick={() => clear()}>清空表单</button>
      <button onClick={() => submit()}>提交表单</button>
      <button onClick={() => getAll()}>获取表单数据</button>
    </div>
  );
};
```

### 数据的同步

> 某些场景下需要将每次变化的数据都设置到表单中,useFormSmart 提供了绑定功能

```jsx
import { Field, Form, hooks } from 'react-vant';

export default () => {
  const [data, run] = useRequest(); //模拟请求
  const [ref] = hooks.useFormSmart({ value: data, sync: true });
  // 当有数据返回且不为空时,会自动设置表单
  return (
    <div>
      <Form ref={ref}>
        <Form.Item name="name" label="名字">
          <Field />
        </Form.Item>
        <Form.Item name="name" label="名字">
          <Field />
        </Form.Item>
      </Form>
      <button onClick={run}>刷新数据</button>
    </div>
  );
};
```

## API

### 类型定义

```js
export type FormOption = {
  /**
   * initialValues
   */
  value?: Record<string, unknown>;
  /**
   * sync
   */
  sync?: boolean;
};
export type FormMethod = {
  set: (values: unknown) => void;
  get: (name: string) => unknown;
  submit: () => void;
  getAll: () => Record<string, unknown>;
  clear: () => void;
};

function useFormSmart(options?: FormOption): [ref, FormMethod];
```

### 参数

| 参数  | 说明                                            | 类型      | 默认值  |
| ----- | ----------------------------------------------- | --------- | ------- |
| value | 需要设置到表单的值                              | _object_  | -       |
| sync  | 开启 value 同步模式,每次 value 变化都会设置表单 | _boolean_ | `false` |

### 返回值

| 参数   | 说明                            | 类型                |
| ------ | ------------------------------- | ------------------- |
| ref    | ref 引用,必须将其挂载在 Form 上 | _Ref_               |
| set    | 设置表单值                      | _(object) => void_  |
| get    | 获取指定`name`表单值            | _(name) => unknown_ |
| clear  | 重置表单                        | _() => void_        |
| getAll | 获取所有表单值                  | _() => object_      |
| submit | 提交表单                        | _() => void_        |
