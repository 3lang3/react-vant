var N=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(t,n,r)=>n in t?N(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,m=(t,n)=>{for(var r in n||(n={}))I.call(n,r)&&g(t,r,n[r]);if(B)for(var r of B(n))x.call(n,r)&&g(t,r,n[r]);return t},s=(t,n)=>S(t,T(n));var v=(t,n)=>{var r={};for(var l in t)I.call(t,l)&&n.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&B)for(var l of B(t))n.indexOf(l)<0&&x.call(t,l)&&(r[l]=t[l]);return r};import{a as u,j as e,r as A,F as f}from"./main.cc295cd4.js";import{dw as i,B as C,j as a,d9 as y,dc as k,dx as M,dv as z,i as q,d6 as L,du as b,dy as D,dz as j,R as G,k as $,dA as O,C as U,ax as W,m as H}from"./index.c79ab82b.js";var P=()=>{const[t]=i.useForm();return u(i,{form:t,showValidateMessage:!1,onFinish:r=>{console.log(r)},footer:e("div",{style:{margin:"16px 16px 0"},children:e(C,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[e(i.Item,{tooltip:{message:"A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."},intro:"\u786E\u4FDD\u8FD9\u662F\u552F\u4E00\u7684\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}],name:"username",label:"\u7528\u6237\u540D",children:e(a,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})}),e(i.Item,{rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}],name:"password",label:"\u5BC6\u7801",children:e(a,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})})]})};const J=`import React from 'react';
import { Button, Field, Form } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      showValidateMessage={false}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item
        tooltip={{
          message:
            'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
        }}
        intro="\u786E\u4FDD\u8FD9\u662F\u552F\u4E00\u7684\u7528\u6237\u540D"
        rules={[{ required: true, message: '\u8BF7\u586B\u5199\u7528\u6237\u540D' }]}
        name="username"
        label="\u7528\u6237\u540D"
      >
        <Field placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '\u8BF7\u586B\u5199\u5BC6\u7801' }]} name="password" label="\u5BC6\u7801">
        <Field placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
      </Form.Item>
    </Form>
  );
};
`,K={code:J,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Field, Form } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      showValidateMessage={false}
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item
        tooltip={{
          message:
            'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
        }}
        intro="\u786E\u4FDD\u8FD9\u662F\u552F\u4E00\u7684\u7528\u6237\u540D"
        rules={[{ required: true, message: '\u8BF7\u586B\u5199\u7528\u6237\u540D' }]}
        name="username"
        label="\u7528\u6237\u540D"
      >
        <Field placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '\u8BF7\u586B\u5199\u5BC6\u7801' }]} name="password" label="\u5BC6\u7801">
        <Field placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
      </Form.Item>
    </Form>
  );
};
`}},key:"form-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var w=()=>u(i,{onFinish:n=>{console.log(n)},footer:e("div",{style:{margin:"16px 16px 0"},children:e(C,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[e(i.Item,{name:"text1",label:"\u6B63\u5219\u6821\u9A8C",rules:[{pattern:/\d{6}/,message:"\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57"}],children:e(a,{placeholder:"\u6B63\u5219\u6821\u9A8C"})}),e(i.Item,{name:"text2",label:"\u51FD\u6570\u6821\u9A8C",rules:[{validator:(n,r)=>/1\d{10}/.test(r)?Promise.resolve(!0):Promise.reject(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"))}],children:e(a,{placeholder:"\u51FD\u6570\u6821\u9A8C"})}),e(i.Item,{label:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",name:"text3",rules:[{validator:(n,r)=>new Promise((l,o)=>{y.loading("\u9A8C\u8BC1\u4E2D..."),setTimeout(()=>{/\d{6}/.test(r)?l(!0):o(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9")),y.clear()},1e3)})}],children:e(a,{placeholder:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"})})]});const Q=`import React from 'react';
import { Button, Field, Toast, Form } from 'react-vant';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item
        name="text1"
        label="\u6B63\u5219\u6821\u9A8C"
        rules={[{ pattern: /\\d{6}/, message: '\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57' }]}
      >
        <Field placeholder="\u6B63\u5219\u6821\u9A8C" />
      </Form.Item>
      <Form.Item
        name="text2"
        label="\u51FD\u6570\u6821\u9A8C"
        rules={[
          {
            validator: (_, value) => {
              if (/1\\d{10}/.test(value)) {
                return Promise.resolve(true);
              }
              return Promise.reject(new Error('\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801'));
            },
          },
        ]}
      >
        <Field placeholder="\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
      <Form.Item
        label="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"
        name="text3"
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading('\u9A8C\u8BC1\u4E2D...');

                setTimeout(() => {
                  if (/\\d{6}/.test(value)) {
                    resolve(true);
                  } else {
                    reject(new Error('\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9'));
                  }
                  Toast.clear();
                }, 1000);
              });
            },
          },
        ]}
      >
        <Field placeholder="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
    </Form>
  );
};
`,X={code:Q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Field, Toast, Form } from 'react-vant';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item
        name="text1"
        label="\u6B63\u5219\u6821\u9A8C"
        rules={[{ pattern: /\\d{6}/, message: '\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57' }]}
      >
        <Field placeholder="\u6B63\u5219\u6821\u9A8C" />
      </Form.Item>
      <Form.Item
        name="text2"
        label="\u51FD\u6570\u6821\u9A8C"
        rules={[
          {
            validator: (_, value) => {
              if (/1\\d{10}/.test(value)) {
                return Promise.resolve(true);
              }
              return Promise.reject(new Error('\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801'));
            },
          },
        ]}
      >
        <Field placeholder="\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
      <Form.Item
        label="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"
        name="text3"
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading('\u9A8C\u8BC1\u4E2D...');

                setTimeout(() => {
                  if (/\\d{6}/.test(value)) {
                    resolve(true);
                  } else {
                    reject(new Error('\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9'));
                  }
                  Toast.clear();
                }, 1000);
              });
            },
          },
        ]}
      >
        <Field placeholder="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
    </Form>
  );
};
`}},key:"form-rules",meta:{title:"\u6821\u9A8C\u89C4\u5219"}};function Y(t){const p=t,{value:n,onChange:r}=p,l=v(p,["value","onChange"]),[o,d]=A.exports.useState(!1),h=()=>{d(!0)},c=()=>{d(!1)},E=V=>{r(V),c()},F=["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"];return u(f,{children:[e(a,s(m({isLink:!0,readonly:!0},l),{value:n,onClick:h})),e(k,{position:"bottom",round:!0,visible:o,onClose:c,children:e(M,{title:"\u9009\u62E9\u57CE\u5E02",columns:F,onConfirm:E,onCancel:c})})]})}function Z(t){const F=t,{value:n,onChange:r}=F,l=v(F,["value","onChange"]),[o,d]=A.exports.useState(!1),h=()=>{d(!0)},c=()=>{d(!1)},E=p=>{r(p),c()};return u(f,{children:[e(a,s(m({isLink:!0,readonly:!0},l),{value:n,onClick:h})),e(k,{position:"bottom",round:!0,visible:o,onClose:c,children:e(z,{title:"\u9009\u62E9\u5E74\u6708\u65E5",type:"date",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:n,onCancel:c,onConfirm:E})})]})}function ee(t){const F=t,{value:n,onChange:r}=F,l=v(F,["value","onChange"]),[o,d]=A.exports.useState(!1),h=()=>{d(!0)},c=()=>{d(!1)},E=p=>{r(p),c()};return u(f,{children:[e(a,s(m({isLink:!0,readonly:!0},l),{value:n,onClick:h})),e(q,{visible:o,onClose:c,onConfirm:E})]})}var R=()=>{const[t]=i.useForm();return u(i,{colon:!0,border:!1,form:t,onFinish:r=>{console.log(r)},footer:e("div",{style:{margin:"16px 16px 0"},children:e(C,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[e(i.Item,{name:"switch",label:"\u5F00\u5173",valuePropName:"checked",children:e(L,{size:20})}),e(i.Item,{name:"checkbox",label:"\u590D\u9009\u6846",valuePropName:"checked",children:e(b,{shape:"square"})}),e(i.Item,{name:"checkbox_group",label:"\u590D\u9009\u6846\u7EC4",children:u(b.Group,{direction:"horizontal",children:[e(b,{shape:"square",name:"c1",children:"\u590D\u9009\u68461"}),e(b,{shape:"square",name:"c2",children:"\u590D\u9009\u68462"})]})}),e(i.Item,{name:"radio",label:"\u5355\u9009\u6846",initialValue:"r1",children:u(D.Group,{direction:"horizontal",children:[e(D,{name:"r1",children:"\u5355\u9009\u68461"}),e(D,{name:"r2",children:"\u5355\u9009\u68462"})]})}),e(i.Item,{name:"stepper",label:"\u6B65\u8FDB\u5668",initialValue:1,children:e(j,{})}),e(i.Item,{name:"rate",label:"\u8BC4\u5206",initialValue:3,children:e(G,{})}),e(i.Item,{name:"slider",label:"\u6ED1\u5757",initialValue:50,children:e($,{})}),e(i.Item,{name:"uploader",label:"\u4E0A\u4F20\u6587\u4EF6",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6"}],initialValue:[{url:"https://img.yzcdn.cn/vant/sand.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"}],children:e(O,{})}),e(i.Item,{name:"textarea",label:"\u8BE6\u7EC6\u5730\u5740",children:e(a,{rows:3,autosize:!0,type:"textarea",maxlength:140,showWordLimit:!0})}),e(i.Item,{name:"picker",label:"\u9009\u62E9\u5668",customField:!0,children:e(Y,{placeholder:"\u9009\u62E9\u57CE\u5E02"})}),e(i.Item,{name:"datetime",label:"\u9009\u62E9\u65F6\u95F4",customField:!0,children:e(Z,{placeholder:"\u9009\u62E9\u65F6\u95F4"})}),e(i.Item,{name:"calendar",label:"\u65E5\u5386",customField:!0,children:e(ee,{placeholder:"\u9009\u62E9\u65E5\u671F"})})]})};const ue=`import React from 'react';
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name="switch" label="\u5F00\u5173" valuePropName="checked">
        <Switch size={20} />
      </Form.Item>
      <Form.Item name="checkbox" label="\u590D\u9009\u6846" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="\u590D\u9009\u6846\u7EC4">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            \u590D\u9009\u68461
          </Checkbox>
          <Checkbox shape="square" name="c2">
            \u590D\u9009\u68462
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="radio" label="\u5355\u9009\u6846" initialValue="r1">
        <Radio.Group direction="horizontal">
          <Radio name="r1">\u5355\u9009\u68461</Radio>
          <Radio name="r2">\u5355\u9009\u68462</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="stepper" label="\u6B65\u8FDB\u5668" initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name="rate" label="\u8BC4\u5206" initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name="slider" label="\u6ED1\u5757" initialValue={50}>
        <Slider />
      </Form.Item>
      <Form.Item
        name="uploader"
        label="\u4E0A\u4F20\u6587\u4EF6"
        rules={[{ required: true, message: '\u8BF7\u9009\u62E9\u6587\u4EF6' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: '\u56FE\u7247\u540D\u79F0',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name="textarea" label="\u8BE6\u7EC6\u5730\u5740">
        <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
      </Form.Item>
      <Form.Item name="picker" label="\u9009\u62E9\u5668" customField>
        <PickerItem placeholder="\u9009\u62E9\u57CE\u5E02" />
      </Form.Item>
      <Form.Item name="datetime" label="\u9009\u62E9\u65F6\u95F4" customField>
        <DatetimePickerItem placeholder="\u9009\u62E9\u65F6\u95F4" />
      </Form.Item>
      <Form.Item name="calendar" label="\u65E5\u5386" customField>
        <CalendarItem placeholder="\u9009\u62E9\u65E5\u671F" />
      </Form.Item>
    </Form>
  );
};
`,re={code:ue,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name="switch" label="\u5F00\u5173" valuePropName="checked">
        <Switch size={20} />
      </Form.Item>
      <Form.Item name="checkbox" label="\u590D\u9009\u6846" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="\u590D\u9009\u6846\u7EC4">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            \u590D\u9009\u68461
          </Checkbox>
          <Checkbox shape="square" name="c2">
            \u590D\u9009\u68462
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="radio" label="\u5355\u9009\u6846" initialValue="r1">
        <Radio.Group direction="horizontal">
          <Radio name="r1">\u5355\u9009\u68461</Radio>
          <Radio name="r2">\u5355\u9009\u68462</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="stepper" label="\u6B65\u8FDB\u5668" initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name="rate" label="\u8BC4\u5206" initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name="slider" label="\u6ED1\u5757" initialValue={50}>
        <Slider />
      </Form.Item>
      <Form.Item
        name="uploader"
        label="\u4E0A\u4F20\u6587\u4EF6"
        rules={[{ required: true, message: '\u8BF7\u9009\u62E9\u6587\u4EF6' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: '\u56FE\u7247\u540D\u79F0',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name="textarea" label="\u8BE6\u7EC6\u5730\u5740">
        <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
      </Form.Item>
      <Form.Item name="picker" label="\u9009\u62E9\u5668" customField>
        <PickerItem placeholder="\u9009\u62E9\u57CE\u5E02" />
      </Form.Item>
      <Form.Item name="datetime" label="\u9009\u62E9\u65F6\u95F4" customField>
        <DatetimePickerItem placeholder="\u9009\u62E9\u65F6\u95F4" />
      </Form.Item>
      <Form.Item name="calendar" label="\u65E5\u5386" customField>
        <CalendarItem placeholder="\u9009\u62E9\u65E5\u671F" />
      </Form.Item>
    </Form>
  );
};
`},"CombinedItems.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Calendar, DatetimePicker, Field, Picker, Popup } from 'react-vant';
import type { FormItemProps } from 'react-vant';

type CustomItemProps = {
  value?: any;
  onChange?: (v: any) => void;
  placeholder?: string;
} & FormItemProps;

export function PickerItem(props: CustomItemProps) {
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

  const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];
  return (
    <>
      <Field isLink readonly {...fieldProps} value={value} onClick={onShow} />
      <Popup position="bottom" round visible={visible} onClose={onCancel}>
        <Picker title="\u9009\u62E9\u57CE\u5E02" columns={columns} onConfirm={onConfirm} onCancel={onCancel} />
      </Popup>
    </>
  );
}

export function DatetimePickerItem(props: CustomItemProps) {
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
          title="\u9009\u62E9\u5E74\u6708\u65E5"
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

export function CalendarItem(props: CustomItemProps) {
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
`}},key:"form-type",meta:{title:"\u8868\u5355\u9879\u7C7B\u578B"}};var _=()=>e(i,{onFinish:n=>{console.log(n)},footer:e("div",{style:{margin:"16px 16px 0"},children:e(C,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:e(U.Group,{inset:!0,children:e(i.List,{name:"users",initialValue:[{name:"react-vant",age:"1"}],children:(n,{add:r,remove:l})=>u(f,{children:[n.map((o,d)=>u("div",{className:"form-list-item",children:[u("h6",{children:["\u7528\u6237",d+1,":"]}),u("div",{className:"form-list-item__control",children:[e(i.Item,{label:"\u59D3\u540D",name:[o.name,"name"],rules:[{type:"string",min:2,max:6,message:"\u59D3\u540D\u6700\u5C11\u4E24\u4E2A\u5B57\uFF0C\u6700\u591A6\u4E2A\u5B57"}],children:e(a,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"})}),e(i.Item,{label:"\u5E74\u9F84",name:[o.name,"age"],rules:[{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57",transform:h=>Number(h)}],children:e(a,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84",rightIcon:e(W,{onClick:()=>l(d)})})})]})]},o.key)),e("div",{style:{padding:10},children:e(C,{round:!0,block:!0,plain:!0,icon:e(H,{}),size:"small",onClick:()=>r(),children:"\u65B0\u589E\u7528\u6237"})})]})})})});const te=`import React from 'react';
import { Button, Cell, Field, Form } from 'react-vant';
import { AddO, Delete } from '@react-vant/icons';
import './style.less';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Cell.Group inset>
        <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, idx) => (
                <div className="form-list-item" key={field.key}>
                  <h6>\u7528\u6237{idx + 1}:</h6>
                  <div className="form-list-item__control">
                    <Form.Item
                      label="\u59D3\u540D"
                      name={[field.name, 'name']}
                      rules={[
                        {
                          type: 'string',
                          min: 2,
                          max: 6,
                          message: '\u59D3\u540D\u6700\u5C11\u4E24\u4E2A\u5B57\uFF0C\u6700\u591A6\u4E2A\u5B57',
                        },
                      ]}
                    >
                      <Field placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
                    </Form.Item>
                    <Form.Item
                      label="\u5E74\u9F84"
                      name={[field.name, 'age']}
                      rules={[
                        { type: 'number', message: '\u8BF7\u8F93\u5165\u6570\u5B57', transform: (v) => Number(v) },
                      ]}
                    >
                      <Field
                        placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84"
                        rightIcon={<Delete onClick={() => remove(idx)} />}
                      />
                    </Form.Item>
                  </div>
                </div>
              ))}
              <div style={{ padding: 10 }}>
                <Button round block plain icon={<AddO />} size="small" onClick={() => add()}>
                  \u65B0\u589E\u7528\u6237
                </Button>
              </div>
            </>
          )}
        </Form.List>
      </Cell.Group>
    </Form>
  );
};
`,ne={code:te,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Cell, Field, Form } from 'react-vant';
import { AddO, Delete } from '@react-vant/icons';
import './style.less';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Cell.Group inset>
        <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, idx) => (
                <div className="form-list-item" key={field.key}>
                  <h6>\u7528\u6237{idx + 1}:</h6>
                  <div className="form-list-item__control">
                    <Form.Item
                      label="\u59D3\u540D"
                      name={[field.name, 'name']}
                      rules={[
                        {
                          type: 'string',
                          min: 2,
                          max: 6,
                          message: '\u59D3\u540D\u6700\u5C11\u4E24\u4E2A\u5B57\uFF0C\u6700\u591A6\u4E2A\u5B57',
                        },
                      ]}
                    >
                      <Field placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
                    </Form.Item>
                    <Form.Item
                      label="\u5E74\u9F84"
                      name={[field.name, 'age']}
                      rules={[
                        { type: 'number', message: '\u8BF7\u8F93\u5165\u6570\u5B57', transform: (v) => Number(v) },
                      ]}
                    >
                      <Field
                        placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84"
                        rightIcon={<Delete onClick={() => remove(idx)} />}
                      />
                    </Form.Item>
                  </div>
                </div>
              ))}
              <div style={{ padding: 10 }}>
                <Button round block plain icon={<AddO />} size="small" onClick={() => add()}>
                  \u65B0\u589E\u7528\u6237
                </Button>
              </div>
            </>
          )}
        </Form.List>
      </Cell.Group>
    </Form>
  );
};
`},"style.less":{type:"FILE",value:`.demo-form {
  .form-list-item {
    padding: 10px 10px 0;
    h6 {
      margin: 0 0 5px;
      font-size: 14px;
    }

    &__control {
      overflow: hidden;
      border: 1px solid #f2f2f2;
      border-radius: 6px;
    }
  }
}
`}},key:"form-list",meta:{title:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}},ie=function({previewer:t=()=>null,api:n=()=>null}){const r=t;return e("div",{children:u("div",{children:[e("h1",{id:"form-\u8868\u5355","data-anchor":"form-\u8868\u5355",children:"Form \u8868\u5355"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u7C7B\u578B\u3002"}),e("blockquote",{children:u("p",{children:["Form \u7EC4\u4EF6\u662F\u57FA\u4E8E",e("a",{href:"https://github.com/react-component/field-form",children:"rc-field-form"}),"\u7684\u5C01\u88C5\u3002"]})}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Form } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u5728\u8868\u5355\u4E2D\uFF0C\u6BCF\u4E2A Form.Item \u7EC4\u4EF6\u4EE3\u8868\u4E00\u4E2A\u8868\u5355\u9879\uFF0C\u4F7F\u7528 Form.Item \u7684 ",e("code",{children:"rules"})," \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C",u("strong",{children:["Form.Item \u662F\u57FA\u4E8E Field \u548C ",e("a",{href:"https://github.com/react-component/field-form#field",children:"RcField"})," \u7684\u5C01\u88C5"]}),"\u3002"]}),e(r,s(m({},K),{children:e(P,{})})),e("h3",{id:"\u6821\u9A8C\u89C4\u5219","data-anchor":"\u6821\u9A8C\u89C4\u5219",children:"\u6821\u9A8C\u89C4\u5219"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"rules"})," \u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u89C4\u5219\uFF0C\u70B9\u51FB\u6B64\u5904\u67E5\u770B\u6587\u6863",e("a",{href:"https://github.com/react-component/field-form#rule",children:"rule"}),"\u3002"]}),e(r,s(m({},X),{children:e(w,{})})),e("h3",{id:"\u8868\u5355\u9879\u7C7B\u578B","data-anchor":"\u8868\u5355\u9879\u7C7B\u578B",children:"\u8868\u5355\u9879\u7C7B\u578B"}),e(r,s(m({},re),{children:e(R,{})})),e("h3",{id:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879","data-anchor":"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879",children:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}),e("p",{children:"Form.List \u4E3A\u5B57\u6BB5\u63D0\u4F9B\u6570\u7EC4\u5316\u7BA1\u7406\u3002"}),e(r,s(m({},ne),{children:e(_,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"form-props","data-anchor":"form-props",children:"Form Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"layout"}),e("td",{children:"\u8868\u5355\u5E03\u5C40"}),e("td",{children:e("em",{children:"horizontal | vertical"})}),e("td",{children:e("code",{children:"horizontal"})})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u8868\u5355\u9879\u5E95\u90E8\u8FB9\u6846\u663E\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"colon"}),e("td",{children:"\u914D\u7F6E Form.Item \u7684 colon \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showValidateMessage"}),e("td",{children:"\u662F\u5426\u663E\u793A\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"labelAlign"}),u("td",{children:["\u7EDF\u4E00\u8BBE\u7F6E\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"inputAlign"}),u("td",{children:["\u7EDF\u4E00\u8BBE\u7F6E\u53F3\u4FA7\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"footer"}),e("td",{children:"\u8868\u5355\u5E95\u90E8\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("blockquote",{children:u("p",{children:["\u66F4\u591A Form API \u53C2\u89C1\uFF1A",e("a",{href:"https://github.com/react-component/field-form#form",children:"rc-field-form"})]})}),e("h3",{id:"formitem-props","data-anchor":"formitem-props",children:"Form.Item Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"layout"}),e("td",{children:"\u5355\u72EC\u8BBE\u7F6E\u8868\u5355\u9879\u5E03\u5C40"}),e("td",{children:e("em",{children:"horizontal | vertical"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u5355\u72EC\u8BBE\u7F6E\u8868\u5355\u9879\u5E95\u90E8\u8FB9\u6846\u662F\u5426\u663E\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"colon"}),e("td",{children:"\u914D\u5408 label \u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showValidateMessage"}),e("td",{children:"\u662F\u5426\u663E\u793A\u9A8C\u8BC1\u4FE1\u606F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"intro"}),e("td",{children:"\u989D\u5916\u7684\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u5FC5\u586B\u6837\u5F0F\u8BBE\u7F6E\u3002\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"tooltip"}),e("td",{children:"\u5B57\u6BB5\u63D0\u793A\u4FE1\u606F"}),u("td",{children:[e("em",{children:"ReactNode |"})," ",u("a",{href:"/#/zh-CN/dialog#props",children:["DialogProps & ","{"," icon: ReactNode ","}"]})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"customField"}),e("td",{children:"\u81EA\u5B9A\u4E49 item\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u6E32\u67D3\u5185\u7F6E\u7684 field\uFF0C\u901A\u5E38\u7528\u4E8E\u81EA\u5B9A\u4E49\u8868\u5355\u9879"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6807\u5355\u9879"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"labelClass"}),e("td",{children:"\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"labelWidth"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6.2em"})})]}),u("tr",{children:[e("td",{children:"labelAlign"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"inputAlign"}),u("td",{children:["\u53F3\u4FA7\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]})]})]}),e("blockquote",{children:u("p",{children:["\u66F4\u591A Form.Item API \u53C2\u89C1\uFF1A",e("a",{href:"https://github.com/react-component/field-form#field",children:"rc-field-form"})]})}),e("h3",{id:"formlist-props","data-anchor":"formlist-props",children:"Form.List Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u6E32\u67D3\u51FD\u6570"}),e("td",{children:u("em",{children:["(fields: Field[], operation: ","{"," add, remove, move ","}",", meta: ","{"," errors ","}",") => React.ReactNode"]})})]}),u("tr",{children:[e("td",{children:"initialValue"}),e("td",{children:"\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 initialValues \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6"}),e("td",{children:e("em",{children:"any[]"})})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u5B57\u6BB5\u540D\uFF0C\u652F\u6301\u6570\u7EC4"}),e("td",{children:e("em",{children:"string | number | (string | number)[]"})})]})]})]}),e("h4",{id:"operation","data-anchor":"operation",children:"operation"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"add"}),e("td",{children:"\u65B0\u589E\u8868\u5355\u9879"}),e("td",{children:e("em",{children:"(defaultValue?: any, insertIndex?: number) => void"})})]}),u("tr",{children:[e("td",{children:"move"}),e("td",{children:"\u79FB\u52A8\u8868\u5355\u9879"}),e("td",{children:e("em",{children:"(from: number, to: number) => void"})})]}),u("tr",{children:[e("td",{children:"remove"}),e("td",{children:"\u5220\u9664\u8868\u5355\u9879"}),e("td",{children:e("em",{children:"(index: number | number[]) => void"})})]})]})]}),e("h3",{id:"rule-\u6570\u636E\u7ED3\u6784","data-anchor":"rule-\u6570\u636E\u7ED3\u6784",children:"Rule \u6570\u636E\u7ED3\u6784"}),u("p",{children:["\u4F7F\u7528 Field \u7684",e("code",{children:"rules"}),"\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u9009\u5C5E\u6027\u5982\u4E0B:"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u7C7B\u578B\uFF0C\u5E38\u89C1\u6709 ",e("code",{children:"string"})," ",e("code",{children:"number"})," ",e("code",{children:"boolean"})," ",e("code",{children:"url"})," ",e("code",{children:"email"}),"\u3002\u66F4\u591A\u8BF7\u53C2\u8003",e("a",{href:"https://github.com/yiminghe/async-validator#type",children:"\u6B64\u5904"})]}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"enum"}),u("td",{children:["\u662F\u5426\u5339\u914D\u679A\u4E3E\u4E2D\u7684\u503C\uFF08\u9700\u8981\u5C06 ",e("code",{children:"type"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"enum"}),"\uFF09"]}),e("td",{children:e("em",{children:"any[]"})})]}),u("tr",{children:[e("td",{children:"len"}),e("td",{children:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6"}),e("td",{children:e("em",{children:"number"})})]}),u("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u5FC5\u987B\u8BBE\u7F6E type\uFF1Astring \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6"}),e("td",{children:e("em",{children:"number"})})]}),u("tr",{children:[e("td",{children:"min"}),e("td",{children:"\u5FC5\u987B\u8BBE\u7F6E type\uFF1Astring \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6"}),e("td",{children:e("em",{children:"number"})})]}),u("tr",{children:[e("td",{children:"transform"}),e("td",{children:"\u5C06\u5B57\u6BB5\u503C\u8F6C\u6362\u6210\u76EE\u6807\u503C\u540E\u8FDB\u884C\u6821\u9A8C"}),e("td",{children:e("em",{children:"(value) => any"})})]}),u("tr",{children:[e("td",{children:"whitespace"}),e("td",{children:"\u5982\u679C\u5B57\u6BB5\u4EC5\u5305\u542B\u7A7A\u683C\u5219\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u53EA\u5728 type: 'string' \u65F6\u751F\u6548"}),e("td",{children:e("em",{children:"boolean"})})]}),u("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u662F\u5426\u4E3A\u5FC5\u9009\u5B57\u6BB5"}),e("td",{children:e("em",{children:"boolean"})})]}),u("tr",{children:[e("td",{children:"message"}),e("td",{children:"\u9519\u8BEF\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"validator"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C\u63A5\u6536 Promise \u4F5C\u4E3A\u8FD4\u56DE\u503C"}),e("td",{children:e("em",{children:"(rule, value, callback: (error?: string) => void, form) => Promise | void"})})]}),u("tr",{children:[e("td",{children:"pattern"}),e("td",{children:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"}),e("td",{children:e("em",{children:"RegExp"})})]}),u("tr",{children:[e("td",{children:"validateTrigger"}),e("td",{children:"\u8BBE\u7F6E\u89E6\u53D1\u9A8C\u8BC1\u65F6\u673A\uFF0C\u5FC5\u987B\u662F Form.Item \u7684 validateTrigger \u7684\u5B50\u96C6"}),e("td",{children:e("em",{children:"string| string[]"})})]})]})]})]})})},le=[{Component:P,key:"form-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:w,key:"form-rules",title:"\u6821\u9A8C\u89C4\u5219"},{Component:R,key:"form-type",title:"\u8868\u5355\u9879\u7C7B\u578B"},{Component:_,key:"form-list",title:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}],oe=void 0,de=[{depth:1,text:"Form \u8868\u5355",id:"form-\u8868\u5355"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6821\u9A8C\u89C4\u5219",id:"\u6821\u9A8C\u89C4\u5219"},{depth:3,text:"\u8868\u5355\u9879\u7C7B\u578B",id:"\u8868\u5355\u9879\u7C7B\u578B"},{depth:3,text:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879",id:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"},{depth:2,text:"API",id:"api"},{depth:3,text:"Form Props",id:"form-props"},{depth:3,text:"Form.Item Props",id:"formitem-props"},{depth:3,text:"Form.List Props",id:"formlist-props"},{depth:4,text:"operation",id:"operation"},{depth:3,text:"Rule \u6570\u636E\u7ED3\u6784",id:"rule-\u6570\u636E\u7ED3\u6784"}],ae="/src/components/form/README.md",ce="Form \u8868\u5355",me="1652064015000";var pe=t=>t.children({MdContent:ie,demos:le,frontmatter:oe,slugs:de,filePath:ae,title:ce,updatedTime:me});export{ie as MdContent,pe as default,le as demos,ae as filePath,oe as frontmatter,de as slugs,ce as title,me as updatedTime};
