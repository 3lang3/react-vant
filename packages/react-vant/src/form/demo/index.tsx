import React from 'react';
import { Field, Checkbox, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Form from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Form
          onFinish={onFinish}
          footer={
            <Button nativeType="submit" type="primary" block>
              提交
            </Button>
          }
        >
          <Form.Item
            rules={[
              { required: true, message: '姓名不能为空' },
              { pattern: /^\d*$/, message: '只接受数字' },
            ]}
            name="input"
            label="输入框"
          >
            <Field placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="checkbox" label="复选框">
            <Checkbox>复选框a</Checkbox>
          </Form.Item>
        </Form>
      </DemoBlock>
    </DemoSection>
  );
};
