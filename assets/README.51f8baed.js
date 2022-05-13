var I=Object.defineProperty,v=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var C=(u,i,e)=>i in u?I(u,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[i]=e,o=(u,i)=>{for(var e in i||(i={}))S.call(i,e)&&C(u,e,i[e]);if(g)for(var e of g(i))k.call(i,e)&&C(u,e,i[e]);return u},c=(u,i)=>v(u,R(i));import{r as m,a as t,j as l}from"./main.ec619389.js";import{C as E,dw as d,d6 as B,dz as y,dy as n,e1 as r,d9 as h,cY as x,cA as z,a0 as P,b4 as O,B as p,a as G}from"./index.2f8a748e.js";var f=()=>{const[u,i]=m.exports.useState(!1),e=m.exports.useRef(),[s,F]=m.exports.useState({disdrag:!1,disabled:!1,direction:"around",position:"bottom-right"}),b=a=>{console.log(">>>",a),F(D=>o(o({},D),a))},A=a=>{i(a),F(a?c(o({},s),{adsorb:5}):c(o({},s),{adsorb:null}))};return t("div",{children:[l(E,{title:"\u8BBE\u7F6E\u60AC\u6D6E\u7403"}),t(d,{onValuesChange:b,children:[l(d.Item,{name:"disabled",label:"\u7981\u7528",children:l(B,{size:20})}),l(d.Item,{name:"disdrag",label:"\u7981\u6B62\u62D6\u52A8",children:l(B,{size:20})}),l(d.Item,{label:"\u65E0\u64CD\u4F5C\u81EA\u52A8\u9760\u8FB9\u5438\u9644",children:l(B,{size:20,onChange:A})}),u&&l(d.Item,{name:"adsorb",label:"\u81EA\u52A8\u9760\u8FB9\u65F6\u95F4(\u5355\u4F4DS)",initialValue:5,children:l(y,{})}),l(d.Item,{name:"direction",label:"\u65B9\u5411",initialValue:"around",children:t(n.Group,{children:[l(n,{name:"around",children:"around"}),l(n,{name:"vertical",children:"vertical"}),l(n,{name:"horizontal",children:"horizontal"})]})}),l(d.Item,{name:"position",label:"\u4F4D\u7F6E",initialValue:"bottom-right",children:t(n.Group,{children:[l(n,{name:"top-left",children:"top-left"}),l(n,{name:"top-right",children:"top-right"}),l(n,{name:"bottom-left",children:"bottom-left"}),l(n,{name:"bottom-right",children:"bottom-right"})]})})]}),t(r,c(o({ref:e,onAction:a=>console.log("\u60AC\u6D6E\u7403\u5F53\u524D\u6FC0\u6D3B\u72B6\u6001>>>",a)},s),{children:[l(r.Item,{onClick:()=>h.info("\u70B9\u51FB\u4E86\u7B2C1\u4E2A"),children:l(x,{})}),l(r.Item,{onClick:()=>h.info("\u70B9\u51FB\u4E86\u7B2C2\u4E2A"),children:l(z,{})}),l(r.Item,{onClick:()=>h.info("\u70B9\u51FB\u4E86\u7B2C3\u4E2A"),children:l(P,{})}),l(r.Item,{onClick:()=>h.info("\u70B9\u51FB\u4E86\u7B2C4\u4E2A"),children:l(O,{})}),l(r.Item,{onClick:()=>h.info("\u70B9\u51FB\u4E86\u7B2C5\u4E2A"),children:l(p,{icon:l(G,{}),type:"primary",round:!0,size:"mini"})})]})),l(E,{children:l(p,{type:"primary",block:!0,round:!0,onClick:()=>{e.current.action(!0)},children:"\u6FC0\u6D3B\u60AC\u6D6E\u7403\u72B6\u6001"})}),l("div",{style:{height:1e3}})]})};const T=`import React, { useRef, useState } from 'react';
import { FloatingBall, Cell, Button, FloatingBallInstance, Toast, Form, Switch, Radio, FloatingBallProps, Stepper } from 'react-vant';
import { StarO, CartCircleO, GoldCoinO, WapHomeO, Plus } from '@react-vant/icons';

export default () => {
  const [autoAdsorb, setAutoAdsorb] = useState(false)
  const floatingBallInstance = useRef<FloatingBallInstance>();
  const [floatingBallConfig, setFloatingBallConfig] = useState<FloatingBallProps>({
    disdrag: false,
    disabled: false,
    direction: 'around',
    position: 'bottom-right'
  });

  const handleFormChange = (values) => {
    console.log('>>>', values)
    setFloatingBallConfig(state => ({...state, ...values}))
  };

  const handleAutoAdsorb = (checked) => {
    setAutoAdsorb(checked);
    if (checked) {
      setFloatingBallConfig({...floatingBallConfig, adsorb: 5})
    } else {
      setFloatingBallConfig({...floatingBallConfig, adsorb: null})
    }
  };

  return (
    <div>
      <Cell title="\u8BBE\u7F6E\u60AC\u6D6E\u7403" />
      <Form onValuesChange={handleFormChange}>
        <Form.Item name="disabled" label="\u7981\u7528">
          <Switch size={20} />
        </Form.Item>
        <Form.Item name="disdrag" label="\u7981\u6B62\u62D6\u52A8">
          <Switch size={20} />
        </Form.Item>
        <Form.Item label="\u65E0\u64CD\u4F5C\u81EA\u52A8\u9760\u8FB9\u5438\u9644">
          <Switch size={20} onChange={handleAutoAdsorb} />
        </Form.Item>
        {
          autoAdsorb &&
          <Form.Item name="adsorb" label="\u81EA\u52A8\u9760\u8FB9\u65F6\u95F4(\u5355\u4F4DS)" initialValue={5}>
            <Stepper />
          </Form.Item>
        }
        <Form.Item name="direction" label="\u65B9\u5411" initialValue="around">
          <Radio.Group>
            <Radio name="around">around</Radio>
            <Radio name="vertical">vertical</Radio>
            <Radio name="horizontal">horizontal</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="position" label="\u4F4D\u7F6E" initialValue="bottom-right">
          <Radio.Group>
            <Radio name="top-left">top-left</Radio>
            <Radio name="top-right">top-right</Radio>
            <Radio name="bottom-left">bottom-left</Radio>
            <Radio name="bottom-right">bottom-right</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <FloatingBall
        ref={floatingBallInstance}
        onAction={(active) => console.log('\u60AC\u6D6E\u7403\u5F53\u524D\u6FC0\u6D3B\u72B6\u6001>>>', active)}
        {...floatingBallConfig}
      >
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C1\u4E2A')}><WapHomeO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C2\u4E2A')}><StarO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C3\u4E2A')}><CartCircleO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C4\u4E2A')}><GoldCoinO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C5\u4E2A')}><Button icon={<Plus />} type="primary" round size="mini" /></FloatingBall.Item>
      </FloatingBall>
      <Cell>
        <Button
          type="primary"
          block
          round
          onClick={() => { floatingBallInstance.current.action(true); }}
        >\u6FC0\u6D3B\u60AC\u6D6E\u7403\u72B6\u6001</Button>
      </Cell>
      <div style={{height: 1000}}></div>
    </div>
  );
};
`,w={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React, { useRef, useState } from 'react';
import { FloatingBall, Cell, Button, FloatingBallInstance, Toast, Form, Switch, Radio, FloatingBallProps, Stepper } from 'react-vant';
import { StarO, CartCircleO, GoldCoinO, WapHomeO, Plus } from '@react-vant/icons';

export default () => {
  const [autoAdsorb, setAutoAdsorb] = useState(false)
  const floatingBallInstance = useRef<FloatingBallInstance>();
  const [floatingBallConfig, setFloatingBallConfig] = useState<FloatingBallProps>({
    disdrag: false,
    disabled: false,
    direction: 'around',
    position: 'bottom-right'
  });

  const handleFormChange = (values) => {
    console.log('>>>', values)
    setFloatingBallConfig(state => ({...state, ...values}))
  };

  const handleAutoAdsorb = (checked) => {
    setAutoAdsorb(checked);
    if (checked) {
      setFloatingBallConfig({...floatingBallConfig, adsorb: 5})
    } else {
      setFloatingBallConfig({...floatingBallConfig, adsorb: null})
    }
  };

  return (
    <div>
      <Cell title="\u8BBE\u7F6E\u60AC\u6D6E\u7403" />
      <Form onValuesChange={handleFormChange}>
        <Form.Item name="disabled" label="\u7981\u7528">
          <Switch size={20} />
        </Form.Item>
        <Form.Item name="disdrag" label="\u7981\u6B62\u62D6\u52A8">
          <Switch size={20} />
        </Form.Item>
        <Form.Item label="\u65E0\u64CD\u4F5C\u81EA\u52A8\u9760\u8FB9\u5438\u9644">
          <Switch size={20} onChange={handleAutoAdsorb} />
        </Form.Item>
        {
          autoAdsorb &&
          <Form.Item name="adsorb" label="\u81EA\u52A8\u9760\u8FB9\u65F6\u95F4(\u5355\u4F4DS)" initialValue={5}>
            <Stepper />
          </Form.Item>
        }
        <Form.Item name="direction" label="\u65B9\u5411" initialValue="around">
          <Radio.Group>
            <Radio name="around">around</Radio>
            <Radio name="vertical">vertical</Radio>
            <Radio name="horizontal">horizontal</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="position" label="\u4F4D\u7F6E" initialValue="bottom-right">
          <Radio.Group>
            <Radio name="top-left">top-left</Radio>
            <Radio name="top-right">top-right</Radio>
            <Radio name="bottom-left">bottom-left</Radio>
            <Radio name="bottom-right">bottom-right</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <FloatingBall
        ref={floatingBallInstance}
        onAction={(active) => console.log('\u60AC\u6D6E\u7403\u5F53\u524D\u6FC0\u6D3B\u72B6\u6001>>>', active)}
        {...floatingBallConfig}
      >
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C1\u4E2A')}><WapHomeO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C2\u4E2A')}><StarO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C3\u4E2A')}><CartCircleO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C4\u4E2A')}><GoldCoinO/></FloatingBall.Item>
        <FloatingBall.Item onClick={() => Toast.info('\u70B9\u51FB\u4E86\u7B2C5\u4E2A')}><Button icon={<Plus />} type="primary" round size="mini" /></FloatingBall.Item>
      </FloatingBall>
      <Cell>
        <Button
          type="primary"
          block
          round
          onClick={() => { floatingBallInstance.current.action(true); }}
        >\u6FC0\u6D3B\u60AC\u6D6E\u7403\u72B6\u6001</Button>
      </Cell>
      <div style={{height: 1000}}></div>
    </div>
  );
};
`}},key:"floating-ball-base",meta:{title:"\u60AC\u6D6E\u7403"}},V=function({previewer:u=()=>null,api:i=()=>null}){const e=u;return l("div",{children:t("div",{children:[l("h1",{id:"floatingball-\u60AC\u6D6E\u7403","data-anchor":"floatingball-\u60AC\u6D6E\u7403",children:"FloatingBall \u60AC\u6D6E\u7403"}),l("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),l("p",{children:"\u60AC\u6D6E\u7403\u7528\u4E8E\u63D0\u4F9B\u5168\u5C40\u60AC\u6D6E\u5FEB\u6377\u64CD\u4F5C\u5165\u53E3\uFF0C\u53EF\u4EE5\u81EA\u7531\u62D6\u52A8\uFF0C\u652F\u63011\uFF5E5\u4E2A\u64CD\u4F5C\u9009\u9879\u3002"}),l("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),l(e,{code:"import { FloatingBall } from 'react-vant';",lang:"js"}),l("h3",{id:"\u793A\u4F8B\u4EE3\u7801","data-anchor":"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),l(e,c(o({},w),{children:l(f,{})})),l("h2",{id:"api","data-anchor":"api",children:"API"}),l("h3",{id:"floatingball-props","data-anchor":"floatingball-props",children:"FloatingBall Props"}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u53C2\u6570"}),l("th",{children:"\u8BF4\u660E"}),l("th",{children:"\u7C7B\u578B"}),l("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[l("td",{children:"adsorb"}),t("td",{children:["\u65E0\u64CD\u4F5C\u81EA\u52A8\u9760\u8FB9\u5438\u9644 \u5355\u4F4D: s (",l("strong",{children:">= 5s"}),")"]}),l("td",{children:l("em",{children:"number | null"})}),l("td",{children:l("code",{children:"null"})})]}),t("tr",{children:[l("td",{children:"color"}),l("td",{children:"\u60AC\u6D6E\u7403\u989C\u8272"}),l("td",{children:l("em",{children:"string"})}),l("td",{children:"-"})]}),t("tr",{children:[l("td",{children:"direction"}),l("td",{children:"\u65B9\u5411"}),l("td",{children:l("em",{children:"around | vertical | horizontal"})}),l("td",{children:l("code",{children:"around"})})]}),t("tr",{children:[l("td",{children:"disdrag"}),l("td",{children:"\u662F\u5426\u7981\u6B62\u62D6\u52A8"}),l("td",{children:l("em",{children:"boolean"})}),l("td",{children:l("code",{children:"false"})})]}),t("tr",{children:[l("td",{children:"disabled"}),l("td",{children:"\u662F\u5426\u7981\u7528"}),l("td",{children:l("em",{children:"boolean"})}),l("td",{children:l("code",{children:"false"})})]}),t("tr",{children:[l("td",{children:"icon"}),l("td",{children:"\u663E\u793A\u56FE\u6807"}),l("td",{children:l("em",{children:"ReactNode"})}),l("td",{children:"-"})]}),t("tr",{children:[l("td",{children:"position"}),l("td",{children:"\u4F4D\u7F6E"}),l("td",{children:l("em",{children:"top-left | top-right | bottom-left | bottom-right"})}),l("td",{children:l("code",{children:"bottom-right"})})]})]})]}),l("h3",{id:"floatingballitem-props","data-anchor":"floatingballitem-props",children:"FloatingBallItem Props"}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u53C2\u6570"}),l("th",{children:"\u8BF4\u660E"}),l("th",{children:"\u7C7B\u578B"})]})}),t("tbody",{children:[t("tr",{children:[l("td",{children:"color"}),l("td",{children:"\u989C\u8272"}),l("td",{children:l("em",{children:"string"})})]}),t("tr",{children:[l("td",{children:"disabled"}),l("td",{children:"\u662F\u5426\u7981\u7528"}),l("td",{children:l("em",{children:"false"})})]})]})]}),l("blockquote",{children:l("p",{children:"\u6700\u591A\u53EF\u4EE5\u8BBE\u7F6E5\u4E2A\u64CD\u4F5C\u9879 <FloatingBall.Item>"})}),l("h3",{id:"floatingball-events","data-anchor":"floatingball-events",children:"FloatingBall Events"}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u4E8B\u4EF6\u540D"}),l("th",{children:"\u8BF4\u660E"}),l("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),l("tbody",{children:t("tr",{children:[l("td",{children:"onAction"}),l("td",{children:"\u70B9\u51FB\u60AC\u6D6E\u7403\u65F6\u89E6\u53D1(\u53EA\u6709\u4E00\u4E2A\u9009\u9879/\u901A\u8FC7\u5B9E\u4F8B\u6FC0\u6D3B\u65F6\u4E0D\u4F1A\u89E6\u53D1)"}),l("td",{children:l("em",{children:"active: boolean"})})]})})]}),l("h3",{id:"floatingballitem-events","data-anchor":"floatingballitem-events",children:"FloatingBallItem Events"}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u4E8B\u4EF6\u540D"}),l("th",{children:"\u8BF4\u660E"}),l("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),l("tbody",{children:t("tr",{children:[l("td",{children:"onClick"}),l("td",{children:"\u70B9\u51FB\u64CD\u4F5C\u9879\u7684\u89E6\u53D1\u51FD\u6570"}),l("td",{children:"-"})]})})]}),l("h3",{id:"floatingball-\u65B9\u6CD5","data-anchor":"floatingball-\u65B9\u6CD5",children:"FloatingBall \u65B9\u6CD5"}),l("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 FloatingBall \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u65B9\u6CD5\u540D"}),l("th",{children:"\u8BF4\u660E"}),l("th",{children:"\u53C2\u6570"}),l("th",{children:"\u8FD4\u56DE\u503C"})]})}),l("tbody",{children:t("tr",{children:[l("td",{children:"action"}),l("td",{children:"\u6FC0\u6D3B\u60AC\u6D6E\u7403"}),l("td",{children:l("em",{children:"active: boolean"})}),l("td",{children:"-"})]})})]}),l("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),l("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",l("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[l("thead",{children:t("tr",{children:[l("th",{children:"\u540D\u79F0"}),l("th",{children:"\u9ED8\u8BA4\u503C"}),l("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[l("td",{children:"--rv-floating-ball-size"}),l("td",{children:l("em",{children:"38px"})}),l("td",{children:"\u60AC\u6D6E\u7403\u5927\u5C0F"})]}),t("tr",{children:[l("td",{children:"--rv-floating-ball-background-color"}),l("td",{children:l("em",{children:"rgba(0, 0, 0, .3)"})}),l("td",{children:"\u60AC\u6D6E\u7403\u80CC\u666F\u989C\u8272"})]}),t("tr",{children:[l("td",{children:"--rv-floating-ball-item-background-color"}),l("td",{children:l("em",{children:"var(--rv-floating-ball-background-color)"})}),l("td",{children:"\u60AC\u6D6E\u7403\u64CD\u4F5C\u9879\u80CC\u666F\u989C\u8272"})]}),t("tr",{children:[l("td",{children:"--rv-floating-ball-z-index"}),l("td",{children:l("em",{children:"8"})}),t("td",{children:["\u60AC\u6D6E\u7403",l("code",{children:"z-index"}),"\u5C42\u7EA7"]})]}),t("tr",{children:[l("td",{children:"--rv-floating-ball-padding"}),l("td",{children:l("em",{children:"10%"})}),t("td",{children:["\u60AC\u6D6E\u7403\u7684",l("code",{children:"padding"})]})]}),t("tr",{children:[l("td",{children:"--rv-floating-ball-item-padding"}),l("td",{children:l("em",{children:"var(--rv-floating-ball-padding)"})}),t("td",{children:["\u60AC\u6D6E\u7403\u64CD\u4F5C\u9879\u7684",l("code",{children:"padding"})]})]})]})]})]})})},N=[{Component:f,key:"floating-ball-base",title:"\u60AC\u6D6E\u7403"}],M=void 0,_=[{depth:1,text:"FloatingBall \u60AC\u6D6E\u7403",id:"floatingball-\u60AC\u6D6E\u7403"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:3,text:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801"},{depth:2,text:"API",id:"api"},{depth:3,text:"FloatingBall Props",id:"floatingball-props"},{depth:3,text:"FloatingBallItem Props",id:"floatingballitem-props"},{depth:3,text:"FloatingBall Events",id:"floatingball-events"},{depth:3,text:"FloatingBallItem Events",id:"floatingballitem-events"},{depth:3,text:"FloatingBall \u65B9\u6CD5",id:"floatingball-\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],H="/src/components/floating-ball/README.md",W="FloatingBall \u60AC\u6D6E\u7403",j="1652407185000";var J=u=>u.children({MdContent:V,demos:N,frontmatter:M,slugs:_,filePath:H,title:W,updatedTime:j});export{V as MdContent,J as default,N as demos,H as filePath,M as frontmatter,_ as slugs,W as title,j as updatedTime};
