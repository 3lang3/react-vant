var D=Object.defineProperty,v=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var o=(t,r,d)=>r in t?D(t,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[r]=d,c=(t,r)=>{for(var d in r||(r={}))A.call(r,d)&&o(t,d,r[d]);if(i)for(var d of i(r))f.call(r,d)&&o(t,d,r[d]);return t},n=(t,r)=>v(t,m(r));import{r as l,j as u,a as e}from"./main.531c777e.js";import{d8 as a,da as h}from"./WaterMark.6f52b203.js";var F=()=>{const[t,r]=l.exports.useState("");return u(a,{value:t,onChange:r,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const g={code:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`}},key:"search-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var s=()=>{const[t,r]=l.exports.useState("");return u(a,{value:t,onChange:r,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",showAction:!0,onSearch:d=>{h(d),r(d)},onCancel:()=>{h("\u53D6\u6D88"),r("")},onClear:()=>{h("\u6E05\u9664"),r("")},onClickInput:()=>{h("\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	")}})};const S={code:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast('\u53D6\u6D88');
        setValue('');
      }}
      onClear={() => {
        Toast('\u6E05\u9664');
        setValue('');
      }}
      onClickInput={() => {
        Toast('\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	');
      }}
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
      showAction
      onSearch={(val) => {
        Toast(val);
        setValue(val);
      }}
      onCancel={() => {
        Toast('\u53D6\u6D88');
        setValue('');
      }}
      onClear={() => {
        Toast('\u6E05\u9664');
        setValue('');
      }}
      onClickInput={() => {
        Toast('\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1	');
      }}
    />
  );
};`}},key:"search-demo-1",meta:{title:"\u4E8B\u4EF6\u76D1\u542C"}};var E=()=>{const[t,r]=l.exports.useState("");return u(a,{value:t,onChange:r,align:"center",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const x={code:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search value={value} onChange={setValue} align="center" placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />
  );
};`}},key:"search-demo-2",meta:{title:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"}};var C=()=>{const[t,r]=l.exports.useState("");return u(a,{disabled:!0,value:t,onChange:r,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const y={code:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search disabled value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return <Search disabled value={value} onChange={setValue} placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD" />;
};`}},key:"search-demo-3",meta:{title:"\u7981\u7528\u641C\u7D22\u6846"}};var B=()=>{const[t,r]=l.exports.useState("");return u(a,{shape:"round",background:"#4fc08d",value:t,onChange:r,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const b={code:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      shape="round"
      background="#4fc08d"
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`}},key:"search-demo-4",meta:{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"}};var p=()=>{const[t,r]=l.exports.useState("");return u(a,{showAction:!0,label:"\u5730\u5740",actionText:u("div",{onClick:()=>h.info(t),children:"\u641C\u7D22"}),value:t,onChange:r,placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"})};const V={code:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      showAction
      label="\u5730\u5740"
      actionText={<div onClick={() => Toast.info(value)}>\u641C\u7D22</div>}
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Search, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState('');
  return (
    <Search
      showAction
      label="\u5730\u5740"
      actionText={<div onClick={() => Toast.info(value)}>\u641C\u7D22</div>}
      value={value}
      onChange={setValue}
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    />
  );
};`}},key:"search-demo-5",meta:{title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}},k=function({previewer:t=()=>null,api:r=()=>null}){const d=t;return u("div",{children:e("div",{children:[u("h1",{id:"search-\u641C\u7D22","data-anchor":"search-\u641C\u7D22",children:"Search \u641C\u7D22"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:"\u7528\u4E8E\u641C\u7D22\u573A\u666F\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u3002"}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(d,{code:"import { Search } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("p",{children:[u("code",{children:"value"})," \u7528\u4E8E\u63A7\u5236\u641C\u7D22\u6846\u4E2D\u7684\u6587\u5B57\uFF0C",u("code",{children:"background"})," \u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272\u3002"]}),u(d,n(c({},g),{children:u(F,{})})),u("h3",{id:"\u4E8B\u4EF6\u76D1\u542C","data-anchor":"\u4E8B\u4EF6\u76D1\u542C",children:"\u4E8B\u4EF6\u76D1\u542C"}),e("p",{children:["Search \u7EC4\u4EF6\u63D0\u4F9B\u4E86 ",u("code",{children:"onSearch"})," \u548C ",u("code",{children:"onCancel"})," \u4E8B\u4EF6\uFF0C",u("code",{children:"onSearch"})," \u4E8B\u4EF6\u5728\u70B9\u51FB\u952E\u76D8\u4E0A\u7684\u641C\u7D22/\u56DE\u8F66\u6309\u94AE\u540E\u89E6\u53D1\uFF0C",u("code",{children:"onCancel"})," \u4E8B\u4EF6\u5728\u70B9\u51FB\u641C\u7D22\u6846\u53F3\u4FA7\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002"]}),u(d,n(c({},S),{children:u(s,{})})),u("h3",{id:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50","data-anchor":"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",children:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"align"})," \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"}),"\u3001",u("code",{children:"right"}),"\u3002"]}),u(d,n(c({},x),{children:u(E,{})})),u("h3",{id:"\u7981\u7528\u641C\u7D22\u6846","data-anchor":"\u7981\u7528\u641C\u7D22\u6846",children:"\u7981\u7528\u641C\u7D22\u6846"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"disabled"})," \u5C5E\u6027\u7981\u7528\u641C\u7D22\u6846\u3002"]}),u(d,n(c({},y),{children:u(C,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",children:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"background"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u641C\u7D22\u6846\u5916\u90E8\u7684\u80CC\u666F\u8272\uFF0C\u901A\u8FC7 ",u("code",{children:"shape"})," \u5C5E\u6027\u8BBE\u7F6E\u641C\u7D22\u6846\u7684\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"round"}),"\u3002"]}),u(d,n(c({},b),{children:u(B,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49\u6309\u94AE","data-anchor":"\u81EA\u5B9A\u4E49\u6309\u94AE",children:"\u81EA\u5B9A\u4E49\u6309\u94AE"}),e("p",{children:["\u4F7F\u7528 ",u("code",{children:"actionText"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6309\u94AE\u7684\u5185\u5BB9\u3002\u4F7F\u7528\u540E\uFF0C",u("code",{children:"onCancel"})," \u4E8B\u4EF6\u5C06\u4E0D\u518D\u89E6\u53D1\u3002"]}),u(d,n(c({},V),{children:u(p,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"label"}),u("td",{children:"\u641C\u7D22\u6846\u5DE6\u4FA7\u6587\u672C"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"shape"}),e("td",{children:["\u641C\u7D22\u6846\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"round"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"square"})})]}),e("tr",{children:[u("td",{children:"background"}),u("td",{children:"\u641C\u7D22\u6846\u5916\u90E8\u80CC\u666F\u8272"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"#f2f2f2"})})]}),e("tr",{children:[u("td",{children:"maxLength"}),u("td",{children:"\u8F93\u5165\u7684\u6700\u5927\u5B57\u7B26\u6570"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"placeholder"}),u("td",{children:"\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"clearable"}),u("td",{children:"\u662F\u5426\u542F\u7528\u6E05\u9664\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u540E\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"clearIcon"}),u("td",{children:"\u6E05\u9664\u56FE\u6807"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"clear"})})]}),e("tr",{children:[u("td",{children:"clearTrigger"}),e("td",{children:["\u663E\u793A\u6E05\u9664\u56FE\u6807\u7684\u65F6\u673A\uFF0C",u("code",{children:"always"})," \u8868\u793A\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A\uFF0C",u("br",{}),u("code",{children:"focus"})," \u8868\u793A\u8F93\u5165\u6846\u805A\u7126\u4E14\u4E0D\u4E3A\u7A7A\u65F6\u5C55\u793A"]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"focus"})})]}),e("tr",{children:[u("td",{children:"autoFocus"}),u("td",{children:"\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0CiOS \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showAction"}),u("td",{children:"\u662F\u5426\u5728\u641C\u7D22\u6846\u53F3\u4FA7\u663E\u793A\u53D6\u6D88\u6309\u94AE"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"actionText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u53D6\u6D88"})})]}),e("tr",{children:[u("td",{children:"disabled"}),u("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"readOnly"}),u("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u6846\u8BBE\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u8F93\u5165\u5185\u5BB9"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"error"}),u("td",{children:"\u662F\u5426\u5C06\u8F93\u5165\u5185\u5BB9\u6807\u7EA2"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"errorMessage"}),u("td",{children:"\u5E95\u90E8\u9519\u8BEF\u63D0\u793A\u6587\u6848\uFF0C\u4E3A\u7A7A\u65F6\u4E0D\u5C55\u793A"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatter"}),u("td",{children:"\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570"}),u("td",{children:u("em",{children:"(val: string) => string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"formatTrigger"}),e("td",{children:["\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"onBlur"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"onChange"})})]}),e("tr",{children:[u("td",{children:"align"}),e("td",{children:["\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"center"})," ",u("code",{children:"right"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"left"})})]}),e("tr",{children:[u("td",{children:"leftIcon"}),u("td",{children:"\u8F93\u5165\u6846\u5DE6\u4FA7"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"search"})})]}),e("tr",{children:[u("td",{children:"rightIcon"}),u("td",{children:"\u8F93\u5165\u6846\u53F3\u4FA7"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onSearch"}),u("td",{children:"\u786E\u5B9A\u641C\u7D22\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)"})})]}),e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"value: string (\u5F53\u524D\u8F93\u5165\u7684\u503C)"})})]}),e("tr",{children:[u("td",{children:"onFocus"}),u("td",{children:"\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: Event"})})]}),e("tr",{children:[u("td",{children:"onBlur"}),u("td",{children:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: Event"})})]}),e("tr",{children:[u("td",{children:"onClickInput"}),u("td",{children:"\u70B9\u51FB\u8F93\u5165\u533A\u57DF\u65F6\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onClear"}),u("td",{children:"\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u540E\u89E6\u53D1"}),u("td",{children:u("em",{children:"event: MouseEvent"})})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),u("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Search \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"focus"}),u("td",{children:"\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"blur"}),u("td",{children:"\u53D6\u6D88\u8F93\u5165\u6846\u7126\u70B9"}),u("td",{children:"-"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"SearchInstance"})," \u83B7\u53D6 Search \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"]}),u(d,{code:`import { useRef } from 'react';
import type { SearchInstance } from 'react-vant';

const searchRef = useRef<SearchInstance>();

searchRef.current?.focus();`,lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-search-padding"}),u("td",{children:u("em",{children:"10px var(--rv-padding-sm)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-content-background-color"}),u("td",{children:u("em",{children:"var(--rv-gray-1)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-input-height"}),u("td",{children:u("em",{children:"34px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-padding"}),u("td",{children:u("em",{children:"0 5px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-label-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-left-icon-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-xs)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-text-color"}),u("td",{children:u("em",{children:"var(--rv-text-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-search-action-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548","data-anchor":"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548",children:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F"}),e("p",{children:["\u6E05\u9664\u6309\u94AE\u76D1\u542C\u662F\u7684\u79FB\u52A8\u7AEF Touch \u4E8B\u4EF6\uFF0C\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},P=[{Component:F,key:"search-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:s,key:"search-demo-1",title:"\u4E8B\u4EF6\u76D1\u542C"},{Component:E,key:"search-demo-2",title:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"},{Component:C,key:"search-demo-3",title:"\u7981\u7528\u641C\u7D22\u6846"},{Component:B,key:"search-demo-4",title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"},{Component:p,key:"search-demo-5",title:"\u81EA\u5B9A\u4E49\u6309\u94AE"}],M=void 0,T=[{depth:1,text:"Search \u641C\u7D22",id:"search-\u641C\u7D22"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u4E8B\u4EF6\u76D1\u542C",id:"\u4E8B\u4EF6\u76D1\u542C"},{depth:3,text:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",id:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50"},{depth:3,text:"\u7981\u7528\u641C\u7D22\u6846",id:"\u7981\u7528\u641C\u7D22\u6846"},{depth:3,text:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",id:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6309\u94AE",id:"\u81EA\u5B9A\u4E49\u6309\u94AE"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65E0\u6548"}],R="/src/components/search/README.md",I="Search \u641C\u7D22",N="1658500653000";var $=t=>t.children({MdContent:k,demos:P,frontmatter:M,slugs:T,filePath:R,title:I,updatedTime:N});export{k as MdContent,$ as default,P as demos,R as filePath,M as frontmatter,T as slugs,I as title,N as updatedTime};
