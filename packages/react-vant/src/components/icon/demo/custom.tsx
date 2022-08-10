import React from 'react'
import { Space } from 'react-vant'
import { createFromIconfontCN } from '@react-vant/icons'

const IconFont = createFromIconfontCN(
  '//at.alicdn.com/t/font_1619071_dqiwns2g0d.js'
)

export default () => {
  return (
    <Space className='demo-icon' gap={20}>
      <IconFont name='icon-weunblock' />
      <IconFont name='icon-1111' />
    </Space>
  )
}
