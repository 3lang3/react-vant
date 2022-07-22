var b=Object.defineProperty,y=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var E=(u,n,r)=>n in u?b(u,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[n]=r,c=(u,n)=>{for(var r in n||(n={}))k.call(n,r)&&E(u,r,n[r]);if(s)for(var r of s(n))S.call(n,r)&&E(u,r,n[r]);return u},d=(u,n)=>y(u,g(n));import{a as t,j as e,r as h,F as C}from"./main.531c777e.js";import{S as B,e2 as o,B as i,da as p,C as M,dd as R,dm as O,m as w,bD as T,bB as N,d9 as m,bZ as I}from"./WaterMark.6f52b203.js";const F=[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}];var f=()=>{const u=n=>p.info(n.text);return t(B,{children:[e(o,{placement:"bottom-start",actions:F,onSelect:u,reference:e(i,{type:"primary",children:"\u6D45\u8272\u98CE\u683C"})}),e(o,{actions:F,theme:"dark",onSelect:u,reference:e(i,{type:"primary",children:"\u6DF1\u8272\u98CE\u683C"})})]})};const _={code:`import React from 'react';
import { Popover, Space, Toast, Button } from 'react-vant';

const actions = [{ text: '\u9009\u9879\u4E00' }, { text: '\u9009\u9879\u4E8C' }, { text: '\u9009\u9879\u4E09' }];

export default () => {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={actions}
        onSelect={select}
        reference={<Button type="primary">\u6D45\u8272\u98CE\u683C</Button>}
      />
      <Popover
        actions={actions}
        theme="dark"
        onSelect={select}
        reference={<Button type="primary">\u6DF1\u8272\u98CE\u683C</Button>}
      />
    </Space>
  );
};`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Popover, Space, Toast, Button } from 'react-vant';

const actions = [{ text: '\u9009\u9879\u4E00' }, { text: '\u9009\u9879\u4E8C' }, { text: '\u9009\u9879\u4E09' }];

export default () => {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={actions}
        onSelect={select}
        reference={<Button type="primary">\u6D45\u8272\u98CE\u683C</Button>}
      />
      <Popover
        actions={actions}
        theme="dark"
        onSelect={select}
        reference={<Button type="primary">\u6DF1\u8272\u98CE\u683C</Button>}
      />
    </Space>
  );
};`}},key:"popover-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},j=[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],v=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"];var A=()=>{const u=h.exports.useRef(null),[n,r]=h.exports.useState(!1),[l,P]=h.exports.useState(v[0]);return t(C,{children:[e(M,{title:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E",onClick:()=>r(!0),isLink:!0}),t(R,{round:!0,position:"bottom",visible:n,onClose:()=>r(!1),children:[e("div",{style:{display:"flex",justifyContent:"center",margin:"110px 0"},children:e(o,{ref:u,theme:"dark",actions:j,onSelect:a=>p.info(a.text),placement:l,reference:e("div",{style:{width:60,height:60,backgroundColor:"#3f45ff",borderRadius:8}})})}),e(O,{showToolbar:!1,columns:v,onChange:a=>{P(a),setTimeout(()=>u.current.show(),0)}})]})]})};const G={code:`import React, { useRef, useState } from 'react';
import { Toast, Popover, Popup, Picker, Cell } from 'react-vant';
import type { PopoverInstance, PopoverPlacement } from 'react-vant';

const popupActions = [{ text: '\u9009\u9879\u4E00' }, { text: '\u9009\u9879\u4E8C' }];

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default () => {
  const popover = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <>
      <Cell title="\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E" onClick={() => setVisible(true)} isLink />
      <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '110px 0' }}>
          <Popover
            ref={popover}
            theme="dark"
            actions={popupActions}
            onSelect={select}
            placement={placement}
            reference={
              <div style={{ width: 60, height: 60, backgroundColor: '#3f45ff', borderRadius: 8 }} />
            }
          />
        </div>
        <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
      </Popup>
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef, useState } from 'react';
import { Toast, Popover, Popup, Picker, Cell } from 'react-vant';
import type { PopoverInstance, PopoverPlacement } from 'react-vant';

