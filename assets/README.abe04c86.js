var p=Object.defineProperty,C=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(n,t,r)=>t in n?p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,d=(n,t)=>{for(var r in t||(t={}))m.call(t,r)&&h(n,r,t[r]);if(l)for(var r of l(t))g.call(t,r)&&h(n,r,t[r]);return n},i=(n,t)=>C(n,B(t));import{R as a,a as e,j as u}from"./main.531c777e.js";import{B as c,e6 as A}from"./WaterMark.6f52b203.js";const o={content:"react vant"},D={image:{src:"/rv-watermark.svg",width:115,height:27},width:120,height:60};var F=()=>{const[n,t]=a.useState(o),[r,s]=a.useState(!0);return e("div",{className:"water-mark-overlay",children:[u(c,{onClick:()=>t(o),children:"\u666E\u901A\u6C34\u5370"}),u("br",{}),u(c,{onClick:()=>t(D),children:"\u56FE\u7247\u6C34\u5370"}),u("br",{}),u(c,{onClick:()=>s(E=>!E),children:r?"\u5C40\u90E8\u533A\u57DF":"\u6574\u4E2A\u9875\u9762"}),u(A,i(d({},n),{fullPage:r}))]})};const P=`import React from 'react'
import { Button, WaterMark } from 'react-vant'

import './style.less'

const textProps = {
  content: 'react vant',
}

const imageProps = {
  image: {
    src: '/rv-watermark.svg',
    width: 115,
    height: 27
  },
  width: 120,
  height: 60,
}

export default () => {
  const [props, setProps] = React.useState<{ [key: string]: any }>(textProps)
  const [fullPage, setFullPage] = React.useState(true)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>\u666E\u901A\u6C34\u5370</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>\u56FE\u7247\u6C34\u5370</Button>
      <br />
      <Button onClick={() => setFullPage(v => !v)}>{ fullPage ? '\u5C40\u90E8\u533A\u57DF' : '\u6574\u4E2A\u9875\u9762' }</Button>
      <WaterMark {...props} fullPage={fullPage} />
    </div>
  )
}
`,v={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button, WaterMark } from 'react-vant'

import './style.less'

const textProps = {
  content: 'react vant',
}

const imageProps = {
  image: {
    src: '/rv-watermark.svg',
    width: 115,
    height: 27
  },
  width: 120,
  height: 60,
}

