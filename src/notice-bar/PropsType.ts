import { ReactElement } from 'react';
import { BaseTypeProps } from '../utils';

export interface NoticeBarProps extends BaseTypeProps {
  mode: string;
  leftIcon?: string;
  background?: string;
  color?: string;
  text?: string;
  scrollable?: boolean;
  wrapable?: boolean;
  speed?: number;
  delay?: number;
  className?: string;
  leftIconSlot?: () => ReactElement;
  onClose?: () => void;
  onClick?: () => void;
  onReplay?: () => void;
}
