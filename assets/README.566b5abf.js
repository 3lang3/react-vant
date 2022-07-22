var D=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(r,n,u)=>n in r?D(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u,d=(r,n)=>{for(var u in n||(n={}))f.call(n,u)&&c(r,u,n[u]);if(l)for(var u of l(n))C.call(n,u)&&c(r,u,n[u]);return r},i=(r,n)=>b(r,w(n));import{j as e,a as t}from"./main.531c777e.js";import{dI as a,dJ as o}from"./WaterMark.6f52b203.js";var s=()=>e(a,{onSubmit:n=>{o.alert({message:n})}});const x={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} />;
};`}},key:"password-input-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var h=()=>e(a,{length:4,onSubmit:n=>{o.alert({message:n})}});const A={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-1",meta:{title:"\u9650\u5236\u957F\u5EA6"}};var p=()=>e(a,{gutter:10,onSubmit:n=>{o.alert({message:n})}});const B={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput gutter={10} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-2",meta:{title:"\u683C\u5B50\u95F4\u8DDD"}};var m=()=>e(a,{value:"123",mask:!1,onSubmit:n=>{o.alert({message:n})}});const P={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput value="123" mask={false} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-3",meta:{title:"\u660E\u6587\u5C55\u793A"}};var v=()=>e(a,{type:"number",value:"12",mask:!1,length:4,onSubmit:n=>{o.alert({message:n})}});const S={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput type="number" value="12" mask={false} length={4} onSubmit={onSubmit} />;
};`}},key:"password-input-demo-4",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var E=()=>e(a,{value:123,mask:!1,length:4,validator:n=>/^[0-3]{0,4}$/.test(n),onSubmit:n=>{o.alert({message:n})}});const y={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value={123}
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <PasswordInput
      value={123}
      mask={false}
      length={4}
      validator={(val) => {
        return /^[0-3]{0,4}$/.test(val);
      }}
      onSubmit={onSubmit}
    />
  );
};`}},key:"password-input-demo-5",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var g=()=>e(a,{length:4,autoFocus:!0,onSubmit:n=>{o.alert({message:n})}});const I={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} autoFocus onSubmit={onSubmit} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput length={4} autoFocus onSubmit={onSubmit} />;
};`}},key:"password-input-demo-6",meta:{title:"\u53EA\u5141\u8BB8\u6570\u5B57"}};var F=()=>e(a,{onSubmit:n=>{o.alert({message:n})},info:e("div",{children:"\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57"})});const k={code:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57</div>} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';

