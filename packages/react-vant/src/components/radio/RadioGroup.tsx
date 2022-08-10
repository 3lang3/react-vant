import React from 'react'
import clsx from 'clsx'
import useMergedState from '../hooks/use-merged-state'
import RadioContext, { RadioContextState } from './RadioContext'
import { RadioGroupProps, RadioValueType } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('radio-group')

function RadioGroup<T = RadioValueType>(props: RadioGroupProps<T>) {
  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  })

  const toggle = (name: T) => {
    setChecked(name)
    props.onChange?.(name)
  }

  return (
    <RadioContext.Provider
      value={{ parent: { props }, toggle, checked } as RadioContextState<any>}
    >
      <div
        className={clsx(props.className, bem([props.direction]))}
        style={props.style}
        role='radiogroup'
      >
        {props.children}
      </div>
    </RadioContext.Provider>
  )
}

export default RadioGroup
