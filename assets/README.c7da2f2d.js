var F=Object.defineProperty,h=Object.defineProperties;var s=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,n,t)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))g.call(n,t)&&p(e,t,n[t]);return e},r=(e,n)=>h(e,s(n));import{j as u,F as E,r as y,a}from"./main.531c777e.js";import{I as o,dZ as D,T as z}from"./WaterMark.6f52b203.js";const C=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg","https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg","https://img.yzcdn.cn/vant/apple-7.jpg"];var i=()=>u(E,{children:C.map(e=>u(o,{lazyload:!0,src:e},e))});const v={code:`import React from 'react';
import { Image } from 'react-vant';
import './demo/style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

export default () => {
  return (
    <>
      {imageList.map((img) => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Image } from 'react-vant';
import './demo/style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

export default () => {
  return (
    <>
      {imageList.map((img) => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};`},"demo/style.less":{type:"FILE",value:`.demo-lazyload {
  .rv-image {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: 16px;
    padding: 16px;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }
}
`}},key:"lazyload-demo",meta:{title:"\u56FE\u7247\u61D2\u52A0\u8F7D",card:!0}},A=()=>(y.exports.useEffect(()=>{console.log("lazy component mounted")},[]),a("div",{children:[u(o,{src:"https://img.yzcdn.cn/vant/apple-8.jpg"}),u(z.Text,{children:"\u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002"})]}));var l=()=>u(D,{children:u(A,{})});const B={code:`import React, { useEffect } from 'react';
import { Lazyload, Image, Typography } from 'react-vant';

const LazyComponent = () => {
  useEffect(() => {
    console.log('lazy component mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        \u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002
      </Typography.Text>
    </div>
  );
};

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useEffect } from 'react';
import { Lazyload, Image, Typography } from 'react-vant';

const LazyComponent = () => {
  useEffect(() => {
    console.log('lazy component mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        \u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002
      </Typography.Text>
    </div>
  );
};

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};`}},key:"lazyload-demo-1",meta:{title:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",card:!0}},f=function({previewer:e=()=>null,api:n=()=>null}){const t=e;return u("div",{children:a("div",{children:[u("h1",{id:"lazyload-\u61D2\u52A0\u8F7D","data-anchor":"lazyload-\u61D2\u52A0\u8F7D",children:"Lazyload \u61D2\u52A0\u8F7D"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002"}),u("blockquote",{children:a("p",{children:["Lazyload \u57FA\u4E8E ",u("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",children:"IntersectionObserver"}),"\u5B9E\u73B0\uFF0C\b \u90E8\u5206\u6D4F\u89C8\u5668\u9700\u8981",u("a",{href:"https://www.npmjs.com/package/intersection-observer",children:"intersection-observer polyfill"}),"\u652F\u6301\u3002"]})}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(t,{code:"import { Lazyload } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u56FE\u7247\u61D2\u52A0\u8F7D","data-anchor":"\u56FE\u7247\u61D2\u52A0\u8F7D",children:"\u56FE\u7247\u61D2\u52A0\u8F7D"}),a("p",{children:["\u5C06 ",u("code",{children:"Image"})," \u7EC4\u4EF6\u7684 lazyload \u5C5E\u6027\u8BBE\u4E3A ",u("code",{children:"true"})," \u5373\u53EF\u5F00\u542F\u61D2\u52A0\u8F7D\u529F\u80FD\u3002"]}),u(t,r(d({},v),{children:u(i,{})})),u("h3",{id:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D","data-anchor":"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",children:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D"}),a("p",{children:["\u5C06\u9700\u8981\u61D2\u52A0\u8F7D\u7684\u7EC4\u4EF6\u653E\u5728 ",u("code",{children:"Lazyload"})," \u7EC4\u4EF6\u4E2D\uFF0C\u5373\u53EF\u5B9E\u73B0\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u3002"]}),u(t,r(d({},B),{children:u(l,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"options","data-anchor":"options",children:"Options"}),a("table",{children:[u("thead",{children:a("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),a("tbody",{children:[a("tr",{children:[u("td",{children:"height"}),u("td",{children:"\u8BBE\u7F6E\u5360\u4F4D\u5BB9\u5668\u9AD8\u5EA6"}),u("td",{children:u("em",{children:"number|string"})}),u("td",{children:"-"})]}),a("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u5BB9\u5668\u89C6\u56FE"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"<Skeleton title />"})]}),a("tr",{children:[u("td",{children:"style"}),u("td",{children:"\u5360\u4F4D\u5BB9\u5668\u6837\u5F0F"}),u("td",{children:u("em",{children:"CSSProperties"})}),u("td",{children:"-"})]}),a("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u5360\u4F4D\u5BB9\u5668\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]})]})]})]})})},j=[{Component:i,key:"lazyload-demo",title:"\u56FE\u7247\u61D2\u52A0\u8F7D",card:!0},{Component:l,key:"lazyload-demo-1",title:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",card:!0}],x={simulator:{compact:!1}},L=[{depth:1,text:"Lazyload \u61D2\u52A0\u8F7D",id:"lazyload-\u61D2\u52A0\u8F7D"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u56FE\u7247\u61D2\u52A0\u8F7D",id:"\u56FE\u7247\u61D2\u52A0\u8F7D"},{depth:3,text:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D",id:"\u7EC4\u4EF6\u61D2\u52A0\u8F7D"},{depth:2,text:"API",id:"api"},{depth:3,text:"Options",id:"options"}],I="/src/components/lazyload/README.md",b="Lazyload \u61D2\u52A0\u8F7D",T="1658500653000";var N=e=>e.children({MdContent:f,demos:j,frontmatter:x,slugs:L,filePath:I,title:b,updatedTime:T});export{f as MdContent,N as default,j as demos,I as filePath,x as frontmatter,L as slugs,b as title,T as updatedTime};
