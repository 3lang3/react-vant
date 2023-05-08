var g=Object.defineProperty,C=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var c=(r,d,u)=>d in r?g(r,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[d]=u,i=(r,d)=>{for(var u in d||(d={}))x.call(d,u)&&c(r,u,d[u]);if(l)for(var u of l(d))D.call(d,u)&&c(r,u,d[u]);return r},o=(r,d)=>C(r,f(d));import{a as t,j as n}from"./main.0cdb74b2.js";import{B as e,a,b as P,c as _,d as N}from"./FloatingPanel.10dd60c0.js";var h=()=>t("div",{className:"demo-button",children:[n(e,{type:"primary",children:"Primary"}),n(e,{type:"info",children:"Info"}),n(e,{type:"default",children:"Default"}),n(e,{type:"warning",children:"Warning"}),n(e,{type:"danger",children:"Dangeer"})]});const M=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
    </div>
  )
}
`,R={code:M,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-type",meta:{title:"\u6309\u94AE\u7C7B\u578B"}};var p=()=>t("div",{className:"demo-button",children:[n(e,{plain:!0,type:"primary",children:"\u6734\u7D20\u6309\u94AE"}),n(e,{plain:!0,type:"info",children:"\u6734\u7D20\u6309\u94AE"})]});const k=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain type='primary'>
        \u6734\u7D20\u6309\u94AE
      </Button>
      <Button plain type='info'>
        \u6734\u7D20\u6309\u94AE
      </Button>
    </div>
  )
}
`,w={code:k,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain type='primary'>
        \u6734\u7D20\u6309\u94AE
      </Button>
      <Button plain type='info'>
        \u6734\u7D20\u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-plain",meta:{title:"\u6734\u7D20\u6309\u94AE"}};var s=()=>t("div",{className:"demo-button",children:[n(e,{plain:!0,hairline:!0,type:"primary",children:"\u7EC6\u8FB9\u6846\u6309\u94AE"}),n(e,{plain:!0,hairline:!0,type:"info",children:"\u7EC6\u8FB9\u6846\u6309\u94AE"})]});const I=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain hairline type='primary'>
        \u7EC6\u8FB9\u6846\u6309\u94AE
      </Button>
      <Button plain hairline type='info'>
        \u7EC6\u8FB9\u6846\u6309\u94AE
      </Button>
    </div>
  )
}
`,L={code:I,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain hairline type='primary'>
        \u7EC6\u8FB9\u6846\u6309\u94AE
      </Button>
      <Button plain hairline type='info'>
        \u7EC6\u8FB9\u6846\u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-hairline",meta:{title:"\u7EC6\u8FB9\u6846"}};var m=()=>t("div",{className:"demo-button",children:[n(e,{disabled:!0,type:"primary",children:"\u7981\u7528\u72B6\u6001"}),n(e,{disabled:!0,type:"info",children:"\u7981\u7528\u72B6\u6001"})]});const z=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button disabled type='primary'>
        \u7981\u7528\u72B6\u6001
      </Button>
      <Button disabled type='info'>
        \u7981\u7528\u72B6\u6001
      </Button>
    </div>
  )
}
`,$={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button disabled type='primary'>
        \u7981\u7528\u72B6\u6001
      </Button>
      <Button disabled type='info'>
        \u7981\u7528\u72B6\u6001
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-disabled",meta:{title:"\u7981\u7528\u72B6\u6001"}};var E=()=>t("div",{className:"demo-button",children:[n(e,{loading:!0,type:"primary"}),n(e,{loading:!0,type:"primary",loadingType:"spinner"}),n(e,{loading:!0,loadingText:"\u52A0\u8F7D\u4E2D...",type:"info"})]});const T=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button loading type='primary' />
      <Button loading type='primary' loadingType='spinner' />
      <Button loading loadingText='\u52A0\u8F7D\u4E2D...' type='info' />
    </div>
  )
}
`,G={code:T,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button loading type='primary' />
      <Button loading type='primary' loadingType='spinner' />
      <Button loading loadingText='\u52A0\u8F7D\u4E2D...' type='info' />
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-loading",meta:{title:"\u52A0\u8F7D\u72B6\u6001"}};var B=()=>t("div",{className:"demo-button",children:[n(e,{square:!0,type:"primary",children:"\u65B9\u5F62\u6309\u94AE"}),n(e,{round:!0,type:"info",children:"\u5706\u5F62\u6309\u94AE"})]});const S=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button square type='primary'>
        \u65B9\u5F62\u6309\u94AE
      </Button>
      <Button round type='info'>
        \u5706\u5F62\u6309\u94AE
      </Button>
    </div>
  )
}
`,q={code:S,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button square type='primary'>
        \u65B9\u5F62\u6309\u94AE
      </Button>
      <Button round type='info'>
        \u5706\u5F62\u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-shape",meta:{title:"\u6309\u94AE\u5F62\u72B6"}};var v=()=>t("div",{className:"demo-button",children:[n(e,{icon:n(a,{}),type:"primary"}),n(e,{icon:n(a,{}),iconPosition:"left",type:"primary",children:"\u6309\u94AE"})]});const j=`import React from 'react'
import { Button } from 'react-vant'
import { Plus } from '@react-vant/icons'

import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button icon={<Plus />} type='primary' />
      <Button icon={<Plus />} iconPosition='left' type='primary'>
        \u6309\u94AE
      </Button>
    </div>
  )
}
`,W={code:j,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.2.7"},"@react-vant/icons":{type:"NPM",value:"0.0.10"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import { Plus } from '@react-vant/icons'

import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button icon={<Plus />} type='primary' />
      <Button icon={<Plus />} iconPosition='left' type='primary'>
        \u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-icon",meta:{title:"\u56FE\u6807\u6309\u94AE"}};var F=()=>t("div",{className:"demo-button",children:[n(e,{type:"primary",size:"large",children:"\u5927\u53F7\u6309\u94AE"}),n(e,{type:"primary",size:"normal",children:"\u666E\u901A\u6309\u94AE"}),n(e,{type:"primary",size:"small",children:"\u5C0F\u578B\u6309\u94AE"}),n(e,{type:"primary",size:"mini",children:"\u8FF7\u4F60\u6309\u94AE"})]});const H=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' size='large'>
        \u5927\u53F7\u6309\u94AE
      </Button>
      <Button type='primary' size='normal'>
        \u666E\u901A\u6309\u94AE
      </Button>
      <Button type='primary' size='small'>
        \u5C0F\u578B\u6309\u94AE
      </Button>
      <Button type='primary' size='mini'>
        \u8FF7\u4F60\u6309\u94AE
      </Button>
    </div>
  )
}
`,J={code:H,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' size='large'>
        \u5927\u53F7\u6309\u94AE
      </Button>
      <Button type='primary' size='normal'>
        \u666E\u901A\u6309\u94AE
      </Button>
      <Button type='primary' size='small'>
        \u5C0F\u578B\u6309\u94AE
      </Button>
      <Button type='primary' size='mini'>
        \u8FF7\u4F60\u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-size",meta:{title:"\u6309\u94AE\u5C3A\u5BF8"}};var y=()=>n("div",{className:"demo-button",children:n(e,{type:"primary",block:!0,round:!0,children:"\u5757\u7EA7\u5143\u7D20"})});const K=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' block round>
        \u5757\u7EA7\u5143\u7D20
      </Button>
    </div>
  )
}
`,O={code:K,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' block round>
        \u5757\u7EA7\u5143\u7D20
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-block",meta:{title:"\u5757\u7EA7\u5143\u7D20"}};var A=()=>t("div",{className:"demo-button",children:[n(e,{color:"#7232dd",children:"\u5355\u8272\u6309\u94AE"}),n(e,{color:"#7232dd",plain:!0,children:"\u5355\u8272\u6309\u94AE"}),n(e,{color:"linear-gradient(to right, #ff6034, #ee0a24)",children:"\u6E10\u53D8\u8272\u6309\u94AE"})]});const Q=`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button color='#7232dd'>\u5355\u8272\u6309\u94AE</Button>
      <Button color='#7232dd' plain>
        \u5355\u8272\u6309\u94AE
      </Button>
      <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>
        \u6E10\u53D8\u8272\u6309\u94AE
      </Button>
    </div>
  )
}
`,U={code:Q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button color='#7232dd'>\u5355\u8272\u6309\u94AE</Button>
      <Button color='#7232dd' plain>
        \u5355\u8272\u6309\u94AE
      </Button>
      <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>
        \u6E10\u53D8\u8272\u6309\u94AE
      </Button>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-color",meta:{title:"\u81EA\u5B9A\u4E49\u989C\u8272"}};var b=()=>n("div",{className:"demo-button",children:t(e.Group,{block:!0,round:!0,children:[n(e,{icon:n(P,{}),children:"\u4E0A\u4E00\u6B65"}),n(e,{icon:n(_,{}),children:"\u5237\u65B0"}),n(e,{iconPosition:"right",icon:n(N,{}),children:"\u4E0B\u4E00\u6B65"})]})});const V=`import { Arrow, ArrowLeft, Replay } from '@react-vant/icons'
