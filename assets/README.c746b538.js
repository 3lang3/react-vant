var S=Object.defineProperty,x=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var v=(t,u,r)=>u in t?S(t,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[u]=r,a=(t,u)=>{for(var r in u||(u={}))y.call(u,r)&&v(t,r,u[r]);if(s)for(var r of s(u))b.call(u,r)&&v(t,r,u[r]);return t},l=(t,u)=>x(t,B(u));import{r as i,j as e,a as n}from"./main.531c777e.js";import{k as o,da as c}from"./WaterMark.6f52b203.js";var F=()=>{const[t,u]=i.exports.useState(10);return e(o,{value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const V={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`}},key:"slider-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var C=()=>{const[t,u]=i.exports.useState([10,50]);return e(o,{range:!0,value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const T={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`}},key:"slider-demo-1",meta:{title:"\u53CC\u6ED1\u5757"}};var A=()=>{const[t,u]=i.exports.useState(10);return e(o,{min:-50,max:50,value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const P={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider min={-50} max={50} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider min={-50} max={50} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />
  );
};`}},key:"slider-demo-2",meta:{title:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4"}};var m=()=>{const[t,u]=i.exports.useState(10);return e(o,{disabled:!0,value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const $={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider disabled value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider disabled value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`}},key:"slider-demo-3",meta:{title:"\u7981\u7528"}};var p=()=>{const[t,u]=i.exports.useState(10);return e(o,{step:10,value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const M={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider step={10} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return <Slider step={10} value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};`}},key:"slider-demo-4",meta:{title:"\u6307\u5B9A\u6B65\u957F"}};var f=()=>{const[t,u]=i.exports.useState(10);return e(o,{barHeight:4,activeColor:"#ee0a24",value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const k={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider
      barHeight={4}
      activeColor="#ee0a24"
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider
      barHeight={4}
      activeColor="#ee0a24"
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`}},key:"slider-demo-5",meta:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}};var E=()=>{const[t,u]=i.exports.useState(10);return e(o,{button:e("div",{className:"custom-slider-button",children:t}),value:t,onChange:u,onChangeAfter:d=>c.info(`\u5F53\u524D\u503C\uFF1A${d}`)})};const N={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';
import './demo/style.less';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider
      button={<div className="custom-slider-button">{value}</div>}
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';
import './demo/style.less';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <Slider
      button={<div className="custom-slider-button">{value}</div>}
      value={value}
      onChange={setValue}
      onChangeAfter={onChangeAfter}
    />
  );
};`},"demo/style.less":{type:"FILE",value:`@import '../../styles/var.less';

