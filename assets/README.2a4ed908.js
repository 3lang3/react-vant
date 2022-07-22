var F=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(u,o,n)=>o in u?F(u,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[o]=n,t=(u,o)=>{for(var n in o||(o={}))f.call(o,n)&&d(u,n,o[n]);if(a)for(var n of a(o))g.call(o,n)&&d(u,n,o[n]);return u},i=(u,o)=>C(u,E(o));import{j as e,r as l,a as r}from"./main.531c777e.js";import{h as s,i as m,j as c,R as B,k as D,B as A}from"./WaterMark.6f52b203.js";var b={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",confirm:"Confirm",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(u,o)=>`${u}/${o}`,rangePrompt:u=>`Choose no more than ${u} days`},vanCascader:{select:"Select"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh...",loading:"Loading..."},vanSubmitBar:{label:"Total\uFF1A"},vanCoupon:{unlimited:"Unlimited",discount:u=>`${u*10}% off`,condition:u=>`At least ${u}`},vanCouponCell:{title:"Coupon",count:u=>`You have ${u} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"}};var v=()=>e("div",{className:"demo-config-prodiver",children:e(s,{locale:b,children:e(m,{style:{height:420},poppable:!1})})});const x=`import React from 'react';
import { ConfigProvider, Calendar } from 'react-vant';
import locale from './enUs';
import './style.less';

export default () => {
  return (
    <div className="demo-config-prodiver">
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  );
};
`,y={code:x,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { ConfigProvider, Calendar } from 'react-vant';
import locale from './enUs';
import './style.less';

export default () => {
  return (
    <div className="demo-config-prodiver">
      <ConfigProvider locale={locale}>
        <Calendar style={{ height: 420 }} poppable={false} />
      </ConfigProvider>
    </div>
  );
};
`},"enUs.ts":{type:"FILE",value:`export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  loading: 'Loading...',
  noCoupon: 'No coupons',
  nameEmpty: 'Please fill in the name',
  telInvalid: 'Malformed phone number',
  vanCalendar: {
    end: 'End',
    start: 'Start',
    confirm: 'Confirm',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => \`\${year}/\${month}\`,
    rangePrompt: (maxRange: number) => \`Choose no more than \${maxRange} days\`,
  },
  vanCascader: {
    select: 'Select',
  },
  vanPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  vanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
    loading: 'Loading...',
  },
  vanSubmitBar: {
    label: 'Total\uFF1A',
  },
  vanCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => \`\${discount * 10}% off\`,
    condition: (condition: number) => \`At least \${condition}\`,
  },
  vanCouponCell: {
    title: 'Coupon',
    count: (count: number) => \`You have \${count} coupons\`,
  },
  vanCouponList: {
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
};
`},"style.less":{type:"FILE",value:`.demo-config-provider {
  background: #fff;

  .iconfont {
    font-size: 24px;
  }

  .vant-doc-demo-block {
    padding: 0 16px;
  }

  .vant-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 8px;
  }
}
`}},key:"config-provider-locale",meta:{title:"\u8BED\u8A00\u5207\u6362"}},P={rateIconFullColor:"#ffcc56",sliderBarHeight:"4px",sliderButtonWidth:"20px",sliderButtonHeight:"20px",sliderActiveBackgroundColor:"#951fff",buttonPrimaryBorderColor:"#951fff",buttonPrimaryBackgroundColor:"#951fff"};var h=()=>{const[u,o]=l.exports.useState(4),[n,p]=l.exports.useState(50);return e("div",{className:"demo-config-prodiver",children:r(s,{themeVars:P,children:[e(c,{label:"\u8BC4\u5206",children:e(B,{value:u,onChange:o})}),e(c,{label:"\u6ED1\u5757",children:e(D,{value:n,onChange:p})}),e("div",{style:{margin:16},children:e(A,{block:!0,round:!0,type:"primary",children:"\u63D0\u4EA4"})})]})})};const S=`import React, { useState } from 'react';
import { ConfigProvider, Button, Rate, Field, Slider } from 'react-vant';
import './style.less';

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default () => {
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);
  return (
    <div className="demo-config-prodiver">
      <ConfigProvider themeVars={themeVars}>
        <Field label="\u8BC4\u5206">
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label="\u6ED1\u5757">
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type="primary">
            \u63D0\u4EA4
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
};
`,k={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ConfigProvider, Button, Rate, Field, Slider } from 'react-vant';
import './style.less';

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default () => {
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);
  return (
    <div className="demo-config-prodiver">
      <ConfigProvider themeVars={themeVars}>
        <Field label="\u8BC4\u5206">
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label="\u6ED1\u5757">
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type="primary">
            \u63D0\u4EA4
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
};
`},"style.less":{type:"FILE",value:`.demo-config-provider {
  background: #fff;

  .iconfont {
    font-size: 24px;
  }

  .vant-doc-demo-block {
    padding: 0 16px;
  }

  .vant-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 8px;
  }
}
`}},key:"config-provider-base",meta:{title:"\u5B9A\u5236\u4E3B\u9898"}},R=function({previewer:u=()=>null,api:o=()=>null}){const n=u;return e("div",{children:r("div",{children:[e("h1",{id:"configprovider-\u5168\u5C40\u914D\u7F6E","data-anchor":"configprovider-\u5168\u5C40\u914D\u7F6E",children:"ConfigProvider \u5168\u5C40\u914D\u7F6E"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e("p",{children:"ConfigProvider \u4F7F\u7528 React \u7684 context \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002"}),e(n,{code:`import { ConfigProvider } from 'react-vant';

