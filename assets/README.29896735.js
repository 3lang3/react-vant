var S=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(d,e,t)=>e in d?S(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t,s=(d,e)=>{for(var t in e||(e={}))b.call(e,t)&&g(d,t,e[t]);if(C)for(var t of C(e))x.call(e,t)&&g(d,t,e[t]);return d},a=(d,e)=>y(d,v(e));import{r as l,a as u,F as k,j as n}from"./main.531c777e.js";import{B as c,ei as h,da as i}from"./WaterMark.6f52b203.js";function E(d=!1){return{goods_id:"1",quota:5,quota_used:0,start_sale_num:2,goods_info:{price:1,title:"\u6D4B\u8BD5\u5546\u54C1",picture:"https://b.yzcdn.cn/vant/sku/shoes-1.png"},sku:{price:"1.00",stock_num:227,none_sku:!1,hide_stock:!1,collection_id:2261,tree:[{k:"\u989C\u8272",k_s:"s1",k_id:"1",v:[{id:"1",name:"\u7C89\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-1.png"},{id:"2",name:"\u9EC4\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-2.png"},{id:"3",name:"\u84DD\u8272",imgUrl:"https://b.yzcdn.cn/vant/sku/shoes-3.png"}],largeImageMode:d},{k:"\u5C3A\u5BF8",k_s:"s2",k_id:"2",v:[{id:"1",name:"\u5927"},{id:"2",name:"\u5C0F"}]}],list:[{id:2259,s1:"2",s2:"1",price:100,discount:100,stock_num:110},{id:2260,s1:"3",s2:"1",price:100,discount:100,stock_num:99},{id:2257,s1:"1",s2:"1",price:100,discount:100,stock_num:111},{id:2258,s1:"1",s2:"2",price:100,discount:100,stock_num:6}]},properties:[{k:"\u52A0\u6599",k_id:124,is_multiple:!0,v:[{id:1224,name:"\u5E03\u4E01",price:3},{id:1225,name:"\u6CE2\u9738",price:4},{id:1226,name:"\u73CD\u73E0",price:5}]},{k:"\u975E\u5FC5\u9009\u5C5E\u6027",k_id:125,is_multiple:!0,is_necessary:!1,v:[{id:1234,name:"\u5C5E\u60271",price:3},{id:1235,name:"\u5C5E\u60272",price:4}]},{k:"\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879",k_id:126,is_multiple:!0,v:[{id:1244,name:"\u5C5E\u6027a",price:0},{id:1245,name:"\u5C5E\u6027b",price:0}]}]}}const I={selectedNum:3,selectedSku:{s1:"1",s2:"1"},selectedProp:{124:[1225,1226]}},p=E();var f=()=>{const d=l.exports.useRef(null);return u(k,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",style:{marginBottom:10},onClick:()=>{var e;return(e=d.current)==null?void 0:e.show()},children:"\u57FA\u7840\u7528\u6CD5"}),n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var e;return(e=d.current)==null?void 0:e.show(I)},children:"\u8BBE\u7F6E\u9ED8\u8BA4\u503C"}),n(h,{ref:d,sku:p.sku,goods:p.goods_info,goodsId:p.goods_id,properties:p.properties,onAddCart:e=>i(JSON.stringify(e)),onBuyClicked:e=>i(JSON.stringify(e))})]})};const T={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData, initialSku } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        \u8BBE\u7F6E\u9ED8\u8BA4\u503C
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData, initialSku } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        \u8BBE\u7F6E\u9ED8\u8BA4\u503C
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  };
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
};
`}},key:"sku-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},o=E(),N={quotaText:"\u5355\u6B21\u9650\u8D2D100\u4EF6",stockFormatter:d=>`\u5269\u4F59${d}`,handleOverLimit:d=>{const{action:e,limitType:t,quota:F,startSaleNum:D=1}=d;e==="minus"?i(D>1?`${D}\u4EF6\u8D77\u552E`:"\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1"):e==="plus"&&(t===0?i(`\u9650\u8D2D${F}\u4EF6`):i("\u5E93\u5B58\u4E0D\u591F\u4E86"))}};var B=()=>{const d=l.exports.useRef(null);return u(k,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var e;return(e=d.current)==null?void 0:e.show()},children:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}),n(h,{ref:d,sku:o.sku,goods:o.goods_info,goodsId:o.goods_id,properties:o.properties,quota:o.quota,quotaUsed:o.quota_used,startSaleNum:o.start_sale_num,onBuyClicked:e=>console.log(e),onStepperChange:e=>console.log(e),customStepperConfig:N})]})};const q={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

const customStepperConfig = {
  quotaText: '\u5355\u6B21\u9650\u8D2D100\u4EF6',
  stockFormatter: (stock) => \`\u5269\u4F59\${stock}\`,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;
    if (action === 'minus') {
      Toast(startSaleNum > 1 ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      if (limitType === 0) {
        Toast(\`\u9650\u8D2D\${quota}\u4EF6\`);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
};

export default () => {
  const ref = useRef<SkuInstance>(null);
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

const customStepperConfig = {
  quotaText: '\u5355\u6B21\u9650\u8D2D100\u4EF6',
  stockFormatter: (stock) => \`\u5269\u4F59\${stock}\`,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;
    if (action === 'minus') {
      Toast(startSaleNum > 1 ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      if (limitType === 0) {
        Toast(\`\u9650\u8D2D\${quota}\u4EF6\`);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
};

export default () => {
  const ref = useRef<SkuInstance>(null);
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={(r) => console.log(r)}
        onStepperChange={(v) => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  };
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
};
`}},key:"sku-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}},m=E(!0);var A=()=>{const d=l.exports.useRef();return u(k,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var e;return(e=d.current)==null?void 0:e.show()},children:"\u5927\u56FE\u6A21\u5F0F"}),n(h,{ref:d,sku:m.sku,goods:m.goods_info,goodsId:m.goods_id,properties:m.properties,disableStepperInput:!0})]})};const R={code:`import React, { useRef } from 'react';
import { Sku, Button } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoDataLarge = getSkuData(true);

