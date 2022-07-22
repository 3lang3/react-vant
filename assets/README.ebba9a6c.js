var E=Object.defineProperty,f=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var l=(r,d,t)=>d in r?E(r,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[d]=t,c=(r,d)=>{for(var t in d||(d={}))B.call(d,t)&&l(r,t,d[t]);if(h)for(var t of h(d))D.call(d,t)&&l(r,t,d[t]);return r},n=(r,d)=>f(r,w(d));import{j as e,r as x,a as u}from"./main.531c777e.js";import{d7 as i,dJ as A,C as g}from"./WaterMark.6f52b203.js";var a=()=>e(i,{defaultChecked:!0});const k={code:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch defaultChecked />;
};`}},key:"switch-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var o=()=>e(i,{disabled:!0,defaultChecked:!0});const y={code:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch disabled defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch disabled defaultChecked />;
};`}},key:"switch-demo-1",meta:{title:"\u7981\u7528\u72B6\u6001",card:!0}};var s=()=>e(i,{loading:!0,defaultChecked:!0});const S={code:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch loading defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch loading defaultChecked />;
};`}},key:"switch-demo-2",meta:{title:"\u52A0\u8F7D\u72B6\u6001",card:!0}};var F=()=>e(i,{size:"24px",defaultChecked:!0});const P={code:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch size="24px" defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch size="24px" defaultChecked />;
};`}},key:"switch-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0}};var p=()=>e(i,{activeColor:"#ee0a24",inactiveColor:"#dcdee0",defaultChecked:!0});const b={code:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'react-vant';

