import React from 'react'
import { VolumeO } from '@react-vant/icons'
import { NoticeBar } from 'react-vant'

export default () => {
  return (
    <NoticeBar
      leftIcon={<VolumeO />}
      text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
    />
  )
}
