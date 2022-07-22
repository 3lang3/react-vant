var _=Object.defineProperty,V=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(i,t,r)=>t in i?_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,c=(i,t)=>{for(var r in t||(t={}))w.call(t,r)&&b(i,r,t[r]);if(D)for(var r of D(t))N.call(t,r)&&b(i,r,t[r]);return i},F=(i,t)=>V(i,M(t));import{a as e,j as u,F as E,r as T}from"./main.531c777e.js";import{di as n,B as h,dj as d,da as v,d7 as j,dg as C,dk as m,dl as L,R as q,k as z,dm as A,dh as G,i as U,dn as Y,S as p,t as W,dp as f,dq as $,T as O,C as Q,ay as J,m as H}from"./WaterMark.6f52b203.js";var g=()=>{const[i]=n.useForm();return e(n,{form:i,onFinish:r=>{console.log(r)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(n.Item,{tooltip:{message:"A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."},intro:"\u786E\u4FDD\u8FD9\u662F\u552F\u4E00\u7684\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}],name:"username",label:"\u7528\u6237\u540D",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})}),u(n.Item,{rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}],name:"password",label:"\u5BC6\u7801",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})})]})};const K=`import React from 'react';
import { Button, Input, Form } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
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
        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '\u8BF7\u586B\u5199\u5BC6\u7801' }]} name="password" label="\u5BC6\u7801">
        <Input placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
      </Form.Item>
    </Form>
  );
};
`,X={code:K,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Input, Form } from 'react-vant';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
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
        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
      </Form.Item>
      <Form.Item rules={[{ required: true, message: '\u8BF7\u586B\u5199\u5BC6\u7801' }]} name="password" label="\u5BC6\u7801">
        <Input placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
      </Form.Item>
    </Form>
  );
};
`}},key:"form-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var y=()=>e(n,{onFinish:t=>{console.log(t)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(n.Item,{name:"text1",label:"\u6B63\u5219\u6821\u9A8C",rules:[{pattern:/\d{6}/,message:"\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57"}],children:u(d,{placeholder:"\u6B63\u5219\u6821\u9A8C"})}),u(n.Item,{name:"text2",label:"\u51FD\u6570\u6821\u9A8C",rules:[{validator:(t,r)=>/1\d{10}/.test(r)?Promise.resolve(!0):Promise.reject(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"))}],children:u(d,{placeholder:"\u51FD\u6570\u6821\u9A8C"})}),u(n.Item,{label:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",name:"text3",rules:[{validator:(t,r)=>new Promise((l,o)=>{v.loading("\u9A8C\u8BC1\u4E2D..."),setTimeout(()=>{/\d{6}/.test(r)?l(!0):o(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9")),v.clear()},1e3)})}],children:u(d,{placeholder:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"})})]});const Z=`import React from 'react';
import { Button, Input, Toast, Form } from 'react-vant';

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
        <Input placeholder="\u6B63\u5219\u6821\u9A8C" />
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
        <Input placeholder="\u51FD\u6570\u6821\u9A8C" />
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
        <Input placeholder="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
    </Form>
  );
};
`,uu={code:Z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Input, Toast, Form } from 'react-vant';

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
        <Input placeholder="\u6B63\u5219\u6821\u9A8C" />
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
        <Input placeholder="\u51FD\u6570\u6821\u9A8C" />
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
        <Input placeholder="\u5F02\u6B65\u51FD\u6570\u6821\u9A8C" />
      </Form.Item>
    </Form>
  );
};
`}},key:"form-rules",meta:{title:"\u6821\u9A8C\u89C4\u5219"}};var I=()=>{const[i]=n.useForm();return e(n,{colon:!0,form:i,onFinish:r=>{console.log(r)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(n.Item,{name:"switch",label:"\u5F00\u5173",valuePropName:"checked",children:u(j,{size:20})}),u(n.Item,{name:"checkbox",label:"\u590D\u9009\u6846",valuePropName:"checked",children:u(C,{shape:"square"})}),u(n.Item,{name:"checkbox_group",label:"\u590D\u9009\u6846\u7EC4",initialValue:["c1","c2"],children:e(C.Group,{direction:"horizontal",children:[u(C,{shape:"square",name:"c1",children:"\u590D\u9009\u68461"}),u(C,{shape:"square",name:"c2",children:"\u590D\u9009\u68462"})]})}),u(n.Item,{name:"radio",label:"\u5355\u9009\u6846",children:e(m.Group,{direction:"horizontal",children:[u(m,{name:"r1",children:"\u5355\u9009\u68461"}),u(m,{name:"r2",children:"\u5355\u9009\u68462"})]})}),u(n.Item,{name:"stepper",label:"\u6B65\u8FDB\u5668",initialValue:1,children:u(L,{})}),u(n.Item,{name:"rate",label:"\u8BC4\u5206",initialValue:3,children:u(q,{})}),u(n.Item,{name:"slider",label:"\u6ED1\u5757",initialValue:25,children:u(z,{})}),u(n.Item,{isLink:!0,name:"picker",label:"\u57CE\u5E02\u9009\u62E9",trigger:"onConfirm",onClick:(r,l)=>{var o;(o=l.current)==null||o.open()},children:u(A,{popup:!0,columns:["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"],children:r=>r||"\u8BF7\u9009\u62E9\u57CE\u5E02"})}),u(n.Item,{isLink:!0,name:"date",label:"\u65E5\u671F\u9009\u62E9",trigger:"onConfirm",onClick:(r,l)=>{var o;(o=l.current)==null||o.open()},children:u(G,{popup:!0,type:"date",children:r=>r?r.toDateString():"\u8BF7\u9009\u62E9\u65E5\u671F"})}),u(n.Item,{isLink:!0,name:"calendar",label:"\u65E5\u5386\u9009\u62E9",trigger:"onConfirm",onClick:(r,l)=>{var o;(o=l.current)==null||o.open()},children:u(U,{children:r=>r?r.toDateString():"\u8BF7\u9009\u62E9\u65E5\u5386"})}),u(n.Item,{name:"uploader",label:"\u4E0A\u4F20\u6587\u4EF6",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6"}],initialValue:[{url:"https://img.yzcdn.cn/vant/sand.jpg"}],children:u(Y,{})}),u(n.Item,{name:"textarea",label:"\u8BE6\u7EC6\u5730\u5740",children:u(d.TextArea,{rows:3,autoSize:!0,maxLength:140,showWordLimit:!0})})]})};const eu=`import React from 'react'
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name='switch' label='\u5F00\u5173' valuePropName='checked'>
        <Switch size={20} />
      </Form.Item>
      <Form.Item name='checkbox' label='\u590D\u9009\u6846' valuePropName='checked'>
        <Checkbox shape='square' />
      </Form.Item>
      <Form.Item
        name='checkbox_group'
        label='\u590D\u9009\u6846\u7EC4'
        initialValue={['c1', 'c2']}
      >
        <Checkbox.Group direction='horizontal'>
          <Checkbox shape='square' name='c1'>
            \u590D\u9009\u68461
          </Checkbox>
          <Checkbox shape='square' name='c2'>
            \u590D\u9009\u68462
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name='radio' label='\u5355\u9009\u6846'>
        <Radio.Group direction='horizontal'>
          <Radio name='r1'>\u5355\u9009\u68461</Radio>
          <Radio name='r2'>\u5355\u9009\u68462</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='stepper' label='\u6B65\u8FDB\u5668' initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name='rate' label='\u8BC4\u5206' initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name='slider' label='\u6ED1\u5757' initialValue={25}>
        <Slider />
      </Form.Item>
      <Form.Item
        isLink
        name='picker'
        label='\u57CE\u5E02\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Picker
          popup
          columns={[
            '\u5357\u4EAC',
            '\u82CF\u5DDE',
            '\u5E38\u5DDE',
            '\u6DEE\u5B89',
            '\u626C\u5DDE',
            '\u5357\u901A',
            '\u5BBF\u8FC1',
            '\u6CF0\u5DDE',
            '\u65E0\u9521',
          ]}
        >
          {val => val || '\u8BF7\u9009\u62E9\u57CE\u5E02'}
        </Picker>
      </Form.Item>
      <Form.Item
        isLink
        name='date'
        label='\u65E5\u671F\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <DatetimePicker popup type='date'>
          {(val: Date) => (val ? val.toDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F')}
        </DatetimePicker>
      </Form.Item>
      <Form.Item
        isLink
        name='calendar'
        label='\u65E5\u5386\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Calendar>
          {(val: Date) => (val ? val.toDateString() : '\u8BF7\u9009\u62E9\u65E5\u5386')}
        </Calendar>
      </Form.Item>
      <Form.Item
        name='uploader'
        label='\u4E0A\u4F20\u6587\u4EF6'
        rules={[{ required: true, message: '\u8BF7\u9009\u62E9\u6587\u4EF6' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name='textarea' label='\u8BE6\u7EC6\u5730\u5740'>
        <Input.TextArea rows={3} autoSize maxLength={140} showWordLimit />
      </Form.Item>
    </Form>
  )
}
`,ru={code:eu,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name='switch' label='\u5F00\u5173' valuePropName='checked'>
        <Switch size={20} />
      </Form.Item>
      <Form.Item name='checkbox' label='\u590D\u9009\u6846' valuePropName='checked'>
        <Checkbox shape='square' />
      </Form.Item>
      <Form.Item
        name='checkbox_group'
        label='\u590D\u9009\u6846\u7EC4'
        initialValue={['c1', 'c2']}
      >
        <Checkbox.Group direction='horizontal'>
          <Checkbox shape='square' name='c1'>
            \u590D\u9009\u68461
          </Checkbox>
          <Checkbox shape='square' name='c2'>
            \u590D\u9009\u68462
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name='radio' label='\u5355\u9009\u6846'>
        <Radio.Group direction='horizontal'>
          <Radio name='r1'>\u5355\u9009\u68461</Radio>
          <Radio name='r2'>\u5355\u9009\u68462</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='stepper' label='\u6B65\u8FDB\u5668' initialValue={1}>
        <Stepper />
      </Form.Item>
      <Form.Item name='rate' label='\u8BC4\u5206' initialValue={3}>
        <Rate />
      </Form.Item>
      <Form.Item name='slider' label='\u6ED1\u5757' initialValue={25}>
        <Slider />
      </Form.Item>
      <Form.Item
        isLink
        name='picker'
        label='\u57CE\u5E02\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Picker
          popup
          columns={[
            '\u5357\u4EAC',
            '\u82CF\u5DDE',
            '\u5E38\u5DDE',
            '\u6DEE\u5B89',
            '\u626C\u5DDE',
            '\u5357\u901A',
            '\u5BBF\u8FC1',
            '\u6CF0\u5DDE',
            '\u65E0\u9521',
          ]}
        >
          {val => val || '\u8BF7\u9009\u62E9\u57CE\u5E02'}
        </Picker>
      </Form.Item>
      <Form.Item
        isLink
        name='date'
        label='\u65E5\u671F\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <DatetimePicker popup type='date'>
          {(val: Date) => (val ? val.toDateString() : '\u8BF7\u9009\u62E9\u65E5\u671F')}
        </DatetimePicker>
      </Form.Item>
      <Form.Item
        isLink
        name='calendar'
        label='\u65E5\u5386\u9009\u62E9'
        trigger='onConfirm'
        onClick={(_, action) => {
          action.current?.open()
        }}
      >
        <Calendar>
          {(val: Date) => (val ? val.toDateString() : '\u8BF7\u9009\u62E9\u65E5\u5386')}
        </Calendar>
      </Form.Item>
      <Form.Item
        name='uploader'
        label='\u4E0A\u4F20\u6587\u4EF6'
        rules={[{ required: true, message: '\u8BF7\u9009\u62E9\u6587\u4EF6' }]}
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
      <Form.Item name='textarea' label='\u8BE6\u7EC6\u5730\u5740'>
        <Input.TextArea rows={3} autoSize maxLength={140} showWordLimit />
      </Form.Item>
    </Form>
  )
}
`}},key:"form-type",meta:{title:"\u8868\u5355\u9879\u7C7B\u578B"}},nu=[{text:"86 \u{1F1E8}\u{1F1F3}",value:"86"},{text:"87 \u{1F1FA}\u{1F1F8}",value:"87"},{text:"88 \u{1F3F3}\uFE0F\u200D\u{1F308}",value:"88"},{text:"89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",value:"89"},{text:"90 \u{1F1F4}\u{1F1F2}",value:"90"},{text:"91 \u{1F1F5}\u{1F1EA}",value:"91"},{text:"92 \u{1F1E9}\u{1F1EA}",value:"92"}],tu=({value:i={prefix:"",value:""},onChange:t})=>{const r=a=>{t==null||t(c(c({},i),a))},l=a=>{r({value:a})},o=a=>{r({prefix:a})};return u(E,{children:u(A,{popup:!0,value:i.prefix,placeholder:!1,columns:nu,onConfirm:o,children:(a,s,B)=>e(p,{children:[e(p,{align:"center",onClick:()=>B.open(),children:[e("div",{children:["+",s==null?void 0:s.text]}),u(W,{style:{display:"block"}})]}),u(d,{value:i.value,placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",onChange:l})]})})})};var x=()=>{const[i]=n.useForm(),t=(l,o)=>o.prefix&&o.value?Promise.resolve():(o.prefix||Promise.reject(new Error("\u8BF7\u9009\u62E9\u56FD\u5BB6\u533A\u53F7!")),Promise.reject(new Error("\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A!")));return e(n,{layout:"vertical",form:i,onFinish:l=>{console.log(l)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(n.Item,{name:"name",label:"\u59D3\u540D",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"})}),u(n.Item,{initialValue:{prefix:"86",value:""},name:"mobile",label:"\u624B\u673A\u53F7",rules:[{required:!0},{validator:t}],children:u(tu,{})})]})};const iu=`import { ArrowDown } from '@react-vant/icons';
import React from 'react';
import { Button, Input, Form, Picker, Space } from 'react-vant';

const columns = [
  { text: '86 \u{1F1E8}\u{1F1F3}', value: '86' },
  { text: '87 \u{1F1FA}\u{1F1F8}', value: '87' },
  { text: '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', value: '88' },
  { text: '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', value: '89' },
  { text: '90 \u{1F1F4}\u{1F1F2}', value: '90' },
  { text: '91 \u{1F1F5}\u{1F1EA}', value: '91' },
  { text: '92 \u{1F1E9}\u{1F1EA}', value: '92' },
];

interface MobileInputValue {
  prefix: string;
  value: string;
}

type MobileInputProps = {
  value?: MobileInputValue;
  onChange?: (value: MobileInputValue) => void;
};

// \u81EA\u5B9A\u4E49\u8868\u5355\u9879
const MobileInput: React.FC<MobileInputProps> = ({
  value = { prefix: '', value: '' },
  onChange,
}) => {
  const trigger = (changedValue: Partial<MobileInputValue>) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onMobileChange = (value: string) => {
    trigger({ value });
  };

  const onPrefixChange = (prefix: string) => {
    trigger({ prefix });
  };
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
              <Space align="center" onClick={() => actions.open()}>
                <div>+{selectRow?.text}</div>
                <ArrowDown style={{ display: 'block' }} />
              </Space>
              <Input value={value.value} placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" onChange={onMobileChange} />
            </Space>
          );
        }}
      </Picker>
    </>
  );
};

export default () => {
  const [form] = Form.useForm();

  const checkMobileInput = (_, value: MobileInputValue) => {
    if (value.prefix && value.value) {
      return Promise.resolve();
    }
    if (!value.prefix) Promise.reject(new Error('\u8BF7\u9009\u62E9\u56FD\u5BB6\u533A\u53F7!'));
    return Promise.reject(new Error('\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A!'));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
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
      <Form.Item
        name="name"
        label="\u59D3\u540D"
      >
        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
      </Form.Item>
      <Form.Item
        initialValue={{ prefix: '86', value: '' }}
        name="mobile"
        label="\u624B\u673A\u53F7"
        rules={[{ required: true }, { validator: checkMobileInput }]}
      >
        <MobileInput />
      </Form.Item>
    </Form>
  );
};
`,ou={code:iu,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { ArrowDown } from '@react-vant/icons';
import React from 'react';
import { Button, Input, Form, Picker, Space } from 'react-vant';

const columns = [
  { text: '86 \u{1F1E8}\u{1F1F3}', value: '86' },
  { text: '87 \u{1F1FA}\u{1F1F8}', value: '87' },
  { text: '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', value: '88' },
  { text: '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', value: '89' },
  { text: '90 \u{1F1F4}\u{1F1F2}', value: '90' },
  { text: '91 \u{1F1F5}\u{1F1EA}', value: '91' },
  { text: '92 \u{1F1E9}\u{1F1EA}', value: '92' },
];

interface MobileInputValue {
  prefix: string;
  value: string;
}

type MobileInputProps = {
  value?: MobileInputValue;
  onChange?: (value: MobileInputValue) => void;
};

// \u81EA\u5B9A\u4E49\u8868\u5355\u9879
const MobileInput: React.FC<MobileInputProps> = ({
  value = { prefix: '', value: '' },
  onChange,
}) => {
  const trigger = (changedValue: Partial<MobileInputValue>) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onMobileChange = (value: string) => {
    trigger({ value });
  };

  const onPrefixChange = (prefix: string) => {
    trigger({ prefix });
  };
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
              <Space align="center" onClick={() => actions.open()}>
                <div>+{selectRow?.text}</div>
                <ArrowDown style={{ display: 'block' }} />
              </Space>
              <Input value={value.value} placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" onChange={onMobileChange} />
            </Space>
          );
        }}
      </Picker>
    </>
  );
};

export default () => {
  const [form] = Form.useForm();

  const checkMobileInput = (_, value: MobileInputValue) => {
    if (value.prefix && value.value) {
      return Promise.resolve();
    }
    if (!value.prefix) Promise.reject(new Error('\u8BF7\u9009\u62E9\u56FD\u5BB6\u533A\u53F7!'));
    return Promise.reject(new Error('\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A!'));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      layout="vertical"
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
      <Form.Item
        name="name"
        label="\u59D3\u540D"
      >
        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
      </Form.Item>
      <Form.Item
        initialValue={{ prefix: '86', value: '' }}
        name="mobile"
        label="\u624B\u673A\u53F7"
        rules={[{ required: true }, { validator: checkMobileInput }]}
      >
        <MobileInput />
      </Form.Item>
    </Form>
  );
};
`}},key:"form-custom",meta:{title:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879"}};function k(){const[i]=n.useForm();return console.log("rerender"),e(n,{form:i,initialValues:{type:"mobile",account:"18888888888"},footer:e(E,{children:[u(n.Subscribe,{to:["type","account"],children:({type:t,account:r})=>e(f,{children:["\u4F60\u5C06\u4F7F\u7528 ",t==="mobile"?"\u624B\u673A\u53F7":"\u90AE\u7BB1"," ",r," \u767B\u5F55"]})}),u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})})]}),children:[u(n.Item,{name:"type",label:"\u767B\u5F55\u65B9\u5F0F",children:u(m.Group,{children:e(p,{children:[u(m,{name:"mobile",children:"\u624B\u673A\u53F7"}),u(m,{name:"email",children:"\u90AE\u7BB1"})]})})}),u(n.Subscribe,{to:["type"],children:({type:t})=>e(E,{children:[t==="mobile"&&u(n.Item,{name:"account",label:"\u624B\u673A\u53F7",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),t==="email"&&u(n.Item,{name:"account",label:"\u90AE\u7BB1",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})})]})})]})}const lu=`import React from 'react';
import { Form, Input, Button, Radio, Space, NoticeBar } from 'react-vant';

export default function () {
  const [form] = Form.useForm();
  console.log('rerender')
  return (
    <Form
      form={form}
      initialValues={{
        type: 'mobile',
        account: '18888888888',
      }}
      footer={
        <>
          <Form.Subscribe to={['type', 'account']}>
            {({ type, account }) => (
              <NoticeBar>
                \u4F60\u5C06\u4F7F\u7528 {type === 'mobile' ? '\u624B\u673A\u53F7' : '\u90AE\u7BB1'} {account} \u767B\u5F55
              </NoticeBar>
            )}
          </Form.Subscribe>
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              \u63D0\u4EA4
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name="type" label="\u767B\u5F55\u65B9\u5F0F">
        <Radio.Group>
          <Space>
            <Radio name="mobile">\u624B\u673A\u53F7</Radio>
            <Radio name="email">\u90AE\u7BB1</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Subscribe to={['type']}>
        {({ type }) => {
          return (
            <>
              {type === 'mobile' && (
                <Form.Item name="account" label="\u624B\u673A\u53F7">
                  <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
                </Form.Item>
              )}
              {type === 'email' && (
                <Form.Item name="account" label="\u90AE\u7BB1">
                  <Input placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1" />
                </Form.Item>
              )}
            </>
          );
        }}
      </Form.Subscribe>
    </Form>
  );
}
`,du={code:lu,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Form, Input, Button, Radio, Space, NoticeBar } from 'react-vant';

export default function () {
  const [form] = Form.useForm();
  console.log('rerender')
  return (
    <Form
      form={form}
      initialValues={{
        type: 'mobile',
        account: '18888888888',
      }}
      footer={
        <>
          <Form.Subscribe to={['type', 'account']}>
            {({ type, account }) => (
              <NoticeBar>
                \u4F60\u5C06\u4F7F\u7528 {type === 'mobile' ? '\u624B\u673A\u53F7' : '\u90AE\u7BB1'} {account} \u767B\u5F55
              </NoticeBar>
            )}
          </Form.Subscribe>
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              \u63D0\u4EA4
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name="type" label="\u767B\u5F55\u65B9\u5F0F">
        <Radio.Group>
          <Space>
            <Radio name="mobile">\u624B\u673A\u53F7</Radio>
            <Radio name="email">\u90AE\u7BB1</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Subscribe to={['type']}>
        {({ type }) => {
          return (
            <>
              {type === 'mobile' && (
                <Form.Item name="account" label="\u624B\u673A\u53F7">
                  <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
                </Form.Item>
              )}
              {type === 'email' && (
                <Form.Item name="account" label="\u90AE\u7BB1">
                  <Input placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1" />
                </Form.Item>
              )}
            </>
          );
        }}
      </Form.Subscribe>
    </Form>
  );
}
`}},key:"form-subscribe",meta:{title:"Form.Subscribe"}};function P(){const[i]=n.useForm(),t=n.useWatch("account",i),r=n.useWatch("type",i);return console.log("watch rerender"),e(n,{form:i,initialValues:{type:"mobile",account:"18888888888"},footer:e(E,{children:[e(f,{children:["\u4F60\u5C06\u4F7F\u7528 ",r==="mobile"?"\u624B\u673A\u53F7":"\u90AE\u7BB1"," ",t," \u767B\u5F55"]}),u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})})]}),children:[u(n.Item,{name:"type",label:"\u767B\u5F55\u65B9\u5F0F",children:u(m.Group,{children:e(p,{children:[u(m,{name:"mobile",children:"\u624B\u673A\u53F7"}),u(m,{name:"email",children:"\u90AE\u7BB1"})]})})}),r==="mobile"&&u(n.Item,{name:"account",label:"\u624B\u673A\u53F7",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),r==="email"&&u(n.Item,{name:"account",label:"\u90AE\u7BB1",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})})]})}const au=`import React from 'react';
import { Form, Input, Button, Radio, Space, NoticeBar } from 'react-vant';

type FieldType = { account?: string; loginMethod?: 'mobile' | 'email' };

export default function () {
  const [form] = Form.useForm<FieldType>();

  const account = Form.useWatch('account', form);
  const type = Form.useWatch('type', form);

  console.log('watch rerender')
  return (
    <Form
      form={form}
      initialValues={{
        type: 'mobile',
        account: '18888888888',
      }}
      footer={
        <>
          <NoticeBar>
            \u4F60\u5C06\u4F7F\u7528 {type === 'mobile' ? '\u624B\u673A\u53F7' : '\u90AE\u7BB1'} {account} \u767B\u5F55
          </NoticeBar>
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              \u63D0\u4EA4
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name="type" label="\u767B\u5F55\u65B9\u5F0F">
        <Radio.Group>
          <Space>
            <Radio name="mobile">\u624B\u673A\u53F7</Radio>
            <Radio name="email">\u90AE\u7BB1</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      {type === 'mobile' && (
        <Form.Item name="account" label="\u624B\u673A\u53F7">
          <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
        </Form.Item>
      )}
      {type === 'email' && (
        <Form.Item name="account" label="\u90AE\u7BB1">
          <Input placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1" />
        </Form.Item>
      )}
    </Form>
  );
}
`,cu={code:au,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Form, Input, Button, Radio, Space, NoticeBar } from 'react-vant';

