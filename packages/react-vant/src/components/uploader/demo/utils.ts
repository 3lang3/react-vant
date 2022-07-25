const DEMO_UPLOAD_API = 'https://nextjs-upload-service.vercel.app/api/upload'

// 实际业务中需要自己实现对应上传逻辑
export const upload = async (file: File) => {
  try {
    const body = new FormData()
    body.append('source', file)
    const resp = await fetch(DEMO_UPLOAD_API, {
      method: 'POST',
      body,
    })
    const json = await resp.json()
    // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
    return json.image
  } catch (error) {
    return { url: `demo_path/${file.name}` }
  }
}

export const demoData = [
  {
    url: 'https://img.yzcdn.cn/vant/sand.jpg',
    filename: '图片名称',
  },
  {
    url: 'https://img.yzcdn.cn/vant/tree.jpg',
    filename: '图片名称',
  },
]
