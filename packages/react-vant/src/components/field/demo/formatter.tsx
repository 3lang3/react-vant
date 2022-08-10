import React, { useState } from 'react'
import { Field } from 'react-vant'

export default () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const formatter = val => val.replace(/\d/g, '')

  return (
    <>
      <Field
        value={value1}
        label='文本'
        formatter={formatter}
        placeholder='在输入时执行格式化'
        onChange={setValue1}
      />
      <Field
        value={value2}
        label='文本'
        formatter={formatter}
        formatTrigger='onBlur'
        placeholder='在失焦时执行格式化'
        onChange={setValue2}
      />
    </>
  )
}