const popupActions = [{ text: '\u9009\u9879\u4E00' }, { text: '\u9009\u9879\u4E8C' }];

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default () => {
  const popover = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <>
      <Cell title="\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E" onClick={() => setVisible(true)} isLink />
      <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '110px 0' }}>
          <Popover
            ref={popover}
            theme="dark"
            actions={popupActions}
            onSelect={select}
            placement={placement}
            reference={
              <div style={{ width: 60, height: 60, backgroundColor: '#3f45ff', borderRadius: 8 }} />
            }
          />
        </div>
        <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
      </Popup>
    </>
  );
};`}},key:"popover-demo-1",meta:{title:"\u5F39\u51FA\u4F4D\u7F6E",compact:!0}},L=[{text:"\u9009\u9879\u4E00",icon:e(w,{})},{text:"\u9009\u9879\u4E8C",icon:e(T,{})},{text:"\u9009\u9879\u4E09",icon:e(N,{})}],V=[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}];var D=()=>{const u=n=>p.info(n.text);return t(B,{children:[e(o,{placement:"bottom-start",actions:L,onSelect:u,reference:e(i,{type:"primary",children:"\u5C55\u793A\u56FE\u6807"})}),e(o,{actions:V,onSelect:u,reference:e(i,{type:"primary",children:"\u7981\u7528\u9009\u9879"})})]})};const z=`import React from 'react';
import { AddO, MoreO, MusicO } from '@react-vant/icons';
import { Space, Toast, Button, Popover } from 'react-vant';

const iconActions = [
  { text: '\u9009\u9879\u4E00', icon: <AddO /> },
  { text: '\u9009\u9879\u4E8C', icon: <MusicO /> },
  { text: '\u9009\u9879\u4E09', icon: <MoreO /> },
];

