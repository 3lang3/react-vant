import React from 'react'
import { Button, Input, Form } from 'react-vant'

export default () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log(values)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType='submit' type='primary' block>
            提交
          </Button>
        </div>
      }
    >
      <Form.Item
        tooltip={{
          message:
            'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
        }}
        intro='确保这是唯一的用户名'
        rules={[{ required: true, message: '请填写用户名' }]}
        name='username'
        label='用户名'
      >
        <Input placeholder='请输入用户名' />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '请填写密码' }]}
        name='password'
        label='密码'
      >
        <Input placeholder='请输入密码' />
      </Form.Item>
    </Form>
  )
}
