var v=Object.defineProperty,C=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(u,d,t)=>d in u?v(u,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[d]=t,n=(u,d)=>{for(var t in d||(d={}))x.call(d,t)&&l(u,t,d[t]);if(a)for(var t of a(d))f.call(d,t)&&l(u,t,d[t]);return u},i=(u,d)=>C(u,B(d));import{j as e,a as r,r as A,F as P}from"./main.531c777e.js";import{e3 as c,S as D,F as y,B as h}from"./WaterMark.6f52b203.js";var p=()=>e(c,{percentage:"50"});const k={code:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress percentage="50" />;
};`}},key:"progress-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var g=()=>e(c,{strokeWidth:8,percentage:"50"});const M={code:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress strokeWidth={8} percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress strokeWidth={8} percentage="50" />;
};`}},key:"progress-demo-1",meta:{title:"\u7EBF\u6761\u7C97\u7EC6"}};var m=()=>e(c,{inactive:!0,percentage:"50"});const b={code:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress inactive percentage="50" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Progress } from 'react-vant';

export default () => {
  return <Progress inactive percentage="50" />;
};`}},key:"progress-demo-2",meta:{title:"\u7F6E\u7070"}};var F=()=>r(D,{block:!0,gap:[0,20],direction:"vertical",children:[e(c,{color:"#f2826a",percentage:"25",pivotText:"\u6A59\u8272"}),e(c,{color:"#ee0a24",percentage:"50",pivotText:"\u7EA2\u8272"}),e(c,{color:"linear-gradient(to right, #be99ff, #7232dd)",percentage:"75",pivotColor:"#7232dd",pivotText:e("div",{children:"\u7D2B\u8272"})})]});const j={code:`import React from 'react';
import { Space, Progress } from 'react-vant';

export default () => {
  return (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress color="#f2826a" percentage="25" pivotText="\u6A59\u8272" />
      <Progress color="#ee0a24" percentage="50" pivotText="\u7EA2\u8272" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>\u7D2B\u8272</div>}
      />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Progress } from 'react-vant';

