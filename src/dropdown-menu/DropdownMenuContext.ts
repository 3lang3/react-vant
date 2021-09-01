import { createContext, Context } from 'react';
import { DropdownMenuProps } from './PropsType';

export interface DropdownMenuState {
  props?: React.PropsWithChildren<DropdownMenuProps>;
  value?: Record<string, number | string>;
  openedMap?: Record<string, boolean>;
  onChange?: (v) => void;
  close?: () => void;
}

const DropdownMenu: Context<DropdownMenuState> = createContext({});

export default DropdownMenu;
