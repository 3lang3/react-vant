var p=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var A=(n,i,t)=>i in n?p(n,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[i]=t,f=(n,i)=>{for(var t in i||(i={}))y.call(i,t)&&A(n,t,i[t]);if(B)for(var t of B(i))x.call(i,t)&&A(n,t,i[t]);return n},m=(n,i)=>b(n,v(i));import{j as u,a as e,r as l}from"./main.e1d4ee0c.js";import{dQ as c,e0 as E,C as h,dR as R}from"./FloatingPanel.8c6bdeb7.js";async function D(n){return new Promise((i,t)=>{setTimeout(()=>{n&&t(new Error("error")),i(Array.from({length:10},(a,o)=>o))},2e3)})}const P=()=>{const[n,i]=l.exports.useState([]),[t,a]=l.exports.useState(!1);return u(E,{finished:t,onLoad:async()=>{const F=await D();i(r=>[...r,...F]),n.length>=30&&a(!0)},children:n.map((F,r)=>u(h,{title:r+1},r))})},T=()=>{const[n,i]=l.exports.useState([]),[t,a]=l.exports.useState(!1),[o,F]=l.exports.useState(0);return u(E,{finished:t,errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",onLoad:async()=>{F(s=>s+1);const d=await D(o===1);i(s=>[...s,...d]),n.length>=30&&a(!0)},children:n.map((d,s)=>u(h,{title:s+1},s))})},w=()=>{const[n,i]=l.exports.useState([]),[t,a]=l.exports.useState(!1),o=async r=>{const d=await D();i(s=>{const C=r?d:[...s,...d];return C.length>=30&&a(!0),C})};return u(R,{onRefresh:async()=>{a(!1),await o(1)},children:u(E,{finished:t,onLoad:o,children:n.map((r,d)=>u(h,{title:d+1},d))})})};var L=()=>u("div",{className:"demo-list",children:e(c,{sticky:!0,children:[u(c.TabPane,{title:"\u57FA\u672C\u7528\u6CD5",children:u(P,{})}),u(c.TabPane,{title:"\u9519\u8BEF\u63D0\u793A",children:u(T,{})}),u(c.TabPane,{title:"\u4E0B\u62C9\u5237\u65B0",children:u(w,{})})]})});const g=`/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { PullRefresh, List, Tabs, Cell } from 'react-vant'
import './style.less'

// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'))
      }
      resolve(Array.from({ length: 10 }, (_, i) => i))
    }, 2000)
  })
}

// \u57FA\u7840\u7528\u6CD5
const BaseDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)

  const onLoad = async () => {
    const data = await getData()
    setList(v => [...v, ...data])
    if (list.length >= 30) {
      setFinished(true)
    }
  }
  return (
    <List finished={finished} onLoad={onLoad}>
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  )
}

// \u9519\u8BEF\u63D0\u793A
const ErrorDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)
  const [count, setCount] = useState(0)

  const onLoad = async () => {
    setCount(v => v + 1)
    const data = await getData(count === 1)
    setList(v => [...v, ...data])
    if (list.length >= 30) {
      setFinished(true)
    }
  }

  return (
    <List
      finished={finished}
      errorText='\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D'
      onLoad={onLoad}
    >
      {/* \u82E5 onLoad \u629B\u51FA\u9519\u8BEF\uFF0C\u5C06\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 onLoad \u4E8B\u4EF6 */}
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  )
}

// \u4E0B\u62C9\u5237\u65B0
const PullRefreshDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData()
    setList(v => {
      const newList = isRefresh ? data : [...v, ...data]
      if (newList.length >= 30) {
        setFinished(true)
      }
      return newList
    })
  }

  const onRefresh = async () => {
    setFinished(false)
    await onLoadRefresh(1)
  }

  return (
    <PullRefresh onRefresh={onRefresh}>
      {/* List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E PullRefresh \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C */}
      <List finished={finished} onLoad={onLoadRefresh}>
        {list.map((_, i) => (
          <Cell key={i} title={i + 1} />
        ))}
      </List>
    </PullRefresh>
  )
}

export default () => (
  <div className='demo-list'>
    <Tabs sticky>
      <Tabs.TabPane title='\u57FA\u672C\u7528\u6CD5'>
        <BaseDemo />
      </Tabs.TabPane>
      <Tabs.TabPane title='\u9519\u8BEF\u63D0\u793A'>
        <ErrorDemo />
      </Tabs.TabPane>
      <Tabs.TabPane title='\u4E0B\u62C9\u5237\u65B0'>
        <PullRefreshDemo />
      </Tabs.TabPane>
    </Tabs>
  </div>
)
`,S={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.3.5"},"index.tsx":{type:"FILE",value:`/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { PullRefresh, List, Tabs, Cell } from 'react-vant'
import './style.less'

// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'))
      }
      resolve(Array.from({ length: 10 }, (_, i) => i))
    }, 2000)
  })
}

// \u57FA\u7840\u7528\u6CD5
const BaseDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)

  const onLoad = async () => {
    const data = await getData()
    setList(v => [...v, ...data])
    if (list.length >= 30) {
      setFinished(true)
    }
  }
  return (
    <List finished={finished} onLoad={onLoad}>
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  )
}

// \u9519\u8BEF\u63D0\u793A
const ErrorDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)
  const [count, setCount] = useState(0)

  const onLoad = async () => {
    setCount(v => v + 1)
    const data = await getData(count === 1)
    setList(v => [...v, ...data])
    if (list.length >= 30) {
      setFinished(true)
    }
  }

  return (
    <List
      finished={finished}
      errorText='\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D'
      onLoad={onLoad}
    >
      {/* \u82E5 onLoad \u629B\u51FA\u9519\u8BEF\uFF0C\u5C06\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 onLoad \u4E8B\u4EF6 */}
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  )
}

// \u4E0B\u62C9\u5237\u65B0
const PullRefreshDemo = () => {
  const [list, setList] = useState<Array<number>>([])
  const [finished, setFinished] = useState<boolean>(false)

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData()
    setList(v => {
      const newList = isRefresh ? data : [...v, ...data]
      if (newList.length >= 30) {
        setFinished(true)
      }
      return newList
    })
  }

  const onRefresh = async () => {
    setFinished(false)
    await onLoadRefresh(1)
  }

  return (
    <PullRefresh onRefresh={onRefresh}>
      {/* List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E PullRefresh \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C */}
      <List finished={finished} onLoad={onLoadRefresh}>
        {list.map((_, i) => (
          <Cell key={i} title={i + 1} />
        ))}
      </List>
    </PullRefresh>
  )
}

