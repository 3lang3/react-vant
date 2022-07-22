var D=Object.defineProperty,P=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var a=(o,t,i)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,r=(o,t)=>{for(var i in t||(t={}))k.call(t,i)&&a(o,i,t[i]);if(p)for(var i of p(t))y.call(t,i)&&a(o,i,t[i]);return o},d=(o,t)=>P(o,g(t));import{r as c,a as u,F as s,j as e,R as C}from"./main.531c777e.js";import{C as l,dd as n,aT as S,h as x}from"./WaterMark.6f52b203.js";var E=()=>{const[o,t]=c.exports.useState(!1);return u(s,{children:[e(l,{title:"\u5C55\u793A\u5F39\u51FA\u5C42",isLink:!0,onClick:()=>t(!0)}),e(n,{visible:o,onClose:()=>{t(!1)},children:e("div",{style:{padding:"30px 50px"},children:"\u5185\u5BB9"})})]})};const w=`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u5C55\u793A\u5F39\u51FA\u5C42" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ padding: '30px 50px' }}>\u5185\u5BB9</div>
      </Popup>
    </>
  );
};
`,I={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u5C55\u793A\u5F39\u51FA\u5C42" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ padding: '30px 50px' }}>\u5185\u5BB9</div>
      </Popup>
    </>
  );
};
`}},key:"popup-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}};var m=()=>{const[o,t]=c.exports.useState(""),i=()=>t("");return u(s,{children:[e(l,{title:"\u9876\u90E8\u5F39\u51FA",isLink:!0,onClick:()=>t("top")}),e(l,{title:"\u5E95\u90E8\u5F39\u51FA",isLink:!0,onClick:()=>t("bottom")}),e(l,{title:"\u5DE6\u4FA7\u5F39\u51FA",isLink:!0,onClick:()=>t("left")}),e(l,{title:"\u53F3\u4FA7\u5F39\u51FA",isLink:!0,onClick:()=>t("right")}),e(n,{visible:o==="top",style:{height:"30%"},position:"top",onClose:i}),e(n,{visible:o==="bottom",style:{height:"30%"},position:"bottom",onClose:i}),e(n,{visible:o==="left",style:{width:"30%",height:"100%"},position:"left",onClose:i}),e(n,{visible:o==="right",style:{width:"30%",height:"100%"},position:"right",onClose:i})]})};const L=`import React, { useState } from 'react';
import { Cell, Popup, PopupPosition } from 'react-vant';

