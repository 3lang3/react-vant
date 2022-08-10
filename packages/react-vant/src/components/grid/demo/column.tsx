import React from 'react'
import { Grid } from 'react-vant'
import { ShopO } from '@react-vant/icons'

export default () => {
  return (
    <Grid columnNum={3}>
      {Array.from({ length: 6 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text='文字' />
      ))}
    </Grid>
  )
}
