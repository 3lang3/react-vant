import React from 'react';
import { BaseTypeProps } from '../utils';

type DropdownMenuDirection = 'up' | 'down';

export interface DropdownMenuProps extends BaseTypeProps {
  value?: Record<string, DropdownMenuItemOption['value']>;
  onChange?: (v: DropdownMenuProps['value']) => void;
  overlay?: boolean;
  closeOnClickOutside?: boolean;
  closeOnClickOverlay?: boolean;
  activeColor?: string;
  zIndex: number | string;
  duration: number | string;
  direction?: DropdownMenuDirection;
  placeholder?: string;
}

export type DropdownMenuItemOption = {
  text: string;
  icon?: string;
  value: number | string;
};

export interface DropdownMenuItemProps extends BaseTypeProps {
  title?: string | React.ReactNode;
  disabled?: boolean;
  titleClass?: string;
  options?: DropdownMenuItemOption[];
  name: string;
  offset?: number;
  parentProps?: DropdownMenuProps;
  parentValue?: DropdownMenuProps['value'];
  onChange?: (v: DropdownMenuProps['value']) => void;
  children?: React.ReactNode;
  placeholder?: string;
}
