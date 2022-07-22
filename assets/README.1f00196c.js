var B=Object.defineProperty,A=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(r,c,u)=>c in r?B(r,c,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[c]=u,i=(r,c)=>{for(var u in c||(c={}))x.call(c,u)&&h(r,u,c[u]);if(o)for(var u of o(c))D.call(c,u)&&h(r,u,c[u]);return r},n=(r,c)=>A(r,f(c));import{j as e,r as v,a as t,F as y}from"./main.531c777e.js";import{dT as d,S as s,F as g,B as a}from"./WaterMark.6f52b203.js";var p=()=>e(d,{rate:70,speed:100,text:"70%"});const P={code:`import React from 'react';
import { Circle } from 'react-vant';

export default () => {
  return <Circle rate={70} speed={100} text="70%" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Circle } from 'react-vant';

export default () => {
  return <Circle rate={70} speed={100} text="70%" />;
};`}},key:"circle-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},F=r=>Math.min(Math.max(r,0),100);var E=()=>{const[r,c]=v.exports.useState(70),u=()=>{c(l=>F(l+20))},m=()=>{c(l=>F(l-20))};return t(y,{children:[t(s,{wrap:!0,children:[e(d,{strokeWidth:60,rate:r,text:"\u5BBD\u5EA6\u5B9A\u5236"}),e(d,{color:"#ee0a24",layerColor:"#ebedf0",rate:r,text:"\u989C\u8272\u5B9A\u5236"}),e(d,{color:{"0%":"#3fecff","100%":"#6149f6"},rate:r,text:"\u6E10\u53D8\u8272"}),e(d,{color:"#07c160",clockwise:!1,rate:r,text:"\u9006\u65F6\u9488",style:{marginTop:15}}),e(d,{color:"#7232dd",clockwise:!1,size:120,rate:r,text:"\u5927\u5C0F\u5B9A\u5236",style:{marginTop:15}})]}),e(g,{style:{marginTop:15},align:"center",justify:"center",children:t(a.Group,{children:[e(a,{onClick:u,type:"primary",children:"\u589E\u52A0"}),e(a,{onClick:m,type:"danger",children:"\u51CF\u5C11"})]})})]})};const k={code:`import React, { useState } from 'react';
import { Circle, Flex, Button, Space } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Space wrap>
        <Circle strokeWidth={60} rate={rate} text="\u5BBD\u5EA6\u5B9A\u5236" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="\u989C\u8272\u5B9A\u5236" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="\u6E10\u53D8\u8272"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="\u9006\u65F6\u9488"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="\u5927\u5C0F\u5B9A\u5236"
          style={{ marginTop: 15 }}
        />
      </Space>

      <Flex style={{ marginTop: 15 }} align="center" justify="center">
        <Button.Group>
          <Button onClick={add} type="primary">
            \u589E\u52A0
          </Button>
          <Button onClick={reduce} type="danger">
            \u51CF\u5C11
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Circle, Flex, Button, Space } from 'react-vant';

const format = (rate) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Space wrap>
        <Circle strokeWidth={60} rate={rate} text="\u5BBD\u5EA6\u5B9A\u5236" />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text="\u989C\u8272\u5B9A\u5236" />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text="\u6E10\u53D8\u8272"
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text="\u9006\u65F6\u9488"
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text="\u5927\u5C0F\u5B9A\u5236"
          style={{ marginTop: 15 }}
        />
      </Space>

      <Flex style={{ marginTop: 15 }} align="center" justify="center">
        <Button.Group>
          <Button onClick={add} type="primary">
            \u589E\u52A0
          </Button>
          <Button onClick={reduce} type="danger">
            \u51CF\u5C11
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};`}},key:"circle-demo-1",meta:{title:"\u6837\u5F0F\u5B9A\u5236"}};var C=()=>t(s,{children:[e(d,{defaultRate:70,text:"\u5DE6\u4FA7",startPosition:"left"}),e(d,{defaultRate:70,text:"\u53F3\u4FA7",startPosition:"right"}),e(d,{defaultRate:70,text:"\u5E95\u90E8",startPosition:"bottom"})]});const R={code:`import React from 'react';
import { Space, Circle } from 'react-vant';

