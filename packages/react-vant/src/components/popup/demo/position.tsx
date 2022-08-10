import React, { useState } from 'react'
import { Cell, Popup, PopupPosition } from 'react-vant'

export default () => {
  const [state, setState] = useState<PopupPosition>('')

  const onClose = () => setState('')

  return (
    <>
      <Cell title='顶部弹出' isLink onClick={() => setState('top')} />
      <Cell title='底部弹出' isLink onClick={() => setState('bottom')} />
      <Cell title='左侧弹出' isLink onClick={() => setState('left')} />
      <Cell title='右侧弹出' isLink onClick={() => setState('right')} />

      <Popup
        visible={state === 'top'}
        style={{ height: '30%' }}
        position='top'
        onClose={onClose}
      />
      <Popup
        visible={state === 'bottom'}
        style={{ height: '30%' }}
        position='bottom'
        onClose={onClose}
      />
      <Popup
        visible={state === 'left'}
        style={{ width: '30%', height: '100%' }}
        position='left'
        onClose={onClose}
      />
      <Popup
        visible={state === 'right'}
        style={{ width: '30%', height: '100%' }}
        position='right'
        onClose={onClose}
      />
    </>
  )
}
