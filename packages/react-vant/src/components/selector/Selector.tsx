import React from 'react'
import clsx from 'clsx'
import { usePropsValue } from '../hooks'
import { CheckMark } from './CheckMark'
import { createNamespace } from '../utils'
import { SelectorProps, SelectorValue } from './PropsType'
import { mergeProps } from '../utils/get-default-props'

// https://mobile.ant.design/zh/components/selector

const [bem] = createNamespace('selector')

export const Selector = <V extends SelectorValue>(p: SelectorProps<V>) => {
  const props = mergeProps(p, {
    multiple: false,
    defaultValue: [],
    showCheckMark: true,
  })
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option.value))
        },
      }
      props.onChange?.(val, extend)
    },
  })

  const items = props.options.map(option => {
    const active = (value || []).includes(option.value)
    const disabled = option.disabled || props.disabled
    const itemCls = clsx(
      bem('item', {
        active: active && !props.multiple,
        'multiple-active': active && props.multiple,
        disabled,
      })
    )

    return (
      <div
        key={option.value}
        className={itemCls}
        onClick={() => {
          if (disabled) {
            return
          }
          if (props.multiple) {
            const val = active
              ? value.filter(v => v !== option.value)
              : [...value, option.value]
            setValue(val)
          } else {
            const val = active ? [] : [option.value]
            setValue(val)
          }
        }}
      >
        {option.label}
        {option.description && (
          <div className={clsx(bem('item-description'))}>
            {option.description}
          </div>
        )}
        {active && props.showCheckMark && (
          <div className={clsx(bem('check-mark-wrapper'))}>
            <CheckMark />
          </div>
        )}
      </div>
    )
  })

  return (
    <div className={clsx(bem(), props.className)} style={props.style}>
      {items}
    </div>
  )
}