.custom-slider-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
  user-select: none;
}
`}},key:"slider-demo-6",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}};var g=()=>{const[t,u]=i.exports.useState(50),[r,d]=i.exports.useState([20,50]),h=D=>c.info(`\u5F53\u524D\u503C\uFF1A${D}`);return n("div",{style:{height:150,paddingLeft:30},children:[e(o,{vertical:!0,style:{marginRight:100},value:t,onChange:u,onChangeAfter:h}),e(o,{range:!0,vertical:!0,value:r,onChange:d,onChangeAfter:h})]})};const j={code:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState<[number, number]>([20, 50]);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <div style={{ height: 150, paddingLeft: 30 }}>
      <Slider
        vertical
        style={{ marginRight: 100 }}
        value={value1}
        onChange={setValue1}
        onChangeAfter={onChangeAfter}
      />
      <Slider range vertical value={value2} onChange={setValue2} onChangeAfter={onChangeAfter} />
    </div>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Slider, Toast } from 'react-vant';

export default () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState<[number, number]>([20, 50]);
  const onChangeAfter = (v) => Toast.info(\`\u5F53\u524D\u503C\uFF1A\${v}\`);

  return (
    <div style={{ height: 150, paddingLeft: 30 }}>
      <Slider
        vertical
        style={{ marginRight: 100 }}
        value={value1}
        onChange={setValue1}
        onChangeAfter={onChangeAfter}
      />
      <Slider range vertical value={value2} onChange={setValue2} onChangeAfter={onChangeAfter} />
    </div>
  );
};`}},key:"slider-demo-7",meta:{title:"\u5782\u76F4\u65B9\u5411"}},w=function({previewer:t=()=>null,api:u=()=>null}){const r=t;return e("div",{children:n("div",{children:[e("h1",{id:"slider-\u6ED1\u5757","data-anchor":"slider-\u6ED1\u5757",children:"Slider \u6ED1\u5757"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Slider } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(r,l(a({},V),{children:e(F,{})})),e("h3",{id:"\u53CC\u6ED1\u5757","data-anchor":"\u53CC\u6ED1\u5757",children:"\u53CC\u6ED1\u5757"}),n("p",{children:["\u6DFB\u52A0 ",e("code",{children:"range"})," \u5C5E\u6027\u5C31\u53EF\u4EE5\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F\uFF0C\u786E\u4FDD ",e("code",{children:"value"})," \u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002"]}),e(r,l(a({},T),{children:e(C,{})})),e("h3",{id:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4","data-anchor":"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",children:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4"}),e(r,l(a({},P),{children:e(A,{})})),e("h3",{id:"\u7981\u7528","data-anchor":"\u7981\u7528",children:"\u7981\u7528"}),e(r,l(a({},$),{children:e(m,{})})),e("h3",{id:"\u6307\u5B9A\u6B65\u957F","data-anchor":"\u6307\u5B9A\u6B65\u957F",children:"\u6307\u5B9A\u6B65\u957F"}),e(r,l(a({},M),{children:e(p,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u6837\u5F0F",children:"\u81EA\u5B9A\u4E49\u6837\u5F0F"}),e(r,l(a({},k),{children:e(f,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE","data-anchor":"\u81EA\u5B9A\u4E49\u6309\u94AE",children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),e(r,l(a({},N),{children:e(E,{})})),e("h3",{id:"\u5782\u76F4\u65B9\u5411","data-anchor":"\u5782\u76F4\u65B9\u5411",children:"\u5782\u76F4\u65B9\u5411"}),n("p",{children:["\u8BBE\u7F6E ",e("code",{children:"vertical"})," \u5C5E\u6027\u540E\uFF0C\u6ED1\u5757\u4F1A\u5782\u76F4\u5C55\u793A\uFF0C\u4E14\u9AD8\u5EA6\u4E3A 100% \u7236\u5143\u7D20\u9AD8\u5EA6\u3002"]}),e(r,l(a({},j),{children:e(g,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8FDB\u5EA6\u767E\u5206\u6BD4\uFF0C\u5728\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\u4E3A\u6570\u7EC4\u683C\u5F0F"}),e("td",{children:e("em",{children:"number|[number, number]"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u6700\u5927\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"100"})})]}),n("tr",{children:[e("td",{children:"min"}),e("td",{children:"\u6700\u5C0F\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),n("tr",{children:[e("td",{children:"step"}),e("td",{children:"\u6B65\u957F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),n("tr",{children:[e("td",{children:"barHeight"}),n("td",{children:["\u8FDB\u5EA6\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"2px"})})]}),n("tr",{children:[e("td",{children:"buttonSize"}),n("td",{children:["\u6ED1\u5757\u6309\u94AE\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"24px"})})]}),n("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u8FDB\u5EA6\u6761\u6FC0\u6D3B\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),n("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u8FDB\u5EA6\u6761\u975E\u6FC0\u6D3B\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#e5e5e5"})})]}),n("tr",{children:[e("td",{children:"range"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"reverse"}),e("td",{children:"\u662F\u5426\u5C06\u8FDB\u5EA6\u6761\u53CD\u8F6C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6ED1\u5757"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u4FEE\u6539\u6ED1\u5757\u7684\u503C"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"vertical"}),e("td",{children:"\u662F\u5426\u5782\u76F4\u5C55\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),n("tr",{children:[e("td",{children:"button"}),e("td",{children:"\u81EA\u5B9A\u4E49\u6ED1\u5757\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"leftButton"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6ED1\u5757\u6309\u94AE\uFF08\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\uFF09"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"rightButton"}),e("td",{children:"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6ED1\u5757\u6309\u94AE \uFF08\u53CC\u6ED1\u5757\u6A21\u5F0F\u4E0B\uFF09"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),n("p",{children:[e("code",{children:"SliderValue"}),"\u6307",e("code",{children:"props.value"})]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"onChange"}),n("td",{children:["\u8FDB\u5EA6\u53D8\u5316\u65F6",e("strong",{children:"\u5B9E\u65F6\u89E6\u53D1"})]}),e("td",{children:e("em",{children:"value: SliderValue"})})]}),n("tr",{children:[e("td",{children:"onChangeAfter"}),n("td",{children:["\u8FDB\u5EA6\u53D8\u5316\u4E14",e("strong",{children:"\u7ED3\u675F\u62D6\u52A8\u540E\u89E6\u53D1"})]}),e("td",{children:e("em",{children:"value: SliderValue"})})]}),n("tr",{children:[e("td",{children:"onDragStart"}),e("td",{children:"\u5F00\u59CB\u62D6\u52A8\u65F6\u89E6\u53D1"}),n("td",{children:[e("em",{children:"event: TouchEvent"}),", ",e("em",{children:"value: SliderValue"})]})]}),n("tr",{children:[e("td",{children:"onDragEnd"}),e("td",{children:"\u7ED3\u675F\u62D6\u52A8\u65F6\u89E6\u53D1"}),n("td",{children:[e("em",{children:"event: TouchEvent"}),", ",e("em",{children:"value: SliderValue"})]})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),n("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"--rv-slider-active-background-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-inactive-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-3)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-bar-height"}),e("td",{children:e("em",{children:"2px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-button-width"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-button-height"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-button-border-radius"}),e("td",{children:e("em",{children:"50%"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-button-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),n("tr",{children:[e("td",{children:"--rv-slider-button-box-shadow"}),e("td",{children:e("em",{children:"0 1px 2px rgba(0, 0, 0, 0.5)"})}),e("td",{children:"-"})]})]})]})]})})},L=[{Component:F,key:"slider-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:C,key:"slider-demo-1",title:"\u53CC\u6ED1\u5757"},{Component:A,key:"slider-demo-2",title:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4"},{Component:m,key:"slider-demo-3",title:"\u7981\u7528"},{Component:p,key:"slider-demo-4",title:"\u6307\u5B9A\u6B65\u957F"},{Component:f,key:"slider-demo-5",title:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{Component:E,key:"slider-demo-6",title:"\u81EA\u5B9A\u4E49\u6309\u94AE"},{Component:g,key:"slider-demo-7",title:"\u5782\u76F4\u65B9\u5411"}],I={simulator:{style:{background:"#fff"}}},R=[{depth:1,text:"Slider \u6ED1\u5757",id:"slider-\u6ED1\u5757"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u53CC\u6ED1\u5757",id:"\u53CC\u6ED1\u5757"},{depth:3,text:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",id:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4"},{depth:3,text:"\u7981\u7528",id:"\u7981\u7528"},{depth:3,text:"\u6307\u5B9A\u6B65\u957F",id:"\u6307\u5B9A\u6B65\u957F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6837\u5F0F",id:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6309\u94AE",id:"\u81EA\u5B9A\u4E49\u6309\u94AE"},{depth:3,text:"\u5782\u76F4\u65B9\u5411",id:"\u5782\u76F4\u65B9\u5411"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],H="/src/components/slider/README.md",z="Slider \u6ED1\u5757",O="1658500653000";var K=t=>t.children({MdContent:w,demos:L,frontmatter:I,slugs:R,filePath:H,title:z,updatedTime:O});export{w as MdContent,K as default,L as demos,H as filePath,I as frontmatter,R as slugs,z as title,O as updatedTime};
