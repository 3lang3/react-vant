import { createContext, Context } from 'react';
import { RadioGroupProps } from './PropsType';

export interface RadioContextState {
  parent?: { props: RadioGroupProps };
  toggle?: (name: string | number) => void;
  checked?: string | number;
}

const RadioContext: Context<RadioContextState> = createContext({});

export default RadioContext;
