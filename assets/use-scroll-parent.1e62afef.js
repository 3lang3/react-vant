import{j as e,a as u}from"./main.531c777e.js";const r=function({previewer:t=()=>null,api:a=()=>null}){const n=t;return e("div",{children:u("div",{children:[e("h1",{id:"usescrollparent","data-anchor":"usescrollparent",children:"useScrollParent"}),e("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20\u3002"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),e(n,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const root = React.useRef();
  const scrollParent = hooks.useScrollParent(root);

  hooks.useEventListener(
    'scroll',
    () => {
      console.log('scroll');
    },
    { target: scrollParent },
  );

  return <div ref={root} />;
};`,lang:"jsx"}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(n,{code:`function useScrollParent(
  element: React.MutableRefObject<Element | undefined>,
): Element | HTMLElement | Window;`,lang:"ts"}),e("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"element"}),e("td",{children:"\u5F53\u524D\u5143\u7D20"}),e("td",{children:e("em",{children:"MutableRefObject|Element"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"\u8FD4\u56DE\u503C","data-anchor":"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"scrollParent"}),e("td",{children:"\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20"}),e("td",{children:e("em",{children:"Element"})})]})})]})]})})},d=[],l=void 0,c=[{depth:1,text:"useScrollParent",id:"usescrollparent"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"},{depth:3,text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C"}],h="/docs/hooks/use-scroll-parent.md",i="useScrollParent",o="1658500653000";var E=t=>t.children({MdContent:r,demos:d,frontmatter:l,slugs:c,filePath:h,title:i,updatedTime:o});export{r as MdContent,E as default,d as demos,h as filePath,l as frontmatter,c as slugs,i as title,o as updatedTime};
