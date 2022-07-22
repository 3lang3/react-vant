var o=Object.defineProperty,C=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var a=(l,d,t)=>d in l?o(l,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[d]=t,n=(l,d)=>{for(var t in d||(d={}))s.call(d,t)&&a(l,t,d[t]);if(c)for(var t of c(d))m.call(d,t)&&a(l,t,d[t]);return l},i=(l,d)=>C(l,p(d));import{a as e,j as u}from"./main.531c777e.js";import{dU as r,c9 as A}from"./WaterMark.6f52b203.js";var F=()=>e(r,{initExpanded:["1"],children:[u(r.Item,{title:"\u6807\u98981",name:"1",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98982",name:"2",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98983",name:"3",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})]});const B={code:`import React from 'react';
import { Collapse } from 'react-vant';

export default () => {
  return (
    <Collapse initExpanded={['1']}>
      <Collapse.Item title="\u6807\u98981" name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Collapse } from 'react-vant';

export default () => {
  return (
    <Collapse initExpanded={['1']}>
      <Collapse.Item title="\u6807\u98981" name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`}},key:"collapse-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var h=()=>e(r,{initExpanded:"1",accordion:!0,children:[u(r.Item,{icon:u(A,{}),title:u("div",{children:"\u81EA\u5B9A\u4E49\u6807\u9898"}),name:"1",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98982",name:"2",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98983",name:"3",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})]});const D={code:`import React from 'react';
import { Collapse } from 'react-vant';
import { QuestionO } from '@react-vant/icons';

