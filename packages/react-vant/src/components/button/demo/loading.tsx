import React from 'react'
import { Button } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-button'>
      <Button loading type='primary' />
      <Button loading type='primary' loadingType='spinner' />
      <Button loading loadingText='加载中...' type='info' />
    </div>
  )
}
