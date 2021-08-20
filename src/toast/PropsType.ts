import { LoadingType } from '../loading/PropsType';
import { Position } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

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
  /** 轻提示弹出时的的父容器 */
  getContainer?: HTMLElement | (() => HTMLElement);
  /** Toast 完全关闭后的回调 */
  onClose?: () => void;
}

type ToastInstanceOpts = Omit<ToastProps, 'type'> | string;
export interface ToastInstance {
  (opts: ToastProps | string): React.Dispatch<React.SetStateAction<ToastProps>>;
  info(opts: ToastInstanceOpts | string): React.Dispatch<React.SetStateAction<ToastProps>>;
  loading(opts: ToastInstanceOpts | string): React.Dispatch<React.SetStateAction<ToastProps>>;
  success(opts: ToastInstanceOpts | string): React.Dispatch<React.SetStateAction<ToastProps>>;
  fail(opts: ToastInstanceOpts | string): React.Dispatch<React.SetStateAction<ToastProps>>;
  clear(): void;
}
