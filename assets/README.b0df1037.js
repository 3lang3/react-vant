var m=Object.defineProperty,F=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var s=(r,d,u)=>d in r?m(r,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[d]=u,i=(r,d)=>{for(var u in d||(d={}))S.call(d,u)&&s(r,u,d[u]);if(h)for(var u of h(d))C.call(d,u)&&s(r,u,d[u]);return r},l=(r,d)=>F(r,A(d));import{r as o,a as t,F as p,j as e}from"./main.531c777e.js";import{e0 as n,B as a}from"./WaterMark.6f52b203.js";var E=()=>{const[r,d]=o.exports.useState(1),u=()=>d(c=>c>=3?0:c+1);return t(p,{children:[t(n,{active:r,children:[e(n.Item,{children:"\u4E70\u5BB6\u4E0B\u5355"}),e(n.Item,{children:"\u5546\u5BB6\u63A5\u5355"}),e(n.Item,{children:"\u4E70\u5BB6\u63D0\u8D27"}),e(n.Item,{children:"\u4EA4\u6613\u5B8C\u6210"})]}),e("div",{style:{padding:20},children:e(a,{round:!0,block:!0,onClick:u,children:"\u4E0B\u4E00\u6B65"})})]})};const D={code:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active}>
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active}>
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`}},key:"steps-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var B=()=>{const[r,d]=o.exports.useState(1),u=()=>d(c=>c>=3?0:c+1);return t(p,{children:[t(n,{active:r,activeIcon:e("div",{children:"!"}),activeColor:"#3f45ff",children:[e(n.Item,{children:"\u4E70\u5BB6\u4E0B\u5355"}),e(n.Item,{children:"\u5546\u5BB6\u63A5\u5355"}),e(n.Item,{children:"\u4E70\u5BB6\u63D0\u8D27"}),e(n.Item,{children:"\u4EA4\u6613\u5B8C\u6210"})]}),e("div",{style:{padding:20},children:e(a,{round:!0,block:!0,onClick:u,children:"\u4E0B\u4E00\u6B65"})})]})};const I={code:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Steps, Button } from 'react-vant';

export default () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <>
      <Steps active={active} activeIcon={<div>!</div>} activeColor="#3f45ff">
        <Steps.Item>\u4E70\u5BB6\u4E0B\u5355</Steps.Item>
        <Steps.Item>\u5546\u5BB6\u63A5\u5355</Steps.Item>
        <Steps.Item>\u4E70\u5BB6\u63D0\u8D27</Steps.Item>
        <Steps.Item>\u4EA4\u6613\u5B8C\u6210</Steps.Item>
      </Steps>
      <div style={{ padding: 20 }}>
        <Button round block onClick={nextStep}>
          \u4E0B\u4E00\u6B65
        </Button>
      </div>
    </>
  );
};`}},key:"steps-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}};var v=()=>t(n,{direction:"vertical",active:0,children:[t(n.Item,{children:[e("h3",{children:"\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011"}),e("p",{children:"2016-07-12 12:40"})]}),t(n.Item,{children:[e("h3",{children:"\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012"}),e("p",{children:"2016-07-11 10:00"})]}),t(n.Item,{children:[e("h3",{children:"\u5FEB\u4EF6\u5DF2\u53D1\u8D27"}),e("p",{children:"2016-07-10 09:30"})]})]});const x={code:`import React from 'react';
import { Steps } from 'react-vant';

