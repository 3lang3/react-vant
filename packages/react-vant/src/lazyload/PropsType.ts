import React from 'react';
import { BaseTypeProps } from '../utils';

export interface LazyloadProps extends BaseTypeProps {
  /** 占位容器高度 */
  height?: number | string;
  /** 自定义占位符 */
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
}
