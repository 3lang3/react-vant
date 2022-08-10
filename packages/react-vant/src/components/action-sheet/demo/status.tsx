import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant'

const actions2 = [
  { name: '选项一', color: '#ee0a24' },
  { name: '选项二', disabled: true },
  { loading: true },
]

export default () => {
  const [visible, setVisible] = useState(false)
  const onCancel = () => setVisible(false)
  return (
    <>
      <Cell title='选项状态' isLink onClick={() => setVisible(true)} />
      <ActionSheet
        visible={visible}
        onCancel={onCancel}
        actions={actions2}
        cancelText='取消'
      />
    </>
  )
}
