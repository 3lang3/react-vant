import React from 'react';
import { BaseTypeProps } from '../utils';

export type SidebarProvide = {
  /** @private */
  parent?: {
    getActive: () => number;
    setActive: (value: number) => void;
  };
  /** @private */
  index?: number;
};

export interface SidebarProps extends BaseTypeProps {
  value?: number | string;
  defaultValue?: number | string;
  onChange?: (value: number | string) => void;
  children?: React.ReactNode;
}

export interface SidebarItemProps {
  dot?: boolean;
  title?: React.ReactNode;
  badge?: number | string;
  disabled?: boolean;
  onClick?: (value: number) => void;
}
