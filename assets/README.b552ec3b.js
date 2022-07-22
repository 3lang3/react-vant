var s=Object.defineProperty,m=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(t,l,r)=>l in t?s(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r,n=(t,l)=>{for(var r in l||(l={}))g.call(l,r)&&o(t,r,l[r]);if(h)for(var r of h(l))v.call(l,r)&&o(t,r,l[r]);return t},c=(t,l)=>m(t,B(l));import{a as u,F as a,j as e,R as y}from"./main.531c777e.js";import{C as d,e5 as i}from"./WaterMark.6f52b203.js";var C=()=>u(a,{children:[e(d,{title:"primary \u7C7B\u578B",children:e(i,{type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"success \u7C7B\u578B",children:e(i,{type:"success",children:"\u6807\u7B7E"})}),e(d,{title:"danger  \u7C7B\u578B",children:e(i,{type:"danger",children:"\u6807\u7B7E"})}),e(d,{title:"warning  \u7C7B\u578B",children:e(i,{type:"warning",children:"\u6807\u7B7E"})})]});const T={code:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="primary \u7C7B\u578B">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="success \u7C7B\u578B">
        <Tag type="success">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="danger  \u7C7B\u578B">
        <Tag type="danger">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="warning  \u7C7B\u578B">
        <Tag type="warning">\u6807\u7B7E</Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="primary \u7C7B\u578B">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="success \u7C7B\u578B">
        <Tag type="success">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="danger  \u7C7B\u578B">
        <Tag type="danger">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="warning  \u7C7B\u578B">
        <Tag type="warning">\u6807\u7B7E</Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var p=()=>{const[t,l]=y.useState(!0);return u(a,{children:[e(d,{title:"\u7A7A\u5FC3\u6837\u5F0F",children:e(i,{plain:!0,type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"\u5706\u89D2\u6837\u5F0F",children:e(i,{round:!0,type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"\u6807\u8BB0\u6837\u5F0F",children:e(i,{mark:!0,type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"\u53EF\u5173\u95ED\u6807\u7B7E",children:e(i,{show:t,plain:!0,closeable:!0,size:"medium",type:"primary",onClose:()=>l(!1),children:"\u6807\u7B7E"})})]})};const A={code:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Cell title="\u7A7A\u5FC3\u6837\u5F0F">
        <Tag plain type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5706\u89D2\u6837\u5F0F">
        <Tag round type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u6807\u8BB0\u6837\u5F0F">
        <Tag mark type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u53EF\u5173\u95ED\u6807\u7B7E">
        <Tag
          show={show}
          plain
          closeable
          size="medium"
          type="primary"
          onClose={() => setShow(false)}
        >
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Cell title="\u7A7A\u5FC3\u6837\u5F0F">
        <Tag plain type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5706\u89D2\u6837\u5F0F">
        <Tag round type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u6807\u8BB0\u6837\u5F0F">
        <Tag mark type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u53EF\u5173\u95ED\u6807\u7B7E">
        <Tag
          show={show}
          plain
          closeable
          size="medium"
          type="primary"
          onClose={() => setShow(false)}
        >
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-1",meta:{title:"\u6837\u5F0F\u98CE\u683C",card:!0}};var E=()=>u(a,{children:[e(d,{title:"\u5C0F\u53F7\u6807\u7B7E",children:e(i,{type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"\u4E2D\u53F7\u6807\u7B7E",children:e(i,{size:"medium",type:"primary",children:"\u6807\u7B7E"})}),e(d,{title:"\u5927\u53F7\u6807\u7B7E",children:e(i,{size:"large",type:"primary",children:"\u6807\u7B7E"})})]});const f={code:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5C0F\u53F7\u6807\u7B7E">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u4E2D\u53F7\u6807\u7B7E">
        <Tag size="medium" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5927\u53F7\u6807\u7B7E">
        <Tag size="large" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5C0F\u53F7\u6807\u7B7E">
        <Tag type="primary">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u4E2D\u53F7\u6807\u7B7E">
        <Tag size="medium" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u5927\u53F7\u6807\u7B7E">
        <Tag size="large" type="primary">
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-2",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var F=()=>u(a,{children:[e(d,{title:"\u80CC\u666F\u989C\u8272",children:e(i,{color:"#7232dd",children:"\u6807\u7B7E"})}),e(d,{title:"\u6587\u5B57\u989C\u8272",children:e(i,{color:"#ffe1e1",textColor:"#ad0000",children:"\u6807\u7B7E"})}),e(d,{title:"\u7A7A\u5FC3\u989C\u8272",children:e(i,{color:"#7232dd",plain:!0,children:"\u6807\u7B7E"})})]});const x={code:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u80CC\u666F\u989C\u8272">
        <Tag color="#7232dd">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u6587\u5B57\u989C\u8272">
        <Tag color="#ffe1e1" textColor="#ad0000">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u7A7A\u5FC3\u989C\u8272">
        <Tag color="#7232dd" plain>
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Cell, Tag } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u80CC\u666F\u989C\u8272">
        <Tag color="#7232dd">\u6807\u7B7E</Tag>
      </Cell>
      <Cell title="\u6587\u5B57\u989C\u8272">
        <Tag color="#ffe1e1" textColor="#ad0000">
          \u6807\u7B7E
        </Tag>
      </Cell>
      <Cell title="\u7A7A\u5FC3\u989C\u8272">
        <Tag color="#7232dd" plain>
          \u6807\u7B7E
        </Tag>
      </Cell>
    </>
  );
};`}},key:"tag-demo-3",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}},D=function({previewer:t=()=>null,api:l=()=>null}){const r=t;return e("div",{children:u("div",{children:[e("h1",{id:"tag-\u6807\u7B7E","data-anchor":"tag-\u6807\u7B7E",children:"Tag \u6807\u7B7E"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Tag } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"type"})," \u5C5E\u6027\u63A7\u5236\u6807\u7B7E\u989C\u8272\u3002"]}),e(r,c(n({},T),{children:e(C,{})})),e("h3",{id:"\u6837\u5F0F\u98CE\u683C","data-anchor":"\u6837\u5F0F\u98CE\u683C",children:"\u6837\u5F0F\u98CE\u683C"}),u("ul",{children:[u("li",{children:["\u8BBE\u7F6E ",e("code",{children:"plain"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u7A7A\u5FC3\u6837\u5F0F\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"round"})," \u8BBE\u7F6E\u4E3A\u5706\u89D2\u6837\u5F0F\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"mark"})," \u8BBE\u7F6E\u4E3A\u6807\u8BB0\u6837\u5F0F(\u534A\u5706\u89D2)\u3002"]}),u("li",{children:["\u6DFB\u52A0 ",e("code",{children:"closeable"})," \u5C5E\u6027\u8868\u793A\u6807\u7B7E\u662F\u53EF\u5173\u95ED\u7684\uFF0C\u5173\u95ED\u6807\u7B7E\u65F6\u4F1A\u89E6\u53D1 ",e("code",{children:"onClose"})," \u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u6267\u884C\u9690\u85CF\u6807\u7B7E\u7684\u903B\u8F91\u3002"]})]}),e(r,c(n({},A),{children:e(p,{})})),e("h3",{id:"\u6807\u7B7E\u5927\u5C0F","data-anchor":"\u6807\u7B7E\u5927\u5C0F",children:"\u6807\u7B7E\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u8C03\u6574\u6807\u7B7E\u5927\u5C0F\u3002"]}),e(r,c(n({},f),{children:e(E,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u548C ",e("code",{children:"textColor"})," \u5C5E\u6027\u8BBE\u7F6E\u6807\u7B7E\u989C\u8272\u3002"]}),e(r,c(n({},x),{children:e(F,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"primary"})," ",e("code",{children:"success"})," ",e("code",{children:"danger"})," ",e("code",{children:"warning"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"default"})})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u5927\u5C0F, \u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})," ",e("code",{children:"medium"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u6807\u7B7E\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"show"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u6807\u7B7E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"plain"}),e("td",{children:"\u662F\u5426\u4E3A\u7A7A\u5FC3\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u4E3A\u5706\u89D2\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"mark"}),e("td",{children:"\u662F\u5426\u4E3A\u6807\u8BB0\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"textColor"}),u("td",{children:["\u6587\u672C\u989C\u8272\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E ",e("code",{children:"color"})," \u5C5E\u6027"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),u("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u4E3A\u53EF\u5173\u95ED\u6807\u7B7E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-tag-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-border-radius"}),e("td",{children:e("em",{children:"2px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-medium-padding"}),e("td",{children:e("em",{children:"2px 6px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-large-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-base) var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-large-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-large-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-round-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-max)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-danger-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-primary-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-success-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-warning-color"}),e("td",{children:e("em",{children:"var(--rv-warning-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-default-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tag-plain-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},w=[{Component:C,key:"tag-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:p,key:"tag-demo-1",title:"\u6837\u5F0F\u98CE\u683C",card:!0},{Component:E,key:"tag-demo-2",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:F,key:"tag-demo-3",title:"\u57FA\u7840\u7528\u6CD5",card:!0}],b=void 0,P=[{depth:1,text:"Tag \u6807\u7B7E",id:"tag-\u6807\u7B7E"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6837\u5F0F\u98CE\u683C",id:"\u6837\u5F0F\u98CE\u683C"},{depth:3,text:"\u6807\u7B7E\u5927\u5C0F",id:"\u6807\u7B7E\u5927\u5C0F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u989C\u8272"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],M="/src/components/tag/README.md",k="Tag \u6807\u7B7E",z="1658500653000";var N=t=>t.children({MdContent:D,demos:w,frontmatter:b,slugs:P,filePath:M,title:k,updatedTime:z});export{D as MdContent,N as default,w as demos,M as filePath,b as frontmatter,P as slugs,k as title,z as updatedTime};