export default () => {
  const [props, setProps] = React.useState<{ [key: string]: any }>(textProps)
  const [fullPage, setFullPage] = React.useState(true)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>\u666E\u901A\u6C34\u5370</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>\u56FE\u7247\u6C34\u5370</Button>
      <br />
      <Button onClick={() => setFullPage(v => !v)}>{ fullPage ? '\u5C40\u90E8\u533A\u57DF' : '\u6574\u4E2A\u9875\u9762' }</Button>
      <WaterMark {...props} fullPage={fullPage} />
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.water-mark-overlay {
  padding: 12px;
  position: relative;
  button {
    margin-bottom: 12px;
  }
}
`}},key:"water-mark-custom",meta:{title:"\u57FA\u7840\u4F7F\u7528"}},k=function({previewer:n=()=>null,api:t=()=>null}){const r=n;return u("div",{children:e("div",{children:[u("h1",{id:"watermark-\u6C34\u5370","data-anchor":"watermark-\u6C34\u5370",children:"WaterMark \u6C34\u5370"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7ED9\u9875\u9762\u7684\u67D0\u4E2A\u533A\u57DF\u52A0\u4E0A\u6C34\u5370\uFF0C\u652F\u6301\u6587\u5B57\u548C\u56FE\u6848\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u("p",{children:"\u9002\u7528\u4E8E\u9632\u6B62\u4FE1\u606F\u76D7\u7528\u3001\u6807\u8BC6\u7248\u6743\u65F6\u4F7F\u7528\u3002"}),u(r,{code:"import { WaterMark } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:"\u6C34\u5370\u7EC4\u4EF6\u9ED8\u8BA4\u5B9E\u73B0\u4E3A\u524D\u7F6E\u6C34\u5370\uFF0C\u5373\u8BBE\u60F3\u6C34\u5370\u4F1A\u663E\u793A\u5728\u5185\u5BB9\u7684\u4E0A\u65B9\uFF0CzIndex \u9ED8\u8BA4\u8BBE\u7F6E\u4E3A 2000\uFF0C\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u6C34\u5370\u906E\u6321\u4E0A\u5C42\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8C03\u6574\u8BE5\u503C\u5230\u5C0F\u4E8E\u4E0A\u5C42\u5185\u5BB9\u7684 zIndex\u3002"}),u(r,i(d({},v),{children:u(F,{})})),u("blockquote",{children:u("p",{children:"\u901A\u8FC7 image \u6307\u5B9A\u56FE\u7247\u5730\u5740\u3002\u4E3A\u4FDD\u8BC1\u56FE\u7247\u9AD8\u6E05\u4E14\u4E0D\u88AB\u62C9\u4F38\uFF0C\u8BF7\u4F20\u5165\u6C34\u5370\u56FE\u7247\u7684\u5BBD\u9AD8 width \u548C height, \u5E76\u4E0A\u4F20\u81F3\u5C11\u4E24\u500D\u7684\u5BBD\u9AD8\u7684 logo \u56FE\u7247\u5730\u5740\u3002"})}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"width"}),u("td",{children:"\u6C34\u5370\u7684\u5BBD\u5EA6"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"100"})})]}),e("tr",{children:[u("td",{children:"height"}),u("td",{children:"\u6C34\u5370\u7684\u9AD8\u5EA6"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"64"})})]}),e("tr",{children:[u("td",{children:"rotate"}),u("td",{children:"\u6C34\u5370\u7ED8\u5236\u65F6\uFF0C\u65CB\u8F6C\u7684\u89D2\u5EA6\uFF0C\u5355\u4F4D \xB0"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"-22"})})]}),e("tr",{children:[u("td",{children:"image"}),u("td",{children:"\u56FE\u7247\u6E90\uFF0C\u5EFA\u8BAE\u5BFC\u51FA 2 \u500D\u6216 3 \u500D\u56FE\uFF0C\u4F18\u5148\u4F7F\u7528\u56FE\u7247\u6E32\u67D3\u6C34\u5370"}),u("td",{children:u("a",{href:"#imageprops",children:"ImageProps"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"zIndex"}),u("td",{children:"\u8FFD\u52A0\u7684\u6C34\u5370\u5143\u7D20\u7684 z-index"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"2000"})})]}),e("tr",{children:[u("td",{children:"content"}),u("td",{children:"\u6C34\u5370\u6587\u5B57\u5185\u5BB9"}),u("td",{children:u("code",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"font"}),u("td",{children:"canvas \u6587\u5B57\u5C5E\u6027\u8BBE\u7F6E"}),u("td",{children:u("a",{href:"#imageprops",children:"FontProps"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"gapX"}),u("td",{children:"\u6C34\u5370\u4E4B\u95F4\u7684\u6C34\u5E73\u95F4\u8DDD"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"24"})})]}),e("tr",{children:[u("td",{children:"gapY"}),u("td",{children:"\u6C34\u5370\u4E4B\u95F4\u7684\u5782\u76F4\u95F4\u8DDD"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:u("code",{children:"48"})})]}),e("tr",{children:[u("td",{children:"fullPage"}),u("td",{children:"\u662F\u5426\u8986\u76D6\u6574\u4E2A\u9875\u9762"}),u("td",{children:u("code",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]})]})]}),u("h3",{id:"imageprops","data-anchor":"imageprops",children:"ImageProps"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"src"}),u("td",{children:"\u56FE\u7247\u6E90\uFF0C\u5EFA\u8BAE\u5BFC\u51FA 2 \u500D\u6216 3 \u500D\u56FE\uFF0C\u4F18\u5148\u4F7F\u7528\u56FE\u7247\u6E32\u67D3\u6C34\u5370"}),u("td",{children:u("code",{children:"[ImageProps](#imageprops)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"width"}),u("td",{children:"\u56FE\u7247\u5BBD\u5EA6"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"height"}),u("td",{children:"\u56FE\u7247\u9AD8\u5EA6"}),u("td",{children:u("code",{children:"number"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"fontprops","data-anchor":"fontprops",children:"FontProps"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"color"}),u("td",{children:"\u6C34\u5370\u6587\u5B57\u989C\u8272"}),u("td",{children:u("code",{children:"string"})}),u("td",{children:u("code",{children:"rgba(0, 0, 0, .15)"})})]}),e("tr",{children:[u("td",{children:"size"}),u("td",{children:"\u6587\u5B57\u5927\u5C0F"}),u("td",{children:u("code",{children:"string | number"})}),u("td",{children:u("code",{children:"16"})})]}),e("tr",{children:[u("td",{children:"style"}),u("td",{children:"\u89C4\u5B9A\u5B57\u4F53\u6837\u5F0F"}),u("td",{children:u("code",{children:"string | number"})}),u("td",{children:u("code",{children:"normal"})})]}),e("tr",{children:[u("td",{children:"weight"}),u("td",{children:"\u89C4\u5B9A\u5B57\u4F53\u7684\u7C97\u7EC6"}),u("td",{children:u("code",{children:"string "})}),u("td",{children:u("code",{children:"normal"})})]}),e("tr",{children:[u("td",{children:"family"}),u("td",{children:"\u89C4\u5B9A\u5B57\u4F53\u7CFB\u5217"}),u("td",{children:u("code",{children:"string | number"})}),u("td",{children:u("code",{children:"sans-serif"})})]})]})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"--rv-water-mark-z-index"}),u("td",{children:u("em",{children:"2000"})}),u("td",{children:"-"})]})})]})]})})},f=[{Component:F,key:"water-mark-custom",title:"\u57FA\u7840\u4F7F\u7528"}],x={simulator:{compact:!0}},b=[{depth:1,text:"WaterMark \u6C34\u5370",id:"watermark-\u6C34\u5370"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"ImageProps",id:"imageprops"},{depth:3,text:"FontProps",id:"fontprops"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],w="/src/components/water-mark/README.md",y="WaterMark \u6C34\u5370",M="1658500653000";var S=n=>n.children({MdContent:k,demos:f,frontmatter:x,slugs:b,filePath:w,title:y,updatedTime:M});export{k as MdContent,S as default,f as demos,w as filePath,x as frontmatter,b as slugs,y as title,M as updatedTime};
