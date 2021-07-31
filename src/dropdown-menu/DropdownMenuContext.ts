import { createContext, Context } from 'react';
import { DropdownMenuProps } from './PropsType';

export interface DropdownMenuState {
  props?: React.PropsWithChildren<DropdownMenuProps>;
  currentValue?: Record<string, number | string>;
  openedMap?: Record<string, boolean>;
}

const DropdownMenu: Context<DropdownMenuState> = createContext({});

export default DropdownMenu;
