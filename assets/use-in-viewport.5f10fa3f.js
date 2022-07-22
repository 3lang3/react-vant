import{j as u,a as e}from"./main.531c777e.js";const d=function({previewer:t=()=>null,api:l=()=>null}){const n=t;return u("div",{children:e("div",{children:[u("h1",{id:"useinviewport","data-anchor":"useinviewport",children:"useInViewport"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u5224\u65AD dom \u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u4E4B\u5185"}),u("blockquote",{children:e("p",{children:[u("a",{href:"/components/lazyload",children:"Lazyload \u61D2\u52A0\u8F7D"}),"\u7EC4\u4EF6\u57FA\u4E8E\u6B64 hook \u5B9E\u73B0"]})}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),e("p",{children:["\u4F7F\u7528 ",u("code",{children:"ref"})," \u76D1\u542C\u8282\u70B9\u5728\u89C6\u56FE\u53D8\u5316\u6216\u8005\u6EDA\u52A8\u65F6\u662F\u5426\u5728\u53EF\u89C6\u8303\u56F4\u4E4B\u5185"]}),u(n,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const ref = React.useRef();
  const inViewPort = hooks.useInViewport(ref);
  return (
    <div>
      <div ref={ref}>observer dom</div>
      <div style={{ marginTop: 70, color: inViewPort ? '#87d068' : '#f50' }}>
        {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(n,{code:"function useInViewport(target): boolean;",lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"target"}),u("td",{children:"\u9700\u8981\u76D1\u542C\u7684\u5143\u7D20"}),u("td",{children:u("em",{children:"HTMLElement | () => HTMLElement | React.MutableRefObject"})}),u("td",{children:"-"})]})})]})]})})},i=[],r=void 0,o=[{depth:1,text:"useInViewport",id:"useinviewport"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"}],h="/docs/hooks/use-in-viewport.md",c="useInViewport",a="1658500653000";var p=t=>t.children({MdContent:d,demos:i,frontmatter:r,slugs:o,filePath:h,title:c,updatedTime:a});export{d as MdContent,p as default,i as demos,h as filePath,r as frontmatter,o as slugs,c as title,a as updatedTime};
