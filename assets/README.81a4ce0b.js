var B=Object.defineProperty,m=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var E=(i,t,n)=>t in i?B(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,c=(i,t)=>{for(var n in t||(t={}))D.call(t,n)&&E(i,n,t[n]);if(a)for(var n of a(t))b.call(t,n)&&E(i,n,t[n]);return i},d=(i,t)=>m(i,v(t));import{r as o,a as e,F as l,j as u}from"./main.531c777e.js";import{C as h,dQ as s}from"./WaterMark.6f52b203.js";const f=[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}];var F=()=>{const[i,t]=o.exports.useState(!1);return e(l,{children:[u(h,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>t(!0)}),u(s,{visible:i,options:f,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>t(!1),onSelect:(n,r)=>{console.log("option",n),console.log("index",r),t(!1)}})]})};const S=`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`,g={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`}},key:"share-sheet-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},x=[[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u670B\u53CB\u5708",icon:"wechat-moments"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"\u590D\u5236\u94FE\u63A5",icon:"link"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"},{name:"\u5C0F\u7A0B\u5E8F\u7801",icon:"weapp-qrcode"}]];var p=()=>{const[i,t]=o.exports.useState(!1);return e(l,{children:[u(h,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>t(!0)}),u(s,{visible:i,options:x,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>t(!1),onSelect:(n,r)=>{console.log("option",n),console.log("index",r),t(!1)}})]})};const k=`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  [
    { name: '\u5FAE\u4FE1', icon: 'wechat' },
    { name: '\u670B\u53CB\u5708', icon: 'wechat-moments' },
    { name: '\u5FAE\u535A', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
    { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
    { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
    { name: '\u5C0F\u7A0B\u5E8F\u7801', icon: 'weapp-qrcode' },
  ],
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`,y={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  [
    { name: '\u5FAE\u4FE1', icon: 'wechat' },
    { name: '\u670B\u53CB\u5708', icon: 'wechat-moments' },
    { name: '\u5FAE\u535A', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '\u590D\u5236\u94FE\u63A5', icon: 'link' },
    { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
    { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
    { name: '\u5C0F\u7A0B\u5E8F\u7801', icon: 'weapp-qrcode' },
  ],
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`}},key:"share-sheet-mulit",meta:{title:"\u5C55\u793A\u591A\u884C\u9009\u9879"}},w=[{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-light.png"},{name:"\u540D\u79F0",icon:"https://img.yzcdn.cn/vant/custom-icon-water.png"}];var A=()=>{const[i,t]=o.exports.useState(!1);return e(l,{children:[u(h,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>t(!0)}),u(s,{visible:i,options:w,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",onCancel:()=>t(!1),onSelect:(n,r)=>{console.log("option",n),console.log("index",r),t(!1)}})]})};const V=`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`,P={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ShareSheet, Cell } from 'react-vant';

const options = [
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '\u540D\u79F0',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`}},key:"share-sheet-custom",meta:{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"}},_=[{name:"\u5FAE\u4FE1",icon:"wechat"},{name:"\u5FAE\u535A",icon:"weibo"},{name:"\u590D\u5236\u94FE\u63A5",icon:"link",description:"\u63CF\u8FF0\u4FE1\u606F"},{name:"\u5206\u4EAB\u6D77\u62A5",icon:"poster"},{name:"\u4E8C\u7EF4\u7801",icon:"qrcode"}];var C=()=>{const[i,t]=o.exports.useState(!1);return e(l,{children:[u(h,{isLink:!0,title:"\u663E\u793A\u5206\u4EAB\u9762\u677F",onClick:()=>t(!0)}),u(s,{visible:i,options:_,title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",description:"\u63CF\u8FF0\u4FE1\u606F",onCancel:()=>t(!1),onSelect:(n,r)=>{console.log("option",n),console.log("index",r),t(!1)}})]})};const q=`import React, { useState } from 'react';
import { Cell, ShareSheet } from 'react-vant';

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link', description: '\u63CF\u8FF0\u4FE1\u606F' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        description="\u63CF\u8FF0\u4FE1\u606F"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`,z={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Cell, ShareSheet } from 'react-vant';

const options = [
  { name: '\u5FAE\u4FE1', icon: 'wechat' },
  { name: '\u5FAE\u535A', icon: 'weibo' },
  { name: '\u590D\u5236\u94FE\u63A5', icon: 'link', description: '\u63CF\u8FF0\u4FE1\u606F' },
  { name: '\u5206\u4EAB\u6D77\u62A5', icon: 'poster' },
  { name: '\u4E8C\u7EF4\u7801', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="\u663E\u793A\u5206\u4EAB\u9762\u677F" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB"
        description="\u63CF\u8FF0\u4FE1\u606F"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          setVisible(false);
        }}
      />
    </>
  );
};
`}},key:"share-sheet-description",meta:{title:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}},R=function({previewer:i=()=>null,api:t=()=>null}){const n=i;return u("div",{children:e("div",{children:[u("h1",{id:"sharesheet-\u5206\u4EAB\u9762\u677F","data-anchor":"sharesheet-\u5206\u4EAB\u9762\u677F",children:"ShareSheet \u5206\u4EAB\u9762\u677F"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5E95\u90E8\u5F39\u8D77\u7684\u5206\u4EAB\u9762\u677F\uFF0C\u7528\u4E8E\u5C55\u793A\u5404\u5206\u4EAB\u6E20\u9053\u5BF9\u5E94\u7684\u64CD\u4F5C\u6309\u94AE\uFF0C\u4E0D\u542B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(n,{code:"import { ShareSheet } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u5206\u4EAB\u9762\u677F\u901A\u8FC7 ",u("code",{children:"options"})," \u5C5E\u6027\u6765\u5B9A\u4E49\u5206\u4EAB\u9009\u9879\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u683C\u5F0F\u89C1\u6587\u6863\u4E0B\u65B9\u8868\u683C\u3002"]}),u(n,d(c({},g),{children:u(F,{})})),u("h3",{id:"\u5C55\u793A\u591A\u884C\u9009\u9879","data-anchor":"\u5C55\u793A\u591A\u884C\u9009\u9879",children:"\u5C55\u793A\u591A\u884C\u9009\u9879"}),e("p",{children:["\u5F53\u5206\u4EAB\u9009\u9879\u7684\u6570\u91CF\u8F83\u591A\u65F6\uFF0C\u53EF\u4EE5\u5C06 ",u("code",{children:"options"})," \u5B9A\u4E49\u4E3A\u6570\u7EC4\u5D4C\u5957\u7684\u683C\u5F0F\uFF0C\u6BCF\u4E2A\u5B50\u6570\u7EC4\u4F1A\u4F5C\u4E3A\u4E00\u884C\u9009\u9879\u5C55\u793A\u3002"]}),u(n,d(c({},y),{children:u(p,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807","data-anchor":"\u81EA\u5B9A\u4E49\u56FE\u6807",children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),e("p",{children:["\u9664\u4E86\u4F7F\u7528\u5185\u7F6E\u7684\u51E0\u79CD\u56FE\u6807\u5916\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ",u("code",{children:"icon"})," \u4E2D\u4F20\u5165\u56FE\u7247 URL \u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002"]}),u(n,d(c({},P),{children:u(A,{})})),u("h3",{id:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F","data-anchor":"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",children:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"description"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u6587\u5B57, \u5728 ",u("code",{children:"options"})," \u5185\u8BBE\u7F6E ",u("code",{children:"description"})," \u5C5E\u6027\u53EF\u4EE5\u6DFB\u52A0\u5206\u4EAB\u9009\u9879\u63CF\u8FF0\u3002"]}),u(n,d(c({},z),{children:u(C,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"visible"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5206\u4EAB\u9762\u677F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"options"}),u("td",{children:"\u5206\u4EAB\u9009\u9879"}),u("td",{children:u("em",{children:"Option[]"})}),u("td",{children:u("code",{children:"[]"})})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u9876\u90E8\u6807\u9898"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"cancelText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57\uFF0C\u4F20\u5165\u7A7A\u5B57\u7B26\u4E32\u53EF\u4EE5\u9690\u85CF\u6309\u94AE"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"'\u53D6\u6D88'"})})]}),e("tr",{children:[u("td",{children:"description"}),u("td",{children:"\u6807\u9898\u4E0B\u65B9\u7684\u8F85\u52A9\u63CF\u8FF0\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"duration"}),u("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0.3"})})]}),e("tr",{children:[u("td",{children:"overlay"}),u("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"overlayClass"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"overlayStyle"}),u("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),u("td",{children:u("em",{children:"CSSProperties"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"lockScroll"}),u("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"closeOnPopstate"}),u("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"closeOnClickOverlay"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"safeAreaInsetBottom"}),e("td",{children:["\u662F\u5426\u5F00\u542F",u("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]})]})]}),u("h3",{id:"option-\u6570\u636E\u7ED3\u6784","data-anchor":"option-\u6570\u636E\u7ED3\u6784",children:"Option \u6570\u636E\u7ED3\u6784"}),e("p",{children:[u("code",{children:"options"})," \u5C5E\u6027\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u952E\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"name"}),u("td",{children:"\u5206\u4EAB\u6E20\u9053\u540D\u79F0"}),u("td",{children:u("em",{children:"string"})})]}),e("tr",{children:[u("td",{children:"description"}),u("td",{children:"\u5206\u4EAB\u9009\u9879\u63CF\u8FF0"}),u("td",{children:u("em",{children:"string"})})]}),e("tr",{children:[u("td",{children:"icon"}),e("td",{children:["\u56FE\u6807\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"wechat"})," ",u("code",{children:"weibo"})," ",u("code",{children:"qq"})," ",u("code",{children:"link"})," ",u("code",{children:"qrcode"})," ",u("code",{children:"poster"})," ",u("code",{children:"weapp-qrcode"})," ",u("code",{children:"wechat-moments"})," \u6216\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u7247 URL"]}),u("td",{children:u("em",{children:"string| ReactNode"})})]}),e("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u5206\u4EAB\u9009\u9879\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onSelect"}),u("td",{children:"\u70B9\u51FB\u5206\u4EAB\u9009\u9879\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"option: Option, index: number"})})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-share-sheet-header-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-sm) var(--rv-padding-md) var(--rv-padding-base)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-title-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-title-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-title-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-description-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-description-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-description-line-height"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-icon-size"}),u("td",{children:u("em",{children:"48px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-option-name-color"}),u("td",{children:u("em",{children:"var(--rv-gray-7)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-option-name-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-option-description-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-option-description-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-cancel-button-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-cancel-button-height"}),u("td",{children:u("em",{children:"48px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-share-sheet-cancel-button-background"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91","data-anchor":"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91",children:"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91\uFF1F"}),u("p",{children:"\u5728\u4E0D\u540C\u7684 App \u6216\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5B58\u5728\u5404\u5F0F\u5404\u6837\u7684\u5206\u4EAB\u63A5\u53E3\u6216\u5206\u4EAB\u65B9\u5F0F\uFF0C\u56E0\u6B64 ShareSheet \u7EC4\u4EF6\u4E0D\u63D0\u4F9B\u5177\u4F53\u7684\u5206\u4EAB\u903B\u8F91\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u573A\u666F\u81EA\u884C\u5B9E\u73B0\u3002"}),u("h4",{id:"\u5FAE\u4FE1\u5185\u5206\u4EAB","data-anchor":"\u5FAE\u4FE1\u5185\u5206\u4EAB",children:"\u5FAE\u4FE1\u5185\u5206\u4EAB"}),u("p",{children:"\u7531\u4E8E\u5FAE\u4FE1\u672A\u63D0\u4F9B\u5206\u4EAB\u76F8\u5173\u7684 API\uFF0C\u9700\u8981\u5F15\u5BFC\u7528\u6237\u70B9\u51FB\u53F3\u4E0A\u89D2\u8FDB\u884C\u5206\u4EAB\u3002"}),u("h4",{id:"app-\u5185\u5206\u4EAB","data-anchor":"app-\u5185\u5206\u4EAB",children:"App \u5185\u5206\u4EAB"}),u("p",{children:"\u53EF\u4EE5\u901A\u8FC7 JSBridge \u8C03\u7528\u539F\u751F\u5E94\u7528\u7684 SDK \u8FDB\u884C\u5206\u4EAB\u3002"}),u("h4",{id:"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801","data-anchor":"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801",children:"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("a",{href:"/components/popup",children:"Popup"})," \u7EC4\u4EF6\u4EE5\u5F39\u5C42\u7684\u5F62\u5F0F\u5C55\u793A\u56FE\u7247\uFF0C\u7136\u540E\u5F15\u5BFC\u7528\u6237\u4FDD\u5B58\u56FE\u7247\u8FDB\u884C\u5206\u4EAB\u3002"]})]})})},M=[{Component:F,key:"share-sheet-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"share-sheet-mulit",title:"\u5C55\u793A\u591A\u884C\u9009\u9879"},{Component:A,key:"share-sheet-custom",title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{Component:C,key:"share-sheet-description",title:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"}],L=void 0,N=[{depth:1,text:"ShareSheet \u5206\u4EAB\u9762\u677F",id:"sharesheet-\u5206\u4EAB\u9762\u677F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5C55\u793A\u591A\u884C\u9009\u9879",id:"\u5C55\u793A\u591A\u884C\u9009\u9879"},{depth:3,text:"\u81EA\u5B9A\u4E49\u56FE\u6807",id:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{depth:3,text:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",id:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Option \u6570\u636E\u7ED3\u6784",id:"option-\u6570\u636E\u7ED3\u6784"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91\uFF1F",id:"\u5982\u4F55\u5B9E\u73B0\u5206\u4EAB\u903B\u8F91"},{depth:4,text:"\u5FAE\u4FE1\u5185\u5206\u4EAB",id:"\u5FAE\u4FE1\u5185\u5206\u4EAB"},{depth:4,text:"App \u5185\u5206\u4EAB",id:"app-\u5185\u5206\u4EAB"},{depth:4,text:"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801",id:"\u5206\u4EAB\u6D77\u62A5\u6216\u4E8C\u7EF4\u7801"}],$="/src/components/share-sheet/README.md",I="ShareSheet \u5206\u4EAB\u9762\u677F",O="1658500653000";var U=i=>i.children({MdContent:R,demos:M,frontmatter:L,slugs:N,filePath:$,title:I,updatedTime:O});export{R as MdContent,U as default,M as demos,$ as filePath,L as frontmatter,N as slugs,I as title,O as updatedTime};
