import React, { useState } from 'react'
import { DatetimePicker, Field } from 'react-vant'

export default () => {
  const [value, setValue] = useState(new Date())
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type='date'
      title='选择年月日'
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onConfirm={setValue}
    >
      {(val, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label='选择年月日'
            value={val.toLocaleDateString()}
            placeholder='请选择日期'
            onClick={() => actions.open()}
          />
        )
      }}
    </DatetimePicker>
  )
}
