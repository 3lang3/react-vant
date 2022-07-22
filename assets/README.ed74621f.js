var g=Object.defineProperty,f=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(d,t,r)=>t in d?g(d,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[t]=r,i=(d,t)=>{for(var r in t||(t={}))D.call(t,r)&&h(d,r,t[r]);if(a)for(var r of a(t))y.call(t,r)&&h(d,r,t[r]);return d},c=(d,t)=>f(d,x(t));import{a as u,j as e,F as n}from"./main.531c777e.js";import{C as l,I as _,e as P,f as b,g as M}from"./WaterMark.6f52b203.js";var o=()=>u(l.Group,{children:[e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"}),e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F"})]});const k=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell.Group>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" />
    </Cell.Group>
  );
};
`,R={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell.Group>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" />
    </Cell.Group>
  );
};
`}},key:"cell-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var C=()=>e(n,{children:Array.from({length:4}).map((d,t)=>e(l,{center:!0,title:`Avatar ${t}`,label:"Deserunt dolor ea eaque eos",icon:e(_,{width:44,height:44,src:"/demo_1.jpg",round:!0}),isLink:!0},t))});const w=`import React from 'react';
import { Cell, Image } from 'react-vant';

export default () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Cell
          center
          key={idx}
          title={\`Avatar \${idx}\`}
          label="Deserunt dolor ea eaque eos"
          icon={
            <Image
              width={44}
              height={44}
              src="/demo_1.jpg"
              round
            />
          }
          isLink
        />
      ))}
    </>
  );
};
`,L={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell, Image } from 'react-vant';

export default () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Cell
          center
          key={idx}
          title={\`Avatar \${idx}\`}
          label="Deserunt dolor ea eaque eos"
          icon={
            <Image
              width={44}
              height={44}
              src="/demo_1.jpg"
              round
            />
          }
          isLink
        />
      ))}
    </>
  );
};
`}},key:"cell-list",meta:{title:"\u7528\u6237\u5217\u8868"}};var p=()=>u(n,{children:[e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",size:"large"}),e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F",size:"large"})]});const N=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" size="large" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" size="large" />
    </>
  );
};
`,G={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" size="large" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" size="large" />
    </>
  );
};
`}},key:"cell-size",meta:{title:"\u5355\u5143\u683C\u5927\u5C0F"}};var v=()=>u(n,{children:[e(l,{title:"\u5355\u5143\u683C",icon:e(P,{})}),e(l,{title:"\u5355\u5143\u683C",icon:e(b,{})})]});const z=`import { FireO, LocationO } from '@react-vant/icons';
import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" icon={<LocationO />} />
      <Cell title="\u5355\u5143\u683C" icon={<FireO />} />
    </>
  );
};
`,$={code:z,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { FireO, LocationO } from '@react-vant/icons';
import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" icon={<LocationO />} />
      <Cell title="\u5355\u5143\u683C" icon={<FireO />} />
    </>
  );
};
`}},key:"cell-icon",meta:{title:"\u5C55\u793A\u56FE\u6807"}};var F=()=>e(l,{value:"\u5185\u5BB9"});const I=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return <Cell value="\u5185\u5BB9" />;
};
`,O={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return <Cell value="\u5185\u5BB9" />;
};
`}},key:"cell-value",meta:{title:"\u53EA\u8BBE\u7F6E value"}};var E=()=>u(n,{children:[e(l,{title:"\u5355\u5143\u683C",isLink:!0}),e(l,{title:"\u5355\u5143\u683C",isLink:!0,value:"\u5185\u5BB9"}),e(l,{title:"\u5355\u5143\u683C",isLink:!0,arrowDirection:"down",value:"\u5185\u5BB9"})]});const S=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" isLink />
      <Cell title="\u5355\u5143\u683C" isLink value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" isLink arrowDirection="down" value="\u5185\u5BB9" />
    </>
  );
};
`,j={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell title="\u5355\u5143\u683C" isLink />
      <Cell title="\u5355\u5143\u683C" isLink value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" isLink arrowDirection="down" value="\u5185\u5BB9" />
    </>
  );
};
`}},key:"cell-arrow",meta:{title:"\u5C55\u793A\u7BAD\u5934"}};var m=()=>u(n,{children:[e(l.Group,{title:"\u5206\u7EC41",children:e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})}),e(l.Group,{title:"\u5206\u7EC42",children:e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})})]});const q=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell.Group title="\u5206\u7EC41">
        <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      </Cell.Group>
      <Cell.Group title="\u5206\u7EC42">
        <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      </Cell.Group>
    </>
  );
};
`,T={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell.Group title="\u5206\u7EC41">
        <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      </Cell.Group>
      <Cell.Group title="\u5206\u7EC42">
        <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      </Cell.Group>
    </>
  );
};
`}},key:"cell-group",meta:{title:"\u5206\u7EC4\u6807\u9898"}};var B=()=>u(l.Group,{card:!0,children:[e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"}),e(l,{title:"\u5355\u5143\u683C",value:"\u5185\u5BB9"})]});const H=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell.Group card>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </Cell.Group>
  );
};
`,J={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell.Group card>
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
      <Cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    </Cell.Group>
  );
};
`}},key:"cell-card",meta:{title:"\u5361\u7247\u7C7B\u578B"}};var s=()=>e(l,{title:"\u5355\u5143\u683C",icon:e(M,{}),children:e("div",{children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"})});const K=`import { ShopO } from '@react-vant/icons';
import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell title="\u5355\u5143\u683C" icon={<ShopO />}>
      <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
    </Cell>
  );
};
`,Q={code:K,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { ShopO } from '@react-vant/icons';
import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return (
    <Cell title="\u5355\u5143\u683C" icon={<ShopO />}>
      <div>\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
    </Cell>
  );
};
`}},key:"cell-children",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}};var A=()=>e(l,{center:!0,title:"\u5355\u5143\u683C",value:"\u5185\u5BB9",label:"\u63CF\u8FF0\u4FE1\u606F"});const U=`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return <Cell center title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" />;
};
`,V={code:U,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Cell } from 'react-vant';

