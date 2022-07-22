var A=Object.defineProperty,y=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var C=(c,n,t)=>n in c?A(c,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[n]=t,o=(c,n)=>{for(var t in n||(n={}))G.call(n,t)&&C(c,t,n[t]);if(a)for(var t of a(n))R.call(n,t)&&C(c,t,n[t]);return c},l=(c,n)=>y(c,_(n));import{R as N,a as u,j as e,r as h}from"./main.531c777e.js";import{dg as r,da as s,B as b,C as i,g as k}from"./WaterMark.6f52b203.js";var x=()=>{const[c,n]=N.useState(!1);return u("div",{className:"demo-checkbox",children:[e(r,{checked:c,onChange:n,children:"\u590D\u9009\u6846"}),e(r,{defaultChecked:!0,onChange:t=>console.log(t),children:"\u9ED8\u8BA4\u52FE\u9009"}),e("br",{}),e(r,{disabled:!0,children:"\u7981\u7528\u590D\u9009\u6846"}),e("br",{}),e(r,{defaultChecked:!0,labelDisabled:!0,children:"\u7981\u6B62\u6587\u672C\u70B9\u51FB"})]})};const P=`/* eslint-disable no-console */
import React from 'react';
import { Checkbox } from 'react-vant';
import './style.less';

export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="demo-checkbox">
      <Checkbox checked={checked} onChange={setChecked}>
        \u590D\u9009\u6846
      </Checkbox>
      <Checkbox defaultChecked onChange={(val) => console.log(val)}>
        \u9ED8\u8BA4\u52FE\u9009
      </Checkbox>
      <br />
      <Checkbox disabled>\u7981\u7528\u590D\u9009\u6846</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        \u7981\u6B62\u6587\u672C\u70B9\u51FB
      </Checkbox>
    </div>
  );
};
`,I={code:P,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React from 'react';
import { Checkbox } from 'react-vant';
import './style.less';

export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="demo-checkbox">
      <Checkbox checked={checked} onChange={setChecked}>
        \u590D\u9009\u6846
      </Checkbox>
      <Checkbox defaultChecked onChange={(val) => console.log(val)}>
        \u9ED8\u8BA4\u52FE\u9009
      </Checkbox>
      <br />
      <Checkbox disabled>\u7981\u7528\u590D\u9009\u6846</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        \u7981\u6B62\u6587\u672C\u70B9\u51FB
      </Checkbox>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-checkbox {
  background: #fff;

  .rv-checkbox {
    margin: 0 0 8px 20px;
  }

  .rv-cell {
    .rv-checkbox {
      margin: 0;
    }
  }

  &-buttons {
    margin-top: 16px;

    .rv-button {
      margin-left: 16px;
    }
  }

  .rv-doc-demo-block__title {
    margin-top: -8px;
  }
}
`}},key:"checkbox-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};const M="https://img.yzcdn.cn/vant/user-active.png",S="https://img.yzcdn.cn/vant/user-inactive.png";var p=()=>u("div",{className:"demo-checkbox",children:[e(r,{defaultChecked:!0,shape:"square",children:"\u81EA\u5B9A\u4E49\u5F62\u72B6"}),e("br",{}),e(r,{defaultChecked:!0,checkedColor:"#ee0a24",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),e("br",{}),e(r,{defaultChecked:!0,iconSize:"24px",children:"\u81EA\u5B9A\u4E49\u5927\u5C0F"}),e("br",{}),e(r,{defaultChecked:!0,iconRender:({checked:c})=>e("img",{alt:"",src:c?M:S}),children:"\u81EA\u5B9A\u4E49\u56FE\u6807"})]});const V=`import React from 'react';
import { Checkbox } from 'react-vant';
import './custom.less';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox defaultChecked shape="square">
        \u81EA\u5B9A\u4E49\u5F62\u72B6
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor="#ee0a24">
        \u81EA\u5B9A\u4E49\u989C\u8272
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize="24px">
        \u81EA\u5B9A\u4E49\u5927\u5C0F
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt="" src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        \u81EA\u5B9A\u4E49\u56FE\u6807
      </Checkbox>
    </div>
  );
};
`,z={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'react-vant';
import './custom.less';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox defaultChecked shape="square">
        \u81EA\u5B9A\u4E49\u5F62\u72B6
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor="#ee0a24">
        \u81EA\u5B9A\u4E49\u989C\u8272
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize="24px">
        \u81EA\u5B9A\u4E49\u5927\u5C0F
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt="" src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        \u81EA\u5B9A\u4E49\u56FE\u6807
      </Checkbox>
    </div>
  );
};
`},"custom.less":{type:"FILE",value:`.demo-checkbox {
  .rv-checkbox {
    margin: 0 0 8px 20px;
  }

  img {
    height: 20px;
  }
}
`}},key:"checkbox-custom",meta:{title:"\u81EA\u5B9A\u4E49"}};var E=()=>{const[c,n]=h.exports.useState(!1);return e("div",{className:"demo-checkbox",children:e(r,{checked:c,onChange:t=>{s.loading({forbidClick:!0,duration:0}),setTimeout(()=>{s.clear(),n(t)},500)},children:"\u590D\u9009\u6846"})})};const w=`import React, { useState } from 'react';
import { Checkbox, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <div className="demo-checkbox">
    <Checkbox
      checked={value}
      onChange={(val) => {
        Toast.loading({ forbidClick: true, duration: 0 });

        setTimeout(() => {
          Toast.clear();
          setValue(val);
        }, 500);
      }}
    >
      \u590D\u9009\u6846
    </Checkbox>
    </div>
  );
};
`,$={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Checkbox, Toast } from 'react-vant';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <div className="demo-checkbox">
    <Checkbox
      checked={value}
      onChange={(val) => {
        Toast.loading({ forbidClick: true, duration: 0 });

        setTimeout(() => {
          Toast.clear();
          setValue(val);
        }, 500);
      }}
    >
      \u590D\u9009\u6846
    </Checkbox>
    </div>
  );
};
`}},key:"checkbox-async",meta:{title:"\u5F02\u6B65\u66F4\u65B0"}};var m=()=>e("div",{className:"demo-checkbox",children:u(r.Group,{onChange:c=>console.log(c),defaultValue:["a","b"],children:[e(r,{name:"a",children:"\u590D\u9009\u6846\u7EC4a"}),e(r,{name:"b",children:"\u590D\u9009\u6846\u7EC4b"}),e(r,{name:"c",children:"\u590D\u9009\u6846\u7EC4c"})]})});const T=`/* eslint-disable no-console */
import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group onChange={(v) => console.log(v)} defaultValue={['a', 'b']}>
        <Checkbox name="a">\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`,L={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group onChange={(v) => console.log(v)} defaultValue={['a', 'b']}>
        <Checkbox name="a">\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`}},key:"checkbox-group",meta:{title:"\u590D\u9009\u6846\u7EC4"}};var v=()=>e("div",{className:"demo-checkbox",children:u(r.Group,{defaultValue:[],direction:"horizontal",children:[e(r,{name:"a",children:"\u590D\u9009\u6846a"}),e(r,{name:"b",children:"\u590D\u9009\u6846b"})]})});const O=`import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} direction="horizontal">
        <Checkbox name="a">\u590D\u9009\u6846a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846b</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`,j={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} direction="horizontal">
        <Checkbox name="a">\u590D\u9009\u6846a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846b</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`}},key:"checkbox-direction",meta:{title:"\u6C34\u5E73\u6392\u5217"}};var F=()=>e("div",{className:"demo-checkbox",children:u(r.Group,{defaultValue:[],max:2,children:[e(r,{name:"a",children:"\u590D\u9009\u6846a"}),e(r,{name:"b",children:"\u590D\u9009\u6846b"}),e(r,{name:"c",children:"\u590D\u9009\u6846c"})]})});const q=`import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} max={2}>
        <Checkbox name="a">\u590D\u9009\u6846a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846c</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`,H={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'react-vant';

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} max={2}>
        <Checkbox name="a">\u590D\u9009\u6846a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846c</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
`}},key:"checkbox-max",meta:{title:"\u6700\u5927\u53EF\u9009\u6570"}};var D=()=>{const c=h.exports.useRef(null),[n,t]=h.exports.useState(["a"]);return u("div",{className:"demo-checkbox",children:[u(r.Group,{ref:c,value:n,onChange:t,children:[e(r,{name:"a",children:"\u590D\u9009\u6846\u7EC4a"}),e(r,{name:"b",children:"\u590D\u9009\u6846\u7EC4b"}),e(r,{name:"c",children:"\u590D\u9009\u6846\u7EC4c"})]}),u("div",{className:"demo-checkbox-buttons",children:[e(b,{type:"primary",onClick:()=>{var d;return(d=c.current)==null?void 0:d.toggleAll(!0)},children:"\u5168\u9009"}),e(b,{type:"primary",onClick:()=>{var d;return(d=c.current)==null?void 0:d.toggleAll()},children:"\u53CD\u9009"})]})]})};const J=`import React, { useRef, useState } from 'react';
import { Checkbox, Button } from 'react-vant';
import { CheckboxGroupInstance } from '../PropsType';

export default () => {
  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(['a']);

  return (
    <div className="demo-checkbox">
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name="a">\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
      <div className="demo-checkbox-buttons">
        <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
          \u5168\u9009
        </Button>
        <Button type="primary" onClick={() => ref.current?.toggleAll()}>
          \u53CD\u9009
        </Button>
      </div>
    </div>
  );
};
`,K={code:J,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef, useState } from 'react';
import { Checkbox, Button } from 'react-vant';
import { CheckboxGroupInstance } from '../PropsType';