import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button.Group block round>
        <Button icon={<ArrowLeft />}>\u4E0A\u4E00\u6B65</Button>
        <Button icon={<Replay />}>\u5237\u65B0</Button>
        <Button iconPosition='right' icon={<Arrow />}>
          \u4E0B\u4E00\u6B65
        </Button>
      </Button.Group>
    </div>
  )
}
`,X={code:V,lang:"tsx",dependencies:{"@react-vant/icons":{type:"NPM",value:"0.0.10"},react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.2.7"},"index.tsx":{type:"FILE",value:`import { Arrow, ArrowLeft, Replay } from '@react-vant/icons'
import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button.Group block round>
        <Button icon={<ArrowLeft />}>\u4E0A\u4E00\u6B65</Button>
        <Button icon={<Replay />}>\u5237\u65B0</Button>
        <Button iconPosition='right' icon={<Arrow />}>
          \u4E0B\u4E00\u6B65
        </Button>
      </Button.Group>
    </div>
  )
}
`},"style.less":{type:"FILE",value:`.demo-button {
  .rv-button {
    margin: 0 8px 12px 0;
  }

  .rv-button-group {
    .rv-button {
      margin: 0;
    }
  }
}
`}},key:"button-group",meta:{title:"\u6309\u94AE\u7EC4"}},Y=function({previewer:r=()=>null,api:d=()=>null}){const u=r;return n("div",{children:t("div",{children:[n("h1",{id:"button-\u6309\u94AE","data-anchor":"button-\u6309\u94AE",children:"Button \u6309\u94AE"}),n("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),n("p",{children:"\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u5982\u63D0\u4EA4\u8868\u5355\u3002"}),n("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),n(u,{code:"import { Button } from 'react-vant';",lang:"js"}),n("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),n("h3",{id:"\u6309\u94AE\u7C7B\u578B","data-anchor":"\u6309\u94AE\u7C7B\u578B",children:"\u6309\u94AE\u7C7B\u578B"}),t("p",{children:["\u6309\u94AE\u652F\u6301 ",n("code",{children:"default"}),"\u3001",n("code",{children:"primary"}),"\u3001",n("code",{children:"info"}),"\u3001",n("code",{children:"warning"}),"\u3001",n("code",{children:"danger"})," \u4E94\u79CD\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A ",n("code",{children:"default"}),"\u3002"]}),n("div",{children:n(u,o(i({},R),{children:n(h,{})}))}),n("h3",{id:"\u6734\u7D20\u6309\u94AE","data-anchor":"\u6734\u7D20\u6309\u94AE",children:"\u6734\u7D20\u6309\u94AE"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"plain"})," \u5C5E\u6027\u5C06\u6309\u94AE\u8BBE\u7F6E\u4E3A\u6734\u7D20\u6309\u94AE\uFF0C\u6734\u7D20\u6309\u94AE\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u989C\u8272\uFF0C\u80CC\u666F\u4E3A\u767D\u8272\u3002"]}),n("div",{children:n(u,o(i({},w),{children:n(p,{})}))}),n("h3",{id:"\u7EC6\u8FB9\u6846","data-anchor":"\u7EC6\u8FB9\u6846",children:"\u7EC6\u8FB9\u6846"}),t("p",{children:["\u8BBE\u7F6E ",n("code",{children:"hairline"})," \u5C5E\u6027\u53EF\u4EE5\u5C55\u793A 0.5px \u7684\u7EC6\u8FB9\u6846\u3002"]}),n("div",{children:n(u,o(i({},L),{children:n(s,{})}))}),n("h3",{id:"\u7981\u7528\u72B6\u6001","data-anchor":"\u7981\u7528\u72B6\u6001",children:"\u7981\u7528\u72B6\u6001"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"disabled"})," \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002"]}),n("div",{children:n(u,o(i({},$),{children:n(m,{})}))}),n("h3",{id:"\u52A0\u8F7D\u72B6\u6001","data-anchor":"\u52A0\u8F7D\u72B6\u6001",children:"\u52A0\u8F7D\u72B6\u6001"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"loading"})," \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u4E3A\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u72B6\u6001\u4E0B\u9ED8\u8BA4\u4F1A\u9690\u85CF\u6309\u94AE\u6587\u5B57\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",n("code",{children:"loadingText"})," \u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001\u4E0B\u7684\u6587\u5B57\u3002"]}),n("div",{children:n(u,o(i({},G),{children:n(E,{})}))}),n("h3",{id:"\u6309\u94AE\u5F62\u72B6","data-anchor":"\u6309\u94AE\u5F62\u72B6",children:"\u6309\u94AE\u5F62\u72B6"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"square"})," \u8BBE\u7F6E\u65B9\u5F62\u6309\u94AE\uFF0C\u901A\u8FC7 ",n("code",{children:"round"})," \u8BBE\u7F6E\u5706\u5F62\u6309\u94AE\u3002"]}),n("div",{children:n(u,o(i({},q),{children:n(B,{})}))}),n("h3",{id:"\u56FE\u6807\u6309\u94AE","data-anchor":"\u56FE\u6807\u6309\u94AE",children:"\u56FE\u6807\u6309\u94AE"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"icon"})," \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u56FE\u6807\uFF0C\u652F\u6301 Icon \u7EC4\u4EF6\u91CC\u7684\u6240\u6709\u56FE\u6807\u3002"]}),n("div",{children:n(u,o(i({},W),{children:n(v,{})}))}),n("h3",{id:"\u6309\u94AE\u5C3A\u5BF8","data-anchor":"\u6309\u94AE\u5C3A\u5BF8",children:"\u6309\u94AE\u5C3A\u5BF8"}),t("p",{children:["\u652F\u6301 ",n("code",{children:"large"}),"\u3001",n("code",{children:"normal"}),"\u3001",n("code",{children:"small"}),"\u3001",n("code",{children:"mini"})," \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A ",n("code",{children:"normal"}),"\u3002"]}),n("div",{children:n(u,o(i({},J),{children:n(F,{})}))}),n("h3",{id:"\u5757\u7EA7\u5143\u7D20","data-anchor":"\u5757\u7EA7\u5143\u7D20",children:"\u5757\u7EA7\u5143\u7D20"}),t("p",{children:["\u6309\u94AE\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A\u884C\u5185\u5757\u7EA7\u5143\u7D20\uFF0C\u901A\u8FC7 ",n("code",{children:"block"})," \u5C5E\u6027\u53EF\u4EE5\u5C06\u6309\u94AE\u7684\u5143\u7D20\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\u3002"]}),n("div",{children:n(u,o(i({},O),{children:n(y,{})}))}),n("h3",{id:"\u81EA\u5B9A\u4E49\u989C\u8272","data-anchor":"\u81EA\u5B9A\u4E49\u989C\u8272",children:"\u81EA\u5B9A\u4E49\u989C\u8272"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"color"})," \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\u3002"]}),n("div",{children:n(u,o(i({},U),{children:n(A,{})}))}),n("h3",{id:"\u6309\u94AE\u7EC4","data-anchor":"\u6309\u94AE\u7EC4",children:"\u6309\u94AE\u7EC4"}),t("p",{children:["\u901A\u8FC7 ",n("code",{children:"Button.Group"})," \u5C06\u591A\u4E2A\u6309\u94AE\u5E76\u6392\u663E\u793A\u3002"]}),n("div",{children:n(u,o(i({},X),{children:n(b,{})}))}),n("h2",{id:"api","data-anchor":"api",children:"API"}),n("h3",{id:"props","data-anchor":"props",children:"Props"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"type"}),t("td",{children:["\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"primary"})," ",n("code",{children:"info"})," ",n("code",{children:"warning"})," ",n("code",{children:"danger"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"default"})})]}),t("tr",{children:[n("td",{children:"size"}),t("td",{children:["\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"large"})," ",n("code",{children:"small"})," ",n("code",{children:"mini"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"normal"})})]}),t("tr",{children:[n("td",{children:"text"}),n("td",{children:"\u6309\u94AE\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"color"}),t("td",{children:["\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 ",n("code",{children:"linear-gradient"})," \u6E10\u53D8\u8272"]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"icon"}),n("td",{children:"\u6309\u94AE Icon"}),n("td",{children:n("em",{children:"ReactNode"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"iconPosition"}),t("td",{children:["\u56FE\u6807\u5C55\u793A\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"right"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"left"})})]}),t("tr",{children:[n("td",{children:"tag"}),n("td",{children:"\u6309\u94AE\u6839\u8282\u70B9\u7684 HTML \u6807\u7B7E"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"Button"})})]}),t("tr",{children:[n("td",{children:"nativeType"}),n("td",{children:"\u539F\u751F Button \u6807\u7B7E\u7684 type \u5C5E\u6027"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"Button"})})]}),t("tr",{children:[n("td",{children:"block"}),n("td",{children:"\u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"plain"}),n("td",{children:"\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"square"}),n("td",{children:"\u662F\u5426\u4E3A\u65B9\u5F62\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"round"}),n("td",{children:"\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"shadow"}),t("td",{children:["\u663E\u793A\u9634\u5F71\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"1"})," ",n("code",{children:"2"})," ",n("code",{children:"3"})]}),n("td",{children:n("em",{children:"boolean|number"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"hairline"}),n("td",{children:"\u662F\u5426\u4F7F\u7528 0.5px \u8FB9\u6846"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"loading"}),n("td",{children:"\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"loadingText"}),n("td",{children:"\u52A0\u8F7D\u72B6\u6001\u63D0\u793A\u6587\u5B57"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"loadingType"}),t("td",{children:[n("a",{href:"/components/loading",children:"\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B"}),"\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"spinner"})]}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"circular"})})]}),t("tr",{children:[n("td",{children:"loadingSize"}),n("td",{children:"\u52A0\u8F7D\u56FE\u6807\u5927\u5C0F"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"20px"})})]})]})]}),n("h3",{id:"events","data-anchor":"events",children:"Events"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u4E8B\u4EF6\u540D"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),n("tbody",{children:t("tr",{children:[n("td",{children:"onClick"}),n("td",{children:"\u70B9\u51FB\u6309\u94AE\uFF0C\u4E14\u6309\u94AE\u72B6\u6001\u4E0D\u4E3A\u52A0\u8F7D\u6216\u7981\u7528\u65F6\u89E6\u53D1"}),n("td",{children:n("em",{children:"event: Event"})})]})})]}),n("h3",{id:"buttongroup","data-anchor":"buttongroup",children:"Button.Group"}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u53C2\u6570"}),n("th",{children:"\u8BF4\u660E"}),n("th",{children:"\u7C7B\u578B"}),n("th",{children:"\u9ED8\u8BA4\u503C"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"type"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u7C7B\u578B"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"default"})})]}),t("tr",{children:[n("td",{children:"size"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"normal"})})]}),t("tr",{children:[n("td",{children:"iconPosition"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u56FE\u6807\u5C55\u793A\u4F4D\u7F6E"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"left"})})]}),t("tr",{children:[n("td",{children:"tag"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u6839\u8282\u70B9\u7684 HTML \u6807\u7B7E"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"Button"})})]}),t("tr",{children:[n("td",{children:"nativeType"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u6807\u7B7E\u7684 type \u5C5E\u6027"}),n("td",{children:n("em",{children:"string"})}),n("td",{children:n("code",{children:"button"})})]}),t("tr",{children:[n("td",{children:"block"}),n("td",{children:"\u7EDF\u4E00\u8BBE\u7F6E\u6309\u94AE\u4E3A\u5757\u7EA7\u5143\u7D20"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"plain"}),n("td",{children:"\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE\u7EC4"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"square"}),n("td",{children:"\u662F\u5426\u4E3A\u65B9\u5F62\u6309\u94AE\u7EC4"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"round"}),n("td",{children:"\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE\u7EC4"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"shadow"}),t("td",{children:["\u663E\u793A\u9634\u5F71\uFF0C\u53EF\u9009\u503C\u4E3A ",n("code",{children:"1"})," ",n("code",{children:"2"})," ",n("code",{children:"3"})]}),n("td",{children:n("em",{children:"boolean|number"})}),n("td",{children:n("code",{children:"false"})})]}),t("tr",{children:[n("td",{children:"disabled"}),n("td",{children:"\u662F\u5426\u7981\u7528\u6309\u94AE\u7EC4"}),n("td",{children:n("em",{children:"boolean"})}),n("td",{children:n("code",{children:"false"})})]})]})]}),n("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),n("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),n(u,{code:"import type { ButtonType, ButtonSize } from 'react-vant';",lang:"js"}),n("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),n("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),t("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",n("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),t("table",{children:[n("thead",{children:t("tr",{children:[n("th",{children:"\u540D\u79F0"}),n("th",{children:"\u9ED8\u8BA4\u503C"}),n("th",{children:"\u63CF\u8FF0"})]})}),t("tbody",{children:[t("tr",{children:[n("td",{children:"--rv-button-mini-height"}),n("td",{children:n("em",{children:"24px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-mini-padding"}),n("td",{children:n("em",{children:"0 var(--rv-padding-base)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-mini-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-xs)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-small-height"}),n("td",{children:n("em",{children:"32px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-small-padding"}),n("td",{children:n("em",{children:"0 var(--rv-padding-xs)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-small-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-sm)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-normal-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-md)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-normal-padding"}),n("td",{children:n("em",{children:"0 15px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-large-height"}),n("td",{children:n("em",{children:"50px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-height"}),n("td",{children:n("em",{children:"44px"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-line-height"}),n("td",{children:n("em",{children:"1.2"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-font-size"}),n("td",{children:n("em",{children:"var(--rv-font-size-lg)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-color"}),n("td",{children:n("em",{children:"var(--rv-text-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-default-border-color"}),n("td",{children:n("em",{children:"var(--rv-border-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-primary-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-primary-background-color"}),n("td",{children:n("em",{children:"var(--rv-primary-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-primary-border-color"}),n("td",{children:n("em",{children:"var(--rv-primary-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-success-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-success-background-color"}),n("td",{children:n("em",{children:"var(--rv-success-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-success-border-color"}),n("td",{children:n("em",{children:"var(--rv-success-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-danger-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-danger-background-color"}),n("td",{children:n("em",{children:"var(--rv-danger-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-danger-border-color"}),n("td",{children:n("em",{children:"var(--rv-danger-color)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-warning-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-warning-background-color"}),n("td",{children:n("em",{children:"var(--rv-orange)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-warning-border-color"}),n("td",{children:n("em",{children:"var(--rv-orange)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-border-width"}),n("td",{children:n("em",{children:"var(--rv-border-width-base)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-border-radius"}),n("td",{children:n("em",{children:"var(--rv-border-radius-sm)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-round-border-radius"}),n("td",{children:n("em",{children:"var(--rv-border-radius-max)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-plain-background-color"}),n("td",{children:n("em",{children:"var(--rv-white)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-disabled-opacity"}),n("td",{children:n("em",{children:"var(--rv-disabled-opacity)"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-icon-size"}),n("td",{children:n("em",{children:"1.2em"})}),n("td",{children:"-"})]}),t("tr",{children:[n("td",{children:"--rv-button-loading-icon-size"}),n("td",{children:n("em",{children:"20px"})}),n("td",{children:"-"})]})]})]})]})})},Z=[{Component:h,key:"button-type",title:"\u6309\u94AE\u7C7B\u578B"},{Component:p,key:"button-plain",title:"\u6734\u7D20\u6309\u94AE"},{Component:s,key:"button-hairline",title:"\u7EC6\u8FB9\u6846"},{Component:m,key:"button-disabled",title:"\u7981\u7528\u72B6\u6001"},{Component:E,key:"button-loading",title:"\u52A0\u8F7D\u72B6\u6001"},{Component:B,key:"button-shape",title:"\u6309\u94AE\u5F62\u72B6"},{Component:v,key:"button-icon",title:"\u56FE\u6807\u6309\u94AE"},{Component:F,key:"button-size",title:"\u6309\u94AE\u5C3A\u5BF8"},{Component:y,key:"button-block",title:"\u5757\u7EA7\u5143\u7D20"},{Component:A,key:"button-color",title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{Component:b,key:"button-group",title:"\u6309\u94AE\u7EC4"}],nn={simulator:{compact:!1}},tn=[{depth:1,text:"Button \u6309\u94AE",id:"button-\u6309\u94AE"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u6309\u94AE\u7C7B\u578B",id:"\u6309\u94AE\u7C7B\u578B"},{depth:3,text:"\u6734\u7D20\u6309\u94AE",id:"\u6734\u7D20\u6309\u94AE"},{depth:3,text:"\u7EC6\u8FB9\u6846",id:"\u7EC6\u8FB9\u6846"},{depth:3,text:"\u7981\u7528\u72B6\u6001",id:"\u7981\u7528\u72B6\u6001"},{depth:3,text:"\u52A0\u8F7D\u72B6\u6001",id:"\u52A0\u8F7D\u72B6\u6001"},{depth:3,text:"\u6309\u94AE\u5F62\u72B6",id:"\u6309\u94AE\u5F62\u72B6"},{depth:3,text:"\u56FE\u6807\u6309\u94AE",id:"\u56FE\u6807\u6309\u94AE"},{depth:3,text:"\u6309\u94AE\u5C3A\u5BF8",id:"\u6309\u94AE\u5C3A\u5BF8"},{depth:3,text:"\u5757\u7EA7\u5143\u7D20",id:"\u5757\u7EA7\u5143\u7D20"},{depth:3,text:"\u81EA\u5B9A\u4E49\u989C\u8272",id:"\u81EA\u5B9A\u4E49\u989C\u8272"},{depth:3,text:"\u6309\u94AE\u7EC4",id:"\u6309\u94AE\u7EC4"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"Button.Group",id:"buttongroup"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],en="/src/components/button/README.md",un="Button \u6309\u94AE",rn="1683550562000";var cn=r=>r.children({MdContent:Y,demos:Z,frontmatter:nn,slugs:tn,filePath:en,title:un,updatedTime:rn});export{Y as MdContent,cn as default,Z as demos,en as filePath,nn as frontmatter,tn as slugs,un as title,rn as updatedTime};
