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
} from 'react-vant';

import { components } from 'site-mobile-demo';
import { FIELD_KEY } from '../../field/Field';
import { COMPONENT_TYPE_KEY } from '../../utils/constant';
import Form from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
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
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.Item name="switch" label="开关">
            <Switch size={20} />
          </Form.Item>
          <Form.Item name="checkbox" label="复选框">
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
          <Form.Item name="textarea" label="详细地址">
            <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
          </Form.Item>
          <Form.Item name="picker" label="选择器" required>
            <PickerItem />
          </Form.Item>
        </Form>
      </DemoBlock>
    </DemoSection>
  );
};

function PickerItem({ value, onChange, ...props }: any) {
  const [visible, setVisible] = useState(false);

  const onShow = () => {
    setVisible(true);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onConfirm = (val, idx) => {
    onChange(val);
    onCancel();
  };

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
  return (
    <>
      <Field {...props} isLink readonly value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onCancel={onCancel}>
        <Picker title="选择城市" columns={columns} onConfirm={onConfirm} onCancel={onCancel} />
      </Popup>
    </>
  );
}

PickerItem[COMPONENT_TYPE_KEY] = FIELD_KEY;
