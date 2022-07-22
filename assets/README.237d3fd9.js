var m=Object.defineProperty,E=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var l=(n,u,r)=>u in n?m(n,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[u]=r,d=(n,u)=>{for(var r in u||(u={}))v.call(u,r)&&l(n,r,u[r]);if(o)for(var r of o(u))A.call(u,r)&&l(n,r,u[r]);return n},i=(n,u)=>E(n,F(u));import{r as a,j as e,a as t}from"./main.531c777e.js";import{ea as c,b as P,d as C}from"./WaterMark.6f52b203.js";var h=()=>{const[n,u]=a.exports.useState(1);return e(c,{value:n,onChange:u,totalItems:24,itemsPerPage:5})};const B={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} onChange={setPage} totalItems={24} itemsPerPage={5} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} onChange={setPage} totalItems={24} itemsPerPage={5} />;
};`}},key:"pagination-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>{const[n,u]=a.exports.useState(1);return e(c,{value:n,mode:"simple",onChange:u,pageCount:12})};const x={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} mode="simple" onChange={setPage} pageCount={12} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return <Pagination value={page} mode="simple" onChange={setPage} pageCount={12} />;
};`}},key:"pagination-demo-1",meta:{title:"\u7B80\u5355\u6A21\u5F0F"}};var s=()=>{const[n,u]=a.exports.useState(1);return e(c,{forceEllipses:!0,value:n,onChange:u,totalItems:125,showPageSize:3})};const f={code:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination forceEllipses value={page} onChange={setPage} totalItems={125} showPageSize={3} />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination forceEllipses value={page} onChange={setPage} totalItems={125} showPageSize={3} />
  );
};`}},key:"pagination-demo-2",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var g=()=>{const[n,u]=a.exports.useState(1);return e(c,{value:n,onChange:u,totalItems:125,showPageSize:5,prevText:e(P,{}),nextText:e(C,{}),pageRender:({text:r})=>`${r} \u{1F600}`})};const D=`import React, { useState } from 'react';
import { Arrow, ArrowLeft } from '@react-vant/icons';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => \`\${text} \u{1F600}\`}
    />
  );
};
`,S={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Arrow, ArrowLeft } from '@react-vant/icons';
import { Pagination } from 'react-vant';

export default () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => \`\${text} \u{1F600}\`}
    />
  );
};
`}},key:"pagination-custom",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}},y=function({previewer:n=()=>null,api:u=()=>null}){const r=n;return e("div",{children:t("div",{children:[e("h1",{id:"pagination-\u5206\u9875","data-anchor":"pagination-\u5206\u9875",children:"Pagination \u5206\u9875"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5C06\u6570\u636E\u5206\u9694\uFF0C\u6BCF\u6B21\u53EA\u52A0\u8F7D\u4E00\u4E2A\u9875\u9762\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Pagination } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801\u3002"]}),e(r,i(d({},B),{children:e(h,{})})),e("h3",{id:"\u7B80\u5355\u6A21\u5F0F","data-anchor":"\u7B80\u5355\u6A21\u5F0F",children:"\u7B80\u5355\u6A21\u5F0F"}),t("p",{children:["\u5C06 ",e("code",{children:"mode"})," \u8BBE\u7F6E\u4E3A ",e("code",{children:"simple"})," \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002"]}),e(r,i(d({},x),{children:e(p,{})})),e("h3",{id:"\u663E\u793A\u7701\u7565\u53F7","data-anchor":"\u663E\u793A\u7701\u7565\u53F7",children:"\u663E\u793A\u7701\u7565\u53F7"}),e(r,i(d({},f),{children:e(s,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE","data-anchor":"\u81EA\u5B9A\u4E49\u6309\u94AE",children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"prevText"}),"\u3001",e("code",{children:"nextText"})," \u7B49\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u5206\u9875\u6309\u94AE\u7684\u5185\u5BB9\u3002"]}),e(r,i(d({},S),{children:e(g,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9875\u7801"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"mode"}),t("td",{children:["\u663E\u793A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"simple"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"multi"})})]}),t("tr",{children:[e("td",{children:"prevText"}),e("td",{children:"\u4E0A\u4E00\u9875\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u4E0A\u4E00\u9875"})})]}),t("tr",{children:[e("td",{children:"nextText"}),e("td",{children:"\u4E0B\u4E00\u9875\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u4E0B\u4E00\u9875"})})]}),t("tr",{children:[e("td",{children:"pageRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9875\u7801"}),e("td",{children:t("em",{children:["(","{"," number: number, text: string, active: boolean ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"pageCount"}),e("td",{children:"\u603B\u9875\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u6839\u636E\u9875\u6570\u8BA1\u7B97"})]}),t("tr",{children:[e("td",{children:"totalItems"}),e("td",{children:"\u603B\u8BB0\u5F55\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"itemsPerPage"}),e("td",{children:"\u6BCF\u9875\u8BB0\u5F55\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"10"})})]}),t("tr",{children:[e("td",{children:"showPageSize"}),e("td",{children:"\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"5"})})]}),t("tr",{children:[e("td",{children:"forceEllipses"}),e("td",{children:"\u662F\u5426\u663E\u793A\u7701\u7565\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"page:number"})})]})})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(r,{code:"import type { PaginationMode } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-pagination-height"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-width"}),e("td",{children:e("em",{children:"36px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-default-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-item-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-desc-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-pagination-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]})]})]})]})})},b=[{Component:h,key:"pagination-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"pagination-demo-1",title:"\u7B80\u5355\u6A21\u5F0F"},{Component:s,key:"pagination-demo-2",title:"\u57FA\u7840\u7528\u6CD5"},{Component:g,key:"pagination-custom",title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}],w={simulator:{compact:!1}},M=[{depth:1,text:"Pagination \u5206\u9875",id:"pagination-\u5206\u9875"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7B80\u5355\u6A21\u5F0F",id:"\u7B80\u5355\u6A21\u5F0F"},{depth:3,text:"\u663E\u793A\u7701\u7565\u53F7",id:"\u663E\u793A\u7701\u7565\u53F7"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6309\u94AE",id:"\u81EA\u5B9A\u4E49\u6309\u94AE"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],R="/src/components/pagination/README.md",I="Pagination \u5206\u9875",N="1658500653000";var z=n=>n.children({MdContent:y,demos:b,frontmatter:w,slugs:M,filePath:R,title:I,updatedTime:N});export{y as MdContent,z as default,b as demos,R as filePath,w as frontmatter,M as slugs,I as title,N as updatedTime};
