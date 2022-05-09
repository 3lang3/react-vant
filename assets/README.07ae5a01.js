var f=Object.defineProperty,k=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var h=(t,r,n)=>r in t?f(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,c=(t,r)=>{for(var n in r||(r={}))y.call(r,n)&&h(t,n,r[n]);if(o)for(var n of o(r))g.call(r,n)&&h(t,n,r[n]);return t},i=(t,r)=>k(t,P(r));import{a as e,F as D,j as u,r as a}from"./main.cc295cd4.js";import{dx as d,d9 as l,j as N,dc as b}from"./index.c79ab82b.js";const F=["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"],I=[{text:"\u5357\u4EAC",disabled:!0},{text:"\u82CF\u5DDE"},{text:"\u626C\u5DDE"}];var s=()=>{const t=(r,n)=>l(`\u5F53\u524D\u503C\uFF1A${r}, \u5F53\u524D\u7D22\u5F15\uFF1A${n}`);return e(D,{children:[u(d,{title:"\u57FA\u7840\u4F7F\u7528",columns:F,onChange:t,onCancel:()=>l.info("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE"),onConfirm:()=>l.info("\u70B9\u51FB\u786E\u8BA4\u6309\u94AE")}),u("br",{}),u(d,{title:"\u9ED8\u8BA4\u9009\u4E2D",defaultIndex:2,columns:F,onChange:t}),u("br",{}),u(d,{title:"\u7981\u7528\u9009\u9879",columns:I})]})};const _=`import React from 'react';
import { Picker, Toast } from 'react-vant';

const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];
const disabledColumns = [{ text: '\u5357\u4EAC', disabled: true }, { text: '\u82CF\u5DDE' }, { text: '\u626C\u5DDE' }];

export default () => {
  const onChange = (value: string, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`);

  return (
    <>
      <Picker
        title="\u57FA\u7840\u4F7F\u7528"
        columns={columns}
        onChange={onChange}
        onCancel={() => Toast.info('\u70B9\u51FB\u53D6\u6D88\u6309\u94AE')}
        onConfirm={() => Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')}
      />
      <br />
      <Picker title="\u9ED8\u8BA4\u9009\u4E2D" defaultIndex={2} columns={columns} onChange={onChange} />
      <br />
      <Picker title="\u7981\u7528\u9009\u9879" columns={disabledColumns} />
    </>
  );
};
`,R={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Picker, Toast } from 'react-vant';

const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];
const disabledColumns = [{ text: '\u5357\u4EAC', disabled: true }, { text: '\u82CF\u5DDE' }, { text: '\u626C\u5DDE' }];

export default () => {
  const onChange = (value: string, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`);

  return (
    <>
      <Picker
        title="\u57FA\u7840\u4F7F\u7528"
        columns={columns}
        onChange={onChange}
        onCancel={() => Toast.info('\u70B9\u51FB\u53D6\u6D88\u6309\u94AE')}
        onConfirm={() => Toast.info('\u70B9\u51FB\u786E\u8BA4\u6309\u94AE')}
      />
      <br />
      <Picker title="\u9ED8\u8BA4\u9009\u4E2D" defaultIndex={2} columns={columns} onChange={onChange} />
      <br />
      <Picker title="\u7981\u7528\u9009\u9879" columns={disabledColumns} />
    </>
  );
};
`}},key:"picker-base",meta:{title:"\u57FA\u7840\u7528\u6CD5",card:!0}};var C=()=>u(d,{onChange:(t,r)=>l(`\u5F53\u524D\u503C\uFF1A${t}, \u5F53\u524D\u7D22\u5F15\uFF1A${r}`),columns:[{values:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],defaultIndex:2},{values:["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"],defaultIndex:1}]});const M=`import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value: string, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)}
      columns={[
        {
          values: ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
          defaultIndex: 2,
        },
        // \u7B2C\u4E8C\u5217
        {
          values: ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
          defaultIndex: 1,
        },
      ]}
    />
  );
};
`,$={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value: string, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)}
      columns={[
        {
          values: ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
          defaultIndex: 2,
        },
        // \u7B2C\u4E8C\u5217
        {
          values: ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
          defaultIndex: 1,
        },
      ]}
    />
  );
};
`}},key:"picker-columns",meta:{title:"\u591A\u5217\u9009\u62E9",card:!0}};var m=()=>u(d,{onChange:(t,r)=>l(`\u5F53\u524D\u503C\uFF1A${t}, \u5F53\u524D\u7D22\u5F15\uFF1A${r}`),columns:[{text:"\u6C5F\u82CF",children:[{text:"\u82CF\u5DDE",children:[{text:"\u59D1\u82CF\u533A"},{text:"\u5434\u4E2D\u533A"}]},{text:"\u626C\u5DDE",children:[{text:"\u5E7F\u9675\u533A"},{text:"\u9097\u6C5F\u533A"}]}]},{text:"\u6D59\u6C5F",children:[{text:"\u676D\u5DDE",children:[{text:"\u897F\u6E56\u533A"},{text:"\u4F59\u676D\u533A"}]},{text:"\u6E29\u5DDE",children:[{text:"\u9E7F\u57CE\u533A"},{text:"\u74EF\u6D77\u533A"}]}]}]});const w=`import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)}
      columns={[
        {
          text: '\u6C5F\u82CF',
          children: [
            {
              text: '\u82CF\u5DDE',
              children: [{ text: '\u59D1\u82CF\u533A' }, { text: '\u5434\u4E2D\u533A' }],
            },
            {
              text: '\u626C\u5DDE',
              children: [{ text: '\u5E7F\u9675\u533A' }, { text: '\u9097\u6C5F\u533A' }],
            },
          ],
        },
        {
          text: '\u6D59\u6C5F',
          children: [
            {
              text: '\u676D\u5DDE',
              children: [{ text: '\u897F\u6E56\u533A' }, { text: '\u4F59\u676D\u533A' }],
            },
            {
              text: '\u6E29\u5DDE',
              children: [{ text: '\u9E7F\u57CE\u533A' }, { text: '\u74EF\u6D77\u533A' }],
            },
          ],
        },
      ]}
    />
  );
};
`,T={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Picker, Toast } from 'react-vant';

