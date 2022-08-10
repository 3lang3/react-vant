import React from 'react'
import { Cell, Dialog } from 'react-vant'

export default () => {
  return (
    <>
      <Cell
        title='圆角按钮弹窗'
        isLink
        onClick={() =>
          Dialog.alert({
            title: '标题',
            theme: 'round-button',
            showCancelButton: true,
            message: '代码是写出来给人看的，附带能在机器上运行',
          })
        }
      />
      <Cell
        title='圆角按钮弹窗（无标题）'
        isLink
        onClick={() =>
          Dialog.alert({
            message: '代码是写出来给人看的，附带能在机器上运行',
            theme: 'round-button',
          })
        }
      />
    </>
  )
}
