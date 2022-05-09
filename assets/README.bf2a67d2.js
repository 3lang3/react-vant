var k=Object.defineProperty,N=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var p=(t,d,r)=>d in t?k(t,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[d]=r,i=(t,d)=>{for(var r in d||(d={}))_.call(d,r)&&p(t,r,d[r]);if(E)for(var r of E(d))z.call(d,r)&&p(t,r,d[r]);return t},c=(t,d)=>N(t,I(d));import{r as n,j as e,a as u,F as h}from"./main.cc295cd4.js";import{j as l,C as s,g as C,d0 as V,d9 as B,B as m}from"./index.c79ab82b.js";var A=()=>{const[t,d]=n.exports.useState("");return e(l,{label:"\u6587\u672C",tooltip:"\u63D0\u793Atooltip",intro:e("div",{children:"We must make sure that your are a human."}),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",value:t,onChange:d})};const L={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

// Field \u662F\u57FA\u4E8E Cell \u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 Cell.Group \u4F5C\u4E3A\u5BB9\u5668\u6765\u63D0\u4F9B\u5916\u8FB9\u6846\u3002
export default () => {
  const [value, setValue] = useState('');
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
      value={value}
      onChange={setValue}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

// Field \u662F\u57FA\u4E8E Cell \u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 Cell.Group \u4F5C\u4E3A\u5BB9\u5668\u6765\u63D0\u4F9B\u5916\u8FB9\u6846\u3002
export default () => {
  const [value, setValue] = useState('');
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
      value={value}
      onChange={setValue}
    />
  );
};`}},key:"field-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var v=()=>{const[t,d]=n.exports.useState(""),[r,a]=n.exports.useState(""),[o,F]=n.exports.useState(""),[R,w]=n.exports.useState("");return u(h,{children:[e(l,{value:t,type:"tel",label:"\u624B\u673A\u53F7",onChange:d,placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"}),e(l,{value:r,type:"digit",label:"\u6574\u6570",onChange:a,placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"}),e(l,{value:o,type:"number",label:"\u6570\u5B57",onChange:F,placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"}),e(l,{value:R,type:"password",label:"\u5BC6\u7801",onChange:w,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})]})};const T=`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [tel, setTel] = useState('');
  const [digit, setDigit] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPasswrod] = useState('');

  return (
    <>
      <Field value={tel} type="tel" label="\u624B\u673A\u53F7" onChange={setTel} placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
      <Field value={digit} type="digit" label="\u6574\u6570" onChange={setDigit} placeholder="\u8BF7\u8F93\u5165\u6574\u6570" />
      <Field
        value={number}
        type="number"
        label="\u6570\u5B57"
        onChange={setNumber}
        placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
      />
      <Field
        value={password}
        type="password"
        label="\u5BC6\u7801"
        onChange={setPasswrod}
        placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
      />
    </>
  );
};
`,j={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [tel, setTel] = useState('');
  const [digit, setDigit] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPasswrod] = useState('');

  return (
    <>
      <Field value={tel} type="tel" label="\u624B\u673A\u53F7" onChange={setTel} placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
      <Field value={digit} type="digit" label="\u6574\u6570" onChange={setDigit} placeholder="\u8BF7\u8F93\u5165\u6574\u6570" />
      <Field
        value={number}
        type="number"
        label="\u6570\u5B57"
        onChange={setNumber}
        placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
      />
      <Field
        value={password}
        type="password"
        label="\u5BC6\u7801"
        onChange={setPasswrod}
        placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
      />
    </>
  );
};
`}},key:"field-type",meta:{title:"\u81EA\u5B9A\u4E49\u7C7B\u578B",card:!0}};var f=()=>u(s.Group,{children:[e(l,{label:"\u6587\u672C",value:"\u8F93\u5165\u6846\u53EA\u8BFB",readonly:!0}),e(l,{label:"\u6587\u672C",value:"\u8F93\u5165\u6846\u5DF2\u7981\u7528",disabled:!0})]});const G={code:`import React from 'react';
import { Cell, Field } from 'react-vant';

export default () => {
  return (
    <Cell.Group>
      <Field label="\u6587\u672C" value="\u8F93\u5165\u6846\u53EA\u8BFB" readonly />
      <Field label="\u6587\u672C" value="\u8F93\u5165\u6846\u5DF2\u7981\u7528" disabled />
    </Cell.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Field } from 'react-vant';

export default () => {
  return (
    <Cell.Group>
      <Field label="\u6587\u672C" value="\u8F93\u5165\u6846\u53EA\u8BFB" readonly />
      <Field label="\u6587\u672C" value="\u8F93\u5165\u6846\u5DF2\u7981\u7528" disabled />
    </Cell.Group>
  );
};`}},key:"field-demo-1",meta:{title:"\u7981\u7528\u8F93\u5165\u6846",card:!0}};var g=()=>{const[t,d]=n.exports.useState(""),[r,a]=n.exports.useState("");return e(h,{children:u(s.Group,{children:[e(l,{value:t,onChange:d,label:"\u6587\u672C",leftIcon:e(C,{}),rightIcon:e(V,{}),placeholder:"\u663E\u793A\u56FE\u6807",onClickLeftIcon:()=>B.info("\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB"),onClickRightIcon:()=>B.info("\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB")}),e(l,{value:r,onChange:a,clearable:!0,label:"\u6587\u672C",leftIcon:e(C,{}),placeholder:"\u663E\u793A\u6E05\u9664\u56FE\u6807"})]})})};const W=`import { ShopO, WarningO } from '@react-vant/icons';
import React, { useState } from 'react';
import { Cell, Field, Toast } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label="\u6587\u672C"
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder="\u663E\u793A\u56FE\u6807"
          onClickLeftIcon={() => Toast.info('\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB')}
          onClickRightIcon={() => Toast.info('\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB')}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label="\u6587\u672C"
          leftIcon={<ShopO />}
          placeholder="\u663E\u793A\u6E05\u9664\u56FE\u6807"
        />
      </Cell.Group>
    </>
  );
};
`,O={code:W,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import { ShopO, WarningO } from '@react-vant/icons';
import React, { useState } from 'react';
import { Cell, Field, Toast } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label="\u6587\u672C"
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder="\u663E\u793A\u56FE\u6807"
          onClickLeftIcon={() => Toast.info('\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB')}
          onClickRightIcon={() => Toast.info('\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB')}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label="\u6587\u672C"
          leftIcon={<ShopO />}
          placeholder="\u663E\u793A\u6E05\u9664\u56FE\u6807"
        />
      </Cell.Group>
    </>
  );
};
`}},key:"field-icon",meta:{title:"\u663E\u793A\u56FE\u6807",card:!0}};var D=()=>{const[t,d]=n.exports.useState(""),[r,a]=n.exports.useState("");return e(h,{children:u(s.Group,{children:[e(l,{value:t,error:!0,required:!0,label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",onChange:d}),e(l,{value:r,required:!0,label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",errorMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",onChange:a})]})})};const $=`import React, { useState } from 'react';
import { Cell, Field } from 'react-vant';

