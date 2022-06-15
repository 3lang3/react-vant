import React from 'react';
import { BaseTypeProps } from '../utils';

export interface EmptyProps extends BaseTypeProps {
  /** 图片类型，可选值为 error network search，支持传入图片 URL */
  image?: 'default' | 'error' | 'network' | 'search' | string | React.ReactNode;
  imageSize?: number | string;
  /** 图片下方的描述文字	 */
  description?: React.ReactNode;
}
