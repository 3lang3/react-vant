import React from 'react';
import { BaseTypeProps } from '../utils';

export interface TypographyProps extends BaseTypeProps {
  type?: 'danger' | 'secondary' | 'light' | 'primary' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  level?: 1 | 2 | 3 | 4 | 5;
  disabled?: boolean;
  delete?: boolean;
  underline?: boolean;
  center?: boolean;
  strong?: boolean;
  ellipsis?: boolean | number;
  onClick?: () => void;
  children?: string | number | React.ReactNode;
}
