import React from 'react'
import { ButtonGroupProps } from './PropsType'

type ButtonContextType = {
  parent?: ButtonGroupProps
}

const ButtonContext = React.createContext<ButtonContextType>({})

export default ButtonContext
