var b=Object.defineProperty,x=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var C=(n,t,r)=>t in n?b(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,d=(n,t)=>{for(var r in t||(t={}))I.call(t,r)&&C(n,r,t[r]);if(m)for(var r of m(t))_.call(t,r)&&C(n,r,t[r]);return n},l=(n,t)=>x(n,U(t));import{j as e,a as u,R as h}from"./main.531c777e.js";import{dn as i,da as k,aT as P,dJ as w,di as o,B as R}from"./WaterMark.6f52b203.js";const j=[{url:"https://img.yzcdn.cn/vant/sand.jpg"},{url:"https://img.yzcdn.cn/vant/sand.text"}];var v=()=>e(i,{accept:"*",defaultValue:j,onChange:n=>console.log(n)});const z=`import React from 'react'
import { Uploader } from 'react-vant'
import './style.less'

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg', // \u56FE\u7247\u6587\u4EF6
  },
  {
    url: 'https://img.yzcdn.cn/vant/sand.text', // \u5176\u4ED6\u6587\u4EF6
  },
]

export default () => {
  return (
    <Uploader
      accept='*'
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  )
}
`,M={code:z,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant'
import './style.less'

const defaultValue = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg', // \u56FE\u7247\u6587\u4EF6
  },
  {
    url: 'https://img.yzcdn.cn/vant/sand.text', // \u5176\u4ED6\u6587\u4EF6
  },
]

