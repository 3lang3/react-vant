import type { CSSProperties, MouseEvent } from 'react';
import { BaseTypeProps } from '../utils';

type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface CellProps extends BaseTypeProps {
  icon?: string;
  size?: string;
  title?: number | string;
  value?: number | string;
  label?: number | string;
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
  rightIconSlot?: () => React.ReactElement;
  iconSlot?: () => React.ReactElement;
  labelSlot?: () => React.ReactElement;
  titleSlot?: () => React.ReactElement;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface CellGroupProps extends BaseTypeProps {
  title?: string;
  border?: boolean;
  card?: boolean;
}
