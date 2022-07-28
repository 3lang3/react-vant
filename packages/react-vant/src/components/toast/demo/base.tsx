import React from 'react'
import { Toast, Cell } from 'react-vant'

export default () => {
  return (
    <>
      <Cell title='文字提示' isLink onClick={() => Toast.info('提示内容')} />
      <Cell
        title='加载提示'
        isLink
        onClick={() => {
          Toast.loading({
            message: '加载中...',
            forbidClick: true,
          })
        }}
      />
      <Cell title='成功提示' isLink onClick={() => Toast.success('成功文案')} />
      <Cell title='失败提示' isLink onClick={() => Toast.fail('失败文案')} />
    </>
  )
}
