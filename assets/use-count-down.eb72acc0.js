import{j as u,a as n}from"./main.531c777e.js";const r=function({previewer:e=()=>null,api:s=()=>null}){const t=e;return u("div",{children:n("div",{children:[u("h1",{id:"usecountdown","data-anchor":"usecountdown",children:"useCountDown"}),u("h3",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u63D0\u4F9B\u5012\u8BA1\u65F6\u6BEB\u79D2\u7EA7\u7BA1\u7406\u80FD\u529B"}),u("blockquote",{children:n("p",{children:[u("a",{href:"/components/count-down",children:"CountDown \u5012\u8BA1\u65F6"}),"\u7EC4\u4EF6\u57FA\u4E8E\u6B64 hook \u5B9E\u73B0\u3002"]})}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u672C\u7528\u6CD5","data-anchor":"\u57FA\u672C\u7528\u6CD5",children:"\u57FA\u672C\u7528\u6CD5"}),u(t,{code:`import React from 'react';
import { hooks } from 'react-vant';

export default () => {
  const { current } = hooks.useCountDown({
    // \u5012\u8BA1\u65F6 24 \u5C0F\u65F6
    time: 24 * 60 * 60 * 1000,
    // \u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6
    autostart: true,
  });

  return (
    <>
      <span>\u603B\u65F6\u95F4\uFF1A{current.total}</span>
      <span>\u5269\u4F59\u5929\u6570\uFF1A{current.days}</span>
      <span>\u5269\u4F59\u5C0F\u65F6\uFF1A{current.hours}</span>
      <span>\u5269\u4F59\u5206\u949F\uFF1A{current.minutes}</span>
      <span>\u5269\u4F59\u79D2\u6570\uFF1A{current.seconds}</span>
      <span>\u5269\u4F59\u6BEB\u79D2\uFF1A{current.milliseconds}</span>
    </>
  );
};`,lang:"jsx"}),u("h3",{id:"\u6BEB\u79D2\u7EA7\u6E32\u67D3","data-anchor":"\u6BEB\u79D2\u7EA7\u6E32\u67D3",children:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),u("p",{children:"\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E millisecond \u9009\u9879\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002"}),u(t,{code:`import React from 'react';
import { useCountDown } from 'react-vant';

export default () => {
  const { current } = useCountDown({
    // \u5012\u8BA1\u65F6 24 \u5C0F\u65F6
    time: 24 * 60 * 60 * 1000,
    // \u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6
    autostart: true,
    // \u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3
    millisecond: true,
  });

  return (
    <>
      <span>\u603B\u65F6\u95F4\uFF1A{current.total}</span>
      <span>\u5269\u4F59\u5929\u6570\uFF1A{current.days}</span>
      <span>\u5269\u4F59\u5C0F\u65F6\uFF1A{current.hours}</span>
      <span>\u5269\u4F59\u5206\u949F\uFF1A{current.minutes}</span>
      <span>\u5269\u4F59\u79D2\u6570\uFF1A{current.seconds}</span>
      <span>\u5269\u4F59\u6BEB\u79D2\uFF1A{current.milliseconds}</span>
    </>
  );
};`,lang:"jsx"}),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u(t,{code:`type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type CountDown = {
  start: () => void;
  pause: () => void;
  reset: (totalTime: number) => void;
  current: ComputedRef<CurrentTime>;
};

type UseCountDownOptions = {
  time: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

function useCountDown(options: UseCountDownOptions): CountDown;`,lang:"ts"}),u("h3",{id:"\u53C2\u6570","data-anchor":"\u53C2\u6570",children:"\u53C2\u6570"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"time"}),u("td",{children:"\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"millisecond"}),u("td",{children:"\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),n("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5012\u8BA1\u65F6\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:u("em",{children:"(current: CurrentTime) => void"})}),u("td",{children:"-"})]}),n("tr",{children:[u("td",{children:"onFinish"}),u("td",{children:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}),u("td",{children:"-"}),u("td",{})]})]})]}),u("h3",{id:"\u8FD4\u56DE\u503C","data-anchor":"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"current"}),u("td",{children:"\u5F53\u524D\u5269\u4F59\u7684\u65F6\u95F4"}),u("td",{children:u("em",{children:"CurrentTime"})})]}),n("tr",{children:[u("td",{children:"start"}),u("td",{children:"\u5F00\u59CB\u5012\u8BA1\u65F6"}),u("td",{children:u("em",{children:"() => void"})})]}),n("tr",{children:[u("td",{children:"pause"}),u("td",{children:"\u6682\u505C\u5012\u8BA1\u65F6"}),u("td",{children:u("em",{children:"() => void"})})]}),n("tr",{children:[u("td",{children:"reset"}),u("td",{children:"\u91CD\u7F6E\u5012\u8BA1\u65F6\uFF0C\u652F\u6301\u4F20\u5165\u65B0\u7684\u5012\u8BA1\u65F6\u65F6\u957F"}),u("td",{children:u("em",{children:"(time?: number): void"})})]})]})]}),u("h3",{id:"currenttime-\u683C\u5F0F","data-anchor":"currenttime-\u683C\u5F0F",children:"CurrentTime \u683C\u5F0F"}),n("table",{children:[u("thead",{children:n("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),n("tbody",{children:[n("tr",{children:[u("td",{children:"total"}),u("td",{children:"\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09"}),u("td",{children:u("em",{children:"number"})})]}),n("tr",{children:[u("td",{children:"days"}),u("td",{children:"\u5269\u4F59\u5929\u6570"}),u("td",{children:u("em",{children:"number"})})]}),n("tr",{children:[u("td",{children:"hours"}),u("td",{children:"\u5269\u4F59\u5C0F\u65F6"}),u("td",{children:u("em",{children:"number"})})]}),n("tr",{children:[u("td",{children:"minutes"}),u("td",{children:"\u5269\u4F59\u5206\u949F"}),u("td",{children:u("em",{children:"number"})})]}),n("tr",{children:[u("td",{children:"seconds"}),u("td",{children:"\u5269\u4F59\u79D2\u6570"}),u("td",{children:u("em",{children:"number"})})]}),n("tr",{children:[u("td",{children:"milliseconds"}),u("td",{children:"\u5269\u4F59\u6BEB\u79D2"}),u("td",{children:u("em",{children:"number"})})]})]})]})]})})},d=[],i=void 0,c=[{depth:1,text:"useCountDown",id:"usecountdown"},{depth:3,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5"},{depth:3,text:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",id:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"},{depth:2,text:"API",id:"api"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:3,text:"\u53C2\u6570",id:"\u53C2\u6570"},{depth:3,text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C"},{depth:3,text:"CurrentTime \u683C\u5F0F",id:"currenttime-\u683C\u5F0F"}],h="/docs/hooks/use-count-down.md",l="useCountDown",o="1658500653000";var F=e=>e.children({MdContent:r,demos:d,frontmatter:i,slugs:c,filePath:h,title:l,updatedTime:o});export{r as MdContent,F as default,d as demos,h as filePath,i as frontmatter,c as slugs,l as title,o as updatedTime};
