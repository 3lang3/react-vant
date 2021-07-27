/* eslint-disable @typescript-eslint/ban-types */
import { BaseTypeProps } from '../utils';

export interface DialogProps extends BaseTypeProps {
  visible?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  title?: string | React.ReactNode;
  theme?: string;
  width?: string | number;
  message?: string | React.ReactNode;
  transition?: string;
  beforeClose?: (action: 'cancel' | 'confirm') => Promise<boolean>;
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
  (): (options: Partial<DialogProps>) => void;
  confirm: (options: Partial<Omit<DialogProps, 'showCancelButton'>>) => void;
  alert: (options: Partial<DialogProps>) => void;
  close: () => void;
};
