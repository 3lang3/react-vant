var p=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var a=(t,r,n)=>r in t?p(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,d=(t,r)=>{for(var n in r||(r={}))f.call(r,n)&&a(t,n,r[n]);if(l)for(var n of l(r))A.call(r,n)&&a(t,n,r[n]);return t},c=(t,r)=>B(t,D(r));import{j as u,a as e,F as h,r as v}from"./main.531c777e.js";import{dV as i,da as w,d9 as o,c0 as x,bP as y,c as b}from"./WaterMark.6f52b203.js";var s=()=>u(i,{time:30*60*60*1e3});const S={code:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} />;
};`}},key:"count-down-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var F=()=>u(i,{time:30*60*60*1e3,format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"});const P={code:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" />;
};`}},key:"count-down-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u683C\u5F0F"}};var m=()=>u(i,{time:30*60*60*1e3,millisecond:!0,format:"HH:mm:ss:SS"});const k={code:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant';
export default () => {
  return <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS" />;
};`}},key:"count-down-demo-2",meta:{title:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}};var E=()=>u("div",{className:"demo-count-down",children:u(i,{time:30*60*60*1e3,millisecond:!0,format:"HH:mm:ss:SS",children:t=>e(h,{children:[u("span",{className:"block",children:t.hours}),u("span",{className:"colon",children:":"}),u("span",{className:"block",children:t.minutes}),u("span",{className:"colon",children:":"}),u("span",{className:"block",children:t.seconds})]})})});const N={code:`import React from 'react';
import { CountDown } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {(timeData) => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { CountDown } from 'react-vant';
import './demo/style.less';

export default () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} millisecond format="HH:mm:ss:SS">
        {(timeData) => (
          <>
            <span className="block">{timeData.hours}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.minutes}</span>
            <span className="colon">:</span>
            <span className="block">{timeData.seconds}</span>
          </>
        )}
      </CountDown>
    </div>
  );
};`},"demo/style.less":{type:"FILE",value:`@import '../../styles/var.less';

.demo-count-down {
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @blue;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @blue;
    border-radius: 4px;
  }
}`}},key:"count-down-demo-3",meta:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}};var C=()=>{const t=v.exports.useRef();return e(h,{children:[u(i,{ref:t,time:3e3,millisecond:!0,format:"ss:SSS",autoStart:!1,onFinish:()=>w.info("\u5012\u8BA1\u65F6\u7ED3\u675F")}),u("br",{}),e(o,{columnNum:3,children:[u(o.Item,{icon:u(x,{}),text:"\u5F00\u59CB",onClick:()=>t.current.start()}),u(o.Item,{icon:u(y,{}),text:"\u6682\u505C",onClick:()=>t.current.pause()}),u(o.Item,{icon:u(b,{}),text:"\u91CD\u7F6E",onClick:()=>t.current.reset()})]})]})};const R=`import React, { useRef } from 'react';
import { CountDown, Grid, Toast } from 'react-vant';
import { PauseCircleO, PlayCircleO, Replay } from '@react-vant/icons';
import type { CountDownInstance } from 'react-vant';

