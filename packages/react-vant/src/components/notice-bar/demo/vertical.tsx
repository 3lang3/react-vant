import React from 'react'
import { VolumeO } from '@react-vant/icons'
import { NoticeBar, Swiper } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-notice-bar'>
      <NoticeBar leftIcon={<VolumeO />}>
        <Swiper
          autoplay={3000}
          indicator={false}
          vertical
          className='notice-swipe'
        >
          <Swiper.Item>内容 1</Swiper.Item>
          <Swiper.Item>内容 2</Swiper.Item>
          <Swiper.Item>内容 3</Swiper.Item>
        </Swiper>
      </NoticeBar>
    </div>
  )
}
