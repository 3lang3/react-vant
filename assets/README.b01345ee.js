var v=Object.defineProperty,g=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var a=(i,d,u)=>d in i?v(i,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[d]=u,c=(i,d)=>{for(var u in d||(d={}))x.call(d,u)&&a(i,u,d[u]);if(h)for(var u of h(d))G.call(d,u)&&a(i,u,d[u]);return i},o=(i,d)=>g(i,A(d));import{a as t,j as e}from"./main.531c777e.js";import{d9 as r,g as n,I as l,bd as f,cf as D}from"./WaterMark.6f52b203.js";var m=()=>t(r,{children:[e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"}),e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"}),e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"}),e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"})]});const y=`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid>
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
    </Grid>
  );
};
`,I={code:y,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid>
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
    </Grid>
  );
};
`}},key:"grid-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var p=()=>e(r,{columnNum:3,children:Array.from({length:6},(i,d)=>e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"},d))});const _=`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid columnNum={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`,S={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid columnNum={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`}},key:"grid-column",meta:{title:"\u81EA\u5B9A\u4E49\u5217\u6570"}};var B=()=>t(r,{border:!1,columnNum:3,children:[e(r.Item,{children:e(l,{src:"https://img.yzcdn.cn/vant/apple-1.jpg"})}),e(r.Item,{children:e(l,{src:"https://img.yzcdn.cn/vant/apple-2.jpg"})}),e(r.Item,{children:e(l,{src:"https://img.yzcdn.cn/vant/apple-3.jpg"})})]});const P=`import React from 'react';
import { Grid, Image } from 'react-vant';

export default () => {
  return (
    <Grid border={false} columnNum={3}>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </Grid.Item>
    </Grid>
  );
};
`,N={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid, Image } from 'react-vant';

export default () => {
  return (
    <Grid border={false} columnNum={3}>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </Grid.Item>
    </Grid>
  );
};
`}},key:"grid-children",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}};var s=()=>e(r,{square:!0,children:Array.from({length:8},(i,d)=>e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"},d))});const M=`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid square>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`,O={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid square>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`}},key:"grid-square",meta:{title:"\u6B63\u65B9\u5F62\u683C\u5B50"}};var E=()=>e(r,{gutter:10,children:Array.from({length:8},(i,d)=>e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"},d))});const b=`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid gutter={10}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`,R={code:b,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid gutter={10}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="\u6587\u5B57" />
      ))}
    </Grid>
  );
};
`}},key:"grid-gutter",meta:{title:"\u683C\u5B50\u95F4\u8DDD"}};var F=()=>t(r,{direction:"horizontal",columnNum:3,children:[e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"}),e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"}),e(r.Item,{icon:e(n,{}),text:"\u6587\u5B57"})]});const k=`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid direction="horizontal" columnNum={3}>
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
    </Grid>
  );
};
`,z={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  return (
    <Grid direction="horizontal" columnNum={3}>
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
      <Grid.Item icon={<ShopO />} text="\u6587\u5B57" />
    </Grid>
  );
};
`}},key:"grid-direction",meta:{title:"\u5185\u5BB9\u6A2A\u6392"}};var C=()=>t(r,{columnNum:2,children:[e(r.Item,{icon:e(f,{}),text:"\u6587\u5B57",badge:{dot:!0}}),e(r.Item,{icon:e(D,{}),text:"\u6587\u5B57",badge:{content:"99+"}})]});const j=`import React from 'react';
import { Grid } from 'react-vant';
import { HomeO, Search } from '@react-vant/icons';

export default () => {
  return (
    <Grid columnNum={2}>
      <Grid.Item icon={<HomeO />} text="\u6587\u5B57" badge={{ dot: true }} />
      <Grid.Item icon={<Search />} text="\u6587\u5B57" badge={{ content: '99+' }} />
    </Grid>
  );
};
`,$={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Grid } from 'react-vant';
import { HomeO, Search } from '@react-vant/icons';