export default () => {
  return (
    <Collapse initExpanded="1" accordion>
      <Collapse.Item icon={<QuestionO />} title={<div>\u81EA\u5B9A\u4E49\u6807\u9898</div>} name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Collapse } from 'react-vant';
import { QuestionO } from '@react-vant/icons';

export default () => {
  return (
    <Collapse initExpanded="1" accordion>
      <Collapse.Item icon={<QuestionO />} title={<div>\u81EA\u5B9A\u4E49\u6807\u9898</div>} name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`}},key:"collapse-demo-1",meta:{title:"\u624B\u98CE\u7434"}};var E=()=>e(r,{children:[u(r.Item,{title:"\u6807\u98981",name:"1",children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98982",name:"2",disabled:!0,children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"}),u(r.Item,{title:"\u6807\u98983",name:"3",disabled:!0,children:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"})]});const v={code:`import React from 'react';
import { Collapse } from 'react-vant';

export default () => {
  return (
    <Collapse>
      <Collapse.Item title="\u6807\u98981" name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2" disabled>
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3" disabled>
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Collapse } from 'react-vant';

export default () => {
  return (
    <Collapse>
      <Collapse.Item title="\u6807\u98981" name="1">
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98982" name="2" disabled>
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
      <Collapse.Item title="\u6807\u98983" name="3" disabled>
        \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
      </Collapse.Item>
    </Collapse>
  );
};`}},key:"collapse-demo-2",meta:{title:"\u7981\u7528\u72B6\u6001"}},I=function({previewer:l=()=>null,api:d=()=>null}){const t=l;return u("div",{children:e("div",{children:[u("h1",{id:"collapse-\u6298\u53E0\u9762\u677F","data-anchor":"collapse-\u6298\u53E0\u9762\u677F",children:"Collapse \u6298\u53E0\u9762\u677F"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u5C06\u4E00\u7EC4\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u7684\u6807\u9898\u53EF\u4EE5\u5C55\u5F00\u6216\u6536\u7F29\u5176\u5185\u5BB9\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(t,{code:"import { Collapse } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"initExpanded"})," \u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C",u("code",{children:"initExpanded"})," \u4E3A\u6570\u7EC4\u683C\u5F0F\u3002"]}),u(t,i(n({},B),{children:u(F,{})})),u("h3",{id:"\u624B\u98CE\u7434","data-anchor":"\u624B\u98CE\u7434",children:"\u624B\u98CE\u7434"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"accordion"})," \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6700\u591A\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\uFF0C\u6B64\u65F6 ",u("code",{children:"initExpanded"})," \u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F\u3002"]}),u(t,i(n({},D),{children:u(h,{})})),u("h3",{id:"\u7981\u7528\u72B6\u6001","data-anchor":"\u7981\u7528\u72B6\u6001",children:"\u7981\u7528\u72B6\u6001"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"disabled"})," \u5C5E\u6027\u6765\u7981\u7528\u5355\u4E2A\u9762\u677F\u3002"]}),u(t,i(n({},v),{children:u(E,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"collapse-props","data-anchor":"collapse-props",children:"Collapse Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"initExpanded"}),u("td",{children:"\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name"}),e("td",{children:["\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A",u("em",{children:"number | string"}),u("br",{}),"\u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A",u("em",{children:"(number | string)[]"})]}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"accordion"}),u("td",{children:"\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"border"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"nativeRef"}),u("td",{children:"\u7EC4\u4EF6\u6839\u90E8DOM\u5143\u7D20\u5F15\u7528"}),u("td",{children:u("em",{children:"Ref"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"collapse-events","data-anchor":"collapse-events",children:"Collapse Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1"}),u("td",{children:"initExpanded: \u7C7B\u578B\u4E0E initExpanded \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4"})]})})]}),u("h3",{id:"collapseitem-props","data-anchor":"collapseitem-props",children:"CollapseItem Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"name"}),u("td",{children:"\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7D22\u5F15\u503C"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"index"})})]}),e("tr",{children:[u("td",{children:"icon"}),u("td",{children:"\u6807\u9898\u680F\u5DE6\u4FA7\u56FE\u6807"}),u("td",{children:u("em",{children:"string|ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"size"}),e("td",{children:["\u6807\u9898\u680F\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"large"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u6807\u9898\u680F\u53F3\u4FA7\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"label"}),u("td",{children:"\u6807\u9898\u680F\u63CF\u8FF0\u4FE1\u606F"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"border"}),u("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"isLink"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u6807\u9898\u680F\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u9762\u677F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"titleClass"}),u("td",{children:"\u5DE6\u4FA7\u6807\u9898\u989D\u5916\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"valueClass"}),u("td",{children:"\u53F3\u4FA7\u5185\u5BB9\u989D\u5916\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"labelClass"}),u("td",{children:"\u63CF\u8FF0\u4FE1\u606F\u989D\u5916\u7C7B\u540D"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"collapseitem-\u65B9\u6CD5","data-anchor":"collapseitem-\u65B9\u6CD5",children:"CollapseItem \u65B9\u6CD5"}),e("p",{children:["\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CollapseItem \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"toggle"}),e("td",{children:["\u5207\u6362\u9762\u8BD5\u5C55\u5F00\u72B6\u6001\uFF0C\u4F20 ",u("code",{children:"true"})," \u4E3A\u5C55\u5F00\uFF0C",u("code",{children:"false"})," \u4E3A\u6536\u8D77\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u5207\u6362"]}),u("td",{children:u("em",{children:"expand?: boolean"})}),u("td",{children:"-"})]})})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(t,{code:"import type { CollapseItemInstance } from 'react-vant';",lang:"ts"}),e("p",{children:[u("code",{children:"CollapseItemInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),u(t,{code:`import { useRef } from 'react';
import type { CollapseItemInstance } from 'react-vant';

const collapseItemRef = useRef<CollapseItemInstance>(null);

collapseItemRef.current?.toggle();`,lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-collapse-item-transition-duration"}),u("td",{children:u("em",{children:"var(--rv-animation-duration-base)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-content-padding"}),u("td",{children:u("em",{children:"var(--rv-padding-sm) var(--rv-padding-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-content-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-content-line-height"}),u("td",{children:u("em",{children:"1.5"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-content-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-content-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-collapse-item-title-disabled-color"}),u("td",{children:u("em",{children:"var(--rv-gray-5)"})}),u("td",{children:"-"})]})]})]})]})})},x=[{Component:F,key:"collapse-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:h,key:"collapse-demo-1",title:"\u624B\u98CE\u7434"},{Component:E,key:"collapse-demo-2",title:"\u7981\u7528\u72B6\u6001"}],f=void 0,b=[{depth:1,text:"Collapse \u6298\u53E0\u9762\u677F",id:"collapse-\u6298\u53E0\u9762\u677F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u624B\u98CE\u7434",id:"\u624B\u98CE\u7434"},{depth:3,text:"\u7981\u7528\u72B6\u6001",id:"\u7981\u7528\u72B6\u6001"},{depth:2,text:"API",id:"api"},{depth:3,text:"Collapse Props",id:"collapse-props"},{depth:3,text:"Collapse Events",id:"collapse-events"},{depth:3,text:"CollapseItem Props",id:"collapseitem-props"},{depth:3,text:"CollapseItem \u65B9\u6CD5",id:"collapseitem-\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],g="/src/components/collapse/README.md",y="Collapse \u6298\u53E0\u9762\u677F",P="1658500653000";var j=l=>l.children({MdContent:I,demos:x,frontmatter:f,slugs:b,filePath:g,title:y,updatedTime:P});export{I as MdContent,j as default,x as demos,g as filePath,f as frontmatter,b as slugs,y as title,P as updatedTime};
