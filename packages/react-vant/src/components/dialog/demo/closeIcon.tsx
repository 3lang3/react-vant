import React from 'react'
import { Cell, Dialog } from 'react-vant'
import { Close } from '@react-vant/icons'

export default () => {
  return (
    <>
      <Cell
        title='关闭按钮'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '标题',
            closeable: true,
            theme: 'round-button',
            message: '代码是写出来给人看的，附带能在机器上运行',
          })
        }
      />
      <Cell
        title='自定义关闭按钮'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '标题',
            closeable: true,
            closeIcon: <Close />,
            theme: 'round-button',
            message: '代码是写出来给人看的，附带能在机器上运行',
          })
        }
      />
    </>
  )
}
