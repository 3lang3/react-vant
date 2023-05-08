var g=Object.defineProperty,k=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var C=(u,r,t)=>r in u?g(u,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[r]=t,c=(u,r)=>{for(var t in r||(r={}))O.call(r,t)&&C(u,t,r[t]);if(m)for(var t of m(r))b.call(r,t)&&C(u,t,r[t]);return u},o=(u,r)=>k(u,R(r));import{j as n,a as e,R as A,F as w}from"./main.0cdb74b2.js";import{df as s,j as h,dg as E,dh as _,S as N,B as p,da as F}from"./FloatingPanel.10dd60c0.js";var v=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],x=()=>n(s,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:v,children:(u,r,t)=>n(h,{isLink:!0,value:r.map(l=>l.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>t.open()})});const S=`import React from 'react'
import { Cascader, Field } from 'react-vant'
import options from './options'

export default () => {
  return (
    <Cascader popup={{ round: true }} title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A' options={options}>
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`,P={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cascader, Field } from 'react-vant'
import options from './options'

export default () => {
  return (
    <Cascader popup={{ round: true }} title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A' options={options}>
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`},"options.ts":{type:"FILE",value:`export default [
  {
    text: '\u6D59\u6C5F\u7701',
    value: '330000',
    children: [
      {
        text: '\u676D\u5DDE\u5E02',
        value: '330100',
        children: [
          {
            text: '\u4E0A\u57CE\u533A',
            value: '330102',
          },
          {
            text: '\u4E0B\u57CE\u533A',
            value: '330103',
          },
          {
            text: '\u6C5F\u5E72\u533A',
            value: '330104',
          },
        ],
      },
      {
        text: '\u5B81\u6CE2\u5E02',
        value: '330200',
        children: [
          {
            text: '\u6D77\u66D9\u533A',
            value: '330203',
          },
          {
            text: '\u6C5F\u5317\u533A',
            value: '330205',
          },
          {
            text: '\u5317\u4ED1\u533A',
            value: '330206',
          },
        ],
      },
      {
        text: '\u6E29\u5DDE\u5E02',
        value: '330300',
        children: [
          {
            text: '\u9E7F\u57CE\u533A',
            value: '330302',
          },
          {
            text: '\u9F99\u6E7E\u533A',
            value: '330303',
          },
          {
            text: '\u74EF\u6D77\u533A',
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: '\u6C5F\u82CF\u7701',
    value: '320000',
    children: [
      {
        text: '\u5357\u4EAC\u5E02',
        value: '320100',
        children: [
          {
            text: '\u7384\u6B66\u533A',
            value: '320102',
          },
          {
            text: '\u79E6\u6DEE\u533A',
            value: '320104',
          },
          {
            text: '\u5EFA\u90BA\u533A',
            value: '320105',
          },
        ],
      },
      {
        text: '\u65E0\u9521\u5E02',
        value: '320200',
        children: [
          {
            text: '\u9521\u5C71\u533A',
            value: '320205',
          },
          {
            text: '\u60E0\u5C71\u533A',
            value: '320206',
          },
          {
            text: '\u6EE8\u6E56\u533A',
            value: '320211',
          },
        ],
      },
      {
        text: '\u5F90\u5DDE\u5E02',
        value: '320300',
        children: [
          {
            text: '\u9F13\u697C\u533A',
            value: '320302',
          },
          {
            text: '\u4E91\u9F99\u533A',
            value: '320303',
          },
          {
            text: '\u8D3E\u6C6A\u533A',
            value: '320305',
          },
        ],
      },
    ],
  },
]
`}},key:"cascader-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var D=()=>{const[u]=E.useForm(),r=async()=>{const l=await u.getFieldsValue();console.log(l),F.info(JSON.stringify(l))},t=()=>{u.setFieldsValue({area:["330000","330100","330104"]})};return e(E,{form:u,children:[n(E.Item,{name:"area",label:"\u5730\u533A",isLink:!0,children:n(s,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:v,children:(l,d,a)=>n(_,{value:d.map(i=>i.text).join(","),readOnly:!0,placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>a.open()})})}),e(N,{block:!0,justify:"center",style:{marginTop:20},children:[n(p,{type:"primary",onClick:r,children:"\u63D0\u4EA4"}),n(p,{onClick:t,children:"\u8BBE\u7F6E\u9ED8\u8BA4\u503C"})]})]})};const j=`import React from 'react'
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
      <Form.Item name='area' label='\u5730\u533A' isLink>
        <Cascader
          popup={{ round: true }}
          title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          options={options}
        >
          {(_, selectedRows, actions) => (
            <Input
              value={selectedRows.map(el => el.text).join(',')}
              readOnly
              placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
              onClick={() => actions.open()}
            />
          )}
        </Cascader>
      </Form.Item>
      <Space block justify='center' style={{ marginTop: 20 }}>
        <Button type='primary' onClick={onSumbit}>
          \u63D0\u4EA4
        </Button>
        <Button onClick={setValue}>\u8BBE\u7F6E\u9ED8\u8BA4\u503C</Button>
      </Space>
    </Form>
  )
}
`,L={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
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
      <Form.Item name='area' label='\u5730\u533A' isLink>
        <Cascader
          popup={{ round: true }}
          title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          options={options}
        >
          {(_, selectedRows, actions) => (
            <Input
              value={selectedRows.map(el => el.text).join(',')}
              readOnly
              placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
              onClick={() => actions.open()}
            />
          )}
        </Cascader>
      </Form.Item>
      <Space block justify='center' style={{ marginTop: 20 }}>
        <Button type='primary' onClick={onSumbit}>
          \u63D0\u4EA4
        </Button>
        <Button onClick={setValue}>\u8BBE\u7F6E\u9ED8\u8BA4\u503C</Button>
      </Space>
    </Form>
  )
}
`},"options.ts":{type:"FILE",value:`export default [
  {
    text: '\u6D59\u6C5F\u7701',
    value: '330000',
    children: [
      {
        text: '\u676D\u5DDE\u5E02',
        value: '330100',
        children: [
          {
            text: '\u4E0A\u57CE\u533A',
            value: '330102',
          },
          {
            text: '\u4E0B\u57CE\u533A',
            value: '330103',
          },
          {
            text: '\u6C5F\u5E72\u533A',
            value: '330104',
          },
        ],
      },
      {
        text: '\u5B81\u6CE2\u5E02',
        value: '330200',
        children: [
          {
            text: '\u6D77\u66D9\u533A',
            value: '330203',
          },
          {
            text: '\u6C5F\u5317\u533A',
            value: '330205',
          },
          {
            text: '\u5317\u4ED1\u533A',
            value: '330206',
          },
        ],
      },
      {
        text: '\u6E29\u5DDE\u5E02',
        value: '330300',
        children: [
          {
            text: '\u9E7F\u57CE\u533A',
            value: '330302',
          },
          {
            text: '\u9F99\u6E7E\u533A',
            value: '330303',
          },
          {
            text: '\u74EF\u6D77\u533A',
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: '\u6C5F\u82CF\u7701',
    value: '320000',
    children: [
      {
        text: '\u5357\u4EAC\u5E02',
        value: '320100',
        children: [
          {
            text: '\u7384\u6B66\u533A',
            value: '320102',
          },
          {
            text: '\u79E6\u6DEE\u533A',
            value: '320104',
          },
          {
            text: '\u5EFA\u90BA\u533A',
            value: '320105',
          },
        ],
      },
      {
        text: '\u65E0\u9521\u5E02',
        value: '320200',
        children: [
          {
            text: '\u9521\u5C71\u533A',
            value: '320205',
          },
          {
            text: '\u60E0\u5C71\u533A',
            value: '320206',
          },
          {
            text: '\u6EE8\u6E56\u533A',
            value: '320211',
          },
        ],
      },
      {
        text: '\u5F90\u5DDE\u5E02',
        value: '320300',
        children: [
          {
            text: '\u9F13\u697C\u533A',
            value: '320302',
          },
          {
            text: '\u4E91\u9F99\u533A',
            value: '320303',
          },
          {
            text: '\u8D3E\u6C6A\u533A',
            value: '320305',
          },
        ],
      },
    ],
  },
]
`}},key:"cascader-form",meta:{title:"Form\u4E2D\u4F7F\u7528"}};var B=()=>{const[u,r]=A.useState([{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}]);return n(s,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:u,onChange:l=>{const d=l[0],a=u[0].children.length===0;d===u[0].value&&a&&(F.loading({message:"\u52A0\u8F7D\u4E2D...",duration:0}),setTimeout(()=>{F.clear();const i=JSON.parse(JSON.stringify(u));i[0].children=[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],r(i)},2e3))},children:(l,d,a)=>n(h,{isLink:!0,value:d.map(i=>i.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>a.open()})})};const M=`import React from 'react'
import { Cascader, Toast, Field } from 'react-vant'

export default () => {
  const [dynamicOpts, setDynamicOpts] = React.useState([
    {
      text: '\u6D59\u6C5F\u7701',
      value: '330000',
      children: [],
    },
  ])

  const onChange = (val: string[]) => {
    const key = val[0]
    const needRequest = dynamicOpts[0].children.length === 0
    if (key === dynamicOpts[0].value && needRequest) {
      Toast.loading({ message: '\u52A0\u8F7D\u4E2D...', duration: 0 })
      setTimeout(() => {
        Toast.clear()
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts))
        newOpts[0].children = [
          { text: '\u676D\u5DDE\u5E02', value: '330100' },
          { text: '\u5B81\u6CE2\u5E02', value: '330200' },
        ]
        setDynamicOpts(newOpts)
      }, 2000)
    }
  }

  return (
    <Cascader
      popup={{ round: true }}
      title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
      options={dynamicOpts}
      onChange={onChange}
    >
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`,I={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cascader, Toast, Field } from 'react-vant'

export default () => {
  const [dynamicOpts, setDynamicOpts] = React.useState([
    {
      text: '\u6D59\u6C5F\u7701',
      value: '330000',
      children: [],
    },
  ])

  const onChange = (val: string[]) => {
    const key = val[0]
    const needRequest = dynamicOpts[0].children.length === 0
    if (key === dynamicOpts[0].value && needRequest) {
      Toast.loading({ message: '\u52A0\u8F7D\u4E2D...', duration: 0 })
      setTimeout(() => {
        Toast.clear()
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts))
        newOpts[0].children = [
          { text: '\u676D\u5DDE\u5E02', value: '330100' },
          { text: '\u5B81\u6CE2\u5E02', value: '330200' },
        ]
        setDynamicOpts(newOpts)
      }, 2000)
    }
  }

  return (
    <Cascader
      popup={{ round: true }}
      title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
      options={dynamicOpts}
      onChange={onChange}
    >
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`}},key:"cascader-async",meta:{title:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"}};var y=()=>n(s,{popup:{round:!0},fieldNames:{text:"name",value:"code",children:"items"},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:[{name:"\u6D59\u6C5F\u7701",code:"330000",items:[{name:"\u676D\u5DDE\u5E02",code:"330100"}]},{name:"\u6C5F\u82CF\u7701",code:"320000",items:[{name:"\u5357\u4EAC\u5E02",code:"320100"}]}],children:(u,r,t)=>n(h,{isLink:!0,value:r.map(l=>l.name).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>t.open()})});const T=`import React from 'react'
import { Cascader, Field } from 'react-vant'

export default () => {
  return (
    <Cascader
      popup={{ round: true }}
      fieldNames={{
        text: 'name',
        value: 'code',
        children: 'items',
      }}
      title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
      options={[
        {
          name: '\u6D59\u6C5F\u7701',
          code: '330000',
          items: [{ name: '\u676D\u5DDE\u5E02', code: '330100' }],
        },
        {
          name: '\u6C5F\u82CF\u7701',
          code: '320000',
          items: [{ name: '\u5357\u4EAC\u5E02', code: '320100' }],
        },
      ]}
    >
      {(value, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.name).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`,V={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cascader, Field } from 'react-vant'

export default () => {
  return (
    <Cascader
      popup={{ round: true }}
      fieldNames={{
        text: 'name',
        value: 'code',
        children: 'items',
      }}
      title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
      options={[
        {
          name: '\u6D59\u6C5F\u7701',
          code: '330000',
          items: [{ name: '\u676D\u5DDE\u5E02', code: '330100' }],
        },
        {
          name: '\u6C5F\u82CF\u7701',
          code: '320000',
          items: [{ name: '\u5357\u4EAC\u5E02', code: '320100' }],
        },
      ]}
    >
      {(value, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.name).join(',')}
          readOnly
          label='\u5730\u533A'
          placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}
`}},key:"cascader-fieldnames",meta:{title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"}};var f=()=>{const[u,r]=A.useState([]);return e(w,{children:[n(s,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",value:u,options:v,onFinish:r,children:(t,l,d)=>n(h,{isLink:!0,value:l.map(a=>a.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>d.open()})}),n(p,{block:!0,style:{margin:"10px auto",width:"90%"},type:"primary",size:"small",onClick:()=>r(["330000","330100","330104"]),children:"\u5916\u90E8\u8BBE\u7F6E"})]})};const J=`import React from 'react'
import { Cascader, Button, Field } from 'react-vant'
import options from './options'

export default () => {
  const [value, setValue] = React.useState([])

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
        value={value}
        options={options}
        onFinish={setValue}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(',')}
            readOnly
            label='\u5730\u533A'
            placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
      <Button
        block
        style={{ margin: '10px auto', width: '90%' }}
        type='primary'
        size='small'
        onClick={() => setValue(['330000', '330100', '330104'])}
      >
        \u5916\u90E8\u8BBE\u7F6E
      </Button>
    </>
  )
}
`,$={code:J,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Cascader, Button, Field } from 'react-vant'
import options from './options'

