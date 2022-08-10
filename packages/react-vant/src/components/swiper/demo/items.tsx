import React from 'react'
import { Swiper, Toast } from 'react-vant'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
