import React from 'react'
import { Image } from 'react-vant'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

export default () => {
  return (
    <div className='demo-image'>
      <Image width='100' height='100' src={src} />
    </div>
  )
}