export default () => (
  <ConfigProvider>
    <App />
  </ConfigProvider>
);`,lang:"jsx"}),e("h3",{id:"\u8BED\u8A00\u5207\u6362","data-anchor":"\u8BED\u8A00\u5207\u6362",children:"\u8BED\u8A00\u5207\u6362"}),r("p",{children:["\u4F7F\u7528 ",e("code",{children:"locale"})," \u5C5E\u6027\u5207\u6362\u8BED\u8A00\u3002"]}),e("div",{children:e(n,i(t({},y),{children:e(v,{})}))}),e("h3",{id:"\u5B9A\u5236\u4E3B\u9898","data-anchor":"\u5B9A\u5236\u4E3B\u9898",children:"\u5B9A\u5236\u4E3B\u9898"}),r("p",{children:[e("code",{children:"ConfigProvider"})," \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8986\u76D6 CSS \u53D8\u91CF\u7684\u80FD\u529B\uFF0C\u4F60\u9700\u8981\u5728\u6839\u8282\u70B9\u5305\u88F9\u4E00\u4E2A ",e("code",{children:"ConfigProvider"})," \u7EC4\u4EF6\uFF0C\u5E76\u901A\u8FC7 ",e("code",{children:"themeVars"})," \u5C5E\u6027\u6765\u914D\u7F6E\u4E00\u4E9B\u4E3B\u9898\u53D8\u91CF\u3002"]}),e("div",{children:e(n,i(t({},k),{children:e(h,{})}))}),e("blockquote",{children:e("p",{children:"\u6CE8\u610F\uFF1AConfigProvider \u4EC5\u5F71\u54CD\u5B83\u7684\u5B50\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u4E0D\u5F71\u54CD\u5168\u5C40 root \u8282\u70B9\u3002"})}),e("h3",{id:"\u5173\u4E8E\u4E3B\u9898","data-anchor":"\u5173\u4E8E\u4E3B\u9898",children:"\u5173\u4E8E\u4E3B\u9898"}),r("p",{children:["React Vant \u7EC4\u4EF6\u901A\u8FC7\u4E30\u5BCC\u7684 ",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS \u53D8\u91CF"})," \u6765\u7EC4\u7EC7\u6837\u5F0F\uFF0C\u901A\u8FC7\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0C\u53EF\u4EE5\u5B9E\u73B0",e("strong",{children:"\u5B9A\u5236\u4E3B\u9898\u3001\u52A8\u6001\u5207\u6362\u4E3B\u9898"}),"\u7B49\u6548\u679C\u3002"]}),e("h4",{id:"\u793A\u4F8B","data-anchor":"\u793A\u4F8B",children:"\u793A\u4F8B"}),r("p",{children:["\u4EE5 Button \u7EC4\u4EF6\u4E3A\u4F8B\uFF0C\u67E5\u770B\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u53EF\u4EE5\u770B\u5230 ",e("code",{children:".rv-button--primary"})," \u7C7B\u540D\u4E0A\u5B58\u5728\u4EE5\u4E0B\u53D8\u91CF\uFF1A"]}),e(n,{code:`.rv-button--primary {
  color: var(--rv-button-primary-color);
  background-color: var(--rv-button-primary-background-color);
}`,lang:"css"}),r("p",{children:["\u8FD9\u4E9B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u88AB\u5B9A\u4E49\u5728 ",e("code",{children:"root"})," \u8282\u70B9\u4E0A\uFF0CHTML \u6587\u6863\u7684\u4EFB\u4F55\u8282\u70B9\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E9B\u53D8\u91CF\uFF1A"]}),e(n,{code:`:root {
  --rv-white: #fff;
  --rv-blue: #3f45ff;
  --rv-button-primary-color: var(--rv-white);
  --rv-button-primary-background-color: var(--rv-primary-color);
}`,lang:"css"}),e("h3",{id:"\u81EA\u5B9A\u4E49-css-\u53D8\u91CF","data-anchor":"\u81EA\u5B9A\u4E49-css-\u53D8\u91CF",children:"\u81EA\u5B9A\u4E49 CSS \u53D8\u91CF"}),e("h4",{id:"\u901A\u8FC7-css-\u8986\u76D6","data-anchor":"\u901A\u8FC7-css-\u8986\u76D6",children:"\u901A\u8FC7 CSS \u8986\u76D6"}),e("p",{children:"\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u8986\u76D6\u8FD9\u4E9B CSS \u53D8\u91CF\uFF0CButton \u7EC4\u4EF6\u7684\u6837\u5F0F\u4F1A\u968F\u4E4B\u53D1\u751F\u6539\u53D8\uFF1A"}),e(n,{code:`/* \u6DFB\u52A0\u8FD9\u6BB5\u6837\u5F0F\u540E\uFF0CPrimary Button \u4F1A\u53D8\u6210\u7EA2\u8272 */
:root {
  --rv-button-primary-background-color: red;
}`,lang:"css"}),e("h3",{id:"\u57FA\u7840\u53D8\u91CF","data-anchor":"\u57FA\u7840\u53D8\u91CF",children:"\u57FA\u7840\u53D8\u91CF"}),r("p",{children:["React Vant \u4E2D\u7684 CSS \u53D8\u91CF\u5206\u4E3A ",e("strong",{children:"\u57FA\u7840\u53D8\u91CF"})," \u548C ",e("strong",{children:"\u7EC4\u4EF6\u53D8\u91CF"}),"\u3002\u7EC4\u4EF6\u53D8\u91CF\u4F1A\u7EE7\u627F\u57FA\u7840\u53D8\u91CF\uFF0C\u56E0\u6B64\u5728\u4FEE\u6539\u57FA\u7840\u53D8\u91CF\u540E\uFF0C\u4F1A\u5F71\u54CD\u6240\u6709\u76F8\u5173\u7684\u7EC4\u4EF6\u3002"]}),e("h4",{id:"\u4FEE\u6539\u53D8\u91CF","data-anchor":"\u4FEE\u6539\u53D8\u91CF",children:"\u4FEE\u6539\u53D8\u91CF"}),e("p",{children:"\u7531\u4E8E CSS \u53D8\u91CF\u7EE7\u627F\u673A\u5236\u7684\u539F\u56E0\uFF0C\u4E24\u8005\u7684\u4FEE\u6539\u65B9\u5F0F\u6709\u4E00\u5B9A\u5DEE\u5F02\uFF1A"}),r("ul",{children:[r("li",{children:["\u57FA\u7840\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7 ",e("code",{children:"root \u9009\u62E9\u5668"})," \u4FEE\u6539\uFF0C\u4E0D\u80FD\u901A\u8FC7 ",e("code",{children:"ConfigProvider \u7EC4\u4EF6"})," \u4FEE\u6539\u3002"]}),r("li",{children:["\u7EC4\u4EF6\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"root \u9009\u62E9\u5668"})," \u548C ",e("code",{children:"ConfigProvider \u7EC4\u4EF6"})," \u4FEE\u6539\u3002"]})]}),e("h4",{id:"\u53D8\u91CF\u5217\u8868","data-anchor":"\u53D8\u91CF\u5217\u8868",children:"\u53D8\u91CF\u5217\u8868"}),e("p",{children:"\u4E0B\u9762\u662F\u6240\u6709\u7684\u57FA\u7840\u53D8\u91CF\uFF1A"}),e(n,{code:`// Color Palette
--rv-black: #000;
--rv-white: #fff;
--rv-gray-1: #f7f8fa;
--rv-gray-2: #f2f3f5;
--rv-gray-3: #ebedf0;
--rv-gray-4: #dcdee0;
--rv-gray-5: #c8c9cc;
--rv-gray-6: #969799;
--rv-gray-7: #646566;
--rv-gray-8: #323233;
--rv-red: #ee0a24;
--rv-blue: #3f45ff;
--rv-orange: #ff976a;
--rv-orange-dark: #ed6a0c;
--rv-orange-light: #fffbe8;
--rv-green: #07c160;

