var D=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var c=(a,t,d)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[t]=d,i=(a,t)=>{for(var d in t||(t={}))g.call(t,d)&&c(a,d,t[d]);if(n)for(var d of n(t))G.call(t,d)&&c(a,d,t[d]);return a},o=(a,t)=>b(a,y(t));import{a as u,j as e,r as s}from"./main.531c777e.js";import{dk as r,da as h,C as l,g as p}from"./WaterMark.6f52b203.js";var E=()=>u(r.Group,{defaultValue:"1",children:[e(r,{name:"1",children:"\u5355\u9009\u68461"}),e(r,{name:"2",children:"\u5355\u9009\u68462"})]});const k={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1">\u5355\u9009\u68461</Radio>
      <Radio name="2">\u5355\u9009\u68462</Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1">\u5355\u9009\u68461</Radio>
      <Radio name="2">\u5355\u9009\u68462</Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var C=()=>u(r.Group,{defaultValue:"1",direction:"horizontal",children:[e(r,{name:"1",children:"\u5355\u9009\u6846 1"}),e(r,{name:"2",children:"\u5355\u9009\u6846 2"})]});const P={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio name="1">\u5355\u9009\u6846 1</Radio>
      <Radio name="2">\u5355\u9009\u6846 2</Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1" direction="horizontal">
      <Radio name="1">\u5355\u9009\u6846 1</Radio>
      <Radio name="2">\u5355\u9009\u6846 2</Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-1",meta:{title:"\u6C34\u5E73\u6392\u5217",card:!0}};var F=()=>u(r.Group,{defaultValue:"1",children:[e(r,{name:"1",disabled:!0,children:"\u5355\u9009\u68461"}),e(r,{name:"2",disabled:!0,children:"\u5355\u9009\u68462"})]});const V={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" disabled>
        \u5355\u9009\u68461
      </Radio>
      <Radio name="2" disabled>
        \u5355\u9009\u68462
      </Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" disabled>
        \u5355\u9009\u68461
      </Radio>
      <Radio name="2" disabled>
        \u5355\u9009\u68462
      </Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-2",meta:{title:"\u7981\u7528\u72B6\u6001",card:!0}};var R=()=>u(r.Group,{defaultValue:"1",children:[e(r,{shape:"square",name:"1",children:"\u5355\u9009\u68461"}),e(r,{shape:"square",name:"2",children:"\u5355\u9009\u68462"})]});const M={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio shape="square" name="1">
        \u5355\u9009\u68461
      </Radio>
      <Radio shape="square" name="2">
        \u5355\u9009\u68462
      </Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio shape="square" name="1">
        \u5355\u9009\u68461
      </Radio>
      <Radio shape="square" name="2">
        \u5355\u9009\u68462
      </Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u5F62\u72B6"}};var v=()=>u(r.Group,{defaultValue:"1",children:[e(r,{name:"1",checkedColor:"#ee0a24",children:"\u5355\u9009\u6846 1"}),e(r,{name:"2",checkedColor:"#ee0a24",children:"\u5355\u9009\u6846 2"})]});const S={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" checkedColor="#ee0a24">
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" checkedColor="#ee0a24">
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" checkedColor="#ee0a24">
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" checkedColor="#ee0a24">
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272"}};var B=()=>u(r.Group,{defaultValue:"1",children:[e(r,{name:"1",iconSize:"24px",children:"\u5355\u9009\u6846 1"}),e(r,{name:"2",iconSize:"24px",children:"\u5355\u9009\u6846 2"})]});const N={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" iconSize="24px">
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" iconSize="24px">
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" iconSize="24px">
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" iconSize="24px">
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-5",meta:{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0}};var f=()=>u(r.Group,{defaultValue:"1",children:[e(r,{name:"1",labelDisabled:!0,children:"\u5355\u9009\u6846 1"}),e(r,{name:"2",labelDisabled:!0,children:"\u5355\u9009\u6846 2"})]});const j={code:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" labelDisabled>
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" labelDisabled>
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'react-vant';

export default () => {
  return (
    <Radio.Group defaultValue="1">
      <Radio name="1" labelDisabled>
        \u5355\u9009\u6846 1
      </Radio>
      <Radio name="2" labelDisabled>
        \u5355\u9009\u6846 2
      </Radio>
    </Radio.Group>
  );
};`}},key:"radio-demo-6",meta:{title:"\u7981\u7528\u6587\u672C\u70B9\u51FB"}};let m;var x=()=>{const[a,t]=s.exports.useState("1");return u(r.Group,{value:a,onChange:d=>{h.loading({forbidClick:!0}),clearTimeout(m),m=setTimeout(()=>{h.clear(),t(d)},500)},children:[e(r,{name:"1",children:"\u5355\u9009\u6846 1"}),e(r,{name:"2",children:"\u5355\u9009\u6846 2"})]})};const I=`import React, { useState } from 'react';
import { Radio, Toast } from 'react-vant';

let timer;

export default () => {
  const [value, setValue] = useState('1');

  return (
    <Radio.Group
      value={value}
      onChange={(val) => {
        Toast.loading({ forbidClick: true });
        clearTimeout(timer);
        timer = setTimeout(() => {
          Toast.clear();
          setValue(val as string);
        }, 500);
      }}
    >
      <Radio name="1">\u5355\u9009\u6846 1</Radio>
      <Radio name="2">\u5355\u9009\u6846 2</Radio>
    </Radio.Group>
  );
};
`,z={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Radio, Toast } from 'react-vant';

let timer;

export default () => {
  const [value, setValue] = useState('1');

  return (
    <Radio.Group
      value={value}
      onChange={(val) => {
        Toast.loading({ forbidClick: true });
        clearTimeout(timer);
        timer = setTimeout(() => {
          Toast.clear();
          setValue(val as string);
        }, 500);
      }}
    >
      <Radio name="1">\u5355\u9009\u6846 1</Radio>
      <Radio name="2">\u5355\u9009\u6846 2</Radio>
    </Radio.Group>
  );
};
`}},key:"radio-async",meta:{title:"\u5F02\u6B65\u66F4\u65B0",card:!0}};var A=()=>{const[a,t]=s.exports.useState("");return e(r.Group,{value:a,children:u(l.Group,{children:[e(l,{clickable:!0,title:"\u5355\u9009\u68461",icon:e(p,{}),onClick:()=>t("1"),rightIcon:e(r,{name:"1"})}),e(l,{clickable:!0,title:"\u5355\u9009\u68462",icon:e(p,{}),onClick:()=>t("2"),rightIcon:e(r,{name:"2"})})]})})};const T=`import { ShopO } from '@react-vant/icons';
import React, { useState } from 'react';
import { Radio, Cell } from 'react-vant';

export default () => {
  const [cellValue, setCellValue] = useState('');
  return (
    <Radio.Group value={cellValue}>
      <Cell.Group>
        <Cell
          clickable
          title="\u5355\u9009\u68461"
          icon={<ShopO />}
          onClick={() => setCellValue('1')}
          rightIcon={<Radio name="1" />}
        />
        <Cell
          clickable
          title="\u5355\u9009\u68462"
          icon={<ShopO />}
          onClick={() => setCellValue('2')}
          rightIcon={<Radio name="2" />}
        />
      </Cell.Group>
    </Radio.Group>
  );
};
`,_={code:T,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { ShopO } from '@react-vant/icons';
import React, { useState } from 'react';
import { Radio, Cell } from 'react-vant';

export default () => {
  const [cellValue, setCellValue] = useState('');
  return (
    <Radio.Group value={cellValue}>
      <Cell.Group>
        <Cell
          clickable
          title="\u5355\u9009\u68461"
          icon={<ShopO />}
          onClick={() => setCellValue('1')}
          rightIcon={<Radio name="1" />}
        />
        <Cell
          clickable
          title="\u5355\u9009\u68462"
          icon={<ShopO />}
          onClick={() => setCellValue('2')}
          rightIcon={<Radio name="2" />}
        />
      </Cell.Group>
    </Radio.Group>
  );
};
`}},key:"radio-cell",meta:{title:"\u4E0E Cell \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528",compact:"true"}},w=function({previewer:a=()=>null,api:t=()=>null}){const d=a;return e("div",{children:u("div",{children:[e("h1",{id:"radio-\u5355\u9009\u6846","data-anchor":"radio-\u5355\u9009\u6846",children:"Radio \u5355\u9009\u6846"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u5355\u4E2A\u7ED3\u679C\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(d,{code:"import { Radio } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"defaultValue"})," \u503C\u9ED8\u8BA4\u5F53\u524D\u9009\u4E2D\u9879\u7684 name\u3002"]}),e(d,o(i({},k),{children:e(E,{})})),e("h3",{id:"\u6C34\u5E73\u6392\u5217","data-anchor":"\u6C34\u5E73\u6392\u5217",children:"\u6C34\u5E73\u6392\u5217"}),u("p",{children:["\u5C06 ",e("code",{children:"direction"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"horizontal"})," \u540E\uFF0C\u5355\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002"]}),e(d,o(i({},P),{children:e(C,{})})),e("h3",{id:"\u7981\u7528\u72B6\u6001","data-anchor":"\u7981\u7528\u72B6\u6001",children:"\u7981\u7528\u72B6\u6001"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C5E\u6027\u7981\u6B62\u9009\u9879\u5207\u6362\uFF0C\u5728 ",e("code",{children:"Radio"})," \u4E0A\u8BBE\u7F6E ",e("code",{children:"disabled"})," \u53EF\u4EE5\u7981\u7528\u5355\u4E2A\u9009\u9879\u3002"]}),e(d,o(i({},V),{children:e(F,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5F62\u72B6","data-anchor":"\u81EA\u5B9A\u4E49\u5F62\u72B6",children:"\u81EA\u5B9A\u4E49\u5F62\u72B6"}),u("p",{children:["\u5C06 ",e("code",{children:"shape"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"square"}),"\uFF0C\u5355\u9009\u6846\u7684\u5F62\u72B6\u4F1A\u53D8\u6210\u65B9\u5F62\u3002"]}),e(d,o(i({},M),{children:e(R,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"checkedColor"})," \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u56FE\u6807\u989C\u8272\u3002"]}),e(d,o(i({},S),{children:e(v,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5927\u5C0F","data-anchor":"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"iconSize"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u5927\u5C0F\u3002"]}),e(d,o(i({},N),{children:e(B,{})})),e("h3",{id:"\u7981\u7528\u6587\u672C\u70B9\u51FB","data-anchor":"\u7981\u7528\u6587\u672C\u70B9\u51FB",children:"\u7981\u7528\u6587\u672C\u70B9\u51FB"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"labelDisabled"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u5355\u9009\u6846\u5207\u6362\u3002"]}),e(d,o(i({},j),{children:e(f,{})})),e("h3",{id:"\u5F02\u6B65\u66F4\u65B0","data-anchor":"\u5F02\u6B65\u66F4\u65B0",children:"\u5F02\u6B65\u66F4\u65B0"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"value"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u72B6\u6001\u4E0D\u4F1A\u6539\u53D8\uFF0C\u800C\u662F\u76F4\u63A5\u6267\u884C ",e("code",{children:"onChange"})," \u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u4E2D\u66F4\u6362\u72B6\u6001"]}),e(d,o(i({},z),{children:e(x,{})})),e("h3",{id:"\u4E0E-cell-\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528","data-anchor":"\u4E0E-cell-\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528",children:"\u4E0E Cell \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528"}),u("p",{children:["\u6B64\u65F6\u4F60\u9700\u8981\u518D\u5F15\u5165 ",e("code",{children:"Cell"})," \u548C ",e("code",{children:"CellGroup"})," \u7EC4\u4EF6\u3002"]}),e(d,o(i({},_),{children:e(A,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"radio-props","data-anchor":"radio-props",children:"Radio Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"shape"}),u("td",{children:["\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"square"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"round"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"labelDisabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6587\u672C\u5185\u5BB9\u70B9\u51FB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"labelPosition"}),u("td",{children:["\u6587\u672C\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"iconSize"}),u("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"21px"})})]}),u("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),u("tr",{children:[e("td",{children:"iconRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),e("td",{children:u("em",{children:["(","{"," checked, disabled ","}",") => ReactNode"]})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"radiogroup-props","data-anchor":"radiogroup-props",children:"RadioGroup Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"direction"}),u("td",{children:["\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A",e("code",{children:"horizontal"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"vertical"})})]}),u("tr",{children:[e("td",{children:"iconSize"}),u("td",{children:["\u6240\u6709\u5355\u9009\u6846\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"21px"})})]}),u("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u6240\u6709\u5355\u9009\u6846\u7684\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]})]})]}),e("h3",{id:"radio-events","data-anchor":"radio-events",children:"Radio Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u5355\u9009\u6846\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h3",{id:"radiogroup-events","data-anchor":"radiogroup-events",children:"RadioGroup Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"name: string"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-radio-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-border-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-transition-duration"}),e("td",{children:e("em",{children:"var(--rv-animation-duration-fast)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-label-margin"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-label-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-checked-icon-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-disabled-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-disabled-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-radio-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]})]})]})]})})},L=[{Component:E,key:"radio-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:C,key:"radio-demo-1",title:"\u6C34\u5E73\u6392\u5217",card:!0},{Component:F,key:"radio-demo-2",title:"\u7981\u7528\u72B6\u6001",card:!0},{Component:R,key:"radio-demo-3",title:"\u81EA\u5B9A\u4E49\u5F62\u72B6"},{Component:v,key:"radio-demo-4",title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{Component:B,key:"radio-demo-5",title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0},{Component:f,key:"radio-demo-6",title:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},{Component:x,key:"radio-async",title:"\u5F02\u6B65\u66F4\u65B0",card:!0},{Component:A,key:"radio-cell",title:"\u4E0E Cell \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528",compact:"true"}],$={simulator:{compact:!1}},q=[{depth:1,text:"Radio \u5355\u9009\u6846",id:"radio-\u5355\u9009\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6C34\u5E73\u6392\u5217",id:"\u6C34\u5E73\u6392\u5217"},{depth:3,text:"\u7981\u7528\u72B6\u6001",id:"\u7981\u7528\u72B6\u6001"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5F62\u72B6",id:"\u81EA\u5B9A\u4E49\u5F62\u72B6"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u989C\u8272"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5927\u5C0F",id:"\u81EA\u5B9A\u4E49\u5927\u5C0F"},{depth:3,text:"\u7981\u7528\u6587\u672C\u70B9\u51FB",id:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},{depth:3,text:"\u5F02\u6B65\u66F4\u65B0",id:"\u5F02\u6B65\u66F4\u65B0"},{depth:3,text:"\u4E0E Cell \u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528",id:"\u4E0E-cell-\u7EC4\u4EF6\u4E00\u8D77\u4F7F\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Radio Props",id:"radio-props"},{depth:3,text:"RadioGroup Props",id:"radiogroup-props"},{depth:3,text:"Radio Events",id:"radio-events"},{depth:3,text:"RadioGroup Events",id:"radiogroup-events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],O="/src/components/radio/README.md",H="Radio \u5355\u9009\u6846",J="1658500653000";var W=a=>a.children({MdContent:w,demos:L,frontmatter:$,slugs:q,filePath:O,title:H,updatedTime:J});export{w as MdContent,W as default,L as demos,O as filePath,$ as frontmatter,q as slugs,H as title,J as updatedTime};