export default () => {
  const [state, setState] = useState<PopupPosition>('');

  const onClose = () => setState('');

  return (
    <>
      <Cell title="\u9876\u90E8\u5F39\u51FA" isLink onClick={() => setState('top')} />
      <Cell title="\u5E95\u90E8\u5F39\u51FA" isLink onClick={() => setState('bottom')} />
      <Cell title="\u5DE6\u4FA7\u5F39\u51FA" isLink onClick={() => setState('left')} />
      <Cell title="\u53F3\u4FA7\u5F39\u51FA" isLink onClick={() => setState('right')} />

      <Popup visible={state === 'top'} style={{ height: '30%' }} position="top" onClose={onClose} />
      <Popup
        visible={state === 'bottom'}
        style={{ height: '30%' }}
        position="bottom"
        onClose={onClose}
      />
      <Popup
        visible={state === 'left'}
        style={{ width: '30%', height: '100%' }}
        position="left"
        onClose={onClose}
      />
      <Popup
        visible={state === 'right'}
        style={{ width: '30%', height: '100%' }}
        position="right"
        onClose={onClose}
      />
    </>
  );
};
`,R={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Cell, Popup, PopupPosition } from 'react-vant';

export default () => {
  const [state, setState] = useState<PopupPosition>('');

  const onClose = () => setState('');

  return (
    <>
      <Cell title="\u9876\u90E8\u5F39\u51FA" isLink onClick={() => setState('top')} />
      <Cell title="\u5E95\u90E8\u5F39\u51FA" isLink onClick={() => setState('bottom')} />
      <Cell title="\u5DE6\u4FA7\u5F39\u51FA" isLink onClick={() => setState('left')} />
      <Cell title="\u53F3\u4FA7\u5F39\u51FA" isLink onClick={() => setState('right')} />

      <Popup visible={state === 'top'} style={{ height: '30%' }} position="top" onClose={onClose} />
      <Popup
        visible={state === 'bottom'}
        style={{ height: '30%' }}
        position="bottom"
        onClose={onClose}
      />
      <Popup
        visible={state === 'left'}
        style={{ width: '30%', height: '100%' }}
        position="left"
        onClose={onClose}
      />
      <Popup
        visible={state === 'right'}
        style={{ width: '30%', height: '100%' }}
        position="right"
        onClose={onClose}
      />
    </>
  );
};
`}},key:"popup-position",meta:{title:"\u5F39\u51FA\u4F4D\u7F6E"}};var v=()=>{const[o,t]=c.exports.useState(!1),[i,F]=c.exports.useState(!1),[A,h]=c.exports.useState(!1);return u(s,{children:[e(l,{title:"\u5173\u95ED\u56FE\u6807",isLink:!0,onClick:()=>t(!0)}),e(l,{title:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807",isLink:!0,onClick:()=>F(!0)}),e(l,{title:"\u56FE\u6807\u4F4D\u7F6E",isLink:!0,onClick:()=>h(!0)}),e(n,{visible:o,closeable:!0,style:{height:"30%"},position:"bottom",onClose:()=>t(!1)}),e(n,{visible:i,closeable:!0,style:{height:"30%"},position:"bottom",closeIcon:e(S,{}),onClose:()=>F(!1)}),e(n,{visible:A,closeable:!0,style:{height:"30%"},position:"bottom",closeIconPosition:"top-left",onClose:()=>h(!1)})]})};const _=`import { Fire } from '@react-vant/icons';
import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showCustomCloseIcon, setShowCustomCloseIcon] = useState(false);
  const [showCustomIconPosition, setShowCustomIconPosition] = useState(false);

  return (
    <>
      <Cell title="\u5173\u95ED\u56FE\u6807" isLink onClick={() => setShowCloseIcon(true)} />
      <Cell title="\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807" isLink onClick={() => setShowCustomCloseIcon(true)} />
      <Cell title="\u56FE\u6807\u4F4D\u7F6E" isLink onClick={() => setShowCustomIconPosition(true)} />
      <Popup
        visible={showCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        onClose={() => setShowCloseIcon(false)}
      />
      <Popup
        visible={showCustomCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon={<Fire />}
        onClose={() => setShowCustomCloseIcon(false)}
      />
      <Popup
        visible={showCustomIconPosition}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIconPosition="top-left"
        onClose={() => setShowCustomIconPosition(false)}
      />
    </>
  );
};
`,M={code:_,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.6"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import { Fire } from '@react-vant/icons';
import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [showCustomCloseIcon, setShowCustomCloseIcon] = useState(false);
  const [showCustomIconPosition, setShowCustomIconPosition] = useState(false);

  return (
    <>
      <Cell title="\u5173\u95ED\u56FE\u6807" isLink onClick={() => setShowCloseIcon(true)} />
      <Cell title="\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807" isLink onClick={() => setShowCustomCloseIcon(true)} />
      <Cell title="\u56FE\u6807\u4F4D\u7F6E" isLink onClick={() => setShowCustomIconPosition(true)} />
      <Popup
        visible={showCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        onClose={() => setShowCloseIcon(false)}
      />
      <Popup
        visible={showCustomCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon={<Fire />}
        onClose={() => setShowCustomCloseIcon(false)}
      />
      <Popup
        visible={showCustomIconPosition}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIconPosition="top-left"
        onClose={() => setShowCustomIconPosition(false)}
      />
    </>
  );
};
`}},key:"popup-close",meta:{title:"\u5173\u95ED\u56FE\u6807"}};var b=()=>{const[o,t]=c.exports.useState(!1);return u(s,{children:[e(l,{title:"\u5706\u89D2\u5F39\u7A97",isLink:!0,onClick:()=>t(!0)}),e(n,{visible:o,closeable:!0,style:{height:"30%"},position:"bottom",round:!0,onClose:()=>t(!1)})]})};const V=`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u5706\u89D2\u5F39\u7A97" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
`,N={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u5706\u89D2\u5F39\u7A97" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
`}},key:"popup-round",meta:{title:"\u5706\u89D2\u5F39\u7A97"}};var f=()=>{const[o,t]=c.exports.useState(!1);return u(s,{children:[e(l,{title:"\u6807\u9898\u5F39\u6846",isLink:!0,onClick:()=>t(!0)}),e(n,{visible:o,closeable:!0,title:"\u6807\u9898",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0",style:{height:"30%"},position:"bottom",round:!0,onClose:()=>t(!1)})]})};const $=`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u6807\u9898\u5F39\u6846" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        title="\u6807\u9898"
        description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0"
        style={{ height: '30%' }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
`,O={code:$,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Popup, Cell } from 'react-vant';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="\u6807\u9898\u5F39\u6846" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        title="\u6807\u9898"
        description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0"
        style={{ height: '30%' }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
`}},key:"popup-title",meta:{title:"\u6807\u9898\u5F39\u7A97"}},j={"--rv-popup-background-color":"#000"};var B=()=>{const[o,t]=C.useState(!1),i=C.useRef(null);return e(x,{themeVars:j,children:u("div",{ref:i,children:[e(l,{title:"ConfigProvider\u914D\u7F6E",isLink:!0,onClick:()=>t(!0)}),e(n,{teleport:()=>i.current,visible:o,closeable:!0,title:"\u6807\u9898",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0",style:{height:"30%"},position:"bottom",round:!0,onClose:()=>t(!1)})]})})};const T=`import React from 'react';
import { Popup, Cell, ConfigProvider } from 'react-vant';

const theme = {
  '--rv-popup-background-color': '#000',
};

export default () => {
  const [visible, setVisible] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <ConfigProvider themeVars={theme}>
      <div ref={wrapperRef}>
        <Cell title="ConfigProvider\u914D\u7F6E" isLink onClick={() => setVisible(true)} />
        <Popup
          teleport={() => wrapperRef.current}
          visible={visible}
          closeable
          title="\u6807\u9898"
          description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0"
          style={{ height: '30%' }}
          position="bottom"
          round
          onClose={() => setVisible(false)}
        />
      </div>
    </ConfigProvider>
  );
};
`,z={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Popup, Cell, ConfigProvider } from 'react-vant';

const theme = {
  '--rv-popup-background-color': '#000',
};

export default () => {
  const [visible, setVisible] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <ConfigProvider themeVars={theme}>
      <div ref={wrapperRef}>
        <Cell title="ConfigProvider\u914D\u7F6E" isLink onClick={() => setVisible(true)} />
        <Popup
          teleport={() => wrapperRef.current}
          visible={visible}
          closeable
          title="\u6807\u9898"
          description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0"
          style={{ height: '30%' }}
          position="bottom"
          round
          onClose={() => setVisible(false)}
        />
      </div>
    </ConfigProvider>
  );
};
`}},key:"popup-teleport",meta:{title:"ConfigProvider\u914D\u7F6E"}},H=function({previewer:o=()=>null,api:t=()=>null}){const i=o;return e("div",{children:u("div",{children:[e("h1",{id:"popup-\u5F39\u51FA\u5C42","data-anchor":"popup-\u5F39\u51FA\u5C42",children:"Popup \u5F39\u51FA\u5C42"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(i,{code:"import { Popup } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"visible"})," \u4EE5\u53CA ",e("code",{children:"onClose"})," \u63A7\u5236\u5F39\u51FA\u5C42\u662F\u5426\u5C55\u793A\u3002"]}),e("div",{children:e(i,d(r({},I),{children:e(E,{})}))}),e("h3",{id:"\u5F39\u51FA\u4F4D\u7F6E","data-anchor":"\u5F39\u51FA\u4F4D\u7F6E",children:"\u5F39\u51FA\u4F4D\u7F6E"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"position"})," \u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A ",e("code",{children:"top"}),"\u3001",e("code",{children:"bottom"}),"\u3001",e("code",{children:"left"}),"\u3001",e("code",{children:"right"}),"\u3002"]}),e("div",{children:e(i,d(r({},R),{children:e(m,{})}))}),e("h3",{id:"\u5173\u95ED\u56FE\u6807","data-anchor":"\u5173\u95ED\u56FE\u6807",children:"\u5173\u95ED\u56FE\u6807"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"closeable"})," \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"closeIcon"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4F7F\u7528 ",e("code",{children:"closeIconPosition"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u4F4D\u7F6E\u3002"]}),e("div",{children:e(i,d(r({},M),{children:e(v,{})}))}),e("h3",{id:"\u5706\u89D2\u5F39\u7A97","data-anchor":"\u5706\u89D2\u5F39\u7A97",children:"\u5706\u89D2\u5F39\u7A97"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"round"})," \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002"]}),e("div",{children:e(i,d(r({},N),{children:e(b,{})}))}),e("h3",{id:"\u6807\u9898\u5F39\u7A97","data-anchor":"\u6807\u9898\u5F39\u7A97",children:"\u6807\u9898\u5F39\u7A97"}),u("p",{children:["\u8BBE\u7F6E ",e("code",{children:"title"})," \u548C ",e("code",{children:"description"})," \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u663E\u793A\u6807\u9898\u548C\u63CF\u8FF0\u6587\u5B57\uFF0C\u5EFA\u8BAE\u5728 ",e("code",{children:"bottom"})," \u5F39\u6846\u4E0B\u4F7F\u7528\u3002"]}),e("div",{children:e(i,d(r({},O),{children:e(f,{})}))}),e("h3",{id:"configprovider-\u914D\u7F6E","data-anchor":"configprovider-\u914D\u7F6E",children:"ConfigProvider \u914D\u7F6E"}),u("p",{children:["\u901A\u8FC7\u8BBE\u7F6E ",e("code",{children:"teleport"})," \u5C5E\u6027\uFF0C\u5F39\u7A97\u4F1A\u6302\u8F7D\u5728\u6307\u5B9A\u7684\u8282\u70B9\u4E0B\uFF0C",e("code",{children:"ConfigProvider"})," \u5373\u53EF\u751F\u6548\u3002"]}),e("div",{children:e(i,d(r({},z),{children:e(B,{})}))}),e("blockquote",{children:u("p",{children:["\u5982\u679C\u60F3\u5B9E\u73B0\u5168\u5C40\u914D\u7F6E ",e("code",{children:"Popup"})," \u6837\u5F0F\u53D8\u91CF\uFF0C\u8BF7\u4F7F\u7528 ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:root#examples",children:"css :root"})]})}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"visible"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"className"}),e("td",{children:"popup \u7C7B\u540D"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"overlay"}),e("td",{children:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"position"}),u("td",{children:["\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"top"})," ",e("code",{children:"bottom"})," ",e("code",{children:"right"})," ",e("code",{children:"left"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"center"})})]}),u("tr",{children:[e("td",{children:"overlayClass"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"overlayStyle"}),e("td",{children:"\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"duration"}),e("td",{children:"\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"0.3"})})]}),u("tr",{children:[e("td",{children:"round"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5706\u89D2"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5F39\u51FA\u5C42\u6807\u9898"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u5F39\u51FA\u5C42\u63CF\u8FF0"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"lockScroll"}),e("td",{children:"\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"destroyOnClose"}),e("td",{children:"\u5173\u95ED\u65F6\u9500\u6BC1 Popup \u91CC\u7684\u5B50\u5143\u7D20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"closeOnPopstate"}),e("td",{children:"\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"closeOnClickOverlay"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"closeable"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"closeIcon"}),e("td",{children:"\u5173\u95ED\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"cross"})})]}),u("tr",{children:[e("td",{children:"closeIconPosition"}),u("td",{children:["\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A",e("code",{children:"top-left"}),e("br",{}),e("code",{children:"bottom-left"})," ",e("code",{children:"bottom-right"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"top-right"})})]}),u("tr",{children:[e("td",{children:"transition"}),u("td",{children:["\u52A8\u753B\u7C7B\u540D\uFF0C\u7B49\u4EF7\u4E8E ",e("a",{href:"https://v3.cn.vuejs.org/api/built-in-components.html#transition",children:"transition"})," \u7684",e("code",{children:"name"}),"\u5C5E\u6027"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"teleport"}),e("td",{children:"\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9"}),e("td",{children:e("em",{children:"HTMLElement|(() => HTMLElement)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"safeAreaInsetBottom"}),u("td",{children:["\u662F\u5426\u5F00\u542F",e("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onClickOverlay"}),e("td",{children:"\u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClickCloseIcon"}),e("td",{children:"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onOpen"}),e("td",{children:"\u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClose"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onOpened"}),e("td",{children:"\u6253\u5F00\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onClosed"}),e("td",{children:"\u5173\u95ED\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1"}),e("td",{children:"-"})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(i,{code:"import type { PopupPosition, PopupCloseIconPosition } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-popup-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-title-font-size"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-description-color"}),e("td",{children:e("em",{children:"#969799"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-description-font-size"}),e("td",{children:e("em",{children:"14px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-transition"}),e("td",{children:e("em",{children:"transform var(--rv-animation-duration-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-round-border-radius"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-close-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-close-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-close-icon-active-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-close-icon-margin"}),e("td",{children:e("em",{children:"16px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-popup-close-icon-z-index"}),e("td",{children:e("em",{children:"1"})}),e("td",{children:"-"})]})]})]})]})})},q=[{Component:E,key:"popup-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:m,key:"popup-position",title:"\u5F39\u51FA\u4F4D\u7F6E"},{Component:v,key:"popup-close",title:"\u5173\u95ED\u56FE\u6807"},{Component:b,key:"popup-round",title:"\u5706\u89D2\u5F39\u7A97"},{Component:f,key:"popup-title",title:"\u6807\u9898\u5F39\u7A97"},{Component:B,key:"popup-teleport",title:"ConfigProvider\u914D\u7F6E"}],U=void 0,W=[{depth:1,text:"Popup \u5F39\u51FA\u5C42",id:"popup-\u5F39\u51FA\u5C42"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u5F39\u51FA\u4F4D\u7F6E",id:"\u5F39\u51FA\u4F4D\u7F6E"},{depth:3,text:"\u5173\u95ED\u56FE\u6807",id:"\u5173\u95ED\u56FE\u6807"},{depth:3,text:"\u5706\u89D2\u5F39\u7A97",id:"\u5706\u89D2\u5F39\u7A97"},{depth:3,text:"\u6807\u9898\u5F39\u7A97",id:"\u6807\u9898\u5F39\u7A97"},{depth:3,text:"ConfigProvider \u914D\u7F6E",id:"configprovider-\u914D\u7F6E"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],G="/src/components/popup/README.md",J="Popup \u5F39\u51FA\u5C42",K="1658500653000";var Z=o=>o.children({MdContent:H,demos:q,frontmatter:U,slugs:W,filePath:G,title:J,updatedTime:K});export{H as MdContent,Z as default,q as demos,G as filePath,U as frontmatter,W as slugs,J as title,K as updatedTime};
