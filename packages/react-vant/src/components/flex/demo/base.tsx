import React from 'react'
import { Flex } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex justify='center' align='center'>
        <Flex.Item span={12}>span: 12</Flex.Item>
        <Flex.Item span={12}>span: 12</Flex.Item>
      </Flex>

      <Flex>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
