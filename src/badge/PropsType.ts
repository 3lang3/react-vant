import React from 'react';
import { BaseTypeProps } from '../utils';

export interface BadgeProps extends BaseTypeProps {
  content?: string | number | React.ReactNode;
  dot?: boolean;
  max?: number | string;
  color?: string;
  offset?: [x: string | number, y: string | number];
  showZero?: boolean;
  tag?: keyof HTMLElementTagNameMap;
  onClick?: (e: React.MouseEvent) => void;
}
