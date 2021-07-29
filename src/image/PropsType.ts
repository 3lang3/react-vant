import React from 'react';
import { BaseTypeProps } from '../utils';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export interface ImageProps extends BaseTypeProps {
  src: string;
  alt?: string;
  fit?: ImageFit;
  round?: boolean;
  block?: boolean;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  iconSize?: number | string;
  iconPrefix?: string;
  /** @default true */
  showError?: boolean;
  /** @default true */
  showLoading?: boolean;
  /** @default photo-fail */
  errorIcon?: string | React.ReactNode;
  /** @default photo */
  loadingIcon?: string | React.ReactNode;
  onLoad?: (e: React.MouseEvent<HTMLImageElement>) => void;
  onError?: (e: React.MouseEvent<HTMLImageElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
