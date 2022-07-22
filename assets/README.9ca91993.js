var y=Object.defineProperty,D=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(r,t,n)=>t in r?y(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,d=(r,t)=>{for(var n in t||(t={}))f.call(t,n)&&h(r,n,t[n]);if(p)for(var n of p(t))x.call(t,n)&&h(r,n,t[n]);return r},i=(r,t)=>D(r,v(t));import{a as u,j as e,F as g}from"./main.531c777e.js";import{S as c,B as l,D as S,T as o}from"./WaterMark.6f52b203.js";var F=()=>u(c,{align:"center",children:["Space",e(l,{type:"primary",children:"Button"}),e(l,{children:"Confirm"})]});const A={code:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space align="center">
      Space
      <Button type="primary">Button</Button>
      <Button>Confirm</Button>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space align="center">
      Space
      <Button type="primary">Button</Button>
      <Button>Confirm</Button>
    </Space>
  );
};`}},key:"space-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var m=()=>u(c,{align:"center",divider:e(S,{type:"vertical"}),children:[e(o.Link,{children:"Info"}),e(o.Link,{children:"Edit"}),e(o.Link,{type:"danger",children:"Delete"})]});const b={code:`import React from 'react';
import { Space, Typography, Divider } from 'react-vant';

export default () => {
  return (
    <Space align="center" divider={<Divider type="vertical" />}>
      <Typography.Link>Info</Typography.Link>
      <Typography.Link>Edit</Typography.Link>
      <Typography.Link type="danger">Delete</Typography.Link>
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Typography, Divider } from 'react-vant';

export default () => {
  return (
    <Space align="center" divider={<Divider type="vertical" />}>
      <Typography.Link>Info</Typography.Link>
      <Typography.Link>Edit</Typography.Link>
      <Typography.Link type="danger">Delete</Typography.Link>
    </Space>
  );
};`}},key:"space-demo-1",meta:{title:"\u5206\u9694\u7B26"}};var B=()=>e(c,{direction:"vertical",children:new Array(2).fill(null).map((r,t)=>e(l,{children:"Button"},t))});const k={code:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space direction="vertical">
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space direction="vertical">
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`}},key:"space-demo-2",meta:{title:"\u5782\u76F4\u95F4\u8DDD"}};var E=()=>e(c,{gap:20,children:new Array(2).fill(null).map((r,t)=>e(l,{children:"Button"},t))});const P={code:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space gap={20}>
      {new Array(2).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`}},key:"space-demo-3",meta:{title:"\u95F4\u8DDD\u5927\u5C0F"}},a=({children:r})=>e("div",{style:{padding:15,border:"1px solid #eee",borderRadius:4},children:r});var s=()=>u(g,{children:[u(c,{justify:"center",block:!0,style:{marginBottom:20},children:[e(a,{children:"1"}),u(a,{children:["2",e("br",{}),"2"]}),u(a,{children:["3",e("br",{}),"3",e("br",{}),"3"]})]}),u(c,{align:"end",children:[e(a,{children:"1"}),u(a,{children:["2",e("br",{}),"2"]}),u(a,{children:["3",e("br",{}),"3",e("br",{}),"3"]})]})]});const w={code:`import React from 'react';
import { Space, Button } from 'react-vant';

const Child = ({ children }) => (
  <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 4 }}>{children}</div>
);

export default () => {
  return (
    <>
      {/* \u4E3B\u8F74\u5BF9\u9F50 */}
      <Space justify="center" block style={{ marginBottom: 20 }}>
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
      {/* \u4EA4\u53C9\u8F74\u5BF9\u9F50 */}
      <Space align="end">
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Button } from 'react-vant';

const Child = ({ children }) => (
  <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 4 }}>{children}</div>
);

