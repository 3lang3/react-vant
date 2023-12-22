import React, { forwardRef, useMemo } from 'react'

import Picker from '../picker'

import {
  DatePickerProps,
  DatetimePickerColumnType,
  DateTimePickerInstance,
} from './PropsType'
import { getMonthEndDay, getTrueValue, times } from './utils'
import { isDate } from '../utils/validate/date'
import { padZero } from '../utils'
import { useUpdateEffect } from '../hooks'
import useRefState from '../hooks/use-ref-state'
import { mergeProps } from '../utils/get-default-props'

const DatePicker = forwardRef<DateTimePickerInstance, DatePickerProps>(
  (p, ref) => {
    const props = mergeProps(p, {
      type: 'datetime',
      placeholder: false,
      minDate: DefaultMinDate,
      maxDate: DefaultMaxDate,
      formatter: (type: string, value: string) => value,
    })
    const {
      value,
      defaultValue,
      formatter,
      columnsOrder,
      type: datePickerType,
      filter,
      minDate,
      maxDate,
      ...pickerProps
    } = props

    const formatValue = date => {
      if (!isDate(date)) {
        date = new Date()
      }

      date = Math.max(date, minDate.getTime())
      date = Math.min(date, maxDate.getTime())

      return new Date(date)
    }

    const [currentDate, setCurrentDate, currentDateRef] = useRefState(() =>
      formatValue(value || defaultValue)
    )

    const getBoundary = (type: 'max' | 'min', value: Date) => {
      const boundary = props[`${type}Date`]
      const year = boundary.getFullYear()
      let month = 1
      let date = 1
      let hour = 0
      let minute = 0

      if (type === 'max') {
        month = 12
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1)
        hour = 23
        minute = 59
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate()
          if (value.getDate() === date) {
            hour = boundary.getHours()
            if (value.getHours() === hour) {
              minute = boundary.getMinutes()
            }
          }
        }
      }

      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute,
      }
    }

    const originColumns = useMemo(() => {
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary(
        'max',
        currentDateRef.current
      )
      const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary(
        'min',
        currentDateRef.current
      )

      let result = [
        {
          type: 'year',
          range: [minYear, maxYear],
        },
        {
          type: 'month',
          range: [minMonth, maxMonth],
        },
        {
          type: 'day',
          range: [minDate, maxDate],
        },
        {
          type: 'hour',
          range: [minHour, maxHour],
        },
        {
          type: 'minute',
          range: [minMinute, maxMinute],
        },
      ]

      switch (datePickerType) {
        case 'date':
          result = result.slice(0, 3)
          break
        case 'year-month':
          result = result.slice(0, 2)
          break
        case 'month-day':
          result = result.slice(1, 3)
          break
        case 'datehour':
          result = result.slice(0, 4)
          break
        default:
          break
      }

      if (columnsOrder) {
        const columnsOrderArr = columnsOrder.concat(
          result.map(column => column.type)
        )
        result.sort(
          (a, b) =>
            columnsOrderArr.indexOf(a.type) - columnsOrderArr.indexOf(b.type)
        )
      }

      return result.map(({ type, range: rangeArr }) => {
        // 根据范围获取每列的值
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index: number) => {
          return padZero(rangeArr[0] + index)
        }) as string[]

        if (filter) {
          values = filter(type, values)
        }

        return {
          type,
          values,
        }
      })
    }, [columnsOrder, currentDateRef.current, minDate, maxDate])

    const columns = useMemo(
      () =>
        originColumns.map(column =>
          column.values.map(value => formatter(column.type, value))
        ),
      [originColumns, formatter]
    )

    const pickerValue = useMemo(() => {
      const value = props.popup
        ? formatValue(currentDateRef.current)
        : currentDateRef.current
      const values = originColumns.map(column => {
        switch (column.type) {
          case 'year':
            return formatter('year', `${value.getFullYear()}`)
          case 'month':
            return formatter('month', padZero(value.getMonth() + 1))
          case 'day':
            return formatter('day', padZero(value.getDate()))
          case 'hour':
            return formatter('hour', padZero(value.getHours()))
          case 'minute':
            return formatter('minute', padZero(value.getMinutes()))
          default:
            // no default
            return ''
        }
      })
      return values
    }, [props.value, currentDateRef.current, formatValue])

    const updateInnerValue = (indexes: number[]) => {
      const { type } = props

      const getValue = (datetimePickerColumnType: DatetimePickerColumnType) => {
        let index = 0
        originColumns.forEach((column, columnIndex) => {
          if (datetimePickerColumnType === column.type) {
            index = columnIndex
          }
        })

        const { values } = originColumns[index]
        return getTrueValue(values[indexes[index]])
      }

      let year = null
      let month = null
      let day = null
      if (type === 'month-day') {
        year = (currentDate || minDate).getFullYear()
        month = getValue('month')
        day = getValue('day')
      } else {
        year = getValue('year')
        month = getValue('month')
        day = type === 'year-month' ? 1 : getValue('day')
      }

      const maxDay = getMonthEndDay(year, month)

      day = day > maxDay ? maxDay : day

      let hour = 0
      let minute = 0

      if (type === 'datehour') {
        hour = +getValue('hour')
      }

      if (type === 'datetime') {
        hour = +getValue('hour')
        minute = +getValue('minute')
      }

      return formatValue(new Date(year, month - 1, day, hour, minute))
    }

    const onChange = (val, values, indexes) => {
      const nextValue = updateInnerValue(indexes)
      setCurrentDate(nextValue)
      props.onChange?.(nextValue)
    }

    const onConfirm = () => {
      props.onConfirm?.(currentDate)
    }

    useUpdateEffect(() => {
      const nextValue = formatValue(value)

      if (nextValue && nextValue.valueOf() !== currentDate?.valueOf()) {
        setCurrentDate(nextValue)
      }
    }, [value, filter, minDate, maxDate])

    return (
      <Picker
        {...pickerProps}
        value={pickerValue}
        ref={ref}
        columns={columns}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={props.onCancel}
      >
        {(_, selectRows, actions) =>
          props.children?.(value || defaultValue, selectRows, actions)
        }
      </Picker>
    )
  }
)

const currentYear = new Date().getFullYear()
const DefaultMinDate = new Date(currentYear - 10, 0, 1)
const DefaultMaxDate = new Date(currentYear + 10, 11, 31)

export default DatePicker
