import React from 'react'
import { Flex } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex gutter={16} wrap='wrap'>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
        <Flex.Item span={8}>span: 8</Flex.Item>
      </Flex>
    </div>
  )
}
