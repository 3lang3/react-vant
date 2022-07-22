var D=Object.defineProperty,m=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var a=(r,t,d)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[t]=d,c=(r,t)=>{for(var d in t||(t={}))b.call(t,d)&&a(r,d,t[d]);if(h)for(var d of h(t))p.call(t,d)&&a(r,d,t[d]);return r},o=(r,t)=>m(r,A(t));import{a as e,F,j as u}from"./main.531c777e.js";import{C as i,dH as n,da as E,j as y}from"./WaterMark.6f52b203.js";import{h as s}from"./index.2a5125f1.js";var v=()=>{const[r,t]=s.useSetState({v1:!1,v2:!1,v3:!1,v4:!1,v5:!1,v6:!1}),d=C=>E.info(`\u8F93\u5165${C}`),l=()=>E.info("\u5220\u9664");return e(F,{children:[u(i,{title:"\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8",isLink:!0,onClick:()=>t({v1:!0})}),u(i,{title:"\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8",isLink:!0,onClick:()=>t({v2:!0})}),u(i,{title:"\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8",isLink:!0,onClick:()=>t({v3:!0})}),u(i,{title:"\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8",isLink:!0,onClick:()=>t({v4:!0})}),u(i,{title:"\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8",isLink:!0,onClick:()=>t({v5:!0})}),u(i,{title:"\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8",isLink:!0,onClick:()=>t({v6:!0})}),u(n,{visible:r.v1,onBlur:()=>{t({v1:!1})},onInput:d,onDelete:l}),u(n,{theme:"custom",extraKey:".",closeButtonText:"\u5B8C\u6210",visible:r.v2,onBlur:()=>{t({v2:!1})},onInput:d,onDelete:l}),u(n,{extraKey:"X",closeButtonText:"\u5B8C\u6210",visible:r.v3,onBlur:()=>{t({v3:!1})},onInput:d,onDelete:l}),u(n,{title:"\u952E\u76D8\u6807\u9898",extraKey:".",closeButtonText:"\u5B8C\u6210",visible:r.v4,onBlur:()=>{t({v4:!1})},onInput:d,onDelete:l}),u(n,{theme:"custom",extraKey:["00","."],closeButtonText:"\u5B8C\u6210",visible:r.v5,onBlur:()=>{t({v5:!1})},onInput:d,onDelete:l}),u(n,{randomKeyOrder:!0,visible:r.v6,onBlur:()=>{t({v6:!1})},onInput:d,onDelete:l})]})};const f=`import React from 'react';
import { NumberKeyboard, Cell, hooks, Toast } from 'react-vant';

export default () => {
  const [state, set] = hooks.useSetState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
  });

  const onInput = (v) => Toast.info(\`\u8F93\u5165\${v}\`);
  const onDelete = () => Toast.info('\u5220\u9664');
  return (
    <>
      <Cell title="\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8" isLink onClick={() => set({ v1: true })} />
      <Cell title="\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8" isLink onClick={() => set({ v2: true })} />
      <Cell title="\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8" isLink onClick={() => set({ v3: true })} />
      <Cell title="\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8" isLink onClick={() => set({ v4: true })} />
      <Cell title="\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8" isLink onClick={() => set({ v5: true })} />
      <Cell title="\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8" isLink onClick={() => set({ v6: true })} />
      {/* \u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8 */}
      <NumberKeyboard
        visible={state.v1}
        onBlur={() => {
          set({ v1: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8 */}
      <NumberKeyboard
        theme="custom"
        extraKey="."
        closeButtonText="\u5B8C\u6210"
        visible={state.v2}
        onBlur={() => {
          set({ v2: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8 */}
      <NumberKeyboard
        extraKey="X"
        closeButtonText="\u5B8C\u6210"
        visible={state.v3}
        onBlur={() => {
          set({ v3: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8 */}
      <NumberKeyboard
        title="\u952E\u76D8\u6807\u9898"
        extraKey="."
        closeButtonText="\u5B8C\u6210"
        visible={state.v4}
        onBlur={() => {
          set({ v4: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8 */}
      <NumberKeyboard
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="\u5B8C\u6210"
        visible={state.v5}
        onBlur={() => {
          set({ v5: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8 */}
      <NumberKeyboard
        randomKeyOrder
        visible={state.v6}
        onBlur={() => {
          set({ v6: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
    </>
  );
};
`,k={code:f,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { NumberKeyboard, Cell, hooks, Toast } from 'react-vant';

export default () => {
  const [state, set] = hooks.useSetState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
  });

  const onInput = (v) => Toast.info(\`\u8F93\u5165\${v}\`);
  const onDelete = () => Toast.info('\u5220\u9664');
  return (
    <>
      <Cell title="\u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8" isLink onClick={() => set({ v1: true })} />
      <Cell title="\u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8" isLink onClick={() => set({ v2: true })} />
      <Cell title="\u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8" isLink onClick={() => set({ v3: true })} />
      <Cell title="\u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8" isLink onClick={() => set({ v4: true })} />
      <Cell title="\u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8" isLink onClick={() => set({ v5: true })} />
      <Cell title="\u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8" isLink onClick={() => set({ v6: true })} />
      {/* \u5F39\u51FA\u9ED8\u8BA4\u952E\u76D8 */}
      <NumberKeyboard
        visible={state.v1}
        onBlur={() => {
          set({ v1: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u5E26\u53F3\u4FA7\u680F\u7684\u952E\u76D8 */}
      <NumberKeyboard
        theme="custom"
        extraKey="."
        closeButtonText="\u5B8C\u6210"
        visible={state.v2}
        onBlur={() => {
          set({ v2: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u8EAB\u4EFD\u8BC1\u53F7\u952E\u76D8 */}
      <NumberKeyboard
        extraKey="X"
        closeButtonText="\u5B8C\u6210"
        visible={state.v3}
        onBlur={() => {
          set({ v3: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u5E26\u6807\u9898\u7684\u952E\u76D8 */}
      <NumberKeyboard
        title="\u952E\u76D8\u6807\u9898"
        extraKey="."
        closeButtonText="\u5B8C\u6210"
        visible={state.v4}
        onBlur={() => {
          set({ v4: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u914D\u7F6E\u591A\u4E2A\u6309\u952E\u7684\u952E\u76D8 */}
      <NumberKeyboard
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="\u5B8C\u6210"
        visible={state.v5}
        onBlur={() => {
          set({ v5: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
      {/* \u5F39\u51FA\u914D\u7F6E\u968F\u673A\u6570\u5B57\u7684\u952E\u76D8 */}
      <NumberKeyboard
        randomKeyOrder
        visible={state.v6}
        onBlur={() => {
          set({ v6: false });
        }}
        onInput={onInput}
        onDelete={onDelete}
      />
    </>
  );
};
`}},key:"number-keyboard-base",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var B=()=>{const[r,t]=s.useSetState({visible:!1,value:""});return e(F,{children:[u(y,{label:"\u53CC\u5411\u7ED1\u5B9A",value:r.value,readOnly:!0,onClick:()=>t({visible:!0})}),u(n,{value:r.value,visible:r.visible,maxlength:6,onChange:d=>{t({value:d})},onBlur:()=>{t({visible:!1})}})]})};const x=`import React from 'react';
import { Field, NumberKeyboard, hooks } from 'react-vant';

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    value: '',
  });
  return (
    <>
      <Field label="\u53CC\u5411\u7ED1\u5B9A" value={state.value} readOnly onClick={() => set({ visible: true })} />
      <NumberKeyboard
        value={state.value}
        visible={state.visible}
        maxlength={6}
        onChange={(v) => {
          set({ value: v });
        }}
        onBlur={() => {
          set({ visible: false });
        }}
      />
    </>
  );
};
`,K={code:x,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Field, NumberKeyboard, hooks } from 'react-vant';

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    value: '',
  });
  return (
    <>
      <Field label="\u53CC\u5411\u7ED1\u5B9A" value={state.value} readOnly onClick={() => set({ visible: true })} />
      <NumberKeyboard
        value={state.value}
        visible={state.visible}
        maxlength={6}
        onChange={(v) => {
          set({ value: v });
        }}
        onBlur={() => {
          set({ visible: false });
        }}
      />
    </>
  );
};
`}},key:"number-keyboard-control",meta:{title:"\u53CC\u5411\u7ED1\u5B9A",card:!0}},g=function({previewer:r=()=>null,api:t=()=>null}){const d=r;return u("div",{children:e("div",{children:[u("h1",{id:"numberkeyboard-\u6570\u5B57\u952E\u76D8","data-anchor":"numberkeyboard-\u6570\u5B57\u952E\u76D8",children:"NumberKeyboard \u6570\u5B57\u952E\u76D8"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:["\u865A\u62DF\u6570\u5B57\u952E\u76D8\uFF0C\u53EF\u4EE5\u914D\u5408",u("a",{href:"/components/password-input",children:"\u5BC6\u7801\u8F93\u5165\u6846\u7EC4\u4EF6"}),"\u6216\u81EA\u5B9A\u4E49\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\u4F7F\u7528\u3002"]}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(d,{code:"import { NumberKeyboard } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("ul",{children:[e("li",{children:["\u6570\u5B57\u952E\u76D8\u63D0\u4F9B\u4E86 ",u("code",{children:"onInput"}),"\u3001",u("code",{children:"onDelete"}),"\u3001",u("code",{children:"onBlur"})," \u4E8B\u4EF6\uFF0C\u5206\u522B\u5BF9\u5E94\u8F93\u5165\u5185\u5BB9\u3001\u5220\u9664\u5185\u5BB9\u548C\u5931\u53BB\u7126\u70B9\u7684\u52A8\u4F5C\u3002"]}),e("li",{children:["\u5C06 theme \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",u("code",{children:"custom"})," \u6765\u5C55\u793A\u952E\u76D8\u7684\u53F3\u4FA7\u680F\uFF0C\u5E38\u7528\u4E8E\u8F93\u5165\u91D1\u989D\u7684\u573A\u666F\u3002"]}),e("li",{children:["\u901A\u8FC7 ",u("code",{children:"extraKey"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u5DE6\u4E0B\u89D2\u6309\u952E\u5185\u5BB9\uFF0C\u6BD4\u5982\u9700\u8981\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7\u65F6\uFF0C\u53EF\u4EE5\u5C06 ",u("code",{children:"extraKey"})," \u8BBE\u7F6E\u4E3A ",u("code",{children:"X"}),"\u3002"]}),e("li",{children:["\u901A\u8FC7 ",u("code",{children:"title"})," \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u952E\u76D8\u6807\u9898\u3002"]}),e("li",{children:["\u5F53 theme \u4E3A ",u("code",{children:"custom"})," \u65F6\uFF0C\u652F\u6301\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u4E24\u4E2A ",u("code",{children:"extraKey"}),"\u3002"]}),e("li",{children:["\u901A\u8FC7 ",u("code",{children:"randomKeyOrder"})," \u5C5E\u6027\u53EF\u4EE5\u968F\u673A\u6392\u5E8F\u6570\u5B57\u952E\u76D8\uFF0C\u5E38\u7528\u4E8E\u5B89\u5168\u7B49\u7EA7\u8F83\u9AD8\u7684\u573A\u666F\u3002"]})]}),u(d,o(c({},k),{children:u(v,{})})),u("blockquote",{children:u("p",{children:"\u70B9\u51FB\u952E\u76D8\u4EE5\u5916\u7684\u533A\u57DF\u65F6\uFF0C\u952E\u76D8\u4F1A\u81EA\u52A8\u6536\u8D77\uFF0C\u901A\u8FC7\u963B\u6B62\u5143\u7D20\u4E0A\u7684 touchstart \u4E8B\u4EF6\u5192\u6CE1\u53EF\u4EE5\u907F\u514D\u952E\u76D8\u6536\u8D77\u3002"})}),u("h3",{id:"\u53CC\u5411\u7ED1\u5B9A","data-anchor":"\u53CC\u5411\u7ED1\u5B9A",children:"\u53CC\u5411\u7ED1\u5B9A"}),e("p",{children:["\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"value"})," \u7ED1\u5B9A\u952E\u76D8\u5F53\u524D\u8F93\u5165\u503C\uFF0C\u5E76\u901A\u8FC7 ",u("code",{children:"maxlength"})," \u5C5E\u6027\u6765\u9650\u5236\u8F93\u5165\u957F\u5EA6\u3002"]}),u(d,o(c({},K),{children:u(B,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"value"}),u("td",{children:"\u5F53\u524D\u8F93\u5165\u503C"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"show"}),u("td",{children:"\u662F\u5426\u663E\u793A\u952E\u76D8"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u952E\u76D8\u6807\u9898"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"delete"}),u("td",{children:"\u952E\u76D8\u6807\u9898"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"numberKeyRender"}),u("td",{children:"\u81EA\u5B9A\u4E49\u6570\u5B57\u6309\u952E\u5185\u5BB9"}),u("td",{children:u("em",{children:"(item: KeyConfig) => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"deleteRender"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5220\u9664\u6309\u952E\u5185\u5BB9"}),u("td",{children:u("em",{children:"() => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"extraKeyRender"}),u("td",{children:"\u81EA\u5B9A\u4E49\u5DE6\u4E0B\u89D2\u6309\u952E\u5185\u5BB9"}),u("td",{children:u("em",{children:"() => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"theme"}),e("td",{children:["\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"custom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"default"})})]}),e("tr",{children:[u("td",{children:"maxlength"}),u("td",{children:"\u8F93\u5165\u503C\u6700\u5927\u957F\u5EA6"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"transition"}),u("td",{children:"\u662F\u5426\u5F00\u542F\u8FC7\u573A\u52A8\u753B"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"zIndex"}),u("td",{children:"\u952E\u76D8 z-index \u5C42\u7EA7"}),u("td",{children:u("em",{children:"number"})}),u("td",{children:u("code",{children:"100"})})]}),e("tr",{children:[u("td",{children:"extraKey"}),u("td",{children:"\u5E95\u90E8\u989D\u5916\u6309\u952E\u7684\u5185\u5BB9"}),u("td",{children:u("em",{children:"string | string[]"})}),u("td",{children:u("code",{children:"''"})})]}),e("tr",{children:[u("td",{children:"closeButtonText"}),u("td",{children:"\u5173\u95ED\u6309\u94AE\u6587\u5B57\uFF0C\u7A7A\u5219\u4E0D\u5C55\u793A"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"deleteButtonText"}),u("td",{children:"\u5220\u9664\u6309\u94AE\u6587\u5B57\uFF0C\u7A7A\u5219\u5C55\u793A\u5220\u9664\u56FE\u6807"}),u("td",{children:u("em",{children:"string"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"closeButtonLoading"}),e("td",{children:["\u662F\u5426\u5C06\u5173\u95ED\u6309\u94AE\u8BBE\u7F6E\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001\uFF0C\u4EC5\u5728 ",u("code",{children:'theme="custom"'})," \u65F6\u6709\u6548"]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showDeleteKey"}),u("td",{children:"\u662F\u5426\u5C55\u793A\u5220\u9664\u56FE\u6807"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"blurOnClose"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1 blur \u4E8B\u4EF6"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"hideOnClickOutside"}),u("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8\u65F6\u6536\u8D77\u952E\u76D8"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"safeAreaInsetBottom"}),e("td",{children:["\u662F\u5426\u5F00\u542F",u("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"randomKeyOrder"}),u("td",{children:"\u662F\u5426\u5C06\u901A\u8FC7\u968F\u673A\u987A\u5E8F\u5C55\u793A\u6309\u952E"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onInput"}),u("td",{children:"\u70B9\u51FB\u6309\u952E\u65F6\u89E6\u53D1"}),u("td",{children:"key: \u6309\u952E\u5185\u5BB9"})]}),e("tr",{children:[u("td",{children:"onDelete"}),u("td",{children:"\u70B9\u51FB\u5220\u9664\u952E\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onClose"}),u("td",{children:"\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onBlur"}),u("td",{children:"\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u975E\u952E\u76D8\u533A\u57DF\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onShow"}),u("td",{children:"\u952E\u76D8\u5B8C\u5168\u5F39\u51FA\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"onHide"}),u("td",{children:"\u952E\u76D8\u5B8C\u5168\u6536\u8D77\u65F6\u89E6\u53D1"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),u("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),u(d,{code:"import type { NumberKeyboardTheme } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-number-keyboard-background-color"}),u("td",{children:u("em",{children:"var(--rv-gray-2)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-key-height"}),u("td",{children:u("em",{children:"48px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-key-font-size"}),u("td",{children:u("em",{children:"28px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-key-active-color"}),u("td",{children:u("em",{children:"var(--rv-gray-3)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-key-background-color"}),u("td",{children:u("em",{children:"van(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-delete-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-title-color"}),u("td",{children:u("em",{children:"var(--rv-gray-7)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-title-height"}),u("td",{children:u("em",{children:"34px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-title-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-close-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-close-color"}),u("td",{children:u("em",{children:"var(--rv-text-link-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-close-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-button-text-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-button-background-color"}),u("td",{children:u("em",{children:"var(--rv-primary-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-number-keyboard-z-index"}),u("td",{children:u("em",{children:"100"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6","data-anchor":"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6",children:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F"}),e("p",{children:["\u53C2\u89C1",u("a",{href:"/guide/advanced-usage",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},I=[{Component:v,key:"number-keyboard-base",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:B,key:"number-keyboard-control",title:"\u53CC\u5411\u7ED1\u5B9A",card:!0}],N=void 0,T=[{depth:1,text:"NumberKeyboard \u6570\u5B57\u952E\u76D8",id:"numberkeyboard-\u6570\u5B57\u952E\u76D8"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u53CC\u5411\u7ED1\u5B9A",id:"\u53CC\u5411\u7ED1\u5B9A"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6"}],L="/src/components/number-keyboard/README.md",R="NumberKeyboard \u6570\u5B57\u952E\u76D8",P="1658500653000";var z=r=>r.children({MdContent:g,demos:I,frontmatter:N,slugs:T,filePath:L,title:R,updatedTime:P});export{g as MdContent,z as default,I as demos,L as filePath,N as frontmatter,T as slugs,R as title,P as updatedTime};
