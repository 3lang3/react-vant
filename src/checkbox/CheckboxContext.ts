import { createContext, Context } from 'react';
import { CheckBoxGroupProps } from './PropsType';

export interface CheckboxContextState {
  parent?: { props: CheckBoxGroupProps };
  toggle?: (names: Array<string | number>) => void;
  checked?: (string | number)[];
}

const CheckboxContext: Context<CheckboxContextState> = createContext({});

export default CheckboxContext;
