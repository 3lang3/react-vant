import React from 'react'
import { CartO, ChatO, ShopO } from '@react-vant/icons'
import { ActionBar } from 'react-vant'

export default () => {
  return (
    <div className='demo-action-bar'>
      <ActionBar>
        <ActionBar.Icon
          icon={<ChatO />}
          text='客服'
          onClick={() => console.log('chat click')}
        />
        <ActionBar.Icon
          icon={<CartO />}
          text='购物车'
          onClick={() => console.log('cart click')}
        />
        <ActionBar.Icon
          icon={<ShopO />}
          text='店铺'
          onClick={() => console.log('shop click')}
        />
        <ActionBar.Button
          type='danger'
          text='立即购买'
          onClick={() => console.log('button click')}
        />
      </ActionBar>
    </div>
  )
}
