import { BaseTypeProps } from '../utils';
import { Position } from '../popup/propsType';
import { LoadingType } from '../loading/PropsType';

export interface ToastProps extends BaseTypeProps {
  icon?: string;
  show?: boolean;
  message?: number | string;
  duration?: number;
  className?: null;
  iconPrefix?: string;
  lockScroll?: boolean;
  loadingType?: LoadingType;
  forbidClick?: boolean;
  closeOnClick?: boolean;
  type?: string;
  position?: Position;
  close?: () => void;
  onClose?: () => void;
}
