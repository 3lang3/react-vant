import React from 'react'
import { Grid } from 'react-vant'
import { HomeO, Search } from '@react-vant/icons'

export default () => {
  return (
    <Grid columnNum={2}>
      <Grid.Item icon={<HomeO />} text='文字' badge={{ dot: true }} />
      <Grid.Item icon={<Search />} text='文字' badge={{ content: '99+' }} />
    </Grid>
  )
}
