var A=Object.defineProperty,C=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(t,i,e)=>i in t?A(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,l=(t,i)=>{for(var e in i||(i={}))h.call(i,e)&&d(t,e,i[e]);if(o)for(var e of o(i))f.call(i,e)&&d(t,e,i[e]);return t},a=(t,i)=>C(t,v(i));import{a as r,j as u,r as F}from"./main.531c777e.js";import{C as n,de as x}from"./WaterMark.6f52b203.js";var B=()=>r("div",{className:"demo-styles",children:[u("div",{className:"rv-ellipsis",children:"\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565"}),u("div",{className:"rv-multi-ellipsis--l2",children:"\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565\u3002\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565"}),u("div",{className:"rv-multi-ellipsis--l3",children:"\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565"})]});const k={code:`import React from 'react';
import './demo/ellipsis.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-ellipsis">\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565</div>
      <div className="rv-multi-ellipsis--l2">
        \u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565\u3002\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565
      </div>
      <div className="rv-multi-ellipsis--l3">
        \u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565
      </div>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import './demo/ellipsis.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-ellipsis">\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565</div>
      <div className="rv-multi-ellipsis--l2">
        \u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565\u3002\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565
      </div>
      <div className="rv-multi-ellipsis--l3">
        \u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E09\u884C\u7684\u6587\u5B57\uFF0C\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u88AB\u7701\u7565
      </div>
    </div>
  );
};`},"demo/ellipsis.less":{type:"FILE",value:`.demo-styles {
  .rv-ellipsis,
  .rv-multi-ellipsis--l2,
  .rv-multi-ellipsis--l3 {
    max-width: 300px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 18px;
  }

  .rv-ellipsis,
  .rv-multi-ellipsis--l2,
  .rv-multi-ellipsis--l3 {
    margin-bottom: 16px;
  }

  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: #3f45ff;
    border-radius: 8px;
  }
}
`}},key:"styles-demo",meta:{title:"\u6587\u5B57\u7701\u7565"}};var m=()=>u("div",{className:"demo-styles",children:u("div",{className:"rv-hairline--top"})});const S={code:`import React from 'react';
import './demo/hairline.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-hairline--top"></div>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"index.jsx":{type:"FILE",value:`import React from 'react';
import './demo/hairline.less';

export default () => {
  return (
    <div className="demo-styles">
      <div className="rv-hairline--top"></div>
    </div>
  );
};`},"demo/hairline.less":{type:"FILE",value:`.demo-styles {
  .rv-hairline--top {
    height: 30px;
    background-color: #fff;

    &::after {
      top: 5px;
    }
  }
}
`}},key:"styles-demo-1",meta:{title:"1px \u8FB9\u6846"}};var c=()=>{const[t,i]=F.exports.useState(!1),[e,p]=F.exports.useState(""),s=E=>{i(!0),p(E),setTimeout(()=>{i(!1)},500)};return r("div",{className:"demo-styles",children:[u(n,{isLink:!0,title:"Fade",onClick:()=>s("rv-fade")}),u(n,{isLink:!0,title:"Slide Up",onClick:()=>s("rv-slide-up")}),u(n,{isLink:!0,title:"Slide Down",onClick:()=>s("rv-slide-down")}),u(n,{isLink:!0,title:"Slide Left",onClick:()=>s("rv-slide-left")}),u(n,{isLink:!0,title:"Slide Right",onClick:()=>s("rv-slide-right")}),u(x,{in:t,timeout:300,classNames:e,unmountOnExit:!0,children:u("div",{className:"demo-animate-block"})})]})};const y=`import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { CSSTransition } from 'react-transition-group';
import './transition.less';

export default () => {
  const [show, setShow] = useState(false);
  const [transition, setTransition] = useState('');

  const animate = (transitionName: string) => {
    setShow(true);
    setTransition(transitionName);

    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div className="demo-styles">
      <Cell isLink title="Fade" onClick={() => animate('rv-fade')} />
      <Cell isLink title="Slide Up" onClick={() => animate('rv-slide-up')} />
      <Cell isLink title="Slide Down" onClick={() => animate('rv-slide-down')} />
      <Cell isLink title="Slide Left" onClick={() => animate('rv-slide-left')} />
      <Cell isLink title="Slide Right" onClick={() => animate('rv-slide-right')} />

      <CSSTransition in={show} timeout={300} classNames={transition} unmountOnExit>
        <div className="demo-animate-block" />
      </CSSTransition>
    </div>
  );
};
`,D={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.6.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"react-transition-group":{type:"NPM",value:"4.4.2"},"react-dom":{type:"NPM",value:">=16.6.0"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { CSSTransition } from 'react-transition-group';
import './transition.less';

export default () => {
  const [show, setShow] = useState(false);
  const [transition, setTransition] = useState('');

  const animate = (transitionName: string) => {
    setShow(true);
    setTransition(transitionName);

    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div className="demo-styles">
      <Cell isLink title="Fade" onClick={() => animate('rv-fade')} />
      <Cell isLink title="Slide Up" onClick={() => animate('rv-slide-up')} />
      <Cell isLink title="Slide Down" onClick={() => animate('rv-slide-down')} />
      <Cell isLink title="Slide Left" onClick={() => animate('rv-slide-left')} />
      <Cell isLink title="Slide Right" onClick={() => animate('rv-slide-right')} />

      <CSSTransition in={show} timeout={300} classNames={transition} unmountOnExit>
        <div className="demo-animate-block" />
      </CSSTransition>
    </div>
  );
};
`},"transition.less":{type:"FILE",value:`.demo-styles {
  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: #3f45ff;
    border-radius: 8px;
  }
}
`}},key:"styles-transition",meta:{title:"\u52A8\u753B"}},N=function({previewer:t=()=>null,api:i=()=>null}){const e=t;return u("div",{children:r("div",{children:[u("h1",{id:"\u5185\u7F6E\u6837\u5F0F","data-anchor":"\u5185\u7F6E\u6837\u5F0F",children:"\u5185\u7F6E\u6837\u5F0F"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u9ED8\u8BA4\u5305\u542B\u4E86\u4E00\u4E9B\u5E38\u7528\u6837\u5F0F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 className \u7684\u65B9\u5F0F\u4F7F\u7528\u3002"}),u("h3",{id:"\u6587\u5B57\u7701\u7565","data-anchor":"\u6587\u5B57\u7701\u7565",children:"\u6587\u5B57\u7701\u7565"}),u("p",{children:"\u5F53\u6587\u672C\u5185\u5BB9\u957F\u5EA6\u8D85\u8FC7\u5BB9\u5668\u6700\u5927\u5BBD\u5EA6\u65F6\uFF0C\u81EA\u52A8\u7701\u7565\u591A\u4F59\u7684\u6587\u672C\u3002"}),u(e,a(l({},k),{children:u(B,{})})),u("h3",{id:"1px-\u8FB9\u6846","data-anchor":"1px-\u8FB9\u6846",children:"1px \u8FB9\u6846"}),u("p",{children:"\u4E3A\u5143\u7D20\u6DFB\u52A0 Retina \u5C4F\u5E55\u4E0B\u7684 1px \u8FB9\u6846\uFF08\u5373 hairline\uFF09\uFF0C\u57FA\u4E8E\u4F2A\u7C7B transform \u5B9E\u73B0\u3002"}),u(e,a(l({},S),{children:u(m,{})})),u("h3",{id:"\u52A8\u753B","data-anchor":"\u52A8\u753B",children:"\u52A8\u753B"}),r("p",{children:["\u8FD9\u91CC\u901A\u8FC7 ",u("code",{children:"react-transition-group"})," \u7B2C\u4E09\u65B9\u5E93\u4F7F\u7528\u5185\u7F6E\u7684\u52A8\u753B"]}),u(e,{code:`# \u5B89\u88C5
yarn add react-transition-group`,lang:"bash"}),u(e,{code:"import { CSSTransition } from 'react-transition-group';",lang:"js"}),u(e,a(l({},D),{children:u(c,{})}))]})})},g=[{Component:B,key:"styles-demo",title:"\u6587\u5B57\u7701\u7565"},{Component:m,key:"styles-demo-1",title:"1px \u8FB9\u6846"},{Component:c,key:"styles-transition",title:"\u52A8\u753B"}],w=void 0,L=[{depth:1,text:"\u5185\u7F6E\u6837\u5F0F",id:"\u5185\u7F6E\u6837\u5F0F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:3,text:"\u6587\u5B57\u7701\u7565",id:"\u6587\u5B57\u7701\u7565"},{depth:3,text:"1px \u8FB9\u6846",id:"1px-\u8FB9\u6846"},{depth:3,text:"\u52A8\u753B",id:"\u52A8\u753B"}],T="/src/components/styles/README.md",M="\u5185\u7F6E\u6837\u5F0F",R="1658500653000";var I=t=>t.children({MdContent:N,demos:g,frontmatter:w,slugs:L,filePath:T,title:M,updatedTime:R});export{N as MdContent,I as default,g as demos,T as filePath,w as frontmatter,L as slugs,M as title,R as updatedTime};
