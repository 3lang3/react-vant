import React from 'react'
import { Form, Input, Button, Radio, Space, NoticeBar } from 'react-vant'

export default function () {
  const [form] = Form.useForm()
  console.log('rerender')
  return (
    <Form
      form={form}
      initialValues={{
        type: 'mobile',
        account: '18888888888',
      }}
      footer={
        <>
          <Form.Subscribe to={['type', 'account']}>
            {({ type, account }) => (
              <NoticeBar>
                你将使用 {type === 'mobile' ? '手机号' : '邮箱'} {account} 登录
              </NoticeBar>
            )}
          </Form.Subscribe>
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType='submit' type='primary' block>
              提交
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name='type' label='登录方式'>
        <Radio.Group>
          <Space>
            <Radio name='mobile'>手机号</Radio>
            <Radio name='email'>邮箱</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Subscribe to={['type']}>
        {({ type }) => {
          return (
            <>
              {type === 'mobile' && (
                <Form.Item name='account' label='手机号'>
                  <Input placeholder='请输入手机号' />
                </Form.Item>
              )}
              {type === 'email' && (
                <Form.Item name='account' label='邮箱'>
                  <Input placeholder='请输入邮箱' />
                </Form.Item>
              )}
            </>
          )
        }}
      </Form.Subscribe>
    </Form>
  )
}
