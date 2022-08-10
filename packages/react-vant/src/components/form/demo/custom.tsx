import { ArrowDown } from '@react-vant/icons'
import React from 'react'
import { Button, Input, Form, Picker, Space } from 'react-vant'

const columns = [
  { text: '86 🇨🇳', value: '86' },
  { text: '87 🇺🇸', value: '87' },
  { text: '88 🏳️‍🌈', value: '88' },
  { text: '89 🏳️‍⚧️', value: '89' },
  { text: '90 🇴🇲', value: '90' },
  { text: '91 🇵🇪', value: '91' },
  { text: '92 🇩🇪', value: '92' },
]

interface MobileInputValue {
  prefix: string
  value: string
}

type MobileInputProps = {
  value?: MobileInputValue
  onChange?: (value: MobileInputValue) => void
}

// 自定义表单项
const MobileInput: React.FC<MobileInputProps> = ({
  value = { prefix: '', value: '' },
  onChange,
}) => {
  const trigger = (changedValue: Partial<MobileInputValue>) => {
    onChange?.({ ...value, ...changedValue })
  }

  const onMobileChange = (value: string) => {
    trigger({ value })
  }

  const onPrefixChange = (prefix: string) => {
    trigger({ prefix })
  }
  return (
    <>
      <Picker
        popup
        value={value.prefix}
        placeholder={false}
        columns={columns}
        onConfirm={onPrefixChange}
      >
        {(_, selectRow: any, actions) => {
          return (
            <Space>
              <Space align='center' onClick={() => actions.open()}>
                <div>+{selectRow?.text}</div>
                <ArrowDown style={{ display: 'block' }} />
              </Space>
              <Input
                value={value.value}
                placeholder='请输入手机号'
                onChange={onMobileChange}
              />
            </Space>
          )
        }}
      </Picker>
    </>
  )
}

export default () => {
  const [form] = Form.useForm()

  const checkMobileInput = (_, value: MobileInputValue) => {
    if (value.prefix && value.value) {
      return Promise.resolve()
    }
    if (!value.prefix) Promise.reject(new Error('请选择国家区号!'))
    return Promise.reject(new Error('手机号不能为空!'))
  }

  const onFinish = values => {
    console.log(values)
  }

  return (
    <Form
      layout='vertical'
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
      <Form.Item name='name' label='姓名'>
        <Input placeholder='请输入用户姓名' />
      </Form.Item>
      <Form.Item
        initialValue={{ prefix: '86', value: '' }}
        name='mobile'
        label='手机号'
        rules={[{ required: true }, { validator: checkMobileInput }]}
      >
        <MobileInput />
      </Form.Item>
    </Form>
  )
}
