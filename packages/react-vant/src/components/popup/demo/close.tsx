import { Fire } from '@react-vant/icons'
import React, { useState } from 'react'
import { Popup, Cell } from 'react-vant'

export default () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const [showCustomCloseIcon, setShowCustomCloseIcon] = useState(false)
  const [showCustomIconPosition, setShowCustomIconPosition] = useState(false)

  return (
    <>
      <Cell title='关闭图标' isLink onClick={() => setShowCloseIcon(true)} />
      <Cell
        title='自定义关闭图标'
        isLink
        onClick={() => setShowCustomCloseIcon(true)}
      />
      <Cell
        title='图标位置'
        isLink
        onClick={() => setShowCustomIconPosition(true)}
      />
      <Popup
        visible={showCloseIcon}
        closeable
        style={{ height: '30%' }}
        position='bottom'
        onClose={() => setShowCloseIcon(false)}
      />
      <Popup
        visible={showCustomCloseIcon}
        closeable
        style={{ height: '30%' }}
        position='bottom'
        closeIcon={<Fire />}
        onClose={() => setShowCustomCloseIcon(false)}
      />
      <Popup
        visible={showCustomIconPosition}
        closeable
        style={{ height: '30%' }}
        position='bottom'
        closeIconPosition='top-left'
        onClose={() => setShowCustomIconPosition(false)}
      />
    </>
  )
}
