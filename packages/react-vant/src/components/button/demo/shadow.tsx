import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' block shadow>
        阴影按钮
      </Button>
    </div>
  )
}
