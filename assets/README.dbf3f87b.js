var A=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(t,r,n)=>r in t?A(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(t,r)=>{for(var n in r||(r={}))C.call(r,n)&&b(t,n,r[n]);if(F)for(var n of F(r))B.call(r,n)&&b(t,n,r[n]);return t},s=(t,r)=>x(t,y(r));var f=(t,r)=>{var n={};for(var l in t)C.call(t,l)&&r.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&F)for(var l of F(t))r.indexOf(l)<0&&B.call(t,l)&&(n[l]=t[l]);return n};import{j as e,c as I,r as E,a as u,F as S}from"./main.531c777e.js";import{dX as g,F as D,ab as w,da as P,a as R,cB as V,a1 as N,b5 as k,cZ as _,aa as z,di as i,C as O,dk as c,d7 as p,j as M,dl as U}from"./WaterMark.6f52b203.js";import{h as G}from"./index.2a5125f1.js";var j=t=>e(g,s(o({className:"demo-floating-box-bubble",offset:{right:20,bottom:20},style:{"--rv-floating-box-size":"60px"},adsorb:{indent:.5,distance:20}},t),{children:e(D,{align:"center",justify:"center",className:"main-button",children:e(w,{})})}));const L=[V,N,k,_,z];var T=n=>{var l=n,{menu:t={}}=l,r=f(l,["menu"]);return e(g,s(o({className:"demo-floating-box-menu",offset:{right:20,bottom:"14vh"},menu:s(o({},t),{items:L.map((h,m)=>e(D,{align:"center",justify:"center",onClick:()=>P.info(`\u70B9\u51FB\u4E86\u7B2C${m+1}\u4E2A`),className:"menu-item",children:e(h,{})},m))})},r),{children:({active:h})=>e(D,{align:"center",justify:"center",className:I("main-button",{"main-button--active":h}),children:e(R,{})})}))};var v=()=>{const[t]=i.useForm(),[r,n]=E.exports.useState(0),[l,h]=E.exports.useState({}),m=()=>n(d=>d+1);return G.useUpdateEffect(()=>{(async()=>{const a=await t.getFieldsValue();a.adsorb_show||(a.adsorb=!1),delete a.adsorb_show,h(a)})()},[r]),u("div",{className:"demo-floating-box",children:[e(O,{title:"\u8BBE\u7F6E\u60AC\u6D6E\u7403"}),u(i,{form:t,onValuesChange:m,children:[e(i.Item,{name:"type",label:"DEMO",initialValue:"0",children:u(c.Group,{children:[e(c,{name:"0",children:"\u666E\u901A\u60AC\u6D6E\u7403"}),e(c,{name:"1",children:"\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403"})]})}),e(i.Item,{valuePropName:"checked",name:"disabled",label:"\u7981\u7528",initialValue:!1,children:e(p,{size:20})}),e(i.Item,{valuePropName:"checked",name:"draggable",label:"\u62D6\u52A8",initialValue:!0,children:e(p,{size:20})}),e(i.Item,{tooltip:"\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7",valuePropName:"checked",name:"adsorb_show",label:"\u8FD1\u8FB9\u505C\u9760",initialValue:!0,children:e(p,{size:20})}),e(i.Item,{noStyle:!0,shouldUpdate:(d,a)=>d.adsorb_show!==a.adsorb_show,children:()=>t.getFieldValue("adsorb_show")?u(S,{children:[e(i.Item,{tooltip:"\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB",name:["adsorb","distance"],label:"\u505C\u9760\u8DDD\u79BB",initialValue:20,children:e(M,{rightIcon:e("div",{children:"PX"})})}),e(i.Item,{tooltip:"\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387",name:["adsorb","indent"],label:"\u6EDA\u52A8\u7F29\u8FDB",initialValue:.5,children:e(U,{min:0,max:1,step:.1})})]}):null}),e(i.Item,{noStyle:!0,shouldUpdate:(d,a)=>d.type!==a.type,children:()=>+t.getFieldValue("type")==0?null:e(i.Item,{name:["menu","direction"],label:"\u83DC\u5355\u5C55\u5F00\u65B9\u5411",initialValue:"around",children:u(c.Group,{children:[e(c,{name:"around",children:"around"}),e(c,{name:"vertical",children:"vertical"}),e(c,{name:"horizontal",children:"horizontal"})]})})})]}),+l.type==1?e(T,o({},l)):e(j,o({},l)),e("div",{style:{height:1e3}})]})};const X=`import React, { useState } from 'react';
import { Cell, Field, Stepper, Form, Switch, Radio, hooks } from 'react-vant';
import type { FloatingBallProps } from 'react-vant';
import Bubble from './bubble';
import Menu from './menu';
import './style.less';

export default () => {
  const [form] = Form.useForm();
  const [formUpdated, setFormUpdated] = useState(0);
  const [config, updateConfig] = useState<FloatingBallProps & Record<string, unknown>>({});

  const handleFormChange = () => setFormUpdated((v) => v + 1);

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue();
      if (!values.adsorb_show) values.adsorb = false;

      delete values.adsorb_show;
      updateConfig(values);
    };
    getValue();
  }, [formUpdated]);

  return (
    <div className="demo-floating-box">
      <Cell title="\u8BBE\u7F6E\u60AC\u6D6E\u7403" />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name="type" label="DEMO" initialValue="0">
          <Radio.Group>
            <Radio name="0">\u666E\u901A\u60AC\u6D6E\u7403</Radio>
            <Radio name="1">\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item valuePropName="checked" name="disabled" label="\u7981\u7528" initialValue={false}>
          <Switch size={20} />
        </Form.Item>
        <Form.Item valuePropName="checked" name="draggable" label="\u62D6\u52A8" initialValue={true}>
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip="\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7"
          valuePropName="checked"
          name="adsorb_show"
          label="\u8FD1\u8FB9\u505C\u9760"
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}>
          {() => {
            const show = form.getFieldValue('adsorb_show');
            if (!show) return null;
            return (
              <>
                <Form.Item
                  tooltip="\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB"
                  name={['adsorb', 'distance']}
                  label="\u505C\u9760\u8DDD\u79BB"
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip="\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387"
                  name={['adsorb', 'indent']}
                  label="\u6EDA\u52A8\u7F29\u8FDB"
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            );
          }}
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prev, next) => prev.type !== next.type}>
          {() => {
            const type = form.getFieldValue('type');
            if (+type === 0) return null;
            return (
              <Form.Item name={['menu', 'direction']} label="\u83DC\u5355\u5C55\u5F00\u65B9\u5411" initialValue="around">
                <Radio.Group>
                  <Radio name="around">around</Radio>
                  <Radio name="vertical">vertical</Radio>
                  <Radio name="horizontal">horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            );
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  );
};
`,H={code:X,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},clsx:{type:"NPM",value:"1.2.1"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Cell, Field, Stepper, Form, Switch, Radio, hooks } from 'react-vant';
import type { FloatingBallProps } from 'react-vant';
import Bubble from './bubble';
import Menu from './menu';
import './style.less';

