import React, { forwardRef } from 'react'
import clsx from 'clsx'

import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

import {
  DateTimePickerProps,
  DateTimePickerInstance,
  TimePickerProps,
  DatePickerProps,
} from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('datetime-picker')

const DateTimePicker = forwardRef<DateTimePickerInstance, DateTimePickerProps>(
  (props, ref) => {
    const isTimePicker = props.type === 'time'

    if (isTimePicker)
      return (
        <TimePicker
          ref={ref}
          className={clsx(bem())}
          {...(props as TimePickerProps)}
        />
      )
    return (
      <DatePicker
        ref={ref}
        className={clsx(bem())}
        {...(props as DatePickerProps)}
      />
    )
  }
)

export default DateTimePicker
export { DateTimePicker }
export type { DateTimePickerProps } from './PropsType'
