import React, { useState } from 'react'
import { Popup, Cell } from 'react-vant'

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title='展示弹出层' isLink onClick={() => setVisible(true)} />
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div style={{ padding: '30px 50px' }}>内容</div>
      </Popup>
    </>
  )
}
