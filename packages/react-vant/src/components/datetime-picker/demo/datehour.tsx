import React from 'react'
import { DatetimePicker } from 'react-vant'

export default () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <DatetimePicker
      type='datehour'
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
    />
  )
}