export default () => {
  return <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />;
};`}},key:"switch-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0}};var m=()=>{const[r,d]=x.exports.useState(!1);return e(i,{checked:r,onChange:async v=>{try{await A.confirm({title:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F"}),d(v)}catch{}}})};const M={code:`import React, { useState } from 'react';
import { Switch, Dialog } from 'react-vant';

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: '\u63D0\u9192',
        message: '\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F',
      });
      setValue(checked);
    } catch {
      // \u53D6\u6D88dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Switch, Dialog } from 'react-vant';

export default () => {
  const [value, setValue] = useState(false);
  const onChange = async (checked) => {
    try {
      await Dialog.confirm({
        title: '\u63D0\u9192',
        message: '\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F',
      });
      setValue(checked);
    } catch {
      // \u53D6\u6D88dialog
    }
  };
  return <Switch checked={value} onChange={onChange} />;
};`}},key:"switch-demo-5",meta:{title:"\u5F02\u6B65\u63A7\u5236",card:!0}};var C=()=>e(g,{center:!0,title:"\u6807\u9898",rightIcon:e(i,{size:24,defaultChecked:!0,onChange:r=>console.log(`switch to ${r}`)})});const j={code:`import React from 'react';
import { Cell, Switch } from 'react-vant';

export default () => {
  return (
    <Cell
      center
      title="\u6807\u9898"
      rightIcon={
        <Switch
          size={24}
          defaultChecked
          onChange={(checked) => console.log(\`switch to \${checked}\`)}
        />
      }
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Switch } from 'react-vant';

export default () => {
  return (
    <Cell
      center
      title="\u6807\u9898"
      rightIcon={
        <Switch
          size={24}
          defaultChecked
          onChange={(checked) => console.log(\`switch to \${checked}\`)}
        />
      }
    />
  );
};`}},key:"switch-demo-6",meta:{title:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",card:!0}},R=function({previewer:r=()=>null,api:d=()=>null}){const t=r;return e("div",{children:u("div",{children:[e("h1",{id:"switch-\u5F00\u5173","data-anchor":"switch-\u5F00\u5173",children:"Switch \u5F00\u5173"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5728\u6253\u5F00\u548C\u5173\u95ED\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Switch } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u9ED8\u8BA4\u5F00\u5173\u7684\u9009\u4E2D\u72B6\u6001\uFF0C",e("code",{children:"true"})," \u8868\u793A\u5F00\uFF0C",e("code",{children:"false"})," \u8868\u793A\u5173\u3002"]}),e(t,n(c({},k),{children:e(a,{})})),e("h3",{id:"\u7981\u7528\u72B6\u6001","data-anchor":"\u7981\u7528\u72B6\u6001",children:"\u7981\u7528\u72B6\u6001"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C5E\u6027\u6765\u7981\u7528\u5F00\u5173\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002"]}),e(t,n(c({},y),{children:e(o,{})})),e("h3",{id:"\u52A0\u8F7D\u72B6\u6001","data-anchor":"\u52A0\u8F7D\u72B6\u6001",children:"\u52A0\u8F7D\u72B6\u6001"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"loading"})," \u5C5E\u6027\u8BBE\u7F6E\u5F00\u5173\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u5F00\u5173\u4E0D\u53EF\u70B9\u51FB\u3002"]}),e(t,n(c({},S),{children:e(s,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5927\u5C0F","data-anchor":"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F00\u5173\u7684\u5927\u5C0F\u3002"]}),e(t,n(c({},P),{children:e(F,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),u("p",{children:[e("code",{children:"activeColor"})," \u5C5E\u6027\u8868\u793A\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272\uFF0C",e("code",{children:"inactiveColor"})," \u8868\u793A\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272\u3002"]}),e(t,n(c({},b),{children:e(p,{})})),e("h3",{id:"\u5F02\u6B65\u63A7\u5236","data-anchor":"\u5F02\u6B65\u63A7\u5236",children:"\u5F02\u6B65\u63A7\u5236"}),u("p",{children:["\u9700\u8981\u5F02\u6B65\u63A7\u5236\u5F00\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"checked"})," \u5C5E\u6027\u548C ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u4EE3\u66FF ",e("code",{children:"defaultChecked"}),"\uFF0C\u5E76\u5728\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u4E2D\u624B\u52A8\u5904\u7406\u5F00\u5173\u72B6\u6001\u3002"]}),e(t,n(c({},M),{children:e(m,{})})),e("h3",{id:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528","data-anchor":"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",children:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528"}),e(t,n(c({},j),{children:e(C,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"checked"}),e("td",{children:"\u5F00\u5173\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u5F00\u5173\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u4E3A\u52A0\u8F7D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u5F00\u5173\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"30px"})})]}),u("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),u("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),u("tr",{children:[e("td",{children:"activeValue"}),e("td",{children:"\u6253\u5F00\u65F6\u5BF9\u5E94\u7684\u503C"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"inactiveValue"}),e("td",{children:"\u5173\u95ED\u65F6\u5BF9\u5E94\u7684\u503C"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F00\u5173\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"value: any"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-switch-size"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-width"}),e("td",{children:e("em",{children:"2em"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-height"}),e("td",{children:e("em",{children:"1em"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-node-size"}),e("td",{children:e("em",{children:"1em"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-node-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-node-box-shadow"}),e("td",{children:e("em",{children:"0 3px 1px 0 rgba(0, 0, 0, 0.05)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-on-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-transition-duration"}),e("td",{children:e("em",{children:"var(--rv-animation-duration-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-switch-border"}),e("td",{children:e("em",{children:"var(--rv-border-width-base) solid rgba(0, 0, 0, 0.1)"})}),e("td",{children:"-"})]})]})]})]})})},N=[{Component:a,key:"switch-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:o,key:"switch-demo-1",title:"\u7981\u7528\u72B6\u6001",card:!0},{Component:s,key:"switch-demo-2",title:"\u52A0\u8F7D\u72B6\u6001",card:!0},{Component:F,key:"switch-demo-3",title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0},{Component:p,key:"switch-demo-4",title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0},{Component:m,key:"switch-demo-5",title:"\u5F02\u6B65\u63A7\u5236",card:!0},{Component:C,key:"switch-demo-6",title:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",card:!0}],I={simulator:{compact:!1,style:{background:"#fff"}}},z=[{depth:1,text:"Switch \u5F00\u5173",id:"switch-\u5F00\u5173"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7981\u7528\u72B6\u6001",id:"\u7981\u7528\u72B6\u6001"},{depth:3,text:"\u52A0\u8F7D\u72B6\u6001",id:"\u52A0\u8F7D\u72B6\u6001"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5927\u5C0F",id:"\u81EA\u5B9A\u4E49\u5927\u5C0F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u989C\u8272"},{depth:3,text:"\u5F02\u6B65\u63A7\u5236",id:"\u5F02\u6B65\u63A7\u5236"},{depth:3,text:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",id:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],$="/src/components/switch/README.md",L="Switch \u5F00\u5173",V="1658500653000";var G=r=>r.children({MdContent:R,demos:N,frontmatter:I,slugs:z,filePath:$,title:L,updatedTime:V});export{R as MdContent,G as default,N as demos,$ as filePath,I as frontmatter,z as slugs,L as title,V as updatedTime};
