import{j as u,a as e}from"./main.531c777e.js";const i=function({previewer:n=()=>null,api:a=()=>null}){const d=n;return u("div",{children:e("div",{children:[u("h1",{id:"usewindowsize","data-anchor":"usewindowsize",children:"useWindowSize"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u89C6\u53E3\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5E76\u5728\u7A97\u53E3\u5927\u5C0F\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0\u3002"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),u(d,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const { width, height } = hooks.useWindowSize();

  console.log(width); // \u7A97\u53E3\u5BBD\u5EA6
  console.log(height); // \u7A97\u53E3\u9AD8\u5EA6

  React.useEffect(
    [width, height],
    () => {
      console.log('window resized');
    },
    [width, height],
  );

  return null;
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(d,{code:`function useWindowSize(): {
  width: number;
  height: number;
};`,lang:"ts"}),u("h3",{id:"\u8FD4\u56DE\u503C","data-anchor":"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"width"}),u("td",{children:"\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"height"}),u("td",{children:"\u6D4F\u89C8\u5668\u7A97\u53E3\u9AD8\u5EA6"}),u("td",{children:u("em",{children:"number"})})]})]})]})]})})},t=[],h=void 0,r=[{depth:1,text:"useWindowSize",id:"usewindowsize"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C"}],o="/docs/hooks/use-window-size.md",c="useWindowSize",l="1658500653000";var E=n=>n.children({MdContent:i,demos:t,frontmatter:h,slugs:r,filePath:o,title:c,updatedTime:l});export{i as MdContent,E as default,t as demos,o as filePath,h as frontmatter,r as slugs,c as title,l as updatedTime};
