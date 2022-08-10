import React, { useRef } from 'react'
import { CountDown, Grid, Toast } from 'react-vant'
import { PauseCircleO, PlayCircleO, Replay } from '@react-vant/icons'
import type { CountDownInstance } from 'react-vant'

export default () => {
  const ref = useRef<CountDownInstance>()
  return (
    <>
      <CountDown
        ref={ref}
        time={3000}
        millisecond
        format='ss:SSS'
        autoStart={false}
        onFinish={() => Toast.info('倒计时结束')}
      />
      <br />
      <Grid columnNum={3}>
        <Grid.Item
          icon={<PlayCircleO />}
          text='开始'
          onClick={() => ref.current.start()}
        />
        <Grid.Item
          icon={<PauseCircleO />}
          text='暂停'
          onClick={() => ref.current.pause()}
        />
        <Grid.Item
          icon={<Replay />}
          text='重置'
          onClick={() => ref.current.reset()}
        />
      </Grid>
    </>
  )
}