export default () => {
  return (
    <Steps direction="vertical" active={0}>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011</h3>
        <p>2016-07-12 12:40</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012</h3>
        <p>2016-07-11 10:00</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u5FEB\u4EF6\u5DF2\u53D1\u8D27</h3>
        <p>2016-07-10 09:30</p>
      </Steps.Item>
    </Steps>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Steps } from 'react-vant';

export default () => {
  return (
    <Steps direction="vertical" active={0}>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60011</h3>
        <p>2016-07-12 12:40</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u3010\u57CE\u5E02\u3011\u7269\u6D41\u72B6\u60012</h3>
        <p>2016-07-11 10:00</p>
      </Steps.Item>
      <Steps.Item>
        <h3>\u5FEB\u4EF6\u5DF2\u53D1\u8D27</h3>
        <p>2016-07-10 09:30</p>
      </Steps.Item>
    </Steps>
  );
};`}},key:"steps-demo-2",meta:{title:"\u7AD6\u5411\u6B65\u9AA4\u6761"}},f=function({previewer:r=()=>null,api:d=()=>null}){const u=r;return e("div",{children:t("div",{children:[e("h1",{id:"steps-\u6B65\u9AA4\u6761","data-anchor":"steps-\u6B65\u9AA4\u6761",children:"Steps \u6B65\u9AA4\u6761"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u64CD\u4F5C\u6D41\u7A0B\u7684\u5404\u4E2A\u73AF\u8282\uFF0C\u8BA9\u7528\u6237\u4E86\u89E3\u5F53\u524D\u7684\u64CD\u4F5C\u5728\u6574\u4F53\u6D41\u7A0B\u4E2D\u7684\u4F4D\u7F6E\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(u,{code:"import { Step, Steps } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:[e("code",{children:"active"})," \u5C5E\u6027\u8868\u793A\u5F53\u524D\u6B65\u9AA4\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u8D77\u8BA1\u3002"]}),e(u,l(i({},D),{children:e(E,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u6837\u5F0F",children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),t("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"activeIcon"})," \u548C ",e("code",{children:"activeColor"})," \u5C5E\u6027\u8BBE\u7F6E\u6FC0\u6D3B\u72B6\u6001\u4E0B\u7684\u56FE\u6807\u548C\u989C\u8272\u3002"]}),e(u,l(i({},I),{children:e(B,{})})),e("h3",{id:"\u7AD6\u5411\u6B65\u9AA4\u6761","data-anchor":"\u7AD6\u5411\u6B65\u9AA4\u6761",children:"\u7AD6\u5411\u6B65\u9AA4\u6761"}),t("p",{children:["\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"direction"})," \u5C5E\u6027\u6765\u6539\u53D8\u6B65\u9AA4\u6761\u7684\u663E\u793A\u65B9\u5411\u3002"]}),e(u,l(i({},x),{children:e(v,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"steps-props","data-anchor":"steps-props",children:"Steps Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"active"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"direction"}),t("td",{children:["\u6B65\u9AA4\u6761\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"vertical"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"horizontal"})})]}),t("tr",{children:[e("td",{children:"activeIcon"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Checked />"})})]}),t("tr",{children:[e("td",{children:"inactiveIcon"}),e("td",{children:"\u975E\u5F53\u524D\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"finishIcon"}),t("td",{children:["\u5DF2\u5B8C\u6210\u6B65\u9AA4\u5BF9\u5E94\u7684\u5E95\u90E8\u56FE\u6807\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E ",e("code",{children:"inactiveIcon"})]}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u5F53\u524D\u6B65\u9AA4\u548C\u5DF2\u5B8C\u6210\u6B65\u9AA4\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#07c160"})})]}),t("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u672A\u6FC0\u6D3B\u6B65\u9AA4\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#969799"})})]})]})]}),e("h3",{id:"stepsitem-props","data-anchor":"stepsitem-props",children:"Steps.Item Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"activeIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u6FC0\u6D3B\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"inactiveIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u975E\u6FC0\u6D3B\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"finishIcon"}),e("td",{children:"\u652F\u6301\u81EA\u5B9A\u4E49\u5DF2\u5B8C\u6210\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"steps-events","data-anchor":"steps-events",children:"Steps Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onClickStep"}),e("td",{children:"\u70B9\u51FB\u6B65\u9AA4\u7684\u6807\u9898\u6216\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-step-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-active-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-process-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-line-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-finish-line-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-finish-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-icon-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-circle-size"}),e("td",{children:e("em",{children:"5px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-circle-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-step-horizontal-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-steps-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},y=[{Component:E,key:"steps-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:B,key:"steps-demo-1",title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{Component:v,key:"steps-demo-2",title:"\u7AD6\u5411\u6B65\u9AA4\u6761"}],g=void 0,k=[{depth:1,text:"Steps \u6B65\u9AA4\u6761",id:"steps-\u6B65\u9AA4\u6761"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6837\u5F0F",id:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{depth:3,text:"\u7AD6\u5411\u6B65\u9AA4\u6761",id:"\u7AD6\u5411\u6B65\u9AA4\u6761"},{depth:2,text:"API",id:"api"},{depth:3,text:"Steps Props",id:"steps-props"},{depth:3,text:"Steps.Item Props",id:"stepsitem-props"},{depth:3,text:"Steps Events",id:"steps-events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],b="/src/components/steps/README.md",P="Steps \u6B65\u9AA4\u6761",R="1658500653000";var z=r=>r.children({MdContent:f,demos:y,frontmatter:g,slugs:k,filePath:b,title:P,updatedTime:R});export{f as MdContent,z as default,y as demos,b as filePath,g as frontmatter,k as slugs,P as title,R as updatedTime};
