var x=Object.defineProperty,C=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var o=(r,d,t)=>d in r?x(r,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[d]=t,l=(r,d)=>{for(var t in d||(d={}))f.call(d,t)&&o(r,t,d[t]);if(c)for(var t of c(d))g.call(d,t)&&o(r,t,d[t]);return r},a=(r,d)=>C(r,A(d));import{a as u,j as e}from"./main.531c777e.js";import{F as n,dc as i}from"./WaterMark.6f52b203.js";var h=()=>u(n,{children:[e(n.Item,{span:8,children:e(i,{})}),e(n.Item,{span:8,children:e(i,{type:"spinner"})}),e(n.Item,{span:8,children:e(i,{type:"ball"})})]});const B={code:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="ball" />
      </Flex.Item>
    </Flex>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="ball" />
      </Flex.Item>
    </Flex>
  );
};`}},key:"loading-demo",meta:{title:"\u52A0\u8F7D\u7C7B\u578B",card:!0}};var p=()=>u(n,{children:[e(n.Item,{span:8,children:e(i,{color:"#3f45ff"})}),e(n.Item,{span:8,children:e(i,{type:"spinner",color:"#3f45ff"})})]});const v={code:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading color="#3f45ff" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" color="#3f45ff" />
      </Flex.Item>
    </Flex>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading color="#3f45ff" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" color="#3f45ff" />
      </Flex.Item>
    </Flex>
  );
};`}},key:"loading-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0}};var F=()=>u(n,{children:[e(n.Item,{span:8,children:e(i,{size:"24"})}),e(n.Item,{span:8,children:e(i,{type:"spinner",size:"24px"})})]});const D={code:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading size="24" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" size="24px" />
      </Flex.Item>
    </Flex>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Flex, Loading } from 'react-vant';