export default () => {
  return (
    <Uploader
      accept='*'
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  )
}
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-base",meta:{title:"\u57FA\u7840\u7528\u6CD5"}},V="https://nextjs-upload-service.vercel.app/api/upload",a=async n=>{try{const t=new FormData;return t.append("source",n),(await(await fetch(V,{method:"POST",body:t})).json()).image}catch{return{url:`demo_path/${n.name}`}}},c=[{url:"https://img.yzcdn.cn/vant/sand.jpg",filename:"\u56FE\u7247\u540D\u79F0"},{url:"https://img.yzcdn.cn/vant/tree.jpg",filename:"\u56FE\u7247\u540D\u79F0"}];var f=()=>e(i,{defaultValue:c,upload:a});const O=`import React from 'react'
import { Uploader } from 'react-vant'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return <Uploader defaultValue={demoData} upload={upload} />
}
`,T={code:O,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return <Uploader defaultValue={demoData} upload={upload} />
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-upload",meta:{title:"\u81EA\u52A8\u4E0A\u4F20"}};var A=()=>e(i,{multiple:!0,upload:a,defaultValue:[c[0]],maxCount:2,maxSize:15*1024,onOversize:()=>k.info("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb")});const L=`import React from 'react'
import { Toast, Uploader } from 'react-vant'
import { demoData, upload } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      multiple
      upload={upload}
      defaultValue={[demoData[0]]}
      maxCount={2}
      maxSize={15 * 1024}
      onOversize={() => Toast.info('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb')}
    />
  )
}
`,S={code:L,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Toast, Uploader } from 'react-vant'
import { demoData, upload } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      multiple
      upload={upload}
      defaultValue={[demoData[0]]}
      maxCount={2}
      maxSize={15 * 1024}
      onOversize={() => Toast.info('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC715kb')}
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-limit",meta:{title:"\u4E0A\u4F20\u9650\u5236"}};var B=()=>e(i,{defaultValue:c,upload:a,previewSize:60,uploadIcon:e(P,{}),previewCoverRender:n=>n.filename&&e("div",{style:{position:"absolute",bottom:0,width:" 100%",color:"#fff",fontSize:12,textAlign:"center",background:"#00000030"},children:n.filename})});const N=`import React from 'react'
import { Uploader } from 'react-vant'
import { upload, demoData } from './utils'
import { Fire } from '@react-vant/icons'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // \u81EA\u5B9A\u4E49\u89C6\u56FE\u5C3A\u5BF8
      uploadIcon={<Fire />} // \u81EA\u5B9A\u4E49\u4E0A\u4F20\u56FE\u6807
      previewCoverRender={(
        item // \u81EA\u5B9A\u4E49\u9884\u89C8\u5185\u5BB9
      ) =>
        item.filename && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: ' 100%',
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              background: '#00000030',
            }}
          >
            {item.filename}
          </div>
        )
      }
    />
  )
}
`,$={code:N,lang:"tsx",dependencies:{react:{type:"NPM",value:">=16.14.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"@react-vant/icons":{type:"NPM",value:"0.0.6"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader } from 'react-vant'
import { upload, demoData } from './utils'
import { Fire } from '@react-vant/icons'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      previewSize={60} // \u81EA\u5B9A\u4E49\u89C6\u56FE\u5C3A\u5BF8
      uploadIcon={<Fire />} // \u81EA\u5B9A\u4E49\u4E0A\u4F20\u56FE\u6807
      previewCoverRender={(
        item // \u81EA\u5B9A\u4E49\u9884\u89C8\u5185\u5BB9
      ) =>
        item.filename && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: ' 100%',
              color: '#fff',
              fontSize: 12,
              textAlign: 'center',
              background: '#00000030',
            }}
          >
            {item.filename}
          </div>
        )
      }
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-preview",meta:{title:"\u81EA\u5B9A\u4E49\u9884\u89C8"}};var g=()=>e(i,{defaultValue:c,upload:a,onDelete:()=>w.confirm({title:"\u63D0\u793A",message:"\u786E\u8BA4\u5220\u9664?\u{1F914}"})});const q=`import React from 'react'
import { Uploader, Dialog } from 'react-vant'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      onDelete={() => Dialog.confirm({ title: '\u63D0\u793A', message: '\u786E\u8BA4\u5220\u9664?\u{1F914}' })}
    />
  )
}
`,H={code:q,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Uploader, Dialog } from 'react-vant'
import { upload, demoData } from './utils'
import './style.less'

export default () => {
  return (
    <Uploader
      defaultValue={demoData}
      upload={upload}
      onDelete={() => Dialog.confirm({ title: '\u63D0\u793A', message: '\u786E\u8BA4\u5220\u9664?\u{1F914}' })}
    />
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-close",meta:{title:"\u5F02\u6B65\u5173\u95ED"}},Z=n=>{const[t,r]=h.useState([]),s=h.useRef(0);return h.useEffect(()=>{n.value!==void 0&&(!t[0]||n.value!==t[0].url)&&r([{url:n.value,id:s.current++}])},[n.value]),e(i,{value:t,upload:a,maxCount:1,onChange:p=>{var F,E;r(p);const y=(F=p[0])==null?void 0:F.url;(E=n.onChange)==null||E.call(n,y)}})};var D=()=>{const[n]=o.useForm();return u(o,{colon:!0,form:n,footer:e(R,{style:{marginTop:20},onClick:async()=>{const r=await n.validateFields();console.log(r)},type:"primary",round:!0,block:!0,children:"\u786E\u8BA4"}),children:[e(o.Item,{rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF"}],label:"\u4E0A\u4F20\u5934\u50CF",name:"avatar",initialValue:"https://iili.io/NZiS9e.png",children:e(Z,{})}),e(o.Item,{rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF"}],label:"\u4E0A\u4F20\u9644\u4EF6",name:"files",children:e(i,{accept:"*"})})]})};const W=`import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant'
import { upload } from './utils'
import './style.less'

type AvatarUploaderProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUploader = (props: AvatarUploaderProps) => {
  const [tasks, setTasks] = React.useState<UploaderValueItem[]>([])
  const idCountRef = React.useRef(0)

  React.useEffect(() => {
    if (props.value === undefined) return
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }])
    }
  }, [props.value])

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items)
    const currentUrl = items[0]?.url
    props.onChange?.(currentUrl)
  }

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  )
}

