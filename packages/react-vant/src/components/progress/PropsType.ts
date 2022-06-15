import React from 'react';
import { BaseTypeProps } from '../utils';

export interface ProgressProps extends BaseTypeProps {
  color?: string;
  inactive?: boolean;
  pivotText?: React.ReactNode;
  textColor?: string;
  showPivot?: boolean;
  pivotColor?: string;
  trackColor?: string;
  strokeWidth?: number | string;
  percentage?: string | number;
}