// Gradient Colors
--rv-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
--rv-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
--rv-primary-color: var(--rv-blue);
--rv-success-color: var(--rv-green);
--rv-danger-color: var(--rv-red);
--rv-warning-color: var(--rv-orange);
--rv-text-color: var(--rv-gray-8);
--rv-active-color: var(--rv-gray-2);
--rv-active-opacity: 0.7;
--rv-disabled-opacity: 0.5;
--rv-background-color: var(--rv-gray-1);
--rv-background-color-light: #fafafa;
--rv-text-link-color: #576b95;

// Padding
--rv-padding-base: 4px;
--rv-padding-xs: 8px;
--rv-padding-sm: 12px;
--rv-padding-md: 16px;
--rv-padding-lg: 24px;
--rv-padding-xl: 32px;

// Font
--rv-font-size-xs: 10px;
--rv-font-size-sm: 12px;
--rv-font-size-md: 14px;
--rv-font-size-lg: 16px;
--rv-font-weight-bold: 500;
--rv-line-height-xs: 14px;
--rv-line-height-sm: 18px;
--rv-line-height-md: 20px;
--rv-line-height-lg: 22px;
--rv-base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial,
  Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
--rv-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
--rv-animation-duration-base: 0.3s;
--rv-animation-duration-fast: 0.2s;
--rv-animation-timing-function-enter: ease-out;
--rv-animation-timing-function-leave: ease-in;

