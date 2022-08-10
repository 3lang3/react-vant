/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox.Group onChange={v => console.log(v)} defaultValue={['a', 'b']}>
        <Checkbox name='a'>复选框组a</Checkbox>
        <Checkbox name='b'>复选框组b</Checkbox>
        <Checkbox name='c'>复选框组c</Checkbox>
      </Checkbox.Group>
    </div>
  )
}