export default () => (
  <div className='demo-list'>
    <Tabs sticky>
      <Tabs.TabPane title='\u57FA\u672C\u7528\u6CD5'>
        <BaseDemo />
      </Tabs.TabPane>
      <Tabs.TabPane title='\u9519\u8BEF\u63D0\u793A'>
        <ErrorDemo />
      </Tabs.TabPane>
      <Tabs.TabPane title='\u4E0B\u62C9\u5237\u65B0'>
        <PullRefreshDemo />
      </Tabs.TabPane>
    </Tabs>
  </div>
)
`},"style.less":{type:"FILE",value:`.demo-list {
  .rv-cell {
    text-align: center;
  }
}
`}},key:"list-base",meta:{}},_=function({previewer:n=()=>null,api:i=()=>null}){const t=n;return u("div",{children:e("div",{children:[u("h1",{id:"list-\u5217\u8868","data-anchor":"list-\u5217\u8868",children:"List \u5217\u8868"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7011\u5E03\u6D41\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u7528\u4E8E\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5F53\u5217\u8868\u5373\u5C06\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5E76\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(t,{code:"import { List } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["List \u7EC4\u4EF6\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",u("code",{children:"onLoad"})," \u4E8B\u4EF6\uFF0C\u6B64\u65F6\u53EF\u4EE5\u53D1\u8D77\u5F02\u6B65\u64CD\u4F5C\u5E76\u66F4\u65B0\u6570\u636E\uFF0C\u82E5\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5219\u76F4\u63A5\u5C06 ",u("code",{children:"finished"})," \u8BBE\u7F6E\u6210 ",u("code",{children:"true"})," \u5373\u53EF\u3002"]}),u("ul",{children:u("li",{children:u("strong",{children:"List \u5185\u90E8\u5305\u542B\u4E86\u9632\u6B62\u5E76\u53D1\u7684\u91CD\u590D\u8BF7\u6C42\u7684\u903B\u8F91\uFF0C\u4F7F\u7528\u4E2D\u4E0D\u9700\u8981\u989D\u5916\u5904\u7406"})})}),u(t,m(f({},S),{children:u(L,{})})),u("blockquote",{children:u("p",{children:"\u548C vant \u4E0D\u540C\u7684\u662F\uFF0Creact vant \u5728\u7EC4\u4EF6\u5185\u90E8\u7EF4\u62A4\u4E86 loading \u548C error \u72B6\u6001\u3002"})}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onLoad"}),e("td",{children:["\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E ",u("code",{children:"offset"})," \u65F6\u89E6\u53D1"]}),u("td",{children:u("em",{children:"(isRetry: boolean) => (Promise | void)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"finished"}),e("td",{children:["\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u4E0D\u518D\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"offset"}),u("td",{children:"\u89E6\u53D1\u52A0\u8F7D\u4E8B\u4EF6\u7684\u6EDA\u52A8\u89E6\u5E95\u8DDD\u79BB\u9608\u503C"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:u("code",{children:"300"})})]}),e("tr",{children:[u("td",{children:"loadingText"}),u("td",{children:"\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u52A0\u8F7D\u4E2D..."})})]}),e("tr",{children:[u("td",{children:"finishedText"}),u("td",{children:"\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"errorText"}),u("td",{children:"\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"React.ReactNode | ((retry: () => void) => React.ReactNode)"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"ref"})," \u53EF\u4EE5\u83B7\u53D6\u5230 ",u("code",{children:"List"})," \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"check"}),u("td",{children:"\u68C0\u67E5\u5F53\u524D\u7684\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u82E5\u5DF2\u6EDA\u52A8\u81F3\u5E95\u90E8\uFF0C\u5219\u4F1A\u89E6\u53D1 onLoad \u4E8B\u4EF6"}),u("td",{children:"-"}),u("td",{children:"-"})]})})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-list-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-text-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-text-line-height"}),u("td",{children:u("em",{children:"50px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-loading-icon-size"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48","data-anchor":"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48",children:"List \u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48\uFF1F"}),e("p",{children:[u("code",{children:"List"})," \u4F1A\u76D1\u542C\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u4E8B\u4EF6\u5E76\u8BA1\u7B97\u5217\u8868\u7684\u4F4D\u7F6E\uFF0C\u5F53\u5217\u8868\u5E95\u90E8\u4E0E\u53EF\u89C6\u533A\u57DF\u7684\u8DDD\u79BB\u5C0F\u4E8E ",u("code",{children:"offset"})," \u65F6\uFF0CList \u4F1A\u89E6\u53D1\u4E00\u6B21 load \u4E8B\u4EF6\u3002"]}),u("h3",{id:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6","data-anchor":"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6",children:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F"}),e("p",{children:["\u5982\u679C\u4E00\u6B21\u8BF7\u6C42\u52A0\u8F7D\u7684\u6570\u636E\u6761\u6570\u8F83\u5C11\uFF0C\u5BFC\u81F4\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u94FA\u6EE1\u5F53\u524D\u5C4F\u5E55\uFF0C",u("code",{children:"List"})," \u4F1A\u7EE7\u7EED\u89E6\u53D1 ",u("code",{children:"onLoad"})," \u4E8B\u4EF6\uFF0C\u76F4\u5230\u5185\u5BB9\u94FA\u6EE1\u5C4F\u5E55\u6216\u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210\u3002\u56E0\u6B64\u4F60\u9700\u8981\u8C03\u6574\u6BCF\u6B21\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\u6BCF\u6B21\u8BF7\u6C42\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\u5E94\u80FD\u591F\u586B\u6EE1\u4E00\u5C4F\u9AD8\u5EA6\u3002"]}),u("h3",{id:"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D","data-anchor":"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D",children:"\u5728 html\u3001body \u4E0A\u8BBE\u7F6E overflow \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F"}),e("p",{children:["\u5982\u679C\u5728 html \u548C body \u6807\u7B7E\u4E0A\u8BBE\u7F6E\u4E86",u("code",{children:"overflow-x: hidden"}),"\u6837\u5F0F\uFF0C\u4F1A\u5BFC\u81F4 List \u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\u3002"]}),u(t,{code:`html,
body {
  overflow-x: hidden;
}`,lang:"css"}),e("p",{children:["\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\u5F53\u5143\u7D20\u8BBE\u7F6E\u4E86",u("code",{children:"overflow-x: hidden"}),"\u6837\u5F0F\u65F6\uFF0C\u8BE5\u5143\u7D20\u7684",u("code",{children:"overflow-y"}),"\u4F1A\u88AB\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E3A",u("code",{children:"auto"}),"\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u503C",u("code",{children:"visible"}),"\uFF0C\u5BFC\u81F4 List \u65E0\u6CD5\u6B63\u786E\u5730\u5224\u65AD\u6EDA\u52A8\u5BB9\u5668\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\u53BB\u9664\u8BE5\u6837\u5F0F\uFF0C\u6216\u8005\u5728 html \u548C body \u6807\u7B7E\u4E0A\u6DFB\u52A0",u("code",{children:"height: 100%"}),"\u6837\u5F0F\u3002"]})]})})},k=[{Component:L,key:"list-base"}],N=void 0,j=[{depth:1,text:"List \u5217\u8868",id:"list-\u5217\u8868"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"List \u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48\uFF1F",id:"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48"},{depth:3,text:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F",id:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6"},{depth:3,text:"\u5728 html\u3001body \u4E0A\u8BBE\u7F6E overflow \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F",id:"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D"}],M="/src/components/list/README.md",I="List \u5217\u8868",z="1716457297000";var H=n=>n.children({MdContent:_,demos:k,frontmatter:N,slugs:j,filePath:M,title:I,updatedTime:z});export{_ as MdContent,H as default,k as demos,M as filePath,N as frontmatter,j as slugs,I as title,z as updatedTime};
