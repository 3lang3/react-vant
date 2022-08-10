import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain type='primary'>
        朴素按钮
      </Button>
      <Button plain type='info'>
        朴素按钮
      </Button>
    </div>
  )
}
