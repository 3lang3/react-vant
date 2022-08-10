import React from 'react'
import { Grid, Image } from 'react-vant'

export default () => {
  return (
    <Grid border={false} columnNum={3}>
      <Grid.Item>
        <Image src='https://img.yzcdn.cn/vant/apple-1.jpg' />
      </Grid.Item>
      <Grid.Item>
        <Image src='https://img.yzcdn.cn/vant/apple-2.jpg' />
      </Grid.Item>
      <Grid.Item>
        <Image src='https://img.yzcdn.cn/vant/apple-3.jpg' />
      </Grid.Item>
    </Grid>
  )
}
