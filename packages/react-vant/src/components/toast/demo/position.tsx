import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='顶部展示'
        isLink
        onClick={() =>
          Toast({
            message: '顶部展示',
            position: 'top',
          })
        }
      />
      <Cell
        title='底部展示'
        isLink
        onClick={() =>
          Toast({
            message: '底部展示',
            position: 'bottom',
          })
        }
      />
    </>
  )
}