const disabledActions = [
  { text: '\u9009\u9879\u4E00', disabled: true },
  { text: '\u9009\u9879\u4E8C', disabled: true },
  { text: '\u9009\u9879\u4E09' },
];
export default () => {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={iconActions}
        onSelect={select}
        reference={<Button type="primary">\u5C55\u793A\u56FE\u6807</Button>}
      />
      <Popover
        actions={disabledActions}
        onSelect={select}
        reference={<Button type="primary">\u7981\u7528\u9009\u9879</Button>}
      />
    </Space>
  );
};
`,$={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { AddO, MoreO, MusicO } from '@react-vant/icons';
import { Space, Toast, Button, Popover } from 'react-vant';

const iconActions = [
  { text: '\u9009\u9879\u4E00', icon: <AddO /> },
  { text: '\u9009\u9879\u4E8C', icon: <MusicO /> },
  { text: '\u9009\u9879\u4E09', icon: <MoreO /> },
];

const disabledActions = [
  { text: '\u9009\u9879\u4E00', disabled: true },
  { text: '\u9009\u9879\u4E8C', disabled: true },
  { text: '\u9009\u9879\u4E09' },
];
export default () => {
  const select = (option) => Toast.info(option.text);

  return (
    <Space>
      <Popover
        placement="bottom-start"
        actions={iconActions}
        onSelect={select}
        reference={<Button type="primary">\u5C55\u793A\u56FE\u6807</Button>}
      />
      <Popover
        actions={disabledActions}
        onSelect={select}
        reference={<Button type="primary">\u7981\u7528\u9009\u9879</Button>}
      />
    </Space>
  );
};
`}},key:"popover-config",meta:{title:"\u9009\u9879\u914D\u7F6E"}};var x=()=>{const u=h.exports.useRef(null);return e(C,{children:e(o,{ref:u,placement:"top-start",reference:e(i,{type:"primary",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),children:e(m,{square:!0,border:!1,columnNum:3,style:{width:240},children:Array.from({length:6},(n,r)=>e(m.Item,{onClick:()=>{var l;return(l=u.current)==null?void 0:l.hide()},icon:e(I,{}),text:"\u6587\u5B57"},r))})})})};const q=`import React, { useRef } from 'react';
import { PhotoO } from '@react-vant/icons';
import { Popover, Button, Grid } from 'react-vant';
import type { PopoverInstance } from 'react-vant';

export default () => {
  const popover = useRef<PopoverInstance>(null);
  return (
    <>
      <Popover
        ref={popover}
        placement="top-start"
        reference={<Button type="primary">\u81EA\u5B9A\u4E49\u5185\u5BB9</Button>}
      >
        <Grid square border={false} columnNum={3} style={{ width: 240 }}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item
              onClick={() => popover.current?.hide()}
              key={i}
              icon={<PhotoO />}
              text="\u6587\u5B57"
            />
          ))}
        </Grid>
      </Popover>
    </>
  );
};
`,Z={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { PhotoO } from '@react-vant/icons';
import { Popover, Button, Grid } from 'react-vant';
import type { PopoverInstance } from 'react-vant';

export default () => {
  const popover = useRef<PopoverInstance>(null);
  return (
    <>
      <Popover
        ref={popover}
        placement="top-start"
        reference={<Button type="primary">\u81EA\u5B9A\u4E49\u5185\u5BB9</Button>}
      >
        <Grid square border={false} columnNum={3} style={{ width: 240 }}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item
              onClick={() => popover.current?.hide()}
              key={i}
              icon={<PhotoO />}
              text="\u6587\u5B57"
            />
          ))}
        </Grid>
      </Popover>
    </>
  );
};
`}},key:"popover-custom",meta:{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}},H=function({previewer:u=()=>null,api:n=()=>null}){const r=u;return e("div",{children:t("div",{children:[e("h1",{id:"popover-\u6C14\u6CE1\u5F39\u51FA\u6846","data-anchor":"popover-\u6C14\u6CE1\u5F39\u51FA\u6846",children:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5F39\u51FA\u5F0F\u7684\u6C14\u6CE1\u83DC\u5355\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Popover } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),t("p",{children:["\u5F53 Popover \u5F39\u51FA\u65F6\uFF0C\u4F1A\u57FA\u4E8E ",e("code",{children:"reference"})," \u5C5E\u6027\u7684\u5185\u5BB9\u8FDB\u884C\u5B9A\u4F4D\u3002"]}),e(r,d(c({},_),{children:e(f,{})})),e("h3",{id:"\u5F39\u51FA\u4F4D\u7F6E","data-anchor":"\u5F39\u51FA\u4F4D\u7F6E",children:"\u5F39\u51FA\u4F4D\u7F6E"}),t("p",{children:["\u901A\u8FC7 ",e("code",{children:"placement"})," \u5C5E\u6027\u6765\u63A7\u5236\u6C14\u6CE1\u7684\u5F39\u51FA\u4F4D\u7F6E\u3002"]}),e(r,d(c({},G),{children:e(A,{})})),t("p",{children:[e("code",{children:"placement"})," \u652F\u6301\u4EE5\u4E0B\u503C\uFF1A"]}),e(r,{code:`top           # \u9876\u90E8\u4E2D\u95F4\u4F4D\u7F6E
top-start     # \u9876\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
top-end       # \u9876\u90E8\u53F3\u4FA7\u4F4D\u7F6E
left          # \u5DE6\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
left-start    # \u5DE6\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
left-end      # \u5DE6\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
right         # \u53F3\u4FA7\u4E2D\u95F4\u4F4D\u7F6E
right-start   # \u53F3\u4FA7\u4E0A\u65B9\u4F4D\u7F6E
right-end     # \u53F3\u4FA7\u4E0B\u65B9\u4F4D\u7F6E
bottom        # \u5E95\u90E8\u4E2D\u95F4\u4F4D\u7F6E
bottom-start  # \u5E95\u90E8\u5DE6\u4FA7\u4F4D\u7F6E
bottom-end    # \u5E95\u90E8\u53F3\u4FA7\u4F4D\u7F6E`,lang:"bash"}),e("h3",{id:"\u9009\u9879\u914D\u7F6E","data-anchor":"\u9009\u9879\u914D\u7F6E",children:"\u9009\u9879\u914D\u7F6E"}),t("ul",{children:[t("li",{children:["\u5728 ",e("code",{children:"actions"})," \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"icon"})," \u5B57\u6BB5\u6765\u5B9A\u4E49\u9009\u9879\u7684\u56FE\u6807\u3002"]}),t("li",{children:["\u5728 ",e("code",{children:"actions"})," \u6570\u7EC4\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5B57\u6BB5\u6765\u7981\u7528\u67D0\u4E2A\u9009\u9879\u3002"]})]}),e(r,d(c({},$),{children:e(D,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9","data-anchor":"\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}),e("p",{children:"\u901A\u8FC7 children\uFF0C\u53EF\u4EE5\u5728 Popover \u5185\u90E8\u653E\u7F6E\u4EFB\u610F\u5185\u5BB9\u3002"}),e(r,d(c({},Z),{children:e(x,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"actions"}),e("td",{children:"\u9009\u9879\u5217\u8868"}),e("td",{children:e("em",{children:"Action[]"})}),e("td",{children:e("code",{children:"[]"})})]}),t("tr",{children:[e("td",{children:"placement"}),e("td",{children:"\u5F39\u51FA\u4F4D\u7F6E"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"bottom"})})]}),t("tr",{children:[e("td",{children:"theme"}),t("td",{children:["\u4E3B\u9898\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"dark"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"light"})})]}),t("tr",{children:[e("td",{children:"trigger"}),t("td",{children:["\u89E6\u53D1\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"manual"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"click"})})]}),t("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.3"})})]}),t("tr",{children:[e("td",{children:"offset"}),e("td",{children:"\u51FA\u73B0\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF"}),e("td",{children:e("em",{children:"[number, number]"})}),e("td",{children:e("code",{children:"[0, 8]"})})]}),t("tr",{children:[e("td",{children:"overlay"}),e("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),t("tr",{children:[e("td",{children:"overlayClass"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"overlayStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),e("td",{children:e("em",{children:"CSSProperties"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"closeOnClickAction"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u9009\u9879\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"closeOnClickOutside"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5916\u90E8\u5143\u7D20\u540E\u5173\u95ED\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),t("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9"}),e("td",{children:e("em",{children:"React.ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"reference"}),e("td",{children:"\u89E6\u53D1 Popover \u663E\u793A\u7684\u5143\u7D20\u5185\u5BB9"}),e("td",{children:e("em",{children:"React.ReactNode"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"Element|() => Element"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"action-\u6570\u636E\u7ED3\u6784","data-anchor":"action-\u6570\u636E\u7ED3\u6784",children:"Action \u6570\u636E\u7ED3\u6784"}),t("p",{children:[e("code",{children:"actions"})," \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u9009\u9879\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})})]}),t("tr",{children:[e("td",{children:"icon"}),e("td",{children:"\u6587\u5B57\u5DE6\u4FA7\u7684\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})})]}),t("tr",{children:[e("td",{children:"color"}),e("td",{children:"\u9009\u9879\u6587\u5B57\u989C\u8272"}),e("td",{children:e("em",{children:"string"})})]}),t("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})})]}),t("tr",{children:[e("td",{children:"className"}),e("td",{children:"\u4E3A\u5BF9\u5E94\u9009\u9879\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"onSelect"}),e("td",{children:"\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"action: Action, index: number"})})]}),t("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"onOpened"}),e("td",{children:"\u6253\u5F00\u83DC\u5355\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u83DC\u5355\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"onClickOverlay"}),e("td",{children:"\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]})]})]}),e("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Popover \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8FD4\u56DE\u503C"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"show"}),e("td",{children:"\u663E\u793A popover"}),e("td",{children:"-"}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"hide"}),e("td",{children:"\u5173\u95ED popover"}),e("td",{children:"-"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{children:"--rv-popover-arrow-size"}),e("td",{children:e("em",{children:"6px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-lg)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-action-width"}),e("td",{children:e("em",{children:"128px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-action-height"}),e("td",{children:e("em",{children:"44px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-action-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-action-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-action-icon-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-light-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-light-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-light-action-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-dark-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-dark-background-color"}),e("td",{children:e("em",{children:"#4a4a4a"})}),e("td",{children:"-"})]}),t("tr",{children:[e("td",{children:"--rv-popover-dark-action-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"popover-\u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1","data-anchor":"popover-\u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1",children:"Popover \u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1\uFF1F"}),t("p",{children:["\u8FD9\u79CD\u60C5\u51B5\u901A\u5E38\u662F\u7531\u4E8E\u9879\u76EE\u4E2D\u5F15\u5165\u4E86 ",e("code",{children:"fastclick"})," \u5E93\u5BFC\u81F4\u7684\u3002\u5EFA\u8BAE\u79FB\u9664 ",e("code",{children:"fastclick"}),"\uFF0C\u6216\u8005\u914D\u7F6E ",e("code",{children:"fastclick"})," \u7684 ",e("a",{href:"https://github.com/ftlabs/fastclick#advanced",children:"ignore \u89C4\u5219"}),"\u3002"]})]})})},J=[{Component:f,key:"popover-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:A,key:"popover-demo-1",title:"\u5F39\u51FA\u4F4D\u7F6E",compact:!0},{Component:D,key:"popover-config",title:"\u9009\u9879\u914D\u7F6E"},{Component:x,key:"popover-custom",title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"}],K={simulator:{compact:!1}},Q=[{depth:1,text:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846",id:"popover-\u6C14\u6CE1\u5F39\u51FA\u6846"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5F39\u51FA\u4F4D\u7F6E",id:"\u5F39\u51FA\u4F4D\u7F6E"},{depth:3,text:"\u9009\u9879\u914D\u7F6E",id:"\u9009\u9879\u914D\u7F6E"},{depth:3,text:"\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Action \u6570\u636E\u7ED3\u6784",id:"action-\u6570\u636E\u7ED3\u6784"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"Popover \u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1\uFF1F",id:"popover-\u7684\u70B9\u51FB\u4E8B\u4EF6\u65E0\u6CD5\u6B63\u786E\u89E6\u53D1"}],U="/src/components/popover/README.md",W="Popover \u6C14\u6CE1\u5F39\u51FA\u6846",X="1658500653000";var ne=u=>u.children({MdContent:H,demos:J,frontmatter:K,slugs:Q,filePath:U,title:W,updatedTime:X});export{H as MdContent,ne as default,J as demos,U as filePath,K as frontmatter,Q as slugs,W as title,X as updatedTime};