export default () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type='primary'
          round
          block
        >
          \u786E\u8BA4
        </Button>
      }
    >
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u5934\u50CF'
        name='avatar'
        initialValue='https://iili.io/NZiS9e.png'
      >
        {/* \u901A\u8FC7\u5C01\u88C5\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\uFF0C\u6309\u9700\u5B9E\u73B0\u5B9E\u9645\u4E1A\u52A1\u903B\u8F91 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u9644\u4EF6'
        name='files'
      >
        <Uploader accept='*' />
      </Form.Item>
    </Form>
  )
}
`,J={code:W,lang:"tsx",dependencies:{react:{type:"NPM",value:"18.2.0"},"react-vant":{type:"NPM",value:"3.0.0-rc.4"},"index.tsx":{type:"FILE",value:`import React from 'react'
import { Form, Uploader, UploaderValueItem, Button } from 'react-vant'
import { upload } from './utils'
import './style.less'

type AvatarUploaderProps = {
  value?: string
  onChange?: (val: string) => void
}

const AvatarUploader = (props: AvatarUploaderProps) => {
  const [tasks, setTasks] = React.useState<UploaderValueItem[]>([])
  const idCountRef = React.useRef(0)

  React.useEffect(() => {
    if (props.value === undefined) return
    if (!tasks[0] || props.value !== tasks[0].url) {
      setTasks([{ url: props.value, id: idCountRef.current++ }])
    }
  }, [props.value])

  const innerChange = (items: UploaderValueItem[]) => {
    setTasks(items)
    const currentUrl = items[0]?.url
    props.onChange?.(currentUrl)
  }

  return (
    <Uploader
      value={tasks}
      upload={upload}
      maxCount={1}
      onChange={innerChange}
    />
  )
}

export default () => {
  const [form] = Form.useForm()

  const onFinish = async () => {
    const values = await form.validateFields()
    console.log(values)
  }
  return (
    <Form
      colon
      form={form}
      footer={
        <Button
          style={{ marginTop: 20 }}
          onClick={onFinish}
          type='primary'
          round
          block
        >
          \u786E\u8BA4
        </Button>
      }
    >
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u5934\u50CF'
        name='avatar'
        initialValue='https://iili.io/NZiS9e.png'
      >
        {/* \u901A\u8FC7\u5C01\u88C5\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\uFF0C\u6309\u9700\u5B9E\u73B0\u5B9E\u9645\u4E1A\u52A1\u903B\u8F91 */}
        <AvatarUploader />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: '\u8BF7\u4E0A\u4F20\u5934\u50CF' }]}
        label='\u4E0A\u4F20\u9644\u4EF6'
        name='files'
      >
        <Uploader accept='*' />
      </Form.Item>
    </Form>
  )
}
`},"utils.ts":{type:"FILE",value:`const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// \u5B9E\u9645\u4E1A\u52A1\u4E2D\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5BF9\u5E94\u4E0A\u4F20\u903B\u8F91
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    return json.image
  } catch (error) {
    return { url: \`demo_path/\${file.name}\` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '\u56FE\u7247\u540D\u79F0',
  },
]
`},"style.less":{type:"FILE",value:`.demo-uploader {
  background-color: #fff;

  .avatar {
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
    height: 200px;
    border-radius: 20px;
    width: 100%;
    .rv-uploader__preview {
      margin: 0;
      border-radius: 50%;
    }
  }
}
`}},key:"uploader-form",meta:{title:"\u8868\u5355\u4E2D\u4F7F\u7528"}},G=function({previewer:n=()=>null,api:t=()=>null}){const r=n;return e("div",{children:u("div",{children:[e("h1",{id:"uploader-\u6587\u4EF6\u4E0A\u4F20","data-anchor":"uploader-\u6587\u4EF6\u4E0A\u4F20",children:"Uploader \u6587\u4EF6\u4E0A\u4F20"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(r,{code:"import { Uploader } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u7528\u6CD5","data-anchor":"\u57FA\u7840\u7528\u6CD5",children:"\u57FA\u7840\u7528\u6CD5"}),e(r,l(d({},M),{children:e(v,{})})),e("h3",{id:"\u81EA\u52A8\u4E0A\u4F20","data-anchor":"\u81EA\u52A8\u4E0A\u4F20",children:"\u81EA\u52A8\u4E0A\u4F20"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"upload"})," \u65B9\u6CD5\u53EF\u4EE5\u5B8C\u6210\u6587\u4EF6\u81EA\u52A8\u4E0A\u4F20\u3002"]}),e(r,l(d({},T),{children:e(f,{})})),e("h3",{id:"\u4E0A\u4F20\u9650\u5236","data-anchor":"\u4E0A\u4F20\u9650\u5236",children:"\u4E0A\u4F20\u9650\u5236"}),u("p",{children:[e("code",{children:"maxCount"})," ",e("code",{children:"maxSize"})," \u53EF\u4EE5\u8BBE\u7F6E\u6700\u5927\u4E0A\u4F20\u5C3A\u5BF8\u548C\u6700\u5927\u6570\u91CF\u3002"]}),e(r,l(d({},S),{children:e(A,{})})),e("h3",{id:"\u81EA\u5B9A\u4E49\u9884\u89C8","data-anchor":"\u81EA\u5B9A\u4E49\u9884\u89C8",children:"\u81EA\u5B9A\u4E49\u9884\u89C8"}),u("ul",{children:[u("li",{children:[e("code",{children:"previewCoverRender"})," \u53EF\u4EE5\u81EA\u5B9A\u4E49\u9884\u89C8\u4FE1\u606F"]}),u("li",{children:["\u60F3\u8981\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u5219\u53EF\u4EE5\u4F7F\u7528 ",e("code",{children:"previewSize"})]})]}),e(r,l(d({},$),{children:e(B,{})})),e("h3",{id:"\u5F02\u6B65\u5173\u95ED","data-anchor":"\u5F02\u6B65\u5173\u95ED",children:"\u5F02\u6B65\u5173\u95ED"}),u("p",{children:[e("code",{children:"onDelete"})," \u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"}),", \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u7528 ",e("code",{children:"Dialog"})," \u6765\u5B8C\u6210\u786E\u8BA4\u529F\u80FD\u3002"]}),e(r,l(d({},H),{children:e(g,{})})),e("h3",{id:"\u8868\u5355\u4E2D\u4F7F\u7528","data-anchor":"\u8868\u5355\u4E2D\u4F7F\u7528",children:"\u8868\u5355\u4E2D\u4F7F\u7528"}),u("p",{children:[e("code",{children:"Uploader"})," \u7EC4\u4EF6\u5929\u751F\u652F\u6301 ",e("code",{children:"Form.Item"})," \u5D4C\u5957\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\uFF0C\u5982\u679C\u4F60\u9700\u8981\u5BF9\u6570\u636E\u7ED3\u6784\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u4F8B\u5B50"]}),e(r,l(d({},J),{children:e(D,{})})),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"}),e("td",{children:e("em",{children:"UploaderValueItem[]"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u9ED8\u8BA4\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868"}),e("td",{children:e("em",{children:"UploaderValueItem[]"})}),e("td",{children:e("code",{children:"[]"})})]}),u("tr",{children:[e("td",{children:"accept"}),u("td",{children:["\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C",e("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",children:"doc"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"image/*"})})]}),u("tr",{children:[e("td",{children:"name"}),e("td",{children:"\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u7684\u7B2C\u4E8C\u9879\u53C2\u6570\u4E2D\u83B7\u53D6"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"previewSize"}),u("td",{children:["\u9884\u89C8\u56FE\u548C\u4E0A\u4F20\u533A\u57DF\u7684\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"80px"})})]}),u("tr",{children:[e("td",{children:"previewImage"}),e("td",{children:"\u662F\u5426\u5728\u4E0A\u4F20\u5B8C\u6210\u540E\u5C55\u793A\u9884\u89C8\u56FE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewFullImage"}),e("td",{children:"\u662F\u5426\u5728\u70B9\u51FB\u9884\u89C8\u56FE\u540E\u5C55\u793A\u5168\u5C4F\u56FE\u7247\u9884\u89C8"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"previewCoverRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u8986\u76D6\u5728\u9884\u89C8\u533A\u57DF\u4E0A\u65B9\u7684\u5185\u5BB9"}),e("td",{children:e("em",{children:"(item: UploaderValueItem) => React.ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"previewOptions"}),u("td",{children:["\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"/components/image-preview",children:"ImagePreview"})]}),e("td",{children:e("em",{children:"object"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"multiple"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009\uFF0C\u90E8\u5206\u5B89\u5353\u673A\u578B\u4E0D\u652F\u6301"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"readOnly"}),e("td",{children:"\u662F\u5426\u5C06\u4E0A\u4F20\u533A\u57DF\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"deletable"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"deleteRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u5220\u9664\u6309\u94AE\u89C6\u56FE"}),e("td",{children:e("em",{children:"(del: () => void) => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"showUpload"}),e("td",{children:"\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"capture"}),u("td",{children:["\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"camera"})," (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxSize"}),u("td",{children:["\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\u4E3A ",e("code",{children:"byte"})]}),e("td",{children:e("em",{children:"number | string | (file: File) => boolean"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"maxCount"}),e("td",{children:"\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"resultType"}),u("td",{children:["\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"file"})," ",e("code",{children:"text"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"dataUrl"})})]}),u("tr",{children:[e("td",{children:"uploadText"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u6587\u5B57\u63D0\u793A"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"statusTextRender"}),e("td",{children:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u72B6\u6001\u6587\u6848"}),e("td",{children:e("em",{children:"(status: 'failed' | 'pending') => ReactNode"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"imageFit"}),u("td",{children:["\u9884\u89C8\u56FE\u88C1\u526A\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u89C1 ",e("a",{href:"/components/image",children:"Image"})," \u7EC4\u4EF6"]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:e("code",{children:"cover"})})]}),u("tr",{children:[e("td",{children:"uploadIcon"}),e("td",{children:"\u4E0A\u4F20\u533A\u57DF\u56FE\u6807"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:e("code",{children:"<Photograph />"})})]}),u("tr",{children:[e("td",{children:"children"}),e("td",{children:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE"}),e("td",{children:e("em",{children:"ReactNode"})}),e("td",{children:"-"})]})]})]}),e("blockquote",{children:e("p",{children:"\u6CE8\u610F\uFF1Aaccept\u3001capture \u548C multiple \u4E3A\u6D4F\u89C8\u5668 input \u6807\u7B7E\u7684\u539F\u751F\u5C5E\u6027\uFF0C\u79FB\u52A8\u7AEF\u5404\u79CD\u673A\u578B\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u7684\u652F\u6301\u7A0B\u5EA6\u6709\u6240\u5DEE\u5F02\uFF0C\u56E0\u6B64\u5728\u4E0D\u540C\u673A\u578B\u548C WebView \u4E0B\u53EF\u80FD\u51FA\u73B0\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\u3002"})}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u7EC4\u4EF6\u503C\u66F4\u65B0\u65F6\u8C03\u7528"}),e("td",{children:e("em",{children:"UploaderValueItem[]"})})]}),u("tr",{children:[e("td",{children:"onOversize"}),e("td",{children:"\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(files: File[]) => void"})})]}),u("tr",{children:[e("td",{children:"onClickUpload"}),e("td",{children:"\u70B9\u51FB\u4E0A\u4F20\u533A\u57DF\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: MouseEvent"})})]}),u("tr",{children:[e("td",{children:"onClickPreview"}),e("td",{children:"\u70B9\u51FB\u9884\u89C8\u56FE\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(item: UploaderValueItem, index: number) => void"})})]}),u("tr",{children:[e("td",{children:"onClosePreview"}),e("td",{children:"\u5173\u95ED\u5168\u5C4F\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"() => void"})})]}),u("tr",{children:[e("td",{children:"onDelete"}),e("td",{children:"\u5220\u9664\u6587\u4EF6\u9884\u89C8\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"(item: UploaderValueItem) => boolean|Promise<boolean>|void"})})]}),u("tr",{children:[e("td",{children:"beforeRead"}),u("td",{children:["\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6\uFF0C",e("br",{}),"\u652F\u6301\u8FD4\u56DE ",e("code",{children:"Promise"})]}),e("td",{children:e("em",{children:"(file: File,files: File[]) => Promise<File | false> | File | false"})})]})]})]}),e("h3",{id:"uploadervalueitem-\u7C7B\u578B","data-anchor":"uploadervalueitem-\u7C7B\u578B",children:"UploaderValueItem \u7C7B\u578B"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u5C5E\u6027"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"key"}),e("td",{children:"\u552F\u4E00\u6807\u8BC6"}),e("td",{children:e("code",{children:"string | number"})}),e("td",{children:"\u6570\u7EC4\u4E0B\u6807"})]}),u("tr",{children:[e("td",{children:"url"}),e("td",{children:"\u8D44\u6E90\u5730\u5740"}),e("td",{}),e("td",{})]}),u("tr",{children:[e("td",{children:"thumbnail"}),e("td",{children:"\u7F29\u7565\u56FE\u5730\u5740"}),e("td",{children:e("code",{children:"string"})}),e("td",{children:e("code",{children:"url"})})]}),u("tr",{children:[e("td",{children:"file"}),e("td",{children:"\u6E90\u6587\u4EF6"}),e("td",{children:e("code",{children:"File"})}),e("td",{children:"-"})]})]})]}),e("h3",{id:"resulttype-\u53EF\u9009\u503C","data-anchor":"resulttype-\u53EF\u9009\u503C",children:"ResultType \u53EF\u9009\u503C"}),u("p",{children:[e("code",{children:"resultType"})," \u5B57\u6BB5\u8868\u793A\u6587\u4EF6\u8BFB\u53D6\u7ED3\u679C\u7684\u7C7B\u578B\uFF0C\u4E0A\u4F20\u5927\u6587\u4EF6\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528 file \u7C7B\u578B\uFF0C\u907F\u514D\u5361\u987F\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"file"}),e("td",{children:"\u7ED3\u679C\u4EC5\u5305\u542B File \u5BF9\u8C61"})]}),u("tr",{children:[e("td",{children:"text"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u7684\u6587\u672C\u5185\u5BB9"})]}),u("tr",{children:[e("td",{children:"dataUrl"}),e("td",{children:"\u7ED3\u679C\u5305\u542B File \u5BF9\u8C61\uFF0C\u4EE5\u53CA\u6587\u4EF6\u5BF9\u5E94\u7684 base64 \u7F16\u7801"})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(r,{code:"import type { UploaderInstance, UploaderResultType, UploaderValueItem } from 'react-vant';",lang:"js"}),u("p",{children:[e("code",{children:"UploaderInstance"})," \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A"]}),e(r,{code:`import { useRef } from 'react';
import type { UploaderInstance } from 'react-vant';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();`,lang:"js"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"/components/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-uploader-gap"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:e("code",{children:"\u4E0A\u4F20\u89C6\u56FE\u95F4\u8DDD"})})]}),u("tr",{children:[e("td",{children:"--rv-uploader-size"}),e("td",{children:e("em",{children:"80px"})}),e("td",{children:e("code",{children:"\u4E0A\u4F20\u89C6\u56FE\u5C3A\u5BF8"})})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-size"}),e("td",{children:e("em",{children:"24px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-4)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-6)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-text-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-background-color"}),e("td",{children:e("em",{children:"var(--rv-gray-1)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-upload-active-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-icon-size"}),e("td",{children:e("em",{children:"14px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-delete-background-color"}),e("td",{children:e("em",{children:"rgba(0, 0, 0, 0.7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-background-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-size"}),e("td",{children:e("em",{children:"20px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-padding"}),e("td",{children:e("em",{children:"0 var(--rv-padding-base)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-margin-top"}),e("td",{children:e("em",{children:"var(--rv-padding-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-file-name-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-7)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-text-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-background-color"}),e("td",{children:e("em",{children:"fade(var(--rv-gray-8), 88%)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-sm)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-mask-message-line-height"}),e("td",{children:e("em",{children:"var(--rv-line-height-xs)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-size"}),e("td",{children:e("em",{children:"22px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-loading-icon-color"}),e("td",{children:e("em",{children:"var(--rv-white)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-uploader-disabled-opacity"}),e("td",{children:e("em",{children:"var(--rv-disabled-opacity)"})}),e("td",{children:"-"})]})]})]}),e("h2",{id:"\u5E38\u89C1\u95EE\u9898","data-anchor":"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),e("h3",{id:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6","data-anchor":"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6",children:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F"}),u("p",{children:["\u90E8\u5206\u624B\u673A\u5728\u62CD\u7167\u4E0A\u4F20\u65F6\u4F1A\u51FA\u73B0\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7 ",e("a",{href:"https://github.com/fengyuanchen/compressorjs",children:"compressorjs"})," \u6216\u5176\u4ED6\u5F00\u6E90\u5E93\u8FDB\u884C\u5904\u7406\u3002"]}),e("blockquote",{children:u("p",{children:[e("code",{children:"compressorjs"})," \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u56FE\u7247\u5904\u7406\u5E93\uFF0C\u63D0\u4F9B\u4E86\u56FE\u7247\u538B\u7F29\u3001\u56FE\u7247\u65CB\u8F6C\u7B49\u80FD\u529B\u3002"]})}),e("h4",{id:"\u793A\u4F8B","data-anchor":"\u793A\u4F8B",children:"\u793A\u4F8B"}),u("p",{children:["\u4F7F\u7528 ",e("code",{children:"compressorjs"})," \u8FDB\u884C\u5904\u7406\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B:"]}),e(r,{code:`export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs \u9ED8\u8BA4\u5F00\u542F checkOrientation \u9009\u9879
      // \u4F1A\u5C06\u56FE\u7247\u4FEE\u6B63\u4E3A\u6B63\u786E\u65B9\u5411
      new Compressor(file, {
        success: () => resolve(file),
        error(err) {
          console.log(err.message);
          resolve(false)
        },
      });
    });
  };
  return <Uploader beforeRead={beforeRead} />;
};`,lang:"jsx"}),e("h3",{id:"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A","data-anchor":"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A",children:"\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F"}),e("p",{children:"\u76EE\u524D Chrome\u3001Safari \u7B49\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5C55\u793A HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u56E0\u6B64\u4E0A\u4F20\u540E\u65E0\u6CD5\u5728 Uploader \u7EC4\u4EF6\u4E2D\u8FDB\u884C\u9884\u89C8\u3002"}),u("p",{children:["[HEIF] \u683C\u5F0F\u7684\u517C\u5BB9\u6027\u8BF7\u53C2\u8003 ",e("a",{href:"https://caniuse.com/?search=heic",children:"caniuse"}),"\u3002"]})]})})},K=[{Component:v,key:"uploader-base",title:"\u57FA\u7840\u7528\u6CD5"},{Component:f,key:"uploader-upload",title:"\u81EA\u52A8\u4E0A\u4F20"},{Component:A,key:"uploader-limit",title:"\u4E0A\u4F20\u9650\u5236"},{Component:B,key:"uploader-preview",title:"\u81EA\u5B9A\u4E49\u9884\u89C8"},{Component:g,key:"uploader-close",title:"\u5F02\u6B65\u5173\u95ED"},{Component:D,key:"uploader-form",title:"\u8868\u5355\u4E2D\u4F7F\u7528"}],Q={simulator:{compact:!1,style:{background:"#fff"}}},X=[{depth:1,text:"Uploader \u6587\u4EF6\u4E0A\u4F20",id:"uploader-\u6587\u4EF6\u4E0A\u4F20"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u7528\u6CD5",id:"\u57FA\u7840\u7528\u6CD5"},{depth:3,text:"\u81EA\u52A8\u4E0A\u4F20",id:"\u81EA\u52A8\u4E0A\u4F20"},{depth:3,text:"\u4E0A\u4F20\u9650\u5236",id:"\u4E0A\u4F20\u9650\u5236"},{depth:3,text:"\u81EA\u5B9A\u4E49\u9884\u89C8",id:"\u81EA\u5B9A\u4E49\u9884\u89C8"},{depth:3,text:"\u5F02\u6B65\u5173\u95ED",id:"\u5F02\u6B65\u5173\u95ED"},{depth:3,text:"\u8868\u5355\u4E2D\u4F7F\u7528",id:"\u8868\u5355\u4E2D\u4F7F\u7528"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"UploaderValueItem \u7C7B\u578B",id:"uploadervalueitem-\u7C7B\u578B"},{depth:3,text:"ResultType \u53EF\u9009\u503C",id:"resulttype-\u53EF\u9009\u503C"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"},{depth:2,text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898"},{depth:3,text:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C 90 \u5EA6\uFF1F",id:"\u62CD\u7167\u4E0A\u4F20\u7684\u56FE\u7247\u88AB\u65CB\u8F6C-90-\u5EA6"},{depth:4,text:"\u793A\u4F8B",id:"\u793A\u4F8B"},{depth:3,text:"\u4E0A\u4F20 HEIC/HEIF \u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A\uFF1F",id:"\u4E0A\u4F20-heicheif-\u683C\u5F0F\u7684\u56FE\u7247\u540E\u65E0\u6CD5\u5C55\u793A"}],Y="/src/components/uploader/README.md",ee="Uploader \u6587\u4EF6\u4E0A\u4F20",ue="1658500653000";var le=n=>n.children({MdContent:G,demos:K,frontmatter:Q,slugs:X,filePath:Y,title:ee,updatedTime:ue});export{G as MdContent,le as default,K as demos,Y as filePath,Q as frontmatter,X as slugs,ee as title,ue as updatedTime};
