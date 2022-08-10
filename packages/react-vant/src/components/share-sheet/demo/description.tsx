import React, { useState } from 'react'
import { Cell, ShareSheet } from 'react-vant'

const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link', description: '描述信息' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
]

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell isLink title='显示分享面板' onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title='立即分享给好友'
        description='描述信息'
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log('option', option)
          console.log('index', index)
          setVisible(false)
        }}
      />
    </>
  )
}
