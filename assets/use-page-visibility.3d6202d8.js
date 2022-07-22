import{j as i,a as u}from"./main.531c777e.js";const d=function({previewer:e=()=>null,api:c=()=>null}){const t=e;return i("div",{children:u("div",{children:[i("h1",{id:"usepagevisibility","data-anchor":"usepagevisibility",children:"usePageVisibility"}),i("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),i("p",{children:"\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001\u3002"}),i("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),i("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),i(t,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const pageVisibility = hooks.usePageVisibility();

  React.useEffect(() => {
    console.log('page visibility: ', value);
  }, [pageVisibility]);

  return null;
};`,lang:"js"}),i("h2",{id:"api","data-anchor":"api",children:"API"}),i("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),i(t,{code:`type VisibilityState = 'visible' | 'hidden';

function usePageVisibility(): VisibilityState;`,lang:"ts"}),i("h3",{id:"\u8FD4\u56DE\u503C","data-anchor":"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),u("table",{children:[i("thead",{children:u("tr",{children:[i("th",{children:"\u53C2\u6570"}),i("th",{children:"\u8BF4\u660E"}),i("th",{children:"\u7C7B\u578B"})]})}),i("tbody",{children:u("tr",{children:[i("td",{children:"visibilityState"}),u("td",{children:["\u9875\u9762\u5F53\u524D\u7684\u53EF\u89C1\u72B6\u6001\uFF0C",i("code",{children:"visible"})," \u4E3A\u53EF\u89C1\uFF0C",i("code",{children:"hidden"})," \u4E3A\u9690\u85CF"]}),i("td",{children:i("em",{children:"VisibilityState"})})]})})]})]})})},n=[],a=void 0,l=[{depth:1,text:"usePageVisibility",id:"usepagevisibility"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C"}],h="/docs/hooks/use-page-visibility.md",r="usePageVisibility",s="1658500653000";var C=e=>e.children({MdContent:d,demos:n,frontmatter:a,slugs:l,filePath:h,title:r,updatedTime:s});export{d as MdContent,C as default,n as demos,h as filePath,a as frontmatter,l as slugs,r as title,s as updatedTime};