export default () => {
  const [value, setValue] = React.useState([])

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
        value={value}
        options={options}
        onFinish={setValue}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(',')}
            readOnly
            label='\u5730\u533A'
            placeholder='\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A'
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
      <Button
        block
        style={{ margin: '10px auto', width: '90%' }}
        type='primary'
        size='small'
        onClick={() => setValue(['330000', '330100', '330104'])}
      >
        \u5916\u90E8\u8BBE\u7F6E
      </Button>
    </>
  )
}
`},"options.ts":{type:"FILE",value:`export default [
  {
    text: '\u6D59\u6C5F\u7701',
    value: '330000',
    children: [
      {
        text: '\u676D\u5DDE\u5E02',
        value: '330100',
        children: [
          {
            text: '\u4E0A\u57CE\u533A',
            value: '330102',
          },
          {
            text: '\u4E0B\u57CE\u533A',
            value: '330103',
          },
          {
            text: '\u6C5F\u5E72\u533A',
            value: '330104',
          },
        ],
      },
      {
        text: '\u5B81\u6CE2\u5E02',
        value: '330200',
        children: [
          {
            text: '\u6D77\u66D9\u533A',
            value: '330203',
          },
          {
            text: '\u6C5F\u5317\u533A',
            value: '330205',
          },
          {
            text: '\u5317\u4ED1\u533A',
            value: '330206',
          },
        ],
      },
      {
        text: '\u6E29\u5DDE\u5E02',
        value: '330300',
        children: [
          {
            text: '\u9E7F\u57CE\u533A',
            value: '330302',
          },
          {
            text: '\u9F99\u6E7E\u533A',
            value: '330303',
          },
          {
            text: '\u74EF\u6D77\u533A',
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: '\u6C5F\u82CF\u7701',
    value: '320000',
    children: [
      {
        text: '\u5357\u4EAC\u5E02',
        value: '320100',
        children: [
          {
            text: '\u7384\u6B66\u533A',
            value: '320102',
          },
          {
            text: '\u79E6\u6DEE\u533A',
            value: '320104',
          },
          {
            text: '\u5EFA\u90BA\u533A',
            value: '320105',
          },
        ],
      },
      {
        text: '\u65E0\u9521\u5E02',
        value: '320200',
        children: [
          {
            text: '\u9521\u5C71\u533A',
            value: '320205',
          },
          {
            text: '\u60E0\u5C71\u533A',
            value: '320206',
          },
          {
            text: '\u6EE8\u6E56\u533A',
            value: '320211',
          },
        ],
      },
      {
        text: '\u5F90\u5DDE\u5E02',
        value: '320300',
        children: [
          {
            text: '\u9F13\u697C\u533A',
            value: '320302',
          },
          {
            text: '\u4E91\u9F99\u533A',
            value: '320303',
          },
          {
            text: '\u8D3E\u6C6A\u533A',
            value: '320305',
          },
        ],
      },
    ],
  },
]
`}},key:"cascader-value",meta:{title:"\u53D7\u63A7\u7EC4\u4EF6"}},z=function({previewer:u=()=>null,api:r=()=>null}){const t=u;return n("div",{children:e("div",{children:[n("h1",{id:"cascader-\u7EA7\u8054\u9009\u62E9","data-anchor":"cascader-\u7EA7\u8054\u9009\u62E9",children:"Cascader \u7EA7\u8054\u9009\u62E9"}),n("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:"\u7EA7\u8054\u9009\u62E9\u6846\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002"}),n("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),n(t,{code:"import { Cascader } from 'react-vant';",lang:"js"}),n("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),n(t,o(c({},P),{children:n(x,{})})),n("h3",{id:"form\u4E2D\u4F7F\u7528","data-anchor":"form\u4E2D\u4F7F\u7528",children:"Form\u4E2D\u4F7F\u7528"}),n(t,o(c({},L),{children:n(D,{})})),n("h3",{id:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879","data-anchor":"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",children:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"}),e("p",{children:["\u53EF\u4EE5\u76D1\u542C ",n("code",{children:"onChange"})," \u4E8B\u4EF6\u5E76\u52A8\u6001\u8BBE\u7F6E ",n("code",{children:"options"}),"\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002"]}),n(t,o(c({},I),{children:n(B,{})})),n("h3",{id:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D","data-anchor":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",children:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"}),e("p",{children:["\u901A\u8FC7 ",n("code",{children:"fieldNames"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 ",n("code",{children:"options"})," \u91CC\u7684\u5B57\u6BB5\u540D\u79F0\u3002"]}),n(t,o(c({},V),{children:n(y,{})})),n("h3",{id:"\u53D7\u63A7\u7EC4\u4EF6","data-anchor":"\u53D7\u63A7\u7EC4\u4EF6",children:"\u53D7\u63A7\u7EC4\u4EF6"}),e("p",{children:["\u901A\u8FC7 ",n("code",{children:"value"})," \u5C5E\u6027\u53EF\u4EE5 Cascader \u6210\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u3002"]}),n(t,o(c({},$),{children:n(f,{})})),n("h2",{id:"api","data-anchor":"api",children:"API"}),n("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"title"}),n("td",{children:"\u9876\u90E8\u6807\u9898"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"value"}),n("td",{children:"\u5F53\u524D\u9009\u4E2D\u7684\u503C"}),n("td",{children:n("em",{children:"string[]"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"defaultValue"}),n("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C"}),n("td",{children:n("em",{children:"string[]"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"options"}),n("td",{children:"\u53EF\u9009\u9879\u6570\u636E\u6E90"}),n("td",{children:n("em",{children:"Option[]"})}),n("td",{children:n("code",{children:"[]"})})]}),e("tr",{children:[n("td",{children:"optionRender"}),n("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u6587\u5B57"}),n("td",{children:e("em",{children:["(","{"," option: Option, selected: boolean ","}",") => ReactNode"]})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"placeholder"}),n("td",{children:"\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u8BF7\u9009\u62E9"})})]}),e("tr",{children:[n("td",{children:"activeColor"}),n("td",{children:"\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"#ee0a24"})})]}),e("tr",{children:[n("td",{children:"closeable"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),e("tr",{children:[n("td",{children:"closeIcon"}),n("td",{children:"\u5173\u95ED\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:n("code",{children:"<Cross />"})})]}),e("tr",{children:[n("td",{children:"fieldNames"}),e("td",{children:["\u81EA\u5B9A\u4E49 ",n("code",{children:"options"})," \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5"]}),n("td",{children:n("em",{children:"object"})}),n("td",{children:e("code",{children:["{"," text: 'text', value: 'value', children: 'children' ","}"]})})]}),e("tr",{children:[n("td",{children:"children"}),n("td",{children:"\u6E32\u67D3\u51FD\u6570"}),n("td",{children:n("em",{children:"(val: string[], selectedRows: CascaderOption[], actions: PickerActions) => ReactNode"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u4E8B\u4EF6"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"onChange"}),n("td",{children:"\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"(val: string[], selectedRows: CascaderOption[]) => void"})})]}),e("tr",{children:[n("td",{children:"onFinish"}),n("td",{children:"\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1"}),n("td",{children:n("em",{children:"(val: string[], selectedRows: CascaderOption[]) => void"})})]}),e("tr",{children:[n("td",{children:"onClose"}),n("td",{children:"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"() => void"})})]}),e("tr",{children:[n("td",{children:"onClickTab"}),n("td",{children:"\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"(tabIndex: number, title: string) => void"})})]})]})]}),n("h3",{id:"cascaderoption-\u6570\u636E\u7ED3\u6784","data-anchor":"cascaderoption-\u6570\u636E\u7ED3\u6784",children:"CascaderOption \u6570\u636E\u7ED3\u6784"}),e("p",{children:[n("code",{children:"options"})," \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u952E\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u9009\u9879\u6587\u5B57\uFF08\u5FC5\u586B\uFF09"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"value"}),n("td",{children:"\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF08\u5FC5\u586B\uFF09"}),n("td",{children:n("em",{children:"string | number"})})]}),e("tr",{children:[n("td",{children:"color"}),n("td",{children:"\u9009\u9879\u6587\u5B57\u989C\u8272"}),n("td",{children:n("em",{children:"string"})})]}),e("tr",{children:[n("td",{children:"children"}),n("td",{children:"\u5B50\u9009\u9879\u5217\u8868"}),n("td",{children:n("em",{children:"Option[]"})})]}),e("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u9009\u9879"}),n("td",{children:n("em",{children:"boolean"})})]}),e("tr",{children:[n("td",{children:"className"}),n("td",{children:"\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class"}),n("td",{children:n("em",{children:"string | Array | object"})})]})]})]}),n("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[n("thead",{children:e("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[n("td",{children:"--rv-cascader-header-height"}),n("td",{children:n("em",{children:"48px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-header-padding"}),n("td",{children:n("em",{children:"0 var(--rv-padding-md)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-title-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-lg)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-title-line-height"}),n("td",{children:n("em",{children:"20px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-close-icon-size"}),n("td",{children:n("em",{children:"22px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-close-icon-color"}),n("td",{children:n("em",{children:"var(--rv-gray-5)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-close-icon-active-color"}),n("td",{children:n("em",{children:"var(--rv-gray-6)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-selected-icon-size"}),n("td",{children:n("em",{children:"18px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-tabs-height"}),n("td",{children:n("em",{children:"48px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-active-color"}),n("td",{children:n("em",{children:"var(--rv-danger-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-options-height"}),n("td",{children:n("em",{children:"384px"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-option-disabled-color"}),n("td",{children:n("em",{children:"van(--rv-gray-5)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-tab-color"}),n("td",{children:n("em",{children:"var(--rv-text-color)"})}),n("td",{children:"-"})]}),e("tr",{children:[n("td",{children:"--rv-cascader-unselected-tab-color"}),n("td",{children:n("em",{children:"var(--rv-gray-6)"})}),n("td",{children:"-"})]})]})]})]})})},q=[{Component:x,key:"cascader-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:D,key:"cascader-form",title:"Form\u4E2D\u4F7F\u7528"},{Component:B,key:"cascader-async",title:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"},{Component:y,key:"cascader-fieldnames",title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},{Component:f,key:"cascader-value",title:"\u53D7\u63A7\u7EC4\u4EF6"}],G=void 0,H=[{depth:1,text:"Cascader \u7EA7\u8054\u9009\u62E9",id:"cascader-\u7EA7\u8054\u9009\u62E9"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"Form\u4E2D\u4F7F\u7528",id:"form\u4E2D\u4F7F\u7528"},{depth:3,text:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",id:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",id:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},{depth:3,text:"\u53D7\u63A7\u7EC4\u4EF6",id:"\u53D7\u63A7\u7EC4\u4EF6"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"CascaderOption \u6570\u636E\u7ED3\u6784",id:"cascaderoption-\u6570\u636E\u7ED3\u6784"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],K="/src/components/cascader/README.md",Q="Cascader \u7EA7\u8054\u9009\u62E9",U="1683550562000";var Z=u=>u.children({MdContent:z,demos:q,frontmatter:G,slugs:H,filePath:K,title:Q,updatedTime:U});export{z as MdContent,Z as default,q as demos,K as filePath,G as frontmatter,H as slugs,Q as title,U as updatedTime};
