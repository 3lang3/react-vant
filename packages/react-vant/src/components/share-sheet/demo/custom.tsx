import React, { useState } from 'react'
import { ShareSheet, Cell } from 'react-vant'

const options = [
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
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