export default () => {
  const [form] = Form.useForm();
  const [formUpdated, setFormUpdated] = useState(0);
  const [config, updateConfig] = useState<FloatingBallProps & Record<string, unknown>>({});

  const handleFormChange = () => setFormUpdated((v) => v + 1);

  hooks.useUpdateEffect(() => {
    const getValue = async () => {
      const values = await form.getFieldsValue();
      if (!values.adsorb_show) values.adsorb = false;

      delete values.adsorb_show;
      updateConfig(values);
    };
    getValue();
  }, [formUpdated]);

  return (
    <div className="demo-floating-box">
      <Cell title="\u8BBE\u7F6E\u60AC\u6D6E\u7403" />
      <Form form={form} onValuesChange={handleFormChange}>
        <Form.Item name="type" label="DEMO" initialValue="0">
          <Radio.Group>
            <Radio name="0">\u666E\u901A\u60AC\u6D6E\u7403</Radio>
            <Radio name="1">\u5E26\u83DC\u5355\u7684\u60AC\u6D6E\u7403</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item valuePropName="checked" name="disabled" label="\u7981\u7528" initialValue={false}>
          <Switch size={20} />
        </Form.Item>
        <Form.Item valuePropName="checked" name="draggable" label="\u62D6\u52A8" initialValue={true}>
          <Switch size={20} />
        </Form.Item>
        <Form.Item
          tooltip="\u62D6\u52A8\u7ED3\u675F\u540E\uFF0C\u4F1A\u5438\u9644\u5728\u66F4\u9760\u8FD1\u7684\u5C4F\u5E55\u4E00\u4FA7"
          valuePropName="checked"
          name="adsorb_show"
          label="\u8FD1\u8FB9\u505C\u9760"
          initialValue={true}
        >
          <Switch size={20} />
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prev, next) => prev.adsorb_show !== next.adsorb_show}>
          {() => {
            const show = form.getFieldValue('adsorb_show');
            if (!show) return null;
            return (
              <>
                <Form.Item
                  tooltip="\u5438\u9644\u5728\u5C4F\u5E55\u4E00\u4FA7\u65F6\u8DDD\u79BB\u4FA7\u8FB9\u7684\u8DDD\u79BB"
                  name={['adsorb', 'distance']}
                  label="\u505C\u9760\u8DDD\u79BB"
                  initialValue={20}
                >
                  <Field rightIcon={<div>PX</div>} />
                </Form.Item>
                <Form.Item
                  tooltip="\u6EDA\u52A8\u65F6\u60AC\u6D6E\u7403\u79FB\u52A8\u5230\u5C4F\u5916\u7684\u6BD4\u7387"
                  name={['adsorb', 'indent']}
                  label="\u6EDA\u52A8\u7F29\u8FDB"
                  initialValue={0.5}
                >
                  <Stepper min={0} max={1} step={0.1} />
                </Form.Item>
              </>
            );
          }}
        </Form.Item>
        <Form.Item noStyle shouldUpdate={(prev, next) => prev.type !== next.type}>
          {() => {
            const type = form.getFieldValue('type');
            if (+type === 0) return null;
            return (
              <Form.Item name={['menu', 'direction']} label="\u83DC\u5355\u5C55\u5F00\u65B9\u5411" initialValue="around">
                <Radio.Group>
                  <Radio name="around">around</Radio>
                  <Radio name="vertical">vertical</Radio>
                  <Radio name="horizontal">horizontal</Radio>
                </Radio.Group>
              </Form.Item>
            );
          }}
        </Form.Item>
      </Form>
      {+config.type === 1 ? <Menu {...config} /> : <Bubble {...config} />}
      <div style={{ height: 1000 }} />
    </div>
  );
};
`},"bubble.tsx":{type:"FILE",value:`import React from 'react';
import { Flex, FloatingBall } from 'react-vant';
import { Chat } from '@react-vant/icons';

