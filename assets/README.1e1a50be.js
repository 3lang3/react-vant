var g=Object.defineProperty,D=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var p=(n,u,r)=>u in n?g(n,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[u]=r,t=(n,u)=>{for(var r in u||(u={}))x.call(u,r)&&p(n,r,u[r]);if(a)for(var r of a(u))A.call(u,r)&&p(n,r,u[r]);return n},i=(n,u)=>D(n,b(u));import{r as c,a as d,F as B,j as e}from"./main.531c777e.js";import{ef as f,dd as y,eg as P,da as S}from"./WaterMark.6f52b203.js";const o={id:1,condition:`\u65E0\u4F7F\u7528\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:"\u4F18\u60E0\u5238\u540D\u79F0",description:"\u63CF\u8FF0\u4FE1\u606F",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"},L=i(t({},o),{id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"}),M=i(t({},o),{id:3,reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0"}),F=i(t({},L),{valueDesc:"1",unitDesc:"\u6298",id:4,reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0"}),R=(n=999999)=>String(Math.floor(Math.random()*n)+1);var E=()=>{const[n,u]=c.exports.useState([o,F]),[r]=c.exports.useState([M,F]),[s,C]=c.exports.useState(-1),[m,l]=c.exports.useState(!1);return d(B,{children:[e(f,{coupons:n,chosenCoupon:s,onClick:()=>l(!0)}),e(y,{round:!0,position:"bottom",style:{height:"90%",paddingTop:4},visible:m,onClose:()=>l(!1),children:e(P,{chosenCoupon:s,coupons:n,disabledCoupons:r,onChange:h=>{l(!1),C(h)},onExchange:h=>{console.log("code: ",h),S("\u5151\u6362\u6210\u529F"),u(v=>[...v,i(t({},o),{id:R()})])}})})]})};const T=`import React, { useState } from 'react';
import { CouponList, Popup, Toast, CouponCell } from 'react-vant';
import { data, disabledDiscountCoupon, disabledCoupon } from './demo';

const getRandomId = (max = 999999) => String(Math.floor(Math.random() * max) + 1);

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon]);
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon]);
  const [chosenCoupon, setChosenCoupon] = useState(-1);
  const [visible, setVisible] = useState(false);

  const onChange = (index: number) => {
    setVisible(false);
    setChosenCoupon(index);
  };

  const onExchange = (code) => {
    console.log('code: ', code);
    Toast('\u5151\u6362\u6210\u529F');
    setCoupons((v) => [...v, { ...data, id: getRandomId() } as any]);
  };

  return (
    <>
      <CouponCell coupons={coupons} chosenCoupon={chosenCoupon} onClick={() => setVisible(true)} />
      <Popup
        round
        position="bottom"
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  );
};
`,I={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { CouponList, Popup, Toast, CouponCell } from 'react-vant';
import { data, disabledDiscountCoupon, disabledCoupon } from './demo';

const getRandomId = (max = 999999) => String(Math.floor(Math.random() * max) + 1);

export default () => {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon]);
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon]);
  const [chosenCoupon, setChosenCoupon] = useState(-1);
  const [visible, setVisible] = useState(false);

  const onChange = (index: number) => {
    setVisible(false);
    setChosenCoupon(index);
  };

  const onExchange = (code) => {
    console.log('code: ', code);
    Toast('\u5151\u6362\u6210\u529F');
    setCoupons((v) => [...v, { ...data, id: getRandomId() } as any]);
  };

  return (
    <>
      <CouponCell coupons={coupons} chosenCoupon={chosenCoupon} onClick={() => setVisible(true)} />
      <Popup
        round
        position="bottom"
        style={{ height: '90%', paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  );
};
`},"demo.ts":{type:"FILE",value:`export const data = {
  id: 1,
  condition: '\u65E0\u4F7F\u7528\u95E8\u69DB\\n\u6700\u591A\u4F18\u60E012\u5143',
  reason: '',
  value: 150,
  name: '\u4F18\u60E0\u5238\u540D\u79F0',
  description: '\u63CF\u8FF0\u4FE1\u606F',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '\u5143',
};

export const discountCoupon = {
  ...data,
  id: 2,
  value: 12,
  valueDesc: '8.8',
  unitDesc: '\u6298',
};

export const disabledCoupon = {
  ...data,
  id: 3,
  reason: '\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0',
};

export const disabledDiscountCoupon = {
  ...discountCoupon,
  valueDesc: '1',
  unitDesc: '\u6298',
  id: 4,
  reason: '\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0',
};
`}},key:"coupon-list-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},k=function({previewer:n=()=>null,api:u=()=>null}){const r=n;return e("div",{children:d("div",{children:[e("h1",{id:"coupon-\u4F18\u60E0\u5238\u9009\u62E9\u5668","data-anchor":"coupon-\u4F18\u60E0\u5238\u9009\u62E9\u5668",children:"Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u4F18\u60E0\u5238\u7684\u5151\u6362\u548C\u9009\u62E9\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { CouponCell, CouponList } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(r,i(t({},I),{children:e(E,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"couponcell-props","data-anchor":"couponcell-props",children:"CouponCell Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"title"}),e("td",{children:"\u5355\u5143\u683C\u6807\u9898"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"\u4F18\u60E0\u5238"})})]}),d("tr",{children:[e("td",{children:"chosenCoupon"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"-1"})})]}),d("tr",{children:[e("td",{children:"coupons"}),e("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),e("td",{children:e("em",{children:"Coupon[]"})}),e("td",{children:e("code",{children:"[]"})})]}),d("tr",{children:[e("td",{children:"editable"}),e("td",{children:"\u80FD\u5426\u5207\u6362\u4F18\u60E0\u5238"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"border"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"currency"}),e("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\xA5"})})]})]})]}),e("h3",{id:"couponlist-props","data-anchor":"couponlist-props",children:"CouponList Props"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"code"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u5151\u6362\u7801"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"chosenCoupon"}),e("td",{children:"\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"-1"})})]}),d("tr",{children:[e("td",{children:"coupons"}),e("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),e("td",{children:e("em",{children:"Coupon[]"})}),e("td",{children:e("code",{children:"[]"})})]}),d("tr",{children:[e("td",{children:"disabledCoupons"}),e("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868"}),e("td",{children:e("em",{children:"Coupon[]"})}),e("td",{children:e("code",{children:"[]"})})]}),d("tr",{children:[e("td",{children:"enabledTitle"}),e("td",{children:"\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u53EF\u4F7F\u7528\u4F18\u60E0\u5238"})})]}),d("tr",{children:[e("td",{children:"disabledTitle"}),e("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u4E0D\u53EF\u4F7F\u7528\u4F18\u60E0\u5238"})})]}),d("tr",{children:[e("td",{children:"exchangeButtonText"}),e("td",{children:"\u5151\u6362\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u5151\u6362"})})]}),d("tr",{children:[e("td",{children:"exchangeButtonLoading"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5151\u6362\u6309\u94AE\u52A0\u8F7D\u52A8\u753B"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),d("tr",{children:[e("td",{children:"exchangeButtonDisabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u5151\u6362\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),d("tr",{children:[e("td",{children:"exchangeMinLength"}),e("td",{children:"\u5151\u6362\u7801\u6700\u5C0F\u957F\u5EA6"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:e("code",{children:"1"})})]}),d("tr",{children:[e("td",{children:"displayedCouponIndex"}),e("td",{children:"\u6EDA\u52A8\u81F3\u7279\u5B9A\u4F18\u60E0\u5238\u4F4D\u7F6E"}),e("td",{children:e("em",{children:"number"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"showCloseButton"}),e("td",{children:"\u662F\u5426\u663E\u793A\u5217\u8868\u5E95\u90E8\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"closeButtonText"}),e("td",{children:"\u5217\u8868\u5E95\u90E8\u6309\u94AE\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u4E0D\u4F7F\u7528\u4F18\u60E0"})})]}),d("tr",{children:[e("td",{children:"inputPlaceholder"}),e("td",{children:"\u8F93\u5165\u6846\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7801"})})]}),d("tr",{children:[e("td",{children:"showExchangeBar"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u5151\u6362\u680F"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"currency"}),e("td",{children:"\u8D27\u5E01\u7B26\u53F7"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"\xA5"})})]}),d("tr",{children:[e("td",{children:"emptyImage"}),e("td",{children:"\u5217\u8868\u4E3A\u7A7A\u65F6\u7684\u5360\u4F4D\u56FE"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"https://img.yzcdn.cn/vant/coupon-empty.png"})})]}),d("tr",{children:[e("td",{children:"showCount"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u53EF\u7528 / \u4E0D\u53EF\u7528\u6570\u91CF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),d("tr",{children:[e("td",{children:"listFooter"}),e("td",{children:"\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"disabledListFooter"}),e("td",{children:"\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"couponlist-events","data-anchor":"couponlist-events",children:"CouponList Events"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u4F18\u60E0\u5238\u5207\u6362\u56DE\u8C03"}),e("td",{children:"index, \u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15"})]}),d("tr",{children:[e("td",{children:"onExchange"}),e("td",{children:"\u5151\u6362\u4F18\u60E0\u5238\u56DE\u8C03"}),e("td",{children:"code, \u5151\u6362\u7801"})]})]})]}),e("h3",{id:"coupon-\u6570\u636E\u7ED3\u6784","data-anchor":"coupon-\u6570\u636E\u7ED3\u6784",children:"Coupon \u6570\u636E\u7ED3\u6784"}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u952E\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"id"}),e("td",{children:"\u4F18\u60E0\u5238 id"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u4F18\u60E0\u5238\u540D\u79F0"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"condition"}),e("td",{children:"\u6EE1\u51CF\u6761\u4EF6"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"startAt"}),e("td",{children:"\u5361\u6709\u6548\u5F00\u59CB\u65F6\u95F4 (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)"}),e("td",{children:e("em",{children:"number"})})]}),d("tr",{children:[e("td",{children:"endAt"}),e("td",{children:"\u5361\u5931\u6548\u65E5\u671F (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)"}),e("td",{children:e("em",{children:"number"})})]}),d("tr",{children:[e("td",{children:"description"}),e("td",{children:"\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F18\u60E0\u5238\u53EF\u7528\u65F6\u5C55\u793A"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"reason"}),e("td",{children:"\u4E0D\u53EF\u7528\u539F\u56E0\uFF0C\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u65F6\u5C55\u793A"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\uFF0C\u5355\u4F4D\u5206"}),e("td",{children:e("em",{children:"number"})})]}),d("tr",{children:[e("td",{children:"valueDesc"}),e("td",{children:"\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\u6587\u6848"}),e("td",{children:e("em",{children:"string"})})]}),d("tr",{children:[e("td",{children:"unitDesc"}),e("td",{children:"\u5355\u4F4D\u6587\u6848"}),e("td",{children:e("em",{children:"string"})})]})]})]}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),d("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),d("table",{children:[e("thead",{children:d("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),d("tbody",{children:[d("tr",{children:[e("td",{children:"--rv-coupon-margin"}),e("td",{children:e("em",{children:"0 var(--rv-padding-sm) var(--rv-padding-sm)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-content-height"}),e("td",{children:e("em",{children:"84px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-content-padding"}),e("td",{children:e("em",{children:"14px 0"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-background-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-active-background-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-lg)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-box-shadow"}),e("td",{children:e("em",{children:"0 0 4px rgba(0, 0, 0, 0.1)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-head-width"}),e("td",{children:e("em",{children:"96px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-amount-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-amount-font-size"}),e("td",{children:e("em",{children:"30px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-currency-font-size"}),e("td",{children:e("em",{children:"40%"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-name-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-description-padding"}),e("td",{children:e("em",{children:"var(--rv-padding-xs) var(--rv-padding-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-description-border-color"}),e("td",{children:e("em",{children:"var(--rv-border-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-corner-checkbox-icon-color"}),e("td",{children:e("em",{children:"var(--rv-primary-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-field-padding"}),e("td",{children:e("em",{children:"5px 0 5px var(--rv-padding-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-exchange-button-height"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-close-button-height"}),e("td",{children:e("em",{children:"40px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-empty-image-size"}),e("td",{children:e("em",{children:"200px"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-empty-tip-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-empty-tip-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-list-empty-tip-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-md)"})}),e("td",{children:"-"})]}),d("tr",{children:[e("td",{children:"--rv-coupon-cell-selected-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]})]})]})]})})},V=[{Component:E,key:"coupon-list-demo",title:"\u57FA\u7840\u7528\u6CD5"}],w=void 0,z=[{depth:1,text:"Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668",id:"coupon-\u4F18\u60E0\u5238\u9009\u62E9\u5668"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:2,text:"API",id:"api"},{depth:3,text:"CouponCell Props",id:"couponcell-props"},{depth:3,text:"CouponList Props",id:"couponlist-props"},{depth:3,text:"CouponList Events",id:"couponlist-events"},{depth:3,text:"Coupon \u6570\u636E\u7ED3\u6784",id:"coupon-\u6570\u636E\u7ED3\u6784"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],_="/src/components/coupon-list/README.md",N="Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668",j="1658500653000";var O=n=>n.children({MdContent:k,demos:V,frontmatter:w,slugs:z,filePath:_,title:N,updatedTime:j});export{k as MdContent,O as default,V as demos,_ as filePath,w as frontmatter,z as slugs,N as title,j as updatedTime};
