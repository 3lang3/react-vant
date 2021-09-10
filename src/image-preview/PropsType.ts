import React from 'react';
import { PopupCloseIconPosition } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type CloseParams = { url: string; index: number };

export interface ImagePreviewProps extends BaseTypeProps {
  visible?: boolean;
  loop?: boolean;
  overlay?: boolean;
  closeable?: boolean;
  showIndicators?: boolean;
  showIndex?: boolean;
  indexRender?: ({ index, len }: { index: number; len: number }) => React.ReactNode;
  closeOnPopstate?: boolean;
  overlayStyle?: React.CSSProperties;
  beforeClose?: (active: string | number) => boolean | Promise<boolean>;
  onClose?: ({ url, index }?: CloseParams) => void;
  onClosed?: () => void;
  onChange?: (index: number) => void;
  images?: string[];
  swipeDuration?: number;
  startPosition?: number;
  closeIcon?: string;
  closeIconPosition?: PopupCloseIconPosition;
  /** 弹出时的的父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
}

export type ImagePreviewStatic = {
  (ImagePreviewProps): JSX.Element;
  open: (OpenProps: Omit<ImagePreviewProps, 'visible'>) => () => void;
};
