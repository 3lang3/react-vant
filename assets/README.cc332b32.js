var R=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(t,d,r)=>d in t?R(t,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[d]=r,i=(t,d)=>{for(var r in d||(d={}))w.call(d,r)&&E(t,r,d[r]);if(s)for(var r of s(d))V.call(d,r)&&E(t,r,d[r]);return t},c=(t,d)=>k(t,I(d));import{j as u,r as l,F as h,a as e}from"./main.531c777e.js";import{j as n,C as B,g as p,d1 as L,da as C,F as _,t as N,B as A,dd as T,dm as z}from"./WaterMark.6f52b203.js";var f=()=>u(n,{label:"\u6587\u672C",tooltip:"\u63D0\u793Atooltip",intro:u("div",{children:"We must make sure that your are a human."}),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"});const O={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  return (
    <Field
      label="\u6587\u672C"
      tooltip="\u63D0\u793Atooltip"
      intro={<div>We must make sure that your are a human.</div>}
      placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
    />
  );
};`}},key:"field-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var v=()=>{const[t,d]=l.exports.useState(""),[r,o]=l.exports.useState("");return u(h,{children:e(B.Group,{children:[u(n,{value:t,onChange:d,label:"\u6587\u672C",leftIcon:u(p,{}),rightIcon:u(L,{}),placeholder:"\u663E\u793A\u56FE\u6807",onClickLeftIcon:()=>C.info("\u5DE6\u4FA7\u56FE\u6807\u70B9\u51FB"),onClickRightIcon:()=>C.info("\u53F3\u4FA7\u56FE\u6807\u70B9\u51FB")}),u(n,{value:r,onChange:o,clearable:!0,label:"\u6587\u672C",leftIcon:u(p,{}),placeholder:"\u663E\u793A\u6E05\u9664\u56FE\u6807"})]})})};const W=`import { ShopO, WarningO } from '@react-vant/icons';
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
`,j={code:W,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { ShopO, WarningO } from '@react-vant/icons';
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
`}},key:"field-icon",meta:{title:"\u663E\u793A\u56FE\u6807"}};var D=()=>{const[t,d]=l.exports.useState(""),[r,o]=l.exports.useState("");return u(h,{children:e(B.Group,{children:[u(n,{value:t,error:!0,required:!0,label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",onChange:d}),u(n,{value:r,required:!0,label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",errorMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",onChange:o})]})})};const G=`import React, { useState } from 'react';
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
`,$={code:G,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
`}},key:"field-error",meta:{title:"\u9519\u8BEF\u63D0\u793A"}},m=["86 \u{1F1E8}\u{1F1F3}","87 \u{1F1FA}\u{1F1F8}","88 \u{1F3F3}\uFE0F\u200D\u{1F308}","89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F","90 \u{1F1F4}\u{1F1F2}","91 \u{1F1F5}\u{1F1EA}","92 \u{1F1E9}\u{1F1EA}"];var g=()=>{const[t,d]=l.exports.useState(""),[r,o]=l.exports.useState(!1),[a,F]=l.exports.useState(m[0]);return e(h,{children:[u(n,{value:t,center:!0,label:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",placeholder:"\u624B\u673A\u53F7",onChange:d,prefix:e(_,{align:"center",onClick:()=>o(!0),children:["+",a," ",u(N,{style:{paddingLeft:8}})]}),suffix:u(A,{size:"small",type:"primary",children:"\u53D1\u9001"})}),u(T,{round:!0,visible:r,position:"bottom",onClose:()=>o(!1),children:u(z,{title:"\u6807\u9898",onConfirm:M=>{F(M),o(!1)},columns:m})})]})};const q=`import React, { useState } from 'react';
import { Field, Flex, Popup, Picker, Button } from 'react-vant';
import { ArrowDown } from '@react-vant/icons';

const columns = ['86 \u{1F1E8}\u{1F1F3}', '87 \u{1F1FA}\u{1F1F8}', '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', '90 \u{1F1F4}\u{1F1F2}', '91 \u{1F1F5}\u{1F1EA}', '92 \u{1F1E9}\u{1F1EA}'];

export default () => {
  const [sms, setSms] = useState('');
  const [visible, setVisible] = useState(false);
  const [field, setVield] = useState(columns[0]);

  return (
    <>
      <Field
        value={sms}
        center
        label="\u77ED\u4FE1\u9A8C\u8BC1\u7801"
        placeholder="\u624B\u673A\u53F7"
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size="small" type="primary">
            \u53D1\u9001
          </Button>
        }
      />
      <Popup round visible={visible} position="bottom" onClose={() => setVisible(false)}>
        <Picker
          title="\u6807\u9898"
          onConfirm={(value: string) => {
            setVield(value);
            setVisible(false);
          }}
          columns={columns}
        />
      </Popup>
    </>
  );
};
`,U={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field, Flex, Popup, Picker, Button } from 'react-vant';
import { ArrowDown } from '@react-vant/icons';

const columns = ['86 \u{1F1E8}\u{1F1F3}', '87 \u{1F1FA}\u{1F1F8}', '88 \u{1F3F3}\uFE0F\u200D\u{1F308}', '89 \u{1F3F3}\uFE0F\u200D\u26A7\uFE0F', '90 \u{1F1F4}\u{1F1F2}', '91 \u{1F1F5}\u{1F1EA}', '92 \u{1F1E9}\u{1F1EA}'];

export default () => {
  const [sms, setSms] = useState('');
  const [visible, setVisible] = useState(false);
  const [field, setVield] = useState(columns[0]);

  return (
    <>
      <Field
        value={sms}
        center
        label="\u77ED\u4FE1\u9A8C\u8BC1\u7801"
        placeholder="\u624B\u673A\u53F7"
        onChange={setSms}
        prefix={
          <Flex align='center' onClick={() => setVisible(true)}>
            +{field} <ArrowDown style={{ paddingLeft: 8 }} />
          </Flex>
        }
        suffix={
          <Button size="small" type="primary">
            \u53D1\u9001
          </Button>
        }
      />
      <Popup round visible={visible} position="bottom" onClose={() => setVisible(false)}>
        <Picker
          title="\u6807\u9898"
          onConfirm={(value: string) => {
            setVield(value);
            setVisible(false);
          }}
          columns={columns}
        />
      </Popup>
    </>
  );
};
`}},key:"field-button",meta:{title:"\u63D2\u5165\u6309\u94AE"}};var x=()=>{const[t,d]=l.exports.useState(""),[r,o]=l.exports.useState(""),a=F=>F.replace(/\d/g,"");return e(h,{children:[u(n,{value:t,label:"\u6587\u672C",formatter:a,placeholder:"\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:d}),u(n,{value:r,label:"\u6587\u672C",formatter:a,formatTrigger:"onBlur",placeholder:"\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316",onChange:o})]})};const H=`import React, { useState } from 'react';
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
`,J={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
`}},key:"field-formatter",meta:{title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"}};var b=()=>{const[t,d]=l.exports.useState("");return u(n,{rows:1,value:t,onChange:d,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00"})};const K={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={1}
      value={content}
      onChange={setContent}
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
    />
  );
};`}},key:"field-demo-1",meta:{title:"\u9AD8\u5EA6\u81EA\u9002\u5E94"}};var y=()=>{const[t,d]=l.exports.useState("");return u(n,{rows:2,autoSize:!0,label:"\u7559\u8A00",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00",value:t,onChange:d,maxLength:50,showWordLimit:!0})};const Q={code:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autoSize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxLength={50}
      showWordLimit
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Field } from 'react-vant';

export default () => {
  const [content, setContent] = useState('');

  return (
    <Field
      rows={2}
      autoSize
      label="\u7559\u8A00"
      type="textarea"
      placeholder="\u8BF7\u8F93\u5165\u7559\u8A00"
      value={content}
      onChange={setContent}
      maxLength={50}
      showWordLimit
    />
  );
};`}},key:"field-demo-2",meta:{title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"}};var S=()=>u(n,{label:"\u6587\u672C",placeholder:"\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50",align:"right"});const X={code:`import React from 'react';
import { Field } from 'react-vant';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" align="right" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Field } from 'react-vant';

export default () => {
  return <Field label="\u6587\u672C" placeholder="\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50" align="right" />;
};`}},key:"field-demo-3",meta:{title:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"}};var P=()=>{const t=l.exports.useRef(null);return u(n,{center:!0,ref:t,placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",label:"\u6587\u672C",suffix:u(A,{size:"small",onClick:()=>{var d;(d=t==null?void 0:t.current)==null||d.focus()},children:"\u805A\u7126"})})};const Y=`import React, { useRef } from 'react';
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
      suffix={
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
`,Z={code:Y,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
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
      suffix={
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
`}},key:"field-ref",meta:{title:"ref\u8C03\u7528"}},uu=function({previewer:t=()=>null,api:d=()=>null}){const r=t;return u("div",{children:e("div",{children:[u("h1",{id:"field-\u8868\u5355\u9879","data-anchor":"field-\u8868\u5355\u9879",children:"Field \u8868\u5355\u9879"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:["\u8868\u5355\u4E2D\u7684\u8F93\u5165\u6846\u7EC4\u4EF6, ",u("code",{children:"Field"})," \u662F\u57FA\u4E8E ",u("code",{children:"Cell"})," \u5B9E\u73B0\u7684\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",u("code",{children:"Cell.Group"})," \u4F5C\u4E3A\u5BB9\u5668\u6765\u63D0\u4F9B\u5916\u8FB9\u6846\u3002"]}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(r,{code:"import { Field } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"value"})," \u548C ",u("code",{children:"onChange"})," \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 ",u("code",{children:"placeholder"})," \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002"]}),u(r,c(i({},O),{children:u(f,{})})),u("h3",{id:"\u663E\u793A\u56FE\u6807","data-anchor":"\u663E\u793A\u56FE\u6807",children:"\u663E\u793A\u56FE\u6807"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"leftIcon"})," \u548C ",u("code",{children:"rightIcon"})," \u914D\u7F6E\u8F93\u5165\u6846\u4E24\u4FA7\u7684\u56FE\u6807\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",u("code",{children:"clearable"})," \u5728\u8F93\u5165\u8FC7\u7A0B\u4E2D\u5C55\u793A\u6E05\u9664\u56FE\u6807\u3002"]}),u(r,c(i({},j),{children:u(v,{})})),u("h3",{id:"\u9519\u8BEF\u63D0\u793A","data-anchor":"\u9519\u8BEF\u63D0\u793A",children:"\u9519\u8BEF\u63D0\u793A"}),e("p",{children:["\u8BBE\u7F6E ",u("code",{children:"required"})," \u5C5E\u6027\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u5FC5\u586B\u9879\uFF0C\u53EF\u4EE5\u914D\u5408 ",u("code",{children:"error"})," \u6216 ",u("code",{children:"errorMessage"})," \u5C5E\u6027\u663E\u793A\u5BF9\u5E94\u7684\u9519\u8BEF\u63D0\u793A\u3002"]}),u(r,c(i({},$),{children:u(D,{})})),u("h3",{id:"\u63D2\u5165\u6309\u94AE","data-anchor":"\u63D2\u5165\u6309\u94AE",children:"\u63D2\u5165\u6309\u94AE"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"prefix"})," ",u("code",{children:"suffix"})," \u5C5E\u6027\u53EF\u4EE5\u5728\u8F93\u5165\u6846\u524D\u9762\u548C\u5C3E\u90E8\u63D2\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"]}),u(r,c(i({},U),{children:u(g,{})})),u("h3",{id:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9","data-anchor":"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",children:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"formatter"})," \u5C5E\u6027\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u901A\u8FC7 ",u("code",{children:"format-trigger"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u6267\u884C\u683C\u5F0F\u5316\u7684\u65F6\u673A\uFF0C\u9ED8\u8BA4\u5728\u8F93\u5165\u65F6\u8FDB\u884C\u683C\u5F0F\u5316\u3002"]}),u(r,c(i({},J),{children:u(x,{})})),u("h3",{id:"\u9AD8\u5EA6\u81EA\u9002\u5E94","data-anchor":"\u9AD8\u5EA6\u81EA\u9002\u5E94",children:"\u9AD8\u5EA6\u81EA\u9002\u5E94"}),e("p",{children:["\u5BF9\u4E8E textarea\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"autoSize"})," \u5C5E\u6027\u8BBE\u7F6E\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002"]}),u(r,c(i({},K),{children:u(b,{})})),u("h3",{id:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1","data-anchor":"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",children:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"}),e("p",{children:["\u8BBE\u7F6E ",u("code",{children:"maxLength"})," \u548C ",u("code",{children:"showWordLimit"})," \u5C5E\u6027\u540E\u4F1A\u5728\u5E95\u90E8\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\u3002"]}),u(r,c(i({},Q),{children:u(y,{})})),u("h3",{id:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50","data-anchor":"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",children:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"align"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u5165\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"}),"\u3001",u("code",{children:"right"}),"\u3002"]}),u(r,c(i({},X),{children:u(S,{})})),u("h3",{id:"ref-\u8C03\u7528","data-anchor":"ref-\u8C03\u7528",children:"ref \u8C03\u7528"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u(r,c(i({},Z),{children:u(P,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"label"}),u("td",{children:"\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"name"}),u("td",{children:"\u540D\u79F0\uFF0C\u63D0\u4EA4\u8868\u5355\u7684\u6807\u8BC6\u7B26"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"type"}),e("td",{children:["\u8F93\u5165\u6846\u7C7B\u578B, \u53EF\u9009\u503C\u4E3A ",u("code",{children:"tel"})," ",u("code",{children:"digit"}),u("br",{}),u("code",{children:"number"})," ",u("code",{children:"textarea"})," ",u("code",{children:"password"})," \u7B49"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"text"})})]}),e("tr",{children:[u("td",{children:"size"}),e("td",{children:["\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"large"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"maxLength"}),u("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"border"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"readOnly"}),u("td",{children:"\u662F\u5426\u53EA\u8BFB"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"colon"}),u("td",{children:"\u662F\u5426\u5728 label \u540E\u9762\u6DFB\u52A0\u5192\u53F7"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"intro"}),u("td",{children:"\u989D\u5916\u7684\u8F93\u5165\u6846\u63D0\u793A\u4FE1\u606F"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"tooltip"}),u("td",{children:"\u5B57\u6BB5\u63D0\u793A\u4FE1\u606F"}),e("td",{children:[u("em",{children:"ReactNode |"})," ",e("a",{href:"/components/dialog#props",children:["DialogProps & ","{"," icon: ReactNode ","}"]})]}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"required"}),u("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"center"}),u("td",{children:"\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"clearable"}),u("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"clearIcon"}),u("td",{children:"\u6E05\u9664\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"<Clear />"})})]}),e("tr",{children:[u("td",{children:"clearTrigger"}),e("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",u("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",u("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),u("td",{children:"FieldClearTrigger"}),u("td",{children:u("code",{children:"focus"})})]}),e("tr",{children:[u("td",{children:"clickable"}),u("td",{children:"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"isLink"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"autoFocus"}),u("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showWordLimit"}),e("td",{children:["\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u9700\u8981\u8BBE\u7F6E",u("code",{children:"maxLength"}),"\u5C5E\u6027"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"error"}),u("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"errorMessage"}),u("td",{children:"\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatter"}),u("td",{children:"\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570"}),u("td",{children:u("em",{children:"Function"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatTrigger"}),e("td",{children:["\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"onBlur"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"onChange"})})]}),e("tr",{children:[u("td",{children:"arrowDirection"}),e("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"left"})," ",u("code",{children:"up"})," ",u("code",{children:"down"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"right"})})]}),e("tr",{children:[u("td",{children:"labelClass"}),u("td",{children:"\u5DE6\u4FA7\u6587\u672C\u989D\u5916\u7C7B\u540D"}),u("td",{children:u("em",{children:"any"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"labelWidth"}),e("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"6.2em"})})]}),e("tr",{children:[u("td",{children:"labelAlign"}),e("td",{children:["\u5DE6\u4FA7\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"controlAlign"}),e("td",{children:["\u53F3\u4FA7\u8F93\u5165\u63A7\u4EF6\u5BB9\u5668\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"errorMessageAlign"}),e("td",{children:["\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"autoSize"}),e("td",{children:["\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EA\u5BF9 textarea \u6709\u6548\uFF0C",u("br",{}),"\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 ",e("code",{children:["{"," maxHeight: 100, minHeight: 50 ","}"]}),"\uFF0C",u("br",{}),"\u5355\u4F4D\u4E3A",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"boolean | object"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"rows"}),u("td",{children:"\u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u5BF9 textarea \u6709\u6548"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:"2"})]}),e("tr",{children:[u("td",{children:"leftIcon"}),u("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"rightIcon"}),u("td",{children:"\u53F3\u4FA7\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"prefix"}),u("td",{children:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u524D\u90E8\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"suffix"}),u("td",{children:"\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"val: string | number"})})]}),e("tr",{children:[u("td",{children:"onFocus"}),u("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onBlur"}),u("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClear"}),u("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClick"}),u("td",{children:"\u70B9\u51FB Field \u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClickInput"}),u("td",{children:"\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClickLeftIcon"}),u("td",{children:"\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClickRightIcon"}),u("td",{children:"\u70B9\u51FB\u53F3\u4FA7\u56FE\u6807\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onOverlimit"}),e("td",{children:["\u5F53\u8F93\u5165\u503C\u8D85\u51FA ",u("code",{children:"maxLength"})," \u65F6\u89E6\u53D1"]}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Field \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"focus"}),u("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"blur"}),u("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-field-label-width"}),u("td",{children:u("em",{children:"6.2em"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-label-color"}),u("td",{children:u("em",{children:"var(--rv-gray-7)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-label-margin-right"}),u("td",{children:u("em",{children:"var(--rv-padding-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-input-error-text-color"}),u("td",{children:u("em",{children:"var(--rv-danger-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-icon-size"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-right-icon-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-error-message-color"}),u("td",{children:u("em",{children:"var(--rv-danger-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-error-message-font-size"}),u("td",{children:u("em",{children:"12px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-disabled-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-required-mark-color"}),u("td",{children:u("em",{children:"var(--rv-red)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-intro-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-field-tooltip-icon-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text","data-anchor":"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text",children:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?"}),e("p",{children:["HTML \u539F\u751F\u7684 ",u("code",{children:'type="number"'})," \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxLength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A ",u("code",{children:"number"})," \u65F6\uFF0C",u("code",{children:"Field"})," \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 ",u("code",{children:'type="number"'})," \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 ",u("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode",children:"inputmode \u5C5E\u6027"}),"\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002"]}),u("h3",{id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548","data-anchor":"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),e("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},eu=[{Component:f,key:"field-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:v,key:"field-icon",title:"\u663E\u793A\u56FE\u6807"},{Component:D,key:"field-error",title:"\u9519\u8BEF\u63D0\u793A"},{Component:g,key:"field-button",title:"\u63D2\u5165\u6309\u94AE"},{Component:x,key:"field-formatter",title:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"},{Component:b,key:"field-demo-1",title:"\u9AD8\u5EA6\u81EA\u9002\u5E94"},{Component:y,key:"field-demo-2",title:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"},{Component:S,key:"field-demo-3",title:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"},{Component:P,key:"field-ref",title:"ref\u8C03\u7528"}],tu=void 0,ru=[{depth:1,text:"Field \u8868\u5355\u9879",id:"field-\u8868\u5355\u9879"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u663E\u793A\u56FE\u6807",id:"\u663E\u793A\u56FE\u6807"},{depth:3,text:"\u9519\u8BEF\u63D0\u793A",id:"\u9519\u8BEF\u63D0\u793A"},{depth:3,text:"\u63D2\u5165\u6309\u94AE",id:"\u63D2\u5165\u6309\u94AE"},{depth:3,text:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",id:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9"},{depth:3,text:"\u9AD8\u5EA6\u81EA\u9002\u5E94",id:"\u9AD8\u5EA6\u81EA\u9002\u5E94"},{depth:3,text:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",id:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"},{depth:3,text:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",id:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50"},{depth:3,text:"ref \u8C03\u7528",id:"ref-\u8C03\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?",id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548"}],du="/src/components/field/README.md",lu="Field \u8868\u5355\u9879",nu="1658500653000";var au=t=>t.children({MdContent:uu,demos:eu,frontmatter:tu,slugs:ru,filePath:du,title:lu,updatedTime:nu});export{uu as MdContent,au as default,eu as demos,du as filePath,tu as frontmatter,ru as slugs,lu as title,nu as updatedTime};
