import React, { useContext, useMemo } from 'react'

import RadioContext from './RadioContext'
import Checker from '../checkbox/Checker'

import { RadioProps, RadioValueType } from './PropsType'
import { createNamespace } from '../utils'

const [bem] = createNamespace('radio')

function Radio<T = RadioValueType>(props: RadioProps<T>) {
  const { parent, ...context } = useContext(RadioContext)

  const checked = useMemo(() => {
    return parent ? context.checked === props.name : props.checked
  }, [context.checked])

  const toggle = () => {
    const emitter = parent ? context.toggle : () => {}
    emitter(props.name)
  }

  return (
    <Checker
      {...props}
      bem={bem}
      role='radio'
      parent={parent}
      checked={checked}
      onToggle={toggle}
    />
  )
}

export default Radio
