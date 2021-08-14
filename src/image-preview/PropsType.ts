import React from 'react';
import { PopupCloseIconPosition } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

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
  onClose?: () => void;
  images?: string[];
  swipeDuration?: number;
  startPosition?: number;
  closeIcon?: string;
  closeIconPosition?: PopupCloseIconPosition;
  afterClose?: () => void;
  /** 弹出时的的父容器 */
  getContainer?: HTMLElement | (() => HTMLElement);
}

export type ImagePreviewStatic = {
  (ImagePreviewProps): React.ReactNode;
  open: (OpenProps: Omit<ImagePreviewProps, 'visible'>) => void;
};
