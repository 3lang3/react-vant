import { Arrow, ArrowLeft, Replay } from '@react-vant/icons'
import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button.Group block round>
        <Button icon={<ArrowLeft />}>上一步</Button>
        <Button icon={<Replay />}>刷新</Button>
        <Button iconPosition='right' icon={<Arrow />}>
          下一步
        </Button>
      </Button.Group>
    </div>
  )
}
