import React from 'react'
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Rate,
  Slider,
  Stepper,
  Switch,
  Uploader,
  Form,
  Picker,
  Calendar,
  DatetimePicker,
} from 'react-vant'

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
      <Form.Item name='switch' label='开关' valuePropName='checked'>
        <Switch size={20} />
      </Form.Item>
      <Form.Item name='checkbox' label='复选框' valuePropName='checked'>
        <Checkbox shape='square' />
      </Form.Item>
      <Form.Item
        name='checkbox_group'
        label='复选框组'
        initialValue={['c1', 'c2']}
      >
        <Checkbox.Group direction='horizontal'>
          <Checkbox shape='square' name='c1'>
            复选框1
          </Checkbox>
          <Checkbox shape='square' name='c2'>
            复选框2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name='radio' label='单选框'>
        <Radio.Group direction='horizontal'>
          <Radio name='r1'>单选框1</Radio>
          <Radio name='r2'>单选框2</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='stepper' label='步进器' initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name='rate' label='评分' initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name='slider' label='滑块' initialValue={25}>
        <Slider />
      </Form.Item>
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
        isLink
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
        isLink
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
      <Form.Item
        name='uploader'
        label='上传文件'
        rules={[{ required: true, message: '请选择文件' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name='textarea' label='详细地址'>
        <Input.TextArea rows={3} autoSize maxLength={140} showWordLimit />
      </Form.Item>
    </Form>
  )
}
