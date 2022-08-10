import React from 'react'
import { Badge, Space } from 'react-vant'
import { Success, Cross, Down } from '@react-vant/icons'

const Child = () => (
  <div
    style={{ width: 40, height: 40, background: '#f2f3f5', borderRadius: 4 }}
  />
)

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  )
}
