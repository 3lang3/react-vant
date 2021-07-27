import { BaseTypeProps } from '../utils';
import { Position } from '../popup/PropsType';
import { LoadingType } from '../loading/PropsType';

export interface ToastProps extends BaseTypeProps {
  icon?: string;
  visible?: boolean;
  message?: number | string;
  duration?: number;
  iconSize?: number | string;
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

type ToastInstanceOpts = Omit<ToastProps, 'type'> | string;
export interface ToastInstance {
  (opts: ToastProps | string): void;
  info(opts: ToastInstanceOpts): void;
  loading(opts: ToastInstanceOpts): void;
  success(opts: ToastInstanceOpts): void;
  fail(opts: ToastInstanceOpts): void;
  clear(): void;
}