export default () => {
  return (
    <Space>
      <Circle defaultRate={70} text="\u5DE6\u4FA7" startPosition="left" />
      <Circle defaultRate={70} text="\u53F3\u4FA7" startPosition="right" />
      <Circle defaultRate={70} text="\u5E95\u90E8" startPosition="bottom" />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Circle } from 'react-vant';

export default () => {
  return (
    <Space>
      <Circle defaultRate={70} text="\u5DE6\u4FA7" startPosition="left" />
      <Circle defaultRate={70} text="\u53F3\u4FA7" startPosition="right" />
      <Circle defaultRate={70} text="\u5E95\u90E8" startPosition="bottom" />
    </Space>
  );
};`}},key:"circle-demo-2",meta:{title:"\u8D77\u59CB\u4F4D\u7F6E"}},S=function({previewer:r=()=>null,api:c=()=>null}){const u=r;return e("div",{children:t("div",{children:[e("h1",{id:"circle-\u73AF\u5F62\u8FDB\u5EA6\u6761","data-anchor":"circle-\u73AF\u5F62\u8FDB\u5EA6\u6761",children:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(u,{code:"import { Circle } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:[e("code",{children:"rate"})," \u5C5E\u6027\u8868\u793A\u8FDB\u5EA6\u6761\u7684\u8FDB\u5EA6\uFF0C\u5F53 ",e("code",{children:"rate"})," \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8FDB\u5EA6\u6761\u4F1A\u4EE5 ",e("code",{children:"speed"})," \u7684\u901F\u5EA6\u53D8\u5316\uFF0C\u76F4\u81F3\u8FBE\u5230 ",e("code",{children:"rate"})," \u8BBE\u5B9A\u7684\u503C\u3002"]}),e(u,n(i({},P),{children:e(p,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49","data-anchor":"\u81EA\u5B9A\u4E49",children:"\u81EA\u5B9A\u4E49"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"strokeWidth"})," \u5C5E\u6027\u6765\u63A7\u5236\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002"]}),e(u,n(i({},k),{children:e(E,{})})),e("h3",{id:"\u8D77\u59CB\u4F4D\u7F6E","data-anchor":"\u8D77\u59CB\u4F4D\u7F6E",children:"\u8D77\u59CB\u4F4D\u7F6E"}),t("p",{children:["\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4ECE\u9876\u90E8\u5F00\u59CB\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"startPosition"})," \u5C5E\u6027\u8BBE\u7F6E\u8D77\u59CB\u4F4D\u7F6E\u3002"]}),e(u,n(i({},R),{children:e(C,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"defaultRate"}),e("td",{children:"\u9ED8\u8BA4\u8FDB\u5EA6"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"rate"}),e("td",{children:"\u5F53\u524D\u8FDB\u5EA6"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"size"}),t("td",{children:["\u5706\u73AF\u76F4\u5F84\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"100px"})})]}),t("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u8FDB\u5EA6\u6761\u989C\u8272\uFF0C\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u53EF\u4EE5\u5B9A\u4E49\u6E10\u53D8\u8272"}),e("td",{children:e("em",{children:"string | object"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),t("tr",{children:[e("td",{children:"layerColor"}),e("td",{children:"\u8F68\u9053\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),t("tr",{children:[e("td",{children:"fill"}),e("td",{children:"\u586B\u5145\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"none"})})]}),t("tr",{children:[e("td",{children:"speed"}),e("td",{children:"\u52A8\u753B\u901F\u5EA6\uFF08\u5355\u4F4D\u4E3A rate/s\uFF09"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"strokeWidth"}),e("td",{children:"\u8FDB\u5EA6\u6761\u5BBD\u5EA6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"40"})})]}),t("tr",{children:[e("td",{children:"strokeLinecap"}),t("td",{children:["\u8FDB\u5EA6\u6761\u7AEF\u70B9\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"square"})," ",e("code",{children:"butt"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"round"})})]}),t("tr",{children:[e("td",{children:"clockwise"}),e("td",{children:"\u662F\u5426\u987A\u65F6\u9488\u589E\u52A0"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"startPosition"}),t("td",{children:["\u8FDB\u5EA6\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"}),"\u3001",e("code",{children:"right"}),"\u3001",e("code",{children:"bottom"})]}),e("td",{children:e("em",{children:"CircleStartPosition"})}),e("td",{children:e("code",{children:"top"})})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(u,{code:"import type { CircleStartPosition } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-circle-size"}),e("td",{children:e("em",{children:"100px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-layer-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-circle-text-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]})]})]})]})})},b=[{Component:p,key:"circle-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:E,key:"circle-demo-1",title:"\u6837\u5F0F\u5B9A\u5236"},{Component:C,key:"circle-demo-2",title:"\u8D77\u59CB\u4F4D\u7F6E"}],w={simulator:{compact:!1}},M=[{depth:1,text:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761",id:"circle-\u73AF\u5F62\u8FDB\u5EA6\u6761"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49",id:"\u81EA\u5B9A\u4E49"},{depth:3,text:"\u8D77\u59CB\u4F4D\u7F6E",id:"\u8D77\u59CB\u4F4D\u7F6E"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],j="/src/components/circle/README.md",T="Circle \u73AF\u5F62\u8FDB\u5EA6\u6761",z="1658500653000";var W=r=>r.children({MdContent:S,demos:b,frontmatter:w,slugs:M,filePath:j,title:T,updatedTime:z});export{S as MdContent,W as default,b as demos,j as filePath,w as frontmatter,M as slugs,T as title,z as updatedTime};
