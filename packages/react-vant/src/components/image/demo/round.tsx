import React from 'react'
import { Flex, Image } from 'react-vant'
import './style.less'

const src = 'https://img.yzcdn.cn/vant/cat.jpeg'

const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        {fits.map(el => (
          <Flex.Item key={el} span={8}>
            <Image round fit={el} width='100%' height='27vw' src={src} />{' '}
            <div className='text'>{el}</div>
          </Flex.Item>
        ))}
      </Flex>
    </div>
  )
}
