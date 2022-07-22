import{j as u,a as n}from"./main.531c777e.js";const d=function({previewer:t=()=>null,api:l=()=>null}){const e=t;return u("div",{children:n("div",{children:[u("h1",{id:"usemount","data-anchor":"usemount",children:"useMount"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:["\u53EA\u5728\u7EC4\u4EF6 ",u("code",{children:"mount"})," \u65F6\u6267\u884C\u7684 hook\u3002"]}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),u("p",{children:"\u5728\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6267\u884C\u65B9\u6CD5\u3002"}),u(e,{code:`import React from 'react';
import { hooks, Toast } from 'react-vant';

const MyComponent = () => {
  hooks.useMount(() => {
    Toast.info('mount');
  });
  return <div>Hello World</div>;
};

export default () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setShow((v) => !v)}>
        {show ? 'unmount' : 'mount'}
      </button>
      {show && <MyComponent />}
    </>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(e,{code:"function useMount(fn: () => void);",lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:n("tr",{children:[u("td",{children:"fn"}),u("td",{children:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570"}),u("td",{children:u("em",{children:"() => void"})}),u("td",{children:"-"})]})})]})]})})},o=[],h=void 0,i=[{depth:1,text:"useMount",id:"usemount"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"}],r="/docs/hooks/use-mount.md",c="useMount",a="1658500653000";var C=t=>t.children({MdContent:d,demos:o,frontmatter:h,slugs:i,filePath:r,title:c,updatedTime:a});export{d as MdContent,C as default,o as demos,r as filePath,h as frontmatter,i as slugs,c as title,a as updatedTime};
