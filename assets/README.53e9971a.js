var F=Object.defineProperty,C=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(c,u,r)=>u in c?F(c,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[u]=r,o=(c,u)=>{for(var r in u||(u={}))v.call(u,r)&&h(c,r,u[r]);if(l)for(var r of l(u))D.call(u,r)&&h(c,r,u[r]);return c},i=(c,u)=>C(c,m(u));import{j as n,a as t}from"./main.0cdb74b2.js";import{e9 as e,aa as d,a3 as a,g as B,cC as x}from"./FloatingPanel.10dd60c0.js";var A=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(d,{}),text:"\u5BA2\u670D",onClick:()=>console.log("chat click")}),n(e.Icon,{icon:n(a,{}),text:"\u8D2D\u7269\u8F66",onClick:()=>console.log("cart click")}),n(e.Icon,{icon:n(B,{}),text:"\u5E97\u94FA",onClick:()=>console.log("shop click")}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70",onClick:()=>console.log("button click")})]})});const b=`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text='\u5BA2\u670D'
          onClick={() => console.log('chat click')}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text='\u8D2D\u7269\u8F66'
          onClick={() => console.log('cart click')}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text='\u5E97\u94FA'
          onClick={() => console.log('shop click')}
        />
        <ActionBar.Button
          type='danger'
          text='\u7ACB\u5373\u8D2D\u4E70'
          onClick={() => console.log('button click')}
        />
      </ActionBar>
    </div>
  )
}
`,g={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text='\u5BA2\u670D'
          onClick={() => console.log('chat click')}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text='\u8D2D\u7269\u8F66'
          onClick={() => console.log('cart click')}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text='\u5E97\u94FA'
          onClick={() => console.log('shop click')}
        />
        <ActionBar.Button
          type='danger'
          text='\u7ACB\u5373\u8D2D\u4E70'
          onClick={() => console.log('button click')}
        />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(d,{}),badge:{dot:!0},text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(a,{}),badge:{content:5},text:"\u8D2D\u7269\u8F66"}),n(e.Icon,{icon:n(B,{}),badge:{content:12},text:"\u5E97\u94FA"}),n(e.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const f=`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,y={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};var s=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(d,{color:"red"}),text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(a,{color:"red"}),text:"\u8D2D\u7269\u8F66"}),n(e.Icon,{icon:n(x,{color:"red"}),text:"\u5E97\u94FA"}),n(e.Button,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const I=`import React from 'react'
import { CartO, ChatO, Star } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color='red' />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO color='red' />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<Star color='red' />} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,O={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO, Star } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color='red' />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO color='red' />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Icon icon={<Star color='red' />} text='\u5E97\u94FA' />
        <ActionBar.Button type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`}},key:"action-bar-iconcolor",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}};var E=()=>n("div",{className:"demo-action-bar",children:t(e,{children:[n(e.Icon,{icon:n(d,{}),text:"\u5BA2\u670D"}),n(e.Icon,{icon:n(a,{}),text:"\u8D2D\u7269\u8F66"}),n(e.Button,{color:"#be99ff",type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66"}),n(e.Button,{color:"#7232dd",type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]})});const k=`import React from 'react'
import { CartO, ChatO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#be99ff' type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#7232dd' type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`,P={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { CartO, ChatO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text='\u5BA2\u670D' />
        <ActionBar.Icon icon={<CartO />} text='\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#be99ff' type='warning' text='\u52A0\u5165\u8D2D\u7269\u8F66' />
        <ActionBar.Button color='#7232dd' type='danger' text='\u7ACB\u5373\u8D2D\u4E70' />
      </ActionBar>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-action-bar {
  .rv-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"action-bar-btncolor",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}},N=function({previewer:c=()=>null,api:u=()=>null}){const r=c;return n("div",{children:t("div",{children:[n("h1",{id:"actionbar-\u52A8\u4F5C\u680F","data-anchor":"actionbar-\u52A8\u4F5C\u680F",children:"ActionBar \u52A8\u4F5C\u680F"}),n("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:"\u7528\u4E8E\u4E3A\u9875\u9762\u76F8\u5173\u64CD\u4F5C\u63D0\u4F9B\u4FBF\u6377\u4EA4\u4E92\u3002"}),n("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),n(r,{code:"import { ActionBar } from 'react-vant';",lang:"js"}),n("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),n(r,i(o({},g),{children:n(A,{})})),n("h3",{id:"\u5FBD\u6807\u63D0\u793A","data-anchor":"\u5FBD\u6807\u63D0\u793A",children:"\u5FBD\u6807\u63D0\u793A"}),t("p",{children:["\u5728 ActionBar.Icon \u7EC4\u4EF6\u4E0A\u53EF\u4EE5\u8BBE\u7F6E ",n("code",{children:"badge"})," \u5C5E\u6027\u3002"]}),n(r,i(o({},y),{children:n(p,{})})),n("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"ActionBar.Icon"})," \u7684 ",n("code",{children:"icon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u7075\u6D3B\u8BBE\u7F6E icon\u3002"]}),n(r,i(o({},O),{children:n(s,{})})),n("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"ActionBar.Button"})," \u7684 ",n("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",n("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272\u3002"]}),n(r,i(o({},P),{children:n(E,{})})),n("h2",{id:"api","data-anchor":"api",children:"API"}),n("h3",{id:"actionbar-props","data-anchor":"actionbar-props",children:"ActionBar Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:t("tr",{children:[n("td",{children:"safeAreaInsetBottom"}),t("td",{children:["\u662F\u5426\u5F00\u542F",n("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]})})]}),n("h3",{id:"actionbaricon-props","data-anchor":"actionbaricon-props",children:"ActionBarIcon Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"badge"}),n("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u8BBE\u7F6E"}),n("td",{children:n("em",{children:"BadgeProps"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"onClick"}),n("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),n("td",{children:n("em",{children:"(event) => void"})}),n("td",{children:"-"})]})]})]}),n("h3",{id:"actionbarbutton-props","data-anchor":"actionbarbutton-props",children:"ActionBarButton Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"type"}),t("td",{children:["\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"primary"})," ",n("code",{children:"info"})," ",n("code",{children:"warning"})," ",n("code",{children:"danger"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"default"})})]}),t("tr",{children:[n("td",{children:"color"}),t("td",{children:["\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",n("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272"]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"loading"}),n("td",{children:"\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"onClick"}),n("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),n("td",{children:n("em",{children:"(event) => void"})}),n("td",{children:"-"})]})]})]}),n("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"--rv-action-bar-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-height"}),n("td",{children:n("em",{children:"50px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-width"}),n("td",{children:n("em",{children:"48px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-height"}),n("td",{children:n("em",{children:"100%"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-color"}),n("td",{children:n("em",{children:"var(--rv-text-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-size"}),n("td",{children:n("em",{children:"18px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-xs)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-active-color"}),n("td",{children:n("em",{children:"var(--rv-active-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-text-color"}),n("td",{children:n("em",{children:"var(--rv-gray-7)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-icon-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-height"}),n("td",{children:n("em",{children:"40px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-warning-color"}),n("td",{children:n("em",{children:"var(--rv-gradient-orange)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-action-bar-button-danger-color"}),n("td",{children:n("em",{children:"var(--rv-gradient-red)"})}),n("td",{children:"-"})]})]})]})]})})},_=[{Component:A,key:"action-bar-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"action-bar-badge",title:"\u5FBD\u6807\u63D0\u793A"},{Component:s,key:"action-bar-iconcolor",title:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"},{Component:E,key:"action-bar-btncolor",title:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"}],M=void 0,S=[{depth:1,text:"ActionBar \u52A8\u4F5C\u680F",id:"actionbar-\u52A8\u4F5C\u680F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5FBD\u6807\u63D0\u793A",id:"\u5FBD\u6807\u63D0\u793A"},{depth:3,text:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},{depth:2,text:"API",id:"api"},{depth:3,text:"ActionBar Props",id:"actionbar-props"},{depth:3,text:"ActionBarIcon Props",id:"actionbaricon-props"},{depth:3,text:"ActionBarButton Props",id:"actionbarbutton-props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],w="/src/components/action-bar/README.md",R="ActionBar \u52A8\u4F5C\u680F",$="1683550562000";var T=c=>c.children({MdContent:N,demos:_,frontmatter:M,slugs:S,filePath:w,title:R,updatedTime:$});export{N as MdContent,T as default,_ as demos,w as filePath,M as frontmatter,S as slugs,R as title,$ as updatedTime};
