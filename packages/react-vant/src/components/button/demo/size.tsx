import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' size='large'>
        大号按钮
      </Button>
      <Button type='primary' size='normal'>
        普通按钮
      </Button>
      <Button type='primary' size='small'>
        小型按钮
      </Button>
      <Button type='primary' size='mini'>
        迷你按钮
      </Button>
    </div>
  )
}