// Border
--rv-border-color: var(--rv-gray-3);
--rv-border-width-base: 1px;
--rv-border-radius-sm: 2px;
--rv-border-radius-md: 4px;
--rv-border-radius-lg: 8px;
--rv-border-radius-max: 999px;`,lang:"less"}),e("p",{children:"\u4F60\u53EF\u4EE5\u5728\u5404\u4E2A\u7EC4\u4EF6\u6587\u6863\u5E95\u90E8\u7684\u8868\u683C\u4E2D\u67E5\u770B\u7EC4\u4EF6\u53D8\u91CF\u3002"}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"themeVars"}),e("td",{children:"\u81EA\u5B9A\u4E49\u4E3B\u9898\u53D8\u91CF"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),r("tr",{children:[e("td",{children:"locale"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8BED\u8A00"}),e("td",{children:e("em",{children:"object"})}),e("td",{children:e("code",{children:"zhCN"})})]}),r("tr",{children:[e("td",{children:"tag"}),r("td",{children:[e("code",{children:"ConfigProdiver"}),"\u5BF9\u5E94\u7684 HTML \u8282\u70B9\u6807\u7B7E\u540D"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"div"})})]})]})]})]})})},N=[{Component:v,key:"config-provider-locale",title:"\u8BED\u8A00\u5207\u6362"},{Component:h,key:"config-provider-base",title:"\u5B9A\u5236\u4E3B\u9898"}],M=void 0,_=[{depth:1,text:"ConfigProvider \u5168\u5C40\u914D\u7F6E",id:"configprovider-\u5168\u5C40\u914D\u7F6E"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:3,text:"\u8BED\u8A00\u5207\u6362",id:"\u8BED\u8A00\u5207\u6362"},{depth:3,text:"\u5B9A\u5236\u4E3B\u9898",id:"\u5B9A\u5236\u4E3B\u9898"},{depth:3,text:"\u5173\u4E8E\u4E3B\u9898",id:"\u5173\u4E8E\u4E3B\u9898"},{depth:4,text:"\u793A\u4F8B",id:"\u793A\u4F8B"},{depth:3,text:"\u81EA\u5B9A\u4E49 CSS \u53D8\u91CF",id:"\u81EA\u5B9A\u4E49-css-\u53D8\u91CF"},{depth:4,text:"\u901A\u8FC7 CSS \u8986\u76D6",id:"\u901A\u8FC7-css-\u8986\u76D6"},{depth:3,text:"\u57FA\u7840\u53D8\u91CF",id:"\u57FA\u7840\u53D8\u91CF"},{depth:4,text:"\u4FEE\u6539\u53D8\u91CF",id:"\u4FEE\u6539\u53D8\u91CF"},{depth:4,text:"\u53D8\u91CF\u5217\u8868",id:"\u53D8\u91CF\u5217\u8868"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"}],L="/src/components/config-provider/README.md",$="ConfigProvider \u5168\u5C40\u914D\u7F6E",w="1658500653000";var V=u=>u.children({MdContent:R,demos:N,frontmatter:M,slugs:_,filePath:L,title:$,updatedTime:w});export{R as MdContent,V as default,N as demos,L as filePath,M as frontmatter,_ as slugs,$ as title,w as updatedTime};
