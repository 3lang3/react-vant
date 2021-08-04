import React from 'react';
import { BaseTypeProps } from '../utils';

type DropdownMenuDirection = 'up' | 'down';

export interface DropdownMenuProps extends BaseTypeProps {
  value?: Record<string, string | number>;
  onChange?: (v: Record<string, string | number>) => void;
  overlay?: boolean;
  closeOnClickOutside?: boolean;
  closeOnClickOverlay?: boolean;
  activeColor?: string;
  zIndex?: number | string;
  duration?: number | string;
  direction?: DropdownMenuDirection;
  placeholder?: string;
  disabled?: boolean;
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
  children?: React.ReactNode;
  placeholder?: string;
}

export type ItemActionType = {
  toggle: (show: boolean, options?: { immediate?: boolean }) => void;
};

export type ItemStaticProps = {
  offset: number;
  onChange: (v: DropdownMenuProps['value']) => void;
  setOpened: (v) => void;
};
