var v=Object.defineProperty,g=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var F=(r,l,t)=>l in r?v(r,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[l]=t,i=(r,l)=>{for(var t in l||(l={}))D.call(l,t)&&F(r,t,l[t]);if(o)for(var t of o(l))y.call(l,t)&&F(r,t,l[t]);return r},c=(r,l)=>g(r,x(l));import{a as e,F as a,j as u,r as h}from"./main.531c777e.js";import{C as n,dj as d,da as f}from"./WaterMark.6f52b203.js";import{h as I}from"./index.2a5125f1.js";var p=()=>{const[r,l]=I.useSetState({text:"",tel:"",digit:"",num:"",password:""});return e(a,{children:[u(n,{children:u(d,{value:r.text,onChange:t=>l({text:t}),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"})}),u(n,{children:u(d,{value:r.tel,type:"tel",onChange:t=>l({tel:t}),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),u(n,{children:u(d,{value:r.digit,type:"digit",onChange:t=>l({digit:t}),placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"})}),u(n,{children:u(d,{value:r.num,type:"number",onChange:t=>l({num:t}),placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"})}),u(n,{children:u(d,{value:r.password,type:"password",onChange:t=>l({password:t}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})})]})};const b=`import React from 'react';
import { Cell, Input, hooks } from 'react-vant';

export default () => {
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  });
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={(text) => updateState({ text })}
          placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type="tel"
          onChange={(tel) => updateState({ tel })}
          placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type="digit"
          onChange={(digit) => updateState({ digit })}
          placeholder="\u8BF7\u8F93\u5165\u6574\u6570"
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type="number"
          onChange={(num) => updateState({ num })}
          placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type="password"
          onChange={(password) => updateState({ password })}
          placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
        />
      </Cell>
    </>
  );
};
`,S={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell, Input, hooks } from 'react-vant';

export default () => {
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  });
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={(text) => updateState({ text })}
          placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type="tel"
          onChange={(tel) => updateState({ tel })}
          placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type="digit"
          onChange={(digit) => updateState({ digit })}
          placeholder="\u8BF7\u8F93\u5165\u6574\u6570"
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type="number"
          onChange={(num) => updateState({ num })}
          placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type="password"
          onChange={(password) => updateState({ password })}
          placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
        />
      </Cell>
    </>
  );
};
`}},key:"input-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var E=()=>{const[r,l]=h.exports.useState("");return u(n,{children:u(d,{placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",value:r,onChange:l,clearable:!0,clearTrigger:"always"})})};const T={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input
        placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        value={value}
        onChange={setValue}
        clearable
        clearTrigger="always"
      />
    </Cell>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Cell>
      <Input
        placeholder="\u8BF7\u8F93\u5165\u6587\u672C"
        value={value}
        onChange={setValue}
        clearable
        clearTrigger="always"
      />
    </Cell>
  );
};`}},key:"input-demo",meta:{title:"\u6E05\u9664\u6309\u94AE"}};var C=()=>e(a,{children:[u(n,{children:u(d.TextArea,{placeholder:"\u591A\u884C\u8F93\u5165"})}),u(n,{style:{marginTop:10},children:u(d.TextArea,{placeholder:"\u81EA\u9002\u5E94\u9AD8\u5EA6",autoSize:!0})}),u(n,{style:{marginTop:10},children:u(d.TextArea,{placeholder:"\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120",autoSize:{minHeight:80,maxHeight:120}})})]});const w={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <Input.TextArea placeholder="\u591A\u884C\u8F93\u5165" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u81EA\u9002\u5E94\u9AD8\u5EA6" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <Input.TextArea placeholder="\u591A\u884C\u8F93\u5165" />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u81EA\u9002\u5E94\u9AD8\u5EA6" autoSize />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u6700\u5C0F\u9AD8\u5EA680\uFF0C\u6700\u5927\u9AD8\u5EA6120"
          autoSize={{ minHeight: 80, maxHeight: 120 }}
        />
      </Cell>
    </>
  );
};`}},key:"input-demo-1",meta:{title:"\u591A\u884C\u8F93\u5165"}};var s=()=>e(a,{children:[u(n,{children:u(d,{placeholder:"\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26",maxLength:10,onOverlimit:()=>f.info("\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}")})}),u(n,{style:{marginTop:10},children:u(d.TextArea,{placeholder:"\u5B57\u6570\u7EDF\u8BA1",maxLength:50,showWordLimit:!0})}),u(n,{style:{marginTop:10},children:u(d.TextArea,{placeholder:"\u81EA\u5B9A\u4E49\u8F93\u51FA",showWordLimit:({currentCount:r})=>e("span",{children:["\u5DF2\u7ECF\u8F93\u5165",r,"\u4E2A\u5B57\u5566 \u270D\uFE0F"]})})})]});const M={code:`import React, { useState } from 'react';
import { Toast, Input, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <Input
          placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26"
          maxLength={10}
          onOverlimit={() => Toast.info('\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}')}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u5B57\u6570\u7EDF\u8BA1" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u81EA\u5B9A\u4E49\u8F93\u51FA"
          showWordLimit={({ currentCount }) => <span>\u5DF2\u7ECF\u8F93\u5165{currentCount}\u4E2A\u5B57\u5566 \u270D\uFE0F</span>}
        />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Toast, Input, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell>
        <Input
          placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57\u7B26"
          maxLength={10}
          onOverlimit={() => Toast.info('\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u5B57\u7B26\u54E6\u{1F37A}')}
        />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea placeholder="\u5B57\u6570\u7EDF\u8BA1" maxLength={50} showWordLimit />
      </Cell>
      <Cell style={{ marginTop: 10 }}>
        <Input.TextArea
          placeholder="\u81EA\u5B9A\u4E49\u8F93\u51FA"
          showWordLimit={({ currentCount }) => <span>\u5DF2\u7ECF\u8F93\u5165{currentCount}\u4E2A\u5B57\u5566 \u270D\uFE0F</span>}
        />
      </Cell>
    </>
  );
};`}},key:"input-demo-2",meta:{title:"\u5B57\u6570\u7EDF\u8BA1"}};var B=()=>{const[r,l]=h.exports.useState("");return e(a,{children:[u(n,{children:u(d,{placeholder:"\u5185\u5BB9\u5267\u4E2D",value:r,onChange:l,align:"center"})}),u(n,{children:u(d,{placeholder:"\u5185\u5BB9\u53F3\u5BF9\u9F50",value:r,onChange:l,align:"right"})})]})};const L={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u5267\u4E2D" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u53F3\u5BF9\u9F50" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u5267\u4E2D" value={value} onChange={setValue} align="center" />
      </Cell>
      <Cell>
        <Input placeholder="\u5185\u5BB9\u53F3\u5BF9\u9F50" value={value} onChange={setValue} align="right" />
      </Cell>
    </>
  );
};`}},key:"input-demo-3",meta:{title:"\u5BF9\u9F50\u65B9\u5F0F"}};var A=()=>{const[r,l]=h.exports.useState("\u53EA\u8BFB\u6A21\u5F0F"),[t,m]=h.exports.useState("\u7981\u7528\u6A21\u5F0F");return e(a,{children:[u(n,{children:u(d,{value:r,onChange:l,readOnly:!0})}),u(n,{children:u(d,{value:t,onChange:m,disabled:!0})})]})};const P={code:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('\u53EA\u8BFB\u6A21\u5F0F');
  const [value2, setValue2] = useState('\u7981\u7528\u6A21\u5F0F');
  return (
    <>
      <Cell>
        <Input value={value1} onChange={setValue1} readOnly />
      </Cell>
      <Cell>
        <Input value={value2} onChange={setValue2} disabled />
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input, Cell } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState('\u53EA\u8BFB\u6A21\u5F0F');
  const [value2, setValue2] = useState('\u7981\u7528\u6A21\u5F0F');
  return (
    <>
      <Cell>
        <Input value={value1} onChange={setValue1} readOnly />
      </Cell>
      <Cell>
        <Input value={value2} onChange={setValue2} disabled />
      </Cell>
    </>
  );
};`}},key:"input-demo-4",meta:{title:"\u8F93\u5165\u6846\u72B6\u6001"}},V=function({previewer:r=()=>null,api:l=()=>null}){const t=r;return u("div",{children:e("div",{children:[u("h1",{id:"input-\u8F93\u5165\u6846","data-anchor":"input-\u8F93\u5165\u6846",children:"Input \u8F93\u5165\u6846"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u6237\u53EF\u4EE5\u5728\u6587\u672C\u6846\u5185\u8F93\u5165\u6216\u7F16\u8F91\u6587\u5B57\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(t,{code:"import { Input } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"value"})," \u548C ",u("code",{children:"onChange"})," \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 ",u("code",{children:"placeholder"})," \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002"]}),u(t,c(i({},S),{children:u(p,{})})),u("h3",{id:"\u6E05\u9664\u6309\u94AE","data-anchor":"\u6E05\u9664\u6309\u94AE",children:"\u6E05\u9664\u6309\u94AE"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"clearable"})," ",u("code",{children:"clearIcon"})," ",u("code",{children:"clearTrigger"})," \u53EF\u4EE5\u63A7\u5236\u6E05\u9664\u6309\u94AE\u7684\u5C55\u793A\u65F6\u673A\u4EE5\u53CA\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9\u3002"]}),u(t,c(i({},T),{children:u(E,{})})),u("h3",{id:"\u591A\u884C\u8F93\u5165","data-anchor":"\u591A\u884C\u8F93\u5165",children:"\u591A\u884C\u8F93\u5165"}),e("p",{children:[u("code",{children:"Input.TextArea"})," \u53EF\u7528\u4E8E\u591A\u884C\u8F93\u5165\uFF0C ",u("code",{children:"autoSize"})," \u53EF\u4EE5\u4F7F\u6587\u672C\u57DF\u81EA\u9002\u5E94\u9AD8\u5EA6\uFF0C\u8FD8\u80FD\u8BBE\u7F6E\u5176\u6700\u5C0F\u548C\u6700\u5927\u9AD8\u5EA6\u3002"]}),u(t,c(i({},w),{children:u(C,{})})),u("h3",{id:"\u5B57\u6570\u7EDF\u8BA1","data-anchor":"\u5B57\u6570\u7EDF\u8BA1",children:"\u5B57\u6570\u7EDF\u8BA1"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"maxLength"})," \u548C ",u("code",{children:"showWordLimit"})," \u53EF\u4EE5\u5F00\u542F\u8F93\u5165\u6846\u5B57\u6570\u663E\u793A\u3002"]}),u(t,c(i({},M),{children:u(s,{})})),u("h3",{id:"\u5BF9\u9F50\u65B9\u5F0F","data-anchor":"\u5BF9\u9F50\u65B9\u5F0F",children:"\u5BF9\u9F50\u65B9\u5F0F"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"align"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\u3002"]}),u(t,c(i({},L),{children:u(B,{})})),u("h3",{id:"\u8F93\u5165\u6846\u72B6\u6001","data-anchor":"\u8F93\u5165\u6846\u72B6\u6001",children:"\u8F93\u5165\u6846\u72B6\u6001"}),e("ul",{children:[e("li",{children:[u("code",{children:"readOnly"})," \u63A7\u5236\u53EA\u8BFB\u72B6\u6001"]}),e("li",{children:[u("code",{children:"disabled"})," \u63A7\u5236\u7981\u7528\u72B6\u6001"]})]}),u(t,c(i({},P),{children:u(A,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"defaultValue"}),u("td",{children:"\u9ED8\u8BA4\u503C"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"name"}),u("td",{children:"\u540D\u79F0\uFF0C\u63D0\u4EA4\u8868\u5355\u7684\u6807\u8BC6\u7B26"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"type"}),e("td",{children:["\u8F93\u5165\u6846\u7C7B\u578B, \u53EF\u9009\u503C\u4E3A ",u("code",{children:"tel"})," ",u("code",{children:"digit"})," ",u("code",{children:"number"})," ",u("code",{children:"textarea"})," ",u("code",{children:"password"})," \u7B49, ",u("br",{})," \u5BF9 ",u("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"text"})})]}),e("tr",{children:[u("td",{children:"maxLength"}),u("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"readOnly"}),u("td",{children:"\u662F\u5426\u53EA\u8BFB"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"clearable"}),u("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"clearIcon"}),u("td",{children:"\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"<Clear />"})})]}),e("tr",{children:[u("td",{children:"clearTrigger"}),e("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",u("br",{})," ",u("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",u("br",{})," ",u("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),e("td",{children:[u("code",{children:"always"})," ",u("code",{children:"focus"})]}),u("td",{children:u("code",{children:"focus"})})]}),e("tr",{children:[u("td",{children:"autoFocus"}),u("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"align"}),e("td",{children:["\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"}),"\uFF0C\u5BF9 ",u("code",{children:"Input.TextArea"})," \u65E0\u6548"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]})]})]}),u("h3",{id:"inputtextarea-props","data-anchor":"inputtextarea-props",children:"Input.TextArea Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"rows"}),u("td",{children:"\u8F93\u5165\u6846\u884C\u6570"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:"2"})]}),e("tr",{children:[u("td",{children:"showWordLimit"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5B57\u6570\u7EDF\u8BA1\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5185\u5BB9"}),u("td",{children:e("em",{children:["boolean|(","{"," currentCount, maxLengh ","}",") => ReactNode"]})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"autoSize"}),e("td",{children:["\u662F\u5426\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u4F20\u5165\u5BF9\u8C61,\u5982 ",e("code",{children:["{"," maxHeight: 100, minHeight: 50 ","}"]}),"\uFF0C\u5355\u4F4D\u4E3A",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"boolean | object"})}),u("td",{children:u("code",{children:"false"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"val: string"})})]}),e("tr",{children:[u("td",{children:"onFocus"}),u("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onBlur"}),u("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClear"}),u("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClick"}),e("td",{children:["\u70B9\u51FB ",u("code",{children:"Input"})," \u65F6\u89E6\u53D1"]}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onOverlimit"}),e("td",{children:["\u5F53\u8F93\u5165\u503C\u8D85\u51FA ",u("code",{children:"maxLength"})," \u65F6\u89E6\u53D1"]}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",u("code",{children:"Input"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"focus"}),u("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"blur"}),u("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"clear"}),u("td",{children:"\u6E05\u7A7A\u8F93\u5165\u5185\u5BB9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"nativeElement"}),e("td",{children:["\u83B7\u53D6\u539F\u59CB ",u("code",{children:"DOM"})," \u5143\u7D20"]}),u("td",{children:u("em",{children:"HTMLElement | null"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-input-text-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-background-color"}),u("td",{children:u("em",{children:"transparent"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-disabled-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-placeholder-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-clear-icon-size"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-clear-icon-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-input-disabled-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-textaea-min-height"}),u("td",{children:u("em",{children:"60px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-textaea-word-limit-color"}),u("td",{children:u("em",{children:"var(--rv-gray-7)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-textaea-word-limit-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-textaea-word-limit-line-height"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text","data-anchor":"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text",children:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?"}),e("p",{children:["HTML \u539F\u751F\u7684 ",u("code",{children:'type="number"'})," \u5C5E\u6027\u5728 iOS \u548C Android \u7CFB\u7EDF\u4E0A\u90FD\u5B58\u5728\u4E00\u5B9A\u95EE\u9898\uFF0C\u6BD4\u5982 maxLength \u5C5E\u6027\u4E0D\u751F\u6548\u3001\u65E0\u6CD5\u83B7\u53D6\u5230\u5B8C\u6574\u7684\u8F93\u5165\u5185\u5BB9\u7B49\u3002\u56E0\u6B64\u8BBE\u7F6E type \u4E3A ",u("code",{children:"number"})," \u65F6\uFF0C",u("code",{children:"Input"})," \u4E0D\u4F1A\u4F7F\u7528\u539F\u751F\u7684 ",u("code",{children:'type="number"'})," \u5C5E\u6027\uFF0C\u800C\u662F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u652F\u6301\u7684 ",u("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode",children:"inputmode \u5C5E\u6027"}),"\u6765\u63A7\u5236\u8F93\u5165\u952E\u76D8\u7684\u7C7B\u578B\u3002"]}),u("h3",{id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548","data-anchor":"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),e("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},k=[{Component:p,key:"input-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:E,key:"input-demo",title:"\u6E05\u9664\u6309\u94AE"},{Component:C,key:"input-demo-1",title:"\u591A\u884C\u8F93\u5165"},{Component:s,key:"input-demo-2",title:"\u5B57\u6570\u7EDF\u8BA1"},{Component:B,key:"input-demo-3",title:"\u5BF9\u9F50\u65B9\u5F0F"},{Component:A,key:"input-demo-4",title:"\u8F93\u5165\u6846\u72B6\u6001"}],R=void 0,j=[{depth:1,text:"Input \u8F93\u5165\u6846",id:"input-\u8F93\u5165\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6E05\u9664\u6309\u94AE",id:"\u6E05\u9664\u6309\u94AE"},{depth:3,text:"\u591A\u884C\u8F93\u5165",id:"\u591A\u884C\u8F93\u5165"},{depth:3,text:"\u5B57\u6570\u7EDF\u8BA1",id:"\u5B57\u6570\u7EDF\u8BA1"},{depth:3,text:"\u5BF9\u9F50\u65B9\u5F0F",id:"\u5BF9\u9F50\u65B9\u5F0F"},{depth:3,text:"\u8F93\u5165\u6846\u72B6\u6001",id:"\u8F93\u5165\u6846\u72B6\u6001"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Input.TextArea Props",id:"inputtextarea-props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u8BBE\u7F6E type \u4E3A number \u540E\uFF0C\u4E3A\u4EC0\u4E48 input \u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A text?",id:"\u8BBE\u7F6E-type-\u4E3A-number-\u540E\u4E3A\u4EC0\u4E48-input-\u6807\u7B7E\u7684\u7C7B\u578B\u4ECD\u4E3A-text"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548"}],N="/src/components/input/README.md",z="Input \u8F93\u5165\u6846",O="1658500653000";var G=r=>r.children({MdContent:V,demos:k,frontmatter:R,slugs:j,filePath:N,title:z,updatedTime:O});export{V as MdContent,G as default,k as demos,N as filePath,R as frontmatter,j as slugs,z as title,O as updatedTime};
