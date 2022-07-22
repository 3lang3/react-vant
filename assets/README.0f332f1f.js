var E=Object.defineProperty,v=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(r,n,t)=>n in r?E(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,c=(r,n)=>{for(var t in n||(n={}))b.call(n,t)&&p(r,t,n[t]);if(B)for(var t of B(n))x.call(n,t)&&p(r,t,n[t]);return r},a=(r,n)=>v(r,A(n));import{a as d,j as e}from"./main.531c777e.js";import{S as i,db as u,cG as D,av as y,aF as S}from"./WaterMark.6f52b203.js";const o=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var C=()=>d(i,{gap:20,children:[e(u,{content:5,children:e(o,{})}),e(u,{content:10,children:e(o,{})}),e(u,{content:"hot",children:e(o,{})}),e(u,{dot:!0,children:e(o,{})})]});const w={code:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},l=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var s=()=>d(i,{gap:20,children:[e(u,{content:20,max:9,children:e(l,{})}),e(u,{content:"99",max:"20",children:e(l,{})}),e(u,{content:"9999",max:"99",children:e(l,{})})]});const R={code:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo-1",meta:{title:"\u6700\u5927\u503C"}},h=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var F=()=>d(i,{gap:20,children:[e(u,{dot:!0,offset:["100%",0],children:e(h,{})}),e(u,{dot:!0,color:"#87d068",children:e(h,{})}),e(u,{dot:!0,offset:[0,"100%"],color:"#3f45ff",children:e(h,{})}),e(u,{dot:!0,offset:["100%","100%"],color:"orange",children:e(h,{})})]});const k={code:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge dot offset={['100%', 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, '100%']} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={['100%', '100%']} color="orange">
        <Child />
      </Badge>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge dot offset={['100%', 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, '100%']} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={['100%', '100%']} color="orange">
        <Child />
      </Badge>
    </Space>
  );
};`}},key:"badge-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"}},g=()=>e("div",{style:{width:40,height:40,background:"#f2f3f5",borderRadius:4}});var m=()=>d(i,{gap:20,children:[e(u,{content:e(D,{}),children:e(g,{})}),e(u,{content:e(y,{}),children:e(g,{})}),e(u,{content:e(S,{}),children:e(g,{})})]});const P=`import React from 'react';
import { Badge, Space } from 'react-vant';
import { Success, Cross, Down } from '@react-vant/icons';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  );
};
`,M={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Badge, Space } from 'react-vant';
import { Success, Cross, Down } from '@react-vant/icons';

const Child = () => (
  <div style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }} />
);

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  );
};
`}},key:"badge-custom",meta:{title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"}};var f=()=>d(i,{gap:20,children:[e(u,{content:"20",style:{marginRight:16}}),e(u,{content:"200",max:"99"})]});const N={code:`import React from 'react';
import { Space, Badge } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Badge } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  );
};`}},key:"badge-demo-3",meta:{title:"\u72EC\u7ACB\u5C55\u793A"}},j=function({previewer:r=()=>null,api:n=()=>null}){const t=r;return e("div",{children:d("div",{children:[e("h1",{id:"badge-\u5FBD\u6807","data-anchor":"badge-\u5FBD\u6807",children:"Badge \u5FBD\u6807"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u5FBD\u6807\u6570\u5B57\u6216\u5C0F\u7EA2\u70B9\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Badge } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),d("p",{children:["\u8BBE\u7F6E ",e("code",{children:"content"})," \u5C5E\u6027\u540E\uFF0CBadge \u4F1A\u5728\u5B50\u5143\u7D20\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5BF9\u5E94\u7684\u5FBD\u6807\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"dot"})," \u6765\u663E\u793A\u5C0F\u7EA2\u70B9\u3002"]}),e(t,a(c({},w),{children:e(C,{})})),e("h3",{id:"\u6700\u5927\u503C","data-anchor":"\u6700\u5927\u503C",children:"\u6700\u5927\u503C"}),d("p",{children:["\u8BBE\u7F6E ",e("code",{children:"max"})," \u5C5E\u6027\u540E\uFF0C\u5F53 ",e("code",{children:"content"})," \u7684\u6570\u503C\u8D85\u8FC7\u6700\u5927\u503C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u4E3A ",d("code",{children:["{","max","}","+"]}),"\u3002"]}),e(t,a(c({},R),{children:e(s,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF",children:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"}),d("ul",{children:[d("li",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u5C5E\u6027\u6765\u8BBE\u7F6E\u5FBD\u6807\u7684\u989C\u8272"]}),d("li",{children:["\u901A\u8FC7 ",e("code",{children:"offset"})," \u5C5E\u6027\u6765\u8C03\u6574\u5FBD\u6807\u7684\u504F\u79FB\u91CF"]})]}),e(t,a(c({},k),{children:e(F,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9","data-anchor":"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9",children:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"}),e(t,a(c({},M),{children:e(m,{})})),e("h3",{id:"\u72EC\u7ACB\u5C55\u793A","data-anchor":"\u72EC\u7ACB\u5C55\u793A",children:"\u72EC\u7ACB\u5C55\u793A"}),e("p",{children:"\u5F53 Badge \u6CA1\u6709\u5B50\u5143\u7D20\u65F6\uFF0C\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u5143\u7D20\u8FDB\u884C\u5C55\u793A\u3002"}),e(t,a(c({},N),{children:e(f,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"content"}),e("td",{children:"\u5FBD\u6807\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u5FBD\u6807\u80CC\u666F\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#f44336"})})]}),d("tr",{children:[e("td",{children:"dot"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E3A\u5C0F\u7EA2\u70B9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),d("tr",{children:[e("td",{children:"max"}),d("td",{children:["\u6700\u5927\u503C\uFF0C\u8D85\u8FC7\u6700\u5927\u503C\u4F1A\u663E\u793A ",d("code",{children:["{","max","}","+"]}),"\uFF0C\u4EC5\u5F53 content \u4E3A\u6570\u5B57\u65F6\u6709\u6548"]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"offset"}),d("td",{children:["\u8BBE\u7F6E\u5FBD\u6807\u7684\u504F\u79FB\u91CF\uFF0C\u6570\u7EC4\u7684\u4E24\u9879\u5206\u522B\u5BF9\u5E94\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"[number | string, number | string]"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"showZero"}),e("td",{children:"\u5F53 content \u4E3A\u6570\u5B57 0 \u65F6\uFF0C\u662F\u5426\u5C55\u793A\u5FBD\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"\u4E8B\u4EF6","data-anchor":"\u4E8B\u4EF6",children:"\u4E8B\u4EF6"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:d("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),d("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"--rv-badge-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-padding"}),e("td",{children:e("em",{children:"0 3px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-border-width"}),e("td",{children:e("em",{children:"var(--rv-border-width-base)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-background-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-dot-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-dot-size"}),e("td",{children:e("em",{children:"8px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-badge-font-family"}),e("td",{children:e("em",{children:"-apple-system-font, Helvetica Neue, Arial, sans-serif"})}),e("td",{children:"-"})]})]})]})]})})},I=[{Component:C,key:"badge-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"badge-demo-1",title:"\u6700\u5927\u503C"},{Component:F,key:"badge-demo-2",title:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"},{Component:m,key:"badge-custom",title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"},{Component:f,key:"badge-demo-3",title:"\u72EC\u7ACB\u5C55\u793A"}],$={simulator:{compact:!1,style:{background:"#fff"}}},_=[{depth:1,text:"Badge \u5FBD\u6807",id:"badge-\u5FBD\u6807"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6700\u5927\u503C",id:"\u6700\u5927\u503C"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF",id:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u504F\u79FB\u91CF"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9"},{depth:3,text:"\u72EC\u7ACB\u5C55\u793A",id:"\u72EC\u7ACB\u5C55\u793A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u4E8B\u4EF6",id:"\u4E8B\u4EF6"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],L="/src/components/badge/README.md",z="Badge \u5FBD\u6807",G="1658500653000";var q=r=>r.children({MdContent:j,demos:I,frontmatter:$,slugs:_,filePath:L,title:z,updatedTime:G});export{j as MdContent,q as default,I as demos,L as filePath,$ as frontmatter,_ as slugs,z as title,G as updatedTime};