export default () => {
  return <Cell center title="\u5355\u5143\u683C" value="\u5185\u5BB9" label="\u63CF\u8FF0\u4FE1\u606F" />;
};
`}},key:"cell-vertical",meta:{title:"\u5782\u76F4\u5C45\u4E2D"}},W=function({previewer:d=()=>null,api:t=()=>null}){const r=d;return e("div",{children:u("div",{children:[e("h1",{id:"cell-\u5355\u5143\u683C","data-anchor":"cell-\u5355\u5143\u683C",children:"Cell \u5355\u5143\u683C"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Cell } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:[e("code",{children:"Cell"})," \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4E0E ",e("code",{children:"Cell.Group"})," \u642D\u914D\u4F7F\u7528\uFF0C",e("code",{children:"Cell.Group"})," \u53EF\u4EE5\u4E3A ",e("code",{children:"Cell"})," \u63D0\u4F9B\u4E0A\u4E0B\u5916\u8FB9\u6846\u3002"]}),e("div",{children:e(r,c(i({},R),{children:e(o,{})}))}),e("h3",{id:"\u7528\u6237\u5217\u8868","data-anchor":"\u7528\u6237\u5217\u8868",children:"\u7528\u6237\u5217\u8868"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9"]}),e("div",{children:e(r,c(i({},L),{children:e(C,{})}))}),e("h3",{id:"\u5355\u5143\u683C\u5927\u5C0F","data-anchor":"\u5355\u5143\u683C\u5927\u5C0F",children:"\u5355\u5143\u683C\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"size"})," \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5355\u5143\u683C\u7684\u5927\u5C0F\u3002"]}),e("div",{children:e(r,c(i({},G),{children:e(p,{})}))}),e("h3",{id:"\u5C55\u793A\u56FE\u6807","data-anchor":"\u5C55\u793A\u56FE\u6807",children:"\u5C55\u793A\u56FE\u6807"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u5728\u6807\u9898\u5DE6\u4FA7\u5C55\u793A\u56FE\u6807\u3002"]}),e("div",{children:e(r,c(i({},$),{children:e(v,{})}))}),e("h3",{id:"\u53EA\u8BBE\u7F6E-value","data-anchor":"\u53EA\u8BBE\u7F6E-value",children:"\u53EA\u8BBE\u7F6E value"}),u("p",{children:["\u53EA\u8BBE\u7F6E ",e("code",{children:"value"})," \u65F6\uFF0C\u5185\u5BB9\u4F1A\u9760\u5DE6\u5BF9\u9F50\u3002"]}),e("div",{children:e(r,c(i({},O),{children:e(F,{})}))}),e("h3",{id:"\u5C55\u793A\u7BAD\u5934","data-anchor":"\u5C55\u793A\u7BAD\u5934",children:"\u5C55\u793A\u7BAD\u5934"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"isLink"})," \u5C5E\u6027\u540E\u4F1A\u5728\u5355\u5143\u683C\u53F3\u4FA7\u663E\u793A\u7BAD\u5934\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"arrowDirection"})," \u5C5E\u6027\u63A7\u5236\u7BAD\u5934\u65B9\u5411\u3002"]}),e("div",{children:e(r,c(i({},j),{children:e(E,{})}))}),e("h3",{id:"\u5206\u7EC4\u6807\u9898","data-anchor":"\u5206\u7EC4\u6807\u9898",children:"\u5206\u7EC4\u6807\u9898"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"Cell.Group"})," \u7684 ",e("code",{children:"title"})," \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u5206\u7EC4\u6807\u9898\u3002"]}),e("div",{children:e(r,c(i({},T),{children:e(m,{})}))}),e("h3",{id:"\u5361\u7247\u7C7B\u578B","data-anchor":"\u5361\u7247\u7C7B\u578B",children:"\u5361\u7247\u7C7B\u578B"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"Cell.Group"})," \u7684 ",e("code",{children:"card"})," \u5C5E\u6027\u53EF\u4EE5\u53EF\u4EE5\u5C55\u793A\u5361\u7247\u7C7B\u578B\u3002"]}),e("div",{children:e(r,c(i({},J),{children:e(B,{})}))}),e("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9","data-anchor":"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:"\u5982\u4EE5\u4E0A\u7528\u6CD5\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u6765\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002"}),e("div",{children:e(r,c(i({},Q),{children:e(s,{})}))}),e("h3",{id:"\u5782\u76F4\u5C45\u4E2D","data-anchor":"\u5782\u76F4\u5C45\u4E2D",children:"\u5782\u76F4\u5C45\u4E2D"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"center"})," \u5C5E\u6027\u53EF\u4EE5\u8BA9 ",e("code",{children:"Cell"})," \u7684\u5DE6\u53F3\u5185\u5BB9\u90FD\u5782\u76F4\u5C45\u4E2D\u3002"]}),e("div",{children:e(r,c(i({},V),{children:e(A,{})}))}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"cellgroup-props","data-anchor":"cellgroup-props",children:"CellGroup Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5206\u7EC4\u6807\u9898"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"inset"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E3A\u5706\u89D2\u5361\u7247\u98CE\u683C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"cell-props","data-anchor":"cell-props",children:"Cell Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"label"}),e("td",{children:"\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"extra"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6700\u53F3\u4FA7\u7684\u989D\u5916\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u5355\u5143\u683C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"large"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u5DE6\u4FA7\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"rightIcon"}),u("td",{children:["\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\uFF0C\u9ED8\u8BA4\u4E3A",e("code",{children:"arrow"})]}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"replace"}),e("td",{children:"\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"clickable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"isLink"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"required"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8868\u5355\u5FC5\u586B\u661F\u53F7"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"arrowDirection"}),u("td",{children:["\u7BAD\u5934\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})," ",e("code",{children:"up"})," ",e("code",{children:"down"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"titleStyle"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u6837\u5F0F"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"titleClass"}),e("td",{children:"\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"valueClass"}),e("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"labelClass"}),e("td",{children:"\u63CF\u8FF0\u4FE1\u606F\u989D\u5916\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"cell-events","data-anchor":"cell-events",children:"Cell Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u5355\u5143\u683C\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(r,{code:"import type { CellArrowDirection } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-cell-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-line-height"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-vertical-padding"}),e("td",{children:e("em",{children:"10px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-horizontal-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-border-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-required-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-label-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-label-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-label-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-value-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-icon-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-right-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-large-vertical-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-large-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-large-label-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-title-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-title-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-title-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-title-line-height"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-inset-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-inset-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-lg)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-cell-group-inset-title-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md) var(--rv-padding-md) var(--rv-padding-xs) var(--rv-padding-xl)"})}),e("td",{children:"-"})]})]})]})]})})},X=[{Component:o,key:"cell-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:C,key:"cell-list",title:"\u7528\u6237\u5217\u8868"},{Component:p,key:"cell-size",title:"\u5355\u5143\u683C\u5927\u5C0F"},{Component:v,key:"cell-icon",title:"\u5C55\u793A\u56FE\u6807"},{Component:F,key:"cell-value",title:"\u53EA\u8BBE\u7F6E value"},{Component:E,key:"cell-arrow",title:"\u5C55\u793A\u7BAD\u5934"},{Component:m,key:"cell-group",title:"\u5206\u7EC4\u6807\u9898"},{Component:B,key:"cell-card",title:"\u5361\u7247\u7C7B\u578B"},{Component:s,key:"cell-children",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{Component:A,key:"cell-vertical",title:"\u5782\u76F4\u5C45\u4E2D"}],Y=void 0,Z=[{depth:1,text:"Cell \u5355\u5143\u683C",id:"cell-\u5355\u5143\u683C"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u7528\u6237\u5217\u8868",id:"\u7528\u6237\u5217\u8868"},{depth:3,text:"\u5355\u5143\u683C\u5927\u5C0F",id:"\u5355\u5143\u683C\u5927\u5C0F"},{depth:3,text:"\u5C55\u793A\u56FE\u6807",id:"\u5C55\u793A\u56FE\u6807"},{depth:3,text:"\u53EA\u8BBE\u7F6E value",id:"\u53EA\u8BBE\u7F6E-value"},{depth:3,text:"\u5C55\u793A\u7BAD\u5934",id:"\u5C55\u793A\u7BAD\u5934"},{depth:3,text:"\u5206\u7EC4\u6807\u9898",id:"\u5206\u7EC4\u6807\u9898"},{depth:3,text:"\u5361\u7247\u7C7B\u578B",id:"\u5361\u7247\u7C7B\u578B"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{depth:3,text:"\u5782\u76F4\u5C45\u4E2D",id:"\u5782\u76F4\u5C45\u4E2D"},{depth:2,text:"API",id:"api"},{depth:3,text:"CellGroup Props",id:"cellgroup-props"},{depth:3,text:"Cell Props",id:"cell-props"},{depth:3,text:"Cell Events",id:"cell-events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],ee="/src/components/cell/README.md",ue="Cell \u5355\u5143\u683C",re="1658500653000";var ie=d=>d.children({MdContent:W,demos:X,frontmatter:Y,slugs:Z,filePath:ee,title:ue,updatedTime:re});export{W as MdContent,ie as default,X as demos,ee as filePath,Y as frontmatter,Z as slugs,ue as title,re as updatedTime};
