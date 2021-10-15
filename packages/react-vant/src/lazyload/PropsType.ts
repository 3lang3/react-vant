import React from 'react';
import { BaseTypeProps } from '../utils';

export interface LazyloadProps extends BaseTypeProps {
  height?: number | string;
  placeholder?: React.ReactNode;
  children?: JSX.Element;
}
