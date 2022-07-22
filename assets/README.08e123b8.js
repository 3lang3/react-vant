var E=Object.defineProperty,T=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var o=(d,i,t)=>i in d?E(d,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[i]=t,n=(d,i)=>{for(var t in i||(i={}))C.call(i,t)&&o(d,t,i[t]);if(p)for(var t of p(i))D.call(i,t)&&o(d,t,i[t]);return d},l=(d,i)=>T(d,g(i));import{a as u,j as e,F as m}from"./main.531c777e.js";import{T as r,D as c}from"./WaterMark.6f52b203.js";var a=()=>u(r.Text,{children:["In the process of ",e(r.Text,{type:"danger",children:"internal"})," ",e(r.Text,{delete:!0,children:"desktop"}),"applications development,",e(r.Text,{type:"primary",children:" many different"})," design specs and ",e(r.Text,{underline:!0,children:"implementations"}),"would be ",e(r.Text,{type:"warning",children:"involved"})]});const x={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Text>
      In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
      <Typography.Text delete>desktop</Typography.Text>applications development,
      <Typography.Text type="primary"> many different</Typography.Text> design specs and <Typography.Text
        underline
      >
        implementations
      </Typography.Text>would be <Typography.Text type="warning">involved</Typography.Text>
    </Typography.Text>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Text>
      In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
      <Typography.Text delete>desktop</Typography.Text>applications development,
      <Typography.Text type="primary"> many different</Typography.Text> design specs and <Typography.Text
        underline
      >
        implementations
      </Typography.Text>would be <Typography.Text type="warning">involved</Typography.Text>
    </Typography.Text>
  );
};`}},key:"typography-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};const h="React Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u63D0 Issue \u7ED9\u6211\u4EEC\uFF0C\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u975E\u5E38\u6B22\u8FCE\u4F60\u7ED9\u6211\u4EEC\u53D1 PR\u3002";var y=()=>u("div",{className:"demo-typography",children:[e(r.Text,{ellipsis:!0,children:h}),e(c,{children:"\u591A\u884C\u7701\u7565"}),e(r.Text,{ellipsis:2,children:h}),e(c,{children:"\u5E26\u5C55\u5F00\u64CD\u4F5C"}),e(r.Text,{ellipsis:{rows:2,collapseText:"\u6536\u8D77",expandText:"\u5C55\u5F00"},children:h}),e(c,{children:"\u4FDD\u7559\u672B\u4F4D\u6587\u672C"}),e(r.Text,{ellipsis:{rows:2,symbol:"......",suffixCount:10},children:h}),e(c,{children:"\u81EA\u5B9A\u4E49\u6587\u672C\u540E\u7F00"}),e(r.Text,{ellipsis:{rows:2,suffixText:"--William",expandText:"\u66F4\u591A"},children:h})]});const v=`import React from 'react';
import { Typography, Divider } from 'react-vant';
import './style.less';

const content =
  'React Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u63D0 Issue \u7ED9\u6211\u4EEC\uFF0C\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u975E\u5E38\u6B22\u8FCE\u4F60\u7ED9\u6211\u4EEC\u53D1 PR\u3002';

