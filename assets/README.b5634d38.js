var o=Object.defineProperty,F=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,a=(t,e)=>{for(var i in e||(e={}))p.call(e,i)&&c(t,i,e[i]);if(d)for(var i of d(e))C.call(e,i)&&c(t,i,e[i]);return t},l=(t,e)=>F(t,E(e));import{j as u,a as n}from"./main.0cdb74b2.js";import{e7 as D,d8 as m,d9 as r,e as s,cB as g,a3 as v,aE as A,D as B,e8 as x}from"./FloatingPanel.10dd60c0.js";var h=()=>u("div",{children:n(D,{anchors:[170,320,window.innerHeight*.8],children:[u(m,{}),n(r,{gutter:8,children:[u(r.Item,{icon:u(s,{}),onClick:()=>0,text:"\u9644\u8FD1"}),u(r.Item,{icon:u(g,{}),onClick:()=>0,text:"\u6536\u85CF"}),u(r.Item,{icon:u(v,{}),onClick:()=>0,text:"\u8D2D\u7269\u8F66"}),u(r.Item,{icon:u(A,{}),onClick:()=>0,text:"\u4F18\u60E0"})]}),u(B,{children:"\u597D\u7269\u63A8\u8350"}),Array.from(Array(5)).map((t,e)=>u(x,{title:"\u70ED\u5356\u5546\u54C1"+e,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",desc:"\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00",num:3,price:"2.00"},e))]})});const f=`import React from 'react'
import { ProductCard, Grid, FloatingPanel, Search, Divider } from 'react-vant'
import { LocationO, StarO, CartO, Discount } from '@react-vant/icons'

export default () => {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text='\u9644\u8FD1' />
          <Grid.Item icon={<StarO />} onClick={() => 0} text='\u6536\u85CF' />
          <Grid.Item icon={<CartO />} onClick={() => 0} text='\u8D2D\u7269\u8F66' />
          <Grid.Item icon={<Discount />} onClick={() => 0} text='\u4F18\u60E0' />
        </Grid>
        <Divider>\u597D\u7269\u63A8\u8350</Divider>
        {Array.from(Array(5)).map((_, index) => (
          <ProductCard
            key={index}
            title={'\u70ED\u5356\u5546\u54C1' + index}
            thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
            desc='\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00'
            num={3}
            price='2.00'
          />
        ))}
      </FloatingPanel>
    </div>
  )
}
`,P={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.2.7"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { ProductCard, Grid, FloatingPanel, Search, Divider } from 'react-vant'
import { LocationO, StarO, CartO, Discount } from '@react-vant/icons'

export default () => {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text='\u9644\u8FD1' />
          <Grid.Item icon={<StarO />} onClick={() => 0} text='\u6536\u85CF' />
          <Grid.Item icon={<CartO />} onClick={() => 0} text='\u8D2D\u7269\u8F66' />
          <Grid.Item icon={<Discount />} onClick={() => 0} text='\u4F18\u60E0' />
        </Grid>
        <Divider>\u597D\u7269\u63A8\u8350</Divider>
        {Array.from(Array(5)).map((_, index) => (
          <ProductCard
            key={index}
            title={'\u70ED\u5356\u5546\u54C1' + index}
            thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
            desc='\u70ED\u5356\u5546\u54C1\uFF0C\u4F18\u60E0\u540E 2.00'
            num={3}
            price='2.00'
          />
        ))}
      </FloatingPanel>
    </div>
  )
}
`}},key:"floating-panel-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},y=function({previewer:t=()=>null,api:e=()=>null}){const i=t;return u("div",{children:n("div",{children:[u("h1",{id:"floatingpanel-\u6D6E\u52A8\u9762\u677F","data-anchor":"floatingpanel-\u6D6E\u52A8\u9762\u677F",children:"FloatingPanel \u6D6E\u52A8\u9762\u677F"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u53EF\u4EE5\u4E0A\u4E0B\u62D6\u52A8\u7684\u6D6E\u52A8\u9762\u677F\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(i,{code:"import { FloatingPanel } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u(i,l(a({},P),{children:u(h,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"anchors"}),n("td",{children:["\u53EF\u62D6\u62FD\u81F3\u54EA\u4E9B\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number[]"})}),u("td",{children:u("code",{children:"[100]"})})]}),n("tr",{children:[u("td",{children:"onHeightChange"}),u("td",{children:"\u9762\u677F\u9AD8\u5EA6\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"(height: number) => void"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),n("p",{children:["\u901A\u8FC7 ",u("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",u("code",{children:"FloatingPanel"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",u("a",{href:"/guide/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:n("tr",{children:[u("td",{children:"moveTo"}),u("td",{children:"\u79FB\u52A8\u5230\u6307\u5B9A\u9AD8\u5EA6"}),u("td",{children:u("em",{children:"(height: number) => void"})})]})})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"--rv-floating-panel-z-index"}),u("td",{children:"1001"}),u("td",{children:"\u9762\u677F\u5806\u53E0\u663E\u793A\u4F18\u5148\u7EA7"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-background-color"}),u("td",{children:"var(--rv-white)"}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-header-background-color"}),u("td",{children:"var(--rv-white)"}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-header-padding"}),u("td",{children:"8px"}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-thumb-background-color"}),u("td",{children:"var(--rv-gray-5)"}),u("td",{children:"\u6ED1\u5757\u989C\u8272"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-thumb-width"}),u("td",{children:"20px"}),u("td",{children:"\u6ED1\u5757\u5BBD\u5EA6"})]}),n("tr",{children:[u("td",{children:"--rv-floating-panel-thumb-height"}),u("td",{children:"4px"}),u("td",{children:"\u6ED1\u5757\u9AD8\u5EA6"})]})]})]})]})})},b=[{Component:h,key:"floating-panel-base",title:"\u57FA\u7840\u7528\u6CD5"}],k=void 0,S=[{depth:1,text:"FloatingPanel \u6D6E\u52A8\u9762\u677F",id:"floatingpanel-\u6D6E\u52A8\u9762\u677F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],G="/src/components/floating-panel/README.md",I="FloatingPanel \u6D6E\u52A8\u9762\u677F",O="1683550562000";var M=t=>t.children({MdContent:y,demos:b,frontmatter:k,slugs:S,filePath:G,title:I,updatedTime:O});export{y as MdContent,M as default,b as demos,G as filePath,k as frontmatter,S as slugs,I as title,O as updatedTime};
