import React from 'react';
import { FormLayout, FormItemProps } from './PropsType';

export type FormContextType = {
  layout: FormLayout;
  colon: boolean;
  showValidateMessage: boolean;
} & Pick<FormItemProps, 'labelAlign' | 'inputAlign'>;

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  layout: 'horizontal',
  colon: false,
  showValidateMessage: true,
  labelAlign: 'left',
  inputAlign: 'left',
};

export const FormContext = React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT);
