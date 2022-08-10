import React from 'react'
import { DatetimePicker } from 'react-vant'

export default () => {
  return (
    <DatetimePicker
      type='time'
      minHour='10'
      maxHour='20'
      defaultValue='12:00'
      filter={(type, options) => {
        if (type === 'minute') {
          return options.filter(option => +option % 5 === 0)
        }
        return options
      }}
    />
  )
}
