import React, { Fragment } from 'react'
import { Button, Input, Form, Picker, Selector, Typography } from 'react-vant'

const columns = [
  '南京',
  '苏州',
  '常州',
  '淮安',
  '扬州',
  '南通',
  '宿迁',
  '泰州',
  '无锡',
]

export default () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log(values)
  }

  return (
    <Form
      colon
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
      <Form.Item name='type' label='联系方式' initialValue={['mobile']}>
        <Selector
          options={[
            {
              label: '手机号',
              value: 'mobile',
            },
            {
              label: '住址',
              value: 'address',
            },
          ]}
          multiple={true}
        />
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(p, n) => p.type !== n.type}>
        {({ getFieldValue }) => {
          const type = getFieldValue('type') || []
          const content = []
          if (type.includes('mobile'))
            content.push(
              <Form.Item key='mobile' name='mobile' label='手机号'>
                <Input placeholder='请输入手机号' />
              </Form.Item>
            )
          if (type.includes('address'))
            content.push(
              <Fragment key='address'>
                <Form.Item
                  name='area'
                  label='区域'
                  trigger='onConfirm'
                  onClick={(_, actions) => actions.current?.open()}
                >
                  <Picker popup columns={columns}>
                    {val =>
                      val ? (
                        <Typography.Text>{val}</Typography.Text>
                      ) : (
                        '请选择地址'
                      )
                    }
                  </Picker>
                </Form.Item>
                <Form.Item name='area_address' label='详细地址'>
                  <Input.TextArea placeholder='请输入详细地址' />
                </Form.Item>
              </Fragment>
            )
          return content
        }}
      </Form.Item>
    </Form>
  )
}
