var B=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(n,t,d)=>t in n?B(n,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[t]=d,i=(n,t)=>{for(var d in t||(t={}))f.call(t,d)&&p(n,d,t[d]);if(E)for(var d of E(t))O.call(t,d)&&p(n,d,t[d]);return n},a=(n,t)=>y(n,g(t));import{j as e,R as v,a as u,F as R}from"./main.531c777e.js";import{df as h,j as s,da as F,B as k}from"./WaterMark.6f52b203.js";var C=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],m=()=>e(h,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:C,children:(n,t,d)=>e(s,{isLink:!0,value:t.map(r=>r.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>d.open()})});const b=`import React from 'react';
import { Cascader, Field } from 'react-vant';
import options from './options';

export default () => {
  return (
    <Cascader popup={{ round: true }} title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A" options={options}>
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map((el) => el.text).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
`,w={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cascader, Field } from 'react-vant';
import options from './options';

export default () => {
  return (
    <Cascader popup={{ round: true }} title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A" options={options}>
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map((el) => el.text).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
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
];
`}},key:"cascader-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var A=()=>{const[n,t]=v.useState([{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}]);return e(h,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:n,onChange:r=>{const l=r[0],c=n[0].children.length===0;l===n[0].value&&c&&(F.loading({message:"\u52A0\u8F7D\u4E2D...",duration:0}),setTimeout(()=>{F.clear();const o=JSON.parse(JSON.stringify(n));o[0].children=[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],t(o)},2e3))},children:(r,l,c)=>e(s,{isLink:!0,value:l.map(o=>o.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>c.open()})})};const _=`import React from 'react';
import { Cascader, Toast, Field } from 'react-vant';

export default () => {
  const [dynamicOpts, setDynamicOpts] = React.useState([
    {
      text: '\u6D59\u6C5F\u7701',
      value: '330000',
      children: [],
    },
  ]);

  const onChange = (val: string[]) => {
    const key = val[0];
    const needRequest = dynamicOpts[0].children.length === 0;
    if (key === dynamicOpts[0].value && needRequest) {
      Toast.loading({ message: '\u52A0\u8F7D\u4E2D...', duration: 0 });
      setTimeout(() => {
        Toast.clear();
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts));
        newOpts[0].children = [
          { text: '\u676D\u5DDE\u5E02', value: '330100' },
          { text: '\u5B81\u6CE2\u5E02', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };

  return (
    <Cascader
      popup={{ round: true }}
      title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
      options={dynamicOpts}
      onChange={onChange}
    >
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map((el) => el.text).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
`,N={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cascader, Toast, Field } from 'react-vant';

export default () => {
  const [dynamicOpts, setDynamicOpts] = React.useState([
    {
      text: '\u6D59\u6C5F\u7701',
      value: '330000',
      children: [],
    },
  ]);

  const onChange = (val: string[]) => {
    const key = val[0];
    const needRequest = dynamicOpts[0].children.length === 0;
    if (key === dynamicOpts[0].value && needRequest) {
      Toast.loading({ message: '\u52A0\u8F7D\u4E2D...', duration: 0 });
      setTimeout(() => {
        Toast.clear();
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts));
        newOpts[0].children = [
          { text: '\u676D\u5DDE\u5E02', value: '330100' },
          { text: '\u5B81\u6CE2\u5E02', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };

  return (
    <Cascader
      popup={{ round: true }}
      title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
      options={dynamicOpts}
      onChange={onChange}
    >
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map((el) => el.text).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
`}},key:"cascader-async",meta:{title:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"}};var x=()=>e(h,{popup:{round:!0},fieldNames:{text:"name",value:"code",children:"items"},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:[{name:"\u6D59\u6C5F\u7701",code:"330000",items:[{name:"\u676D\u5DDE\u5E02",code:"330100"}]},{name:"\u6C5F\u82CF\u7701",code:"320000",items:[{name:"\u5357\u4EAC\u5E02",code:"320100"}]}],children:(n,t,d)=>e(s,{isLink:!0,value:t.map(r=>r.name).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>d.open()})});const P=`import React from 'react';
import { Cascader, Field } from 'react-vant';

export default () => {
  return (
    <Cascader
      popup={{ round: true }}
      fieldNames={{
        text: 'name',
        value: 'code',
        children: 'items',
      }}
      title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
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
          value={selectedRows.map((el) => el.name).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
`,j={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cascader, Field } from 'react-vant';

export default () => {
  return (
    <Cascader
      popup={{ round: true }}
      fieldNames={{
        text: 'name',
        value: 'code',
        children: 'items',
      }}
      title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
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
          value={selectedRows.map((el) => el.name).join(',')}
          readOnly
          label="\u5730\u533A"
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  );
};
`}},key:"cascader-fieldnames",meta:{title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"}};var D=()=>{const[n,t]=v.useState([]);return u(R,{children:[e(h,{popup:{round:!0},title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",value:n,options:C,onFinish:t,children:(d,r,l)=>e(s,{isLink:!0,value:r.map(c=>c.text).join(","),readOnly:!0,label:"\u5730\u533A",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",onClick:()=>l.open()})}),e(k,{block:!0,style:{margin:"10px auto",width:"90%"},type:"primary",size:"small",onClick:()=>t(["330000","330100","330104"]),children:"\u5916\u90E8\u8BBE\u7F6E"})]})};const M=`import React from 'react';
import { Cascader, Button, Field } from 'react-vant';
import options from './options';

export default () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
        value={value}
        options={options}
        onFinish={setValue}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map((el) => el.text).join(',')}
            readOnly
            label="\u5730\u533A"
            placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
      <Button
        block
        style={{ margin: '10px auto', width: '90%' }}
        type="primary"
        size="small"
        onClick={() => setValue(['330000', '330100', '330104'])}
      >
        \u5916\u90E8\u8BBE\u7F6E
      </Button>
    </>
  );
};
`,L={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cascader, Button, Field } from 'react-vant';
import options from './options';

export default () => {
  const [value, setValue] = React.useState([]);

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
        value={value}
        options={options}
        onFinish={setValue}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map((el) => el.text).join(',')}
            readOnly
            label="\u5730\u533A"
            placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
      <Button
        block
        style={{ margin: '10px auto', width: '90%' }}
        type="primary"
        size="small"
        onClick={() => setValue(['330000', '330100', '330104'])}
      >
        \u5916\u90E8\u8BBE\u7F6E
      </Button>
    </>
  );
};
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
];
`}},key:"cascader-value",meta:{title:"\u53D7\u63A7\u7EC4\u4EF6"}},S=function({previewer:n=()=>null,api:t=()=>null}){const d=n;return e("div",{children:u("div",{children:[e("h1",{id:"cascader-\u7EA7\u8054\u9009\u62E9","data-anchor":"cascader-\u7EA7\u8054\u9009\u62E9",children:"Cascader \u7EA7\u8054\u9009\u62E9"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7EA7\u8054\u9009\u62E9\u6846\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(d,{code:"import { Cascader } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(d,a(i({},w),{children:e(m,{})})),e("h3",{id:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879","data-anchor":"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",children:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"}),u("p",{children:["\u53EF\u4EE5\u76D1\u542C ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u5E76\u52A8\u6001\u8BBE\u7F6E ",e("code",{children:"options"}),"\uFF0C\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D\u9009\u9879\u3002"]}),e(d,a(i({},N),{children:e(A,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D","data-anchor":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",children:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"fieldNames"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49 ",e("code",{children:"options"})," \u91CC\u7684\u5B57\u6BB5\u540D\u79F0\u3002"]}),e(d,a(i({},j),{children:e(x,{})})),e("h3",{id:"\u53D7\u63A7\u7EC4\u4EF6","data-anchor":"\u53D7\u63A7\u7EC4\u4EF6",children:"\u53D7\u63A7\u7EC4\u4EF6"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u5C5E\u6027\u53EF\u4EE5 Cascader \u6210\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u3002"]}),e(d,a(i({},L),{children:e(D,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u9876\u90E8\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u7684\u503C"}),e("td",{children:e("em",{children:"string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C"}),e("td",{children:e("em",{children:"string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"options"}),e("td",{children:"\u53EF\u9009\u9879\u6570\u636E\u6E90"}),e("td",{children:e("em",{children:"Option[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"optionRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u6587\u5B57"}),e("td",{children:u("em",{children:["(","{"," option: Option, selected: boolean ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u672A\u9009\u4E2D\u65F6\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u8BF7\u9009\u62E9"})})]}),u("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u9009\u4E2D\u72B6\u6001\u7684\u9AD8\u4EAE\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#ee0a24"})})]}),u("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Cross />"})})]}),u("tr",{children:[e("td",{children:"fieldNames"}),u("td",{children:["\u81EA\u5B9A\u4E49 ",e("code",{children:"options"})," \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5"]}),e("td",{children:e("em",{children:"object"})}),e("td",{children:u("code",{children:["{"," text: 'text', value: 'value', children: 'children' ","}"]})})]}),u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u6E32\u67D3\u51FD\u6570"}),e("td",{children:e("em",{children:"(val: string[], selectedRows: CascaderOption[], actions: PickerActions) => ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9009\u4E2D\u9879\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(val: string[], selectedRows: CascaderOption[]) => void"})})]}),u("tr",{children:[e("td",{children:"onFinish"}),e("td",{children:"\u5168\u90E8\u9009\u9879\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1"}),e("td",{children:e("em",{children:"(val: string[], selectedRows: CascaderOption[]) => void"})})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"() => void"})})]}),u("tr",{children:[e("td",{children:"onClickTab"}),e("td",{children:"\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(tabIndex: number, title: string) => void"})})]})]})]}),e("h3",{id:"cascaderoption-\u6570\u636E\u7ED3\u6784","data-anchor":"cascaderoption-\u6570\u636E\u7ED3\u6784",children:"CascaderOption \u6570\u636E\u7ED3\u6784"}),u("p",{children:[e("code",{children:"options"})," \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u9009\u9879\u6587\u5B57\uFF08\u5FC5\u586B\uFF09"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF08\u5FC5\u586B\uFF09"}),e("td",{children:e("em",{children:"string | number"})})]}),u("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u9009\u9879\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})})]}),u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u5B50\u9009\u9879\u5217\u8868"}),e("td",{children:e("em",{children:"Option[]"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u9009\u9879"}),e("td",{children:e("em",{children:"boolean"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684 class"}),e("td",{children:e("em",{children:"string | Array | object"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-cascader-header-height"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-header-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-title-line-height"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-close-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-close-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-close-icon-active-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-selected-icon-size"}),e("td",{children:e("em",{children:"18px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-tabs-height"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-active-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-options-height"}),e("td",{children:e("em",{children:"384px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-option-disabled-color"}),e("td",{children:e("em",{children:"van(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-tab-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cascader-unselected-tab-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]})]})]})]})})},T=[{Component:m,key:"cascader-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:A,key:"cascader-async",title:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"},{Component:x,key:"cascader-fieldnames",title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},{Component:D,key:"cascader-value",title:"\u53D7\u63A7\u7EC4\u4EF6"}],I=void 0,V=[{depth:1,text:"Cascader \u7EA7\u8054\u9009\u62E9",id:"cascader-\u7EA7\u8054\u9009\u62E9"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",id:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D",id:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},{depth:3,text:"\u53D7\u63A7\u7EC4\u4EF6",id:"\u53D7\u63A7\u7EC4\u4EF6"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"CascaderOption \u6570\u636E\u7ED3\u6784",id:"cascaderoption-\u6570\u636E\u7ED3\u6784"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],z="/src/components/cascader/README.md",J="Cascader \u7EA7\u8054\u9009\u62E9",$="1658500653000";var K=n=>n.children({MdContent:S,demos:T,frontmatter:I,slugs:V,filePath:z,title:J,updatedTime:$});export{S as MdContent,K as default,T as demos,z as filePath,I as frontmatter,V as slugs,J as title,$ as updatedTime};
