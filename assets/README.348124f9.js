var w=Object.defineProperty,U=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var m=(t,r,n)=>r in t?w(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(t,r)=>{for(var n in r||(r={}))z.call(r,n)&&m(t,n,r[n]);if(E)for(var n of E(r))j.call(r,n)&&m(t,n,r[n]);return t},l=(t,r)=>U(t,b(r));import{j as e,r as s,a as u}from"./main.05f03a68.js";import{dA as i,d9 as C,B as I}from"./index.0390ab41.js";var v=()=>e(i,{afterRead:t=>console.log(t)});const P={code:`import React from 'react';
import { Uploader } from 'react-vant';

export default () => <Uploader afterRead={(file) => console.log(file)} />;`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Uploader } from 'react-vant';

export default () => <Uploader afterRead={(file) => console.log(file)} />;`}},key:"uploader-demo",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},k=[{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:"\u4E0A\u4F20\u4E2D..."},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:"\u4E0A\u4F20\u5931\u8D25"}],p=[{url:"https://img.yzcdn.cn/vant/sand.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"}];var f=()=>{const[t,r]=s.exports.useState(p);return e(i,{onClickPreview:(n,d)=>{console.log(n,d)},onClickUpload:()=>{console.log("click upload tigger")},value:t,onChange:r})};const V=`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './style.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  return (
    <Uploader
      onClickPreview={(items, detail) => {
        console.log(items, detail);
      }}
      onClickUpload={() => {
        console.log('click upload tigger');
      }}
      value={value}
      onChange={setValue}
    />
  );
};
`,S={code:V,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './style.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  return (
    <Uploader
      onClickPreview={(items, detail) => {
        console.log(items, detail);
      }}
      onClickUpload={() => {
        console.log('click upload tigger');
      }}
      value={value}
      onChange={setValue}
    />
  );
};
`},"data.ts":{type:"FILE",value:`export const statusData = [
  {
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '\u4E0A\u4F20\u4E2D...',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '\u4E0A\u4F20\u5931\u8D25',
  },
];

export const previewData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
];
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .rv-uploader {
    margin-left: 16px;
  }
}
`}},key:"uploader-preview",meta:{title:"\u6587\u4EF6\u9884\u89C8"}};var A=()=>{const[t,r]=s.exports.useState(k);return e(i,{multiple:!0,value:t,afterRead:(d,{index:o})=>{d.status="uploading",d.message="\u4E0A\u4F20\u4E2D...";const F=[...t];F[o]=d,r(F),setTimeout(()=>{d.status="failed",d.message="\u4E0A\u4F20\u5931\u8D25",d.content="xxxx.jpg",r(h=>{const c=[...h];return c[o]=d,c})},1e3)},onChange:r})};const L=`import React, { useState } from 'react';
import { Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';
import { statusData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(statusData);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '\u4E0A\u4F20\u4E2D...';
    const newValue = [...value];
    newValue[index] = file;
    setValue(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '\u4E0A\u4F20\u5931\u8D25';
      file.content = 'xxxx.jpg';

      setValue((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader multiple value={value} afterRead={afterRead} onChange={setValue} />;
};
`,M={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';
import { statusData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(statusData);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '\u4E0A\u4F20\u4E2D...';
    const newValue = [...value];
    newValue[index] = file;
    setValue(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '\u4E0A\u4F20\u5931\u8D25';
      file.content = 'xxxx.jpg';

      setValue((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader multiple value={value} afterRead={afterRead} onChange={setValue} />;
};
`},"data.ts":{type:"FILE",value:`export const statusData = [
  {
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '\u4E0A\u4F20\u4E2D...',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '\u4E0A\u4F20\u5931\u8D25',
  },
];

export const previewData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
];
`}},key:"uploader-status",meta:{title:"\u4E0A\u4F20\u72B6\u6001"}};var D=()=>{const[t,r]=s.exports.useState([p[0]]);return e(i,{multiple:!0,maxCount:4,value:t,afterRead:(d,{index:o})=>{d.status="uploading",d.message="\u4E0A\u4F20\u4E2D...";const F=[...t];F[o]=d,r(F),setTimeout(()=>{d.status="failed",d.message="\u4E0A\u4F20\u5931\u8D25",d.content="xxxx.jpg",r(h=>{const c=[...h];return c[o]=d,c})},1e3)},onChange:r})};const _=`import React, { useState } from 'react';
import { Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '\u4E0A\u4F20\u4E2D...';
    const newValue = [...value];
    newValue[index] = file;
    setValue(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '\u4E0A\u4F20\u5931\u8D25';
      file.content = 'xxxx.jpg';

      setValue((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader multiple maxCount={4} value={value} afterRead={afterRead} onChange={setValue} />;
};
`,N={code:_,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '\u4E0A\u4F20\u4E2D...';
    const newValue = [...value];
    newValue[index] = file;
    setValue(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '\u4E0A\u4F20\u5931\u8D25';
      file.content = 'xxxx.jpg';

      setValue((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader multiple maxCount={4} value={value} afterRead={afterRead} onChange={setValue} />;
};
`},"data.ts":{type:"FILE",value:`export const statusData = [
  {
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '\u4E0A\u4F20\u4E2D...',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '\u4E0A\u4F20\u5931\u8D25',
  },
];

export const previewData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
];
`}},key:"uploader-maxcount",meta:{title:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF"}};var B=()=>{const[t,r]=s.exports.useState(p),n=d=>{console.log(d),C("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5kb")};return e(i,{multiple:!0,value:t,onChange:r,maxSize:5*1024,onOversize:n})};const T=`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Toast, Uploader } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  const onOversize = (file) => {
    console.log(file);
    Toast('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5kb');
  };

  return (
    <Uploader
      multiple
      value={value}
      onChange={setValue}
      maxSize={5 * 1024}
      onOversize={onOversize}
    />
  );
};
`,$={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Toast, Uploader } from 'react-vant';
import { previewData } from './data';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>(previewData);

  const onOversize = (file) => {
    console.log(file);
    Toast('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 5kb');
  };

  return (
    <Uploader
      multiple
      value={value}
      onChange={setValue}
      maxSize={5 * 1024}
      onOversize={onOversize}
    />
  );
};
`},"data.ts":{type:"FILE",value:`export const statusData = [
  {
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '\u4E0A\u4F20\u4E2D...',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '\u4E0A\u4F20\u5931\u8D25',
  },
];

export const previewData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
];
`}},key:"uploader-size",meta:{title:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F"}};var g=()=>e(i,{style:{width:"100%"},children:e(I,{block:!0,type:"primary",round:!0,children:"\u4E0A\u4F20\u6587\u4EF6"})});const O={code:`import React from 'react';
import { Uploader, Button } from 'react-vant';

export default () => (
  <Uploader style={{ width: '100%' }}>
    <Button block type="primary" round>
      \u4E0A\u4F20\u6587\u4EF6
    </Button>
  </Uploader>
);`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Uploader, Button } from 'react-vant';

export default () => (
  <Uploader style={{ width: '100%' }}>
    <Button block type="primary" round>
      \u4E0A\u4F20\u6587\u4EF6
    </Button>
  </Uploader>
);`}},key:"uploader-demo-1",meta:{title:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"}};var x=()=>{const[t,r]=s.exports.useState([p[0]]);return e(i,{value:t,onChange:r,previewCoverRender:n=>e("div",{className:"custom-preview-cover",children:n.name})})};const H=`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './previewCoverRender.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  return (
    <Uploader
      value={value}
      onChange={setValue}
      previewCoverRender={(item) => {
        return <div className="custom-preview-cover">{item.name}</div>;
      }}
    />
  );
};
`,W={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import type { UploaderFileListItem } from 'react-vant';
import { Uploader } from 'react-vant';
import { previewData } from './data';
import './previewCoverRender.less';

export default () => {
  const [value, setValue] = useState<UploaderFileListItem[]>([previewData[0]]);

  return (
    <Uploader
      value={value}
      onChange={setValue}
      previewCoverRender={(item) => {
        return <div className="custom-preview-cover">{item.name}</div>;
      }}
    />
  );
};
`},"data.ts":{type:"FILE",value:`export const statusData = [
  {
    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    status: 'uploading',
    message: '\u4E0A\u4F20\u4E2D...',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'failed',
    message: '\u4E0A\u4F20\u5931\u8D25',
  },
];

export const previewData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    status: 'done',
    name: '\u56FE\u7247\u540D\u79F0',
  },
];
`},"previewCoverRender.less":{type:"FILE",value:`.custom-preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
`}},key:"uploader-previewcoverrender",meta:{title:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F"}};var y=()=>{const[t,r]=s.exports.useState([]);return e(i,{multiple:!0,value:t,onChange:r,beforeRead:async d=>{const o=Array.isArray(d)?d:[d];return new Promise(F=>{const h=o.filter(c=>c.type!=="image/jpeg"?(C.info(`${c.name}\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247`),!1):!0);F(h)})}})};const q=`import React, { useState } from 'react';
import { Toast, Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';

export default () => {
  const [beforeReadDemo, setBeforeReadDemo] = useState<UploaderFileListItem[]>([]);

  // return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // if multiple is true, \`file\` will be array type
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // filter invalid file
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(\`\${f.name}\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247\`);
          return false;
        }
        return true;
      });
      resolve(passFiles);
    });
  };

  return (
    <Uploader
      multiple
      value={beforeReadDemo}
      onChange={setBeforeReadDemo}
      beforeRead={asyncBeforeRead}
    />
  );
};
`,G={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Toast, Uploader } from 'react-vant';
import type { UploaderFileListItem } from 'react-vant';

export default () => {
  const [beforeReadDemo, setBeforeReadDemo] = useState<UploaderFileListItem[]>([]);

  // return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // if multiple is true, \`file\` will be array type
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // filter invalid file
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(\`\${f.name}\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247\`);
          return false;
        }
        return true;
      });
      resolve(passFiles);
    });
  };

  return (
    <Uploader
      multiple
      value={beforeReadDemo}
      onChange={setBeforeReadDemo}
      beforeRead={asyncBeforeRead}
    />
  );
};
`}},key:"uploader-beforeread",meta:{title:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"}};var R=()=>e(i,{value:[{url:"https://img.yzcdn.cn/vant/sand.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"}],disabled:!0});const J={code:`import React from 'react';
import { Uploader } from 'react-vant';

export default () => (
  <Uploader
    value={[
      {
        url: 'https://img.yzcdn.cn/vant/sand.jpg',
        status: 'done',
        name: '\u56FE\u7247\u540D\u79F0',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'done',
        name: '\u56FE\u7247\u540D\u79F0',
      },
    ]}
    disabled
  />
);`,lang:"jsx",dependencies:{react:{type:"NPM",value:"18.1.0"},"react-vant":{type:"NPM",value:"2.0.0-alpha.36"},"index.jsx":{type:"FILE",value:`import React from 'react';
import { Uploader } from 'react-vant';

export default () => (
  <Uploader
    value={[
      {
        url: 'https://img.yzcdn.cn/vant/sand.jpg',
        status: 'done',
        name: '\u56FE\u7247\u540D\u79F0',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'done',
        name: '\u56FE\u7247\u540D\u79F0',
      },
    ]}
    disabled
  />
);`}},key:"uploader-demo-2",meta:{title:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}},K=function({previewer:t=()=>null,api:r=()=>null}){const n=t;return e("div",{children:u("div",{children:[e("h1",{id:"uploader-\u6587\u4EF6\u4E0A\u4F20","data-anchor":"uploader-\u6587\u4EF6\u4E0A\u4F20",children:"Uploader \u6587\u4EF6\u4E0A\u4F20"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u5E76\u5728\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u5C55\u793A\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u8FDB\u5EA6\u3002\u76EE\u524D Uploader \u7EC4\u4EF6\u4E0D\u5305\u542B\u5C06\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u7684\u63A5\u53E3\u903B\u8F91\uFF0C\u8BE5\u6B65\u9AA4\u9700\u8981\u81EA\u884C\u5B9E\u73B0\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(n,{code:"import { Uploader } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),u("p",{children:["\u6587\u4EF6\u4E0A\u4F20\u5B8C\u6BD5\u540E\u4F1A\u89E6\u53D1 ",e("code",{children:"afterRead"})," \u56DE\u8C03\u51FD\u6570\uFF0C\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 ",e("code",{children:"file"})," \u5BF9\u8C61\u3002"]}),e(n,l(a({},P),{children:e(v,{})})),e("h3",{id:"\u6587\u4EF6\u9884\u89C8","data-anchor":"\u6587\u4EF6\u9884\u89C8",children:"\u6587\u4EF6\u9884\u89C8"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u53EF\u4EE5\u7ED1\u5B9A\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u5E76\u5C55\u793A\u6587\u4EF6\u5217\u8868\u7684\u9884\u89C8\u56FE\u3002"]}),e(n,l(a({},S),{children:e(f,{})})),e("h3",{id:"\u4E0A\u4F20\u72B6\u6001","data-anchor":"\u4E0A\u4F20\u72B6\u6001",children:"\u4E0A\u4F20\u72B6\u6001"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"status"})," \u5C5E\u6027\u53EF\u4EE5\u6807\u8BC6\u4E0A\u4F20\u72B6\u6001\uFF0C",e("code",{children:"uploading"})," \u8868\u793A\u4E0A\u4F20\u4E2D\uFF0C",e("code",{children:"failed"})," \u8868\u793A\u4E0A\u4F20\u5931\u8D25\uFF0C",e("code",{children:"done"})," \u8868\u793A\u4E0A\u4F20\u5B8C\u6210\u3002"]}),e(n,l(a({},M),{children:e(A,{})})),e("h3",{id:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF","data-anchor":"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",children:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"maxCount"})," \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u6570\u91CF\uFF0C\u4E0A\u4F20\u6570\u91CF\u8FBE\u5230\u9650\u5236\u540E\uFF0C\u4F1A\u81EA\u52A8\u9690\u85CF\u4E0A\u4F20\u533A\u57DF\u3002"]}),e(n,l(a({},N),{children:e(D,{})})),e("h3",{id:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F","data-anchor":"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",children:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"maxSize"})," \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u8D85\u8FC7\u5927\u5C0F\u7684\u6587\u4EF6\u4F1A\u88AB\u81EA\u52A8\u8FC7\u6EE4\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"onOversize"})," \u4E8B\u4EF6\u83B7\u53D6\u3002"]}),e(n,l(a({},$),{children:e(B,{})})),u("p",{children:["\u5982\u679C\u9700\u8981\u9488\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u6765\u4F5C\u51FA\u4E0D\u540C\u7684\u5927\u5C0F\u9650\u5236\uFF0C\u53EF\u4EE5\u5728 ",e("code",{children:"maxSize"})," \u5C5E\u6027\u4E2D\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u4E2D\u901A\u8FC7 ",e("code",{children:"file.type"})," \u533A\u5206\u6587\u4EF6\u7C7B\u578B\uFF0C\u8FD4\u56DE ",e("code",{children:"true"})," \u8868\u793A\u8D85\u51FA\u9650\u5236\uFF0C",e("code",{children:"false"})," \u8868\u793A\u672A\u8D85\u51FA\u9650\u5236\u3002"]}),e(n,{code:`export default () => {
  const isOverSize = (file) => {
    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;
    return file.size >= maxSize;
  };
  return <Uploader maxSize={isOverSize} />;
};`,lang:"jsx"}),e("h3",{id:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",children:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"}),e("p",{children:"\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF\u7684\u6837\u5F0F\u3002"}),e(n,l(a({},O),{children:e(g,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F","data-anchor":"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",children:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"previewCoverRender"})," \u5C5E\u6027\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F\u3002"]}),e(n,l(a({},W),{children:e(x,{})})),e("h3",{id:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406","data-anchor":"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",children:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"}),u("p",{children:["\u901A\u8FC7\u4F20\u5165 ",e("code",{children:"beforeRead"})," \u51FD\u6570\u53EF\u4EE5\u5728\u4E0A\u4F20\u524D\u8FDB\u884C\u6821\u9A8C\u548C\u5904\u7406\uFF0C\u8FD4\u56DE ",e("code",{children:"true"})," \u8868\u793A\u6821\u9A8C\u901A\u8FC7\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u8868\u793A\u6821\u9A8C\u5931\u8D25\u3002\u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"})," \u5BF9 file \u5BF9\u8C61\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u4F8B\u5982\u538B\u7F29\u56FE\u7247\u3002"]}),e(n,l(a({},G),{children:e(y,{})})),e("h3",{id:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20","data-anchor":"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",children:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"disabled"})," \u5C5E\u6027\u7981\u7528\u6587\u4EF6\u4E0A\u4F20\u3002"]}),e(n,l(a({},J),{children:e(R,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"}),e("td",{children:e("em",{children:"FileListItem[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"accept"}),u("td",{children:["\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",children:"\u8BE6\u7EC6\u8BF4\u660E"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"image/*"})})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u7684\u7B2C\u4E8C\u9879\u53C2\u6570\u4E2D\u83B7\u53D6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"previewSize"}),u("td",{children:["\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u533A\u57DF\u7684\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"80px"})})]}),u("tr",{children:[e("td",{children:"previewImage"}),e("td",{children:"\u662F\u5426\u5728\u4E0A\u4F20\u5B8C\u6210\u540E\u5C55\u793A\u9884\u89C8\u56FE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewFullImage"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u9884\u89C8\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewOptions"}),u("td",{children:["\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"#/zh-CN/image-preview",children:"ImagePreview"})]}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"multiple"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readonly"}),e("td",{children:"\u662F\u5426\u5C06\u4E0A\u4F20\u533A\u57DF\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"deletable"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showUpload"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"capture"}),u("td",{children:["\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"camera"})," (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"afterRead"}),e("td",{children:"\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570"}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"beforeRead"}),u("td",{children:["\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C",e("br",{}),"\u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"})]}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"beforeDelete"}),u("td",{children:["\u6587\u4EF6\u5220\u9664\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C",e("br",{}),"\u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"})]}),e("td",{children:e("em",{children:"Function"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxSize"}),u("td",{children:["\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"byte"})]}),e("td",{children:e("em",{children:"number | string | (file: File) => boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxCount"}),e("td",{children:"\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"resultType"}),u("td",{children:["\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"file"})," ",e("code",{children:"text"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"dataUrl"})})]}),u("tr",{children:[e("td",{children:"uploadText"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"imageFit"}),u("td",{children:["\u9884\u89C8\u56FE\u88C1\u526A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"#/zh-CN/image",children:"Image"})," \u7EC4\u4EF6"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"cover"})})]}),u("tr",{children:[e("td",{children:"uploadIcon"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Photograph />"})})]})]})]}),e("blockquote",{children:e("p",{children:"\u6CE8\u610F\uFF1Aaccept\u3001capture \u548C multiple \u4E3A\u6D4F\u89C8\u5668 input \u6807\u7B7E\u7684\u539F\u751F\u5C5E\u6027\uFF0C\u79FB\u52A8\u7AEF\u5404\u79CD\u673A\u578B\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u7684\u652F\u6301\u7A0B\u5EA6\u6709\u6240\u5DEE\u5F02\uFF0C\u56E0\u6B64\u5728\u4E0D\u540C\u673A\u578B\u548C WebView \u4E0B\u53EF\u80FD\u51FA\u73B0\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\u3002"})}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u7EC4\u4EF6\u503C\u66F4\u65B0\u65F6\u8C03\u7528"}),e("td",{children:e("em",{children:"UploaderFileListItem[]"})})]}),u("tr",{children:[e("td",{children:"onOversize"}),e("td",{children:"\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1"}),u("td",{children:["\u540C ",e("code",{children:"afterRead"})]})]}),u("tr",{children:[e("td",{children:"onClickUpload"}),e("td",{children:"\u70B9\u51FB\u4E0A\u4F20\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickPreview"}),e("td",{children:"\u70B9\u51FB\u9884\u89C8\u56FE\u65F6\u89E6\u53D1"}),u("td",{children:["\u540C ",e("code",{children:"afterRead"})]})]}),u("tr",{children:[e("td",{children:"onClosePreview"}),e("td",{children:"\u5173\u95ED\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onDelete"}),e("td",{children:"\u5220\u9664\u6587\u4EF6\u9884\u89C8\u65F6\u89E6\u53D1"}),u("td",{children:["\u540C ",e("code",{children:"afterRead"})]})]})]})]}),e("h3",{id:"\u56DE\u8C03\u53C2\u6570","data-anchor":"\u56DE\u8C03\u53C2\u6570",children:"\u56DE\u8C03\u53C2\u6570"}),e("p",{children:"beforeRead\u3001afterRead\u3001beforeDelete \u6267\u884C\u65F6\u4F1A\u4F20\u9012\u4EE5\u4E0B\u56DE\u8C03\u53C2\u6570\uFF1A"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"file"}),e("td",{children:"file \u5BF9\u8C61"}),e("td",{children:e("em",{children:"object"})})]}),u("tr",{children:[e("td",{children:"detail"}),e("td",{children:"\u989D\u5916\u4FE1\u606F\uFF0C\u5305\u542B name \u548C index \u5B57\u6BB5"}),e("td",{children:e("em",{children:"object"})})]})]})]}),e("h3",{id:"resulttype-\u53EF\u9009\u503C","data-anchor":"resulttype-\u53EF\u9009\u503C",children:"ResultType \u53EF\u9009\u503C"}),u("p",{children:[e("code",{children:"resultType"})," \u5B57\u6BB5\u8868\u793A\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7684\u7C7B\u578B\uFF0C\u4E0A\u4F20\u5927\u6587\u4EF6\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 file \u7C7B\u578B\uFF0C\u907F\u514D\u5361\u987F\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"file"}),e("td",{children:"\u7ED3\u679C\u4EC5\u5305\u542B File \u5BF9\u8C61"})]}),u("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u7684\u6587\u672C\u5185\u5BB9"})]}),u("tr",{children:[e("td",{children:"dataUrl"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u5BF9\u5E94\u7684 base64 \u7F16\u7801"})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(n,{code:"import type { UploaderInstance, UploaderResultType, UploaderFileListItem } from 'react-vant';",lang:"js"}),u("p",{children:[e("code",{children:"UploaderInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(n,{code:`import { useRef } from 'react';
import type { UploaderInstance } from 'react-vant';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();`,lang:"js"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-uploader-size"}),e("td",{children:e("em",{children:"80px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-size"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-4)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-1)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-icon-size"}),e("td",{children:e("em",{children:"14px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-background-color"}),e("td",{children:e("em",{children:"fade(var(--rv-gray-8), 88%)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6","data-anchor":"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6",children:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F"}),u("p",{children:["\u90E8\u5206\u624B\u673A\u5728\u62CD\u7167\u4E0A\u4F20\u65F6\u4F1A\u51FA\u73B0\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7 ",e("a",{href:"https://github.com/fengyuanchen/compressorjs",children:"compressorjs"})," \u6216\u5176\u4ED6\u5F00\u6E90\u5E93\u8FDB\u884C\u5904\u7406\u3002"]}),e("p",{children:"compressorjs \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u56FE\u7247\u5904\u7406\u5E93\uFF0C\u63D0\u4F9B\u4E86\u56FE\u7247\u538B\u7F29\u3001\u56FE\u7247\u65CB\u8F6C\u7B49\u80FD\u529B\u3002"}),e("h4",{id:"\u793A\u4F8B","data-anchor":"\u793A\u4F8B",children:"\u793A\u4F8B"}),e("p",{children:"\u4F7F\u7528 compressorjs \u8FDB\u884C\u5904\u7406\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B:"}),e(n,{code:`export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs \u9ED8\u8BA4\u5F00\u542F checkOrientation \u9009\u9879
      // \u4F1A\u5C06\u56FE\u7247\u4FEE\u6B63\u4E3A\u6B63\u786E\u65B9\u5411
      new Compressor(file, {
        success: resolve,
        error(err) {
          console.log(err.message);
        },
      });
    });
  };
  return <Uploader beforeRead={beforeRead} />;
};`,lang:"jsx"}),e("h3",{id:"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A","data-anchor":"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A",children:"\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F"}),e("p",{children:"\u76EE\u524D Chrome\u3001Safari \u7B49\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5C55\u793A HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u56E0\u6B64\u4E0A\u4F20\u540E\u65E0\u6CD5\u5728 Uploader \u7EC4\u4EF6\u4E2D\u8FDB\u884C\u9884\u89C8\u3002"}),u("p",{children:["[HEIF] \u683C\u5F0F\u7684\u517C\u5BB9\u6027\u8BF7\u53C2\u8003 ",e("a",{href:"https://caniuse.com/?search=heic",children:"caniuse"}),"\u3002"]})]})})},Q=[{Component:v,key:"uploader-demo",title:"\u57FA\u7840\u7528\u6CD5"},{Component:f,key:"uploader-preview",title:"\u6587\u4EF6\u9884\u89C8"},{Component:A,key:"uploader-status",title:"\u4E0A\u4F20\u72B6\u6001"},{Component:D,key:"uploader-maxcount",title:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF"},{Component:B,key:"uploader-size",title:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F"},{Component:g,key:"uploader-demo-1",title:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"},{Component:x,key:"uploader-previewcoverrender",title:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F"},{Component:y,key:"uploader-beforeread",title:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"},{Component:R,key:"uploader-demo-2",title:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}],X={simulator:{compact:!1,style:{background:"#fff"}}},Y=[{depth:1,text:"Uploader \u6587\u4EF6\u4E0A\u4F20",id:"uploader-\u6587\u4EF6\u4E0A\u4F20"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u6587\u4EF6\u9884\u89C8",id:"\u6587\u4EF6\u9884\u89C8"},{depth:3,text:"\u4E0A\u4F20\u72B6\u6001",id:"\u4E0A\u4F20\u72B6\u6001"},{depth:3,text:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",id:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF"},{depth:3,text:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",id:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",id:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"},{depth:3,text:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",id:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F"},{depth:3,text:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",id:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406"},{depth:3,text:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",id:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u56DE\u8C03\u53C2\u6570",id:"\u56DE\u8C03\u53C2\u6570"},{depth:3,text:"ResultType \u53EF\u9009\u503C",id:"resulttype-\u53EF\u9009\u503C"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F",id:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6"},{depth:4,text:"\u793A\u4F8B",id:"\u793A\u4F8B"},{depth:3,text:"\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F",id:"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A"}],Z="/src/components/uploader/README.md",ee="Uploader \u6587\u4EF6\u4E0A\u4F20",ue="1652106126000";var de=t=>t.children({MdContent:K,demos:Q,frontmatter:X,slugs:Y,filePath:Z,title:ee,updatedTime:ue});export{K as MdContent,de as default,Q as demos,Z as filePath,X as frontmatter,Y as slugs,ee as title,ue as updatedTime};
