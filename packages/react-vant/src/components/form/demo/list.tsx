import React from 'react';
import { Button, Cell, Field, Form } from 'react-vant';
import { AddO, Delete } from '@react-vant/icons';
import './style.less';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      }
    >
      <Cell.Group inset>
        <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, idx) => (
                <div className="form-list-item" key={field.key}>
                  <h6>用户{idx + 1}:</h6>
                  <div className="form-list-item__control">
                    <Form.Item
                      label="姓名"
                      name={[field.name, 'name']}
                      rules={[
                        {
                          type: 'string',
                          min: 2,
                          max: 6,
                          message: '姓名最少两个字，最多6个字',
                        },
                      ]}
                    >
                      <Field placeholder="请输入用户姓名" />
                    </Form.Item>
                    <Form.Item
                      label="年龄"
                      name={[field.name, 'age']}
                      rules={[
                        { type: 'number', message: '请输入数字', transform: (v) => Number(v) },
                      ]}
                    >
                      <Field
                        placeholder="请输入用户年龄"
                        rightIcon={<Delete onClick={() => remove(idx)} />}
                      />
                    </Form.Item>
                  </div>
                </div>
              ))}
              <div style={{ padding: 10 }}>
                <Button round block plain icon={<AddO />} size="small" onClick={() => add()}>
                  新增用户
                </Button>
              </div>
            </>
          )}
        </Form.List>
      </Cell.Group>
    </Form>
  );
};
