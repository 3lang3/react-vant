var E=Object.defineProperty,p=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var c=(r,t,i)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,d=(r,t)=>{for(var i in t||(t={}))B.call(t,i)&&c(r,i,t[i]);if(l)for(var i of l(t))m.call(t,i)&&c(r,i,t[i]);return r},n=(r,t)=>p(r,v(t));import{r as h,a as u,F as a,j as e}from"./main.531c777e.js";import{B as o,dN as s}from"./WaterMark.6f52b203.js";var C=()=>{const[r,t]=h.exports.useState(!1);return u(a,{children:[e(o,{type:"primary",onClick:()=>t(!0),children:"\u663E\u793A\u906E\u7F69\u5C42"}),e(s,{visible:r,onClick:()=>t(!1)})]})};const y={code:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        \u663E\u793A\u906E\u7F69\u5C42
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        \u663E\u793A\u906E\u7F69\u5C42
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
};`}},key:"overlay-demo",meta:{title:"\u663E\u793A\u906E\u7F69\u5C42"}};var F=()=>{const[r,t]=h.exports.useState(!1);return u(a,{children:[e(o,{type:"primary",onClick:()=>t(!0),children:"\u5D4C\u5165\u5185\u5BB9"}),e(s,{visible:r,onClick:()=>t(!1),children:e("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e("div",{style:{width:120,height:120,backgroundColor:"#fff",borderRadius:4}})})})]})};const f={code:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u5D4C\u5165\u5185\u5BB9
      </Button>
      <Overlay visible={visible} onClick={() => setVisible(false)}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
        </div>
      </Overlay>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Overlay } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u5D4C\u5165\u5185\u5BB9
      </Button>
      <Overlay visible={visible} onClick={() => setVisible(false)}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 120, height: 120, backgroundColor: '#fff', borderRadius: 4 }} />
        </div>
      </Overlay>
    </>
  );
};`}},key:"overlay-demo-1",meta:{title:"\u5D4C\u5165\u5185\u5BB9"}},D=function({previewer:r=()=>null,api:t=()=>null}){const i=r;return e("div",{children:u("div",{children:[e("h1",{id:"overlay-\u906E\u7F69\u5C42","data-anchor":"overlay-\u906E\u7F69\u5C42",children:"Overlay \u906E\u7F69\u5C42"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(i,{code:"import { Overlay } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(i,n(d({},y),{children:e(C,{})})),e("h3",{id:"\u5D4C\u5165\u5185\u5BB9","data-anchor":"\u5D4C\u5165\u5185\u5BB9",children:"\u5D4C\u5165\u5185\u5BB9"}),e("p",{children:"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u5728\u906E\u7F69\u5C42\u4E0A\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9\u3002"}),e(i,n(d({},f),{children:e(F,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"z-index \u5C42\u7EA7"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),u("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.3"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"customStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8\uFF0C\u9501\u5B9A\u65F6\u8499\u5C42\u91CC\u7684\u5185\u5BB9\u4E5F\u5C06\u65E0\u6CD5\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-overlay-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-overlay-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.7)"})}),e("td",{children:"-"})]})]})]})]})})},A=[{Component:C,key:"overlay-demo",title:"\u663E\u793A\u906E\u7F69\u5C42"},{Component:F,key:"overlay-demo-1",title:"\u5D4C\u5165\u5185\u5BB9"}],b={simulator:{compact:!1}},x=[{depth:1,text:"Overlay \u906E\u7F69\u5C42",id:"overlay-\u906E\u7F69\u5C42"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5D4C\u5165\u5185\u5BB9",id:"\u5D4C\u5165\u5185\u5BB9"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],g="/src/components/overlay/README.md",k="Overlay \u906E\u7F69\u5C42",S="1658500653000";var j=r=>r.children({MdContent:D,demos:A,frontmatter:b,slugs:x,filePath:g,title:k,updatedTime:S});export{D as MdContent,j as default,A as demos,g as filePath,b as frontmatter,x as slugs,k as title,S as updatedTime};
