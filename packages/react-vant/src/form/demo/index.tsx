/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Field,
  Rate,
  Slider,
  Stepper,
  Checkbox,
  Radio,
  Switch,
  Toast,
  Button,
  Picker,
  Popup,
  Uploader,
  DatetimePicker,
  Calendar,
  Icon,
} from 'react-vant';
import { components } from 'site-mobile-demo';

import Form, { FormItemProps } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Form
          showValidateMessage={false}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
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
            intro="确保这是唯一的用户名"
            rules={[{ required: true, message: '请填写用户名' }]}
            name="username"
            label="用户名"
          >
            <Field placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请填写密码' }]}
            name="password"
            label="密码"
          >
            <Field placeholder="请输入密码" />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title="校验规则">
        <Form
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item
            name="text1"
            label="正则校验"
            rules={[{ pattern: /\d{6}/, message: '请输入6位数字' }]}
          >
            <Field placeholder="正则校验" />
          </Form.Item>
          <Form.Item
            name="text2"
            label="函数校验"
            rules={[
              {
                validator: (_, value) => {
                  if (/1\d{10}/.test(value)) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error('请输入正确的手机号码'));
                },
              },
            ]}
          >
            <Field placeholder="函数校验" />
          </Form.Item>
          <Form.Item
            label="异步函数校验"
            name="text3"
            rules={[
              {
                validator: (_, value) => {
                  return new Promise((resolve, reject) => {
                    Toast.loading('验证中...');

                    setTimeout(() => {
                      if (/\d{6}/.test(value)) {
                        resolve(true);
                      } else {
                        reject(new Error('请输入正确内容'));
                      }
                      Toast.clear();
                    }, 1000);
                  });
                },
              },
            ]}
          >
            <Field placeholder="异步函数校验" />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title="表单类型">
        <Form
          inset
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
      </DemoBlock>
      <DemoBlock title="动态增减表单项">
        <Form
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, idx) => (
                  <div className="form-list-item" key={field.key}>
                    <h6>用户{idx + 1}:</h6>
                    <div className="form-list-item__control">
                      <Form.Item
                        label="姓名"
                        name={[field.name, 'name']}
                        rules={[
                          { type: 'string', min: 2, max: 6, message: '姓名最少两个字，最多6个字' },
                        ]}
                      >
                        <Field placeholder="请输入用户姓名" />
                      </Form.Item>
                      <Form.Item
                        label="年龄"
                        name={[field.name, 'age']}
                        rules={[
                          { type: 'number', message: '请输入数字', transform: (v) => Number(v) },
                        ]}
                      >
                        <Field
                          placeholder="请输入用户年龄"
                          rightIcon={<Icon name="delete" onClick={() => remove(idx)} />}
                        />
                      </Form.Item>
                    </div>
                  </div>
                ))}
                <div style={{ padding: 10 }}>
                  <Button round block plain icon="add-o" size="small" onClick={() => add()}>
                    新增用户
                  </Button>
                </div>
              </>
            )}
          </Form.List>
        </Form>
      </DemoBlock>
    </DemoSection>
  );
};

type CustomItemProps = {
  value?: any;
  onChange?: (v: any) => void;
  placeholder?: string;
} & FormItemProps;

function PickerItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onClose={onCancel}>
        <Picker title="选择城市" columns={columns} onConfirm={onConfirm} onCancel={onCancel} />
      </Popup>
    </>
  );
}

function DatetimePickerItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onClose={onCancel}>
        <DatetimePicker
          title="选择年月日"
          type="date"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
          value={value}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </Popup>
    </>
  );
}

function CalendarItem(props: CustomItemProps) {
  const { value, onChange, ...fieldProps } = props;
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val) => {
    onChange(val);
    onCancel();
  };
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Calendar visible={visible} onClose={onCancel} onConfirm={onConfirm} />
    </>
  );
}
