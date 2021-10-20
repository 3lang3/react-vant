import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  // 这里写组件的props
  tag?: React.ReactNode;
  tags?: React.ReactNode;
  bottom?: React.ReactNode;
  priceTop?: React.ReactNode;
  footer?: React.ReactNode;
  num?: React.ReactNode;
  desc?: React.ReactNode;
  thumb?: React.ReactNode;
  title?: React.ReactNode;
  price?: React.ReactNode;
  centered?: boolean;
  lazyload?: boolean;
  thumbLink?: string;
  originPrice?: React.ReactNode;
  currency?: string;
  onClick?: (event: React.MouseEvent) => void;
  onClickThumb?: (event: React.MouseEvent) => void;
}
