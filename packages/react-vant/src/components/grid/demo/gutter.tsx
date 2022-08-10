import React from 'react'
import { Grid } from 'react-vant'
import { ShopO } from '@react-vant/icons'

export default () => {
  return (
    <Grid gutter={10}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text='文字' />
      ))}
    </Grid>
  )
}
