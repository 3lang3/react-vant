import { createContext, Context } from 'react'
import { RadioGroupProps, RadioValueType } from './PropsType'

export interface RadioContextState<T = RadioValueType> {
  parent?: { props: RadioGroupProps<T> }
  toggle?: (name: T) => void
  checked?: T
}

const RadioContext: Context<RadioContextState> = createContext({})

export default RadioContext
