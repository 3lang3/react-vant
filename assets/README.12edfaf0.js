var p=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var a=(r,i,t)=>i in r?p(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,l=(r,i)=>{for(var t in i||(i={}))m.call(i,t)&&a(r,t,i[t]);if(h)for(var t of h(i))y.call(i,t)&&a(r,t,i[t]);return r},c=(r,i)=>A(r,B(i));import{j as u,a as e,F as o,r as f}from"./main.531c777e.js";import{C as d,dM as n,F as v,N as g,ah as D}from"./WaterMark.6f52b203.js";var s=()=>u(d,{title:"\u57FA\u7840\u7528\u6CD5",isLink:!0,onClick:()=>n.show("\u901A\u77E5\u5185\u5BB9")});const k={code:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return <Cell title="\u57FA\u7840\u7528\u6CD5" isLink onClick={() => Notify.show('\u901A\u77E5\u5185\u5BB9')} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return <Cell title="\u57FA\u7840\u7528\u6CD5" isLink onClick={() => Notify.show('\u901A\u77E5\u5185\u5BB9')} />;
};`}},key:"notify-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var C=()=>e(o,{children:[u(d,{title:"\u4E3B\u8981\u901A\u77E5",isLink:!0,onClick:()=>n.show({type:"primary",message:"\u901A\u77E5\u5185\u5BB9"})}),u(d,{title:"\u6210\u529F\u901A\u77E5",isLink:!0,onClick:()=>n.show({type:"success",message:"\u901A\u77E5\u5185\u5BB9"})}),u(d,{title:"\u5371\u9669\u901A\u77E5",isLink:!0,onClick:()=>n.show({type:"danger",message:"\u901A\u77E5\u5185\u5BB9"})}),u(d,{title:"\u8B66\u544A\u901A\u77E5",isLink:!0,onClick:()=>n.show({type:"warning",message:"\u901A\u77E5\u5185\u5BB9"})})]});const N={code:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="\u4E3B\u8981\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u6210\u529F\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u5371\u9669\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u8B66\u544A\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="\u4E3B\u8981\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u6210\u529F\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u5371\u9669\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
      <Cell
        title="\u8B66\u544A\u901A\u77E5"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '\u901A\u77E5\u5185\u5BB9' })}
      />
    </>
  );
};`}},key:"notify-demo-1",meta:{title:"\u901A\u77E5\u7C7B\u578B",card:!0}};var E=()=>e(o,{children:[u(d,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:!0,onClick:()=>n.show({message:"\u81EA\u5B9A\u4E49\u989C\u8272",color:"#ad0000",background:"#ffe1e1"})}),u(d,{title:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:!0,onClick:()=>n.show({message:"\u81EA\u5B9A\u4E49\u65F6\u957F",duration:1e3})})]});const x={code:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        isLink
        onClick={() =>
          Notify.show({ message: '\u81EA\u5B9A\u4E49\u989C\u8272', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="\u81EA\u5B9A\u4E49\u65F6\u957F"
        isLink
        onClick={() => Notify.show({ message: '\u81EA\u5B9A\u4E49\u65F6\u957F', duration: 1000 })}
      />
    </>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="\u81EA\u5B9A\u4E49\u989C\u8272"
        isLink
        onClick={() =>
          Notify.show({ message: '\u81EA\u5B9A\u4E49\u989C\u8272', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="\u81EA\u5B9A\u4E49\u65F6\u957F"
        isLink
        onClick={() => Notify.show({ message: '\u81EA\u5B9A\u4E49\u65F6\u957F', duration: 1000 })}
      />
    </>
  );
};`}},key:"notify-demo-2",meta:{title:"\u81EA\u5B9A\u4E49\u901A\u77E5",card:!0}};var F=()=>{const[r,i]=f.exports.useState(!1);return e(o,{children:[u(d,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>i(!0)}),u(n,{visible:r,type:"success",children:e(v,{style:{width:"100%"},align:"center",justify:"between",children:[u("div",{}),e("div",{children:[u(g,{style:{marginRight:4}}),u("span",{children:"\u901A\u77E5\u5185\u5BB9"})]}),u(D,{onClick:()=>i(!1)})]})})]})};const w=`import React, { useState } from 'react';
import { Notify, Cell, Flex } from 'react-vant';
import { Bell, Close } from '@react-vant/icons';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="\u7EC4\u4EF6\u8C03\u7528" isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type="success">
        <Flex style={{ width: '100%' }} align="center" justify="between">
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>\u901A\u77E5\u5185\u5BB9</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
`,b={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Notify, Cell, Flex } from 'react-vant';
import { Bell, Close } from '@react-vant/icons';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="\u7EC4\u4EF6\u8C03\u7528" isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type="success">
        <Flex style={{ width: '100%' }} align="center" justify="between">
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>\u901A\u77E5\u5185\u5BB9</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
`}},key:"notify-component",meta:{title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}},L=function({previewer:r=()=>null,api:i=()=>null}){const t=r;return u("div",{children:e("div",{children:[u("h1",{id:"notify-\u6D88\u606F\u63D0\u793A","data-anchor":"notify-\u6D88\u606F\u63D0\u793A",children:"Notify \u6D88\u606F\u63D0\u793A"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A\uFF0C\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002"}),u("h3",{id:"\u51FD\u6570\u8C03\u7528","data-anchor":"\u51FD\u6570\u8C03\u7528",children:"\u51FD\u6570\u8C03\u7528"}),u("p",{children:"Notify \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u5F39\u51FA\u76F8\u5E94\u7684\u6D88\u606F\u63D0\u793A\u3002"}),u(t,{code:`import { Notify } from 'react-vant';

Notify.show('\u901A\u77E5\u5185\u5BB9');`,lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u(t,c(l({},k),{children:u(s,{})})),u("h3",{id:"\u901A\u77E5\u7C7B\u578B","data-anchor":"\u901A\u77E5\u7C7B\u578B",children:"\u901A\u77E5\u7C7B\u578B"}),e("p",{children:["\u652F\u6301 ",u("code",{children:"primary"}),"\u3001",u("code",{children:"success"}),"\u3001",u("code",{children:"warning"}),"\u3001",u("code",{children:"danger"})," \u56DB\u79CD\u901A\u77E5\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A ",u("code",{children:"danger"}),"\u3002"]}),u(t,c(l({},N),{children:u(C,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u901A\u77E5","data-anchor":"\u81EA\u5B9A\u4E49\u901A\u77E5",children:"\u81EA\u5B9A\u4E49\u901A\u77E5"}),u("p",{children:"\u81EA\u5B9A\u4E49\u6D88\u606F\u901A\u77E5\u7684\u989C\u8272\u548C\u5C55\u793A\u65F6\u957F\u3002"}),u(t,c(l({},x),{children:u(E,{})})),u("h3",{id:"\u7EC4\u4EF6\u8C03\u7528","data-anchor":"\u7EC4\u4EF6\u8C03\u7528",children:"\u7EC4\u4EF6\u8C03\u7528"}),u("p",{children:"\u901A\u8FC7\u7EC4\u4EF6\u8C03\u7528 Notify \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u8FDB\u884C\u6CE8\u518C\uFF1A"}),u(t,c(l({},b),{children:u(F,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"Notify.show"}),u("td",{children:"\u5C55\u793A\u63D0\u793A"}),u("td",{children:u("code",{children:"options | message"})}),u("td",{children:"notify \u5B9E\u4F8B"})]}),e("tr",{children:[u("td",{children:"Notify.clear"}),u("td",{children:"\u5173\u95ED\u63D0\u793A"}),u("td",{children:"-"}),u("td",{children:u("code",{children:"void"})})]}),e("tr",{children:[u("td",{children:"Notify.setDefaultOptions"}),u("td",{children:"\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548"}),u("td",{children:u("code",{children:"options"})}),u("td",{children:u("code",{children:"void"})})]}),e("tr",{children:[u("td",{children:"Notify.resetDefaultOptions"}),u("td",{children:"\u91CD\u7F6E\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5BF9\u6240\u6709 Notify \u751F\u6548"}),u("td",{children:"-"}),u("td",{children:u("code",{children:"void"})})]})]})]}),u("h3",{id:"options","data-anchor":"options",children:"Options"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"type"}),e("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"primary"})," ",u("code",{children:"success"})," ",u("code",{children:"warning"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"danger"})})]}),e("tr",{children:[u("td",{children:"message"}),e("td",{children:["\u5C55\u793A\u6587\u6848\uFF0C\u652F\u6301\u901A\u8FC7",u("code",{children:"\\n"}),"\u6362\u884C"]}),u("td",{children:u("em",{children:"string|React.ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"duration"}),u("td",{children:"\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Cnotify \u4E0D\u4F1A\u6D88\u5931"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:u("code",{children:"3000"})})]}),e("tr",{children:[u("td",{children:"color"}),u("td",{children:"\u5B57\u4F53\u989C\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"white"})})]}),e("tr",{children:[u("td",{children:"background"}),u("td",{children:"\u80CC\u666F\u989C\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u81EA\u5B9A\u4E49\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"lockScroll"}),u("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"onClick"}),u("td",{children:"\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:u("em",{children:"(event: MouseEvent): void"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onClose"}),u("td",{children:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:u("em",{children:"() => void"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"teleport"}),u("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),u("td",{children:u("em",{children:"HTMLElement | () => HTMLElement"})}),u("td",{children:u("code",{children:"body"})})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(t,{code:"import type { NotifyType, NotifyProps } from 'react-vant';",lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-notify-text-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-xs) var(--rv-padding-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-primary-background-color"}),u("td",{children:u("em",{children:"var(--rv-primary-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-success-background-color"}),u("td",{children:u("em",{children:"var(--rv-success-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-danger-background-color"}),u("td",{children:u("em",{children:"var(--rv-danger-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-notify-warning-background-color"}),u("td",{children:u("em",{children:"var(--rv-warning-color)"})}),u("td",{children:"-"})]})]})]})]})})},M=[{Component:s,key:"notify-demo",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:C,key:"notify-demo-1",title:"\u901A\u77E5\u7C7B\u578B",card:!0},{Component:E,key:"notify-demo-2",title:"\u81EA\u5B9A\u4E49\u901A\u77E5",card:!0},{Component:F,key:"notify-component",title:"\u7EC4\u4EF6\u8C03\u7528",card:!0}],P=void 0,R=[{depth:1,text:"Notify \u6D88\u606F\u63D0\u793A",id:"notify-\u6D88\u606F\u63D0\u793A"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:3,text:"\u51FD\u6570\u8C03\u7528",id:"\u51FD\u6570\u8C03\u7528"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u901A\u77E5\u7C7B\u578B",id:"\u901A\u77E5\u7C7B\u578B"},{depth:3,text:"\u81EA\u5B9A\u4E49\u901A\u77E5",id:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{depth:3,text:"\u7EC4\u4EF6\u8C03\u7528",id:"\u7EC4\u4EF6\u8C03\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"Options",id:"options"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],j="/src/components/notify/README.md",S="Notify \u6D88\u606F\u63D0\u793A",V="1658500653000";var T=r=>r.children({MdContent:L,demos:M,frontmatter:P,slugs:R,filePath:j,title:S,updatedTime:V});export{L as MdContent,T as default,M as demos,j as filePath,P as frontmatter,R as slugs,S as title,V as updatedTime};
