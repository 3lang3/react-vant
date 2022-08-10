import React from 'react'
import { CartO, ChatO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'
import './style.less'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} text='客服' />
        <ActionBar.Icon icon={<CartO />} text='购物车' />
        <ActionBar.Button color='#be99ff' type='warning' text='加入购物车' />
        <ActionBar.Button color='#7232dd' type='danger' text='立即购买' />
      </ActionBar>
    </div>
  )
}
