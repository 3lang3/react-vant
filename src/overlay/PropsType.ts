import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export interface OverlayProps extends BaseTypeProps {
  visible?: boolean;
  zIndex?: number;
  customStyle?: CSSProperties;
  duration?: number;
  lockScroll?: boolean;
  onClick?: () => void;
}
