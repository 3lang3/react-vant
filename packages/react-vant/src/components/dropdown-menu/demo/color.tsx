import React, { useState } from 'react'
import { DropdownMenu } from 'react-vant'
import { option1, option2 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu
      activeColor='#f44336'
      value={value}
      onChange={v => setValue(v)}
    >
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item name='value2' options={option2} />
    </DropdownMenu>
  )
}