export default () => {
  const onSubmit = (val) => {
    Dialog.alert({
      message: val,
    });
  };
  return <PasswordInput onSubmit={onSubmit} info={<div>\u5BC6\u7801\u4E3A6\u4F4D\u6570\u5B57</div>} />;
};`}},key:"password-input-demo-7",meta:{title:"\u63D0\u793A\u4FE1\u606F"}},M=function({previewer:r=()=>null,api:n=()=>null}){const u=r;return e("div",{children:t("div",{children:[e("h1",{id:"passwordinput-\u5BC6\u7801\u8F93\u5165\u6846","data-anchor":"passwordinput-\u5BC6\u7801\u8F93\u5165\u6846",children:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5BC6\u7801\u8F93\u5165\u6846"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(u,{code:"import { PasswordInput } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(u,i(d({},x),{children:e(s,{})})),e("h3",{id:"\u9650\u5236\u957F\u5EA6","data-anchor":"\u9650\u5236\u957F\u5EA6",children:"\u9650\u5236\u957F\u5EA6"}),e(u,i(d({},A),{children:e(h,{})})),e("h3",{id:"\u683C\u5B50\u95F4\u8DDD","data-anchor":"\u683C\u5B50\u95F4\u8DDD",children:"\u683C\u5B50\u95F4\u8DDD"}),e(u,i(d({},B),{children:e(p,{})})),e("h3",{id:"\u660E\u6587\u5C55\u793A","data-anchor":"\u660E\u6587\u5C55\u793A",children:"\u660E\u6587\u5C55\u793A"}),e(u,i(d({},P),{children:e(m,{})})),e("h3",{id:"\u53EA\u5141\u8BB8\u6570\u5B57","data-anchor":"\u53EA\u5141\u8BB8\u6570\u5B57",children:"\u53EA\u5141\u8BB8\u6570\u5B57"}),e(u,i(d({},S),{children:e(v,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u89C4\u5219","data-anchor":"\u81EA\u5B9A\u4E49\u89C4\u5219",children:"\u81EA\u5B9A\u4E49\u89C4\u5219"}),e("blockquote",{children:e("p",{children:"\u5982\u679C\u8BBE\u7F6E\u7684\u521D\u59CB\u503C\u4E0D\u7B26\u5408\u89C4\u5219, \u5C06\u4E0D\u4F1A\u5C55\u793A"})}),e(u,i(d({},y),{children:e(E,{})})),e("h3",{id:"\u81EA\u52A8\u805A\u7126","data-anchor":"\u81EA\u52A8\u805A\u7126",children:"\u81EA\u52A8\u805A\u7126"}),e(u,i(d({},I),{children:e(g,{})})),e("h3",{id:"\u63D0\u793A\u4FE1\u606F","data-anchor":"\u63D0\u793A\u4FE1\u606F",children:"\u63D0\u793A\u4FE1\u606F"}),e(u,i(d({},k),{children:e(F,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u503C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u7C7B\u578B \u9ED8\u8BA4\u4E3A text"}),e("td",{children:e("em",{children:"string"})}),t("td",{children:[e("code",{children:"number"})," ",e("code",{children:"text"})]})]}),t("tr",{children:[e("td",{children:"info"}),e("td",{children:"\u8F93\u5165\u6846\u4E0B\u65B9\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"length"}),e("td",{children:"\u5BC6\u7801\u6700\u5927\u957F\u5EA6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6"})})]}),t("tr",{children:[e("td",{children:"gutter"}),t("td",{children:["\u8F93\u5165\u6846\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u5982 ",e("code",{children:"20px"})," ",e("code",{children:"2em"}),"\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"autoFocus"}),e("td",{children:"\u81EA\u52A8\u805A\u7126"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"false"})]}),t("tr",{children:[e("td",{children:"mask"}),e("td",{children:"\u662F\u5426\u9690\u85CF\u5BC6\u7801"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"true"})]}),t("tr",{children:[e("td",{children:"validator"}),e("td",{children:"\u81EA\u5B9A\u4E49\u89C4\u5219, \u8FD9\u4E2A\u89C4\u5219\u5E76\u975E\u5355\u4E2A\u8F93\u5165\u6846\u7684"}),e("td",{children:e("em",{children:"function"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"highlightClass"}),e("td",{children:"\u9AD8\u4EAE\u6837\u5F0F(mask=true \u65F6\u4E0D\u751F\u6548)"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u6570\u636E\u6539\u53D8\u65F6\u89E6\u53D1"}),t("td",{children:["val: ",e("em",{children:"string"})]})]}),t("tr",{children:[e("td",{children:"onSubmit"}),e("td",{children:"\u6570\u636E\u8F93\u6EE1\u65F6\u89E6\u53D1"}),t("td",{children:["val: ",e("em",{children:"string"})]})]}),t("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-password-input-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-margin"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-font-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-border-radius"}),e("td",{children:e("em",{children:"6px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-info-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-info-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-error-info-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-dot-size"}),e("td",{children:e("em",{children:"10px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-dot-color"}),e("td",{children:e("em",{children:"var(--rv-black)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-cursor-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-cursor-width"}),e("td",{children:e("em",{children:"1px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-cursor-height"}),e("td",{children:e("em",{children:"40%"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-cursor-animation-duration"}),e("td",{children:e("em",{children:"1s"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-password-input-item-border-radius"}),e("td",{children:e("em",{children:"0px"})}),e("td",{children:"-"})]})]})]})]})})},j=[{Component:s,key:"password-input-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:h,key:"password-input-demo-1",title:"\u9650\u5236\u957F\u5EA6"},{Component:p,key:"password-input-demo-2",title:"\u683C\u5B50\u95F4\u8DDD"},{Component:m,key:"password-input-demo-3",title:"\u660E\u6587\u5C55\u793A"},{Component:v,key:"password-input-demo-4",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:E,key:"password-input-demo-5",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:g,key:"password-input-demo-6",title:"\u53EA\u5141\u8BB8\u6570\u5B57"},{Component:F,key:"password-input-demo-7",title:"\u63D0\u793A\u4FE1\u606F"}],R=void 0,N=[{depth:1,text:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846",id:"passwordinput-\u5BC6\u7801\u8F93\u5165\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u9650\u5236\u957F\u5EA6",id:"\u9650\u5236\u957F\u5EA6"},{depth:3,text:"\u683C\u5B50\u95F4\u8DDD",id:"\u683C\u5B50\u95F4\u8DDD"},{depth:3,text:"\u660E\u6587\u5C55\u793A",id:"\u660E\u6587\u5C55\u793A"},{depth:3,text:"\u53EA\u5141\u8BB8\u6570\u5B57",id:"\u53EA\u5141\u8BB8\u6570\u5B57"},{depth:3,text:"\u81EA\u5B9A\u4E49\u89C4\u5219",id:"\u81EA\u5B9A\u4E49\u89C4\u5219"},{depth:3,text:"\u81EA\u52A8\u805A\u7126",id:"\u81EA\u52A8\u805A\u7126"},{depth:3,text:"\u63D0\u793A\u4FE1\u606F",id:"\u63D0\u793A\u4FE1\u606F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],$="/src/components/password-input/README.md",L="PasswordInput \u5BC6\u7801\u8F93\u5165\u6846",z="1658500653000";var G=r=>r.children({MdContent:M,demos:j,frontmatter:R,slugs:N,filePath:$,title:L,updatedTime:z});export{M as MdContent,G as default,j as demos,$ as filePath,R as frontmatter,N as slugs,L as title,z as updatedTime};
