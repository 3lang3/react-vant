import React from 'react';
import {
  Button,
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
      <Form.Item name="picker" label="选择器" isLink>
        <PickerItem placeholder="选择城市" />
      </Form.Item>
      <Form.Item name="datetime" label="选择时间" isLink>
        <DatetimePickerItem placeholder="选择时间" />
      </Form.Item>
      <Form.Item name="calendar" label="日历" isLink>
        <CalendarItem placeholder="选择日期" />
      </Form.Item>
    </Form>
  );
};