export default () => {
  return (
    <div className="demo-typography">
      <Typography.Text ellipsis>{content}</Typography.Text>
      <Divider>\u591A\u884C\u7701\u7565</Divider>
      <Typography.Text ellipsis={2}>{content}</Typography.Text>
      <Divider>\u5E26\u5C55\u5F00\u64CD\u4F5C</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          collapseText: '\u6536\u8D77',
          expandText: '\u5C55\u5F00',
        }}
      >
        {content}
      </Typography.Text>
      <Divider>\u4FDD\u7559\u672B\u4F4D\u6587\u672C</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          symbol: '......',
          suffixCount: 10,
        }}
      >
        {content}
      </Typography.Text>
      <Divider>\u81EA\u5B9A\u4E49\u6587\u672C\u540E\u7F00</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          suffixText: '--William',
          expandText: '\u66F4\u591A',
        }}
      >
        {content}
      </Typography.Text>
    </div>
  );
};
`,B={code:v,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography, Divider } from 'react-vant';
import './style.less';

const content =
  'React Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u63D0 Issue \u7ED9\u6211\u4EEC\uFF0C\u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u975E\u5E38\u6B22\u8FCE\u4F60\u7ED9\u6211\u4EEC\u53D1 PR\u3002';

export default () => {
  return (
    <div className="demo-typography">
      <Typography.Text ellipsis>{content}</Typography.Text>
      <Divider>\u591A\u884C\u7701\u7565</Divider>
      <Typography.Text ellipsis={2}>{content}</Typography.Text>
      <Divider>\u5E26\u5C55\u5F00\u64CD\u4F5C</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          collapseText: '\u6536\u8D77',
          expandText: '\u5C55\u5F00',
        }}
      >
        {content}
      </Typography.Text>
      <Divider>\u4FDD\u7559\u672B\u4F4D\u6587\u672C</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          symbol: '......',
          suffixCount: 10,
        }}
      >
        {content}
      </Typography.Text>
      <Divider>\u81EA\u5B9A\u4E49\u6587\u672C\u540E\u7F00</Divider>
      <Typography.Text
        ellipsis={{
          rows: 2,
          suffixText: '--William',
          expandText: '\u66F4\u591A',
        }}
      >
        {content}
      </Typography.Text>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-typography {
  a {
    color: #3f45ff;
    cursor: pointer;
  }
}
`}},key:"typography-base",meta:{title:"\u6587\u672C\u7701\u7565"}};var F=()=>u(m,{children:[e(r.Title,{level:1,children:"\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(r.Title,{level:2,children:"\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(r.Title,{level:3,children:"\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(r.Title,{level:4,children:"\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(r.Title,{level:5,children:"\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898"}),e(r.Title,{level:6,children:"\u516D\u7EA7\u6D4B\u8BD5\u6807\u9898"})]});const A={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Title level={1}>\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={2}>\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={3}>\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={4}>\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={5}>\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={6}>\u516D\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <>
      <Typography.Title level={1}>\u4E00\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={2}>\u4E8C\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={3}>\u4E09\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={4}>\u56DB\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={5}>\u4E94\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
      <Typography.Title level={6}>\u516D\u7EA7\u6D4B\u8BD5\u6807\u9898</Typography.Title>
    </>
  );
};`}},key:"typography-demo-1",meta:{title:"\u6807\u9898"}};var s=()=>e(r.Link,{href:"https://github.com/3lang3/react-vant",target:"_blank",children:"\u6D4B\u8BD5Link"});const f={code:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Link href="https://github.com/3lang3/react-vant" target="_blank">
      \u6D4B\u8BD5Link
    </Typography.Link>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Typography } from 'react-vant';

export default () => {
  return (
    <Typography.Link href="https://github.com/3lang3/react-vant" target="_blank">
      \u6D4B\u8BD5Link
    </Typography.Link>
  );
};`}},key:"typography-demo-2",meta:{title:"\u94FE\u63A5\u6837\u5F0F"}},b=function({previewer:d=()=>null,api:i=()=>null}){const t=d;return e("div",{children:u("div",{children:[e("h1",{id:"typography-\u6587\u672C","data-anchor":"typography-\u6587\u672C",children:"Typography \u6587\u672C"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6587\u672C\u7684\u57FA\u672C\u683C\u5F0F\uFF0C\u652F\u6301\u4E2A\u6027\u5316\u6587\u672C\u7701\u7565\u914D\u7F6E\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Typography } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(t,l(n({},x),{children:e(a,{})})),e("h3",{id:"\u6587\u672C\u7701\u7565","data-anchor":"\u6587\u672C\u7701\u7565",children:"\u6587\u672C\u7701\u7565"}),u("p",{children:["\u4F7F\u7528 ",e("code",{children:"ellipsis"})," \u5C5E\u6027\u53EF\u4EE5\u5B9A\u5236\u4E2A\u6027\u5316\u7684\u6587\u672C\u7701\u7565\u5F62\u5F0F"]}),e("blockquote",{children:u("p",{children:["\u5F00\u542F ",e("code",{children:"ellipsis"})," \u540E\uFF0C\u8BF7\u786E\u4FDD ",e("code",{children:"children"})," \u4E3A\u7EAF",e("strong",{children:"\u5B57\u7B26\u4E32"}),"\u6216",e("strong",{children:"\u6570\u5B57"}),"\u7C7B\u578B"]})}),e(t,l(n({},B),{children:e(y,{})})),e("h3",{id:"\u6807\u9898","data-anchor":"\u6807\u9898",children:"\u6807\u9898"}),u("p",{children:[e("code",{children:"Typography.Title"})," \u4F7F\u7528\u6807\u9898\u7EC4\u4EF6"]}),e(t,l(n({},A),{children:e(F,{})})),e("h3",{id:"\u94FE\u63A5\u6837\u5F0F","data-anchor":"\u94FE\u63A5\u6837\u5F0F",children:"\u94FE\u63A5\u6837\u5F0F"}),u("p",{children:[e("code",{children:"Typography.Link"})," \u4F7F\u7528\u94FE\u63A5\u6837\u5F0F\u7EC4\u4EF6"]}),e(t,l(n({},f),{children:e(s,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"typography-props","data-anchor":"typography-props",children:"Typography Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u6587\u672C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C",e("code",{children:"danger"})," ",e("code",{children:" secondary"})," ",e("code",{children:"light"})," ",e("code",{children:"primary"})," ",e("code",{children:"success"})," ",e("code",{children:"warning "})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"size"}),u("td",{children:["\u6587\u672C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C",e("code",{children:"xs"})," ",e("code",{children:"sm"})," ",e("code",{children:"md"})," ",e("code",{children:"lg"})," ",e("code",{children:"xl"})," ",e("code",{children:"xxl"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"md"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u7981\u7528\u6587\u672C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"ellipsis"}),e("td",{children:"\u6587\u672C\u7701\u7565"}),e("td",{children:u("em",{children:["boolean|number|",e("a",{href:"#ellipsisconfig",children:"EllipsisConfig"})]})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"delete"}),e("td",{children:"\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"underline"}),e("td",{children:"\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u6587\u672C\u5C45\u4E2D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"strong"}),e("td",{children:"\u6587\u672C\u52A0\u7C97"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"function"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"ellipsisconfig","data-anchor":"ellipsisconfig",children:"EllipsisConfig"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"rows"}),e("td",{children:"\u7701\u7565\u884C\u6570"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"\u7701\u7565\u7B26\u53F7"}),e("td",{children:"\u7701\u7565\u884C\u6570"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"..."})})]}),u("tr",{children:[e("td",{children:"expandText"}),e("td",{children:"\u5C55\u5F00\u64CD\u4F5C\u7684\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"collapseText"}),e("td",{children:"\u6536\u8D77\u64CD\u4F5C\u7684\u6587\u6848"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"suffixText"}),e("td",{children:"\u6DFB\u52A0\u540E\u7F00\u6587\u672C"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"suffixCount"}),e("td",{children:"\u4FDD\u7559\u672B\u4F4D\u6587\u672C\u6570\u91CF"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onExpend"}),e("td",{children:"\u4FDD\u7559\u672B\u4F4D\u6587\u672C\u6570\u91CF"}),e("td",{children:e("em",{children:"(isExpend: boolean) => void"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onContentClick"}),e("td",{children:"\u70B9\u51FB\u6587\u672C\u5185\u5BB9\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(e) => void"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"typographytitle-props","data-anchor":"typographytitle-props",children:"Typography.Title Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"level"}),u("td",{children:["\u91CD\u8981\u7A0B\u5EA6\uFF0C\u53EF\u9009\u503C ",e("code",{children:"1"})," ",e("code",{children:"2"})," ",e("code",{children:"3"})," ",e("code",{children:"4"})," ",e("code",{children:"5"})," ",e("code",{children:"6"})]}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"5"})})]})})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-typography-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-link-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size-xs"}),e("td",{children:e("em",{children:"10px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size-sm"}),e("td",{children:e("em",{children:"12px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size-lg"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size-xl"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-font-size-xxl"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-l1"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-l2"}),e("td",{children:e("em",{children:"26px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-l3"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-l4"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-15"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-title-size-l6"}),e("td",{children:e("em",{children:"14px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-primary-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-danger-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-success-color"}),e("td",{children:e("em",{children:"var(--rv-success-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-warning-color"}),e("td",{children:e("em",{children:"var(--rv-warning-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-secondary-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-typography-light-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]})]})]})]})})},k=[{Component:a,key:"typography-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:y,key:"typography-base",title:"\u6587\u672C\u7701\u7565"},{Component:F,key:"typography-demo-1",title:"\u6807\u9898"},{Component:s,key:"typography-demo-2",title:"\u94FE\u63A5\u6837\u5F0F"}],w={simulator:{compact:!1,style:{background:"#fff"}}},P=[{depth:1,text:"Typography \u6587\u672C",id:"typography-\u6587\u672C"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6587\u672C\u7701\u7565",id:"\u6587\u672C\u7701\u7565"},{depth:3,text:"\u6807\u9898",id:"\u6807\u9898"},{depth:3,text:"\u94FE\u63A5\u6837\u5F0F",id:"\u94FE\u63A5\u6837\u5F0F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Typography Props",id:"typography-props"},{depth:3,text:"EllipsisConfig",id:"ellipsisconfig"},{depth:3,text:"Typography.Title Props",id:"typographytitle-props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],R="/src/components/typography/README.md",M="Typography \u6587\u672C",z="1658500653000";var _=d=>d.children({MdContent:b,demos:k,frontmatter:w,slugs:P,filePath:R,title:M,updatedTime:z});export{b as MdContent,_ as default,k as demos,R as filePath,w as frontmatter,P as slugs,M as title,z as updatedTime};
