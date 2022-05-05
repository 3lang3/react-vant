import{j as u,a as t}from"./main.28fb06c0.js";const o=function({previewer:e=()=>null,api:l=()=>null}){const n=e;return u("div",{children:t("div",{children:[u("h1",{id:"usetouch","data-anchor":"usetouch",children:"useTouch"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7BA1\u7406\u89E6\u6478\u4E8B\u4EF6\u7684 Hook"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7",u("code",{children:"useTouch"}),"\u8FD4\u56DE\u7684\u5BF9\u8C61\u53EF\u4EE5\u83B7\u53D6\u5F88\u591A\u76F4\u89C2\u7684\u4FE1\u606F\uFF0C\u4F8B\u5982\u89E6\u6478\u504F\u79FB\u91CF\u3001\u89E6\u6478\u65B9\u5411\u3002"]}),u("blockquote",{children:t("p",{children:["\u5728\u89E6\u6478\u65F6\u6839\u636E touch \u8FD4\u56DE\u7684\u6570\u636E\u53EF\u4EE5\u5B9E\u73B0\u5F88\u591A\u5E38\u89C1\u6548\u679C\uFF0C\u4F8B\u5982",u("a",{href:"https://github.com/3lang3/react-vant/blob/main/packages/react-vant/src/pull-refresh/PullRefresh.tsx#L145-L168",children:"\u4E0B\u62C9\u5237\u65B0"})]})}),u(n,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const touch = hooks.useTouch(true);
  const onTouchStart = (event) => {
    touch.start(event);
  };
  const onTouchMove = (event) => {
    touch.move(event);
  };

  return (
    <div style={{ width: 400, height: 400 }} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <p>touch direction: {touch.direction}</p>
      <p>
        touch start: [{touch.startX}, {touch.startY}]
      </p>
      <p>
        touch delta: [{touch.deltaX}, {touch.deltaY}]
      </p>
    </div>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(n,{code:`type TouchState = {
  // \u5F00\u59CB\u70B9x\u5750\u6807
  startX: number;
  // \u5F00\u59CB\u70B9y\u5750\u6807
  startY: number;
  // x\u5750\u6807\u65B9\u5411\u89E6\u6478\u504F\u79FB\u91CF
  deltaX: number;
  // y\u5750\u6807\u65B9\u5411\u89E6\u6478\u504F\u79FB\u91CF
  deltaY: number;
  // x\u65B9\u5411\u7EDD\u5BF9\u504F\u79FB\u91CF
  offsetX: number;
  // y\u65B9\u5411\u7EDD\u5BF9\u504F\u79FB\u91CF
  offsetY: number;
  // \u89E6\u6478\u65B9\u5411
  direction: '' | 'vertical' | 'horizontal';
  // \u89E6\u6478\u65F6\u65B9\u6CD5
  move: (event: React.TouchEvent) => void;
  // \u5F00\u59CB\u89E6\u6478\u65B9\u6CD5
  start: (event: React.TouchEvent) => void;
  // \u91CD\u7F6E\u6570\u636E
  reset: () => void;
  // \u662F\u5426\u662F\u5782\u76F4\u65B9\u5411\u7684\u89E6\u6478
  isVertical: () => boolean;
  // \u662F\u5426\u662F\u6C34\u5E73\u65B9\u5411\u7684\u89E6\u6478
  isHorizontal: () => boolean;
};

function useTouch(stateable: boolean): TouchState;`,lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),t("table",{children:[u("thead",{children:t("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:t("tr",{children:[u("td",{children:"stateable"}),t("td",{children:["\u9ED8\u8BA4 touch \u4FE1\u606F\u662F\u7528 ref \u5B58\u50A8\uFF0C\u907F\u514D\u9891\u7E41\u5237\u65B0\u89C6\u56FE\uFF0C\u8BBE\u4E3A",u("code",{children:"true"}),"\u5219\u4F7F\u7528 state \u66F4\u65B0\uFF0C\u89C6\u56FE\u5C06\u9891\u7E41\u5237\u65B0\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u65B9\u6848"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]})})]})]})})},c=[],h=void 0,d=[{depth:1,text:"useTouch",id:"usetouch"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"}],r="/docs/hooks/use-touch.md",a="useTouch",i="1651747726000";var E=e=>e.children({MdContent:o,demos:c,frontmatter:h,slugs:d,filePath:r,title:a,updatedTime:i});export{o as MdContent,E as default,c as demos,r as filePath,h as frontmatter,d as slugs,a as title,i as updatedTime};
