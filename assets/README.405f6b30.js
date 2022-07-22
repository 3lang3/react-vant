var b=Object.defineProperty,p=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,d,r)=>d in t?b(t,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[d]=r,i=(t,d)=>{for(var r in d||(d={}))v.call(d,r)&&h(t,r,d[r]);if(l)for(var r of l(d))F.call(d,r)&&h(t,r,d[r]);return t},n=(t,d)=>p(t,E(d));import{j as e,a as u,F as A}from"./main.531c777e.js";import{eh as c,bk as B,dg as D}from"./WaterMark.6f52b203.js";var a=()=>e("div",{className:"demo-submit-bar",children:e(c,{price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const C={code:`import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`}},key:"submit-bar-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var o=()=>e("div",{className:"demo-submit-bar",children:e(c,{disabled:!0,price:"3050",tip:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012",tipIcon:e(B,{}),buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const f=`import React from 'react';
import { InfoO } from '@react-vant/icons';
import { SubmitBar } from 'react-vant';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      disabled
      price="3050"
      tip="\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012"
      tipIcon={<InfoO />}
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
    />
    </div>
  );
};
`,x={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { InfoO } from '@react-vant/icons';
import { SubmitBar } from 'react-vant';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      disabled
      price="3050"
      tip="\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001, \u6211\u4EEC\u5DF2\u4E3A\u4F60\u63A8\u8350\u5FEB\u9012"
      tipIcon={<InfoO />}
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
    />
    </div>
  );
};
`}},key:"submit-bar-disabled",meta:{title:"\u7981\u7528\u72B6\u6001"}};var m=()=>e("div",{className:"demo-submit-bar",children:e(c,{loading:!0,price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355"})});const g={code:`import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar loading price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar } from 'react-vant';

export default () => {
  return <div className="demo-submit-bar"><SubmitBar loading price="3050" buttonText="\u63D0\u4EA4\u8BA2\u5355" /></div>;
};`}},key:"submit-bar-demo-1",meta:{title:"\u52A0\u8F7D\u72B6\u6001"}};var s=()=>e("div",{className:"demo-submit-bar",children:e(c,{price:"3050",buttonText:"\u63D0\u4EA4\u8BA2\u5355",tip:u(A,{children:["\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,",e("span",{style:{color:"#1989fa"},children:"\u4FEE\u6539\u5730\u5740"})]}),children:e(D,{children:"\u5168\u9009"})})});const y={code:`import React from 'react';
import { SubmitBar, Checkbox } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      price="3050"
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
      tip={
        <>
          \u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,
          <span style={{ color: '#1989fa' }}>\u4FEE\u6539\u5730\u5740</span>
        </>
      }
    >
      <Checkbox>\u5168\u9009</Checkbox>
    </SubmitBar>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { SubmitBar, Checkbox } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-submit-bar">
    <SubmitBar
      price="3050"
      buttonText="\u63D0\u4EA4\u8BA2\u5355"
      tip={
        <>
          \u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u540C\u57CE\u9001,
          <span style={{ color: '#1989fa' }}>\u4FEE\u6539\u5730\u5740</span>
        </>
      }
    >
      <Checkbox>\u5168\u9009</Checkbox>
    </SubmitBar>
    </div>
  );
};`},"demo/style.less":{type:"FILE",value:`.demo-submit-bar {
  .rv-submit-bar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"submit-bar-demo-2",meta:{title:"\u9AD8\u7EA7\u7528\u6CD5"}},S=function({previewer:t=()=>null,api:d=()=>null}){const r=t;return e("div",{children:u("div",{children:[e("h1",{id:"submitbar-\u63D0\u4EA4\u8BA2\u5355\u680F","data-anchor":"submitbar-\u63D0\u4EA4\u8BA2\u5355\u680F",children:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C55\u793A\u8BA2\u5355\u91D1\u989D\u4E0E\u63D0\u4EA4\u8BA2\u5355\u3002"}),e(r,{code:"import { SubmitBar } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(r,n(i({},C),{children:e(a,{})})),e("h3",{id:"\u7981\u7528\u72B6\u6001","data-anchor":"\u7981\u7528\u72B6\u6001",children:"\u7981\u7528\u72B6\u6001"}),u("p",{children:["\u7981\u7528\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1 ",e("code",{children:"onSubmit"})," \u4E8B\u4EF6\u3002"]}),e(r,n(i({},x),{children:e(o,{})})),e("h3",{id:"\u52A0\u8F7D\u72B6\u6001","data-anchor":"\u52A0\u8F7D\u72B6\u6001",children:"\u52A0\u8F7D\u72B6\u6001"}),u("p",{children:["\u52A0\u8F7D\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1 ",e("code",{children:"onSubmit"})," \u4E8B\u4EF6\u3002"]}),e(r,n(i({},g),{children:e(m,{})})),e("h3",{id:"\u9AD8\u7EA7\u7528\u6CD5","data-anchor":"\u9AD8\u7EA7\u7528\u6CD5",children:"\u9AD8\u7EA7\u7528\u6CD5"}),e("p",{children:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"}),e(r,n(i({},y),{children:e(s,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"price"}),e("td",{children:"\u91D1\u989D\uFF08\u5355\u4F4D\u5206\uFF09"}),e("td",{children:e("em",{children:"number| string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"decimalLength"}),e("td",{children:"\u91D1\u989D\u5C0F\u6570\u70B9\u4F4D\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"2"})})]}),u("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u91D1\u989D\u5DE6\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u5408\u8BA1\uFF1A"})})]}),u("tr",{children:[e("td",{children:"suffixLabel"}),e("td",{children:"\u91D1\u989D\u53F3\u4FA7\u6587\u6848"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"textAlign"}),u("td",{children:["\u91D1\u989D\u6587\u6848\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"buttonText"}),e("td",{children:"\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"buttonType"}),e("td",{children:"\u6309\u94AE\u7C7B\u578B"}),e("td",{children:e("em",{children:e("a",{href:"/components/button",children:"ButtonType"})})}),e("td",{children:e("code",{children:"danger"})})]}),u("tr",{children:[e("td",{children:"buttonColor"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"tip"}),e("td",{children:"\u5728\u8BA2\u5355\u680F\u4E0A\u65B9\u7684\u63D0\u793A\u6587\u6848"}),e("td",{children:e("em",{children:"string|ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"tipIcon"}),e("td",{children:"\u63D0\u793A\u6587\u6848\u5DE6\u4FA7\u7684\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"currency"}),e("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\xA5"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5C06\u6309\u94AE\u663E\u793A\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),u("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"button"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"top"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8BA2\u5355\u680F\u4E0A\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onSubmit"}),e("td",{children:"\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03"}),e("td",{children:"-"})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-submit-bar-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-z-index"}),e("td",{children:e("em",{children:"100"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-button-width"}),e("td",{children:e("em",{children:"110px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-price-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-price-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-price-integer-font-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-price-font-family"}),e("td",{children:e("em",{children:"var(--rv-price-integer-font-family)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xs) var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-line-height"}),e("td",{children:e("em",{children:"1.5"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-color"}),e("td",{children:e("em",{children:"#f56723"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-background-color"}),e("td",{children:e("em",{children:"#fff7cc"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-tip-icon-size"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-button-height"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-submit-bar-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]})]})]})]})})},N=[{Component:a,key:"submit-bar-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:o,key:"submit-bar-disabled",title:"\u7981\u7528\u72B6\u6001"},{Component:m,key:"submit-bar-demo-1",title:"\u52A0\u8F7D\u72B6\u6001"},{Component:s,key:"submit-bar-demo-2",title:"\u9AD8\u7EA7\u7528\u6CD5"}],P=void 0,k=[{depth:1,text:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F",id:"submitbar-\u63D0\u4EA4\u8BA2\u5355\u680F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7981\u7528\u72B6\u6001",id:"\u7981\u7528\u72B6\u6001"},{depth:3,text:"\u52A0\u8F7D\u72B6\u6001",id:"\u52A0\u8F7D\u72B6\u6001"},{depth:3,text:"\u9AD8\u7EA7\u7528\u6CD5",id:"\u9AD8\u7EA7\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],I="/src/components/submit-bar/README.md",M="SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F",R="1658500653000";var w=t=>t.children({MdContent:S,demos:N,frontmatter:P,slugs:k,filePath:I,title:M,updatedTime:R});export{S as MdContent,w as default,N as demos,I as filePath,P as frontmatter,k as slugs,M as title,R as updatedTime};
