import React from 'react';
import { FormLayout } from './PropsType';

export type FormContextType = {
  layout: FormLayout;
};

export const DEFAULT_FORM_CONTEXT: FormContextType = {
  layout: 'horizontal',
};

export const FormContext = React.createContext<FormContextType>(DEFAULT_FORM_CONTEXT);
