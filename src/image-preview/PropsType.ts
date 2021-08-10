import React from 'react';
import { Position } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';
import { Interceptor } from '../utils/interceptor';

export interface ImagePreviewProps extends BaseTypeProps {
  visible?: boolean;
  loop?: boolean;
  overlay?: boolean;
  closeable?: boolean;
  showIndex?: boolean;
  transition?: string;
  beforeClose?: Interceptor;
  onClose?: () => void;
  afterClose?: () => void;
  overlayStyle?: React.CSSProperties;
  showIndicators?: boolean;
  closeOnPopstate?: boolean;
  images?: string[];
  swipeDuration?: number | string;
  startPosition?: number | string;
  closeIcon?: string;
  closeIconPosition?: Position;
  indexRender?: ({ index, len }: { index: number; len: number }) => React.ReactNode;
}

export interface ImagePreviewItemProps extends BaseTypeProps {
  src: string;
  visible: boolean;
  active: number;
  rootWidth: number;
  rootHeight: number;
  onClose?: () => void;
}

export interface ImagePreviewStatic {
  open: (images: string[] | ImagePreviewProps, startPosition: number) => void;
}