export default () => {
  const ref = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u5927\u56FE\u6A21\u5F0F
      </Button>
      <Sku
        ref={ref}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoDataLarge = getSkuData(true);

export default () => {
  const ref = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        \u5927\u56FE\u6A21\u5F0F
      </Button>
      <Sku
        ref={ref}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  };
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
};
`}},key:"sku-demo-2",meta:{title:"\u5927\u56FE\u6A21\u5F0F"}},r=E();var _=()=>{const d=l.exports.useRef(),e=l.exports.useRef();return u(k,{children:[n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",style:{marginBottom:10},onClick:()=>{var t;return(t=d.current)==null?void 0:t.show()},children:"\u81EA\u5B9A\u4E49\u89C6\u56FE"}),n(c,{block:!0,type:"primary",color:"linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)",onClick:()=>{var t;return(t=e.current)==null?void 0:t.show()},children:"\u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219"}),n(h,{ref:d,sku:r.sku,goods:r.goods_info,goodsId:r.goods_id,properties:r.properties,skuHeaderPriceRender:t=>`\u{1F604} \xA5 ${t}`,skuActionsTop:n("div",{style:{padding:5,color:"#f44336",fontSize:12,textAlign:"center",backgroundColor:"#f2f2f2"},children:"\u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427"})}),n(h,{ref:e,sku:r.sku,goods:r.goods_info,goodsId:r.goods_id,properties:r.properties,onAddCart:t=>i(JSON.stringify(t)),onBuyClicked:t=>i(JSON.stringify(t)),customSkuValidator:(t,F)=>(console.log(t,F),i("\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01"),!1)})]})};const P={code:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref1 = useRef<SkuInstance>();
  const ref2 = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref1.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u89C6\u56FE
      </Button>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref2.current?.show()}
      >
        \u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219
      </Button>
      <Sku
        ref={ref1}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        skuHeaderPriceRender={(price) => {
          return \`\u{1F604} \xA5 \${price}\`;
        }}
        skuActionsTop={
          <div
            style={{
              padding: 5,
              color: '#f44336',
              fontSize: 12,
              textAlign: 'center',
              backgroundColor: '#f2f2f2',
            }}
          >
            \u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427
          </div>
        }
      />
      <Sku
        ref={ref2}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
        customSkuValidator={(actionType, selected) => {
          console.log(actionType, selected);
          Toast('\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01');
          return false;
        }}
      />
    </>
  );
};`,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Sku, Button, Toast } from 'react-vant';
import type { SkuInstance } from 'react-vant';
import { getSkuData } from './demo/data';

const demoData = getSkuData();

