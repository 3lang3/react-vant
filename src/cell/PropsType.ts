import type { CSSProperties, MouseEvent } from 'react';
import React from 'react';
import { BaseTypeProps } from '../utils';

type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface CellProps extends BaseTypeProps {
  icon?: string | React.ReactNode;
  size?: string;
  title?: number | string | React.ReactNode;
  value?: number | string;
  label?: number | string | React.ReactNode;
  center?: boolean;
  round?: boolean;
  isLink?: boolean;
  required?: boolean;
  clickable?: boolean;
  iconPrefix?: string;
  titleStyle?: CSSProperties;
  titleClass?: string;
  valueClass?: string;
  labelClass?: string;
  arrowDirection?: CellArrowDirection;
  border?: boolean;
  rightIcon?: () => React.ReactElement;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface CellGroupProps extends BaseTypeProps {
  title?: string;
  border?: boolean;
  card?: boolean;
}
