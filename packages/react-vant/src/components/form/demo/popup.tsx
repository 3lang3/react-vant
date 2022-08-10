import React from 'react'
import { Button, Form, Picker, DatetimePicker, Calendar } from 'react-vant'

export default () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    // eslint-disable-next-line no-console
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
      <Form.Item
        isLink
        name='picker'
        label='城市选择'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Picker
          popup
          columns={[
            '南京',
            '苏州',
            '常州',
            '淮安',
            '扬州',
            '南通',
            '宿迁',
            '泰州',
            '无锡',
          ]}
        >
          {val => val || '请选择城市'}
        </Picker>
      </Form.Item>
      <Form.Item
        name='date'
        label='日期选择'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <DatetimePicker popup type='date'>
          {(val: Date) => (val ? val.toDateString() : '请选择日期')}
        </DatetimePicker>
      </Form.Item>
      <Form.Item
        name='calendar'
        label='日历选择'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Calendar>
          {(val: Date) => (val ? val.toDateString() : '请选择日历')}
        </Calendar>
      </Form.Item>
    </Form>
  )
}
