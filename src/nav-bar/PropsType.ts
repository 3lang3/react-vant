import { MouseEvent } from 'react';
import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner';

export interface NavBarProps extends BaseTypeProps {
  title?: string;
  fixed?: boolean;
  zIndex?: number | string;
  leftText?: string;
  rightText?: string;
  leftArrow?: boolean;
  safeAreaInsetTop?: boolean;
  border?: boolean;
  leftSlot?: () => React.ReactElement;
  rightSlot?: () => React.ReactElement;
  titleSlot?: () => React.ReactElement;
  onClickLeft?: (e: MouseEvent) => void;
  onClickRight?: (e: MouseEvent) => void;
}
