import React, { useState } from 'react'
import { ActionSheet, Cell } from 'react-vant'

const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
const actions1 = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三', subname: '描述信息' },
]

export default () => {
  const [visible, setVisible] = useState(-1)
  const onCancel = () => setVisible(-1)
  return (
    <>
      <Cell title='基础用法' isLink onClick={() => setVisible(1)} />
      <Cell title='展示取消按钮' isLink onClick={() => setVisible(2)} />
      <Cell title='展示描述信息' isLink onClick={() => setVisible(3)} />

      <ActionSheet
        visible={visible === 1}
        onCancel={onCancel}
        actions={actions}
      />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText='取消'
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description='这是一段描述信息'
        actions={actions1}
        cancelText='取消'
      />
    </>
  )
}
