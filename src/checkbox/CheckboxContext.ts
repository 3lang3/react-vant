import { createContext, Context } from 'react';
import { CheckboxGroupProps } from './PropsType';

export interface CheckboxContextState {
  parent?: { props: CheckboxGroupProps };
  toggle?: (names: Array<string | number>) => void;
  checked?: (string | number)[];
}

const CheckboxContext: Context<CheckboxContextState> = createContext({});

export default CheckboxContext;
