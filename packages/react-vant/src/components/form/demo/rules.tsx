import React from 'react'
import { Button, Input, Toast, Form } from 'react-vant'

export default () => {
  const onFinish = values => {
    console.log(values)
  }

  return (
    <Form
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
        name='text1'
        label='正则校验'
        rules={[{ pattern: /^\d{6}$/, message: '请输入6位数字' }]}
      >
        <Input placeholder='正则校验' />
      </Form.Item>
      <Form.Item
        name='text2'
        label='函数校验'
        rules={[
          {
            validator: (_, value) => {
              if (/^1\d{10}$/.test(value)) {
                return Promise.resolve(true)
              }
              return Promise.reject(new Error('请输入正确的手机号码'))
            },
          },
        ]}
      >
        <Input placeholder='函数校验' />
      </Form.Item>
      <Form.Item
        label='异步函数校验'
        name='text3'
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading('验证中...')

                setTimeout(() => {
                  if (/^\d{6}$/.test(value)) {
                    resolve(true)
                  } else {
                    reject(new Error('请输入正确内容'))
                  }
                  Toast.clear()
                }, 1000)
              })
            },
          },
        ]}
      >
        <Input placeholder='异步函数校验' />
      </Form.Item>
    </Form>
  )
}
