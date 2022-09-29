import React from 'react'
import { FormLayout, FormItemProps } from './PropsType'

export type FormContextType = {
  layout?: FormLayout
  colon?: boolean
  border?: boolean
  required?: boolean
  showValidateMessage?: boolean
} & Pick<FormItemProps, 'labelAlign' | 'controlAlign' | 'border'>

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  colon: false,
  showValidateMessage: true,
  border: true,
  labelAlign: 'left',
  controlAlign: 'left',
}

export const FormContext =
  React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT)
