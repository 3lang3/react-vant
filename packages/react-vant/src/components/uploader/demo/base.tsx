import React from 'react'
import { Uploader } from 'react-vant'
import './style.less'

export default () => {
  return <Uploader accept='*' onChange={v => console.log(v)} />
}
