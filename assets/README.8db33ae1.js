var g=Object.defineProperty,m=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(d,u,n)=>u in d?g(d,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[u]=n,i=(d,u)=>{for(var n in u||(u={}))F.call(u,n)&&h(d,n,u[n]);if(o)for(var n of o(u))x.call(u,n)&&h(d,n,u[n]);return d},p=(d,u)=>m(d,v(u));import{a as r,j as e,F as l}from"./main.cc295cd4.js";import{T as t}from"./index.c79ab82b.js";var a=()=>r(t.Text,{children:["In the process of ",e(t.Text,{type:"danger",children:"internal"})," ",e(t.Text,{delete:!0,children:"desktop"}),"applications development,",e(t.Text,{type:"primary",children:" many different"})," design specs and ",e(t.Text,{underline:!0,children:"implementations"}),"would be ",e(t.Text,{type:"warning",children:"involved"})]});const E={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Text>
      In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
      <Typography.Text delete>desktop</Typography.Text>applications development,
      <Typography.Text type="primary"> many different</Typography.Text> design specs and <Typography.Text
        underline
      >
        implementations
      </Typography.Text>would be <Typography.Text type="warning">involved</Typography.Text>
    </Typography.Text>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Text>
      In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
      <Typography.Text delete>desktop</Typography.Text>applications development,
      <Typography.Text type="primary"> many different</Typography.Text> design specs and <Typography.Text
        underline
      >
        implementations
      </Typography.Text>would be <Typography.Text type="warning">involved</Typography.Text>
    </Typography.Text>
  );
};`}},key:"typography-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var c=()=>r(l,{children:[e(t.Text,{type:"danger",children:"\u8FD9\u662F\u4E00\u6761\u6587\u672C"}),e(t.Text,{type:"primary",children:"\u8FD9\u662F\u4E00\u6761\u6587\u672C"}),e(t.Text,{type:"warning",children:"\u8FD9\u662F\u4E00\u6761\u6587\u672C"}),e(t.Text,{type:"secondary",children:"\u8FD9\u662F\u4E00\u6761\u6587\u672C"})]});const C={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text type="danger">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="primary">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="warning">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="secondary">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text type="danger">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="primary">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="warning">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
      <Typography.Text type="secondary">\u8FD9\u662F\u4E00\u6761\u6587\u672C</Typography.Text>
    </>
  );
};`}},key:"typography-demo-1",meta:{title:"\u7C7B\u578B"}};var y=()=>r(l,{children:[e(t.Text,{ellipsis:!0,children:"In the process of internal desktop applications development, many different design specs and implementations would be involved"}),e("br",{}),e(t.Text,{ellipsis:2,children:"In the process of internal desktop applications development, many different design specs and implementations would be involved"})]});const B={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text ellipsis>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>

      <br />
      <Typography.Text ellipsis={2}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Text ellipsis>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>

      <br />
      <Typography.Text ellipsis={2}>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved
      </Typography.Text>
    </>
  );
};`}},key:"typography-demo-2",meta:{title:"\u6587\u672C\u7701\u7565"}};var T=()=>r(l,{children:[e(t.Title,{level:1,children:"\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(t.Title,{level:2,children:"\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(t.Title,{level:3,children:"\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(t.Title,{level:4,children:"\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(t.Title,{level:5,children:"\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898"})]});const D={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Title level={1}>\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={2}>\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={3}>\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={4}>\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={5}>\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Title level={1}>\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={2}>\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={3}>\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={4}>\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={5}>\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
    </>
  );
};`}},key:"typography-demo-3",meta:{title:"\u7C7B\u578B"}};var s=()=>e(t.Link,{children:"\u6D4B\u8BD5Link"});const f={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return <Typography.Link>\u6D4B\u8BD5Link</Typography.Link>;
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return <Typography.Link>\u6D4B\u8BD5Link</Typography.Link>;
};`}},key:"typography-demo-4",meta:{title:"\u94FE\u63A5\u6837\u5F0F"}},A=function({previewer:d=()=>null,api:u=()=>null}){const n=d;return e("div",{children:r("div",{children:[e("h1",{id:"typography-\u6587\u672C","data-anchor":"typography-\u6587\u672C",children:"Typography \u6587\u672C"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6587\u672C\u7684\u57FA\u672C\u683C\u5F0F\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { Typography } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(n,p(i({},E),{children:e(a,{})})),e("h3",{id:"\u7C7B\u578B","data-anchor":"\u7C7B\u578B",children:"\u7C7B\u578B"}),r("p",{children:["\u8BBE\u7F6E ",e("code",{children:"type"})," \u5C5E\u6027\u540E\uFF0C\u6587\u672C\u4F1A\u5C55\u793A\u4E0D\u540C\u7684 ui \u72B6\u6001\u3002"]}),e(n,p(i({},C),{children:e(c,{})})),e("h3",{id:"\u6587\u672C\u7701\u7565","data-anchor":"\u6587\u672C\u7701\u7565",children:"\u6587\u672C\u7701\u7565"}),r("p",{children:["\u8BBE\u7F6E ",e("code",{children:"ellipsis"})," \u5C5E\u6027\u540E\uFF0C\u6587\u672C\u8D85\u51FA\u90E8\u5206\u5C06\u7701\u7565\u3002"]}),e(n,p(i({},B),{children:e(y,{})})),e("h3",{id:"\u6807\u9898","data-anchor":"\u6807\u9898",children:"\u6807\u9898"}),r("p",{children:[e("code",{children:"Typography.Title"})," \u4F7F\u7528\u6807\u9898\u7EC4\u4EF6"]}),e(n,p(i({},D),{children:e(T,{})})),e("h3",{id:"\u94FE\u63A5\u6837\u5F0F","data-anchor":"\u94FE\u63A5\u6837\u5F0F",children:"\u94FE\u63A5\u6837\u5F0F"}),r("p",{children:[e("code",{children:"Typography.Link"})," \u4F7F\u7528\u94FE\u63A5\u6837\u5F0F\u7EC4\u4EF6"]}),e(n,p(i({},f),{children:e(s,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"typographytext-typographylink-props","data-anchor":"typographytext-typographylink-props",children:"Typography.Text Typography.Link Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"type"}),r("td",{children:["\u6587\u672C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C",e("code",{children:"danger"})," ",e("code",{children:" secondary"})," ",e("code",{children:"light"})," ",e("code",{children:"primary"})," ",e("code",{children:"success"})," ",e("code",{children:"warning "})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"size"}),r("td",{children:["\u6587\u672C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C",e("code",{children:"xs"})," ",e("code",{children:"sm"})," ",e("code",{children:"md"})," ",e("code",{children:"lg"})," ",e("code",{children:"xl"})," ",e("code",{children:"xxl"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"md"})})]}),r("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u7981\u7528\u6587\u672C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"ellipsis"}),e("td",{children:"\u6587\u672C\u7701\u7565"}),r("td",{children:[e("em",{children:"boolean"})," ",e("em",{children:"number"})]}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"delete"}),e("td",{children:"\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"underline"}),e("td",{children:"\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u6587\u672C\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"strong"}),e("td",{children:"\u6587\u672C\u52A0\u7C97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"function"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"typographytitle-props","data-anchor":"typographytitle-props",children:"Typography.Title Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:r("tr",{children:[e("td",{children:"level"}),r("td",{children:["\u91CD\u8981\u7A0B\u5EA6\uFF0C\u53EF\u9009\u503C ",e("code",{children:"1"})," ",e("code",{children:"2"})," ",e("code",{children:"3"})," ",e("code",{children:"4"})," ",e("code",{children:"5"})]}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"4"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-typography-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-link-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-primary-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-danger-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-success-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-warning-color"}),e("td",{children:e("em",{children:"var(--rv-warning-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-secondary-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-typography-light-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},k=[{Component:a,key:"typography-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:c,key:"typography-demo-1",title:"\u7C7B\u578B"},{Component:y,key:"typography-demo-2",title:"\u6587\u672C\u7701\u7565"},{Component:T,key:"typography-demo-3",title:"\u7C7B\u578B"},{Component:s,key:"typography-demo-4",title:"\u94FE\u63A5\u6837\u5F0F"}],b={simulator:{compact:!1,style:{background:"#fff"}}},w=[{depth:1,text:"Typography \u6587\u672C",id:"typography-\u6587\u672C"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7C7B\u578B",id:"\u7C7B\u578B"},{depth:3,text:"\u6587\u672C\u7701\u7565",id:"\u6587\u672C\u7701\u7565"},{depth:3,text:"\u6807\u9898",id:"\u6807\u9898"},{depth:3,text:"\u94FE\u63A5\u6837\u5F0F",id:"\u94FE\u63A5\u6837\u5F0F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Typography.Text Typography.Link Props",id:"typographytext-typographylink-props"},{depth:3,text:"Typography.Title Props",id:"typographytitle-props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],P="/src/components/typography/README.md",M="Typography \u6587\u672C",I="1652064015000";var j=d=>d.children({MdContent:A,demos:k,frontmatter:b,slugs:w,filePath:P,title:M,updatedTime:I});export{A as MdContent,j as default,k as demos,P as filePath,b as frontmatter,w as slugs,M as title,I as updatedTime};
