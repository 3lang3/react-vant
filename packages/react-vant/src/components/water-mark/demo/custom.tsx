import React from 'react'
import { Button, WaterMark } from 'react-vant'

import './style.less'

const textProps = {
  content: 'react vant',
}

const imageProps = {
  image: {
    src: '/rv-watermark.svg',
    width: 115,
    height: 27,
  },
  width: 120,
  height: 60,
}

export default () => {
  const [props, setProps] = React.useState<{ [key: string]: any }>(textProps)
  const [fullPage, setFullPage] = React.useState(true)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>普通水印</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>图片水印</Button>
      <br />
      <Button onClick={() => setFullPage(v => !v)}>
        {fullPage ? '局部区域' : '整个页面'}
      </Button>
      <WaterMark {...props} fullPage={fullPage} />
    </div>
  )
}
