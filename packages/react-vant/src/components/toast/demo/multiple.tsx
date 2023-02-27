import React from 'react'
import { Cell, Toast, Switch } from 'react-vant'
import { ToastReturnType } from '../PropsType'

let t1: ToastReturnType
let t2: ToastReturnType

export default () => {
  return (
    <>
      <Cell title='开启'>
        <Switch
          style={{ display: 'block', float: 'right' }}
          size={20}
          onChange={v => {
            Toast.allowMultiple(v)
          }}
        />
      </Cell>
      <Cell
        title='第一个Toast'
        isLink
        onClick={() =>
          (t1 = Toast({
            type: 'loading',
            message: '第一个Toast',
            duration: 0,
            position: 'top',
          }))
        }
      />
      <Cell
        title='第二个Toast'
        isLink
        onClick={() =>
          (t2 = Toast({
            message: '第二个Toast',
            duration: 0,
            position: 'bottom',
          }))
        }
      />

      <Cell title='清除第一个Toast' isLink onClick={() => t1.clear()} />
      <Cell title='清楚第二个Toast' isLink onClick={() => t2.clear()} />
    </>
  )
}