export default () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label="\u7528\u6237\u540D"
          placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label="\u624B\u673A\u53F7"
          placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          errorMessage="\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  );
};
`,q={code:$,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Cell, Field } from 'react-vant';

export default () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label="\u7528\u6237\u540D"
          placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label="\u624B\u673A\u53F7"
          placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
          errorMessage="\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  );
};
`}},key:"field-error",meta:{title:"\u9519\u8BEF\u63D0\u793A",card:!0}};var b=()=>e(l,{center:!0,clearable:!0,label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",button:e(m,{size:"small",type:"primary",children:"\u53D1\u9001"})});const U={code:`import React from 'react';
import { Field, Button } from 'react-vant';

export default () => {
  return (
    <Field
      center
      clearable
      label="\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      placeholder="\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      button={
        <Button size="small" type="primary">
          \u53D1\u9001
        </Button>
      }
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Field, Button } from 'react-vant';

export default () => {
  return (
    <Field
      center
      clearable
      label="\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      placeholder="\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"
      button={
        <Button size="small" type="primary">
          \u53D1\u9001
        </Button>
      }
    />
  );
};`}},key:"field-demo-2",meta:{title:"\u63D2\u5165\u6309\u94AE",card:!0}};var x=()=>{const[t,d]=n.exports.useState(""),[r,a]=n.exports.useState(""),o=F=>F.replace(/\d/g,"");return u(h,{children:[e(l,{value:t,label:"\u6587\u672C",formatter:o,placeholder:"\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:d}),e(l,{value:r,label:"\u6587\u672C",formatter:o,formatTrigger:"onBlur",placeholder:"\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:a})]})};const H=`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const formatter = (val) => val.replace(/\\d/g, '');

  return (
    <>
      <Field
        value={value1}
        label="\u6587\u672C"
        formatter={formatter}
        placeholder="\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316"
        onChange={setValue1}
      />
      <Field
        value={value2}
        label="\u6587\u672C"
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316"
        onChange={setValue2}
      />
    </>
  );
};
`,J={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const formatter = (val) => val.replace(/\\d/g, '');

  return (
    <>
      <Field
        value={value1}
        label="\u6587\u672C"
        formatter={formatter}
        placeholder="\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316"
        onChange={setValue1}
      />
      <Field
        value={value2}
        label="\u6587\u672C"
        formatter={formatter}
        formatTrigger="onBlur"
        placeholder="\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316"
        onChange={setValue2}
      />
    </>
  );
};
`}},key:"field-formatter",meta:{title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",card:!0}};var y=()=>{const[t,d]=n.exports.useState("");return e(l,{rows:1,autosize:!0,value:t,onChange:d,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00"})};const K={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      autosize
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      autosize
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`}},key:"field-demo-3",meta:{title:"\u9AD8\u5EA6\u81EA\u9002\u5E94",card:!0}};var S=()=>{const[t,d]=n.exports.useState("");return e(l,{rows:2,autosize:!0,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00",value:t,onChange:d,maxlength:50,showWordLimit:!0})};const Q={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autosize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxlength={50}
      showWordLimit
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autosize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxlength={50}
      showWordLimit
    />
  );
};`}},key:"field-demo-4",meta:{title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",card:!0}};var M=()=>e(l,{label:"\u6587\u672C",placeholder:"\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50",inputAlign:"right"});const X={code:`import React from 'react';
import { Field } from 'react-vant';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" inputAlign="right" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Field } from 'react-vant';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" inputAlign="right" />;
};`}},key:"field-demo-5",meta:{title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",card:!0}};var P=()=>{const t=n.exports.useRef(null);return e(l,{center:!0,ref:t,placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",label:"\u6587\u672C",button:e(m,{size:"small",onClick:()=>{var d;(d=t==null?void 0:t.current)==null||d.focus()},children:"\u805A\u7126"})})};const Y=`import React, { useRef } from 'react';
import { Field, Button } from 'react-vant';
import type { FieldInstance } from 'react-vant';

