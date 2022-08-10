import React from 'react'
import { Flex } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-flex'>
      <Flex direction='row'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
      <Flex direction='row-reverse'>
        <Flex.Item span={8}>span: 8-1</Flex.Item>
        <Flex.Item span={8}>span: 8-2</Flex.Item>
        <Flex.Item span={8}>span: 8-3</Flex.Item>
      </Flex>
    </div>
  )
}
