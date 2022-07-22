import{j as t,a as n}from"./main.531c777e.js";const a=function({previewer:e=()=>null,api:l=()=>null}){const u=e;return t("div",{children:n("div",{children:[t("h1",{id:"usesetstate","data-anchor":"usesetstate",children:"useSetState"}),t("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:["\u7BA1\u7406 ",t("code",{children:"object"})," \u7C7B\u578B state \u7684 Hooks\uFF0C\u540C\u65F6\u652F\u6301\u8FD4\u56DE state \u6700\u65B0\u72B6\u6001\u3002"]}),t("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),t("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),t(u,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const [state, setState] = hooks.useSetState({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button type="button" onClick={() => setState({ hello: 'world' })}>
        set hello
      </button>
      <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
        count + 1
      </button>
    </div>
  );
};`,lang:"jsx"}),t("h3",{id:"\u83B7\u53D6-state-\u6700\u65B0\u72B6\u6001","data-anchor":"\u83B7\u53D6-state-\u6700\u65B0\u72B6\u6001",children:"\u83B7\u53D6 state \u6700\u65B0\u72B6\u6001"}),t(u,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const [state, setState, stateRef] = hooks.useSetState({ count: 0 });
  React.useEffect(() => {
    setInterval(() => {
      setState((prev) => ({ count: prev.count + 1 }));
      console.log(state.count, stateRef.current.count);
    }, 1000);
  }, []);

  return null;
};`,lang:"jsx"}),t("h2",{id:"api","data-anchor":"api",children:"API"}),t("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),t("p",{children:"\u7528\u6CD5\u4E0E class \u7EC4\u4EF6\u7684 this.setState \u57FA\u672C\u4E00\u81F4"}),t(u,{code:`function useSetState<T extends object>(
  initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void, React.MutableRefObject<T>];`,lang:"ts"})]})})},o=[],s=void 0,c=[{depth:1,text:"useSetState",id:"usesetstate"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:3,text:"\u83B7\u53D6 state \u6700\u65B0\u72B6\u6001",id:"\u83B7\u53D6-state-\u6700\u65B0\u72B6\u6001"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"}],r="/docs/hooks/use-set-state.md",d="useSetState",i="1658500653000";var p=e=>e.children({MdContent:a,demos:o,frontmatter:s,slugs:c,filePath:r,title:d,updatedTime:i});export{a as MdContent,p as default,o as demos,r as filePath,s as frontmatter,c as slugs,d as title,i as updatedTime};
