import React from 'react'
import { Cascader, Button, Input, Form, Toast, Space } from 'react-vant'
import options from './options'

export default () => {
  const [form] = Form.useForm()
  const onSumbit = async () => {
    const values = await form.getFieldsValue()
    console.log(values)
    Toast.info(JSON.stringify(values))
  }
  const setValue = () => {
    form.setFieldsValue({ area: ['330000', '330100', '330104'] })
  }
  return (
    <Form form={form}>
      <Form.Item name='area' label='地区' isLink>
        <Cascader
          popup={{ round: true }}
          title='请选择所在地区'
          options={options}
        >
          {(_, selectedRows, actions) => (
            <Input
              value={selectedRows.map(el => el.text).join(',')}
              readOnly
              placeholder='请选择所在地区'
              onClick={() => actions.open()}
            />
          )}
        </Cascader>
      </Form.Item>
      <Space block justify='center' style={{ marginTop: 20 }}>
        <Button type='primary' onClick={onSumbit}>
          提交
        </Button>
        <Button onClick={setValue}>设置默认值</Button>
      </Space>
    </Form>
  )
}
