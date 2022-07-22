var C=Object.defineProperty,F=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var l=(r,n,u)=>n in r?C(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u,a=(r,n)=>{for(var u in n||(n={}))m.call(n,u)&&l(r,u,n[u]);if(h)for(var u of h(n))A.call(n,u)&&l(r,u,n[u]);return r},o=(r,n)=>F(r,E(n));import{a as d,j as e}from"./main.531c777e.js";import{dO as c,e8 as t,C as i}from"./WaterMark.6f52b203.js";const x=[],s=[1,2,3,4,5,6,8,9,10],p="A".charCodeAt(0);for(let r=0;r<26;r+=1)x.push(String.fromCharCode(p+r));var B=()=>d(c,{children:[e(c.TabPane,{title:"\u57FA\u7840\u7528\u6CD5",children:e(t,{children:x.map(r=>d("div",{children:[e(t.Anchor,{index:r}),e(i,{title:"\u6587\u672C"}),e(i,{title:"\u6587\u672C"}),e(i,{title:"\u6587\u672C"})]},r))})}),e(c.TabPane,{title:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868",children:e(t,{indexList:s,children:s.map(r=>d("div",{children:[d(t.Anchor,{index:r,children:["\u6807\u9898 ",r]}),e(i,{title:"\u6587\u672C"}),e(i,{title:"\u6587\u672C"}),e(i,{title:"\u6587\u672C"})]},r))})})]});const b=`import React from 'react';
import { IndexBar, Tabs, Cell } from 'react-vant';

const indexList = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i += 1) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

export default () => {
  return (
    <Tabs>
      <Tabs.TabPane title="\u57FA\u7840\u7528\u6CD5">
        <IndexBar>
          {indexList.map((item) => (
            <div key={item}>
              <IndexBar.Anchor index={item} />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
      <Tabs.TabPane title="\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868">
        <IndexBar indexList={customIndexList}>
          {customIndexList.map((item) => (
            <div key={item}>
              <IndexBar.Anchor index={item}>\u6807\u9898 {item}</IndexBar.Anchor>
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
    </Tabs>
  );
};
`,v={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { IndexBar, Tabs, Cell } from 'react-vant';

const indexList = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i += 1) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

export default () => {
  return (
    <Tabs>
      <Tabs.TabPane title="\u57FA\u7840\u7528\u6CD5">
        <IndexBar>
          {indexList.map((item) => (
            <div key={item}>
              <IndexBar.Anchor index={item} />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
      <Tabs.TabPane title="\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868">
        <IndexBar indexList={customIndexList}>
          {customIndexList.map((item) => (
            <div key={item}>
              <IndexBar.Anchor index={item}>\u6807\u9898 {item}</IndexBar.Anchor>
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
              <Cell title="\u6587\u672C" />
            </div>
          ))}
        </IndexBar>
      </Tabs.TabPane>
    </Tabs>
  );
};
`}},key:"index-bar-demo",meta:{}},D=function({previewer:r=()=>null,api:n=()=>null}){const u=r;return e("div",{children:d("div",{children:[e("h1",{id:"indexbar-\u7D22\u5F15\u680F","data-anchor":"indexbar-\u7D22\u5F15\u680F",children:"IndexBar \u7D22\u5F15\u680F"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(u,{code:"import { IndexBar } from 'react-vant';",lang:"js"}),e("blockquote",{children:d("p",{children:["\u6CE8\u610F: IndexBar \u5D4C\u5957\u5728 Tabs \u7EC4\u4EF6\u4E2D\u65F6\uFF0C\u8BF7\u5173\u95ED Tabs \u7684 animated \u548C swipeable \u5C5E\u6027\uFF0C\u8BE6\u89C1",e("a",{href:"https://github.com/3lang3/react-vant/issues/70",children:"Tabs \u548C IndexBar \u7EC4\u5408\u4F7F\u7528\u95EE\u9898"})]})}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),d("ul",{children:[d("li",{children:["\u70B9\u51FB\u7D22\u5F15\u680F\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684 ",e("code",{children:"IndexAnchor"})," \u951A\u70B9\u4F4D\u7F6E\u3002"]}),d("li",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"indexList"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u5C55\u793A\u7684\u7D22\u5F15\u5B57\u7B26\u5217\u8868\u3002"]})]}),e(u,o(a({},v),{children:e(B,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"indexbar-props","data-anchor":"indexbar-props",children:"IndexBar Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"indexList"}),e("td",{children:"\u7D22\u5F15\u5B57\u7B26\u5217\u8868"}),e("td",{children:e("em",{children:"string[] | number[]"})}),e("td",{children:e("code",{children:"A-Z"})})]}),d("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"z-index \u5C42\u7EA7"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),d("tr",{children:[e("td",{children:"sticky"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u951A\u70B9\u81EA\u52A8\u5438\u9876"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"stickyOffsetTop"}),e("td",{children:"\u951A\u70B9\u81EA\u52A8\u5438\u9876\u65F6\u4E0E\u9876\u90E8\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]}),d("tr",{children:[e("td",{children:"highlightColor"}),e("td",{children:"\u7D22\u5F15\u5B57\u7B26\u9AD8\u4EAE\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),d("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u7D22\u5F15\u680F\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"Element|() => Element"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"indexanchor-props","data-anchor":"indexanchor-props",children:"IndexAnchor Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:d("tr",{children:[e("td",{children:"index"}),e("td",{children:"\u7D22\u5F15\u5B57\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"indexbar-events","data-anchor":"indexbar-events",children:"IndexBar Events"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u7D22\u5F15\u680F\u7684\u5B57\u7B26\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number | string"})})]}),d("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u524D\u9AD8\u4EAE\u7684\u7D22\u5F15\u5B57\u7B26\u53D8\u5316\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"index: number | string"})})]})]})]}),e("h3",{id:"indexbar-\u65B9\u6CD5","data-anchor":"indexbar-\u65B9\u6CD5",children:"IndexBar \u65B9\u6CD5"}),d("p",{children:["\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 IndexBar \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",e("a",{href:"/guide/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:d("tr",{children:[e("td",{children:"scrollTo"}),e("td",{children:"\u6EDA\u52A8\u5230\u6307\u5B9A\u951A\u70B9"}),e("td",{children:e("em",{children:"index: number | string"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(u,{code:"import type { IndexBarInstance } from 'react-vant';",lang:"ts"}),d("p",{children:[e("code",{children:"IndexBarInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(u,{code:`import { useRef } from 'react';
import type { IndexBarInstance } from 'react-vant';

const indexBarRef = useRef<IndexBarInstance>(null);

indexBarRef.current?.scrollTo('B');`,lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),d("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"--rv-index-bar-sidebar-z-index"}),e("td",{children:e("em",{children:"2"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-bar-index-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-xs)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-bar-index-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-bar-index-active-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-font-weight"}),e("td",{children:e("em",{children:"var(--rv-font-weight-bold)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-line-height"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-background-color"}),e("td",{children:e("em",{children:"transparent"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-sticky-text-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-index-anchor-sticky-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},I=[{Component:B,key:"index-bar-demo"}],f=void 0,g=[{depth:1,text:"IndexBar \u7D22\u5F15\u680F",id:"indexbar-\u7D22\u5F15\u680F"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"IndexBar Props",id:"indexbar-props"},{depth:3,text:"IndexAnchor Props",id:"indexanchor-props"},{depth:3,text:"IndexBar Events",id:"indexbar-events"},{depth:3,text:"IndexBar \u65B9\u6CD5",id:"indexbar-\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],T="/src/components/index-bar/README.md",P="IndexBar \u7D22\u5F15\u680F",y="1658500653000";var R=r=>r.children({MdContent:D,demos:I,frontmatter:f,slugs:g,filePath:T,title:P,updatedTime:y});export{D as MdContent,R as default,I as demos,T as filePath,f as frontmatter,g as slugs,P as title,y as updatedTime};
