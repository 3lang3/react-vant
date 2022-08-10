import React from 'react'
import { AddO, MoreO, MusicO } from '@react-vant/icons'
import { Space, Toast, Button, Popover } from 'react-vant'

const iconActions = [
  { text: '选项一', icon: <AddO /> },
  { text: '选项二', icon: <MusicO /> },
  { text: '选项三', icon: <MoreO /> },
]

const disabledActions = [
  { text: '选项一', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' },
]
export default () => {
  const select = option => Toast.info(option.text)

  return (
    <Space>
      <Popover
        placement='bottom-start'
        actions={iconActions}
        onSelect={select}
        reference={<Button type='primary'>展示图标</Button>}
      />
      <Popover
        actions={disabledActions}
        onSelect={select}
        reference={<Button type='primary'>禁用选项</Button>}
      />
    </Space>
  )
}
