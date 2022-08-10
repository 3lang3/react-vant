import { ShopO } from '@react-vant/icons'
import React, { useState } from 'react'
import { Radio, Cell } from 'react-vant'

export default () => {
  const [cellValue, setCellValue] = useState('')
  return (
    <Radio.Group value={cellValue}>
      <Cell.Group>
        <Cell
          clickable
          title='单选框1'
          icon={<ShopO />}
          onClick={() => setCellValue('1')}
          rightIcon={<Radio name='1' />}
        />
        <Cell
          clickable
          title='单选框2'
          icon={<ShopO />}
          onClick={() => setCellValue('2')}
          rightIcon={<Radio name='2' />}
        />
      </Cell.Group>
    </Radio.Group>
  )
}
