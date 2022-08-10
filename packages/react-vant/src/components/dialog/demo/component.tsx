import React, { useState } from 'react'
import { Cell, Dialog, Toast } from 'react-vant'
import './style.less'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title='组件调用' isLink onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title='标题'
        showCancelButton
        onConfirm={() => {
          Toast.info('点击确认按钮')
          setVisible(false)
        }}
        onCancel={() => setVisible(false)}
      >
        <img
          className='demo-dialog-img'
          src='https://img.yzcdn.cn/vant/apple-3.jpg'
          alt='2131'
        />
      </Dialog>
    </>
  )
}
