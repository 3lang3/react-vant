/* eslint-disable @typescript-eslint/ban-types */
import { BaseTypeProps } from '../utils';

export interface DialogProps extends BaseTypeProps {
  show?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  title?: string;
  theme?: string;
  width?: string | number;
  message?: string;
  transition?: string;
  className?: null;
  beforeClose?: Function;
  messageAlign?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  closeOnClickOverlay?: boolean;
  showConfirmButton?: boolean;
  callback?: (value: string) => void;
  onClose: () => void;
  onClickCloseIcon?: () => void;
}

export type DialogStatic = {
  confirm?: Function;
  alert?: Function;
  close?: Function;
};
