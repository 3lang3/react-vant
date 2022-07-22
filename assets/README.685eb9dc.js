var B=Object.defineProperty,E=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var o=(n,i,e)=>i in n?B(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e,l=(n,i)=>{for(var e in i||(i={}))F.call(i,e)&&o(n,e,i[e]);if(c)for(var e of c(i))s.call(i,e)&&o(n,e,i[e]);return n},h=(n,i)=>E(n,p(i));import{r as y,a as t,j as u}from"./main.531c777e.js";import{e4 as r,B as d}from"./WaterMark.6f52b203.js";var a=()=>{const n=y.exports.useRef(null);return t("div",{className:"demo-sticky--wrapper",children:[u(r,{children:u(d,{type:"primary",style:{marginLeft:"15px"},children:"\u57FA\u7840\u7528\u6CD5"})}),u(r,{offsetTop:50,children:u(d,{type:"info",style:{marginLeft:"115px"},children:"\u5438\u9876\u8DDD\u79BB"})}),u("div",{ref:n,style:{height:"300px",backgroundColor:"#fff"},children:u(r,{container:n,children:u(d,{type:"warning",style:{marginLeft:"215px"},children:"\u6307\u5B9A\u5BB9\u5668"})})}),u("div",{style:{height:"70vh"}}),u(r,{position:"bottom",offsetBottom:50,children:u(d,{type:"info",style:{marginLeft:"15px"},children:"\u5438\u5E95\u8DDD\u79BB"})})]})};const f=`import React, { useRef } from 'react';
import { Sticky, Button } from 'react-vant';
import './style.less';

export default () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="demo-sticky--wrapper">
      <Sticky>
        <Button type="primary" style={{ marginLeft: '15px' }}>
          \u57FA\u7840\u7528\u6CD5
        </Button>
      </Sticky>

      <Sticky offsetTop={50}>
        <Button type="info" style={{ marginLeft: '115px' }}>
          \u5438\u9876\u8DDD\u79BB
        </Button>
      </Sticky>

      <div ref={container} style={{ height: '300px', backgroundColor: '#fff' }}>
        <Sticky container={container}>
          <Button type="warning" style={{ marginLeft: '215px' }}>
            \u6307\u5B9A\u5BB9\u5668
          </Button>
        </Sticky>
      </div>

      <div style={{ height: '70vh' }} />
      <Sticky position="bottom" offsetBottom={50}>
        <Button type="info" style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </div>
  );
};
`,m={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sticky, Button } from 'react-vant';
import './style.less';

export default () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="demo-sticky--wrapper">
      <Sticky>
        <Button type="primary" style={{ marginLeft: '15px' }}>
          \u57FA\u7840\u7528\u6CD5
        </Button>
      </Sticky>

      <Sticky offsetTop={50}>
        <Button type="info" style={{ marginLeft: '115px' }}>
          \u5438\u9876\u8DDD\u79BB
        </Button>
      </Sticky>

      <div ref={container} style={{ height: '300px', backgroundColor: '#fff' }}>
        <Sticky container={container}>
          <Button type="warning" style={{ marginLeft: '215px' }}>
            \u6307\u5B9A\u5BB9\u5668
          </Button>
        </Sticky>
      </div>

      <div style={{ height: '70vh' }} />
      <Sticky position="bottom" offsetBottom={50}>
        <Button type="info" style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-sticky--wrapper {
  height: 200vh;
}
`}},key:"sticky-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},C=function({previewer:n=()=>null,api:i=()=>null}){const e=n;return u("div",{children:t("div",{children:[u("h1",{id:"sticky-\u7C98\u6027\u5E03\u5C40","data-anchor":"sticky-\u7C98\u6027\u5E03\u5C40",children:"Sticky \u7C98\u6027\u5E03\u5C40"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),t("p",{children:["Sticky \u7EC4\u4EF6\u4E0E CSS \u4E2D",u("code",{children:"position: sticky"}),"\u5C5E\u6027\u5B9E\u73B0\u7684\u6548\u679C\u4E00\u81F4\uFF0C\u5F53\u7EC4\u4EF6\u5728\u5C4F\u5E55\u8303\u56F4\u5185\u65F6\uFF0C\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u5E03\u5C40\u6392\u5217\uFF0C\u5F53\u7EC4\u4EF6\u6EDA\u51FA\u5C4F\u5E55\u8303\u56F4\u65F6\uFF0C\u59CB\u7EC8\u4F1A\u56FA\u5B9A\u5728\u5C4F\u5E55\u9876\u90E8\u3002"]}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(e,{code:"import { Sticky } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u5C06\u5185\u5BB9\u5305\u88F9\u5728 ",u("code",{children:"Sticky"})," \u7EC4\u4EF6\u5185\u5373\u53EF\u3002"]}),u(e,h(l({},m),{children:u(a,{})})),u(e,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant';

export default () => {
  return (
    <Sticky>
      <Button type="primary" style={{ marginLeft: '15px' }}>
        \u57FA\u7840\u7528\u6CD5
      </Button>
    </Sticky>
  );
};`,lang:"jsx"}),u("h3",{id:"\u5438\u9876\u8DDD\u79BB","data-anchor":"\u5438\u9876\u8DDD\u79BB",children:"\u5438\u9876\u8DDD\u79BB"}),t("p",{children:["\u901A\u8FC7 ",u("code",{children:"offsetTop"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\u3002"]}),u(e,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant';

export default () => {
  return (
    <Sticky offsetTop={50}>
      <Button type="info" style={{ marginLeft: '115px' }}>
        \u5438\u9876\u8DDD\u79BB
      </Button>
    </Sticky>
  );
};`,lang:"jsx"}),u("h3",{id:"\u6307\u5B9A\u5BB9\u5668","data-anchor":"\u6307\u5B9A\u5BB9\u5668",children:"\u6307\u5B9A\u5BB9\u5668"}),t("p",{children:["\u901A\u8FC7 ",u("code",{children:"container"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u7EC4\u4EF6\u7684\u5BB9\u5668\uFF0C\u9875\u9762\u6EDA\u52A8\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u8303\u56F4\u5185\uFF0C\u5F53\u7EC4\u4EF6\u5373\u5C06\u8D85\u51FA\u5BB9\u5668\u5E95\u90E8\u65F6\uFF0C\u4F1A\u56FA\u5B9A\u5728\u5BB9\u5668\u7684\u5E95\u90E8\u3002"]}),u(e,{code:`import React, { useRef } from 'react';
import { Sticky, Button } from 'react-vant';

export default () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
      <Sticky container={container}>
        <Button type="warning" style={{ marginLeft: '215px' }}>
          \u6307\u5B9A\u5BB9\u5668
        </Button>
      </Sticky>
    </div>
  );
};`,lang:"tsx"}),u("h3",{id:"\u5438\u5E95\u8DDD\u79BB","data-anchor":"\u5438\u5E95\u8DDD\u79BB",children:"\u5438\u5E95\u8DDD\u79BB"}),t("p",{children:["\u5C06 ",u("code",{children:"position"})," \u8BBE\u7F6E\u4E3A ",u("code",{children:"bottom"})," \u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u5438\u9644\u5728\u5E95\u90E8\u3002\u901A\u8FC7 ",u("code",{children:"offsetBottom"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u7EC4\u4EF6\u5728\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\u3002"]}),u(e,{code:`import React from 'react';
import { Sticky, Button } from 'react-vant';

export default () => {
  return (
    <>
      <div style={{ height: 200 }} />
      <Sticky position="bottom" offsetBottom={50}>
        <Button type="info" style={{ marginLeft: '15px' }}>
          \u5438\u5E95\u8DDD\u79BB
        </Button>
      </Sticky>
    </>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[u("thead",{children:t("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[u("td",{children:"position"}),t("td",{children:["\u5438\u9644\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"bottom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"top"})})]}),t("tr",{children:[u("td",{children:"offsetTop"}),t("td",{children:["\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),t("tr",{children:[u("td",{children:"offsetBottom"}),t("td",{children:["\u5438\u5E95\u65F6\u4E0E\u5E95\u90E8\u7684\u8DDD\u79BB\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),t("tr",{children:[u("td",{children:"zIndex"}),u("td",{children:"\u5438\u9876\u65F6\u7684 z-index"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"99"})})]}),t("tr",{children:[u("td",{children:"container"}),u("td",{children:"\u5BB9\u5668\u5BF9\u5E94\u7684 HTML \u8282\u70B9"}),u("td",{children:u("em",{children:"RefElement"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),t("table",{children:[u("thead",{children:t("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),t("tbody",{children:[t("tr",{children:[u("td",{children:"onScroll"}),u("td",{children:"\u6EDA\u52A8\u65F6\u89E6\u53D1"}),u("td",{children:t("em",{children:["{"," scrollTop: number, isFixed: boolean ","}"]})})]}),t("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5F53\u5438\u9876\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"isFixed: boolean"})})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(e,{code:"import type { StickyPosition } from 'react-vant';",lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[u("thead",{children:t("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:t("tr",{children:[u("td",{children:"--rv-sticky-z-index"}),u("td",{children:u("em",{children:"99"})}),u("td",{children:"-"})]})})]})]})})},D=[{Component:a,key:"sticky-demo",title:"\u57FA\u7840\u7528\u6CD5"}],x=void 0,A=[{depth:1,text:"Sticky \u7C98\u6027\u5E03\u5C40",id:"sticky-\u7C98\u6027\u5E03\u5C40"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5438\u9876\u8DDD\u79BB",id:"\u5438\u9876\u8DDD\u79BB"},{depth:3,text:"\u6307\u5B9A\u5BB9\u5668",id:"\u6307\u5B9A\u5BB9\u5668"},{depth:3,text:"\u5438\u5E95\u8DDD\u79BB",id:"\u5438\u5E95\u8DDD\u79BB"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],k="/src/components/sticky/README.md",v="Sticky \u7C98\u6027\u5E03\u5C40",g="1658500653000";var R=n=>n.children({MdContent:C,demos:D,frontmatter:x,slugs:A,filePath:k,title:v,updatedTime:g});export{C as MdContent,R as default,D as demos,k as filePath,x as frontmatter,A as slugs,v as title,g as updatedTime};
