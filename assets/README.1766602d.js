var s=Object.defineProperty,E=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(r,d,t)=>d in r?s(r,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[d]=t,n=(r,d)=>{for(var t in d||(d={}))y.call(d,t)&&p(r,t,d[t]);if(o)for(var t of o(d))C.call(d,t)&&p(r,t,d[t]);return r},c=(r,d)=>E(r,B(d));import{j as e,a as u}from"./main.531c777e.js";import{dW as i,dO as a,B as v}from"./WaterMark.6f52b203.js";var l=()=>e(i,{description:"\u63CF\u8FF0\u6587\u5B57"});const g={code:`import React from 'react';
import { Empty } from 'react-vant';

export default () => {
  return <Empty description="\u63CF\u8FF0\u6587\u5B57" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'react-vant';

export default () => {
  return <Empty description="\u63CF\u8FF0\u6587\u5B57" />;
};`}},key:"empty-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var m=()=>u(a,{children:[e(a.TabPane,{title:"\u901A\u7528\u9519\u8BEF",children:e(i,{image:"error",description:"\u63CF\u8FF0\u6587\u5B57"})}),e(a.TabPane,{title:"\u901A\u7528\u9519\u8BEF",children:e(i,{image:"network",description:"\u63CF\u8FF0\u6587\u5B57"})}),e(a.TabPane,{title:"\u901A\u7528\u9519\u8BEF",children:e(i,{image:"search",description:"\u63CF\u8FF0\u6587\u5B57"})})]});const A={code:`import React from 'react';
import { Tabs, Empty } from 'react-vant';

export default () => {
  return (
    <Tabs>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="error" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="network" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="search" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
    </Tabs>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Tabs, Empty } from 'react-vant';

export default () => {
  return (
    <Tabs>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="error" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="network" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
      <Tabs.TabPane title="\u901A\u7528\u9519\u8BEF">
        <Empty image="search" description="\u63CF\u8FF0\u6587\u5B57" />
      </Tabs.TabPane>
    </Tabs>
  );
};`}},key:"empty-demo-1",meta:{title:"\u56FE\u7247\u7C7B\u578B"}};var h=()=>e(i,{className:"custom-image",imageSize:90,image:e("img",{src:"https://img.yzcdn.cn/vant/custom-empty-image.png"}),description:"\u63CF\u8FF0\u6587\u5B57"});const b={code:`import React from 'react';
import { Empty } from 'react-vant';

export default () => {
  return (
    <Empty
      className="custom-image"
      imageSize={90}
      image={<img src="https://img.yzcdn.cn/vant/custom-empty-image.png" />}
      description="\u63CF\u8FF0\u6587\u5B57"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'react-vant';

export default () => {
  return (
    <Empty
      className="custom-image"
      imageSize={90}
      image={<img src="https://img.yzcdn.cn/vant/custom-empty-image.png" />}
      description="\u63CF\u8FF0\u6587\u5B57"
    />
  );
};`}},key:"empty-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u7247"}};var F=()=>e(i,{description:"\u63CF\u8FF0\u6587\u5B57",children:e(v,{style:{width:160},round:!0,type:"primary",children:"\u6309\u94AE"})});const f={code:`import React from 'react';
import { Empty, Button } from 'react-vant';

export default () => {
  return (
    <Empty description="\u63CF\u8FF0\u6587\u5B57">
      <Button style={{ width: 160 }} round type="primary">
        \u6309\u94AE
      </Button>
    </Empty>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty, Button } from 'react-vant';

export default () => {
  return (
    <Empty description="\u63CF\u8FF0\u6587\u5B57">
      <Button style={{ width: 160 }} round type="primary">
        \u6309\u94AE
      </Button>
    </Empty>
  );
};`}},key:"empty-demo-3",meta:{title:"\u5E95\u90E8\u5185\u5BB9"}},x=function({previewer:r=()=>null,api:d=()=>null}){const t=r;return e("div",{children:u("div",{children:[e("h1",{id:"empty-\u7A7A\u72B6\u6001","data-anchor":"empty-\u7A7A\u72B6\u6001",children:"Empty \u7A7A\u72B6\u6001"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7A7A\u72B6\u6001\u65F6\u7684\u5360\u4F4D\u63D0\u793A\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Empty } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(t,c(n({},g),{children:e(l,{})})),e("h3",{id:"\u56FE\u7247\u7C7B\u578B","data-anchor":"\u56FE\u7247\u7C7B\u578B",children:"\u56FE\u7247\u7C7B\u578B"}),e(t,c(n({},A),{children:e(m,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u7247","data-anchor":"\u81EA\u5B9A\u4E49\u56FE\u7247",children:"\u81EA\u5B9A\u4E49\u56FE\u7247"}),e("p",{children:"\u9700\u8981\u81EA\u5B9A\u4E49\u56FE\u7247\u65F6\uFF0C\u53EF\u4EE5\u5728 image \u5C5E\u6027\u4E2D\u4F20\u5165\u7EC4\u4EF6\u6216\u8005\u4EFB\u610F\u56FE\u7247 URL\u3002"}),e(t,c(n({},b),{children:e(h,{})})),e("h3",{id:"\u5E95\u90E8\u5185\u5BB9","data-anchor":"\u5E95\u90E8\u5185\u5BB9",children:"\u5E95\u90E8\u5185\u5BB9"}),e("p",{children:"\u901A\u8FC7 children \u53EF\u4EE5\u5728 Empty \u7EC4\u4EF6\u7684\u4E0B\u65B9\u63D2\u5165\u5185\u5BB9\u3002"}),e(t,c(n({},f),{children:e(F,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"image"}),u("td",{children:["\u56FE\u7247\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"error"})," ",e("code",{children:"network"})," ",e("code",{children:"search"}),"\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u7247 URL"]}),e("td",{children:e("em",{children:"string|ReactNode"})}),e("td",{children:e("code",{children:"default"})})]}),u("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u56FE\u7247\u4E0B\u65B9\u7684\u63CF\u8FF0\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u7EC4\u4EF6 class"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"style"}),e("td",{children:"\u7EC4\u4EF6\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-empty-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xl) 0"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-image-size"}),e("td",{children:e("em",{children:"160px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-description-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-description-padding"}),e("td",{children:e("em",{children:"0 60px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-description-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-description-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-description-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-empty-bottom-margin-top"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]})]})]})]})})},P=[{Component:l,key:"empty-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"empty-demo-1",title:"\u56FE\u7247\u7C7B\u578B"},{Component:h,key:"empty-demo-2",title:"\u81EA\u5B9A\u4E49\u56FE\u7247"},{Component:F,key:"empty-demo-3",title:"\u5E95\u90E8\u5185\u5BB9"}],T={simulator:{style:{background:"#fff"}}},D=[{depth:1,text:"Empty \u7A7A\u72B6\u6001",id:"empty-\u7A7A\u72B6\u6001"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u56FE\u7247\u7C7B\u578B",id:"\u56FE\u7247\u7C7B\u578B"},{depth:3,text:"\u81EA\u5B9A\u4E49\u56FE\u7247",id:"\u81EA\u5B9A\u4E49\u56FE\u7247"},{depth:3,text:"\u5E95\u90E8\u5185\u5BB9",id:"\u5E95\u90E8\u5185\u5BB9"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],M="/src/components/empty/README.md",N="Empty \u7A7A\u72B6\u6001",R="1658500653000";var z=r=>r.children({MdContent:x,demos:P,frontmatter:T,slugs:D,filePath:M,title:N,updatedTime:R});export{x as MdContent,z as default,P as demos,M as filePath,T as frontmatter,D as slugs,N as title,R as updatedTime};