export default () => {
  return (
    <Grid columnNum={2}>
      <Grid.Item icon={<HomeO />} text="\u6587\u5B57" badge={{ dot: true }} />
      <Grid.Item icon={<Search />} text="\u6587\u5B57" badge={{ content: '99+' }} />
    </Grid>
  );
};
`}},key:"grid-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}},w=function({previewer:i=()=>null,api:d=()=>null}){const u=i;return e("div",{children:t("div",{children:[e("h1",{id:"grid-\u5BAB\u683C","data-anchor":"grid-\u5BAB\u683C",children:"Grid \u5BAB\u683C"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5BAB\u683C\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u628A\u9875\u9762\u5206\u9694\u6210\u7B49\u5BBD\u5EA6\u7684\u533A\u5757\uFF0C\u7528\u4E8E\u5C55\u793A\u5185\u5BB9\u6216\u8FDB\u884C\u9875\u9762\u5BFC\u822A\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),t("p",{children:["\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003",e("a",{href:"/guide/advanced-usage#zu-jian-zhu-ce",children:"\u7EC4\u4EF6\u6CE8\u518C"}),"\u3002"]}),e(u,{code:"import { Grid } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u8BBE\u7F6E\u683C\u5B50\u5185\u7684\u56FE\u6807\uFF0C",e("code",{children:"text"})," \u5C5E\u6027\u8BBE\u7F6E\u6587\u5B57\u5185\u5BB9\u3002"]}),e(u,o(c({},I),{children:e(m,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5217\u6570","data-anchor":"\u81EA\u5B9A\u4E49\u5217\u6570",children:"\u81EA\u5B9A\u4E49\u5217\u6570"}),t("p",{children:["\u9ED8\u8BA4\u4E00\u884C\u5C55\u793A\u56DB\u4E2A\u683C\u5B50\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"columnNum"})," \u81EA\u5B9A\u4E49\u5217\u6570\u3002"]}),e(u,o(c({},S),{children:e(p,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9","data-anchor":"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u683C\u5B50\u5C55\u793A\u7684\u5185\u5BB9\u3002"}),e(u,o(c({},N),{children:e(B,{})})),e("h3",{id:"\u6B63\u65B9\u5F62\u683C\u5B50","data-anchor":"\u6B63\u65B9\u5F62\u683C\u5B50",children:"\u6B63\u65B9\u5F62\u683C\u5B50"}),t("p",{children:["\u8BBE\u7F6E ",e("code",{children:"square"})," \u5C5E\u6027\u540E\uFF0C\u683C\u5B50\u7684\u9AD8\u5EA6\u4F1A\u548C\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\u3002"]}),e(u,o(c({},O),{children:e(s,{})})),e("h3",{id:"\u683C\u5B50\u95F4\u8DDD","data-anchor":"\u683C\u5B50\u95F4\u8DDD",children:"\u683C\u5B50\u95F4\u8DDD"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"gutter"})," \u5C5E\u6027\u8BBE\u7F6E\u683C\u5B50\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002"]}),e(u,o(c({},R),{children:e(E,{})})),e("h3",{id:"\u5185\u5BB9\u6A2A\u6392","data-anchor":"\u5185\u5BB9\u6A2A\u6392",children:"\u5185\u5BB9\u6A2A\u6392"}),t("p",{children:["\u5C06 ",e("code",{children:"direction"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"horizontal"}),"\uFF0C\u53EF\u4EE5\u8BA9\u5BAB\u683C\u7684\u5185\u5BB9\u5448\u6A2A\u5411\u6392\u5217\u3002"]}),e(u,o(c({},z),{children:e(F,{})})),e("h3",{id:"\u5FBD\u6807\u63D0\u793A","data-anchor":"\u5FBD\u6807\u63D0\u793A",children:"\u5FBD\u6807\u63D0\u793A"}),t("p",{children:["\u8BBE\u7F6E ",e("code",{children:"dot"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\u3002\u8BBE\u7F6E ",e("code",{children:"badge"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002"]}),e(u,o(c({},$),{children:e(C,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"grid-props","data-anchor":"grid-props",children:"Grid Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"columnNum"}),e("td",{children:"\u5217\u6570"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"4"})})]}),t("tr",{children:[e("td",{children:"iconSize"}),t("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"28px"})})]}),t("tr",{children:[e("td",{children:"gutter"}),t("td",{children:["\u683C\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"center"}),e("td",{children:"\u662F\u5426\u5C06\u683C\u5B50\u5185\u5BB9\u5C45\u4E2D\u663E\u793A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"square"}),e("td",{children:"\u662F\u5426\u5C06\u683C\u5B50\u56FA\u5B9A\u4E3A\u6B63\u65B9\u5F62"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"direction"}),t("td",{children:["\u683C\u5B50\u5185\u5BB9\u6392\u5217\u7684\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"horizontal"})]}),e("td",{children:e("code",{children:"vertical"})}),e("td",{})]}),t("tr",{children:[e("td",{children:"reverse"}),e("td",{children:"\u662F\u5426\u8C03\u6362\u56FE\u6807\u548C\u6587\u672C\u7684\u4F4D\u7F6E"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"style"}),e("td",{children:"style"}),e("td",{children:e("em",{children:"React.CSSProperties"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"griditem-props","data-anchor":"griditem-props",children:"GridItem Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u56FE\u6807"}),e("td",{children:e("em",{children:"React.ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"iconColor"}),t("td",{children:["\u56FE\u6807\u989C\u8272\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 ",e("a",{href:"/components/icon#props",children:"color \u5C5E\u6027"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"badge"}),e("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"BadgeProps"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"style"}),e("td",{children:"style"}),e("td",{children:e("em",{children:"React.CSSProperties"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"contentClassName"}),e("td",{children:"\u5185\u5BB9\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"contentStyle"}),e("td",{children:"\u5185\u5BB9 style"}),e("td",{children:e("em",{children:"React.CSSProperties"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"griditem-events","data-anchor":"griditem-events",children:"GridItem Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u683C\u5B50\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(u,{code:"import type { GridDirection } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-grid-item-content-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-md) var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-grid-item-content-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-grid-item-content-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-grid-item-icon-size"}),e("td",{children:e("em",{children:"28px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-grid-item-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-grid-item-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]})]})]})]})})},q=[{Component:m,key:"grid-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"grid-column",title:"\u81EA\u5B9A\u4E49\u5217\u6570"},{Component:B,key:"grid-children",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{Component:s,key:"grid-square",title:"\u6B63\u65B9\u5F62\u683C\u5B50"},{Component:E,key:"grid-gutter",title:"\u683C\u5B50\u95F4\u8DDD"},{Component:F,key:"grid-direction",title:"\u5185\u5BB9\u6A2A\u6392"},{Component:C,key:"grid-badge",title:"\u5FBD\u6807\u63D0\u793A"}],L=void 0,H=[{depth:1,text:"Grid \u5BAB\u683C",id:"grid-\u5BAB\u683C"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5217\u6570",id:"\u81EA\u5B9A\u4E49\u5217\u6570"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{depth:3,text:"\u6B63\u65B9\u5F62\u683C\u5B50",id:"\u6B63\u65B9\u5F62\u683C\u5B50"},{depth:3,text:"\u683C\u5B50\u95F4\u8DDD",id:"\u683C\u5B50\u95F4\u8DDD"},{depth:3,text:"\u5185\u5BB9\u6A2A\u6392",id:"\u5185\u5BB9\u6A2A\u6392"},{depth:3,text:"\u5FBD\u6807\u63D0\u793A",id:"\u5FBD\u6807\u63D0\u793A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Grid Props",id:"grid-props"},{depth:3,text:"GridItem Props",id:"griditem-props"},{depth:3,text:"GridItem Events",id:"griditem-events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],T="/src/components/grid/README.md",J="Grid \u5BAB\u683C",K="1658500653000";var W=i=>i.children({MdContent:w,demos:q,frontmatter:L,slugs:H,filePath:T,title:J,updatedTime:K});export{w as MdContent,W as default,q as demos,T as filePath,L as frontmatter,H as slugs,J as title,K as updatedTime};
