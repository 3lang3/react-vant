import{j as u,a as e}from"./main.531c777e.js";const d=function({previewer:t=()=>null,api:f=()=>null}){const n=t;return u("div",{children:e("div",{children:[u("h1",{id:"useupdateeffect","data-anchor":"useupdateeffect",children:"useUpdateEffect"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:["\u53EA\u5728\u4F9D\u8D56\u66F4\u65B0\u65F6\u6267\u884C\u7684 ",u("code",{children:"useEffect"})," hook\u3002"]}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),e("p",{children:["\u4F7F\u7528\u4E0A\u4E0E ",u("code",{children:"useEffect"})," \u5B8C\u5168\u76F8\u540C\uFF0C\u53EA\u662F\u5B83\u5FFD\u7565\u4E86\u9996\u6B21\u6E32\u67D3\uFF0C\u4E14\u53EA\u5728\u4F9D\u8D56\u9879\u66F4\u65B0\u65F6\u8FD0\u884C\u3002"]}),u(n,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const [count, setCount] = React.useState(0);
  const [effectCount, setEffectCount] = React.useState(0);
  const [updateEffectCount, setUpdateEffectCount] = React.useState(0);

  React.useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  hooks.useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
  }, [count]);

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(n,{code:"function useUpdateEffect(effect: () => void | (() => void | undefined), deps?: deps);",lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"effect"}),u("td",{children:"\u53EF\u6267\u884C\u51FD\u6570"}),u("td",{children:u("em",{children:"() => void"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"deps"}),u("td",{children:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u4F9D\u8D56\u53D8\u5316\u7684\u5BF9\u8C61"}),u("td",{children:u("em",{children:"Array|undefined"})}),u("td",{children:"-"})]})]})]})]})})},c=[],i=void 0,r=[{depth:1,text:"useUpdateEffect",id:"useupdateeffect"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"}],o="/docs/hooks/use-update-effect.md",a="useUpdateEffect",h="1658500653000";var l=t=>t.children({MdContent:d,demos:c,frontmatter:i,slugs:r,filePath:o,title:a,updatedTime:h});export{d as MdContent,l as default,c as demos,o as filePath,i as frontmatter,r as slugs,a as title,h as updatedTime};