export default () => {
  return (
    <Space block gap={[0, 20]} direction="vertical">
      <Progress color="#f2826a" percentage="25" pivotText="\u6A59\u8272" />
      <Progress color="#ee0a24" percentage="50" pivotText="\u7EA2\u8272" />
      <Progress
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
        pivotColor="#7232dd"
        pivotText={<div>\u7D2B\u8272</div>}
      />
    </Space>
  );
};`}},key:"progress-demo-3",meta:{title:"\u6837\u5F0F\u5B9A\u5236"}},s=u=>Math.min(Math.max(u,0),100);var E=()=>{const[u,d]=A.exports.useState(50);return r(P,{children:[e(c,{percentage:u}),r(y,{justify:"center",style:{marginTop:20},children:[e(h,{style:{marginRight:10},type:"primary",size:"small",onClick:()=>{d(o=>s(o+20))},children:"\u589E\u52A0"}),e(h,{type:"danger",size:"small",onClick:()=>{d(o=>s(o-20))},children:"\u51CF\u5C11"})]})]})};const R={code:`import React, { useState } from 'react';
import { Flex, Button, Progress } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <>
      <Progress percentage={percentage} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
          \u589E\u52A0
        </Button>
        <Button type="danger" size="small" onClick={reduce}>
          \u51CF\u5C11
        </Button>
      </Flex>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Flex, Button, Progress } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [percentage, setPercentage] = useState(50);

  const add = () => {
    setPercentage((value) => format(value + 20));
  };

  const reduce = () => {
    setPercentage((value) => format(value - 20));
  };
  return (
    <>
      <Progress percentage={percentage} />
      <Flex justify="center" style={{ marginTop: 20 }}>
        <Button style={{ marginRight: 10 }} type="primary" size="small" onClick={add}>
          \u589E\u52A0
        </Button>
        <Button type="danger" size="small" onClick={reduce}>
          \u51CF\u5C11
        </Button>
      </Flex>
    </>
  );
};`}},key:"progress-demo-4",meta:{title:"\u8FC7\u6E21\u6548\u679C"}},S=function({previewer:u=()=>null,api:d=()=>null}){const t=u;return e("div",{children:r("div",{children:[e("h1",{id:"progress-\u8FDB\u5EA6\u6761","data-anchor":"progress-\u8FDB\u5EA6\u6761",children:"Progress \u8FDB\u5EA6\u6761"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Progress } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),r("p",{children:["\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4E3A\u84DD\u8272\uFF0C\u4F7F\u7528 ",e("code",{children:"percentage"})," \u5C5E\u6027\u6765\u8BBE\u7F6E\u5F53\u524D\u8FDB\u5EA6\u3002"]}),e(t,i(n({},k),{children:e(p,{})})),e("h3",{id:"\u7EBF\u6761\u7C97\u7EC6","data-anchor":"\u7EBF\u6761\u7C97\u7EC6",children:"\u7EBF\u6761\u7C97\u7EC6"}),r("p",{children:["\u901A\u8FC7 ",e("code",{children:"strokeWidth"})," \u53EF\u4EE5\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u7C97\u7EC6\u3002"]}),e(t,i(n({},M),{children:e(g,{})})),e("h3",{id:"\u7F6E\u7070","data-anchor":"\u7F6E\u7070",children:"\u7F6E\u7070"}),r("p",{children:["\u8BBE\u7F6E ",e("code",{children:"inactive"})," \u5C5E\u6027\u540E\u8FDB\u5EA6\u6761\u5C06\u7F6E\u7070\u3002"]}),e(t,i(n({},b),{children:e(m,{})})),e("h3",{id:"\u6837\u5F0F\u5B9A\u5236","data-anchor":"\u6837\u5F0F\u5B9A\u5236",children:"\u6837\u5F0F\u5B9A\u5236"}),r("p",{children:["\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"pivotText"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C",e("code",{children:"color"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u989C\u8272\u3002"]}),e(t,i(n({},j),{children:e(F,{})})),e("h3",{id:"\u8FC7\u6E21\u6548\u679C","data-anchor":"\u8FC7\u6E21\u6548\u679C",children:"\u8FC7\u6E21\u6548\u679C"}),e(t,i(n({},R),{children:e(E,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"percentage"}),e("td",{children:"\u8FDB\u5EA6\u767E\u5206\u6BD4"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),r("tr",{children:[e("td",{children:"strokeWidth"}),r("td",{children:["\u8FDB\u5EA6\u6761\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"4px"})})]}),r("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u8FDB\u5EA6\u6761\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),r("tr",{children:[e("td",{children:"trackColor"}),e("td",{children:"\u8F68\u9053\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#e5e5e5"})})]}),r("tr",{children:[e("td",{children:"pivotText"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"\u767E\u5206\u6BD4"})]}),r("tr",{children:[e("td",{children:"pivotColor"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"\u540C\u8FDB\u5EA6\u6761\u989C\u8272"})]}),r("tr",{children:[e("td",{children:"textColor"}),e("td",{children:"\u8FDB\u5EA6\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),r("tr",{children:[e("td",{children:"inactive"}),e("td",{children:"\u662F\u5426\u7F6E\u7070"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"showPivot"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u6587\u5B57"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-progress-height"}),e("td",{children:e("em",{children:"4px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-3)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-padding"}),e("td",{children:e("em",{children:"0 5px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-xs)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-line-height"}),e("td",{children:e("em",{children:"1.6"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-progress-pivot-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]})]})]})]})})},T=[{Component:p,key:"progress-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:g,key:"progress-demo-1",title:"\u7EBF\u6761\u7C97\u7EC6"},{Component:m,key:"progress-demo-2",title:"\u7F6E\u7070"},{Component:F,key:"progress-demo-3",title:"\u6837\u5F0F\u5B9A\u5236"},{Component:E,key:"progress-demo-4",title:"\u8FC7\u6E21\u6548\u679C"}],N={simulator:{compact:!1,style:{background:"#fff"}}},w=[{depth:1,text:"Progress \u8FDB\u5EA6\u6761",id:"progress-\u8FDB\u5EA6\u6761"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7EBF\u6761\u7C97\u7EC6",id:"\u7EBF\u6761\u7C97\u7EC6"},{depth:3,text:"\u7F6E\u7070",id:"\u7F6E\u7070"},{depth:3,text:"\u6837\u5F0F\u5B9A\u5236",id:"\u6837\u5F0F\u5B9A\u5236"},{depth:3,text:"\u8FC7\u6E21\u6548\u679C",id:"\u8FC7\u6E21\u6548\u679C"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],z="/src/components/progress/README.md",I="Progress \u8FDB\u5EA6\u6761",L="1658500653000";var H=u=>u.children({MdContent:S,demos:T,frontmatter:N,slugs:w,filePath:z,title:I,updatedTime:L});export{S as MdContent,H as default,T as demos,z as filePath,N as frontmatter,w as slugs,I as title,L as updatedTime};
