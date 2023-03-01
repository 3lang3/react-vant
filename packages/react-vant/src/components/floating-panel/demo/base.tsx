import React from 'react'
import { ProductCard, Grid, FloatingPanel, Search, Divider } from 'react-vant'
import { LocationO, StarO, CartO, Discount } from '@react-vant/icons'

export default () => {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text='附近' />
          <Grid.Item icon={<StarO />} onClick={() => 0} text='收藏' />
          <Grid.Item icon={<CartO />} onClick={() => 0} text='购物车' />
          <Grid.Item icon={<Discount />} onClick={() => 0} text='优惠' />
        </Grid>
        <Divider>好物推荐</Divider>
        {Array.from(Array(5)).map((_, index) => (
          <ProductCard
            key={index}
            title={'热卖商品' + index}
            thumb='https://img.yzcdn.cn/vant/ipad.jpeg'
            desc='热卖商品，优惠后 2.00'
            num={3}
            price='2.00'
          />
        ))}
      </FloatingPanel>
    </div>
  )
}