export default () => {
  const ref = useRef<CountDownInstance>();
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format="ss:SSS"
        autoStart={false}
        onFinish={() => Toast.info('\u5012\u8BA1\u65F6\u7ED3\u675F')}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item icon={<PlayCircleO />} text="\u5F00\u59CB" onClick={() => ref.current.start()} />
        <Grid.Item icon={<PauseCircleO />} text="\u6682\u505C" onClick={() => ref.current.pause()} />
        <Grid.Item icon={<Replay />} text="\u91CD\u7F6E" onClick={() => ref.current.reset()} />
      </Grid>
    </>
  );
};
`,g={code:R,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { CountDown, Grid, Toast } from 'react-vant';
import { PauseCircleO, PlayCircleO, Replay } from '@react-vant/icons';
import type { CountDownInstance } from 'react-vant';

export default () => {
  const ref = useRef<CountDownInstance>();
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format="ss:SSS"
        autoStart={false}
        onFinish={() => Toast.info('\u5012\u8BA1\u65F6\u7ED3\u675F')}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item icon={<PlayCircleO />} text="\u5F00\u59CB" onClick={() => ref.current.start()} />
        <Grid.Item icon={<PauseCircleO />} text="\u6682\u505C" onClick={() => ref.current.pause()} />
        <Grid.Item icon={<Replay />} text="\u91CD\u7F6E" onClick={() => ref.current.reset()} />
      </Grid>
    </>
  );
};
`}},key:"count-down-ref",meta:{title:"\u624B\u52A8\u63A7\u5236"}},I=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return u("div",{children:e("div",{children:[u("h1",{id:"countdown-\u5012\u8BA1\u65F6","data-anchor":"countdown-\u5012\u8BA1\u65F6",children:"CountDown \u5012\u8BA1\u65F6"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(n,{code:"import { CountDown } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:[u("code",{children:"time"})," \u5C5E\u6027\u8868\u793A\u5012\u8BA1\u65F6\u603B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002"]}),u(n,c(d({},S),{children:u(s,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u683C\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u683C\u5F0F",children:"\u81EA\u5B9A\u4E49\u683C\u5F0F"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"format"})," \u5C5E\u6027\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u672C\u7684\u5185\u5BB9\u3002"]}),u(n,c(d({},P),{children:u(F,{})})),u("h3",{id:"\u6BEB\u79D2\u7EA7\u6E32\u67D3","data-anchor":"\u6BEB\u79D2\u7EA7\u6E32\u67D3",children:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),e("p",{children:["\u5012\u8BA1\u65F6\u9ED8\u8BA4\u6BCF\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u8BBE\u7F6E ",u("code",{children:"millisecond"})," \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3\u3002"]}),u(n,c(d({},k),{children:u(m,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u6837\u5F0F",children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),e("p",{children:["\u901A\u8FC7",u("code",{children:"children"}),"\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u7684\u6837\u5F0F\uFF0C",u("a",{href:"https://reactjs.org/docs/render-props.html",children:"react render prop"}),"\u6587\u6863\u3002"]}),u(n,c(d({},N),{children:u(E,{})})),u("h3",{id:"\u624B\u52A8\u63A7\u5236","data-anchor":"\u624B\u52A8\u63A7\u5236",children:"\u624B\u52A8\u63A7\u5236"}),e("p",{children:["\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u53EF\u4EE5\u8C03\u7528 ",u("code",{children:"start"}),"\u3001",u("code",{children:"pause"}),"\u3001",u("code",{children:"reset"})," \u65B9\u6CD5\u3002"]}),u(n,c(d({},g),{children:u(C,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"time"}),u("td",{children:"\u5012\u8BA1\u65F6\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),e("tr",{children:[u("td",{children:"format"}),u("td",{children:"\u65F6\u95F4\u683C\u5F0F"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"HH:mm:ss"})})]}),e("tr",{children:[u("td",{children:"autoStart"}),u("td",{children:"\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"millisecond"}),u("td",{children:"\u662F\u5426\u5F00\u542F\u6BEB\u79D2\u7EA7\u6E32\u67D3"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]})]})]}),u("h3",{id:"format-\u683C\u5F0F","data-anchor":"format-\u683C\u5F0F",children:"format \u683C\u5F0F"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u683C\u5F0F"}),u("th",{children:"\u8BF4\u660E"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"DD"}),u("td",{children:"\u5929\u6570"})]}),e("tr",{children:[u("td",{children:"HH"}),u("td",{children:"\u5C0F\u65F6"})]}),e("tr",{children:[u("td",{children:"mm"}),u("td",{children:"\u5206\u949F"})]}),e("tr",{children:[u("td",{children:"ss"}),u("td",{children:"\u79D2\u6570"})]}),e("tr",{children:[u("td",{children:"S"}),u("td",{children:"\u6BEB\u79D2\uFF081 \u4F4D\uFF09"})]}),e("tr",{children:[u("td",{children:"SS"}),u("td",{children:"\u6BEB\u79D2\uFF082 \u4F4D\uFF09"})]}),e("tr",{children:[u("td",{children:"SSS"}),u("td",{children:"\u6BEB\u79D2\uFF083 \u4F4D\uFF09"})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onFinish"}),u("td",{children:"\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"currentTime: CurrentTime"})})]})]})]}),u("h3",{id:"currenttime-\u683C\u5F0F","data-anchor":"currenttime-\u683C\u5F0F",children:"CurrentTime \u683C\u5F0F"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"total"}),u("td",{children:"\u5269\u4F59\u603B\u65F6\u95F4\uFF08\u5355\u4F4D\u6BEB\u79D2\uFF09"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"days"}),u("td",{children:"\u5269\u4F59\u5929\u6570"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"hours"}),u("td",{children:"\u5269\u4F59\u5C0F\u65F6"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"minutes"}),u("td",{children:"\u5269\u4F59\u5206\u949F"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"seconds"}),u("td",{children:"\u5269\u4F59\u79D2\u6570"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"milliseconds"}),u("td",{children:"\u5269\u4F59\u6BEB\u79D2"}),u("td",{children:u("em",{children:"number"})})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CountDown \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"start"}),u("td",{children:"\u5F00\u59CB\u5012\u8BA1\u65F6"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"pause"}),u("td",{children:"\u6682\u505C\u5012\u8BA1\u65F6"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"reset"}),e("td",{children:["\u91CD\u8BBE\u5012\u8BA1\u65F6\uFF0C\u82E5 ",u("code",{children:"autoStart"})," \u4E3A ",u("code",{children:"true"}),"\uFF0C\u91CD\u8BBE\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u5012\u8BA1\u65F6"]}),u("td",{children:"-"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(n,{code:"import type { CountDownInstance, CountDownCurrentTime } from 'react-vant';",lang:"ts"}),e("p",{children:[u("code",{children:"CountDownInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),u(n,{code:`import { useRef } from 'react';
import type { CountDownInstance } from 'react-vant';

const countDownRef = useRef<CountDownInstance>(null);

countDownRef.current?.start();`,lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-count-down-text-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-count-down-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-count-down-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548","data-anchor":"\u5728-ios-\u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\uFF1F"}),e("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",u("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",u("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),e("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",u("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]})]})})},H=[{Component:s,key:"count-down-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:F,key:"count-down-demo-1",title:"\u81EA\u5B9A\u4E49\u683C\u5F0F"},{Component:m,key:"count-down-demo-2",title:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"},{Component:E,key:"count-down-demo-3",title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{Component:C,key:"count-down-ref",title:"\u624B\u52A8\u63A7\u5236"}],M={simulator:{compact:!1}},j=[{depth:1,text:"CountDown \u5012\u8BA1\u65F6",id:"countdown-\u5012\u8BA1\u65F6"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u683C\u5F0F",id:"\u81EA\u5B9A\u4E49\u683C\u5F0F"},{depth:3,text:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",id:"\u6BEB\u79D2\u7EA7\u6E32\u67D3"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6837\u5F0F",id:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{depth:3,text:"\u624B\u52A8\u63A7\u5236",id:"\u624B\u52A8\u63A7\u5236"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"format \u683C\u5F0F",id:"format-\u683C\u5F0F"},{depth:3,text:"Events",id:"events"},{depth:3,text:"CurrentTime \u683C\u5F0F",id:"currenttime-\u683C\u5F0F"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548\uFF1F",id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u5012\u8BA1\u65F6\u4E0D\u751F\u6548"}],O="/src/components/count-down/README.md",G="CountDown \u5012\u8BA1\u65F6",T="1658500653000";var z=t=>t.children({MdContent:I,demos:H,frontmatter:M,slugs:j,filePath:O,title:G,updatedTime:T});export{I as MdContent,z as default,H as demos,O as filePath,M as frontmatter,j as slugs,G as title,T as updatedTime};
