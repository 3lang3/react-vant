import React, { useState } from 'react'
import { DropdownMenu, Cell, Switch } from 'react-vant'
import { option1 } from './options'

export default () => {
  const [value, setValue] = useState<Record<string, string | number>>({})

  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item name='value1' options={option1} />
      <DropdownMenu.Item title='筛选' name='value2'>
        <Cell center title='包邮' rightIcon={<Switch size={24} />} />
        <Cell center title='团购' rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  )
}
