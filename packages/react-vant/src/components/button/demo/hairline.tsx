import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button plain hairline type='primary'>
        细边框按钮
      </Button>
      <Button plain hairline type='info'>
        细边框按钮
      </Button>
    </div>
  )
}
