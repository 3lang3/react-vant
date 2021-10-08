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
          <Form.Item required name="input" label="输入框">
            <Field />
          </Form.Item>
          <Form.Item required name="checkbox" label="复选框">
            <Checkbox>复选框a</Checkbox>
          </Form.Item>
        </Form>
      </DemoBlock>
    </DemoSection>
  );
};