export default () => {
  return (
    <Picker
      onChange={(value, index: number) => Toast(\`\u5F53\u524D\u503C\uFF1A\${value}, \u5F53\u524D\u7D22\u5F15\uFF1A\${index}\`)}
      columns={[
        {
          text: '\u6C5F\u82CF',
          children: [
            {
              text: '\u82CF\u5DDE',
              children: [{ text: '\u59D1\u82CF\u533A' }, { text: '\u5434\u4E2D\u533A' }],
            },
            {
              text: '\u626C\u5DDE',
              children: [{ text: '\u5E7F\u9675\u533A' }, { text: '\u9097\u6C5F\u533A' }],
            },
          ],
        },
        {
          text: '\u6D59\u6C5F',
          children: [
            {
              text: '\u676D\u5DDE',
              children: [{ text: '\u897F\u6E56\u533A' }, { text: '\u4F59\u676D\u533A' }],
            },
            {
              text: '\u6E29\u5DDE',
              children: [{ text: '\u9E7F\u57CE\u533A' }, { text: '\u74EF\u6D77\u533A' }],
            },
          ],
        },
      ]}
    />
  );
};
`}},key:"picker-cascader",meta:{title:"\u7EA7\u8054\u9009\u62E9",card:!0}};var A=()=>{const t=a.exports.useRef(null),r={\u6D59\u6C5F:["\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE"],\u798F\u5EFA:["\u798F\u5DDE","\u53A6\u95E8","\u8386\u7530","\u4E09\u660E","\u6CC9\u5DDE"]};return u(d,{ref:t,columns:[{values:Object.keys(r)},{values:r.\u6D59\u6C5F,defaultIndex:2}],onChange:n=>{t.current.setColumnValues(1,r[n[0]])}})};const V=`import React, { useRef } from 'react';
import { Picker } from 'react-vant';

export default () => {
  const picker = useRef(null);

  const cities = {
    \u6D59\u6C5F: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u6E29\u5DDE', '\u5609\u5174', '\u6E56\u5DDE'],
    \u798F\u5EFA: ['\u798F\u5DDE', '\u53A6\u95E8', '\u8386\u7530', '\u4E09\u660E', '\u6CC9\u5DDE'],
  };

  return (
    <Picker
      ref={picker}
      columns={[{ values: Object.keys(cities) }, { values: cities['\u6D59\u6C5F'], defaultIndex: 2 }]}
      onChange={(values) => {
        picker.current.setColumnValues(1, cities[values[0]]);
      }}
    />
  );
};
`,S={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Picker } from 'react-vant';

export default () => {
  const picker = useRef(null);

  const cities = {
    \u6D59\u6C5F: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u6E29\u5DDE', '\u5609\u5174', '\u6E56\u5DDE'],
    \u798F\u5EFA: ['\u798F\u5DDE', '\u53A6\u95E8', '\u8386\u7530', '\u4E09\u660E', '\u6CC9\u5DDE'],
  };

  return (
    <Picker
      ref={picker}
      columns={[{ values: Object.keys(cities) }, { values: cities['\u6D59\u6C5F'], defaultIndex: 2 }]}
      onChange={(values) => {
        picker.current.setColumnValues(1, cities[values[0]]);
      }}
    />
  );
};
`}},key:"picker-dynic",meta:{title:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",card:!0}};var B=()=>u(d,{loading:!0,columns:[{values:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],defaultIndex:2},{values:["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"],defaultIndex:1}]});const j=`import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  return (
    <Picker
      loading
      columns={[
        {
          values: ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
          defaultIndex: 2,
        },
        // \u7B2C\u4E8C\u5217
        {
          values: ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
          defaultIndex: 1,
        },
      ]}
    />
  );
};
`,z={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  return (
    <Picker
      loading
      columns={[
        {
          values: ['\u5468\u4E00', '\u5468\u4E8C', '\u5468\u4E09', '\u5468\u56DB', '\u5468\u4E94'],
          defaultIndex: 2,
        },
        // \u7B2C\u4E8C\u5217
        {
          values: ['\u4E0A\u5348', '\u4E0B\u5348', '\u665A\u4E0A'],
          defaultIndex: 1,
        },
      ]}
    />
  );
};
`}},key:"picker-loading",meta:{title:"\u52A0\u8F7D\u72B6\u6001",card:!0}};var p=()=>{const[t,r]=a.exports.useState(""),[n,E]=a.exports.useState(!1);return e(D,{children:[u(N,{readonly:!0,clickable:!0,label:"\u57CE\u5E02",value:t,placeholder:"\u9009\u62E9\u57CE\u5E02",onClick:()=>E(!0)}),u(b,{round:!0,visible:n,position:"bottom",onClose:()=>E(!1),children:u(d,{title:"\u6807\u9898",columns:["\u5357\u4EAC","\u82CF\u5DDE","\u5E38\u5DDE","\u6DEE\u5B89","\u626C\u5DDE","\u5357\u901A","\u5BBF\u8FC1","\u6CF0\u5DDE","\u65E0\u9521"],onConfirm:v=>{r(v),E(!1)}})})]})};const L=`import React, { useState } from 'react';
import { Picker, Field, Popup } from 'react-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];

  return (
    <>
      <Field
        readonly
        clickable
        label="\u57CE\u5E02"
        value={fieldValue}
        placeholder="\u9009\u62E9\u57CE\u5E02"
        onClick={() => setShowPicker(true)}
      />
      <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
        <Picker
          title="\u6807\u9898"
          columns={columns}
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
        />
      </Popup>
    </>
  );
};
`,O={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Picker, Field, Popup } from 'react-vant';

