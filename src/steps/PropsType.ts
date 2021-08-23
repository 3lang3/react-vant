import React from 'react';
import { BaseTypeProps } from '../utils';

export type StepsDirection = 'horizontal' | 'vertical';

export interface StepsProps extends BaseTypeProps {
  iconPrefix?: string;
  finishIcon?: string;
  activeColor?: string;
  inactiveIcon?: string;
  inactiveColor?: string;
  active?: number;
  direction?: StepsDirection;
  activeIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickStep?: (index: number) => void;
}

export type StepStatic = {
  (props: StepsProps): React.ReactNode;
  Item: React.FC<unknown>;
};
