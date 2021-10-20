import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  // 这里写组件的props
  tag?: React.ReactNode;
  tags?: React.ReactNode;
  bottom?: React.ReactNode;
  priceTop?: React.ReactNode;
  footer?: React.ReactNode;
  num?: number | string;
  desc?: React.ReactNode;
  thumb?: React.ReactNode;
  title?: React.ReactNode;
  price?: number | string;
  centered?: boolean;
  lazyload?: boolean;
  thumbLink?: string;
  originPrice?: number | string;
  currency?: string;
  onClick?: (event: React.MouseEvent) => void;
  onClickThumb?: (event: React.MouseEvent) => void;
}
