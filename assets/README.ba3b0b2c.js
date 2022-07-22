var E=Object.defineProperty,v=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(u,d,t)=>d in u?E(u,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[d]=t,i=(u,d)=>{for(var t in d||(d={}))p.call(d,t)&&h(u,t,d[t]);if(l)for(var t of l(d))B.call(d,t)&&h(u,t,d[t]);return u},c=(u,d)=>v(u,s(d));import{j as e,a as r}from"./main.531c777e.js";import{e9 as a,da as n,cf as A}from"./WaterMark.6f52b203.js";var o=()=>e(a,{title:"\u6807\u9898",leftText:"\u8FD4\u56DE",rightText:"\u6309\u94AE",onClickLeft:()=>n("\u8FD4\u56DE"),onClickRight:()=>n("\u6309\u94AE")});const m={code:`import React from 'react';
import { Toast, NavBar } from 'react-vant';

export default () => {
  return (
    <NavBar
      title="\u6807\u9898"
      leftText="\u8FD4\u56DE"
      rightText="\u6309\u94AE"
      onClickLeft={() => Toast('\u8FD4\u56DE')}
      onClickRight={() => Toast('\u6309\u94AE')}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Toast, NavBar } from 'react-vant';

export default () => {
  return (
    <NavBar
      title="\u6807\u9898"
      leftText="\u8FD4\u56DE"
      rightText="\u6309\u94AE"
      onClickLeft={() => Toast('\u8FD4\u56DE')}
      onClickRight={() => Toast('\u6309\u94AE')}
    />
  );
};`}},key:"nav-bar-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var F=()=>e(a,{title:"\u6807\u9898",leftText:"\u8FD4\u56DE",onClickLeft:()=>n("\u8FD4\u56DE"),rightText:e(A,{fontSize:20}),onClickRight:()=>n("\u6309\u94AE")});const D=`import React from 'react';
import { Toast, NavBar } from 'react-vant';
import { Search } from '@react-vant/icons';

export default () => {
  return (
    <NavBar
      title="\u6807\u9898"
      leftText="\u8FD4\u56DE"
      onClickLeft={() => Toast('\u8FD4\u56DE')}
      rightText={<Search fontSize={20} />}
      onClickRight={() => Toast('\u6309\u94AE')}
    />
  );
};
`,C={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Toast, NavBar } from 'react-vant';
import { Search } from '@react-vant/icons';

export default () => {
  return (
    <NavBar
      title="\u6807\u9898"
      leftText="\u8FD4\u56DE"
      onClickLeft={() => Toast('\u8FD4\u56DE')}
      rightText={<Search fontSize={20} />}
      onClickRight={() => Toast('\u6309\u94AE')}
    />
  );
};
`}},key:"nav-bar-custom",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}},f=function({previewer:u=()=>null,api:d=()=>null}){const t=u;return e("div",{children:r("div",{children:[e("h1",{id:"navbar-\u5BFC\u822A\u680F","data-anchor":"navbar-\u5BFC\u822A\u680F",children:"NavBar \u5BFC\u822A\u680F"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u4E3A\u9875\u9762\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\uFF0C\u5E38\u7528\u4E8E\u9875\u9762\u9876\u90E8\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { NavBar } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(t,c(i({},m),{children:e(o,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9","data-anchor":"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:"\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u4E24\u4FA7\u7684\u5185\u5BB9\u3002"}),e(t,c(i({},C),{children:e(F,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),r("tr",{children:[e("td",{children:"leftText"}),e("td",{children:"\u5DE6\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),r("tr",{children:[e("td",{children:"rightText"}),e("td",{children:"\u53F3\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),r("tr",{children:[e("td",{children:"leftArrow"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u7BAD\u5934"}),e("td",{children:e("em",{children:"boolean|ReactNode"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),r("tr",{children:[e("td",{children:"fixed"}),e("td",{children:"\u662F\u5426\u56FA\u5B9A\u5728\u9876\u90E8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"\u5BFC\u822A\u680F z-index"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),r("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),r("tr",{children:[e("td",{children:"safeAreaInsetTop"}),r("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u9876\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"onClickLeft"}),e("td",{children:"\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"onClickRight"}),e("td",{children:"\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),r("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"--rv-nav-bar-height"}),e("td",{children:e("em",{children:"46px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-arrow-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-icon-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-text-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-title-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"--rv-nav-bar-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]})]})]})]})})},x=[{Component:o,key:"nav-bar-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:F,key:"nav-bar-custom",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}],b=void 0,g=[{depth:1,text:"NavBar \u5BFC\u822A\u680F",id:"navbar-\u5BFC\u822A\u680F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],T="/src/components/nav-bar/README.md",N="NavBar \u5BFC\u822A\u680F",k="1658500653000";var M=u=>u.children({MdContent:f,demos:x,frontmatter:b,slugs:g,filePath:T,title:N,updatedTime:k});export{f as MdContent,M as default,x as demos,T as filePath,b as frontmatter,g as slugs,N as title,k as updatedTime};
