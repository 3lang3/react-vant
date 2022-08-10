import React, { useState } from 'react'
import { Radio, Toast } from 'react-vant'

let timer

export default () => {
  const [value, setValue] = useState('1')

  return (
    <Radio.Group
      value={value}
      onChange={val => {
        Toast.loading({ forbidClick: true })
        clearTimeout(timer)
        timer = setTimeout(() => {
          Toast.clear()
          setValue(val as string)
        }, 500)
      }}
    >
      <Radio name='1'>单选框 1</Radio>
      <Radio name='2'>单选框 2</Radio>
    </Radio.Group>
  )
}
