import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon icon={<ChatO />} badge={{ dot: true }} text='客服' />
        <ActionBar.Icon icon={<CartO />} badge={{ content: 5 }} text='购物车' />
        <ActionBar.Icon icon={<ShopO />} badge={{ content: 12 }} text='店铺' />
        <ActionBar.Button type='warning' text='加入购物车' />
        <ActionBar.Button type='danger' text='立即购买' />
      </ActionBar>
    </div>
  )
}