export default () => {
  const [fieldValue, setFieldValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const columns = ['\u5357\u4EAC', '\u82CF\u5DDE', '\u5E38\u5DDE', '\u6DEE\u5B89', '\u626C\u5DDE', '\u5357\u901A', '\u5BBF\u8FC1', '\u6CF0\u5DDE', '\u65E0\u9521'];

  return (
    <>
      <Field
        readonly
        clickable
        label="\u57CE\u5E02"
        value={fieldValue}
        placeholder="\u9009\u62E9\u57CE\u5E02"
        onClick={() => setShowPicker(true)}
      />
      <Popup round visible={showPicker} position="bottom" onClose={() => setShowPicker(false)}>
        <Picker
          title="\u6807\u9898"
          columns={columns}
          onConfirm={(value: string) => {
            setFieldValue(value);
            setShowPicker(false);
          }}
        />
      </Popup>
    </>
  );
};
`}},key:"picker-popup",meta:{title:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",card:!0}};var x=()=>u(d,{title:"\u6807\u9898",columnsFieldNames:{text:"cityName",children:"cities"},columns:[{cityName:"\u6D59\u6C5F",cities:[{cityName:"\u676D\u5DDE",cities:[{cityName:"\u897F\u6E56\u533A"},{cityName:"\u4F59\u676D\u533A"}]},{cityName:"\u6E29\u5DDE",cities:[{cityName:"\u9E7F\u57CE\u533A"},{cityName:"\u74EF\u6D77\u533A"}]}]},{cityName:"\u798F\u5EFA",cities:[{cityName:"\u798F\u5DDE",cities:[{cityName:"\u9F13\u697C\u533A"},{cityName:"\u53F0\u6C5F\u533A"}]},{cityName:"\u53A6\u95E8",cities:[{cityName:"\u601D\u660E\u533A"},{cityName:"\u6D77\u6CA7\u533A"}]}]}]});const q=`import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  return (
    <Picker
      title="\u6807\u9898"
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
      columns={[
        {
          cityName: '\u6D59\u6C5F',
          cities: [
            {
              cityName: '\u676D\u5DDE',
              cities: [{ cityName: '\u897F\u6E56\u533A' }, { cityName: '\u4F59\u676D\u533A' }],
            },
            {
              cityName: '\u6E29\u5DDE',
              cities: [{ cityName: '\u9E7F\u57CE\u533A' }, { cityName: '\u74EF\u6D77\u533A' }],
            },
          ],
        },
        {
          cityName: '\u798F\u5EFA',
          cities: [
            {
              cityName: '\u798F\u5DDE',
              cities: [{ cityName: '\u9F13\u697C\u533A' }, { cityName: '\u53F0\u6C5F\u533A' }],
            },
            {
              cityName: '\u53A6\u95E8',
              cities: [{ cityName: '\u601D\u660E\u533A' }, { cityName: '\u6D77\u6CA7\u533A' }],
            },
          ],
        },
      ]}
    />
  );
};
`,H={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React from 'react';
import { Picker } from 'react-vant';

export default () => {
  return (
    <Picker
      title="\u6807\u9898"
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
      columns={[
        {
          cityName: '\u6D59\u6C5F',
          cities: [
            {
              cityName: '\u676D\u5DDE',
              cities: [{ cityName: '\u897F\u6E56\u533A' }, { cityName: '\u4F59\u676D\u533A' }],
            },
            {
              cityName: '\u6E29\u5DDE',
              cities: [{ cityName: '\u9E7F\u57CE\u533A' }, { cityName: '\u74EF\u6D77\u533A' }],
            },
          ],
        },
        {
          cityName: '\u798F\u5EFA',
          cities: [
            {
              cityName: '\u798F\u5DDE',
              cities: [{ cityName: '\u9F13\u697C\u533A' }, { cityName: '\u53F0\u6C5F\u533A' }],
            },
            {
              cityName: '\u53A6\u95E8',
              cities: [{ cityName: '\u601D\u660E\u533A' }, { cityName: '\u6D77\u6CA7\u533A' }],
            },
          ],
        },
      ]}
    />
  );
};
`}},key:"picker-columnsfieldnames",meta:{title:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",card:!0}},G=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return u("div",{children:e("div",{children:[u("h1",{id:"picker-\u9009\u62E9\u5668","data-anchor":"picker-\u9009\u62E9\u5668",children:"Picker \u9009\u62E9\u5668"}),u("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:["\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E",u("a",{href:"#/zh-CN/popup",children:"\u5F39\u51FA\u5C42"}),"\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002"]}),u("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),u(n,{code:"import { Picker } from 'react-vant';",lang:"js"}),u("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),u("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e("ul",{children:[e("li",{children:["Picker \u7EC4\u4EF6\u901A\u8FC7 ",u("code",{children:"columns"})," \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u6570\u636E\uFF0C",u("code",{children:"columns"})," \u662F\u4E00\u4E2A\u5305\u542B\u5B57\u7B26\u4E32\u6216\u5BF9\u8C61\u7684\u6570\u7EC4\u3002"]}),e("li",{children:["\u9876\u90E8\u680F\u5305\u542B\u6807\u9898\u3001\u786E\u8BA4\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\uFF0C\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1 ",u("code",{children:"confirm"})," \u4E8B\u4EF6\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u89E6\u53D1 ",u("code",{children:"cancel"})," \u4E8B\u4EF6\u3002"]}),e("li",{children:["\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"defaultIndex"})," \u5C5E\u6027\u8BBE\u7F6E\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\u3002"]}),e("li",{children:["\u9009\u9879\u53EF\u4EE5\u4E3A\u5BF9\u8C61\u7ED3\u6784\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",u("code",{children:"disabled"})," \u6765\u7981\u7528\u8BE5\u9009\u9879\u3002"]})]}),u(n,i(c({},R),{children:u(s,{})})),u("h3",{id:"\u591A\u5217\u9009\u62E9","data-anchor":"\u591A\u5217\u9009\u62E9",children:"\u591A\u5217\u9009\u62E9"}),e("p",{children:[u("code",{children:"columns"})," \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u591A\u5217\u9009\u62E9\uFF0C\u5BF9\u8C61\u4E2D\u53EF\u4EE5\u914D\u7F6E\u9009\u9879\u6570\u636E\u3001\u521D\u59CB\u9009\u4E2D\u9879\u7B49\uFF0C\u8BE6\u7EC6\u683C\u5F0F\u89C1",u("a",{href:"#/zh-CN/picker#column-shu-ju-jie-gou",children:"\u4E0B\u65B9\u8868\u683C"}),"\u3002"]}),u(n,i(c({},$),{children:u(C,{})})),u("h3",{id:"\u7EA7\u8054\u9009\u62E9","data-anchor":"\u7EA7\u8054\u9009\u62E9",children:"\u7EA7\u8054\u9009\u62E9"}),e("p",{children:["\u4F7F\u7528 ",u("code",{children:"columns"})," \u7684 ",u("code",{children:"children"})," \u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u9009\u9879\u7EA7\u8054\u7684\u6548\u679C\u3002"]}),u(n,i(c({},T),{children:u(m,{})})),u("blockquote",{children:u("p",{children:"\u7EA7\u8054\u9009\u62E9\u7684\u6570\u636E\u5D4C\u5957\u6DF1\u5EA6\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u90E8\u5206\u9009\u9879\u6CA1\u6709\u5B50\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u5360\u4F4D"})}),u("h3",{id:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879","data-anchor":"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",children:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879"}),e("p",{children:["\u901A\u8FC7 Picker \u4E0A\u7684\u5B9E\u4F8B\u65B9\u6CD5\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u63A7\u5236\u9009\u62E9\u5668\uFF0C\u6BD4\u5982\u4F7F\u7528 ",u("code",{children:"setColumnValues"})," \u65B9\u6CD5\u5B9E\u73B0\u591A\u5217\u8054\u52A8\u3002"]}),u(n,i(c({},S),{children:u(A,{})})),u("h3",{id:"\u52A0\u8F7D\u72B6\u6001","data-anchor":"\u52A0\u8F7D\u72B6\u6001",children:"\u52A0\u8F7D\u72B6\u6001"}),e("p",{children:["\u82E5\u9009\u62E9\u5668\u6570\u636E\u662F\u5F02\u6B65\u83B7\u53D6\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",u("code",{children:"loading"})," \u5C5E\u6027\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u3002"]}),u(n,i(c({},z),{children:u(B,{})})),u("h3",{id:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528","data-anchor":"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",children:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528"}),u("p",{children:"\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0CPicker \u901A\u5E38\u4F5C\u4E3A\u7528\u4E8E\u8F85\u52A9\u8868\u5355\u586B\u5199\uFF0C\u53EF\u4EE5\u642D\u914D Popup \u548C Field \u5B9E\u73B0\u8BE5\u6548\u679C\u3002"}),u(n,i(c({},O),{children:u(p,{})})),u("h3",{id:"\u81EA\u5B9A\u4E49-columns-\u7684\u7ED3\u6784","data-anchor":"\u81EA\u5B9A\u4E49-columns-\u7684\u7ED3\u6784",children:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784"}),u(n,i(c({},H),{children:u(x,{})})),u("h2",{id:"api","data-anchor":"api",children:"API"}),u("h3",{id:"props","data-anchor":"props",children:"Props"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"}),u("th",{children:"\u9ED8\u8BA4\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"columns"}),u("td",{children:"\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E"}),u("td",{children:u("em",{children:"Column[]"})}),u("td",{children:u("code",{children:"[]"})})]}),e("tr",{children:[u("td",{children:"columnsFieldNames"}),e("td",{children:["\u81EA\u5B9A\u4E49 ",u("code",{children:"columns"})," \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5"]}),u("td",{children:u("em",{children:"object"})}),u("td",{children:e("code",{children:["{"," text: 'text', values: 'values', children: 'children' ","}"]})})]}),e("tr",{children:[u("td",{children:"title"}),u("td",{children:"\u9876\u90E8\u680F\u6807\u9898"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"confirmButtonText"}),u("td",{children:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u786E\u8BA4"})})]}),e("tr",{children:[u("td",{children:"cancelButtonText"}),u("td",{children:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:u("code",{children:"\u53D6\u6D88"})})]}),e("tr",{children:[u("td",{children:"toolbar"}),u("td",{children:"\u81EA\u5B9A\u4E49\u6574\u4E2A\u9876\u90E8\u680F\u7684\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"toolbarPosition"}),e("td",{children:["\u9876\u90E8\u680F\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",u("code",{children:"bottom"})]}),u("td",{children:u("em",{children:"string"})}),u("td",{children:u("code",{children:"top"})})]}),e("tr",{children:[u("td",{children:"columnsTop"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"columnsBottom"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0B\u65B9\u5185\u5BB9"}),u("td",{children:u("em",{children:"ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"optionRender"}),u("td",{children:"\u81EA\u5B9A\u4E49\u9009\u9879\u5185\u5BB9"}),u("td",{children:u("em",{children:"(option: string | object) => ReactNode"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"loading"}),u("td",{children:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"false"})})]}),e("tr",{children:[u("td",{children:"showToolbar"}),u("td",{children:"\u662F\u5426\u663E\u793A\u9876\u90E8\u680F"}),u("td",{children:u("em",{children:"boolean"})}),u("td",{children:u("code",{children:"true"})})]}),e("tr",{children:[u("td",{children:"defaultIndex"}),u("td",{children:"\u5355\u5217\u9009\u62E9\u65F6\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u7D22\u5F15"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"0"})})]}),e("tr",{children:[u("td",{children:"itemHeight"}),e("td",{children:["\u9009\u9879\u9AD8\u5EA6\uFF0C\u652F\u6301 ",u("code",{children:"px"})," ",u("code",{children:"vw"})," ",u("code",{children:"vh"})," ",u("code",{children:"rem"})," \u5355\u4F4D\uFF0C\u9ED8\u8BA4 ",u("code",{children:"px"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"44"})})]}),e("tr",{children:[u("td",{children:"visibleItemCount"}),u("td",{children:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570"}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"6"})})]}),e("tr",{children:[u("td",{children:"swipeDuration"}),e("td",{children:["\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D ",u("code",{children:"ms"})]}),u("td",{children:u("em",{children:"number | string"})}),u("td",{children:u("code",{children:"1000"})})]})]})]}),u("h3",{id:"events","data-anchor":"events",children:"Events"}),u("p",{children:"\u5F53\u9009\u62E9\u5668\u6709\u591A\u5217\u65F6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4F1A\u8FD4\u56DE\u6570\u7EC4\u3002"}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u4E8B\u4EF6\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"onConfirm"}),u("td",{children:"\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:["\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15",u("br",{}),"\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15"]})]}),e("tr",{children:[u("td",{children:"onCancel"}),u("td",{children:"\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:["\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15",u("br",{}),"\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15"]})]}),e("tr",{children:[u("td",{children:"onChange"}),u("td",{children:"\u9009\u9879\u6539\u53D8\u65F6\u89E6\u53D1"}),e("td",{children:["\u5355\u5217\uFF1A\u9009\u4E2D\u503C\uFF0C\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15",u("br",{}),"\u591A\u5217\uFF1A\u6240\u6709\u5217\u9009\u4E2D\u503C\uFF0C\u5F53\u524D\u5217\u5BF9\u5E94\u7684\u7D22\u5F15"]})]})]})]}),u("h3",{id:"column-\u6570\u636E\u7ED3\u6784","data-anchor":"column-\u6570\u636E\u7ED3\u6784",children:"Column \u6570\u636E\u7ED3\u6784"}),e("p",{children:["\u5F53\u4F20\u5165\u591A\u5217\u6570\u636E\u65F6\uFF0C",u("code",{children:"columns"})," \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u914D\u7F6E\u6BCF\u4E00\u5217\uFF0C\u6BCF\u4E00\u5217\u6709\u4EE5\u4E0B ",u("code",{children:"key"}),":"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u952E\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u7C7B\u578B"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"values"}),u("td",{children:"\u5217\u4E2D\u5BF9\u5E94\u7684\u5907\u9009\u503C"}),u("td",{children:u("em",{children:"Array<string | number>"})})]}),e("tr",{children:[u("td",{children:"defaultIndex"}),u("td",{children:"\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4E3A 0"}),u("td",{children:u("em",{children:"number"})})]}),e("tr",{children:[u("td",{children:"className"}),u("td",{children:"\u4E3A\u5BF9\u5E94\u5217\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D"}),u("td",{children:u("em",{children:"string | Array | object"})})]}),e("tr",{children:[u("td",{children:"children"}),u("td",{children:"\u7EA7\u8054\u9009\u9879"}),u("td",{children:u("em",{children:"Column"})})]})]})]}),u("h3",{id:"\u65B9\u6CD5","data-anchor":"\u65B9\u6CD5",children:"\u65B9\u6CD5"}),e("p",{children:["\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Picker \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1",u("a",{href:"#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa",children:"\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u65B9\u6CD5\u540D"}),u("th",{children:"\u8BF4\u660E"}),u("th",{children:"\u53C2\u6570"}),u("th",{children:"\u8FD4\u56DE\u503C"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"getValues"}),u("td",{children:"\u83B7\u53D6\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C"}),u("td",{children:"-"}),u("td",{children:"values"})]}),e("tr",{children:[u("td",{children:"setValues"}),u("td",{children:"\u8BBE\u7F6E\u6240\u6709\u5217\u9009\u4E2D\u7684\u503C"}),u("td",{children:"values"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"getIndexes"}),u("td",{children:"\u83B7\u53D6\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15"}),u("td",{children:"-"}),u("td",{children:"indexes"})]}),e("tr",{children:[u("td",{children:"setIndexes"}),u("td",{children:"\u8BBE\u7F6E\u6240\u6709\u5217\u9009\u4E2D\u503C\u5BF9\u5E94\u7684\u7D22\u5F15"}),u("td",{children:"indexes"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"getColumnValue"}),u("td",{children:"\u83B7\u53D6\u5BF9\u5E94\u5217\u9009\u4E2D\u7684\u503C"}),u("td",{children:"columnIndex"}),u("td",{children:"value"})]}),e("tr",{children:[u("td",{children:"setColumnValue"}),u("td",{children:"\u8BBE\u7F6E\u5BF9\u5E94\u5217\u9009\u4E2D\u7684\u503C"}),u("td",{children:"columnIndex, value"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"getColumnIndex"}),u("td",{children:"\u83B7\u53D6\u5BF9\u5E94\u5217\u9009\u4E2D\u9879\u7684\u7D22\u5F15"}),u("td",{children:"columnIndex"}),u("td",{children:"optionIndex"})]}),e("tr",{children:[u("td",{children:"setColumnIndex"}),u("td",{children:"\u8BBE\u7F6E\u5BF9\u5E94\u5217\u9009\u4E2D\u9879\u7684\u7D22\u5F15"}),u("td",{children:"columnIndex, optionIndex"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"getColumnValues"}),u("td",{children:"\u83B7\u53D6\u5BF9\u5E94\u5217\u4E2D\u6240\u6709\u9009\u9879"}),u("td",{children:"columnIndex"}),u("td",{children:"values"})]}),e("tr",{children:[u("td",{children:"setColumnValues"}),u("td",{children:"\u8BBE\u7F6E\u5BF9\u5E94\u5217\u4E2D\u6240\u6709\u9009\u9879"}),u("td",{children:"columnIndex, values"}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"confirm"}),u("td",{children:"\u505C\u6B62\u60EF\u6027\u6EDA\u52A8\u5E76\u89E6\u53D1 confirm \u4E8B\u4EF6"}),u("td",{children:"-"}),u("td",{children:"-"})]})]})]}),u("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:["\u901A\u8FC7 ",u("code",{children:"PickerInstance"})," \u83B7\u53D6 Picker \u5B9E\u4F8B\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"]}),u(n,{code:`import { useRef } from 'react';
import type { PickerInstance } from 'react-vant';

const pickerRef = useRef<PickerInstance>();

pickerRef.current?.confirm();`,lang:"ts"}),u("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),u("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),e("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",u("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),e("table",{children:[u("thead",{children:e("tr",{children:[u("th",{children:"\u540D\u79F0"}),u("th",{children:"\u9ED8\u8BA4\u503C"}),u("th",{children:"\u63CF\u8FF0"})]})}),e("tbody",{children:[e("tr",{children:[u("td",{children:"--rv-picker-background-color"}),u("td",{children:u("em",{children:"var(--rv-white)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-toolbar-height"}),u("td",{children:u("em",{children:"44px"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-title-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-title-line-height"}),u("td",{children:u("em",{children:"var(--rv-line-height-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-action-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-action-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-md)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-confirm-action-color"}),u("td",{children:u("em",{children:"var(--rv-text-link-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-cancel-action-color"}),u("td",{children:u("em",{children:"var(--rv-gray-6)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-padding"}),u("td",{children:u("em",{children:"0 var(--rv-padding-base)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-font-size"}),u("td",{children:u("em",{children:"var(--rv-font-size-lg)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-text-color"}),u("td",{children:u("em",{children:"var(--rv-black)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-option-disabled-opacity"}),u("td",{children:u("em",{children:"0.3"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-loading-icon-color"}),u("td",{children:u("em",{children:"var(--rv-primary-color)"})}),u("td",{children:"-"})]}),e("tr",{children:[u("td",{children:"--rv-picker-loading-mask-color"}),u("td",{children:u("em",{children:"rgba(255, 255, 255, 0.9)"})}),u("td",{children:"-"})]})]})]}),u("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),u("h3",{id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6","data-anchor":"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6",children:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F"}),e("p",{children:["\u53C2\u89C1",u("a",{href:"#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei",children:"\u684C\u9762\u7AEF\u9002\u914D"}),"\u3002"]})]})})},J=[{Component:s,key:"picker-base",title:"\u57FA\u7840\u7528\u6CD5",card:!0},{Component:C,key:"picker-columns",title:"\u591A\u5217\u9009\u62E9",card:!0},{Component:m,key:"picker-cascader",title:"\u7EA7\u8054\u9009\u62E9",card:!0},{Component:A,key:"picker-dynic",title:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",card:!0},{Component:B,key:"picker-loading",title:"\u52A0\u8F7D\u72B6\u6001",card:!0},{Component:p,key:"picker-popup",title:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",card:!0},{Component:x,key:"picker-columnsfieldnames",title:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",card:!0}],K=void 0,Q=[{depth:1,text:"Picker \u9009\u62E9\u5668",id:"picker-\u9009\u62E9\u5668"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u591A\u5217\u9009\u62E9",id:"\u591A\u5217\u9009\u62E9"},{depth:3,text:"\u7EA7\u8054\u9009\u62E9",id:"\u7EA7\u8054\u9009\u62E9"},{depth:3,text:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879",id:"\u52A8\u6001\u8BBE\u7F6E\u9009\u9879"},{depth:3,text:"\u52A0\u8F7D\u72B6\u6001",id:"\u52A0\u8F7D\u72B6\u6001"},{depth:3,text:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",id:"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528"},{depth:3,text:"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",id:"\u81EA\u5B9A\u4E49-columns-\u7684\u7ED3\u6784"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"Column \u6570\u636E\u7ED3\u6784",id:"column-\u6570\u636E\u7ED3\u6784"},{depth:3,text:"\u65B9\u6CD5",id:"\u65B9\u6CD5"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6\uFF1F",id:"\u5728\u684C\u9762\u7AEF\u65E0\u6CD5\u64CD\u4F5C\u7EC4\u4EF6"}],U="/src/components/picker/README.md",W="Picker \u9009\u62E9\u5668",X="1652064015000";var nu=t=>t.children({MdContent:G,demos:J,frontmatter:K,slugs:Q,filePath:U,title:W,updatedTime:X});export{G as MdContent,nu as default,J as demos,U as filePath,K as frontmatter,Q as slugs,W as title,X as updatedTime};
