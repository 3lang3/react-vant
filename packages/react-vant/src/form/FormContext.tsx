import React from 'react';
import { FormLayout } from './PropsType';

export type FormContextType = {
  layout: FormLayout;
  colon: boolean;
};

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  layout: 'horizontal',
  colon: false,
};

export const FormContext = React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT);
