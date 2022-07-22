var B=Object.defineProperty,f=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var s=(t,r,n)=>r in t?B(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(t,r)=>{for(var n in r||(r={}))m.call(r,n)&&s(t,n,r[n]);if(h)for(var n of h(r))C.call(r,n)&&s(t,n,r[n]);return t},o=(t,r)=>f(t,g(r));import{r as E,j as u,a as e}from"./main.531c777e.js";import{dO as d,dP as c,da as A}from"./WaterMark.6f52b203.js";var p=()=>{const[t,r]=E.exports.useState(0),n=E.exports.useMemo(()=>t?`\u5237\u65B0\u6B21\u6570: ${t}`:"\u4E0B\u62C9\u8BD5\u8BD5",[t]),l=i=>new Promise(F=>{setTimeout(()=>{i&&A.info("\u5237\u65B0\u6210\u529F"),r(t+1),F(!0)},1e3)});return u("div",{className:"demo-pull-refresh",children:e(d,{children:[u(d.TabPane,{title:"\u57FA\u7840\u7528\u6CD5",children:u(c,{onRefresh:()=>l(!0),onRefreshEnd:()=>console.log("onRefreshEnd"),children:u("p",{children:n})})}),u(d.TabPane,{title:"\u6210\u529F\u63D0\u793A",children:u(c,{successText:"\u5237\u65B0\u6210\u529F",onRefresh:()=>l(!1),children:u("p",{children:n})})}),u(d.TabPane,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:u(c,{headHeight:80,pullingText:({distance:i})=>u("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge.png",style:{transform:`scale(${i/80})`}}),loosingText:()=>u("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge.png"}),loadingText:()=>u("img",{className:"doge",src:"https://img.yzcdn.cn/vant/doge-fire.jpg"}),onRefresh:()=>l(!0),children:u("p",{children:n})})})]})})};const D=`import React, { useState, useMemo } from 'react';
import { PullRefresh, Tabs, Toast } from 'react-vant';
import './style.less';

export default () => {
  const [count, setCount] = useState<number>(0);
  const tips = useMemo(() => {
    if (count) {
      return \`\u5237\u65B0\u6B21\u6570: \${count}\`;
    }
    return '\u4E0B\u62C9\u8BD5\u8BD5';
  }, [count]);

  const onRefresh = (showToast) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('\u5237\u65B0\u6210\u529F');
        }
        setCount(count + 1);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="demo-pull-refresh">
      <Tabs>
        <Tabs.TabPane title="\u57FA\u7840\u7528\u6CD5">
          <PullRefresh
            onRefresh={() => onRefresh(true)}
            onRefreshEnd={() => console.log('onRefreshEnd')}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u6210\u529F\u63D0\u793A">
          <PullRefresh successText="\u5237\u65B0\u6210\u529F" onRefresh={() => onRefresh(false)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u81EA\u5B9A\u4E49\u5185\u5BB9">
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                style={{ transform: \`scale(\${distance / 80})\` }}
              />
            )}
            loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
            loadingText={() => (
              <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
`,R={code:D,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState, useMemo } from 'react';
import { PullRefresh, Tabs, Toast } from 'react-vant';
import './style.less';

