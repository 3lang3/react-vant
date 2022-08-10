import React, { useRef, useState } from 'react'
import { Checkbox, Button } from 'react-vant'
import { CheckboxGroupInstance } from '../PropsType'

export default () => {
  const ref = useRef<CheckboxGroupInstance>(null)
  const [checkAll, setCheckAll] = useState(['a'])

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
        <Checkbox name='a'>复选框组a</Checkbox>
        <Checkbox name='b'>复选框组b</Checkbox>
        <Checkbox name='c'>复选框组c</Checkbox>
      </Checkbox.Group>
      <div className='demo-checkbox-buttons'>
        <Button type='primary' onClick={() => ref.current?.toggleAll(true)}>
          全选
        </Button>
        <Button type='primary' onClick={() => ref.current?.toggleAll()}>
          反选
        </Button>
      </div>
    </div>
  )
}
