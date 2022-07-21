import React from 'react'
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
      onOversize={() => Toast.info('文件大小不能超过15kb')}
    />
  )
}
