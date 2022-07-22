import{j as e,a as u}from"./main.531c777e.js";const d=function({previewer:t=()=>null,api:o=()=>null}){const n=t;return e("div",{children:u("div",{children:[e("h1",{id:"useclickaway","data-anchor":"useclickaway",children:"useClickAway"}),e("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7BA1\u7406\u76EE\u6807\u5143\u7D20\u5916\u70B9\u51FB\u4E8B\u4EF6\u7684 Hook\u3002"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),e(n,{code:`import React from 'react';
import { useClickAway } from 'react-vant';

export default () => {
  const ref = React.useRef();

  useClickAway(ref, () => {
    console.log('click outside!');
  });

  return <div ref={ref} />;
};`,lang:"jsx"}),e("h3",{id:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6","data-anchor":"\u81EA\u5B9A\u4E49\u4E8B\u4EF6",children:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"eventName"})," \u9009\u9879\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9700\u8981\u76D1\u542C\u7684\u4E8B\u4EF6\u7C7B\u578B\u3002"]}),e(n,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const ref = React.useRef();

  hooks.useClickAway(
    ref,
    () => {
      console.log('click outside!');
    },
    'touchstart',
  );

  return <div ref={ref} />;
};`,lang:"jsx"}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e(n,{code:`function useClickAway(
  target: HTMLElement | React.MutableRefObject | () => HTMLElement,
  listener: EventListener,
  eventName?: string;
): void;`,lang:"ts"}),e("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"target"}),e("td",{children:"\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20"}),e("td",{children:e("em",{children:"HTMLElement|React.MutableRefObject"})}),e("td",{children:e("code",{children:"() => HTMLElement"})})]}),u("tr",{children:[e("td",{children:"listener"}),e("td",{children:"\u70B9\u51FB\u5916\u90E8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"EventListener"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"eventName"}),e("td",{children:"\u4E8B\u4EF6\u540D\u79F0"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"click"})})]})]})]})]})})},c=[],i=void 0,r=[{depth:1,text:"useClickAway",id:"useclickaway"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6",id:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"}],l="/docs/hooks/use-click-away.md",a="useClickAway",h="1658500653000";var s=t=>t.children({MdContent:d,demos:c,frontmatter:i,slugs:r,filePath:l,title:a,updatedTime:h});export{d as MdContent,s as default,c as demos,l as filePath,i as frontmatter,r as slugs,a as title,h as updatedTime};
