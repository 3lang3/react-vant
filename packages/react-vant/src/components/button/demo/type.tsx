import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
    </div>
  )
}
