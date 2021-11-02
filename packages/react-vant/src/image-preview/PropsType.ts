import React from 'react';
import { LazyImageType } from '../image/PropsType';
import { PopupCloseIconPosition } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type CloseParams = { url: string; index: number };

export interface ImagePreviewProps extends BaseTypeProps {
  visible?: boolean;
  loop?: boolean;
  overlay?: boolean;
  lazyload?: LazyImageType;
  maxZoom?: number;
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

export interface ImagePreviewItemProps {
  lazyload: LazyImageType;
  image: string;
  maxZoom: number;
  onTap: () => void;
  onZoomChange?: (zoom: number) => void;
}

export type ImagePreviewStatic = {
  (ImagePreviewProps): JSX.Element;
  open: (OpenProps: Omit<ImagePreviewProps, 'visible'>) => () => void;
};