export default () => {
  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(['a']);

  return (
    <div className="demo-checkbox">
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name="a">\u590D\u9009\u6846\u7EC4a</Checkbox>
        <Checkbox name="b">\u590D\u9009\u6846\u7EC4b</Checkbox>
        <Checkbox name="c">\u590D\u9009\u6846\u7EC4c</Checkbox>
      </Checkbox.Group>
      <div className="demo-checkbox-buttons">
        <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
          \u5168\u9009
        </Button>
        <Button type="primary" onClick={() => ref.current?.toggleAll()}>
          \u53CD\u9009
        </Button>
      </div>
    </div>
  );
};
`}},key:"checkbox-ref",meta:{title:"\u5168\u9009\u4E0E\u53CD\u9009"}};var B=()=>{const[c,n]=h.exports.useState([]),t=d=>{const f=c.includes(d)?c.filter(g=>g!==d):[...c,d];n(f)};return e("div",{className:"demo-checkbox",children:e(r.Group,{value:c,onChange:n,children:u(i.Group,{children:[e(i,{clickable:!0,title:"\u5355\u9009\u68461",icon:e(k,{}),onClick:()=>t("a"),rightIcon:e(r,{name:"a"})}),e(i,{clickable:!0,title:"\u5355\u9009\u68462",icon:e(k,{}),onClick:()=>t("b"),rightIcon:e(r,{name:"b"})})]})})})};const Q=`import React, { useState } from 'react';
import { Checkbox, Cell } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  const [cellCheck, setCellCheck] = useState([]);

  const toggle = (name) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter((el) => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <div className="demo-checkbox">
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title="\u5355\u9009\u68461"
            icon={<ShopO />}
            onClick={() => toggle('a')}
            rightIcon={<Checkbox name="a" />}
          />
          <Cell
            clickable
            title="\u5355\u9009\u68462"
            icon={<ShopO />}
            onClick={() => toggle('b')}
            rightIcon={<Checkbox name="b" />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  );
};
`,U={code:Q,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Checkbox, Cell } from 'react-vant';
import { ShopO } from '@react-vant/icons';

export default () => {
  const [cellCheck, setCellCheck] = useState([]);

  const toggle = (name) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter((el) => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <div className="demo-checkbox">
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title="\u5355\u9009\u68461"
            icon={<ShopO />}
            onClick={() => toggle('a')}
            rightIcon={<Checkbox name="a" />}
          />
          <Cell
            clickable
            title="\u5355\u9009\u68462"
            icon={<ShopO />}
            onClick={() => toggle('b')}
            rightIcon={<Checkbox name="b" />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  );
};
`}},key:"checkbox-cell",meta:{title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}},W=function({previewer:c=()=>null,api:n=()=>null}){const t=c;return e("div",{children:u("div",{children:[e("h1",{id:"checkbox-\u590D\u9009\u6846","data-anchor":"checkbox-\u590D\u9009\u6846",children:"Checkbox \u590D\u9009\u6846"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5728\u9009\u4E2D\u548C\u975E\u9009\u4E2D\u72B6\u6001\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(t,{code:"import { Checkbox } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("ul",{children:[u("li",{children:["\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u503C\u9ED8\u8BA4\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002"]}),u("li",{children:["\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"disabled"})," \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u590D\u9009\u6846\u3002"]}),u("li",{children:["\u8BBE\u7F6E ",e("code",{children:"labelDisabled"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u590D\u9009\u6846\u5207\u6362\u3002"]})]}),e(t,l(o({},I),{children:e(x,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49","data-anchor":"\u81EA\u5B9A\u4E49",children:"\u81EA\u5B9A\u4E49"}),u("ul",{children:[u("li",{children:["\u5C06 ",e("code",{children:"shape"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"square"}),"\uFF0C\u590D\u9009\u6846\u7684\u5F62\u72B6\u4F1A\u53D8\u6210\u65B9\u5F62\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"checkedColor"})," \u5C5E\u6027\u8BBE\u7F6E\u9009\u4E2D\u72B6\u6001\u7684\u56FE\u6807\u989C\u8272\u3002"]}),u("li",{children:["\u901A\u8FC7 ",e("code",{children:"iconSize"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u5927\u5C0F\u3002"]})]}),e(t,l(o({},z),{children:e(p,{})})),e("h3",{id:"\u5F02\u6B65\u66F4\u65B0","data-anchor":"\u5F02\u6B65\u66F4\u65B0",children:"\u5F02\u6B65\u66F4\u65B0"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"checked"})," \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u72B6\u6001\u4E0D\u4F1A\u6539\u53D8\uFF0C\u800C\u662F\u76F4\u63A5\u6267\u884C ",e("code",{children:"onChange"})," \u65B9\u6CD5\uFF0C\u5728\u6B64\u65B9\u6CD5\u4E2D\u66F4\u6362\u72B6\u6001"]}),e(t,l(o({},$),{children:e(E,{})})),e("h3",{id:"\u590D\u9009\u6846\u7EC4","data-anchor":"\u590D\u9009\u6846\u7EC4",children:"\u590D\u9009\u6846\u7EC4"}),u("p",{children:["\u590D\u9009\u6846\u53EF\u4EE5\u4E0E\u590D\u9009\u6846\u7EC4\u4E00\u8D77\u4F7F\u7528\uFF0C\u590D\u9009\u6846\u7EC4\u901A\u8FC7 ",e("code",{children:"defaultChecked"})," \u6570\u7EC4\u9ED8\u8BA4\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002"]}),e(t,l(o({},L),{children:e(m,{})})),e("h3",{id:"\u6C34\u5E73\u6392\u5217","data-anchor":"\u6C34\u5E73\u6392\u5217",children:"\u6C34\u5E73\u6392\u5217"}),u("p",{children:["\u5C06 ",e("code",{children:"direction"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",e("code",{children:"horizontal"})," \u540E\uFF0C\u590D\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002"]}),e(t,l(o({},j),{children:e(v,{})})),e("h3",{id:"\u6700\u5927\u53EF\u9009\u6570","data-anchor":"\u6700\u5927\u53EF\u9009\u6570",children:"\u6700\u5927\u53EF\u9009\u6570"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"max"})," \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u590D\u9009\u6846\u7EC4\u7684\u6700\u5927\u53EF\u9009\u6570\u3002"]}),e(t,l(o({},H),{children:e(F,{})})),e("h3",{id:"\u5168\u9009\u4E0E\u53CD\u9009","data-anchor":"\u5168\u9009\u4E0E\u53CD\u9009",children:"\u5168\u9009\u4E0E\u53CD\u9009"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"CheckboxGroup"})," \u5B9E\u4F8B\u4E0A\u7684",e("code",{children:"toggleAll"}),"\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5168\u9009\u4E0E\u53CD\u9009\u3002"]}),e(t,l(o({},K),{children:e(D,{})})),e("h3",{id:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528","data-anchor":"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",children:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}),u("p",{children:["\u6B64\u65F6\u4F60\u9700\u8981\u518D\u5F15\u5165 ",e("code",{children:"Cell"})," \u548C ",e("code",{children:"Cell.Group"})," \u7EC4\u4EF6\u3002"]}),e(t,l(o({},U),{children:e(B,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"checkbox-props","data-anchor":"checkbox-props",children:"Checkbox Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"checked"}),e("td",{children:"\u662F\u5426\u4E3A\u9009\u4E2D\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"shape"}),u("td",{children:["\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"square"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"round"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u590D\u9009\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"labelDisabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u590D\u9009\u6846\u6587\u672C\u70B9\u51FB"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"labelPosition"}),u("td",{children:["\u6587\u672C\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"right"})})]}),u("tr",{children:[e("td",{children:"iconSize"}),u("td",{children:["\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"20px"})})]}),u("tr",{children:[e("td",{children:"iconRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u56FE\u6807"}),e("td",{children:u("em",{children:["(","{"," checked, disabled ","}",") => ReactNode"]})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]}),u("tr",{children:[e("td",{children:"bindGroup"}),e("td",{children:"\u662F\u5426\u4E0E\u590D\u9009\u6846\u7EC4\u7ED1\u5B9A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]})]})]}),e("h3",{id:"checkboxgroup-props","data-anchor":"checkboxgroup-props",children:"CheckboxGroup Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u6240\u6709\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultChecked"}),e("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26"}),e("td",{children:e("em",{children:"any[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6240\u6709\u590D\u9009\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u6700\u5927\u53EF\u9009\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"direction"}),u("td",{children:["\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"horizontal"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"vertical"})})]}),u("tr",{children:[e("td",{children:"iconSize"}),u("td",{children:["\u6240\u6709\u590D\u9009\u6846\u7684\u56FE\u6807\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"20px"})})]}),u("tr",{children:[e("td",{children:"checkedColor"}),e("td",{children:"\u6240\u6709\u590D\u9009\u6846\u7684\u9009\u4E2D\u72B6\u6001\u989C\u8272"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"#3f45ff"})})]})]})]}),e("h3",{id:"checkbox-events","data-anchor":"checkbox-events",children:"Checkbox Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"checked: boolean"})})]}),u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u590D\u9009\u6846\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"checkboxgroup-events","data-anchor":"checkboxgroup-events",children:"CheckboxGroup Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:e("em",{children:"names: any[]"})})]})})]}),e("h3",{id:"checkboxgroup-\u65B9\u6CD5","data-anchor":"checkboxgroup-\u65B9\u6CD5",children:"CheckboxGroup \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 CheckboxGroup \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"toggleAll"}),u("td",{children:["\u5207\u6362\u6240\u6709\u590D\u9009\u6846\uFF0C\u4F20 ",e("code",{children:"true"})," \u4E3A\u9009\u4E2D\uFF0C",e("code",{children:"false"})," \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD"]}),e("td",{children:e("em",{children:"options?: boolean | object"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"checkbox-\u65B9\u6CD5","data-anchor":"checkbox-\u65B9\u6CD5",children:"Checkbox \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Checkbox \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:u("tr",{children:[e("td",{children:"toggle"}),u("td",{children:["\u5207\u6362\u9009\u4E2D\u72B6\u6001\uFF0C\u4F20 ",e("code",{children:"true"})," \u4E3A\u9009\u4E2D\uFF0C",e("code",{children:"false"})," \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD"]}),e("td",{children:e("em",{children:"checked?: boolean"})}),e("td",{children:"-"})]})})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"CheckboxInstance"})," \u548C ",e("code",{children:"CheckboxGroupInstance"})," \u83B7\u53D6 Checkbox \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\uFF08\u4ECE 3.2.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09\u3002"]}),e(t,{code:`import { useRef } from 'react';
import type { CheckboxInstance, CheckboxGroupInstance } from 'react-vant';

const checkboxRef = useRef<CheckboxInstance>();
const checkboxGroupRef = useRef<CheckboxGroupInstance>();

checkboxRef.current?.toggle();
checkboxGroupRef.current?.toggleAll();`,lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-checkbox-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-border-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-transition-duration"}),e("td",{children:e("em",{children:"var(--rv-animation-duration-fast)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-label-margin"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-label-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-checked-icon-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-disabled-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-disabled-label-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-checkbox-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]})]})]})]})})},X=[{Component:x,key:"checkbox-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:p,key:"checkbox-custom",title:"\u81EA\u5B9A\u4E49"},{Component:E,key:"checkbox-async",title:"\u5F02\u6B65\u66F4\u65B0"},{Component:m,key:"checkbox-group",title:"\u590D\u9009\u6846\u7EC4"},{Component:v,key:"checkbox-direction",title:"\u6C34\u5E73\u6392\u5217"},{Component:F,key:"checkbox-max",title:"\u6700\u5927\u53EF\u9009\u6570"},{Component:D,key:"checkbox-ref",title:"\u5168\u9009\u4E0E\u53CD\u9009"},{Component:B,key:"checkbox-cell",title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"}],Y={simulator:{style:{background:"#fff"}}},Z=[{depth:1,text:"Checkbox \u590D\u9009\u6846",id:"checkbox-\u590D\u9009\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49",id:"\u81EA\u5B9A\u4E49"},{depth:3,text:"\u5F02\u6B65\u66F4\u65B0",id:"\u5F02\u6B65\u66F4\u65B0"},{depth:3,text:"\u590D\u9009\u6846\u7EC4",id:"\u590D\u9009\u6846\u7EC4"},{depth:3,text:"\u6C34\u5E73\u6392\u5217",id:"\u6C34\u5E73\u6392\u5217"},{depth:3,text:"\u6700\u5927\u53EF\u9009\u6570",id:"\u6700\u5927\u53EF\u9009\u6570"},{depth:3,text:"\u5168\u9009\u4E0E\u53CD\u9009",id:"\u5168\u9009\u4E0E\u53CD\u9009"},{depth:3,text:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",id:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Checkbox Props",id:"checkbox-props"},{depth:3,text:"CheckboxGroup Props",id:"checkboxgroup-props"},{depth:3,text:"Checkbox Events",id:"checkbox-events"},{depth:3,text:"CheckboxGroup Events",id:"checkboxgroup-events"},{depth:3,text:"CheckboxGroup \u65B9\u6CD5",id:"checkboxgroup-\u65B9\u6CD5"},{depth:3,text:"Checkbox \u65B9\u6CD5",id:"checkbox-\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],ee="/src/components/checkbox/README.md",ue="Checkbox \u590D\u9009\u6846",ce="1658500653000";var de=c=>c.children({MdContent:W,demos:X,frontmatter:Y,slugs:Z,filePath:ee,title:ue,updatedTime:ce});export{W as MdContent,de as default,X as demos,ee as filePath,Y as frontmatter,Z as slugs,ue as title,ce as updatedTime};
