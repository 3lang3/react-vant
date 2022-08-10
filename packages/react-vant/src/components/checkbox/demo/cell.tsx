import React, { useState } from 'react'
import { Checkbox, Cell } from 'react-vant'
import { ShopO } from '@react-vant/icons'

export default () => {
  const [cellCheck, setCellCheck] = useState([])

  const toggle = name => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter(el => el !== name)
      : [...cellCheck, name]
    setCellCheck(newValue)
  }

  return (
    <div className='demo-checkbox'>
      <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
        <Cell.Group>
          <Cell
            clickable
            title='单选框1'
            icon={<ShopO />}
            onClick={() => toggle('a')}
            rightIcon={<Checkbox name='a' />}
          />
          <Cell
            clickable
            title='单选框2'
            icon={<ShopO />}
            onClick={() => toggle('b')}
            rightIcon={<Checkbox name='b' />}
          />
        </Cell.Group>
      </Checkbox.Group>
    </div>
  )
}
