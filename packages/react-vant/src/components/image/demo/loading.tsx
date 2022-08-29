import React from 'react'
import { Flex, Image, Loading } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-image'>
      <Flex wrap='wrap' gutter={20}>
        <Flex.Item span={8}>
          <Image width='100%' height='24vw' />
          <div className='text'>默认提示</div>
        </Flex.Item>
        <Flex.Item span={8}>
          <Image
            loadingIcon={<Loading type='spinner' />}
            width='100%'
            height='24vw'
          />
          <div className='text'>自定义提示</div>
        </Flex.Item>
      </Flex>
    </div>
  )
}
