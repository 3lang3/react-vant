import React, { useState } from 'react'
import { Circle, Flex, Button } from 'react-vant'

const format = (rate: number) => Math.min(Math.max(rate, 0), 100)

export default () => {
  const [rate, setRate] = useState(70)

  const add = () => {
    setRate(r => format(r + 20))
  }

  const reduce = () => {
    setRate(r => format(r - 20))
  }

  return (
    <>
      <Circle strokeWidth={60} rate={rate} text='宽度定制' />
      <Circle
        color='#ee0a24'
        layerColor='#ebedf0'
        rate={rate}
        text='颜色定制'
      />
      <Circle
        color={{
          '0%': '#3fecff',
          '100%': '#6149f6',
        }}
        rate={rate}
        text='渐变色'
      />
      <Circle
        color='#07c160'
        clockwise={false}
        rate={rate}
        text='逆时针'
        style={{ marginTop: 15 }}
      />
      <Circle
        color='#7232dd'
        clockwise={false}
        size={120}
        rate={rate}
        text='大小定制'
        style={{ marginTop: 15 }}
      />

      <Flex style={{ marginTop: 15 }} align='center' justify='center'>
        <Button.Group>
          <Button onClick={add} type='primary'>
            增加
          </Button>
          <Button onClick={reduce} type='danger'>
            减少
          </Button>
        </Button.Group>
      </Flex>
    </>
  )
}
