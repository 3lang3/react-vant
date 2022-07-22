var B=Object.defineProperty,T=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(n,u,a)=>u in n?B(n,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[u]=a,i=(n,u)=>{for(var a in u||(u={}))C.call(u,a)&&m(n,a,u[a]);if(h)for(var a of h(u))g.call(u,a)&&m(n,a,u[a]);return n},c=(n,u)=>T(n,I(u));import{j as e,a as t,R as D}from"./main.531c777e.js";import{ec as r,bd as o,cf as l,aZ as d,ck as b}from"./WaterMark.6f52b203.js";var E=()=>e("div",{className:"demo-tabbar",children:t(r,{children:[e(r.Item,{icon:e(o,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(l,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{icon:e(b,{}),children:"\u6807\u7B7E"})]})});const A=`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  return (
    <div className='demo-tabbar'>
    <Tabbar>
      <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<Search />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<FriendsO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<SettingO />}>\u6807\u7B7E</Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`,f={code:A,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  return (
    <div className='demo-tabbar'>
    <Tabbar>
      <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<Search />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<FriendsO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item icon={<SettingO />}>\u6807\u7B7E</Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`}},key:"tabbar-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var v=()=>{const[n,u]=D.useState("setting");return e("div",{className:"demo-tabbar",children:t(r,{value:n,onChange:a=>u(a),children:[e(r.Item,{name:"home",icon:e(o,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"search",icon:e(l,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"firends",icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{name:"setting",icon:e(b,{}),children:"\u6807\u7B7E"})]})})};const O=`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  const [name, setName] = React.useState('setting');
  return (
    <div className='demo-tabbar'>
    <Tabbar value={name} onChange={(v) => setName(v as string)}>
      <Tabbar.Item name="home" icon={<HomeO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="search" icon={<Search />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="firends" icon={<FriendsO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="setting" icon={<SettingO />}>
        \u6807\u7B7E
      </Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`,x={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  const [name, setName] = React.useState('setting');
  return (
    <div className='demo-tabbar'>
    <Tabbar value={name} onChange={(v) => setName(v as string)}>
      <Tabbar.Item name="home" icon={<HomeO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="search" icon={<Search />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="firends" icon={<FriendsO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item name="setting" icon={<SettingO />}>
        \u6807\u7B7E
      </Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`}},key:"tabbar-control",meta:{title:"\u53D7\u63A7\u7EC4\u4EF6"}};var F=()=>e("div",{className:"demo-tabbar",children:t(r,{children:[e(r.Item,{icon:e(o,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{dot:!0},icon:e(l,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{content:5},icon:e(d,{}),children:"\u6807\u7B7E"}),e(r.Item,{badge:{content:20},icon:e(b,{}),children:"\u6807\u7B7E"})]})});const S=`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  return (
    <div className='demo-tabbar'>
    <Tabbar>
      <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
        \u6807\u7B7E
      </Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`,y={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  return (
    <div className='demo-tabbar'>
    <Tabbar>
      <Tabbar.Item icon={<HomeO />}>\u6807\u7B7E</Tabbar.Item>
      <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
        \u6807\u7B7E
      </Tabbar.Item>
      <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
        \u6807\u7B7E
      </Tabbar.Item>
    </Tabbar>
    </div>
  );
};
`}},key:"tabbar-badge",meta:{title:"\u5FBD\u6807\u63D0\u793A"}};const s={active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"};var p=()=>t("div",{className:"demo-tabbar",children:[t(r,{children:[e(r.Item,{icon:n=>e("img",{alt:"tab",src:n?s.active:s.inactive}),children:"\u56FE\u6807"}),e(r.Item,{icon:e(d,{}),children:"\u56FE\u6807"}),e(r.Item,{icon:e(b,{}),children:"\u56FE\u6807"})]}),e("br",{}),t(r,{activeColor:"#f44336",inactiveColor:"#000",children:[e(r.Item,{icon:e(o,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(l,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(d,{}),children:"\u989C\u8272"}),e(r.Item,{icon:e(b,{}),children:"\u989C\u8272"})]})]});const N=`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';
import './style.less';

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

export default () => {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item icon={(ac) => <img alt="tab" src={ac ? icon.active : icon.inactive} />}>
          \u56FE\u6807
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u56FE\u6807</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u56FE\u6807</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor="#f44336" inactiveColor="#000">
        <Tabbar.Item icon={<HomeO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u989C\u8272</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
`,P={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';
import './style.less';

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

export default () => {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item icon={(ac) => <img alt="tab" src={ac ? icon.active : icon.inactive} />}>
          \u56FE\u6807
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u56FE\u6807</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u56FE\u6807</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor="#f44336" inactiveColor="#000">
        <Tabbar.Item icon={<HomeO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>\u989C\u8272</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>\u989C\u8272</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-tabbar {
  .rv-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
`}},key:"tabbar-custom",meta:{title:"\u81EA\u5B9A\u4E49"}},_=function({previewer:n=()=>null,api:u=()=>null}){const a=n;return e("div",{children:t("div",{children:[e("h1",{id:"tabbar-\u6807\u7B7E\u680F","data-anchor":"tabbar-\u6807\u7B7E\u680F",children:"Tabbar \u6807\u7B7E\u680F"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(a,{code:"import { Tabbar } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u70B9\u51FB ",e("code",{children:"Tabbar.Item"})," \u5373\u53EF\u5207\u6362\u9009\u4E2D\u7684\u6807\u7B7E(\u975E\u53D7\u63A7\u72B6\u6001)\u3002"]}),e(a,c(i({},f),{children:e(E,{})})),e("h3",{id:"\u53D7\u63A7\u7EC4\u4EF6","data-anchor":"\u53D7\u63A7\u7EC4\u4EF6",children:"\u53D7\u63A7\u7EC4\u4EF6"}),t("ul",{children:[t("li",{children:[e("code",{children:"value"})," \u9ED8\u8BA4\u7ED1\u5B9A\u9009\u4E2D\u6807\u7B7E\u7684\u7D22\u5F15\u503C\uFF0C\u901A\u8FC7\u4FEE\u6539 ",e("code",{children:"value"})," \u5373\u53EF\u5207\u6362\u9009\u4E2D\u7684\u6807\u7B7E\u3002"]}),t("li",{children:["\u5728\u6807\u7B7E\u6307\u5B9A ",e("code",{children:"name"})," \u5C5E\u6027\u7684\u60C5\u51B5\u4E0B\uFF0C",e("code",{children:"value"})," \u7684\u503C\u4E3A\u5F53\u524D\u6807\u7B7E\u7684 ",e("code",{children:"name"}),"\u3002"]})]}),e(a,c(i({},x),{children:e(v,{})})),e("h3",{id:"\u5FBD\u6807\u63D0\u793A","data-anchor":"\u5FBD\u6807\u63D0\u793A",children:"\u5FBD\u6807\u63D0\u793A"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"badge"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u6807\u76F8\u5E94\u7684\u5FBD\u6807\u5185\u5BB9\u3002"]}),e(a,c(i({},y),{children:e(F,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49","data-anchor":"\u81EA\u5B9A\u4E49",children:"\u81EA\u5B9A\u4E49"}),t("ul",{children:[t("li",{children:["\u901A\u8FC7 ",e("code",{children:"icon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\u3002"]}),t("li",{children:["\u901A\u8FC7 ",e("code",{children:"activeColor"})," \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\uFF0C\u901A\u8FC7 ",e("code",{children:"inactiveColor"})," \u5C5E\u6027\u8BBE\u7F6E\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272\u3002"]})]}),e(a,c(i({},P),{children:e(p,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"tabbar-props","data-anchor":"tabbar-props",children:"Tabbar Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u6807\u7B7E\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0"})})]}),t("tr",{children:[e("td",{children:"fixed"}),e("td",{children:"\u662F\u5426\u56FA\u5B9A\u5728\u5E95\u90E8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"zIndex"}),e("td",{children:"\u5143\u7D20 z-index"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),t("tr",{children:[e("td",{children:"activeColor"}),e("td",{children:"\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),t("tr",{children:[e("td",{children:"inactiveColor"}),e("td",{children:"\u672A\u9009\u4E2D\u6807\u7B7E\u7684\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#7d7e80"})})]}),t("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u56FA\u5B9A\u5728\u5E95\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),t("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"}),"\uFF0C\u8BBE\u7F6E fixed \u65F6\u9ED8\u8BA4\u5F00\u542F"]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"tabbar-events","data-anchor":"tabbar-events",children:"Tabbar Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:t("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5207\u6362\u6807\u7B7E\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"active: number | string"})})]})})]}),e("h3",{id:"tabbaritem-props","data-anchor":"tabbaritem-props",children:"TabbarItem Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u7B7E\u540D\u79F0\uFF0C\u4F5C\u4E3A\u5339\u914D\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"\u5F53\u524D\u6807\u7B7E\u7684\u7D22\u5F15\u503C"})]}),t("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode | (active: boolean) => React.ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"badge"}),e("td",{children:"\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"BadgeProps"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-tabbar-height"}),e("td",{children:e("em",{children:"50px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-active-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-active-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-line-height"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-tabbar-item-icon-margin-bottom"}),e("td",{children:e("em",{children:"var(--rv-padding-base)"})}),e("td",{children:"-"})]})]})]})]})})},M=[{Component:E,key:"tabbar-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:v,key:"tabbar-control",title:"\u53D7\u63A7\u7EC4\u4EF6"},{Component:F,key:"tabbar-badge",title:"\u5FBD\u6807\u63D0\u793A"},{Component:p,key:"tabbar-custom",title:"\u81EA\u5B9A\u4E49"}],R=void 0,H=[{depth:1,text:"Tabbar \u6807\u7B7E\u680F",id:"tabbar-\u6807\u7B7E\u680F"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u53D7\u63A7\u7EC4\u4EF6",id:"\u53D7\u63A7\u7EC4\u4EF6"},{depth:3,text:"\u5FBD\u6807\u63D0\u793A",id:"\u5FBD\u6807\u63D0\u793A"},{depth:3,text:"\u81EA\u5B9A\u4E49",id:"\u81EA\u5B9A\u4E49"},{depth:2,text:"API",id:"api"},{depth:3,text:"Tabbar Props",id:"tabbar-props"},{depth:3,text:"Tabbar Events",id:"tabbar-events"},{depth:3,text:"TabbarItem Props",id:"tabbaritem-props"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],z="/src/components/tabbar/README.md",k="Tabbar \u6807\u7B7E\u680F",w="1658500653000";var V=n=>n.children({MdContent:_,demos:M,frontmatter:R,slugs:H,filePath:z,title:k,updatedTime:w});export{_ as MdContent,V as default,M as demos,z as filePath,R as frontmatter,H as slugs,k as title,w as updatedTime};