type FieldType = { account?: string; loginMethod?: 'mobile' | 'email' };

export default function () {
  const [form] = Form.useForm<FieldType>();

  const account = Form.useWatch('account', form);
  const type = Form.useWatch('type', form);

  console.log('watch rerender')
  return (
    <Form
      form={form}
      initialValues={{
        type: 'mobile',
        account: '18888888888',
      }}
      footer={
        <>
          <NoticeBar>
            \u4F60\u5C06\u4F7F\u7528 {type === 'mobile' ? '\u624B\u673A\u53F7' : '\u90AE\u7BB1'} {account} \u767B\u5F55
          </NoticeBar>
          <div style={{ margin: '16px 16px 0' }}>
            <Button round nativeType="submit" type="primary" block>
              \u63D0\u4EA4
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name="type" label="\u767B\u5F55\u65B9\u5F0F">
        <Radio.Group>
          <Space>
            <Radio name="mobile">\u624B\u673A\u53F7</Radio>
            <Radio name="email">\u90AE\u7BB1</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      {type === 'mobile' && (
        <Form.Item name="account" label="\u624B\u673A\u53F7">
          <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
        </Form.Item>
      )}
      {type === 'email' && (
        <Form.Item name="account" label="\u90AE\u7BB1">
          <Input placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1" />
        </Form.Item>
      )}
    </Form>
  );
}
`}},key:"form-watch",meta:{title:"Form.useWatch"}},Fu=["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"];var R=()=>{const[i]=n.useForm();return e(n,{colon:!0,form:i,onFinish:r=>{console.log(r)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(n.Item,{name:"type",label:"\u8054\u7CFB\u65B9\u5F0F",initialValue:["mobile"],children:u($,{options:[{label:"\u624B\u673A\u53F7",value:"mobile"},{label:"\u4F4F\u5740\u4FE1\u606F",value:"address"}],multiple:!0})}),u(n.Item,{noStyle:!0,shouldUpdate:(r,l)=>r.type!==l.type,children:({getFieldValue:r})=>{const l=r("type")||[],o=[];return l.includes("mobile")&&o.push(u(n.Item,{name:"mobile",label:"\u624B\u673A\u53F7",children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})},"mobile")),l.includes("address")&&o.push(e(T.exports.Fragment,{children:[u(n.Item,{name:"area",label:"\u533A\u57DF",trigger:"onConfirm",onClick:(a,s)=>{var B;return(B=s.current)==null?void 0:B.open()},children:u(A,{popup:!0,columns:Fu,children:a=>a?u(O.Text,{children:a}):"\u8BF7\u9009\u62E9\u5730\u5740"})}),u(n.Item,{name:"area_address",label:"\u8BE6\u7EC6\u5730\u5740",children:u(d.TextArea,{placeholder:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"})})]},"address")),o}})]})};const mu=`import React, { Fragment } from 'react';
import { Button, Input, Form, Picker, Selector, Typography } from 'react-vant';

const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name="type" label="\u8054\u7CFB\u65B9\u5F0F" initialValue={['mobile']}>
        <Selector
          options={[
            {
              label: '\u624B\u673A\u53F7',
              value: 'mobile',
            },
            {
              label: '\u4F4F\u5740\u4FE1\u606F',
              value: 'address',
            },
          ]}
          multiple={true}
        />
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(p, n) => p.type !== n.type}>
        {({ getFieldValue }) => {
          const type = getFieldValue('type') || [];
          const content = [];
          if (type.includes('mobile'))
            content.push(
              <Form.Item key="mobile" name="mobile" label="\u624B\u673A\u53F7">
                <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
              </Form.Item>,
            );
          if (type.includes('address'))
            content.push(
              <Fragment key="address">
                <Form.Item
                  name="area"
                  label="\u533A\u57DF"
                  trigger="onConfirm"
                  onClick={(_, actions) => actions.current?.open()}
                >
                  <Picker popup columns={columns}>
                    {(val) => (val ? <Typography.Text>{val}</Typography.Text> : '\u8BF7\u9009\u62E9\u5730\u5740')}
                  </Picker>
                </Form.Item>
                <Form.Item name="area_address" label="\u8BE6\u7EC6\u5730\u5740">
                  <Input.TextArea placeholder="\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740" />
                </Form.Item>
              </Fragment>,
            );
          return content;
        }}
      </Form.Item>
    </Form>
  );
};
`,hu={code:mu,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { Fragment } from 'react';
import { Button, Input, Form, Picker, Selector, Typography } from 'react-vant';

const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
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
            \u63D0\u4EA4
          </Button>
        </div>
      }
    >
      <Form.Item name="type" label="\u8054\u7CFB\u65B9\u5F0F" initialValue={['mobile']}>
        <Selector
          options={[
            {
              label: '\u624B\u673A\u53F7',
              value: 'mobile',
            },
            {
              label: '\u4F4F\u5740\u4FE1\u606F',
              value: 'address',
            },
          ]}
          multiple={true}
        />
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(p, n) => p.type !== n.type}>
        {({ getFieldValue }) => {
          const type = getFieldValue('type') || [];
          const content = [];
          if (type.includes('mobile'))
            content.push(
              <Form.Item key="mobile" name="mobile" label="\u624B\u673A\u53F7">
                <Input placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
              </Form.Item>,
            );
          if (type.includes('address'))
            content.push(
              <Fragment key="address">
                <Form.Item
                  name="area"
                  label="\u533A\u57DF"
                  trigger="onConfirm"
                  onClick={(_, actions) => actions.current?.open()}
                >
                  <Picker popup columns={columns}>
                    {(val) => (val ? <Typography.Text>{val}</Typography.Text> : '\u8BF7\u9009\u62E9\u5730\u5740')}
                  </Picker>
                </Form.Item>
                <Form.Item name="area_address" label="\u8BE6\u7EC6\u5730\u5740">
                  <Input.TextArea placeholder="\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740" />
                </Form.Item>
              </Fragment>,
            );
          return content;
        }}
      </Form.Item>
    </Form>
  );
};
`}},key:"form-shouldupdate",meta:{title:"\u590D\u6742\u8054\u52A8"}};var S=()=>u("div",{className:"demo-form",children:u(n,{onFinish:t=>{console.log(t)},footer:u("div",{style:{margin:"16px 16px 0"},children:u(h,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:u(Q.Group,{children:u(n.List,{name:"users",initialValue:[{name:"react-vant",age:"1"}],children:(t,{add:r,remove:l})=>e(E,{children:[t.map((o,a)=>e("div",{className:"form-list-item",children:[u("h6",{children:e(p,{block:!0,align:"center",justify:"between",children:[e("strong",{children:["\u7528\u6237",a+1,":"]}),u(J,{color:"grey",fontSize:18,onClick:()=>l(a)})]})}),e("div",{className:"form-list-item__control",children:[u(n.Item,{label:"\u59D3\u540D",name:[o.name,"name"],rules:[{type:"string",min:2,max:6,message:"\u59D3\u540D\u6700\u5C11\u4E24\u4E2A\u5B57\uFF0C\u6700\u591A6\u4E2A\u5B57"}],children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"})}),u(n.Item,{label:"\u5E74\u9F84",name:[o.name,"age"],rules:[{type:"number",message:"\u8BF7\u8F93\u5165\u6570\u5B57",transform:s=>Number(s)}],children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84"})})]})]},o.key)),u("div",{style:{padding:10},children:u(h,{round:!0,block:!0,plain:!0,icon:u(H,{}),size:"small",onClick:()=>r(),children:"\u65B0\u589E\u7528\u6237"})})]})})})})});const su=`import React from 'react';
import { Space, Button, Cell, Input, Form } from 'react-vant';
import { AddO, Delete } from '@react-vant/icons';
import './style.less';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="demo-form">
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
        <Cell.Group>
          <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, idx) => (
                  <div className="form-list-item" key={field.key}>
                    <h6>
                      <Space block align='center' justify='between'>
                        <strong>\u7528\u6237{idx + 1}:</strong>
                        <Delete color='grey' fontSize={18} onClick={() => remove(idx)} />
                      </Space>
                    </h6>
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
                        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
                      </Form.Item>
                      <Form.Item
                        label="\u5E74\u9F84"
                        name={[field.name, 'age']}
                        rules={[
                          { type: 'number', message: '\u8BF7\u8F93\u5165\u6570\u5B57', transform: (v) => Number(v) },
                        ]}
                      >
                        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84" />
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
    </div>
  );
};
`,Eu={code:su,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space, Button, Cell, Input, Form } from 'react-vant';
import { AddO, Delete } from '@react-vant/icons';
import './style.less';

export default () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="demo-form">
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
        <Cell.Group>
          <Form.List name="users" initialValue={[{ name: 'react-vant', age: '1' }]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, idx) => (
                  <div className="form-list-item" key={field.key}>
                    <h6>
                      <Space block align='center' justify='between'>
                        <strong>\u7528\u6237{idx + 1}:</strong>
                        <Delete color='grey' fontSize={18} onClick={() => remove(idx)} />
                      </Space>
                    </h6>
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
                        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D" />
                      </Form.Item>
                      <Form.Item
                        label="\u5E74\u9F84"
                        name={[field.name, 'age']}
                        rules={[
                          { type: 'number', message: '\u8BF7\u8F93\u5165\u6570\u5B57', transform: (v) => Number(v) },
                        ]}
                      >
                        <Input placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u5E74\u9F84" />
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
    </div>
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
`}},key:"form-list",meta:{title:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}},pu=function({previewer:i=()=>null,api:t=()=>null}){const r=i;return u("div",{children:e("div",{children:[u("h1",{id:"form-\u8868\u5355","data-anchor":"form-\u8868\u5355",children:"Form \u8868\u5355"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u7C7B\u578B\u3002"}),u("blockquote",{children:e("p",{children:["Form \u7EC4\u4EF6\u662F\u57FA\u4E8E",u("a",{href:"https://github.com/react-component/field-form",children:"rc-field-form"}),"\u7684\u5C01\u88C5"]})}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(r,{code:"import { Form } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u5728\u8868\u5355\u4E2D\uFF0C\u6BCF\u4E2A Form.Item \u7EC4\u4EF6\u4EE3\u8868\u4E00\u4E2A\u8868\u5355\u9879\uFF0C\u4F7F\u7528 Form.Item \u7684 ",u("code",{children:"rules"})," \u5C5E\u6027\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\u3002"]}),u(r,F(c({},X),{children:u(g,{})})),u("h3",{id:"\u6821\u9A8C\u89C4\u5219","data-anchor":"\u6821\u9A8C\u89C4\u5219",children:"\u6821\u9A8C\u89C4\u5219"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"rules"})," \u5B9A\u4E49\u8868\u5355\u6821\u9A8C\u89C4\u5219\uFF0C\u67E5\u770B\u66F4\u591A",u("a",{href:"https://github.com/react-component/field-form#rule",children:"rule \u6587\u6863"}),"\u3002"]}),u(r,F(c({},uu),{children:u(y,{})})),u("h3",{id:"\u8868\u5355\u9879\u7C7B\u578B","data-anchor":"\u8868\u5355\u9879\u7C7B\u578B",children:"\u8868\u5355\u9879\u7C7B\u578B"}),u(r,F(c({},ru),{children:u(I,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879","data-anchor":"\u81EA\u5B9A\u4E49\u8868\u5355\u9879",children:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879"}),u("p",{children:"\u81EA\u5B9A\u4E49\u6216\u7B2C\u4E09\u65B9\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u4E0E Form \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002\u53EA\u8981\u8BE5\u7EC4\u4EF6\u9075\u5FAA\u4EE5\u4E0B\u7684\u7EA6\u5B9A\uFF1A"}),e("ul",{children:[e("li",{children:["\u63D0\u4F9B\u53D7\u63A7\u5C5E\u6027 ",u("code",{children:"value"})," \u503C\u540C\u540D\u7684\u5C5E\u6027\u3002"]}),e("li",{children:["\u63D0\u4F9B ",u("code",{children:"onChange"})," \u4E8B\u4EF6\u3002"]})]}),u(r,F(c({},ou),{children:u(x,{})})),u("h3",{id:"\u66F4\u65B0\u8BA2\u9605","data-anchor":"\u66F4\u65B0\u8BA2\u9605",children:"\u66F4\u65B0\u8BA2\u9605"}),e("p",{children:["\u5728\u67D0\u4E9B\u573A\u666F\uFF0C\u4F8B\u5982\u4FEE\u6539\u67D0\u4E2A\u5B57\u6BB5\u503C\u540E\u51FA\u73B0\u65B0\u7684\u5B57\u6BB5\u9009\u9879\u3001\u6216\u5E0C\u671B\u8868\u5355\u4EFB\u610F\u53D8\u5316\u90FD\u5BF9\u67D0\u4E00\u4E2A\u533A\u57DF\u8FDB\u884C\u6E32\u67D3\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"Form.Subscribe"})," \u6216\u8005 ",u("code",{children:"Form.useWatch"})," hook \u5B9E\u73B0\u3002"]}),u("h4",{id:"formsubscribe-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605","data-anchor":"formsubscribe-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605",children:"Form.Subscribe \u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605"}),u(r,F(c({},du),{children:u(k,{})})),u("h4",{id:"formusewatch-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605","data-anchor":"formusewatch-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605",children:"Form.useWatch \u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605"}),u(r,F(c({},cu),{children:u(P,{})})),u("h3",{id:"\u590D\u6742\u8054\u52A8","data-anchor":"\u590D\u6742\u8054\u52A8",children:"\u590D\u6742\u8054\u52A8"}),e("p",{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u7F16\u5199\u4EE3\u7801\u6216\u8005\u4E0E ",u("code",{children:"dependencies"})," \u5C5E\u6027\u914D\u5408\u6821\u9A8C\u5373\u53EF\u3002\u800C\u5728\u67D0\u4E9B\u7279\u5B9A\u573A\u666F\uFF0C\u4F8B\u5982\u4FEE\u6539\u67D0\u4E2A\u5B57\u6BB5\u503C\u540E\u51FA\u73B0\u65B0\u7684\u5B57\u6BB5\u9009\u9879\u3001\u6216\u8005\u7EAF\u7CB9\u5E0C\u671B\u8868\u5355\u4EFB\u610F\u53D8\u5316\u90FD\u5BF9\u67D0\u4E00\u4E2A\u533A\u57DF\u8FDB\u884C\u6E32\u67D3\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"shouldUpdate"})," \u4FEE\u6539 ",u("code",{children:"Form.Item"})," \u7684\u66F4\u65B0\u903B\u8F91"]}),u(r,F(c({},hu),{children:u(R,{})})),u("h3",{id:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879","data-anchor":"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879",children:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}),u("p",{children:"Form.List \u4E3A\u5B57\u6BB5\u63D0\u4F9B\u6570\u7EC4\u5316\u7BA1\u7406\u3002"}),u(r,F(c({},Eu),{children:u(S,{})})),u("h2",{id:"form-props","data-anchor":"form-props",children:"Form Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"layout"}),u("td",{children:"\u8868\u5355\u5E03\u5C40"}),u("td",{children:u("em",{children:"horizontal | vertical"})}),u("td",{children:u("code",{children:"horizontal"})})]}),e("tr",{children:[u("td",{children:"border"}),u("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u8868\u5355\u9879\u5E95\u90E8\u8FB9\u6846\u663E\u793A"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"colon"}),u("td",{children:"\u914D\u7F6E Form.Item \u7684 colon \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showValidateMessage"}),u("td",{children:"\u662F\u5426\u663E\u793A\u9A8C\u8BC1\u9519\u8BEF\u4FE1\u606F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"labelAlign"}),e("td",{children:["\u7EDF\u4E00\u8BBE\u7F6E\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"controlAlign"}),e("td",{children:["\u7EDF\u4E00\u8BBE\u7F6E\u53F3\u4FA7\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"footer"}),u("td",{children:"\u8868\u5355\u5E95\u90E8\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]})]})]}),u("blockquote",{children:e("p",{children:["\u66F4\u591A Form API \u53C2\u89C1\uFF1A",u("a",{href:"https://github.com/react-component/field-form#form",children:"rc-field-form"})]})}),u("h2",{id:"formitem-props","data-anchor":"formitem-props",children:"Form.Item Props"}),e("p",{children:["Form.Item \u7684\u5E03\u5C40\u662F\u57FA\u4E8E ",u("code",{children:"Field"})," \u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u5B83\u652F\u6301 ",u("a",{href:"./field#props",children:"Field"})," \u7684\u90E8\u5206\u5C5E\u6027"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"dependencies"}),u("td",{children:"\u8BBE\u7F6E\u4F9D\u8D56\u5B57\u6BB5\uFF0C\u8BF4\u660E\u89C1\u4E0B"}),u("td",{children:"`string"}),u("td",{children:"number"})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528"}),u("td",{children:u("code",{children:"boolean"})}),e("td",{children:["\u7236\u7EA7 Form \u7684 ",u("code",{children:"disabled"})]})]}),e("tr",{children:[u("td",{children:"initialValue"}),e("td",{children:["\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 ",u("code",{children:"initialValues"})," \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6"]}),u("td",{children:u("code",{children:"any"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"messageVariables"}),u("td",{children:"\u9ED8\u8BA4\u9A8C\u8BC1\u5B57\u6BB5\u7684\u4FE1\u606F"}),u("td",{children:u("code",{children:"Record<string, string>"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"noStyle"}),u("td",{children:"\u4E0D\u4F7F\u7528\u6837\u5F0F\uFF0C\u53EA\u4F7F\u7528\u5B57\u6BB5\u7BA1\u7406"}),u("td",{children:u("code",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"onClick"}),u("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),u("td",{children:u("code",{children:"() => void"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"required"}),u("td",{children:"\u662F\u5426\u5FC5\u9009"}),u("td",{children:u("code",{children:"boolean"})}),e("td",{children:[u("code",{children:"false"}),"\uFF08\u5982\u6709\u8BBE\u7F6E ",u("code",{children:"rules"}),"\uFF0C\u5219\u4F1A\u6839\u636E ",u("code",{children:"rules"})," \u5224\u65AD\uFF09"]})]}),e("tr",{children:[u("td",{children:"rules"}),u("td",{children:"\u6821\u9A8C\u89C4\u5219\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u7684\u6821\u9A8C\u903B\u8F91"}),u("td",{children:u("code",{children:"Rule[]"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"shouldUpdate"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u66F4\u65B0\u903B\u8F91\uFF0C\u8BF4\u660E\u89C1\u4E0B"}),u("td",{children:u("code",{children:"boolean | (prevValue, curValue) => boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"trigger"}),u("td",{children:"\u8BBE\u7F6E\u6536\u96C6\u5B57\u6BB5\u503C\u53D8\u66F4\u7684\u65F6\u673A"}),u("td",{children:u("code",{children:"string"})}),u("td",{children:u("code",{children:"onChange"})})]}),e("tr",{children:[u("td",{children:"validateTrigger"}),u("td",{children:"\u8BBE\u7F6E\u5B57\u6BB5\u6821\u9A8C\u7684\u65F6\u673A"}),u("td",{children:u("code",{children:"string | string[]"})}),u("td",{children:u("code",{children:"onChange"})})]}),e("tr",{children:[u("td",{children:"valuePropName"}),e("td",{children:["\u5B50\u8282\u70B9\u7684\u503C\u7684\u5C5E\u6027\uFF0C\u5982 Switch \u7684\u662F 'checked'\u3002\u8BE5\u5C5E\u6027\u4E3A ",u("code",{children:"getValueProps"})," \u7684\u5C01\u88C5\uFF0C\u81EA\u5B9A\u4E49 ",u("code",{children:"getValueProps"})," \u540E\u4F1A\u5931\u6548"]}),u("td",{children:u("code",{children:"string"})}),u("td",{children:u("code",{children:"value"})})]}),e("tr",{children:[u("td",{children:"layout"}),u("td",{children:"\u5355\u72EC\u8BBE\u7F6E\u8868\u5355\u9879\u5E03\u5C40"}),u("td",{children:u("em",{children:"horizontal | vertical"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"border"}),u("td",{children:"\u5355\u72EC\u8BBE\u7F6E\u8868\u5355\u9879\u5E95\u90E8\u8FB9\u6846\u662F\u5426\u663E\u793A"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"colon"}),u("td",{children:"\u914D\u5408 label \u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showValidateMessage"}),u("td",{children:"\u662F\u5426\u663E\u793A\u9A8C\u8BC1\u4FE1\u606F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"intro"}),u("td",{children:"\u989D\u5916\u7684\u63D0\u793A\u4FE1\u606F"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"tooltip"}),u("td",{children:"\u5B57\u6BB5\u63D0\u793A\u4FE1\u606F"}),e("td",{children:[u("em",{children:"ReactNode |"})," ",e("a",{href:"/components/dialog#props",children:["DialogProps & ","{"," icon: ReactNode ","}"]})]}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"labelClass"}),u("td",{children:"\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D"}),u("td",{children:u("em",{children:"any"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"labelWidth"}),e("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"6.2em"})})]}),e("tr",{children:[u("td",{children:"labelAlign"}),e("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"controlAlign"}),e("td",{children:["\u53F3\u4FA7\u8F93\u5165\u63A7\u4EF6\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"leftIcon"}),u("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"rightIcon"}),u("td",{children:"\u53F3\u4FA7\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"prefix"}),u("td",{children:"\u81EA\u5B9A\u4E49\u63A7\u4EF6\u524D\u90E8\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"suffix"}),u("td",{children:"\u81EA\u5B9A\u4E49\u63A7\u4EF6\u5C3E\u90E8\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"isLink"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"arrowDirection"}),e("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"left"})," ",u("code",{children:"up"})," ",u("code",{children:"down"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"right"})})]})]})]}),u("blockquote",{children:e("p",{children:["\u66F4\u591A Form.Item API \u53C2\u89C1\uFF1A",u("a",{href:"https://github.com/react-component/field-form#field",children:"rc-field-form"})]})}),u("h2",{id:"formsubscribe","data-anchor":"formsubscribe",children:"Form.Subscribe"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u5C5E\u6027"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"children"}),u("td",{children:"\u6E32\u67D3\u51FD\u6570"}),u("td",{children:u("code",{children:"(changedValues: Record<string, any>, form: FormInstance) => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"to"}),e("td",{children:["\u540C Form.Item \u7684 ",u("code",{children:"dependencies"})]}),u("td",{children:u("code",{children:"NamePath[]"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"formlist-props","data-anchor":"formlist-props",children:"Form.List Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"children"}),u("td",{children:"\u6E32\u67D3\u51FD\u6570"}),u("td",{children:e("em",{children:["(fields: Field[], ",u("a",{href:"#operation",children:"operation"}),", meta: ","{"," errors ","}",") => React.ReactNode"]})})]}),e("tr",{children:[u("td",{children:"initialValue"}),u("td",{children:"\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 initialValues \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6"}),u("td",{children:u("em",{children:"any[]"})})]}),e("tr",{children:[u("td",{children:"name"}),u("td",{children:"\u5B57\u6BB5\u540D\uFF0C\u652F\u6301\u6570\u7EC4"}),u("td",{children:u("em",{children:"string | number | (string | number)[]"})})]})]})]}),u("h3",{id:"operation","data-anchor":"operation",children:"operation"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"add"}),u("td",{children:"\u65B0\u589E\u8868\u5355\u9879"}),u("td",{children:u("em",{children:"(defaultValue?: any, insertIndex?: number) => void"})})]}),e("tr",{children:[u("td",{children:"move"}),u("td",{children:"\u79FB\u52A8\u8868\u5355\u9879"}),u("td",{children:u("em",{children:"(from: number, to: number) => void"})})]}),e("tr",{children:[u("td",{children:"remove"}),u("td",{children:"\u5220\u9664\u8868\u5355\u9879"}),u("td",{children:u("em",{children:"(index: number | number[]) => void"})})]})]})]}),u("h2",{id:"rule-\u6570\u636E\u7ED3\u6784","data-anchor":"rule-\u6570\u636E\u7ED3\u6784",children:"Rule \u6570\u636E\u7ED3\u6784"}),e("p",{children:["\u4F7F\u7528 Field \u7684",u("code",{children:"rules"}),"\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u9009\u5C5E\u6027\u5982\u4E0B:"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u952E\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"type"}),e("td",{children:["\u7C7B\u578B\uFF0C\u5E38\u89C1\u6709 ",u("code",{children:"string"})," ",u("code",{children:"number"})," ",u("code",{children:"boolean"})," ",u("code",{children:"url"})," ",u("code",{children:"email"}),"\u3002\u66F4\u591A\u8BF7\u53C2\u8003",u("a",{href:"https://github.com/yiminghe/async-validator#type",children:"\u6B64\u5904"})]}),u("td",{children:u("em",{children:"string"})})]}),e("tr",{children:[u("td",{children:"enum"}),e("td",{children:["\u662F\u5426\u5339\u914D\u679A\u4E3E\u4E2D\u7684\u503C\uFF08\u9700\u8981\u5C06 ",u("code",{children:"type"})," \u8BBE\u7F6E\u4E3A ",u("code",{children:"enum"}),"\uFF09"]}),u("td",{children:u("em",{children:"any[]"})})]}),e("tr",{children:[u("td",{children:"len"}),u("td",{children:"string \u7C7B\u578B\u65F6\u4E3A\u5B57\u7B26\u4E32\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u786E\u5B9A\u6570\u5B57\uFF1B array \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u957F\u5EA6"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"max"}),u("td",{children:"\u5FC5\u987B\u8BBE\u7F6E type\uFF1Astring \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5927\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5927\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5927\u957F\u5EA6"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"min"}),u("td",{children:"\u5FC5\u987B\u8BBE\u7F6E type\uFF1Astring \u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF1Bnumber \u7C7B\u578B\u65F6\u4E3A\u6700\u5C0F\u503C\uFF1Barray \u7C7B\u578B\u65F6\u4E3A\u6570\u7EC4\u6700\u5C0F\u957F\u5EA6"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"transform"}),u("td",{children:"\u5C06\u5B57\u6BB5\u503C\u8F6C\u6362\u6210\u76EE\u6807\u503C\u540E\u8FDB\u884C\u6821\u9A8C"}),u("td",{children:u("em",{children:"(value) => any"})})]}),e("tr",{children:[u("td",{children:"whitespace"}),u("td",{children:"\u5982\u679C\u5B57\u6BB5\u4EC5\u5305\u542B\u7A7A\u683C\u5219\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u53EA\u5728 type: 'string' \u65F6\u751F\u6548"}),u("td",{children:u("em",{children:"boolean"})})]}),e("tr",{children:[u("td",{children:"required"}),u("td",{children:"\u662F\u5426\u4E3A\u5FC5\u9009\u5B57\u6BB5"}),u("td",{children:u("em",{children:"boolean"})})]}),e("tr",{children:[u("td",{children:"message"}),u("td",{children:"\u9519\u8BEF\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"string"})})]}),e("tr",{children:[u("td",{children:"validator"}),u("td",{children:"\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C\u63A5\u6536 Promise \u4F5C\u4E3A\u8FD4\u56DE\u503C"}),u("td",{children:u("em",{children:"(rule, value, callback: (error?: string) => void, form) => Promise | void"})})]}),e("tr",{children:[u("td",{children:"pattern"}),u("td",{children:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D"}),u("td",{children:u("em",{children:"RegExp"})})]}),e("tr",{children:[u("td",{children:"validateTrigger"}),u("td",{children:"\u8BBE\u7F6E\u89E6\u53D1\u9A8C\u8BC1\u65F6\u673A\uFF0C\u5FC5\u987B\u662F Form.Item \u7684 validateTrigger \u7684\u5B50\u96C6"}),u("td",{children:u("em",{children:"string| string[]"})})]})]})]}),u("h2",{id:"faq","data-anchor":"faq",children:"FAQ"}),u("ul",{children:e("li",{children:["\u6458\u81EA ",u("a",{href:"https://mobile.ant.design/zh/components/form#formitem-%E5%A6%82%E4%BD%95%E9%85%8D%E5%90%88-picker--datepicker--cascadepicker-%E4%BD%BF%E7%94%A8",children:"antd-mobile"})]})}),e("p",{children:["\u88AB\u8BBE\u7F6E\u4E86 ",u("code",{children:"name"})," \u5C5E\u6027\u7684 ",u("code",{children:"Form.Item"})," \u5305\u88C5\u7684\u63A7\u4EF6\uFF0C\u8868\u5355\u63A7\u4EF6\u4F1A",u("strong",{children:"\u81EA\u52A8\u6DFB\u52A0"})," ",u("code",{children:"value"}),"\uFF08\u6216 ",u("code",{children:"valuePropName"})," \u6307\u5B9A\u7684\u5176\u4ED6\u5C5E\u6027\uFF09 ",u("code",{children:"onChange"}),"\uFF08\u6216 ",u("code",{children:"trigger"})," \u6307\u5B9A\u7684\u5176\u4ED6\u5C5E\u6027\uFF09\uFF0C\u6570\u636E\u540C\u6B65\u5C06\u88AB Form \u63A5\u7BA1\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u4F60\u7ED9 ",u("code",{children:"Form.Item"})," \u8BBE\u7F6E\u4E86 ",u("code",{children:"name"})," \u5C5E\u6027\uFF0C",e("strong",{children:["\u90A3\u4E48\u8BF7\u786E\u4FDD\u5B83\u7684 ",u("code",{children:"children"})," \u662F\u4E00\u4E2A\u6709\u6548\u7684 ",u("code",{children:"ReactElement"})," \u63A7\u4EF6"]})," \uFF0C\u5E76\u4E14\u80FD\u591F\u63A5\u53D7\u4E0A\u6587\u4E2D\u63D0\u5230\u7684 ",u("code",{children:"value"})," \u548C ",u("code",{children:"onChange"})," \u5C5E\u6027\uFF08\u6216\u6307\u5B9A\u7684\u5176\u4ED6\u5C5E\u6027\uFF09\uFF0C\u4F8B\u5982\uFF1A"]}),u(r,{code:`<Form.Item name="foo">
  <Input />
</Form.Item>`,lang:"jsx"}),u("p",{children:"\u800C\u4E0B\u9762\u8FD9\u4E9B\u5199\u6CD5\u90FD\u662F\u9519\u8BEF\u7684\uFF1A"}),u(r,{code:`<Form.Item name="foo">
  <Input />
  <div>hello</div>
</Form.Item>
// \u9519\u8BEF\uFF1AForm.Item \u7684 children \u4E2D\u5305\u542B\u4E86\u591A\u4E2A\u5143\u7D20`,lang:"jsx"}),u(r,{code:`<Form.Item name="foo">
  hello
  <Input />
</Form.Item>
// \u9519\u8BEF\uFF1A\u540C\u4E0A\uFF0CForm.Item \u7684 children \u4E2D\u5305\u542B\u4E86\u591A\u4E2A\u5143\u7D20`,lang:"jsx"}),u(r,{code:`<Form.Item name="foo">
  <div>
    <Input />
  </div>
</Form.Item>
// \u9519\u8BEF\uFF1AForm.Item \u7684 children \u5176\u5B9E\u662F div\uFF0C\u800C div \u5E76\u4E0D\u80FD\u63A5\u53D7 value \u548C onChange \u5C5E\u6027`,lang:"jsx"}),u("p",{children:"\u540C\u65F6\u8BF7\u6CE8\u610F\uFF1A"}),e("ol",{children:[e("li",{children:["\u4F60",u("strong",{children:"\u4E0D\u518D\u9700\u8981\u4E5F\u4E0D\u5E94\u8BE5"}),"\u7528 ",u("code",{children:"onChange"})," \u6765\u505A\u6570\u636E\u6536\u96C6\u540C\u6B65\uFF08\u4F60\u53EF\u4EE5\u4F7F\u7528 Form \u7684 ",u("code",{children:"onValuesChange"}),"\uFF09\uFF0C\u4F46\u8FD8\u662F\u53EF\u4EE5\u7EE7\u7EED\u76D1\u542C ",u("code",{children:"onChange"})," \u4E8B\u4EF6\u3002"]}),e("li",{children:["\u4F60\u4E0D\u80FD\u7528\u63A7\u4EF6\u7684 ",u("code",{children:"value"})," \u6216 ",u("code",{children:"defaultValue"})," \u7B49\u5C5E\u6027\u6765\u8BBE\u7F6E\u8868\u5355\u57DF\u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u53EF\u4EE5\u7528 Form \u91CC\u7684 ",u("code",{children:"initialValues"})," \u6765\u8BBE\u7F6E\u3002\u6CE8\u610F ",u("code",{children:"initialValues"})," \u4E0D\u80FD\u88AB ",u("code",{children:"setState"})," \u52A8\u6001\u66F4\u65B0\uFF0C\u4F60\u9700\u8981\u7528 ",u("code",{children:"setFieldsValue"})," \u6765\u66F4\u65B0\u3002"]}),e("li",{children:["\u4F60\u4E0D\u5E94\u8BE5\u7528 ",u("code",{children:"setState"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",u("code",{children:"form.setFieldsValue"})," \u6765\u52A8\u6001\u6539\u53D8\u8868\u5355\u503C\u3002"]})]}),u("p",{children:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4E0B\u9762\u7684\u8FD9\u79CD\u5199\u6CD5\u662F\u9519\u8BEF\u7684\uFF1A"}),u(r,{code:`<Form.Item name="foo">
  <Input
    value={myInputValue} // \u9519\u8BEF\uFF1Avalue \u4E0D\u5E94\u8BE5\u88AB\u624B\u52A8\u63A7\u5236
    onChange={(v) => {
      setMyInputValue(v);
    }} // \u9519\u8BEF\uFF1A\u867D\u7136\u4F60\u53EF\u4EE5\u76D1\u542C onChange \u4E8B\u4EF6\uFF0C\u4F46\u662F\u4F60\u4E0D\u5E94\u8BE5\u5728\u8FD9\u91CC\u53BB\u7EF4\u62A4\u81EA\u5DF1\u7684\u72B6\u6001
  />
</Form.Item>`,lang:"jsx"}),u("h3",{id:"dependencies","data-anchor":"dependencies",children:"dependencies"}),e("p",{children:["\u5F53\u5B57\u6BB5\u95F4\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u65F6\u4F7F\u7528\u3002\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u8BBE\u7F6E\u4E86 ",u("code",{children:"dependencies"})," \u5C5E\u6027\u3002\u90A3\u4E48\u5B83\u6240\u4F9D\u8D56\u7684\u5B57\u6BB5\u66F4\u65B0\u65F6\uFF0C\u8BE5\u5B57\u6BB5\u5C06\u81EA\u52A8\u89E6\u53D1\u66F4\u65B0\u4E0E\u6821\u9A8C\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u573A\u666F\uFF0C\u5C31\u662F\u6CE8\u518C\u7528\u6237\u8868\u5355\u7684\u201C\u5BC6\u7801\u201D\u4E0E\u201C\u786E\u8BA4\u5BC6\u7801\u201D\u5B57\u6BB5\u3002\u201C\u786E\u8BA4\u5BC6\u7801\u201D\u6821\u9A8C\u4F9D\u8D56\u4E8E\u201C\u5BC6\u7801\u201D\u5B57\u6BB5\uFF0C\u8BBE\u7F6E ",u("code",{children:"dependencies"})," \u540E\uFF0C\u201C\u5BC6\u7801\u201D\u5B57\u6BB5\u66F4\u65B0\u4F1A\u91CD\u65B0\u89E6\u53D1\u201C\u6821\u9A8C\u5BC6\u7801\u201D\u7684\u6821\u9A8C\u903B\u8F91\u3002"]}),e("p",{children:[u("code",{children:"dependencies"})," \u4E0D\u5E94\u548C ",u("code",{children:"shouldUpdate"})," \u4E00\u8D77\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u5E26\u6765\u66F4\u65B0\u903B\u8F91\u7684\u6DF7\u4E71\u3002"]}),u("h3",{id:"shouldupdate","data-anchor":"shouldupdate",children:"shouldUpdate"}),e("p",{children:["Form \u901A\u8FC7\u589E\u91CF\u66F4\u65B0\u65B9\u5F0F\uFF0C\u53EA\u66F4\u65B0\u88AB\u4FEE\u6539\u7684\u5B57\u6BB5\u76F8\u5173\u7EC4\u4EF6\u4EE5\u8FBE\u5230\u6027\u80FD\u4F18\u5316\u76EE\u7684\u3002\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u7F16\u5199\u4EE3\u7801\u6216\u8005\u4E0E ",u("a",{href:"#dependencies",children:u("code",{children:"dependencies"})})," \u5C5E\u6027\u914D\u5408\u6821\u9A8C\u5373\u53EF\u3002\u800C\u5728\u67D0\u4E9B\u7279\u5B9A\u573A\u666F\uFF0C\u4F8B\u5982\u4FEE\u6539\u67D0\u4E2A\u5B57\u6BB5\u503C\u540E\u51FA\u73B0\u65B0\u7684\u5B57\u6BB5\u9009\u9879\u3001\u6216\u8005\u7EAF\u7CB9\u5E0C\u671B\u8868\u5355\u4EFB\u610F\u53D8\u5316\u90FD\u5BF9\u67D0\u4E00\u4E2A\u533A\u57DF\u8FDB\u884C\u6E32\u67D3\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"shouldUpdate"})," \u4FEE\u6539 Form.Item \u7684\u66F4\u65B0\u903B\u8F91\u3002"]}),e("p",{children:["\u5F53 ",u("code",{children:"shouldUpdate"})," \u4E3A ",u("code",{children:"true"})," \u65F6\uFF0CForm \u7684\u4EFB\u610F\u53D8\u5316\u90FD\u4F1A\u4F7F\u8BE5 Form.Item \u91CD\u65B0\u6E32\u67D3\u3002\u8FD9\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6E32\u67D3\u4E00\u4E9B\u533A\u57DF\u5341\u5206\u6709\u5E2E\u52A9\uFF1A"]}),u(r,{code:`<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>`,lang:"jsx"}),e("p",{children:["\u5F53 ",u("code",{children:"shouldUpdate"})," \u4E3A\u65B9\u6CD5\u65F6\uFF0C\u8868\u5355\u7684\u6BCF\u6B21\u6570\u503C\u66F4\u65B0\u90FD\u4F1A\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u539F\u5148\u7684\u503C\u4E0E\u5F53\u524D\u7684\u503C\u4EE5\u4F9B\u4F60\u6BD4\u8F83\u662F\u5426\u9700\u8981\u66F4\u65B0\u3002\u8FD9\u5BF9\u4E8E\u662F\u5426\u6839\u636E\u503C\u6765\u6E32\u67D3\u989D\u5916\u5B57\u6BB5\u5341\u5206\u6709\u5E2E\u52A9\uFF1A"]}),u(r,{code:`<Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
  {() => {
    return (
      <Form.Item name="other">
        <Input />
      </Form.Item>
    );
  }}
</Form.Item>`,lang:"jsx"}),u("h3",{id:"messagevariables","data-anchor":"messagevariables",children:"messageVariables"}),e("p",{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"messageVariables"})," \u4FEE\u6539 Form.Item \u7684\u9ED8\u8BA4\u9A8C\u8BC1\u4FE1\u606F\u3002"]}),u(r,{code:`<Form>
  <Form.Item messageVariables={{ another: 'good' }} label="user">
    <Input />
  </Form.Item>
  <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>}>
    <Input />
  </Form.Item>
</Form>`,lang:"jsx"}),u("h3",{id:"formitem-\u5982\u4F55\u914D\u5408-picker--datepicker--cascadepicker-\u4F7F\u7528","data-anchor":"formitem-\u5982\u4F55\u914D\u5408-picker--datepicker--cascadepicker-\u4F7F\u7528",children:"Form.Item \u5982\u4F55\u914D\u5408 Picker / DatePicker / CascadePicker \u4F7F\u7528\uFF1F"}),e("p",{children:["\u9996\u5148\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Picker \u7684 ",u("code",{children:"children"})," \u6E32\u67D3\u51FD\u6570\uFF0C\u6765\u6E32\u67D3\u5F53\u524D\u5DF2\u7ECF\u9009\u62E9\u7684\u503C\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5DF2 DatePicker \u4E3A\u4F8B\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5176\u4ED6\u4E24\u79CD Picker\uFF0C\u4E5F\u662F\u5927\u540C\u5C0F\u5F02\u7684\uFF1A"]}),u(r,{code:`<DatetimePicker>
  {value =>
    value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
  }
</DatetimePicker>`,lang:"jsx"}),u("p",{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u5904\u7406 Picker \u7684\u663E\u793A/\u9690\u85CF\u72B6\u6001\uFF0C\u8FD9\u662F Picker \u7EC4\u4EF6\u548C\u5176\u4ED6\u8868\u5355\u7EC4\u4EF6\u5DEE\u5F02\u6700\u5927\u3001\u4E5F\u6700\u5BB9\u6613\u8BA9\u4EBA\u8FF7\u60D1\u7684\u5730\u65B9\u4E86\u3002\u5982\u679C\u6211\u4EEC\u76F4\u63A5\u628A Picker \u653E\u5728 Form.Item \u91CC\u9762\uFF0C\u662F\u6CA1\u6709\u529E\u6CD5\u5C55\u793A\u7ED9\u7528\u6237\u7684\uFF0C\u65E0\u8BBA\u600E\u4E48\u70B9\u51FB\uFF0C\u90FD\u4E0D\u4F1A\u8BA9 Picker \u5F39\u51FA\u6765\uFF1A"}),u(r,{code:`<Form.Item
  name='birthday'
  label='Birthday'
>
  <DatePicker>
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatePicker>
</Form.Item>`,lang:"tsx"}),u("p",{children:"\u5728\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u7684\u6548\u679C\u662F\uFF0C\u70B9\u51FB\u5916\u5C42\u7684 Form.Item\uFF0C\u4F1A\u89E6\u53D1\u5185\u90E8 Picker \u7684\u663E\u793A\u3002\u4F46\u662F\uFF0C\u5728 Form.Item \u4E0A\uFF0C\u600E\u4E48\u624D\u80FD\u63A7\u5236\u5230 Picker \u5462\uFF1F\u6216\u8BB8\u4F60\u4F1A\u60F3\u81EA\u5DF1\u58F0\u660E\u4E00\u4E2A state \u6765\u624B\u52A8\u63A7\u5236\uFF0C\u4F8B\u5982\uFF1A"}),u(r,{code:"const [visible, setVisible] = useState(false)",lang:"tsx"}),u(r,{code:`<Form.Item
  name='birthday'
  label='Birthday'
  onClick={() => {
    setVisible(true)
  }}
>
  <DatetimePicker
    visible={visible}
    onClose={() => {
      setVisible(false)
    }}
  >
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatetimePicker>
</Form.Item>`,lang:"tsx"}),u("p",{children:"\u4F46\u662F\u8FD9\u6837\u5199\u5B9E\u5728\u662F\u592A\u7E41\u7410\u4E86\uFF0C\u800C\u4E14\u5982\u679C\u4E00\u4E2A\u8868\u5355\u5185\u5B58\u5728\u591A\u4E2A Picker \u6216\u8005\u8981\u914D\u5408 Form.Array \u4F7F\u7528\u65F6\uFF0C\u7B80\u76F4\u4F1A\u4EE4\u4EBA\u5D29\u6E83\u3002"}),e("p",{children:["\u6240\u4EE5 antd-mobile \u63D0\u4F9B\u4E86\u4E00\u4E2A\u4FBF\u6377\u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u5728 Form.Item \u7684 ",u("code",{children:"onClick"})," \u4E8B\u4EF6\u4E2D\uFF0C\u76F4\u63A5\u83B7\u53D6\u5230\u5185\u90E8 ",u("code",{children:"children"})," \u7684 ref\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5199\uFF1A"]}),u(r,{code:`<Form.Item
  name='birthday'
  label='Birthday'
  onClick={(e, datePickerRef: RefObject<PickerPopupActions>) => {
    datePickerRef.current?.open() // \u2B05\uFE0F
  }}
>
  <DatetimePicker>
    {value =>
      value ? dayjs(value).format('YYYY-MM-DD') : 'Please select'
    }
  </DatetimePicker>
</Form.Item>`,lang:"tsx"}),e("p",{children:["\u6700\u540E\uFF0C\u522B\u5FD8\u4E86 Picker \u7EC4\u4EF6\u7684\u786E\u8BA4\u4E8B\u4EF6\u662F ",u("code",{children:"onConfirm"})," \u800C\u4E0D\u662F ",u("code",{children:"onChange"}),"\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u914D\u7F6E\u4E00\u4E0B ",u("code",{children:"trigger"}),"\uFF1A"]}),u(r,{code:`<Form.Item
  name='birthday'
  label='Birthday'
  trigger='onConfirm'  // \u2B05\uFE0F
  onClick={(e, datePickerRef: RefObject<PickerPopupActions>) => {
    datePickerRef.current?.open()
  }}
>
  ...
</Form.Item>`,lang:"tsx"})]})})},Bu=[{Component:g,key:"form-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:y,key:"form-rules",title:"\u6821\u9A8C\u89C4\u5219"},{Component:I,key:"form-type",title:"\u8868\u5355\u9879\u7C7B\u578B"},{Component:x,key:"form-custom",title:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879"},{Component:k,key:"form-subscribe",title:"Form.Subscribe"},{Component:P,key:"form-watch",title:"Form.useWatch"},{Component:R,key:"form-shouldupdate",title:"\u590D\u6742\u8054\u52A8"},{Component:S,key:"form-list",title:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"}],Cu=void 0,Au=[{depth:1,text:"Form \u8868\u5355",id:"form-\u8868\u5355"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6821\u9A8C\u89C4\u5219",id:"\u6821\u9A8C\u89C4\u5219"},{depth:3,text:"\u8868\u5355\u9879\u7C7B\u578B",id:"\u8868\u5355\u9879\u7C7B\u578B"},{depth:3,text:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879",id:"\u81EA\u5B9A\u4E49\u8868\u5355\u9879"},{depth:3,text:"\u66F4\u65B0\u8BA2\u9605",id:"\u66F4\u65B0\u8BA2\u9605"},{depth:4,text:"Form.Subscribe \u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605",id:"formsubscribe-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605"},{depth:4,text:"Form.useWatch \u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605",id:"formusewatch-\u5B9E\u73B0\u66F4\u65B0\u8BA2\u9605"},{depth:3,text:"\u590D\u6742\u8054\u52A8",id:"\u590D\u6742\u8054\u52A8"},{depth:3,text:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879",id:"\u52A8\u6001\u589E\u51CF\u8868\u5355\u9879"},{depth:2,text:"Form Props",id:"form-props"},{depth:2,text:"Form.Item Props",id:"formitem-props"},{depth:2,text:"Form.Subscribe",id:"formsubscribe"},{depth:2,text:"Form.List Props",id:"formlist-props"},{depth:3,text:"operation",id:"operation"},{depth:2,text:"Rule \u6570\u636E\u7ED3\u6784",id:"rule-\u6570\u636E\u7ED3\u6784"},{depth:2,text:"FAQ",id:"faq"},{depth:3,text:"dependencies",id:"dependencies"},{depth:3,text:"shouldUpdate",id:"shouldupdate"},{depth:3,text:"messageVariables",id:"messagevariables"},{depth:3,text:"Form.Item \u5982\u4F55\u914D\u5408 Picker / DatePicker / CascadePicker \u4F7F\u7528\uFF1F",id:"formitem-\u5982\u4F55\u914D\u5408-picker--datepicker--cascadepicker-\u4F7F\u7528"}],Du="/src/components/form/README.md",bu="Form \u8868\u5355",vu="1658500653000";var Iu=i=>i.children({MdContent:pu,demos:Bu,frontmatter:Cu,slugs:Au,filePath:Du,title:bu,updatedTime:vu});export{pu as MdContent,Iu as default,Bu as demos,Du as filePath,Cu as frontmatter,Au as slugs,bu as title,vu as updatedTime};
