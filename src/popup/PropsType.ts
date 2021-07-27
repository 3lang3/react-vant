import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';
export interface PopupProps extends BaseTypeProps {
  title?: string | React.ReactNode;
  descrition?: string | React.ReactNode;
  round?: boolean;
  visible?: boolean;
  overlay?: boolean;
  closeable?: boolean;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  lockScroll?: boolean;
  duration?: number;
  closeIcon?: string;
  position?: Position;
  transition?: string;
  safeAreaInsetBottom?: boolean;
  closeIconPosition?: string;
  overlayClosable?: boolean;
  closeOnPopstate?: boolean;
  onClick?: () => void;
  onClickCloseIcon?: () => void;
  onClickOverlay?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
}