export default () => {
  return (
    <>
      {/* \u4E3B\u8F74\u5BF9\u9F50 */}
      <Space justify="center" block style={{ marginBottom: 20 }}>
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
      {/* \u4EA4\u53C9\u8F74\u5BF9\u9F50 */}
      <Space align="end">
        <Child>1</Child>
        <Child>
          2<br />2
        </Child>
        <Child>
          3<br />3<br />3
        </Child>
      </Space>
    </>
  );
};`}},key:"space-demo-4",meta:{title:"\u5BF9\u9F50\u65B9\u5F0F"}};var C=()=>e(c,{wrap:!0,gap:[8,20],children:new Array(6).fill(null).map((r,t)=>e(l,{children:"Button"},t))});const M={code:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space wrap gap={[8, 20]}>
      {new Array(6).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Space, Button } from 'react-vant';

export default () => {
  return (
    <Space wrap gap={[8, 20]}>
      {new Array(6).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};`}},key:"space-demo-5",meta:{title:"\u81EA\u52A8\u6362\u884C"}},j=function({previewer:r=()=>null,api:t=()=>null}){const n=r;return e("div",{children:u("div",{children:[e("h1",{id:"space-\u95F4\u8DDD","data-anchor":"space-\u95F4\u8DDD",children:"Space \u95F4\u8DDD"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u907F\u514D\u7EC4\u4EF6\u7D27\u8D34\u5728\u4E00\u8D77\uFF0C\u62C9\u5F00\u7EDF\u4E00\u7684\u7A7A\u95F4\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { Space } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:"\u76F8\u90BB\u7EC4\u4EF6\u6C34\u5E73\u95F4\u8DDD\u3002"}),e(n,i(d({},A),{children:e(F,{})})),e("h3",{id:"\u5206\u9694\u7B26","data-anchor":"\u5206\u9694\u7B26",children:"\u5206\u9694\u7B26"}),e("p",{children:"\u76F8\u90BB\u7EC4\u4EF6\u5206\u9694\u7B26\u3002"}),e(n,i(d({},b),{children:e(m,{})})),e("h3",{id:"\u5782\u76F4\u95F4\u8DDD","data-anchor":"\u5782\u76F4\u95F4\u8DDD",children:"\u5782\u76F4\u95F4\u8DDD"}),e("p",{children:"\u76F8\u90BB\u7EC4\u4EF6\u5782\u76F4\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u8BBE\u7F6E width: 100% \u72EC\u5360\u4E00\u884C\u3002"}),e(n,i(d({},k),{children:e(B,{})})),e("h3",{id:"\u95F4\u8DDD\u5927\u5C0F","data-anchor":"\u95F4\u8DDD\u5927\u5C0F",children:"\u95F4\u8DDD\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"gap"})," \u5C5E\u6027\u53EF\u4EE5\u8C03\u6574\u95F4\u8DDD\u5927\u5C0F\u3002"]}),e("ul",{children:u("li",{children:[e("code",{children:"gap"})," \u8BBE\u7F6E\u4E3A\u6570\u7EC4\u65F6\u53EF\u4EE5\u540C\u65F6\u8C03\u6574\u5782\u76F4\u65B9\u5411\u548C\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD\u5927\u5C0F"]})}),e(n,i(d({},P),{children:e(E,{})})),e("h3",{id:"\u5BF9\u9F50","data-anchor":"\u5BF9\u9F50",children:"\u5BF9\u9F50"}),e("p",{children:"\u8BBE\u7F6E\u5BF9\u9F50\u6A21\u5F0F\u3002"}),u("ul",{children:[u("li",{children:["\u901A\u8FC7 ",e("code",{children:"justify"})," \u5C5E\u6027\u53EF\u4EE5\u7075\u6D3B\u8C03\u6574\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"align"})," \u5C5E\u6027\u53EF\u4EE5\u7075\u6D3B\u8C03\u6574\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F\u3002"]})]}),e(n,i(d({},w),{children:e(s,{})})),e("h3",{id:"\u81EA\u52A8\u6362\u884C","data-anchor":"\u81EA\u52A8\u6362\u884C",children:"\u81EA\u52A8\u6362\u884C"}),e(n,i(d({},M),{children:e(C,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"gap"}),e("td",{children:"\u95F4\u8DDD\u5927\u5C0F"}),e("td",{children:e("em",{children:"string|number|[string, string]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"justify"}),e("td",{children:"\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:e("em",{children:"'start'| 'end'| 'center'| 'between'| 'around'| 'evenly'| 'stretch'"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"align"}),e("td",{children:"\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F"}),e("td",{children:e("em",{children:"'start'| 'end'| 'center'| 'baseline'"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"direction"}),e("td",{children:"\u95F4\u8DDD\u65B9\u5411"}),e("td",{children:e("em",{children:"'vertical' | 'horizontal'"})}),e("td",{children:e("code",{children:"horizontal"})})]}),u("tr",{children:[e("td",{children:"wrap"}),e("td",{children:"\u662F\u5426\u81EA\u52A8\u6362\u884C\uFF0C\u4EC5\u5728 horizontal \u65F6\u6709\u6548"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"block"}),e("td",{children:"\u662F\u5426\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"divider"}),e("td",{children:"\u5206\u9694\u7B26"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"\u4E8B\u4EF6","data-anchor":"\u4E8B\u4EF6",children:"\u4E8B\u4EF6"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"--rv-space-gap"}),e("td",{children:e("em",{children:"8px"})}),e("td",{children:"\u95F4\u8DDD\u5927\u5C0F"})]})})]})]})})},L=[{Component:F,key:"space-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"space-demo-1",title:"\u5206\u9694\u7B26"},{Component:B,key:"space-demo-2",title:"\u5782\u76F4\u95F4\u8DDD"},{Component:E,key:"space-demo-3",title:"\u95F4\u8DDD\u5927\u5C0F"},{Component:s,key:"space-demo-4",title:"\u5BF9\u9F50\u65B9\u5F0F"},{Component:C,key:"space-demo-5",title:"\u81EA\u52A8\u6362\u884C"}],R={simulator:{compact:!1,style:{background:"#fff"}}},T=[{depth:1,text:"Space \u95F4\u8DDD",id:"space-\u95F4\u8DDD"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5206\u9694\u7B26",id:"\u5206\u9694\u7B26"},{depth:3,text:"\u5782\u76F4\u95F4\u8DDD",id:"\u5782\u76F4\u95F4\u8DDD"},{depth:3,text:"\u95F4\u8DDD\u5927\u5C0F",id:"\u95F4\u8DDD\u5927\u5C0F"},{depth:3,text:"\u5BF9\u9F50",id:"\u5BF9\u9F50"},{depth:3,text:"\u81EA\u52A8\u6362\u884C",id:"\u81EA\u52A8\u6362\u884C"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"\u4E8B\u4EF6",id:"\u4E8B\u4EF6"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],N="/src/components/space/README.md",I="Space \u95F4\u8DDD",_="1658500653000";var G=r=>r.children({MdContent:j,demos:L,frontmatter:R,slugs:T,filePath:N,title:I,updatedTime:_});export{j as MdContent,G as default,L as demos,N as filePath,R as frontmatter,T as slugs,I as title,_ as updatedTime};
