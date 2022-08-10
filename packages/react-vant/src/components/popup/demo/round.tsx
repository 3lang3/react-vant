import React, { useState } from 'react'
import { Popup, Cell } from 'react-vant'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title='圆角弹窗' isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        style={{ height: '30%' }}
        position='bottom'
        round
        onClose={() => setVisible(false)}
      />
    </>
  )
}
