import React from 'react';
import {
  Button,
  Checkbox,
  Field,
  Radio,
  Rate,
  Slider,
  Stepper,
  Switch,
  Uploader,
  Form,
} from 'react-vant';
import { CalendarItem, DatetimePickerItem, PickerItem } from './CombinedItems';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Form
      colon
      border={false}
      form={form}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </div>
      }
    >
      <Form.Item name="switch" label="开关" valuePropName="checked">
        <Switch size={20} />
      </Form.Item>
      <Form.Item name="checkbox" label="复选框" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="复选框组">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            复选框1
          </Checkbox>
          <Checkbox shape="square" name="c2">
            复选框2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="radio" label="单选框" initialValue="r1">
        <Radio.Group direction="horizontal">
          <Radio name="r1">单选框1</Radio>
          <Radio name="r2">单选框2</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="stepper" label="步进器" initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name="rate" label="评分" initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name="slider" label="滑块" initialValue={50}>
        <Slider />
      </Form.Item>
      <Form.Item
        name="uploader"
        label="上传文件"
        rules={[{ required: true, message: '请选择文件' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: '图片名称',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name="textarea" label="详细地址">
        <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
      </Form.Item>
      <Form.Item name="picker" label="选择器" customField>
        <PickerItem placeholder="选择城市" />
      </Form.Item>
      <Form.Item name="datetime" label="选择时间" customField>
        <DatetimePickerItem placeholder="选择时间" />
      </Form.Item>
      <Form.Item name="calendar" label="日历" customField>
        <CalendarItem placeholder="选择日期" />
      </Form.Item>
    </Form>
  );
};
