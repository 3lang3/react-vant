/* eslint-disable @typescript-eslint/ban-types */
import { BaseTypeProps } from '../utils';

export interface DialogProps extends BaseTypeProps {
  show?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  title?: string | React.ReactNode;
  theme?: string;
  width?: string | number;
  message?: string | React.ReactNode;
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
  confirm: (props: Omit<DialogProps, 'showCancelButton'>) => void;
  alert: (props: DialogProps) => void;
  close: () => void;
};