export default () => {
  const [count, setCount] = useState<number>(0);
  const tips = useMemo(() => {
    if (count) {
      return \`\u5237\u65B0\u6B21\u6570: \${count}\`;
    }
    return '\u4E0B\u62C9\u8BD5\u8BD5';
  }, [count]);

  const onRefresh = (showToast) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('\u5237\u65B0\u6210\u529F');
        }
        setCount(count + 1);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="demo-pull-refresh">
      <Tabs>
        <Tabs.TabPane title="\u57FA\u7840\u7528\u6CD5">
          <PullRefresh
            onRefresh={() => onRefresh(true)}
            onRefreshEnd={() => console.log('onRefreshEnd')}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u6210\u529F\u63D0\u793A">
          <PullRefresh successText="\u5237\u65B0\u6210\u529F" onRefresh={() => onRefresh(false)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="\u81EA\u5B9A\u4E49\u5185\u5BB9">
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                style={{ transform: \`scale(\${distance / 80})\` }}
              />
            )}
            loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
            loadingText={() => (
              <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-pull-refresh {
  background-color: #fff;
  .rv-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: 16px 0 0 16px;
  }
}
`}},key:"pull-refresh-demo",meta:{}},T=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return u("div",{children:e("div",{children:[u("h1",{id:"pullrefresh-\u4E0B\u62C9\u5237\u65B0","data-anchor":"pullrefresh-\u4E0B\u62C9\u5237\u65B0",children:"PullRefresh \u4E0B\u62C9\u5237\u65B0"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(n,{code:"import { PullRefresh } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:["\u4E0B\u62C9\u5237\u65B0\u65F6\u4F1A\u89E6\u53D1 ",u("code",{children:"onRefresh"})," \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u53EF\u4EE5\u8FDB\u884C\u540C\u6B65\u6216\u5F02\u6B65\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\u8868\u793A\u52A0\u8F7D\u5B8C\u6210\u3002"]}),u("blockquote",{children:u("p",{children:"\u548C vant \u4E0D\u540C\u7684\u662F\uFF0Creact-vant \u6839\u636E onRefresh \u5728\u7EC4\u4EF6\u5185\u90E8\u7EF4\u62A4\u4E86 loading \u72B6\u6001\u3002"})}),u(n,o(a({},R),{children:u(p,{})})),u("h3",{id:"\u6210\u529F\u63D0\u793A","data-anchor":"\u6210\u529F\u63D0\u793A",children:"\u6210\u529F\u63D0\u793A"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"successText"})," \u53EF\u4EE5\u8BBE\u7F6E\u5237\u65B0\u6210\u529F\u540E\u7684\u9876\u90E8\u63D0\u793A\u6587\u6848\u3002"]}),u(n,{code:`<PullRefresh successText="\u5237\u65B0\u6210\u529F" onRefresh="{onRefresh}">
  <p>\u4E0B\u62C9\u5237\u65B0</p>
</PullRefresh>`,lang:"jsx"}),u("h3",{id:"\u81EA\u5B9A\u4E49\u63D0\u793A","data-anchor":"\u81EA\u5B9A\u4E49\u63D0\u793A",children:"\u81EA\u5B9A\u4E49\u63D0\u793A"}),u("p",{children:"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u5185\u5BB9\u3002"}),u(n,{code:`<PullRefresh
  headHeight={80}
  pullingText={({ distance }) => (
    <img
      className="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      style={{ transform: \`scale(\${distance / 80})\` }}
    />
  )}
  loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
  loadingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />}
  onRefresh={onRefresh}
>
  <p>\u81EA\u5B9A\u4E49\u63D0\u793A</p>
</PullRefresh>`,lang:"jsx"}),u(n,{code:`.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}`,lang:"css"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"pullingText"}),u("td",{children:"\u4E0B\u62C9\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),u("td",{children:e("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),u("td",{children:u("code",{children:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0..."})})]}),e("tr",{children:[u("td",{children:"loosingText"}),u("td",{children:"\u91CA\u653E\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),u("td",{children:e("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),u("td",{children:u("code",{children:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."})})]}),e("tr",{children:[u("td",{children:"loadingText"}),u("td",{children:"\u52A0\u8F7D\u8FC7\u7A0B\u63D0\u793A\u6587\u6848"}),u("td",{children:e("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),u("td",{children:u("code",{children:"\u52A0\u8F7D\u4E2D..."})})]}),e("tr",{children:[u("td",{children:"successText"}),u("td",{children:"\u5237\u65B0\u6210\u529F\u63D0\u793A\u6587\u6848"}),u("td",{children:e("em",{children:["ReactNode|(","{"," distance ","}",") => ReactNode"]})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"successDuration"}),u("td",{children:"\u5237\u65B0\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"500"})})]}),e("tr",{children:[u("td",{children:"animationDuration"}),u("td",{children:"\u52A8\u753B\u65F6\u957F"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"300"})})]}),e("tr",{children:[u("td",{children:"headHeight"}),u("td",{children:"\u9876\u90E8\u5185\u5BB9\u9AD8\u5EA6"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"50"})})]}),e("tr",{children:[u("td",{children:"pullDistance"}),u("td",{children:"\u89E6\u53D1\u4E0B\u62C9\u5237\u65B0\u7684\u8DDD\u79BB"}),u("td",{children:u("em",{children:"number | string"})}),e("td",{children:["\u4E0E ",u("code",{children:"headHeight"})," \u4E00\u81F4"]})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u4E0B\u62C9\u5237\u65B0"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onRefresh"}),u("td",{children:"\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"() => (Promise|void)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onRefreshEnd"}),u("td",{children:"\u5237\u65B0\u5B8C\u6210\u540E\u89E6\u53D1"}),u("td",{children:u("em",{children:"() => void"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-pull-refresh-head-height"}),u("td",{children:u("em",{children:"50px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-pull-refresh-head-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-pull-refresh-head-text-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-pull-refresh-loading-icon-size"}),u("td",{children:u("em",{children:"16px"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"pullreresh-\u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9","data-anchor":"pullreresh-\u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9",children:"PullReresh \u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\uFF0C\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9\uFF1F"}),u("p",{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u62C9\u533A\u57DF\u7684\u9AD8\u5EA6\u662F\u548C\u5185\u5BB9\u9AD8\u5EA6\u4FDD\u6301\u4E00\u81F4\u7684\uFF0C\u5982\u679C\u9700\u8981\u8BA9\u4E0B\u62C9\u533A\u57DF\u59CB\u7EC8\u4E3A\u5168\u5C4F\uFF0C\u53EF\u4EE5\u7ED9 PullRefresh \u8BBE\u7F6E\u4E00\u4E2A\u4E0E\u5C4F\u5E55\u5927\u5C0F\u76F8\u7B49\u7684\u6700\u5C0F\u9AD8\u5EA6\uFF1A"}),u(n,{code:'<PullRefresh style="height: 100vh;" />',lang:"jsx"})]})})},x=[{Component:p,key:"pull-refresh-demo"}],v=void 0,P=[{depth:1,text:"PullRefresh \u4E0B\u62C9\u5237\u65B0",id:"pullrefresh-\u4E0B\u62C9\u5237\u65B0"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6210\u529F\u63D0\u793A",id:"\u6210\u529F\u63D0\u793A"},{depth:3,text:"\u81EA\u5B9A\u4E49\u63D0\u793A",id:"\u81EA\u5B9A\u4E49\u63D0\u793A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"PullReresh \u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\uFF0C\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9\uFF1F",id:"pullreresh-\u7684\u5185\u5BB9\u672A\u586B\u6EE1\u5C4F\u5E55\u65F6\u53EA\u6709\u4E00\u90E8\u5206\u533A\u57DF\u53EF\u4EE5\u4E0B\u62C9"}],b="/src/components/pull-refresh/README.md",y="PullRefresh \u4E0B\u62C9\u5237\u65B0",N="1658500653000";var w=t=>t.children({MdContent:T,demos:x,frontmatter:v,slugs:P,filePath:b,title:y,updatedTime:N});export{T as MdContent,w as default,x as demos,b as filePath,v as frontmatter,P as slugs,y as title,N as updatedTime};