export default () => {
  const fieldRef = useRef<FieldInstance>(null);

  return (
    <Field
      center
      ref={fieldRef}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
      label="\u6587\u672C"
      button={
        <Button
          size="small"
          onClick={() => {
            fieldRef?.current?.focus();
          }}
        >
          \u805A\u7126
        </Button>
      }
    />
  );
};
`,Z={code:Y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Field, Button } from 'react-vant';
import type { FieldInstance } from 'react-vant';

export default () => {
  const fieldRef = useRef<FieldInstance>(null);

  return (
    <Field
      center
      ref={fieldRef}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
      label="\u6587\u672C"
      button={
        <Button
          size="small"
          onClick={() => {
            fieldRef?.current?.focus();
          }}
        >
          \u805A\u7126
        </Button>
      }
    />
  );
};
`}},key:"field-ref",meta:{title:"ref\u8C03\u7528",card:!0}},ee=function({previewer:t=()=>null,api:d=()=>null}){const r=t;return e("div",{children:u("div",{children:[e("h1",{id:"field-\u8F93\u5165\u6846","data-anchor":"field-\u8F93\u5165\u6846",children:"Field \u8F93\u5165\u6846"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u8868\u5355\u4E2D\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Field } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"value"})," \u548C ",e("code",{children:"input"})," \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 ",e("code",{children:"placeholder"})," \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002"]}),e(r,c(i({},L),{children:e(A,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u7C7B\u578B","data-anchor":"\u81EA\u5B9A\u4E49\u7C7B\u578B",children:"\u81EA\u5B9A\u4E49\u7C7B\u578B"}),u("p",{children:["\u6839\u636E ",e("code",{children:"type"})," \u5C5E\u6027\u5B9A\u4E49\u4E0D\u540C\u7C7B\u578B\u7684\u8F93\u5165\u6846\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",e("code",{children:"text"}),"\u3002"]}),e(r,c(i({},j),{children:e(v,{})})),e("h3",{id:"\u7981\u7528\u8F93\u5165\u6846","data-anchor":"\u7981\u7528\u8F93\u5165\u6846",children:"\u7981\u7528\u8F93\u5165\u6846"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"readonly"})," \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002"]}),e(r,c(i({},G),{children:e(f,{})})),e("h3",{id:"\u663E\u793A\u56FE\u6807","data-anchor":"\u663E\u793A\u56FE\u6807",children:"\u663E\u793A\u56FE\u6807"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"leftIcon"})," \u548C ",e("code",{children:"rightIcon"})," \u914D\u7F6E\u8F93\u5165\u6846\u4E24\u4FA7\u7684\u56FE\u6807\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"clearable"})," \u5728\u8F93\u5165\u8FC7\u7A0B\u4E2D\u5C55\u793A\u6E05\u9664\u56FE\u6807\u3002"]}),e(r,c(i({},O),{children:e(g,{})})),e("h3",{id:"\u9519\u8BEF\u63D0\u793A","data-anchor":"\u9519\u8BEF\u63D0\u793A",children:"\u9519\u8BEF\u63D0\u793A"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"required"})," \u5C5E\u6027\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5FC5\u586B\u9879\uFF0C\u53EF\u4EE5\u914D\u5408 ",e("code",{children:"error"})," \u6216 ",e("code",{children:"errorMessage"})," \u5C5E\u6027\u663E\u793A\u5BF9\u5E94\u7684\u9519\u8BEF\u63D0\u793A\u3002"]}),e(r,c(i({},q),{children:e(D,{})})),e("h3",{id:"\u63D2\u5165\u6309\u94AE","data-anchor":"\u63D2\u5165\u6309\u94AE",children:"\u63D2\u5165\u6309\u94AE"}),e("p",{children:"\u901A\u8FC7 button \u63D2\u69FD\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u5C3E\u90E8\u63D2\u5165\u6309\u94AE\u3002"}),e(r,c(i({},U),{children:e(b,{})})),e("h3",{id:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9","data-anchor":"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",children:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"formatter"})," \u5C5E\u6027\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u901A\u8FC7 ",e("code",{children:"format-trigger"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u6267\u884C\u683C\u5F0F\u5316\u7684\u65F6\u673A\uFF0C\u9ED8\u8BA4\u5728\u8F93\u5165\u65F6\u8FDB\u884C\u683C\u5F0F\u5316\u3002"]}),e(r,c(i({},J),{children:e(x,{})})),e("h3",{id:"\u9AD8\u5EA6\u81EA\u9002\u5E94","data-anchor":"\u9AD8\u5EA6\u81EA\u9002\u5E94",children:"\u9AD8\u5EA6\u81EA\u9002\u5E94"}),u("p",{children:["\u5BF9\u4E8E textarea\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"autosize"})," \u5C5E\u6027\u8BBE\u7F6E\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002"]}),e(r,c(i({},K),{children:e(y,{})})),e("h3",{id:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1","data-anchor":"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",children:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"maxlength"})," \u548C ",e("code",{children:"showWordLimit"})," \u5C5E\u6027\u540E\u4F1A\u5728\u5E95\u90E8\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\u3002"]}),e(r,c(i({},Q),{children:e(S,{})})),e("h3",{id:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50","data-anchor":"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",children:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"inputAlign"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u5165\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"}),"\u3001",e("code",{children:"right"}),"\u3002"]}),e(r,c(i({},X),{children:e(M,{})})),e("h3",{id:"ref-\u8C03\u7528","data-anchor":"ref-\u8C03\u7528",children:"ref \u8C03\u7528"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e(r,c(i({},Z),{children:e(P,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u540D\u79F0\uFF0C\u63D0\u4EA4\u8868\u5355\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u8F93\u5165\u6846\u7C7B\u578B, \u53EF\u9009\u503C\u4E3A ",e("code",{children:"tel"})," ",e("code",{children:"digit"}),e("br",{}),e("code",{children:"number"})," ",e("code",{children:"textarea"})," ",e("code",{children:"password"})," \u7B49"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"text"})})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxlength"}),e("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readonly"}),e("td",{children:"\u662F\u5426\u53EA\u8BFB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"colon"}),e("td",{children:"\u662F\u5426\u5728 label \u540E\u9762\u6DFB\u52A0\u5192\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"intro"}),e("td",{children:"\u989D\u5916\u7684\u8F93\u5165\u6846\u63D0\u793A\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"tooltip"}),e("td",{children:"\u5B57\u6BB5\u63D0\u793A\u4FE1\u606F"}),u("td",{children:[e("em",{children:"ReactNode |"})," ",u("a",{href:"/#/zh-CN/dialog#props",children:["DialogProps & ","{"," icon: ReactNode ","}"]})]}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearable"}),e("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clearIcon"}),e("td",{children:"\u6E05\u9664\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Clear />"})})]}),u("tr",{children:[e("td",{children:"clearTrigger"}),u("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",e("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",e("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),e("td",{children:"FieldClearTrigger"}),e("td",{children:e("code",{children:"focus"})})]}),u("tr",{children:[e("td",{children:"clickable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"isLink"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"autofocus"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showWordLimit"}),u("td",{children:["\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u9700\u8981\u8BBE\u7F6E",e("code",{children:"maxlength"}),"\u5C5E\u6027"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"error"}),e("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"errorMessage"}),e("td",{children:"\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatTrigger"}),u("td",{children:["\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"onBlur"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"onChange"})})]}),u("tr",{children:[e("td",{children:"arrowDirection"}),u("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})," ",e("code",{children:"up"})," ",e("code",{children:"down"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"labelClass"}),e("td",{children:"\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"labelWidth"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6.2em"})})]}),u("tr",{children:[e("td",{children:"labelAlign"}),u("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"inputAlign"}),u("td",{children:["\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"errorMessageAlign"}),u("td",{children:["\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"center"})," ",e("code",{children:"right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"left"})})]}),u("tr",{children:[e("td",{children:"autosize"}),u("td",{children:["\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 textarea \u6709\u6548\uFF0C",e("br",{}),"\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 ","{"," maxHeight: 100, minHeight: 50 ","}","\uFF0C",e("br",{}),"\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"boolean | object"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"leftIcon"}),e("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"rightIcon"}),e("td",{children:"\u53F3\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"button"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"val: string | number"})})]}),u("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClear"}),e("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB Field \u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickInput"}),e("td",{children:"\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickLeftIcon"}),e("td",{children:"\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickRightIcon"}),e("td",{children:"\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"focus"}),e("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"blur"}),e("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-field-label-width"}),e("td",{children:e("em",{children:"6.2em"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-label-margin-right"}),e("td",{children:e("em",{children:"var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-input-background-color"}),e("td",{children:e("em",{children:"transparent"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-input-error-text-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-input-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-placeholder-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-clear-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-clear-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-right-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-error-message-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-error-message-font-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-text-area-min-height"}),e("td",{children:e("em",{children:"60px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-word-limit-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-word-limit-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-word-limit-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-field-required-mark-color"}),e("td",{children:e("em",{children:"var(--rv-red)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text","data-anchor":"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text",children:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?"}),u("p",{children:["HTML \u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxlength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A ",e("code",{children:"number"})," \u65F6\uFF0CField \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 ",e("code",{children:'type="number"'})," \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 ",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode",children:"inputmode \u5C5E\u6027"}),"\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002"]}),e("h3",{id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548","data-anchor":"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),u("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",e("a",{href:"#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},ue=[{Component:A,key:"field-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:v,key:"field-type",title:"\u81EA\u5B9A\u4E49\u7C7B\u578B",card:!0},{Component:f,key:"field-demo-1",title:"\u7981\u7528\u8F93\u5165\u6846",card:!0},{Component:g,key:"field-icon",title:"\u663E\u793A\u56FE\u6807",card:!0},{Component:D,key:"field-error",title:"\u9519\u8BEF\u63D0\u793A",card:!0},{Component:b,key:"field-demo-2",title:"\u63D2\u5165\u6309\u94AE",card:!0},{Component:x,key:"field-formatter",title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",card:!0},{Component:y,key:"field-demo-3",title:"\u9AD8\u5EA6\u81EA\u9002\u5E94",card:!0},{Component:S,key:"field-demo-4",title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",card:!0},{Component:M,key:"field-demo-5",title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",card:!0},{Component:P,key:"field-ref",title:"ref\u8C03\u7528",card:!0}],te=void 0,re=[{depth:1,text:"Field \u8F93\u5165\u6846",id:"field-\u8F93\u5165\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u7C7B\u578B",id:"\u81EA\u5B9A\u4E49\u7C7B\u578B"},{depth:3,text:"\u7981\u7528\u8F93\u5165\u6846",id:"\u7981\u7528\u8F93\u5165\u6846"},{depth:3,text:"\u663E\u793A\u56FE\u6807",id:"\u663E\u793A\u56FE\u6807"},{depth:3,text:"\u9519\u8BEF\u63D0\u793A",id:"\u9519\u8BEF\u63D0\u793A"},{depth:3,text:"\u63D2\u5165\u6309\u94AE",id:"\u63D2\u5165\u6309\u94AE"},{depth:3,text:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",id:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"},{depth:3,text:"\u9AD8\u5EA6\u81EA\u9002\u5E94",id:"\u9AD8\u5EA6\u81EA\u9002\u5E94"},{depth:3,text:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",id:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"},{depth:3,text:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",id:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"},{depth:3,text:"ref \u8C03\u7528",id:"ref-\u8C03\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?",id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548"}],de="/src/components/field/README.md",le="Field \u8F93\u5165\u6846",ne="1652064015000";var oe=t=>t.children({MdContent:ee,demos:ue,frontmatter:te,slugs:re,filePath:de,title:le,updatedTime:ne});export{ee as MdContent,oe as default,ue as demos,de as filePath,te as frontmatter,re as slugs,le as title,ne as updatedTime};
