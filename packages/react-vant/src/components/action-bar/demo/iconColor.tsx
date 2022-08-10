import React from 'react'
import { CartO, ChatO, Star } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO color='red' />} text='客服' />
        <ActionBar.Icon icon={<CartO color='red' />} text='购物车' />
        <ActionBar.Icon icon={<Star color='red' />} text='店铺' />
        <ActionBar.Button type='warning' text='加入购物车' />
        <ActionBar.Button type='danger' text='立即购买' />
      </ActionBar>
    </div>
  )
}