export default () => {
  const ref1 = useRef<SkuInstance>();
  const ref2 = useRef<SkuInstance>();
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref1.current?.show()}
      >
        \u81EA\u5B9A\u4E49\u89C6\u56FE
      </Button>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref2.current?.show()}
      >
        \u81EA\u5B9A\u4E49SKU\u6821\u9A8C\u89C4\u5219
      </Button>
      <Sku
        ref={ref1}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        skuHeaderPriceRender={(price) => {
          return \`\u{1F604} \xA5 \${price}\`;
        }}
        skuActionsTop={
          <div
            style={{
              padding: 5,
              color: '#f44336',
              fontSize: 12,
              textAlign: 'center',
              backgroundColor: '#f2f2f2',
            }}
          >
            \u5546\u54C1\u4E0D\u591A\uFF0C\u8D76\u5FEB\u8D2D\u4E70\u5427
          </div>
        }
      />
      <Sku
        ref={ref2}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={(value) => Toast(JSON.stringify(value))}
        onBuyClicked={(value) => Toast(JSON.stringify(value))}
        customSkuValidator={(actionType, selected) => {
          console.log(actionType, selected);
          Toast('\u4E0D\u7BA1\u600E\u6837 \u90FD\u4E0D\u901A\u8FC7\uFF01');
          return false;
        }}
      />
    </>
  );
};`},"demo/data.ts":{type:"FILE",value:`export function getSkuData(largeImageMode = false) {
  return {
    goods_id: '1',
    quota: 5,
    quota_used: 0,
    start_sale_num: 2,
    goods_info: {
      price: 1,
      title: '\u6D4B\u8BD5\u5546\u54C1',
      picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
    },
    sku: {
      price: '1.00',
      stock_num: 227,
      none_sku: false,
      hide_stock: false,
      collection_id: 2261,
      tree: [
        {
          k: '\u989C\u8272',
          k_s: 's1',
          k_id: '1',
          v: [
            {
              id: '1',
              name: '\u7C89\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
            },
            {
              id: '2',
              name: '\u9EC4\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
            },
            {
              id: '3',
              name: '\u84DD\u8272',
              imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
            },
          ],
          largeImageMode,
        },
        {
          k: '\u5C3A\u5BF8',
          k_s: 's2',
          k_id: '2',
          v: [
            {
              id: '1',
              name: '\u5927',
            },
            {
              id: '2',
              name: '\u5C0F',
            },
          ],
        },
      ],
      list: [
        {
          id: 2259,
          s1: '2',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 110,
        },
        {
          id: 2260,
          s1: '3',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 99,
        },
        {
          id: 2257,
          s1: '1',
          s2: '1',
          price: 100,
          discount: 100,
          stock_num: 111,
        },
        {
          id: 2258,
          s1: '1',
          s2: '2',
          price: 100,
          discount: 100,
          stock_num: 6,
        },
      ],
    },
    properties: [
      {
        k: '\u52A0\u6599',
        k_id: 124,
        is_multiple: true,
        v: [
          {
            id: 1224,
            name: '\u5E03\u4E01',
            price: 3,
          },
          {
            id: 1225,
            name: '\u6CE2\u9738',
            price: 4,
          },
          {
            id: 1226,
            name: '\u73CD\u73E0',
            price: 5,
          },
        ],
      },
      {
        k: '\u975E\u5FC5\u9009\u5C5E\u6027',
        k_id: 125,
        is_multiple: true,
        is_necessary: false,
        v: [
          {
            id: 1234,
            name: '\u5C5E\u60271',
            price: 3,
          },
          {
            id: 1235,
            name: '\u5C5E\u60272',
            price: 4,
          },
        ],
      },
      {
        k: '\u672A\u52A0\u4EF7\u7684\u5C5E\u6027\u9879',
        k_id: 126,
        is_multiple: true,
        v: [
          {
            id: 1244,
            name: '\u5C5E\u6027a',
            price: 0,
          },
          {
            id: 1245,
            name: '\u5C5E\u6027b',
            price: 0,
          },
        ],
      },
    ],
  };
}

export const initialSku = {
  selectedNum: 3,
  selectedSku: {
    s1: '1',
    s2: '1',
  },
  selectedProp: {
    124: [1225, 1226],
  },
};
`}},key:"sku-demo-3",meta:{title:"\u81EA\u5B9A\u4E49"}},w=function({previewer:d=()=>null,api:e=()=>null}){const t=d;return n("div",{children:u("div",{children:[n("h1",{id:"sku-\u5546\u54C1\u89C4\u683C","data-anchor":"sku-\u5546\u54C1\u89C4\u683C",children:"Sku \u5546\u54C1\u89C4\u683C"}),n("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),n(t,{code:"import { Sku } from 'react-vant';",lang:"js"}),n("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),n(t,a(s({},T),{children:n(f,{})})),n("h3",{id:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668","data-anchor":"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668",children:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"}),n(t,a(s({},q),{children:n(B,{})})),n("h3",{id:"\u5927\u56FE\u6A21\u5F0F","data-anchor":"\u5927\u56FE\u6A21\u5F0F",children:"\u5927\u56FE\u6A21\u5F0F"}),n(t,a(s({},R),{children:n(A,{})})),n("h3",{id:"\u81EA\u5B9A\u4E49","data-anchor":"\u81EA\u5B9A\u4E49",children:"\u81EA\u5B9A\u4E49"}),n(t,a(s({},P),{children:n(_,{})})),n("h2",{id:"api","data-anchor":"api",children:"API"}),n("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"sku"}),n("td",{children:"\u5546\u54C1 sku \u6570\u636E"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"goods"}),n("td",{children:"\u5546\u54C1\u4FE1\u606F"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"goodsId"}),n("td",{children:"\u5546\u54C1 id"}),n("td",{children:n("em",{children:"number | string"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"priceTag"}),n("td",{children:"\u663E\u793A\u5728\u4EF7\u683C\u540E\u9762\u7684\u6807\u7B7E"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"hideStock"}),n("td",{children:"\u662F\u5426\u663E\u793A\u5546\u54C1\u5269\u4F59\u5E93\u5B58"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"hideQuotaText"}),n("td",{children:"\u662F\u5426\u663E\u793A\u9650\u8D2D\u63D0\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"hideSelectedText"}),n("td",{children:"\u662F\u5426\u9690\u85CF\u5DF2\u9009\u63D0\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"stockThreshold"}),n("td",{children:"\u5E93\u5B58\u9608\u503C\u3002\u4F4E\u4E8E\u8FD9\u4E2A\u503C\u4F1A\u628A\u5E93\u5B58\u6570\u9AD8\u4EAE\u663E\u793A"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"50"})})]}),u("tr",{children:[n("td",{children:"showAddCartBtn"}),n("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u5165\u8D2D\u7269\u8F66\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"buyText"}),n("td",{children:"\u8D2D\u4E70\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u7ACB\u5373\u8D2D\u4E70"})})]}),u("tr",{children:[n("td",{children:"addCartText"}),n("td",{children:"\u52A0\u5165\u8D2D\u7269\u8F66\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"\u52A0\u5165\u8D2D\u7269\u8F66"})})]}),u("tr",{children:[n("td",{children:"quota"}),n("td",{children:"\u9650\u8D2D\u6570\uFF0C0 \u8868\u793A\u4E0D\u9650\u8D2D"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"0"})})]}),u("tr",{children:[n("td",{children:"quotaUsed"}),n("td",{children:"\u5DF2\u7ECF\u8D2D\u4E70\u8FC7\u7684\u6570\u91CF"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"0"})})]}),u("tr",{children:[n("td",{children:"resetOnHide"}),n("td",{children:"\u9690\u85CF\u65F6\u91CD\u7F6E\u9009\u62E9\u7684\u5546\u54C1\u6570\u91CF"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"disableStepperInput"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668\u8F93\u5165"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"closeOnClickOverlay"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"stepperTitle"}),n("td",{children:"\u6570\u91CF\u9009\u62E9\u7EC4\u4EF6\u5DE6\u4FA7\u6587\u6848"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:n("code",{children:"\u8D2D\u4E70\u6570\u91CF"})})]}),u("tr",{children:[n("td",{children:"customStepperConfig"}),n("td",{children:"\u6B65\u8FDB\u5668\u76F8\u5173\u81EA\u5B9A\u4E49\u914D\u7F6E"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:u("code",{children:["{","}"]})})]}),u("tr",{children:[n("td",{children:"customSkuValidator"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u6821\u9A8C\u89C4\u5219"}),n("td",{children:n("em",{children:"(type,selectedValue) => void | boolean | Promise<boolean>"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"initialSku"}),n("td",{children:"\u9ED8\u8BA4\u9009\u4E2D\u7684 sku\uFF0C\u5177\u4F53\u53C2\u8003\u9AD8\u7EA7\u7528\u6CD5"}),n("td",{children:n("em",{children:"object"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"getContainer"}),u("td",{children:["\u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C",n("a",{href:"/components/popup#zhi-ding-gua-zai-wei-zhi",children:"\u7528\u6CD5\u793A\u4F8B"})]}),n("td",{children:n("em",{children:"string | () => Element"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"showSoldoutSku"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u552E\u7F44\u7684 sku\uFF0C\u9ED8\u8BA4\u5C55\u793A\u5E76\u7F6E\u7070"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"disableSoldoutSku"}),n("td",{children:"\u662F\u5426\u7981\u7528\u552E\u7F44\u7684 sku"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"safeAreaInsetBottom"}),u("td",{children:["\u662F\u5426\u5F00\u542F",n("a",{href:"/guide/advanced-usage",children:"\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"})]}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"startSaleNum"}),n("td",{children:"\u8D77\u552E\u6570\u91CF"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:n("code",{children:"1"})})]}),u("tr",{children:[n("td",{children:"properties"}),n("td",{children:"\u5546\u54C1\u5C5E\u6027"}),n("td",{children:n("em",{children:"array"})}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"previewOnClickImage"}),n("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u5546\u54C1\u56FE\u7247\u65F6\u81EA\u52A8\u9884\u89C8"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"showHeaderImage"}),n("td",{children:"\u662F\u5426\u5C55\u793A\u5934\u90E8\u56FE\u7247"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"true"})})]}),u("tr",{children:[n("td",{children:"lazyload"}),n("td",{children:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),u("tr",{children:[n("td",{children:"bodyOffsetTop"}),n("td",{children:"sku \u8DDD\u89C6\u7A97\u9876\u90E8\u8DDD\u79BB"}),n("td",{children:n("em",{children:"number"})}),n("td",{children:"200"})]})]})]}),n("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u4E8B\u4EF6\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"onAddCart"}),n("td",{children:"\u70B9\u51FB\u6DFB\u52A0\u8D2D\u7269\u8F66\u56DE\u8C03"}),n("td",{children:"skuData: object"})]}),u("tr",{children:[n("td",{children:"onBuyClicked"}),n("td",{children:"\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03"}),n("td",{children:"skuData: object"})]}),u("tr",{children:[n("td",{children:"onStepperChange"}),n("td",{children:"\u8D2D\u4E70\u6570\u91CF\u53D8\u5316\u65F6\u89E6\u53D1"}),n("td",{children:"value: number"})]}),u("tr",{children:[n("td",{children:"onSkuSelected"}),n("td",{children:"\u5207\u6362\u89C4\u683C\u7C7B\u76EE\u65F6\u89E6\u53D1"}),u("td",{children:["{"," skuValue, selectedSku, selectedSkuComb ","}"]})]}),u("tr",{children:[n("td",{children:"onSkuPropSelected"}),n("td",{children:"\u5207\u6362\u5546\u54C1\u5C5E\u6027\u65F6\u89E6\u53D1"}),u("td",{children:["{"," propValue, selectedProp, selectedSkuComb ","}"]})]}),u("tr",{children:[n("td",{children:"onOpenPreview"}),n("td",{children:"\u6253\u5F00\u5546\u54C1\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),n("td",{children:"data: object"})]}),u("tr",{children:[n("td",{children:"onClosePreview"}),n("td",{children:"\u5173\u95ED\u5546\u54C1\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),n("td",{children:"data: object"})]})]})]}),n("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),n("p",{children:"\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Sku \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u65B9\u6CD5\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8FD4\u56DE\u503C"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"getSkuData"}),n("td",{children:"\u83B7\u53D6\u5F53\u524D skuData"}),n("td",{children:"-"}),n("td",{children:"skuData"})]}),u("tr",{children:[n("td",{children:"reset"}),n("td",{children:"\u91CD\u7F6E Sku \u5230\u521D\u59CB\u72B6\u6001"}),n("td",{children:"-"}),n("td",{children:"-"})]}),u("tr",{children:[n("td",{children:"show"}),n("td",{children:"\u6253\u5F00 Sku\uFF0C\u652F\u6301\u8BBE\u7F6E\u9ED8\u8BA4\u503C"}),n("td",{children:"initialValue"}),n("td",{children:"-"})]})]})]}),n("h3",{id:"\u81EA\u5B9A\u4E49\u6E32\u67D3","data-anchor":"\u81EA\u5B9A\u4E49\u6E32\u67D3",children:"\u81EA\u5B9A\u4E49\u6E32\u67D3"}),n("p",{children:"Sku \u7EC4\u4EF6\u9ED8\u8BA4\u5212\u5206\u597D\u4E86\u82E5\u5E72\u533A\u5757\uFF0C\u8FD9\u4E9B\u533A\u5757\u90FD\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u53EF\u4EE5\u6309\u9700\u8FDB\u884C\u66FF\u6362\u3002\u533A\u5757\u987A\u5E8F\u89C1\u4E0B\u8868\uFF1A"}),u("table",{children:[n("thead",{children:u("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u8BF4\u660E"})]})}),u("tbody",{children:[u("tr",{children:[n("td",{children:"skuHeader"}),n("td",{children:"\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5305\u542B\u5546\u54C1\u56FE\u7247\u3001\u540D\u79F0\u3001\u4EF7\u683C\u7B49\u4FE1\u606F"})]}),u("tr",{children:[n("td",{children:"skuHeaderPrice"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u4EF7\u683C\u5C55\u793A"})]}),u("tr",{children:[n("td",{children:"skuHeaderOriginPrice"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u539F\u4EF7\u5C55\u793A"})]}),u("tr",{children:[n("td",{children:"skuHeaderExtra"}),n("td",{children:"\u989D\u5916 sku \u5934\u90E8\u533A\u57DF"})]}),u("tr",{children:[n("td",{children:"skuHeaderImageExtra"}),n("td",{children:"\u81EA\u5B9A\u4E49 sku \u5934\u90E8\u56FE\u7247\u989D\u5916\u7684\u5C55\u793A"})]}),u("tr",{children:[n("td",{children:"skuBodyTop"}),n("td",{children:"sku \u5C55\u793A\u533A\u4E0A\u65B9\u7684\u5185\u5BB9\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\uFF0C\u6309\u9700\u4F7F\u7528"})]}),u("tr",{children:[n("td",{children:"skuGroup"}),n("td",{children:"\u5546\u54C1 sku \u5C55\u793A\u533A"})]}),u("tr",{children:[n("td",{children:"skuGroupExtra"}),n("td",{children:"\u989D\u5916\u5546\u54C1 sku \u5C55\u793A\u533A\uFF0C\u4E00\u822C\u7528\u4E0D\u5230"})]}),u("tr",{children:[n("td",{children:"skuStepper"}),n("td",{children:"\u5546\u54C1\u6570\u91CF\u9009\u62E9\u533A"})]}),u("tr",{children:[n("td",{children:"skuActionsTop"}),n("td",{children:"\u64CD\u4F5C\u6309\u94AE\u533A\u9876\u90E8\u5185\u5BB9\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9\uFF0C\u6309\u9700\u4F7F\u7528"})]}),u("tr",{children:[n("td",{children:"skuActions"}),n("td",{children:"\u64CD\u4F5C\u6309\u94AE\u533A"})]})]})]}),n("h3",{id:"sku-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"sku-\u5BF9\u8C61\u7ED3\u6784",children:"sku \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`sku: {
  // \u6240\u6709sku\u89C4\u683C\u7C7B\u76EE\u4E0E\u5176\u503C\u7684\u4ECE\u5C5E\u5173\u7CFB\uFF0C\u6BD4\u5982\u5546\u54C1\u6709\u989C\u8272\u548C\u5C3A\u7801\u4E24\u5927\u7C7B\u89C4\u683C\uFF0C\u989C\u8272\u4E0B\u9762\u53C8\u6709\u7EA2\u8272\u548C\u84DD\u8272\u4E24\u4E2A\u89C4\u683C\u503C\u3002
  // \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u5546\u54C1\u53EF\u4EE5\u6709\u591A\u4E2A\u89C4\u683C\u7C7B\u76EE\uFF0C\u4E00\u4E2A\u89C4\u683C\u7C7B\u76EE\u4E0B\u53EF\u4EE5\u6709\u591A\u4E2A\u89C4\u683C\u503C\u3002
  tree: [
    {
      k: '\u989C\u8272', // skuKeyName\uFF1A\u89C4\u683C\u7C7B\u76EE\u540D\u79F0
      k_s: 's1', // skuKeyStr\uFF1Asku \u7EC4\u5408\u5217\u8868\uFF08\u4E0B\u65B9 list\uFF09\u4E2D\u5F53\u524D\u7C7B\u76EE\u5BF9\u5E94\u7684 key \u503C\uFF0Cvalue \u503C\u4F1A\u662F\u4ECE\u5C5E\u4E8E\u5F53\u524D\u7C7B\u76EE\u7684\u4E00\u4E2A\u89C4\u683C\u503C id
      v: [
        {
          id: '1', // skuValueId\uFF1A\u89C4\u683C\u503C id
          name: '\u7EA2\u8272', // skuValueName\uFF1A\u89C4\u683C\u503C\u540D\u79F0
          imgUrl: 'https://img01.yzcdn.cn/1.jpg', // \u89C4\u683C\u7C7B\u76EE\u56FE\u7247\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u89C4\u683C\u7C7B\u76EE\u53EF\u4EE5\u5B9A\u4E49\u56FE\u7247
          previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // \u7528\u4E8E\u9884\u89C8\u663E\u793A\u7684\u89C4\u683C\u7C7B\u76EE\u56FE\u7247
        },
        {
          id: '1',
          name: '\u84DD\u8272',
          imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
        }
      ],
      largeImageMode: true, //  \u662F\u5426\u5C55\u793A\u5927\u56FE\u6A21\u5F0F
    }
  ],
  // \u6240\u6709 sku \u7684\u7EC4\u5408\u5217\u8868\uFF0C\u6BD4\u5982\u7EA2\u8272\u3001M \u7801\u4E3A\u4E00\u4E2A sku \u7EC4\u5408\uFF0C\u7EA2\u8272\u3001S \u7801\u4E3A\u53E6\u4E00\u4E2A\u7EC4\u5408
  list: [
    {
      id: 2259, // skuId
      s1: '1', // \u89C4\u683C\u7C7B\u76EE k_s \u4E3A s1 \u7684\u5BF9\u5E94\u89C4\u683C\u503C id
      s2: '1', // \u89C4\u683C\u7C7B\u76EE k_s \u4E3A s2 \u7684\u5BF9\u5E94\u89C4\u683C\u503C id
      price: 100, // \u4EF7\u683C\uFF08\u5355\u4F4D\u5206\uFF09
      stock_num: 110 // \u5F53\u524D sku \u7EC4\u5408\u5BF9\u5E94\u7684\u5E93\u5B58
    }
  ],
  price: '1.00', // \u9ED8\u8BA4\u4EF7\u683C\uFF08\u5355\u4F4D\u5143\uFF09
  stock_num: 227, // \u5546\u54C1\u603B\u5E93\u5B58
  collection_id: 2261, // \u65E0\u89C4\u683C\u5546\u54C1 skuId \u53D6 collection_id\uFF0C\u5426\u5219\u53D6\u6240\u9009 sku \u7EC4\u5408\u5BF9\u5E94\u7684 id
  none_sku: false, // \u662F\u5426\u65E0\u89C4\u683C\u5546\u54C1
  messages: [
    {
      // \u5546\u54C1\u7559\u8A00
      datetime: '0', // \u7559\u8A00\u7C7B\u578B\u4E3A time \u65F6\uFF0C\u662F\u5426\u542B\u65E5\u671F\u3002'1' \u8868\u793A\u5305\u542B
      multiple: '0', // \u7559\u8A00\u7C7B\u578B\u4E3A text \u65F6\uFF0C\u662F\u5426\u591A\u884C\u6587\u672C\u3002'1' \u8868\u793A\u591A\u884C
      name: '\u7559\u8A00', // \u7559\u8A00\u540D\u79F0
      type: 'text', // \u7559\u8A00\u7C7B\u578B\uFF0C\u53EF\u9009: id_no\uFF08\u8EAB\u4EFD\u8BC1\uFF09, text, tel, date, time, email
      required: '1', // \u662F\u5426\u5FC5\u586B '1' \u8868\u793A\u5FC5\u586B
      placeholder: '', // \u53EF\u9009\u503C\uFF0C\u5360\u4F4D\u6587\u672C
      extraDesc: ''  // \u53EF\u9009\u503C\uFF0C\u9644\u52A0\u63CF\u8FF0\u6587\u6848
    }
  ],
  hide_stock: false // \u662F\u5426\u9690\u85CF\u5269\u4F59\u5E93\u5B58
}`,lang:"js"}),n("h3",{id:"properties-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"properties-\u5BF9\u8C61\u7ED3\u6784",children:"properties \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`[
  // \u5546\u54C1\u5C5E\u6027
  {
    k_id: 123, // \u5C5E\u6027id
    k: '\u52A0\u6599', // \u5C5E\u6027\u540D
    is_multiple: true, // \u662F\u5426\u53EF\u591A\u9009
    v: [
      {
        id: 1222, // \u5C5E\u6027\u503Cid
        name: '\u73CD\u73E0', // \u5C5E\u6027\u503C\u540D
        price: 1, // \u5C5E\u6027\u503C\u52A0\u4EF7
      },
      {
        id: 1223,
        name: '\u6930\u679C',
        price: 1,
      },
    ],
  },
];`,lang:"js"}),n("h3",{id:"initialsku-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"initialsku-\u5BF9\u8C61\u7ED3\u6784",children:"initialSku \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`{
  // \u521D\u59CB\u9009\u4E2D\u6570\u91CF
  selectedNum: 3,
  selectedSku: {
    // \u952E\uFF1AskuKeyStr\uFF08sku \u7EC4\u5408\u5217\u8868\u4E2D\u5F53\u524D\u7C7B\u76EE\u5BF9\u5E94\u7684 key \u503C\uFF09
    // \u503C\uFF1AskuValueId\uFF08\u89C4\u683C\u503C id\uFF09
    s1: '1',
    s2: '1',
  }
  // \u521D\u59CB\u9009\u4E2D\u7684\u5546\u54C1\u5C5E\u6027
  selectedProp: {
    // \u952E\uFF1A\u5C5E\u6027id
    // \u503C\uFF1A\u5C5E\u6027\u503Cid\u5217\u8868
    123: [1222]
  }
}`,lang:"js"}),n("h3",{id:"goods-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"goods-\u5BF9\u8C61\u7ED3\u6784",children:"goods \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`goods: {
  // \u9ED8\u8BA4\u5546\u54C1 sku \u7F29\u7565\u56FE
  picture: 'https://img01.yzcdn.cn/1.jpg';
}`,lang:"js"}),n("h3",{id:"customstepperconfig-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"customstepperconfig-\u5BF9\u8C61\u7ED3\u6784",children:"customStepperConfig \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`customStepperConfig: {
  // \u81EA\u5B9A\u4E49\u9650\u8D2D\u6587\u6848
  quotaText: '\u6BCF\u6B21\u9650\u8D2Dxxx\u4EF6',
  // \u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668\u8D85\u8FC7\u9650\u5236\u65F6\u7684\u56DE\u8C03
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1  ? \`\${startSaleNum}\u4EF6\u8D77\u552E\` : '\u81F3\u5C11\u9009\u62E9\u4E00\u4EF6\u5546\u54C1');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = \`\u5355\u6B21\u9650\u8D2D\${quota}\u4EF6\`;
        if (quotaUsed > 0) msg += \`\uFF0C\u4F60\u5DF2\u8D2D\u4E70\${quotaUsed}\`;
        Toast(msg);
      } else {
        Toast('\u5E93\u5B58\u4E0D\u591F\u4E86');
      }
    }
  },
  // \u6B65\u8FDB\u5668\u53D8\u5316\u7684\u56DE\u8C03
  handleStepperChange: currentValue => {},
  // \u5E93\u5B58
  stockNum: 1999,
}`,lang:"js"}),n("h3",{id:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684-skudata-\u5BF9\u8C61\u7ED3\u6784","data-anchor":"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684-skudata-\u5BF9\u8C61\u7ED3\u6784",children:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684 skuData \u5BF9\u8C61\u7ED3\u6784"}),n(t,{code:`skuData: {
  // \u5546\u54C1 id
  goodsId: '946755',
  // \u9009\u62E9\u7684\u5546\u54C1\u6570\u91CF
  selectedNum: 1,
  // \u9009\u62E9\u7684 sku \u7EC4\u5408
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111,
    properties: [
      {
        k_id: 123,
        k: '\u52A0\u6599',
        is_multiple: true,
        v: [
          {
            id: 1223,
            name: '\u6930\u679C',
            price: 1
          }
        ]
      }
    ],
    property_price: 1
  },
}`,lang:"js"})]})})},z=[{Component:f,key:"sku-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:B,key:"sku-demo-1",title:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"},{Component:A,key:"sku-demo-2",title:"\u5927\u56FE\u6A21\u5F0F"},{Component:_,key:"sku-demo-3",title:"\u81EA\u5B9A\u4E49"}],U={simulator:{compact:!1,style:{background:"#fff"}}},M=[{depth:1,text:"Sku \u5546\u54C1\u89C4\u683C",id:"sku-\u5546\u54C1\u89C4\u683C"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668",id:"\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668"},{depth:3,text:"\u5927\u56FE\u6A21\u5F0F",id:"\u5927\u56FE\u6A21\u5F0F"},{depth:3,text:"\u81EA\u5B9A\u4E49",id:"\u81EA\u5B9A\u4E49"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"\u81EA\u5B9A\u4E49\u6E32\u67D3",id:"\u81EA\u5B9A\u4E49\u6E32\u67D3"},{depth:3,text:"sku \u5BF9\u8C61\u7ED3\u6784",id:"sku-\u5BF9\u8C61\u7ED3\u6784"},{depth:3,text:"properties \u5BF9\u8C61\u7ED3\u6784",id:"properties-\u5BF9\u8C61\u7ED3\u6784"},{depth:3,text:"initialSku \u5BF9\u8C61\u7ED3\u6784",id:"initialsku-\u5BF9\u8C61\u7ED3\u6784"},{depth:3,text:"goods \u5BF9\u8C61\u7ED3\u6784",id:"goods-\u5BF9\u8C61\u7ED3\u6784"},{depth:3,text:"customStepperConfig \u5BF9\u8C61\u7ED3\u6784",id:"customstepperconfig-\u5BF9\u8C61\u7ED3\u6784"},{depth:3,text:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684 skuData \u5BF9\u8C61\u7ED3\u6784",id:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u548C\u70B9\u51FB\u8D2D\u4E70\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u7684-skudata-\u5BF9\u8C61\u7ED3\u6784"}],L="/src/components/sku/README.md",O="Sku \u5546\u54C1\u89C4\u683C",j="1658500653000";var H=d=>d.children({MdContent:w,demos:z,frontmatter:U,slugs:M,filePath:L,title:O,updatedTime:j});export{w as MdContent,H as default,z as demos,L as filePath,U as frontmatter,M as slugs,O as title,j as updatedTime};
