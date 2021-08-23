import React from 'react';
import { BaseTypeProps } from '../utils';

export type DividerContentPosition = 'left' | 'center' | 'right';
export interface DividerProps extends BaseTypeProps, React.HTMLAttributes<HTMLDivElement> {
  dashed?: boolean;
  hairline?: boolean;
  contentPosition?: DividerContentPosition;
}