export default (props) => {
  return (
    <FloatingBall
      className="demo-floating-box-bubble"
      offset={{
        right: 20,
        bottom: 20,
      }}
      style={{
        '--rv-floating-box-size': '60px',
      }}
      adsorb={{
        // \u6EDA\u52A8\u7F29\u8FDB\u6BD4\u4F8B
        indent: 0.5,
        // \u8FD1\u8FB9\u505C\u9760\u8DDD\u79BB
        distance: 20,
      }}
      {...props}
    >
      <Flex align="center" justify="center" className="main-button">
        <Chat />
      </Flex>
    </FloatingBall>
  );
};
`},"menu.tsx":{type:"FILE",value:`import React from 'react';
import { Flex, FloatingBall, Toast } from 'react-vant';
import { StarO, CartCircleO, GoldCoinO, WapHomeO, Plus, ChatO } from '@react-vant/icons';
import clsx from 'clsx';

const icons = [StarO, CartCircleO, GoldCoinO, WapHomeO, ChatO];

export default ({ menu = {}, ...props}) => {
  return (
    <FloatingBall
      className="demo-floating-box-menu"
      offset={{
        right: 20,
        bottom: '14vh',
      }}
      menu={{
        ...menu,
        items: icons.map((Ico, i) => (
          <Flex
            align="center"
            justify="center"
            onClick={() => Toast.info(\`\u70B9\u51FB\u4E86\u7B2C\${i + 1}\u4E2A\`)}
            key={i}
            className="menu-item"
          >
            <Ico />
          </Flex>
        )),
      }}
      {...props}
    >
      {({ active }) => (
        <Flex
          align="center"
          justify="center"
          className={clsx('main-button', {
            'main-button--active': active,
          })}
        >
          <Plus />
        </Flex>
      )}
    </FloatingBall>
  );
};
`},"style.less":{type:"FILE",value:`@shadow: 0 3px 8px rgba(0, 0, 0, 0.08);

.demo-floating-box {
  .main-button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: @shadow;
    transition: all 0.2s ease-in-out;
  }

  &-bubble {
    .main-button {
      font-size: 28px;
      color: #fff;
      background-color: #3f45ff;

      svg {
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }

  &-menu {
    .main-button {
      background-color: #fff;

      &--active {
        transform: scale(0.9) rotate(45deg);
      }
    }
    .menu-item {
      background-color: #fff;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      box-shadow: @shadow;
      font-size: 24px;
    }
  }
}
`}},key:"floating-ball-base",meta:{title:"\u57FA\u7840\u793A\u4F8B"}},W=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return e("div",{children:u("div",{children:[e("h1",{id:"floatingball-\u60AC\u6D6E\u7403","data-anchor":"floatingball-\u60AC\u6D6E\u7403",children:"FloatingBall \u60AC\u6D6E\u7403"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u60AC\u6D6E\u7403\u7528\u4E8E\u63D0\u4F9B\u5168\u5C40\u60AC\u6D6E\u5FEB\u6377\u64CD\u4F5C\u5165\u53E3\uFF0C\u53EF\u4EE5\u81EA\u7531\u62D6\u52A8\uFF0C\u652F\u6301 1 \uFF5E 5 \u4E2A\u64CD\u4F5C\u9009\u9879\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { FloatingBall } from 'react-vant';",lang:"js"}),e("h3",{id:"\u793A\u4F8B\u4EE3\u7801","data-anchor":"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),e(n,s(o({},H),{children:e(v,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"floatingball-props","data-anchor":"floatingball-props",children:"FloatingBall Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"menu"}),e("td",{children:"\u83DC\u5355\u914D\u7F6E\u9879"}),e("td",{children:e("em",{children:e("a",{href:"#menuprops",children:"MenuProps"})})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"adsorb"}),e("td",{children:"\u8FD1\u8FB9\u5438\u9644\u80FD\u529B"}),e("td",{children:u("em",{children:["boolean | ",e("a",{href:"#adsorbprops",children:"AdsorbProps"})]})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"draggable"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u62D6\u62FD"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"boundary"}),e("td",{children:"\u9650\u5236\u62D6\u52A8\u8303\u56F4\u5728\u5C4F\u5E55\u8FB9\u754C\u5185"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"offset"}),e("td",{children:"\u521D\u59CB\u4F4D\u7F6E"}),e("td",{children:e("em",{children:e("a",{href:"#offsetprops",children:"OffsetProps"})})}),e("td",{children:u("code",{children:["{"," right: 0, bottom: '30vh' ","}"]})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"disabledClassName"}),e("td",{children:"\u7981\u7528\u65F6\u7684 class"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u60AC\u6D6E\u7403\u5305\u88F9\u7684\u5185\u5BB9"}),e("td",{children:u("em",{children:["ReactNode | (","{"," active, indenting ","}",") => ReactNode"]})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"menuprops","data-anchor":"menuprops",children:"MenuProps"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"items"}),e("td",{children:"\u83DC\u5355\u5143\u7D20\uFF0C\u6700\u591A\u652F\u6301 5 \u4E2A"}),e("td",{children:e("em",{children:"ReactNode[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"active"}),e("td",{children:"\u83DC\u5355\u6FC0\u6D3B\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultActive"}),e("td",{children:"\u9ED8\u8BA4\u7684\u83DC\u5355\u6FC0\u6D3B\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"direction"}),e("td",{children:"\u83DC\u5355\u5C55\u5F00\u65B9\u5411"}),e("td",{children:e("em",{children:"around | vertical | horizontal"})}),e("td",{children:e("code",{children:"around"})})]}),u("tr",{children:[e("td",{children:"itemClickClose"}),e("td",{children:"\u70B9\u51FB\u83DC\u5355\u9879\u5173\u95ED\u83DC\u5355"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u83DC\u5355\u72B6\u6001\u53D8\u5316\u7684\u56DE\u8C03"}),e("td",{children:e("em",{children:"(active: boolean) => void"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"adsorbprops","data-anchor":"adsorbprops",children:"AdsorbProps"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"indent"}),e("td",{children:"\u6EDA\u52A8\u65F6\u5143\u7D20\u7F29\u8FDB\u6BD4\u7387\uFF0C\u652F\u6301 0-1 \u7684\u6570\u5B57"}),e("td",{children:e("em",{children:"boolean | number"})}),e("td",{children:e("code",{children:"0.5"})})]}),u("tr",{children:[e("td",{children:"indentClassName"}),e("td",{children:"\u7F29\u8FDB\u65F6\u7684 class"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"distance"}),e("td",{children:"\u8FD1\u8FB9\u505C\u9760\u8DDD\u79BB"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"0"})})]})]})]}),e("h3",{id:"offsetprops","data-anchor":"offsetprops",children:"OffsetProps"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"top"}),e("td",{children:"\u8DDD\u79BB\u9876\u90E8\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"CSSProperties['top']"})})]}),u("tr",{children:[e("td",{children:"right"}),e("td",{children:"\u8DDD\u79BB\u53F3\u4FA7\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"CSSProperties['right']"})})]}),u("tr",{children:[e("td",{children:"bottom"}),e("td",{children:"\u8DDD\u79BB\u5E95\u90E8\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"CSSProperties['bottom']"})})]}),u("tr",{children:[e("td",{children:"left"}),e("td",{children:"\u8DDD\u79BB\u5DE6\u4FA7\u7684\u8DDD\u79BB"}),e("td",{children:e("em",{children:"CSSProperties['left']"})})]})]})]}),e("h3",{id:"floatingball-\u65B9\u6CD5","data-anchor":"floatingball-\u65B9\u6CD5",children:"FloatingBall \u65B9\u6CD5"}),e("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 FloatingBall \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u65B9\u6CD5\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"open"}),e("td",{children:"\u6FC0\u6D3B\u83DC\u5355"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"close"}),e("td",{children:"\u5173\u95ED\u83DC\u5355"}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-floating-ball-size"}),e("td",{children:e("em",{children:"48px"})}),e("td",{children:"\u60AC\u6D6E\u5143\u7D20\u5927\u5C0F"})]}),u("tr",{children:[e("td",{children:"--rv-floating-ball-z-index"}),e("td",{children:e("em",{children:"8"})}),u("td",{children:["\u60AC\u6D6E\u5143\u7D20",e("code",{children:"z-index"}),"\u5C42\u7EA7"]})]})]})]})]})})},$=[{Component:v,key:"floating-ball-base",title:"\u57FA\u7840\u793A\u4F8B"}],Z=void 0,q=[{depth:1,text:"FloatingBall \u60AC\u6D6E\u7403",id:"floatingball-\u60AC\u6D6E\u7403"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:3,text:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801"},{depth:2,text:"API",id:"api"},{depth:3,text:"FloatingBall Props",id:"floatingball-props"},{depth:3,text:"MenuProps",id:"menuprops"},{depth:3,text:"AdsorbProps",id:"adsorbprops"},{depth:3,text:"OffsetProps",id:"offsetprops"},{depth:3,text:"FloatingBall \u65B9\u6CD5",id:"floatingball-\u65B9\u6CD5"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],J="/src/components/floating-ball/README.md",K="FloatingBall \u60AC\u6D6E\u7403",Q="1658500653000";var re=t=>t.children({MdContent:W,demos:$,frontmatter:Z,slugs:q,filePath:J,title:K,updatedTime:Q});export{W as MdContent,re as default,$ as demos,J as filePath,Z as frontmatter,q as slugs,K as title,Q as updatedTime};
