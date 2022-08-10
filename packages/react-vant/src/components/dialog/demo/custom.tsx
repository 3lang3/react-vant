import React from 'react'
import { Cell, Dialog } from 'react-vant'

export default () => {
  return (
    <Cell
      title='自定义内容'
      isLink
      onClick={() =>
        Dialog.alert({
          title: '标题',
          closeable: true,
          theme: 'round-button',
          message: (
            <div style={{ textAlign: 'center', margin: '16px' }}>
              自定义内容：代码是写出来给人看的，附带能在机器上运行
            </div>
          ),
        })
      }
    />
  )
}
