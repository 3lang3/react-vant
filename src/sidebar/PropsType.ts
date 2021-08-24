import React from 'react';
import { BaseTypeProps } from '../utils';

export type SidebarProvide = {
  parent: {
    getActive: () => number;
    setActive: (value: number) => void;
  };
  index: number;
};

export interface SidebarProps extends BaseTypeProps {
  value?: number | string;
  onChange?: (value: number | string) => void;
}

export interface SidebarItemProps {
  dot?: boolean;
  title?: JSX.Element;
  badge?: number | string;
  disabled?: boolean;
  onClick?: (value: number) => void;
}

export type SidebarStatic = {
  (props: SidebarProps): React.ReactNode;
  Item: React.FC<SidebarItemProps>;
};
