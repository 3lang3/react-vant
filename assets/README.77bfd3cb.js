var k=Object.defineProperty,S=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(t,n,r)=>n in t?k(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,m=(t,n)=>{for(var r in n||(n={}))N.call(n,r)&&L(t,r,n[r]);if(A)for(var r of A(n))j.call(n,r)&&L(t,r,n[r]);return t},p=(t,n)=>S(t,_(n));import{r as l,j as u,a as e}from"./main.28fb06c0.js";import{dv as F,dH as a,C as c,dw as I}from"./index.60aa6900.js";async function h(t){return new Promise((n,r)=>{setTimeout(()=>{t&&r(new Error("error")),n(Array.from({length:10},(C,s)=>s))},1e3)})}var b=()=>{const t=l.exports.useRef(!1),n=l.exports.useRef(null),[r,C]=l.exports.useState([]),[s,v]=l.exports.useState([]),[R,y]=l.exports.useState(0),[B,g]=l.exports.useState([]),[o,E]=l.exports.useState(!1),x=async()=>{const d=await h();t.current||(C(i=>[...i,...d]),r.length>=30&&E(!0))},T=async()=>{y(i=>i+1);const d=await h(R===1);t.current||(v(i=>[...i,...d]),s.length>=30&&E(!0))},D=async d=>{const i=await h();t.current||g(P=>{const f=d?i:[...P,...i];return f.length>=30&&E(!0),f})},w=async()=>{var d;E(!1),await D(1),(d=n.current)==null||d.check()};return l.exports.useEffect(()=>()=>{t.current=!0},[]),u("div",{className:"demo-list",children:e(F,{sticky:!0,onChange:()=>E(!1),children:[u(F.TabPane,{title:"\u57FA\u672C\u7528\u6CD5",children:u(a,{finished:o,onLoad:x,children:r.length?r.map((d,i)=>u(c,{title:i+1},i)):null})}),u(F.TabPane,{title:"\u9519\u8BEF\u63D0\u793A",children:u(a,{finished:o,errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",onLoad:T,children:s.length?s.map((d,i)=>u(c,{title:i+1},i)):null})}),u(F.TabPane,{title:"\u4E0B\u62C9\u5237\u65B0",children:u(I,{onRefresh:w,children:u(a,{ref:n,finished:o,onLoad:D,children:B.length?B.map((d,i)=>u(c,{title:i+1},i)):null})})})]})})};const M=`/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { PullRefresh, List, Tabs, Cell } from 'react-vant';
import type { ListInstance } from 'react-vant';
import './style.less';

// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 1000);
  });
}

export default () => {
  const unmountedRef = useRef<boolean>(false);
  const listRef = useRef<ListInstance>(null);
  // \u57FA\u672C\u7528\u6CD5\u5217\u8868\u6570\u636E
  const [list, setList] = useState<Array<number>>([]);
  // \u9519\u8BEF\u63D0\u793A\u5217\u8868\u6570\u636E
  const [errorList, setErrorList] = useState<Array<number>>([]);
  const [count, setCount] = useState(0);
  // \u4E0B\u62C9\u5237\u65B0\u5217\u8868\u6570\u636E
  const [refreshList, setRefreshList] = useState<Array<number>>([]);

  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = async () => {
    const data = await getData();
    if (unmountedRef.current) return;
    setList((v) => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadError = async () => {
    // \u5F02\u6B65\u66F4\u65B0\u6570\u636E
    setCount((v) => v + 1);
    const data = await getData(count === 1);
    if (unmountedRef.current) return;
    setErrorList((v) => [...v, ...data]);
    if (errorList.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData();
    if (unmountedRef.current) return;
    setRefreshList((v) => {
      const newList = isRefresh ? data : [...v, ...data];
      if (newList.length >= 30) {
        setFinished(true);
      }
      return newList;
    });
  };

  const onRefresh = async () => {
    setFinished(false);
    await onLoadRefresh(1);
    listRef.current?.check();
  };

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return (
    <div className="demo-list">
      <Tabs sticky onChange={() => setFinished(false)}>
        <Tabs.TabPane title="\u57FA\u672C\u7528\u6CD5">
          <List finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        {/* \u82E5 onLoad \u629B\u51FA\u9519\u8BEF\uFF0C\u5373\u53EF\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 onLoad \u4E8B\u4EF6 */}
        <Tabs.TabPane title="\u9519\u8BEF\u63D0\u793A">
          <List finished={finished} errorText="\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D" onLoad={onLoadError}>
            {errorList.length
              ? errorList.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u4E0B\u62C9\u5237\u65B0">
          {/* List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E PullRefresh \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C */}
          <PullRefresh onRefresh={onRefresh}>
            <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
              {refreshList.length
                ? refreshList.map((_, i) => {
                    return <Cell key={i} title={i + 1} />;
                  })
                : null}
            </List>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
`,z={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"17.0.2"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.tsx":{type:"FILE",value:`/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { PullRefresh, List, Tabs, Cell } from 'react-vant';
import type { ListInstance } from 'react-vant';
import './style.less';

// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 1000);
  });
}

export default () => {
  const unmountedRef = useRef<boolean>(false);
  const listRef = useRef<ListInstance>(null);
  // \u57FA\u672C\u7528\u6CD5\u5217\u8868\u6570\u636E
  const [list, setList] = useState<Array<number>>([]);
  // \u9519\u8BEF\u63D0\u793A\u5217\u8868\u6570\u636E
  const [errorList, setErrorList] = useState<Array<number>>([]);
  const [count, setCount] = useState(0);
  // \u4E0B\u62C9\u5237\u65B0\u5217\u8868\u6570\u636E
  const [refreshList, setRefreshList] = useState<Array<number>>([]);

  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = async () => {
    const data = await getData();
    if (unmountedRef.current) return;
    setList((v) => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadError = async () => {
    // \u5F02\u6B65\u66F4\u65B0\u6570\u636E
    setCount((v) => v + 1);
    const data = await getData(count === 1);
    if (unmountedRef.current) return;
    setErrorList((v) => [...v, ...data]);
    if (errorList.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData();
    if (unmountedRef.current) return;
    setRefreshList((v) => {
      const newList = isRefresh ? data : [...v, ...data];
      if (newList.length >= 30) {
        setFinished(true);
      }
      return newList;
    });
  };

  const onRefresh = async () => {
    setFinished(false);
    await onLoadRefresh(1);
    listRef.current?.check();
  };

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return (
    <div className="demo-list">
      <Tabs sticky onChange={() => setFinished(false)}>
        <Tabs.TabPane title="\u57FA\u672C\u7528\u6CD5">
          <List finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        {/* \u82E5 onLoad \u629B\u51FA\u9519\u8BEF\uFF0C\u5373\u53EF\u663E\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u7528\u6237\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u540E\u4F1A\u91CD\u65B0\u89E6\u53D1 onLoad \u4E8B\u4EF6 */}
        <Tabs.TabPane title="\u9519\u8BEF\u63D0\u793A">
          <List finished={finished} errorText="\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D" onLoad={onLoadError}>
            {errorList.length
              ? errorList.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u4E0B\u62C9\u5237\u65B0">
          {/* List \u7EC4\u4EF6\u53EF\u4EE5\u4E0E PullRefresh \u7EC4\u4EF6\u7ED3\u5408\u4F7F\u7528\uFF0C\u5B9E\u73B0\u4E0B\u62C9\u5237\u65B0\u7684\u6548\u679C */}
          <PullRefresh onRefresh={onRefresh}>
            <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
              {refreshList.length
                ? refreshList.map((_, i) => {
                    return <Cell key={i} title={i + 1} />;
                  })
                : null}
            </List>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-list {
  .rv-cell {
    text-align: center;
  }
}
`}},key:"list-base",meta:{}},q=function({previewer:t=()=>null,api:n=()=>null}){const r=t;return u("div",{children:e("div",{children:[u("h1",{id:"list-\u5217\u8868","data-anchor":"list-\u5217\u8868",children:"List \u5217\u8868"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7011\u5E03\u6D41\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u7528\u4E8E\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5F53\u5217\u8868\u5373\u5C06\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5E76\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(r,{code:"import { List } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["List \u7EC4\u4EF6\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u4F1A\u89E6\u53D1 ",u("code",{children:"onLoad"})," \u4E8B\u4EF6\uFF0C\u6B64\u65F6\u53EF\u4EE5\u53D1\u8D77\u5F02\u6B65\u64CD\u4F5C\u5E76\u66F4\u65B0\u6570\u636E\uFF0C\u82E5\u6570\u636E\u5DF2\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5219\u76F4\u63A5\u5C06 ",u("code",{children:"finished"})," \u8BBE\u7F6E\u6210 ",u("code",{children:"true"})," \u5373\u53EF\u3002"]}),u("blockquote",{children:u("p",{children:"\u548C vant \u4E0D\u540C\u7684\u662F\uFF0Creact-vant \u6839\u636E onLoad \u5728\u7EC4\u4EF6\u5185\u90E8\u7EF4\u62A4\u4E86 loading \u548C error \u72B6\u6001\u3002"})}),u(r,p(m({},z),{children:u(b,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"loading"}),e("td",{children:["\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"finished"}),e("td",{children:["\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u4E0D\u518D\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"error"}),e("td",{children:["\u662F\u5426\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u5931\u8D25\u540E\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u91CD\u65B0",u("br",{}),"\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6\uFF0C\u5FC5\u987B\u4F7F\u7528",u("code",{children:"sync"}),"\u4FEE\u9970\u7B26"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"offset"}),e("td",{children:["\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"300"})})]}),e("tr",{children:[u("td",{children:"loadingText"}),u("td",{children:"\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u52A0\u8F7D\u4E2D..."})})]}),e("tr",{children:[u("td",{children:"finishedText"}),u("td",{children:"\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"errorText"}),u("td",{children:"\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"immediateCheck"}),u("td",{children:"\u662F\u5426\u5728\u521D\u59CB\u5316\u65F6\u7ACB\u5373\u6267\u884C\u6EDA\u52A8\u4F4D\u7F6E\u68C0\u67E5"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"autoCheck"}),u("td",{children:"\u662F\u5426\u5728 onLoad \u6267\u884C\u540E\u518D\u6B21\u68C0\u67E5\u6EDA\u52A8\u4F4D\u7F6E"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"onLoad"}),u("td",{children:"\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"() => (Promise | void)"})}),u("td",{children:"-"})]})})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 List \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:e("tr",{children:[u("td",{children:"check"}),u("td",{children:"\u68C0\u67E5\u5F53\u524D\u7684\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u82E5\u5DF2\u6EDA\u52A8\u81F3\u5E95\u90E8\uFF0C\u5219\u4F1A\u89E6\u53D1 onLoad \u4E8B\u4EF6"}),u("td",{children:"-"}),u("td",{children:"-"})]})})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-list-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-text-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-text-line-height"}),u("td",{children:u("em",{children:"50px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-list-loading-icon-size"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48","data-anchor":"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48",children:"List \u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48\uFF1F"}),e("p",{children:["List \u4F1A\u76D1\u542C\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u4E8B\u4EF6\u5E76\u8BA1\u7B97\u5217\u8868\u7684\u4F4D\u7F6E\uFF0C\u5F53\u5217\u8868\u5E95\u90E8\u4E0E\u53EF\u89C6\u533A\u57DF\u7684\u8DDD\u79BB\u5C0F\u4E8E",u("code",{children:"offset"}),"\u65F6\uFF0CList \u4F1A\u89E6\u53D1\u4E00\u6B21 load \u4E8B\u4EF6\u3002"]}),u("h3",{id:"\u4E3A\u4EC0\u4E48-list-\u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1-load-\u4E8B\u4EF6","data-anchor":"\u4E3A\u4EC0\u4E48-list-\u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1-load-\u4E8B\u4EF6",children:"\u4E3A\u4EC0\u4E48 List \u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F"}),e("p",{children:["List \u521D\u59CB\u5316\u540E\u4F1A\u89E6\u53D1\u4E00\u6B21 load \u4E8B\u4EF6\uFF0C\u7528\u4E8E\u52A0\u8F7D\u7B2C\u4E00\u5C4F\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u901A\u8FC7",u("code",{children:"immediateCheck"}),"\u5C5E\u6027\u5173\u95ED\u3002"]}),u("h3",{id:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6","data-anchor":"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6",children:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F"}),u("p",{children:"\u5982\u679C\u4E00\u6B21\u8BF7\u6C42\u52A0\u8F7D\u7684\u6570\u636E\u6761\u6570\u8F83\u5C11\uFF0C\u5BFC\u81F4\u5217\u8868\u5185\u5BB9\u65E0\u6CD5\u94FA\u6EE1\u5F53\u524D\u5C4F\u5E55\uFF0CList \u4F1A\u7EE7\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF0C\u76F4\u5230\u5185\u5BB9\u94FA\u6EE1\u5C4F\u5E55\u6216\u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210\u3002\u56E0\u6B64\u4F60\u9700\u8981\u8C03\u6574\u6BCF\u6B21\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\uFF0C\u7406\u60F3\u60C5\u51B5\u4E0B\u6BCF\u6B21\u8BF7\u6C42\u83B7\u53D6\u7684\u6570\u636E\u6761\u6570\u5E94\u80FD\u591F\u586B\u6EE1\u4E00\u5C4F\u9AD8\u5EA6\u3002"}),u("h3",{id:"loading-\u548C-finished-\u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49","data-anchor":"loading-\u548C-finished-\u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49",children:"loading \u548C finished \u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49\uFF1F"}),e("p",{children:[u("code",{children:"List"}),"\u6709\u4EE5\u4E0B\u4E09\u79CD\u72B6\u6001\uFF0C\u7406\u89E3\u8FD9\u4E9B\u72B6\u6001\u6709\u52A9\u4E8E\u4F60\u6B63\u786E\u5730\u4F7F\u7528",u("code",{children:"List"}),"\u7EC4\u4EF6\uFF1A"]}),e("ul",{children:[e("li",{children:["\u975E\u52A0\u8F7D\u4E2D\uFF0C",u("code",{children:"loading"}),"\u4E3A",u("code",{children:"false"}),"\uFF0C\u6B64\u65F6\u4F1A\u6839\u636E\u5217\u8868\u6EDA\u52A8\u4F4D\u7F6E\u5224\u65AD\u662F\u5426\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6\uFF08\u5217\u8868\u5185\u5BB9\u4E0D\u8DB3\u4E00\u5C4F\u5E55\u65F6\uFF0C\u4F1A\u76F4\u63A5\u89E6\u53D1\uFF09"]}),e("li",{children:["\u52A0\u8F7D\u4E2D\uFF0C",u("code",{children:"loading"}),"\u4E3A",u("code",{children:"true"}),"\uFF0C\u8868\u793A\u6B63\u5728\u53D1\u9001\u5F02\u6B65\u8BF7\u6C42\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]}),e("li",{children:["\u52A0\u8F7D\u5B8C\u6210\uFF0C",u("code",{children:"finished"}),"\u4E3A",u("code",{children:"true"}),"\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u89E6\u53D1",u("code",{children:"load"}),"\u4E8B\u4EF6"]})]}),e("p",{children:["\u5728\u6BCF\u6B21\u8BF7\u6C42\u5B8C\u6BD5\u540E\uFF0C\u9700\u8981\u624B\u52A8\u5C06",u("code",{children:"loading"}),"\u8BBE\u7F6E\u4E3A",u("code",{children:"false"}),"\uFF0C\u8868\u793A\u52A0\u8F7D\u7ED3\u675F"]}),u("h3",{id:"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D","data-anchor":"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D",children:"\u5728 html\u3001body \u4E0A\u8BBE\u7F6E overflow \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F"}),e("p",{children:["\u5982\u679C\u5728 html \u548C body \u6807\u7B7E\u4E0A\u8BBE\u7F6E\u4E86",u("code",{children:"overflow-x: hidden"}),"\u6837\u5F0F\uFF0C\u4F1A\u5BFC\u81F4 List \u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\u3002"]}),u(r,{code:`html,
body {
  overflow-x: hidden;
}`,lang:"css"}),e("p",{children:["\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\u5F53\u5143\u7D20\u8BBE\u7F6E\u4E86",u("code",{children:"overflow-x: hidden"}),"\u6837\u5F0F\u65F6\uFF0C\u8BE5\u5143\u7D20\u7684",u("code",{children:"overflow-y"}),"\u4F1A\u88AB\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E3A",u("code",{children:"auto"}),"\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u503C",u("code",{children:"visible"}),"\uFF0C\u5BFC\u81F4 List \u65E0\u6CD5\u6B63\u786E\u5730\u5224\u65AD\u6EDA\u52A8\u5BB9\u5668\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\u53BB\u9664\u8BE5\u6837\u5F0F\uFF0C\u6216\u8005\u5728 html \u548C body \u6807\u7B7E\u4E0A\u6DFB\u52A0",u("code",{children:"height: 100%"}),"\u6837\u5F0F\u3002"]})]})})},H=[{Component:b,key:"list-base"}],G=void 0,J=[{depth:1,text:"List \u5217\u8868",id:"list-\u5217\u8868"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"List \u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48\uFF1F",id:"list-\u7684\u8FD0\u884C\u673A\u5236\u662F\u4EC0\u4E48"},{depth:3,text:"\u4E3A\u4EC0\u4E48 List \u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F",id:"\u4E3A\u4EC0\u4E48-list-\u521D\u59CB\u5316\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1-load-\u4E8B\u4EF6"},{depth:3,text:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1 load \u4E8B\u4EF6\uFF1F",id:"\u4E3A\u4EC0\u4E48\u4F1A\u8FDE\u7EED\u89E6\u53D1-load-\u4E8B\u4EF6"},{depth:3,text:"loading \u548C finished \u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49\uFF1F",id:"loading-\u548C-finished-\u5206\u522B\u662F\u4EC0\u4E48\u542B\u4E49"},{depth:3,text:"\u5728 html\u3001body \u4E0A\u8BBE\u7F6E overflow \u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D\uFF1F",id:"\u5728-htmlbody-\u4E0A\u8BBE\u7F6E-overflow-\u540E\u4E00\u76F4\u89E6\u53D1\u52A0\u8F7D"}],K="/src/components/list/README.md",O="List \u5217\u8868",Q="1651747726000";var X=t=>t.children({MdContent:q,demos:H,frontmatter:G,slugs:J,filePath:K,title:O,updatedTime:Q});export{q as MdContent,X as default,H as demos,K as filePath,G as frontmatter,J as slugs,O as title,Q as updatedTime};
