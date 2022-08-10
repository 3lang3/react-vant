import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary' block round>
        块级元素
      </Button>
    </div>
  )
}
