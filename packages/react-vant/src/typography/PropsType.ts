import React from 'react';
import { BaseTypeProps } from '../utils';

export type TypographyType = 'danger' | 'secondary' | 'light' | 'primary' | 'success' | 'warning';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5;
export interface TypographyBaseProps extends BaseTypeProps {
  type?: TypographyType;
  size?: TypographySize;
  level?: TypographyTitleLevel;
  disabled?: boolean;
  delete?: boolean;
  underline?: boolean;
  center?: boolean;
  strong?: boolean;
  ellipsis?: boolean | number;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export type TypographyTextProps = Omit<TypographyBaseProps, 'level'>;
export type TypographyTitleProps = TypographyBaseProps;
export type TypographyLinkProps = Omit<TypographyBaseProps, 'level'>;
