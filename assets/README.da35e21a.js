var F=Object.defineProperty,C=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(c,u,n)=>u in c?F(c,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[u]=n,o=(c,u)=>{for(var n in u||(u={}))v.call(u,n)&&h(c,n,u[n]);if(l)for(var n of l(u))D.call(u,n)&&h(c,n,u[n]);return c},i=(c,u)=>C(c,m(u));import{j as t,a as e}from"./main.531c777e.js";import{e7 as r,aa as d,a3 as a,g as B,cC as x}from"./WaterMark.6f52b203.js";var A=()=>t("div",{className:"demo-action-bar",children:e(r,{children:[t(r.Icon,{icon:t(d,{}),text:"\u5BA2\u670D",onClick:()=>console.log("chat click")}),t(r.Icon,{icon:t(a,{}),text:"\u8D2D\u7269\u8F66",onClick:()=>console.log("cart click")}),t(r.Icon,{icon:t(B,{}),text:"\u5E97\u94FA",onClick:()=>console.log("shop click")}),t(r.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70",onClick:()=>console.log("button click")})]})});const b=`import React from 'react';
import { CartO, ChatO, ShopO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text="\u5BA2\u670D" onClick={() => console.log('chat click')} />
        <ActionBar.Icon icon={<CartO />} text="\u8D2D\u7269\u8F66" onClick={() => console.log('cart click')} />
        <ActionBar.Icon icon={<ShopO />} text="\u5E97\u94FA" onClick={() => console.log('shop click')} />
        <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" onClick={() => console.log('button click')} />
      </ActionBar>
    </div>
  );
};
`,g={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { CartO, ChatO, ShopO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text="\u5BA2\u670D" onClick={() => console.log('chat click')} />
        <ActionBar.Icon icon={<CartO />} text="\u8D2D\u7269\u8F66" onClick={() => console.log('cart click')} />
        <ActionBar.Icon icon={<ShopO />} text="\u5E97\u94FA" onClick={() => console.log('shop click')} />
        <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" onClick={() => console.log('button click')} />
      </ActionBar>
    </div>
  );
};
`}},key:"action-bar-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>t("div",{className:"demo-action-bar",children:e(r,{children:[t(r.Icon,{icon:t(d,{}),badge:{dot:!0},text:"\u5BA2\u670D"}),t(r.Icon,{icon:t(a,{}),badge:{content:5},text:"\u8D2D\u7269\u8F66"}),t(r.Icon,{icon:t(B,{}),badge:{content:12},text:"\u5E97\u94FA"}),t(r.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),t(r.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const f=`import React from 'react';
import { CartO, ChatO, ShopO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text="\u5E97\u94FA" />
      <ActionBar.Button type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`,y={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { CartO, ChatO, ShopO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text="\u5E97\u94FA" />
      <ActionBar.Button type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`}},key:"action-bar-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};var s=()=>t("div",{className:"demo-action-bar",children:e(r,{children:[t(r.Icon,{icon:t(d,{color:"red"}),text:"\u5BA2\u670D"}),t(r.Icon,{icon:t(a,{color:"red"}),text:"\u8D2D\u7269\u8F66"}),t(r.Icon,{icon:t(x,{color:"red"}),text:"\u5E97\u94FA"}),t(r.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),t(r.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const I=`import React from 'react';
import { CartO, ChatO, Star } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO color="red" />} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO color="red" />} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Icon icon={<Star color="red" />} text="\u5E97\u94FA" />
      <ActionBar.Button type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`,O={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { CartO, ChatO, Star } from '@react-vant/icons';
import { ActionBar } from 'react-vant';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO color="red" />} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO color="red" />} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Icon icon={<Star color="red" />} text="\u5E97\u94FA" />
      <ActionBar.Button type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`}},key:"action-bar-iconcolor",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}};var E=()=>t("div",{className:"demo-action-bar",children:e(r,{children:[t(r.Icon,{icon:t(d,{}),text:"\u5BA2\u670D"}),t(r.Icon,{icon:t(a,{}),text:"\u8D2D\u7269\u8F66"}),t(r.Button,{color:"#be99ff",type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),t(r.Button,{color:"#7232dd",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const k=`import React from 'react';
import { CartO, ChatO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';
import './style.less';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO />} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO />} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Button color="#be99ff" type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button color="#7232dd" type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`,P={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { CartO, ChatO } from '@react-vant/icons';
import { ActionBar } from 'react-vant';
import './style.less';

export default () => {
  return (
    <div className='demo-action-bar'>
    <ActionBar>
      <ActionBar.Icon icon={<ChatO />} text="\u5BA2\u670D" />
      <ActionBar.Icon icon={<CartO />} text="\u8D2D\u7269\u8F66" />
      <ActionBar.Button color="#be99ff" type="warning" text="\u52A0\u5165\u8D2D\u7269\u8F66" />
      <ActionBar.Button color="#7232dd" type="danger" text="\u7ACB\u5373\u8D2D\u4E70" />
    </ActionBar>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-action-bar {
  .rv-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"action-bar-btncolor",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}},N=function({previewer:c=()=>null,api:u=()=>null}){const n=c;return t("div",{children:e("div",{children:[t("h1",{id:"actionbar-\u52A8\u4F5C\u680F","data-anchor":"actionbar-\u52A8\u4F5C\u680F",children:"ActionBar \u52A8\u4F5C\u680F"}),t("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),t("p",{children:"\u7528\u4E8E\u4E3A\u9875\u9762\u76F8\u5173\u64CD\u4F5C\u63D0\u4F9B\u4FBF\u6377\u4EA4\u4E92\u3002"}),t("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),t(n,{code:"import { ActionBar } from 'react-vant';",lang:"js"}),t("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),t("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t(n,i(o({},g),{children:t(A,{})})),t("h3",{id:"\u5FBD\u6807\u63D0\u793A","data-anchor":"\u5FBD\u6807\u63D0\u793A",children:"\u5FBD\u6807\u63D0\u793A"}),e("p",{children:["\u5728 ActionBar.Icon \u7EC4\u4EF6\u4E0A\u53EF\u4EE5\u8BBE\u7F6E ",t("code",{children:"badge"})," \u5C5E\u6027\u3002"]}),t(n,i(o({},y),{children:t(p,{})})),t("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}),e("p",{children:["\u901A\u8FC7 ",t("code",{children:"ActionBar.Icon"})," \u7684 ",t("code",{children:"icon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u7075\u6D3B\u8BBE\u7F6E icon\u3002"]}),t(n,i(o({},O),{children:t(s,{})})),t("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),e("p",{children:["\u901A\u8FC7 ",t("code",{children:"ActionBar.Button"})," \u7684 ",t("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",t("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272\u3002"]}),t(n,i(o({},P),{children:t(E,{})})),t("h2",{id:"api","data-anchor":"api",children:"API"}),t("h3",{id:"actionbar-props","data-anchor":"actionbar-props",children:"ActionBar Props"}),e("table",{children:[t("thead",{children:e("tr",{children:[t("th",{children:"\u53C2\u6570"}),t("th",{children:"\u8BF4\u660E"}),t("th",{children:"\u7C7B\u578B"}),t("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:e("tr",{children:[t("td",{children:"safeAreaInsetBottom"}),e("td",{children:["\u662F\u5426\u5F00\u542F",t("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),t("td",{children:t("em",{children:"boolean"})}),t("td",{children:t("code",{children:"true"})})]})})]}),t("h3",{id:"actionbaricon-props","data-anchor":"actionbaricon-props",children:"ActionBarIcon Props"}),e("table",{children:[t("thead",{children:e("tr",{children:[t("th",{children:"\u53C2\u6570"}),t("th",{children:"\u8BF4\u660E"}),t("th",{children:"\u7C7B\u578B"}),t("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{children:"text"}),t("td",{children:"\u6309\u94AE\u6587\u5B57"}),t("td",{children:t("em",{children:"ReactNode"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"icon"}),t("td",{children:"\u56FE\u6807"}),t("td",{children:t("em",{children:"ReactNode"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"badge"}),t("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u8BBE\u7F6E"}),t("td",{children:t("em",{children:"BadgeProps"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"onClick"}),t("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),t("td",{children:t("em",{children:"(event) => void"})}),t("td",{children:"-"})]})]})]}),t("h3",{id:"actionbarbutton-props","data-anchor":"actionbarbutton-props",children:"ActionBarButton Props"}),e("table",{children:[t("thead",{children:e("tr",{children:[t("th",{children:"\u53C2\u6570"}),t("th",{children:"\u8BF4\u660E"}),t("th",{children:"\u7C7B\u578B"}),t("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{children:"text"}),t("td",{children:"\u6309\u94AE\u6587\u5B57"}),t("td",{children:t("em",{children:"ReactNode"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"type"}),e("td",{children:["\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",t("code",{children:"primary"})," ",t("code",{children:"info"})," ",t("code",{children:"warning"})," ",t("code",{children:"danger"})]}),t("td",{children:t("em",{children:"string"})}),t("td",{children:t("code",{children:"default"})})]}),e("tr",{children:[t("td",{children:"color"}),e("td",{children:["\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",t("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272"]}),t("td",{children:t("em",{children:"string"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"icon"}),t("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),t("td",{children:t("em",{children:"ReactNode"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"disabled"}),t("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),t("td",{children:t("em",{children:"boolean"})}),t("td",{children:t("code",{children:"false"})})]}),e("tr",{children:[t("td",{children:"loading"}),t("td",{children:"\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001"}),t("td",{children:t("em",{children:"boolean"})}),t("td",{children:t("code",{children:"false"})})]}),e("tr",{children:[t("td",{children:"onClick"}),t("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),t("td",{children:t("em",{children:"(event) => void"})}),t("td",{children:"-"})]})]})]}),t("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),t("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",t("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[t("thead",{children:e("tr",{children:[t("th",{children:"\u540D\u79F0"}),t("th",{children:"\u9ED8\u8BA4\u503C"}),t("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[t("td",{children:"--rv-action-bar-background-color"}),t("td",{children:t("em",{children:"var(--rv-white)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-height"}),t("td",{children:t("em",{children:"50px"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-width"}),t("td",{children:t("em",{children:"48px"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-height"}),t("td",{children:t("em",{children:"100%"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-color"}),t("td",{children:t("em",{children:"var(--rv-text-color)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-size"}),t("td",{children:t("em",{children:"18px"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-font-size"}),t("td",{children:t("em",{children:"var(--rv-font-size-xs)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-active-color"}),t("td",{children:t("em",{children:"var(--rv-active-color)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-text-color"}),t("td",{children:t("em",{children:"var(--rv-gray-7)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-icon-background-color"}),t("td",{children:t("em",{children:"var(--rv-white)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-button-height"}),t("td",{children:t("em",{children:"40px"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-button-warning-color"}),t("td",{children:t("em",{children:"var(--rv-gradient-orange)"})}),t("td",{children:"-"})]}),e("tr",{children:[t("td",{children:"--rv-action-bar-button-danger-color"}),t("td",{children:t("em",{children:"var(--rv-gradient-red)"})}),t("td",{children:"-"})]})]})]})]})})},_=[{Component:A,key:"action-bar-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"action-bar-badge",title:"\u5FBD\u6807\u63D0\u793A"},{Component:s,key:"action-bar-iconcolor",title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"},{Component:E,key:"action-bar-btncolor",title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}],M=void 0,S=[{depth:1,text:"ActionBar \u52A8\u4F5C\u680F",id:"actionbar-\u52A8\u4F5C\u680F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5FBD\u6807\u63D0\u793A",id:"\u5FBD\u6807\u63D0\u793A"},{depth:3,text:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},{depth:2,text:"API",id:"api"},{depth:3,text:"ActionBar Props",id:"actionbar-props"},{depth:3,text:"ActionBarIcon Props",id:"actionbaricon-props"},{depth:3,text:"ActionBarButton Props",id:"actionbarbutton-props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],w="/src/components/action-bar/README.md",R="ActionBar \u52A8\u4F5C\u680F",$="1658500653000";var T=c=>c.children({MdContent:N,demos:_,frontmatter:M,slugs:S,filePath:w,title:R,updatedTime:$});export{N as MdContent,T as default,_ as demos,w as filePath,M as frontmatter,S as slugs,R as title,$ as updatedTime};
