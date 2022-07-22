var y=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var o=(r,t,n)=>t in r?y(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,a=(r,t)=>{for(var n in t||(t={}))k.call(t,n)&&o(r,n,t[n]);if(l)for(var n of l(t))A.call(t,n)&&o(r,n,t[n]);return r},i=(r,t)=>x(r,f(t));import{R as c,j as e,r as P,a as u}from"./main.531c777e.js";import{dh as d,j as w}from"./WaterMark.6f52b203.js";var h=()=>{const[r,t]=c.useState(new Date);return e(d,{title:"\u9009\u62E9\u5E74\u6708\u65E5",type:"date",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:r,onChange:t})};const g=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <DatetimePicker
      title="\u9009\u62E9\u5E74\u6708\u65E5"
      type="date"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`,_={code:g,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <DatetimePicker
      title="\u9009\u62E9\u5E74\u6708\u65E5"
      type="date"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`}},key:"datetime-picker-date",meta:{title:"\u9009\u62E9\u5E74\u6708\u65E5"}};var E=()=>{const[r,t]=P.exports.useState(new Date);return e(d,{popup:{round:!0},type:"date",title:"\u9009\u62E9\u5E74\u6708\u65E5",minDate:new Date(2021,0,1),maxDate:new Date(2025,10,1),value:r,onConfirm:t,children:(n,Z,B)=>e(w,{readOnly:!0,clickable:!0,label:"\u9009\u62E9\u5E74\u6708\u65E5",value:n.toLocaleDateString(),placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",onClick:()=>B.open()})})};const R=`import React, { useState } from 'react';
import { DatetimePicker, Field } from 'react-vant';

export default () => {
  const [value, setValue] = useState(new Date());
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type="date"
      title="\u9009\u62E9\u5E74\u6708\u65E5"
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="\u9009\u62E9\u5E74\u6708\u65E5"
            value={val.toLocaleDateString()}
            placeholder="\u8BF7\u9009\u62E9\u65E5\u671F"
            onClick={() => actions.open()}
          />
        );
      }}
    </DatetimePicker>
  );
};
`,M={code:R,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { DatetimePicker, Field } from 'react-vant';

export default () => {
  const [value, setValue] = useState(new Date());
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type="date"
      title="\u9009\u62E9\u5E74\u6708\u65E5"
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="\u9009\u62E9\u5E74\u6708\u65E5"
            value={val.toLocaleDateString()}
            placeholder="\u8BF7\u9009\u62E9\u65E5\u671F"
            onClick={() => actions.open()}
          />
        );
      }}
    </DatetimePicker>
  );
};
`}},key:"datetime-picker-popup",meta:{title:"\u542F\u7528\u5F39\u51FA\u5C42"}};var F=()=>e(d,{type:"year-month",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),defaultValue:new Date,formatter:(r,t)=>r==="year"?`${t}\u5E74`:r==="month"?`${t}\u6708`:t});const V=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return (
    <DatetimePicker
      type="year-month"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      defaultValue={new Date()}
      formatter={(type: string, val: string) => {
        if (type === 'year') {
          return \`\${val}\u5E74\`;
        }
        if (type === 'month') {
          return \`\${val}\u6708\`;
        }
        return val;
      }}
    />
  );
};
`,b={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return (
    <DatetimePicker
      type="year-month"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      defaultValue={new Date()}
      formatter={(type: string, val: string) => {
        if (type === 'year') {
          return \`\${val}\u5E74\`;
        }
        if (type === 'month') {
          return \`\${val}\u6708\`;
        }
        return val;
      }}
    />
  );
};
`}},key:"datetime-picker-yearmonth",meta:{title:"\u9009\u62E9\u5E74\u6708"}};var m=()=>{const[r,t]=c.useState(new Date);return e(d,{type:"month-day",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:r,onChange:t})};const S=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="month-day"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`,N={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="month-day"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`}},key:"datetime-picker-monthday",meta:{title:"\u9009\u62E9\u6708\u65E5"}};var p=()=>e(d,{defaultValue:"12:00",type:"time",minHour:"10",maxHour:"20"});const $=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return <DatetimePicker defaultValue="12:00" type="time" minHour="10" maxHour="20" />;
};
`,H={code:$,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return <DatetimePicker defaultValue="12:00" type="time" minHour="10" maxHour="20" />;
};
`}},key:"datetime-picker-time",meta:{title:"\u9009\u62E9\u65F6\u95F4"}};var D=()=>{const[r,t]=c.useState(new Date);return e(d,{type:"datetime",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:r,onChange:t})};const I=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="datetime"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`,L={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="datetime"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`}},key:"datetime-picker-datetime",meta:{title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"}};var s=()=>{const[r,t]=c.useState(new Date);return e(d,{type:"datehour",minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:r,onChange:t})};const O=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="datehour"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`,T={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="datehour"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`}},key:"datetime-picker-datehour",meta:{title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"}};var C=()=>e(d,{type:"time",minHour:"10",maxHour:"20",defaultValue:"12:00",filter:(r,t)=>r==="minute"?t.filter(n=>+n%5===0):t});const j=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return (
    <DatetimePicker
      type="time"
      minHour="10"
      maxHour="20"
      defaultValue="12:00"
      filter={(type, options) => {
        if (type === 'minute') {
          return options.filter((option) => +option % 5 === 0);
        }
        return options;
      }}
    />
  );
};
`,q={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return (
    <DatetimePicker
      type="time"
      minHour="10"
      maxHour="20"
      defaultValue="12:00"
      filter={(type, options) => {
        if (type === 'minute') {
          return options.filter((option) => +option % 5 === 0);
        }
        return options;
      }}
    />
  );
};
`}},key:"datetime-picker-filter",meta:{title:"\u9009\u9879\u8FC7\u6EE4\u5668"}};var v=()=>{const[r,t]=c.useState(new Date);return e(d,{type:"date",columnsOrder:["month","day","year"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),value:r,onChange:t})};const z=`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="date"
      columnsOrder={['month', 'day', 'year']}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`,G={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <DatetimePicker
      type="date"
      columnsOrder={['month', 'day', 'year']}
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  );
};
`}},key:"datetime-picker-columnsorder",meta:{title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}},J=function({previewer:r=()=>null,api:t=()=>null}){const n=r;return e("div",{children:u("div",{children:[e("h1",{id:"datetimepicker-\u65F6\u95F4\u9009\u62E9","data-anchor":"datetimepicker-\u65F6\u95F4\u9009\u62E9",children:"DatetimePicker \u65F6\u95F4\u9009\u62E9"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),u("p",{children:["\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\uFF0C\u901A\u5E38\u4E0E",e("a",{href:"/components/popup",children:"\u5F39\u51FA\u5C42"}),"\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002"]}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { DatetimePicker } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u9009\u62E9\u5E74\u6708\u65E5","data-anchor":"\u9009\u62E9\u5E74\u6708\u65E5",children:"\u9009\u62E9\u5E74\u6708\u65E5"}),u("p",{children:["DatetimePicker \u901A\u8FC7 type \u5C5E\u6027\u6765\u5B9A\u4E49\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u7C7B\u578B\uFF0Ctype \u4E3A ",e("code",{children:"date"})," \u8868\u793A\u9009\u62E9\u5E74\u6708\u65E5\u3002\u901A\u8FC7 minDate \u548C maxDate \u5C5E\u6027\u53EF\u4EE5\u786E\u5B9A\u53EF\u9009\u7684\u65F6\u95F4\u8303\u56F4\u3002"]}),e(n,i(a({},_),{children:e(h,{})})),e("h3",{id:"\u542F\u7528\u5F39\u51FA\u5C42","data-anchor":"\u542F\u7528\u5F39\u51FA\u5C42",children:"\u542F\u7528\u5F39\u51FA\u5C42"}),u("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"popup"})," \u5C5E\u6027\u542F\u7528\u5F39\u51FA\u5C42\u7279\u6027"]}),e(n,i(a({},M),{children:e(E,{})})),e("blockquote",{children:u("p",{children:["\u542F\u7528 ",e("code",{children:"popup"})," \u5C5E\u6027\u540E\uFF0C\u4E00\u822C\u4F7F\u7528 ",e("code",{children:"onConfirm"})," \u4E8B\u4EF6\u4EE3\u66FF ",e("code",{children:"onChange"})," \u66F4\u65B0\u5916\u90E8\u503C"]})}),e("h3",{id:"\u9009\u62E9\u5E74\u6708","data-anchor":"\u9009\u62E9\u5E74\u6708",children:"\u9009\u62E9\u5E74\u6708"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"year-month"})," \u5373\u53EF\u9009\u62E9\u5E74\u4EFD\u548C\u6708\u4EFD\u3002\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"formatter"})," \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6587\u5B57\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406\u3002"]}),e(n,i(a({},b),{children:e(F,{})})),e("h3",{id:"\u9009\u62E9\u6708\u65E5","data-anchor":"\u9009\u62E9\u6708\u65E5",children:"\u9009\u62E9\u6708\u65E5"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"month-day"})," \u5373\u53EF\u9009\u62E9\u6708\u4EFD\u548C\u65E5\u671F\u3002"]}),e(n,i(a({},N),{children:e(m,{})})),e("h3",{id:"\u9009\u62E9\u65F6\u95F4","data-anchor":"\u9009\u62E9\u65F6\u95F4",children:"\u9009\u62E9\u65F6\u95F4"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"time"})," \u5373\u53EF\u9009\u62E9\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09\u3002"]}),e(n,i(a({},H),{children:e(p,{})})),e("h3",{id:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4","data-anchor":"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",children:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"datetime"})," \u5373\u53EF\u9009\u62E9\u5B8C\u6574\u65F6\u95F4\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3001\u5206\u949F\u3002"]}),e(n,i(a({},L),{children:e(D,{})})),e("h3",{id:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6","data-anchor":"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",children:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"}),u("p",{children:["\u5C06 type \u8BBE\u7F6E\u4E3A ",e("code",{children:"datehour"})," \u5373\u53EF\u9009\u62E9\u65E5\u671F\u548C\u5C0F\u65F6\uFF0C\u5305\u62EC\u5E74\u6708\u65E5\u548C\u5C0F\u65F6\u3002"]}),e(n,i(a({},T),{children:e(s,{})})),e("h3",{id:"\u9009\u9879\u8FC7\u6EE4\u5668","data-anchor":"\u9009\u9879\u8FC7\u6EE4\u5668",children:"\u9009\u9879\u8FC7\u6EE4\u5668"}),u("p",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"filter"})," \u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u9009\u9879\u6570\u7EC4\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u65F6\u95F4\u95F4\u9694\u3002"]}),e(n,i(a({},q),{children:e(C,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F","data-anchor":"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F",children:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}),e(n,i(a({},G),{children:e(v,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"type"}),u("td",{children:["\u65F6\u95F4\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"date"})," ",e("code",{children:"time"})," ",e("br",{})," ",e("code",{children:"year-month"})," ",e("code",{children:"month-day"})," ",e("code",{children:"datehour"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"datetime"})})]}),u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u9876\u90E8\u680F\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"''"})})]}),u("tr",{children:[e("td",{children:"confirmButtonText"}),e("td",{children:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u786E\u8BA4"})})]}),u("tr",{children:[e("td",{children:"cancelButtonText"}),e("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u53D6\u6D88"})})]}),u("tr",{children:[e("td",{children:"showToolbar"}),e("td",{children:"\u662F\u5426\u663E\u793A\u9876\u90E8\u680F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"loading"}),e("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u65E0\u6CD5\u5207\u6362\u9009\u9879"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"filter"}),e("td",{children:"\u9009\u9879\u8FC7\u6EE4\u51FD\u6570"}),e("td",{children:e("em",{children:"(type: string, values: string[]) => string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"formatter"}),e("td",{children:"\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570"}),e("td",{children:e("em",{children:"(type: string, value: string) => string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"columnsOrder"}),u("td",{children:["\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F\u6570\u7EC4, \u5B50\u9879\u53EF\u9009\u503C\u4E3A",e("br",{})," ",e("code",{children:"year"}),"\u3001",e("code",{children:"month"}),"\u3001",e("code",{children:"day"}),"\u3001",e("code",{children:"hour"}),"\u3001",e("code",{children:"minute"})]}),e("td",{children:e("em",{children:"string[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"itemHeight"}),u("td",{children:["\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 ",e("code",{children:"px"})," ",e("code",{children:"vw"})," ",e("code",{children:"vh"})," ",e("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"44"})})]}),u("tr",{children:[e("td",{children:"visibleItemCount"}),e("td",{children:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"6"})})]}),u("tr",{children:[e("td",{children:"swipeDuration"}),u("td",{children:["\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D",e("code",{children:"ms"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1000"})})]}),u("tr",{children:[e("td",{children:"columnsTop"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"columnsBottom"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"optionRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9"}),e("td",{children:e("em",{children:"(option: string | object) => ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"datepicker-props","data-anchor":"datepicker-props",children:"DatePicker Props"}),e("p",{children:"\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A date \u6216 datetime \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"minDate"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5341\u5E74\u524D"})]}),u("tr",{children:[e("td",{children:"maxDate"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u5206\u949F"}),e("td",{children:e("em",{children:"Date"})}),e("td",{children:"\u5341\u5E74\u540E"})]})]})]}),e("h3",{id:"timepicker-props","data-anchor":"timepicker-props",children:"TimePicker Props"}),e("p",{children:"\u5F53\u65F6\u95F4\u9009\u62E9\u5668\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"minHour"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u5C0F\u65F6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"maxHour"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u5C0F\u65F6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"23"})})]}),u("tr",{children:[e("td",{children:"minMinute"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5C0F\u5206\u949F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),u("tr",{children:[e("td",{children:"maxMinute"}),e("td",{children:"\u53EF\u9009\u7684\u6700\u5927\u5206\u949F"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"59"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4"})]}),u("tr",{children:[e("td",{children:"onConfirm"}),e("td",{children:"\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"value: \u5F53\u524D\u9009\u4E2D\u7684\u65F6\u95F4"})]}),u("tr",{children:[e("td",{children:"onCancel"}),e("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{}),e("td",{}),e("td",{})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"\u8BBE\u7F6E-mindate-\u6216-maxdate-\u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5","data-anchor":"\u8BBE\u7F6E-mindate-\u6216-maxdate-\u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5",children:"\u8BBE\u7F6E minDate \u6216 maxDate \u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5\uFF1F"}),u("p",{children:["\u8BF7\u6CE8\u610F\u4E0D\u8981\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528\u7C7B\u4F3C",e("code",{children:'minDate="new Date()"'}),"\u7684\u5199\u6CD5\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6BCF\u6B21\u6E32\u67D3\u7EC4\u4EF6\u65F6\u4F20\u5165\u4E00\u4E2A\u65B0\u7684 Date \u5BF9\u8C61\uFF0C\u800C\u4F20\u5165\u65B0\u7684\u6570\u636E\u4F1A\u89E6\u53D1\u4E0B\u4E00\u6B21\u6E32\u67D3\uFF0C\u4ECE\u800C\u9677\u5165\u6B7B\u5FAA\u73AF\u3002"]}),u("p",{children:["\u6B63\u786E\u7684\u505A\u6CD5\u662F\u5C06",e("code",{children:"minDate"}),"\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5B9A\u4E49\u5728",e("code",{children:"data"}),"\u51FD\u6570\u4E2D\u3002"]}),e("h3",{id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25","data-anchor":"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25",children:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F"}),u("p",{children:["\u5982\u679C\u4F60\u9047\u5230\u4E86\u5728 iOS \u4E0A\u65E0\u6CD5\u6E32\u67D3\u7EC4\u4EF6\u7684\u95EE\u9898\uFF0C\u8BF7\u786E\u8BA4\u5728\u521B\u5EFA Date \u5BF9\u8C61\u65F6\u6CA1\u6709\u4F7F\u7528",e("code",{children:"new Date('2020-01-01')"}),"\u8FD9\u6837\u7684\u5199\u6CD5\uFF0CiOS \u4E0D\u652F\u6301\u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6B63\u786E\u5199\u6CD5\u662F",e("code",{children:"new Date('2020/01/01')"}),"\u3002"]}),u("p",{children:["\u5BF9\u6B64\u95EE\u9898\u7684\u8BE6\u7EC6\u89E3\u91CA\uFF1A",e("a",{href:"https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios",children:"stackoverflow"}),"\u3002"]}),e("h3",{id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6","data-anchor":"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6",children:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F"}),u("p",{children:["\u53C2\u89C1",e("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]}),e("h3",{id:"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668","data-anchor":"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668",children:"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668\uFF1F"}),u("p",{children:["\u5982\u679C\u4EC5\u9700\u8981\u9009\u62E9\u5E74\u4EFD\u6216\u8005\u6708\u4EFD\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 ",e("a",{href:"/components/picker",children:"Picker"})," \u7EC4\u4EF6\u3002"]})]})})},K=[{Component:h,key:"datetime-picker-date",title:"\u9009\u62E9\u5E74\u6708\u65E5"},{Component:E,key:"datetime-picker-popup",title:"\u542F\u7528\u5F39\u51FA\u5C42"},{Component:F,key:"datetime-picker-yearmonth",title:"\u9009\u62E9\u5E74\u6708"},{Component:m,key:"datetime-picker-monthday",title:"\u9009\u62E9\u6708\u65E5"},{Component:p,key:"datetime-picker-time",title:"\u9009\u62E9\u65F6\u95F4"},{Component:D,key:"datetime-picker-datetime",title:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"},{Component:s,key:"datetime-picker-datehour",title:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"},{Component:C,key:"datetime-picker-filter",title:"\u9009\u9879\u8FC7\u6EE4\u5668"},{Component:v,key:"datetime-picker-columnsorder",title:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"}],Q=void 0,U=[{depth:1,text:"DatetimePicker \u65F6\u95F4\u9009\u62E9",id:"datetimepicker-\u65F6\u95F4\u9009\u62E9"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u9009\u62E9\u5E74\u6708\u65E5",id:"\u9009\u62E9\u5E74\u6708\u65E5"},{depth:3,text:"\u542F\u7528\u5F39\u51FA\u5C42",id:"\u542F\u7528\u5F39\u51FA\u5C42"},{depth:3,text:"\u9009\u62E9\u5E74\u6708",id:"\u9009\u62E9\u5E74\u6708"},{depth:3,text:"\u9009\u62E9\u6708\u65E5",id:"\u9009\u62E9\u6708\u65E5"},{depth:3,text:"\u9009\u62E9\u65F6\u95F4",id:"\u9009\u62E9\u65F6\u95F4"},{depth:3,text:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4",id:"\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"},{depth:3,text:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6",id:"\u9009\u62E9\u5E74\u6708\u65E5\u5C0F\u65F6"},{depth:3,text:"\u9009\u9879\u8FC7\u6EE4\u5668",id:"\u9009\u9879\u8FC7\u6EE4\u5668"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F",id:"\u81EA\u5B9A\u4E49\u5217\u6392\u5E8F"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"DatePicker Props",id:"datepicker-props"},{depth:3,text:"TimePicker Props",id:"timepicker-props"},{depth:3,text:"Events",id:"events"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u8BBE\u7F6E minDate \u6216 maxDate \u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5\uFF1F",id:"\u8BBE\u7F6E-mindate-\u6216-maxdate-\u540E\u51FA\u73B0\u9875\u9762\u5361\u6B7B\u7684\u60C5\u51B5"},{depth:3,text:"\u5728 iOS \u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25\uFF1F",id:"\u5728-ios-\u7CFB\u7EDF\u4E0A\u521D\u59CB\u5316\u7EC4\u4EF6\u5931\u8D25"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6"},{depth:3,text:"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668\uFF1F",id:"\u662F\u5426\u6709\u5E74\u4EFD\u6216\u6708\u4EFD\u9009\u62E9\u5668"}],W="/src/components/datetime-picker/README.md",X="DatetimePicker \u65F6\u95F4\u9009\u62E9",Y="1658500653000";var re=r=>r.children({MdContent:J,demos:K,frontmatter:Q,slugs:U,filePath:W,title:X,updatedTime:Y});export{J as MdContent,re as default,K as demos,W as filePath,Q as frontmatter,U as slugs,X as title,Y as updatedTime};