export default () => {
  return (
    <Flex>
      <Flex.Item span={8}>
        <Loading size="24" />
      </Flex.Item>
      <Flex.Item span={8}>
        <Loading type="spinner" size="24px" />
      </Flex.Item>
    </Flex>
  );
};`}},key:"loading-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0}};var m=()=>e(i,{size:"24px",children:"\u52A0\u8F7D\u4E2D..."});const y={code:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return <Loading size="24px">\u52A0\u8F7D\u4E2D...</Loading>;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return <Loading size="24px">\u52A0\u8F7D\u4E2D...</Loading>;
};`}},key:"loading-demo-3",meta:{title:"\u52A0\u8F7D\u6587\u6848",card:!0}};var s=()=>e(i,{style:{display:"inline-flex"},size:"24px",vertical:!0,children:"\u52A0\u8F7D\u4E2D..."});const L={code:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} size="24px" vertical>
      \u52A0\u8F7D\u4E2D...
    </Loading>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} size="24px" vertical>
      \u52A0\u8F7D\u4E2D...
    </Loading>
  );
};`}},key:"loading-demo-4",meta:{title:"\u5782\u76F4\u6392\u5217",card:!0}};var E=()=>e(i,{style:{display:"inline-flex"},vertical:!0,textColor:"#3f45ff",children:"\u52A0\u8F7D\u4E2D..."});const I={code:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} vertical textColor="#3f45ff">
      \u52A0\u8F7D\u4E2D...
    </Loading>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Loading } from 'react-vant';

export default () => {
  return (
    <Loading style={{ display: 'inline-flex' }} vertical textColor="#3f45ff">
      \u52A0\u8F7D\u4E2D...
    </Loading>
  );
};`}},key:"loading-demo-5",meta:{title:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272",card:!0}},P=function({previewer:r=()=>null,api:d=()=>null}){const t=r;return e("div",{children:u("div",{children:[e("h1",{id:"loading-\u52A0\u8F7D","data-anchor":"loading-\u52A0\u8F7D",children:"Loading \u52A0\u8F7D"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u52A0\u8F7D\u56FE\u6807\uFF0C\u7528\u4E8E\u8868\u793A\u52A0\u8F7D\u4E2D\u7684\u8FC7\u6E21\u72B6\u6001\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Loading } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u52A0\u8F7D\u7C7B\u578B","data-anchor":"\u52A0\u8F7D\u7C7B\u578B",children:"\u52A0\u8F7D\u7C7B\u578B"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"type"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u52A0\u8F7D\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A ",e("code",{children:"circular"}),"\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"spinner"})," \u548C ",e("code",{children:"ball"}),"\u3002"]}),e(t,a(l({},B),{children:e(h,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u56FE\u6807\u7684\u989C\u8272\u3002"]}),e(t,a(l({},v),{children:e(p,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5927\u5C0F","data-anchor":"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u56FE\u6807\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"}),"\u3002"]}),e(t,a(l({},D),{children:e(F,{})})),e("h3",{id:"\u52A0\u8F7D\u6587\u6848","data-anchor":"\u52A0\u8F7D\u6587\u6848",children:"\u52A0\u8F7D\u6587\u6848"}),e("p",{children:"\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u5728\u56FE\u6807\u7684\u53F3\u4FA7\u63D2\u5165\u52A0\u8F7D\u6587\u6848\u3002"}),e(t,a(l({},y),{children:e(m,{})})),e("h3",{id:"\u5782\u76F4\u6392\u5217","data-anchor":"\u5782\u76F4\u6392\u5217",children:"\u5782\u76F4\u6392\u5217"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"vertical"})," \u5C5E\u6027\u540E\uFF0C\u56FE\u6807\u548C\u6587\u6848\u4F1A\u5782\u76F4\u6392\u5217\u3002"]}),e(t,a(l({},L),{children:e(s,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"color"})," \u548C ",e("code",{children:"f44336"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272\u3002"]}),e(t,a(l({},I),{children:e(E,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#c9c9c9"})})]}),u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"spinner"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"circular"})})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u52A0\u8F7D\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"30px"})})]}),u("tr",{children:[e("td",{children:"textSize"}),u("td",{children:["\u6587\u5B57\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"14px"})})]}),u("tr",{children:[e("td",{children:"textColor"}),e("td",{children:"\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#c9c9c9"})})]}),u("tr",{children:[e("td",{children:"vertical"}),e("td",{children:"\u662F\u5426\u5782\u76F4\u6392\u5217\u56FE\u6807\u548C\u6587\u5B57\u5185\u5BB9"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(t,{code:"import type { LoadingType } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-loading-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-loading-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-loading-spinner-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-loading-spinner-size"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-loading-spinner-animation-duration"}),e("td",{children:e("em",{children:"0.8s"})}),e("td",{children:"-"})]})]})]})]})})},M=[{Component:h,key:"loading-demo",title:"\u52A0\u8F7D\u7C7B\u578B",card:!0},{Component:p,key:"loading-demo-1",title:"\u81EA\u5B9A\u4E49\u989C\u8272",card:!0},{Component:F,key:"loading-demo-2",title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",card:!0},{Component:m,key:"loading-demo-3",title:"\u52A0\u8F7D\u6587\u6848",card:!0},{Component:s,key:"loading-demo-4",title:"\u5782\u76F4\u6392\u5217",card:!0},{Component:E,key:"loading-demo-5",title:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272",card:!0}],z={simulator:{compact:!1,style:{background:"#fff"}}},j=[{depth:1,text:"Loading \u52A0\u8F7D",id:"loading-\u52A0\u8F7D"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u52A0\u8F7D\u7C7B\u578B",id:"\u52A0\u8F7D\u7C7B\u578B"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u989C\u8272"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5927\u5C0F",id:"\u81EA\u5B9A\u4E49\u5927\u5C0F"},{depth:3,text:"\u52A0\u8F7D\u6587\u6848",id:"\u52A0\u8F7D\u6587\u6848"},{depth:3,text:"\u5782\u76F4\u6392\u5217",id:"\u5782\u76F4\u6392\u5217"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u6587\u672C\u989C\u8272"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],R="/src/components/loading/README.md",k="Loading \u52A0\u8F7D",b="1658500653000";var S=r=>r.children({MdContent:P,demos:M,frontmatter:z,slugs:j,filePath:R,title:k,updatedTime:b});export{P as MdContent,S as default,M as demos,R as filePath,z as frontmatter,j as slugs,k as title,b as updatedTime};
