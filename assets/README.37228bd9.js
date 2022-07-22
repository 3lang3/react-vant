var p=Object.defineProperty,C=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(n,r,t)=>r in n?p(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,i=(n,r)=>{for(var t in r||(r={}))v.call(r,t)&&h(n,t,r[t]);if(a)for(var t of a(r))A.call(r,t)&&h(n,t,r[t]);return n},c=(n,r)=>C(n,T(r));import{a as u,j as e}from"./main.531c777e.js";import{dO as d}from"./WaterMark.6f52b203.js";const l=Array.from({length:3},(n,r)=>r+1);var o=()=>u("div",{className:"demo-tabs",children:[e(d,{defaultActive:2,children:l.map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u4E0B\u5212\u7EBF\u6807\u7B7E\u9875 ",n]},n))}),e(d,{border:!0,type:"capsule",children:l.map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u80F6\u56CA\u6807\u7B7E\u9875 ",n]},n))}),e(d,{border:!0,type:"jumbo",children:l.map(n=>u(d.TabPane,{badge:n,title:`\u6807\u7B7E${n}`,description:"\u63CF\u8FF0\u5185\u5BB9",children:["\u5E26\u63CF\u8FF0\u4FE1\u606F\u7684\u6807\u7B7E\u9875 ",n]},n))}),e(d,{type:"card",children:l.map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u5361\u7247\u6807\u7B7E\u9875 ",n]},n))})]});const D=`import React from 'react'
import { Tabs } from 'react-vant'
import './style.less'

const items = Array.from({ length: 3 }, (_, i) => i + 1)

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs defaultActive={2}>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u4E0B\u5212\u7EBF\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='capsule'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u80F6\u56CA\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='jumbo'>
        {items.map(item => (
          <Tabs.TabPane
            badge={item}
            key={item}
            title={\`\u6807\u7B7E\${item}\`}
            description='\u63CF\u8FF0\u5185\u5BB9'
          >
            \u5E26\u63CF\u8FF0\u4FE1\u606F\u7684\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs type='card'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5361\u7247\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
`,y={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'
import './style.less'

const items = Array.from({ length: 3 }, (_, i) => i + 1)

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs defaultActive={2}>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u4E0B\u5212\u7EBF\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='capsule'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u80F6\u56CA\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs border type='jumbo'>
        {items.map(item => (
          <Tabs.TabPane
            badge={item}
            key={item}
            title={\`\u6807\u7B7E\${item}\`}
            description='\u63CF\u8FF0\u5185\u5BB9'
          >
            \u5E26\u63CF\u8FF0\u4FE1\u606F\u7684\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Tabs type='card'>
        {items.map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5361\u7247\u6807\u7B7E\u9875 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-tabs {
  .rv-tabs {
    margin-bottom: 20px;
  }

  .rv-tab__pane {
    padding: 24px 20px;
    background-color: #fff;
    font-size: 14px;
  }

  .rv-tabs--card .rv-tab__pane {
    background-color: transparent;
  }
}
`}},key:"tabs-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var s=()=>e("div",{className:"demo-tabs",children:e(d,{active:"c",children:["a","b","c"].map((n,r)=>u(d.TabPane,{name:n,title:`\u6807\u7B7E${r+1}`,children:["\u5185\u5BB9 ",r+1]},n))})});const P={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active='c'>
        {['a', 'b', 'c'].map((item, index) => (
          <Tabs.TabPane name={item} key={item} title={\`\u6807\u7B7E\${index + 1}\`}>
            \u5185\u5BB9 {index + 1}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active='c'>
        {['a', 'b', 'c'].map((item, index) => (
          <Tabs.TabPane name={item} key={item} title={\`\u6807\u7B7E\${index + 1}\`}>
            \u5185\u5BB9 {index + 1}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo",meta:{title:"\u901A\u8FC7\u540D\u79F0\u5339\u914D"}};var F=()=>e("div",{className:"demo-tabs",children:e(d,{children:[1,2,3,4,5,6,7,8].map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u5185\u5BB9 ",n]},n))})});const f={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo-1",meta:{title:"\u6807\u7B7E\u680F\u6EDA\u52A8"}};var b=()=>e("div",{className:"demo-tabs",children:u(d,{active:1,children:[e(d.TabPane,{title:"\u6807\u7B7E1",children:"\u5185\u5BB91"}),e(d.TabPane,{title:"\u6807\u7B7E2",disabled:!0,children:"\u5185\u5BB92"}),e(d.TabPane,{title:"\u6807\u7B7E3",children:"\u5185\u5BB93"})]})});const x={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active={1}>
        <Tabs.TabPane title='\u6807\u7B7E1'>\u5185\u5BB91</Tabs.TabPane>
        <Tabs.TabPane title='\u6807\u7B7E2' disabled>
          \u5185\u5BB92
        </Tabs.TabPane>
        <Tabs.TabPane title='\u6807\u7B7E3'>\u5185\u5BB93</Tabs.TabPane>
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs active={1}>
        <Tabs.TabPane title='\u6807\u7B7E1'>\u5185\u5BB91</Tabs.TabPane>
        <Tabs.TabPane title='\u6807\u7B7E2' disabled>
          \u5185\u5BB92
        </Tabs.TabPane>
        <Tabs.TabPane title='\u6807\u7B7E3'>\u5185\u5BB93</Tabs.TabPane>
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo-2",meta:{title:"\u7981\u7528\u6807\u7B7E"}};var m=()=>e("div",{className:"demo-tabs",children:e(d,{align:"start",children:[1,2,3].map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u5185\u5BB9 ",n]},n))})});const g={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs align='start'>
        {[1, 2, 3].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs align='start'>
        {[1, 2, 3].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo-3",meta:{title:"\u5BF9\u9F50\u65B9\u5F0F"}};var E=()=>e("div",{className:"demo-tabs",children:e(d,{sticky:!0,swipeable:!0,children:[1,2,3,4].map(n=>u(d.TabPane,{title:`\u6807\u7B7E${n}`,children:["\u5185\u5BB9 ",n]},n))})});const k={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs sticky swipeable>
        {[1, 2, 3, 4].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs sticky swipeable>
        {[1, 2, 3, 4].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            \u5185\u5BB9 {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo-4",meta:{title:"\u7C98\u6027\u5E03\u5C40"}};var B=()=>e("div",{className:"demo-tabs",children:e(d,{sticky:!0,scrollspy:{autoFocusLast:!0,reachBottomThreshold:50},children:[1,2,3,4,5,6,7,8].map(n=>e(d.TabPane,{title:`\u6807\u7B7E${n}`,children:u("div",{style:{height:"50vh"},children:["\u5185\u5BB9 ",n]})},n))})});const N={code:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs
        sticky
        scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            <div style={{ height: '50vh' }}>\u5185\u5BB9 {item}</div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react'
import { Tabs } from 'react-vant'

export default () => {
  return (
    <div className='demo-tabs'>
      <Tabs
        sticky
        scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
            <div style={{ height: '50vh' }}>\u5185\u5BB9 {item}</div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}`}},key:"tabs-demo-5",meta:{title:"\u6EDA\u52A8\u5BFC\u822A"}},$=function({previewer:n=()=>null,api:r=()=>null}){const t=n;return e("div",{children:u("div",{children:[e("h1",{id:"tabs-\u6807\u7B7E\u9875","data-anchor":"tabs-\u6807\u7B7E\u9875",children:"Tabs \u6807\u7B7E\u9875"}),e("p",{children:"\u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u5E73\u7EA7\u7684\u533A\u57DF\u5C06\u5927\u5757\u5185\u5BB9\u8FDB\u884C\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u4FDD\u6301\u754C\u9762\u6574\u6D01\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Tabs } from 'react-vant'",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:"\u63D0\u4F9B\u4E86 4 \u79CD\u5C55\u73B0\u5F62\u5F0F"}),u("ul",{children:[u("li",{children:[e("code",{children:"line"})," \u4E0B\u5212\u7EBF\u98CE\u683C"]}),u("li",{children:[e("code",{children:"capsule"})," \u80F6\u56CA\u98CE\u683C"]}),u("li",{children:[e("code",{children:"jumbo"})," \u5E26\u63CF\u8FF0\u4FE1\u606F\u5C55\u793A"]}),u("li",{children:[e("code",{children:"card"})," \u5361\u7247\u98CE\u683C"]})]}),e(t,c(i({},y),{children:e(o,{})})),e("h3",{id:"\u901A\u8FC7\u540D\u79F0\u5339\u914D","data-anchor":"\u901A\u8FC7\u540D\u79F0\u5339\u914D",children:"\u901A\u8FC7\u540D\u79F0\u5339\u914D"}),u("p",{children:["\u5728\u6807\u7B7E\u6307\u5B9A ",e("code",{children:"name"})," \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C",e("code",{children:"active"})," \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 ",e("code",{children:"name"}),"\uFF08\u6B64\u65F6\u65E0\u6CD5\u901A\u8FC7\u7D22\u5F15\u503C\u6765\u5339\u914D\u6807\u7B7E\uFF09\u3002"]}),e(t,c(i({},P),{children:e(s,{})})),e("h3",{id:"\u6807\u7B7E\u680F\u6EDA\u52A8","data-anchor":"\u6807\u7B7E\u680F\u6EDA\u52A8",children:"\u6807\u7B7E\u680F\u6EDA\u52A8"}),e("p",{children:"\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7 5 \u4E2A\u65F6\uFF0C\u6807\u7B7E\u680F\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u6EDA\u52A8\uFF0C\u5207\u6362\u65F6\u4F1A\u81EA\u52A8\u5C06\u5F53\u524D\u6807\u7B7E\u5C45\u4E2D\u3002"}),e(t,c(i({},f),{children:e(F,{})})),e("h3",{id:"\u7981\u7528\u6807\u7B7E","data-anchor":"\u7981\u7528\u6807\u7B7E",children:"\u7981\u7528\u6807\u7B7E"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"disabled"})," \u5C5E\u6027\u5373\u53EF\u7981\u7528\u6807\u7B7E\uFF0C\u5982\u679C\u9700\u8981\u76D1\u542C\u7981\u7528\u6807\u7B7E\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u5728 ",e("code",{children:"Tabs"})," \u4E0A\u76D1\u542C",e("code",{children:"disabled"})," \u4E8B\u4EF6\u3002"]}),e(t,c(i({},x),{children:e(b,{})})),e("h3",{id:"\u5BF9\u9F50\u65B9\u5F0F","data-anchor":"\u5BF9\u9F50\u65B9\u5F0F",children:"\u5BF9\u9F50\u65B9\u5F0F"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"align"})," \u5C5E\u6027\u5373\u53EF\u6539\u53D8\u6807\u7B7E\u680F\u5BF9\u9F50\u65B9\u5F0F\u3002"]}),e(t,c(i({},g),{children:e(m,{})})),e("h3",{id:"\u7C98\u6027\u5E03\u5C40","data-anchor":"\u7C98\u6027\u5E03\u5C40",children:"\u7C98\u6027\u5E03\u5C40"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"sticky"})," \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u7C98\u6027\u5E03\u5C40\uFF0C\u7C98\u6027\u5E03\u5C40\u4E0B\uFF0C\u6807\u7B7E\u9875\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u4F1A\u81EA\u52A8\u5438\u9876\u3002"]}),e(t,c(i({},k),{children:e(E,{})})),e("h3",{id:"\u6EDA\u52A8\u5BFC\u822A","data-anchor":"\u6EDA\u52A8\u5BFC\u822A",children:"\u6EDA\u52A8\u5BFC\u822A"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"scrollspy"})," \u548C ",e("code",{children:"sticky"})," \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\uFF0C\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u5185\u5BB9\u5C06\u4F1A\u5E73\u94FA\u5C55\u793A\u3002"]}),e(t,c(i({},N),{children:e(B,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"tabs-props","data-anchor":"tabs-props",children:"Tabs Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"active"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultActive"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"type"}),e("td",{children:"\u6837\u5F0F\u98CE\u683C\u7C7B\u578B"}),e("td",{children:e("em",{children:"line|card|capsule|jumbo"})}),e("td",{children:e("code",{children:"line"})})]}),u("tr",{children:[e("td",{children:"align"}),u("td",{children:["\u6807\u7B7E\u680F\u5BF9\u9F50\u65B9\u5F0F, \u53EF\u9009\u503C ",e("code",{children:"start"})," ",e("code",{children:"center"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"center"})})]}),u("tr",{children:[e("td",{children:"color"}),u("td",{children:["\u6807\u7B7E\u4E3B\u9898\u8272 ",e("br",{})," ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"line"})," \u65F6\uFF0C\u4E0B\u5212\u7EBF\u989C\u8272\u548C\u9009\u4E2D\u9879\u989C\u8272",e("br",{})," ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"capsule"})," \u65F6\uFF0C\u9009\u4E2D\u9879\u80CC\u666F\u8272",e("br",{})," ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"jumbo"})," \u65F6\uFF0C\u9009\u4E2D\u9879\u989C\u8272\u548C\u63CF\u8FF0\u4FE1\u606F\u80CC\u666F\u8272",e("br",{})," ",e("code",{children:"type"})," \u4E3A ",e("code",{children:"card"})," \u65F6\uFF0C\u7EBF\u6846\u8272\u548C\u9009\u4E2D\u9879\u80CC\u666F\u8272"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#ee0a24"})})]}),u("tr",{children:[e("td",{children:"background"}),e("td",{children:"\u6807\u7B7E\u680F\u80CC\u666F\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"white"})})]}),u("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"300ms"})})]}),u("tr",{children:[e("td",{children:"lineWidth"}),u("td",{children:[e("code",{children:"type"})," \u4E3A ",e("code",{children:"line"})," \u65F6\u751F\u6548\uFF0C\u5E95\u90E8\u6761\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"40px"})})]}),u("tr",{children:[e("td",{children:"lineHeight"}),u("td",{children:[e("code",{children:"type"})," \u4E3A ",e("code",{children:"line"})," \u65F6\u751F\u6548\uFF0C\u5E95\u90E8\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"3px"})})]}),u("tr",{children:[e("td",{children:"animated"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"border"}),u("td",{children:["\u662F\u5426\u663E\u793A\u6807\u7B7E\u680F\u5916\u8FB9\u6846\uFF0C\u4EC5\u5728 ",e("code",{children:'type="line"'})," \u65F6\u6709\u6548"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"ellipsis"}),u("td",{children:["\u662F\u5426\u7701\u7565\u8FC7\u957F\u7684\u6807\u9898\u6587\u5B57\uFF0C\u5BF9 ",e("code",{children:"jumbo"})," \u65E0\u6548\uFF0C"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"sticky"}),e("td",{children:"\u662F\u5426\u4F7F\u7528\u7C98\u6027\u5B9A\u4F4D\u5E03\u5C40"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"stickyInitScrollbar"}),u("td",{children:[e("code",{children:"sticky"})," \u6A21\u5F0F\u4E0B\u70B9\u51FB\u6807\u7B7E\u91CD\u7F6E\u6EDA\u52A8\u6761\u4F4D\u7F6E"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"swipeable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u624B\u52BF\u6ED1\u52A8\u5207\u6362"}),e("td",{children:e("em",{children:"boolean|TabsSwiperProps"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"lazyRender"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u5EF6\u8FDF\u6E32\u67D3\uFF08\u9996\u6B21\u5207\u6362\u5230\u6807\u7B7E\u65F6\u624D\u89E6\u53D1\u5185\u5BB9\u6E32\u67D3\uFF09"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"lazyRenderPlaceholder"}),e("td",{children:"\u542F\u5EF6\u8FDF\u6E32\u67D3\u5360\u4F4D\u7B26"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"scrollspy"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u6EDA\u52A8\u5BFC\u822A"}),e("td",{children:e("em",{children:"boolean|ScrollspyConfig"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"offsetTop"}),u("td",{children:["\u7C98\u6027\u5B9A\u4F4D\u5E03\u5C40\u4E0B\u4E0E\u9876\u90E8\u7684\u6700\u5C0F\u8DDD\u79BB\uFF0C\u652F\u6301 ",e("code",{children:"px"})," ",e("code",{children:"vw"})," ",e("code",{children:"vh"})," ",e("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"swipeThreshold"}),e("td",{children:"\u6EDA\u52A8\u9608\u503C\uFF0C\u6807\u7B7E\u6570\u91CF\u8D85\u8FC7\u9608\u503C\u4E14\u603B\u5BBD\u5EA6\u8D85\u8FC7\u6807\u7B7E\u680F\u5BBD\u5EA6\u65F6\u5F00\u59CB\u6A2A\u5411\u6EDA\u52A8"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"5"})})]}),u("tr",{children:[e("td",{children:"titleActiveColor"}),e("td",{children:"\u6807\u9898\u9009\u4E2D\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"titleInactiveColor"}),e("td",{children:"\u6807\u9898\u9ED8\u8BA4\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"beforeChange"}),u("td",{children:["\u5207\u6362\u6807\u7B7E\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u963B\u6B62\u5207\u6362\uFF0C\u652F\u6301\u8FD4\u56DE Promise"]}),e("td",{children:e("em",{children:"(name) => boolean | Promise"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"tabsswiperprops","data-anchor":"tabsswiperprops",children:"TabsSwiperProps"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"autoHeight"}),e("td",{children:"\u81EA\u9002\u5E94\u9AD8\u5EA6"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"preventScroll"}),e("td",{children:"\u662F\u5426\u963B\u6B62\u5185\u90E8\u6EDA\u52A8\u884C\u4E3A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"scrollspyconfig","data-anchor":"scrollspyconfig",children:"ScrollspyConfig"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"autoFocusLast"}),e("td",{children:"\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\u4E0B\uFF0C\u5BB9\u5668\u6EDA\u52A8\u89E6\u5E95\u65F6\u662F\u5426\u5C06\u6700\u540E\u4E00\u4E2A tab \u8F6C\u4E3A Active \u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"reachBottomThreshold"}),e("td",{children:"\u89E6\u5E95\u504F\u79FB\u91CF"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"scrollImmediate"}),e("td",{children:"\u70B9\u51FB\u6807\u7B7E\uFF0C\u7ACB\u5373\u5C55\u793A\u5BF9\u5E94\u5185\u5BB9\u533A\u57DF\uFF0C\u53D6\u6D88\u6EDA\u52A8\u52A8\u753B"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"tabpane-props","data-anchor":"tabpane-props",children:"TabPane Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode |(active: boolean) => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"description"}),u("td",{children:["\u63CF\u8FF0\u4FE1\u606F\uFF0C",e("code",{children:"type"})," \u4E3A ",e("code",{children:"jumbo"})," \u65F6\u751F\u6548"]}),e("td",{children:e("em",{children:"ReactNode |(active: boolean) => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6807\u7B7E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"badge"}),e("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9"}),e("td",{children:u("em",{children:["number | string|",e("a",{href:"/components/badge#props",children:"BadgeProps"})]})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u7B7E\u540D\u79F0\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u6807\u7B7E\u7684\u7D22\u5F15\u503C"})]}),u("tr",{children:[e("td",{children:"titleStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"titleClass"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6807\u9898\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"tabs-events","data-anchor":"tabs-events",children:"Tabs Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClickTab"}),e("td",{children:"\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:u("em",{children:["{"," name: string | number, event: MouseEvent, disabled: boolean ","}"]})})]}),u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"name: string | number, tabIndex: number"})})]}),u("tr",{children:[e("td",{children:"onScroll"}),e("td",{children:"\u6EDA\u52A8\u65F6\u89E6\u53D1\uFF0C\u4EC5\u5728 sticky \u6A21\u5F0F\u4E0B\u751F\u6548"}),e("td",{children:u("em",{children:["{"," scrollTop: number, isFixed: boolean ","}"]})})]})]})]}),e("blockquote",{children:u("p",{children:[e("code",{children:"\u63D0\u793A\uFF1AonClick"})," \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",e("code",{children:"onClickTab"})," \u4E8B\u4EF6\u4EE3\u66FF\u3002"]})}),e("h3",{id:"tabs-\u65B9\u6CD5","data-anchor":"tabs-\u65B9\u6CD5",children:"Tabs \u65B9\u6CD5"}),u("p",{children:["\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Tabs \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",e("a",{href:"/guide/advanced-usage",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"resize"}),e("td",{children:"\u5916\u5C42\u5143\u7D20\u5927\u5C0F\u6216\u7EC4\u4EF6\u663E\u793A\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u6765\u89E6\u53D1\u91CD\u7ED8"}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"scrollTo"}),e("td",{children:"\u6EDA\u52A8\u5230\u6307\u5B9A\u7684\u6807\u7B7E\u9875\uFF0C\u5728\u6EDA\u52A8\u5BFC\u822A\u6A21\u5F0F\u4E0B\u53EF\u7528"}),e("td",{children:e("em",{children:"name: string | number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"swiper.disable"}),u("td",{children:["\u5F00\u542F ",e("code",{children:"swipeable"}),"\u540E\u83B7\u5F97\uFF0C \u7981\u7528 Swiper \u80FD\u529B\uFF08\u5982\u679C\u5DF2\u542F\u7528\uFF09"]}),e("td",{children:"-"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"swiper.enable"}),u("td",{children:["\u5F00\u542F ",e("code",{children:"swipeable"}),"\u540E\u83B7\u5F97\uFF0C \u52A8\u6001\u542F\u7528 Swiper \u80FD\u529B\uFF08\u5982\u679C\u5DF2\u7ECF\u7981\u7528\uFF09"]}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-tab-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-active-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-default-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-line-height"}),e("td",{children:e("em",{children:"44px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-card-height"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-nav-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-bottom-bar-width"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-bottom-bar-height"}),e("td",{children:e("em",{children:"3px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-bottom-bar-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tabs-jumbo-height"}),e("td",{children:e("em",{children:"64px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-capsule-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xs) var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-jumbo-title-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-description-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-description-color"}),e("td",{children:e("em",{children:"var(--rv-grey-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-tab-description-background-color"}),e("td",{children:e("em",{children:"var(--rv-grey-6)"})}),e("td",{children:"-"})]})]})]})]})})},w=[{Component:o,key:"tabs-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"tabs-demo",title:"\u901A\u8FC7\u540D\u79F0\u5339\u914D"},{Component:F,key:"tabs-demo-1",title:"\u6807\u7B7E\u680F\u6EDA\u52A8"},{Component:b,key:"tabs-demo-2",title:"\u7981\u7528\u6807\u7B7E"},{Component:m,key:"tabs-demo-3",title:"\u5BF9\u9F50\u65B9\u5F0F"},{Component:E,key:"tabs-demo-4",title:"\u7C98\u6027\u5E03\u5C40"},{Component:B,key:"tabs-demo-5",title:"\u6EDA\u52A8\u5BFC\u822A"}],j=void 0,M=[{depth:1,text:"Tabs \u6807\u7B7E\u9875",id:"tabs-\u6807\u7B7E\u9875"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",id:"\u901A\u8FC7\u540D\u79F0\u5339\u914D"},{depth:3,text:"\u6807\u7B7E\u680F\u6EDA\u52A8",id:"\u6807\u7B7E\u680F\u6EDA\u52A8"},{depth:3,text:"\u7981\u7528\u6807\u7B7E",id:"\u7981\u7528\u6807\u7B7E"},{depth:3,text:"\u5BF9\u9F50\u65B9\u5F0F",id:"\u5BF9\u9F50\u65B9\u5F0F"},{depth:3,text:"\u7C98\u6027\u5E03\u5C40",id:"\u7C98\u6027\u5E03\u5C40"},{depth:3,text:"\u6EDA\u52A8\u5BFC\u822A",id:"\u6EDA\u52A8\u5BFC\u822A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Tabs Props",id:"tabs-props"},{depth:3,text:"TabsSwiperProps",id:"tabsswiperprops"},{depth:3,text:"ScrollspyConfig",id:"scrollspyconfig"},{depth:3,text:"TabPane Props",id:"tabpane-props"},{depth:3,text:"Tabs Events",id:"tabs-events"},{depth:3,text:"Tabs \u65B9\u6CD5",id:"tabs-\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],R="/src/components/tabs/README.md",S="Tabs \u6807\u7B7E\u9875",I="1658500653000";var H=n=>n.children({MdContent:$,demos:w,frontmatter:j,slugs:M,filePath:R,title:S,updatedTime:I});export{$ as MdContent,H as default,w as demos,R as filePath,j as frontmatter,M as slugs,S as title,I as updatedTime};
