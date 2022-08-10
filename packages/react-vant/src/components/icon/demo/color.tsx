import React from 'react'
import { Space } from 'react-vant'
import { ChatO, FireO } from '@react-vant/icons'

export default () => {
  return (
    <Space className='demo-icon' gap={20}>
      <ChatO color='#f44336' />
      <FireO color='#3f45ff' />
    </Space>
  )
}
