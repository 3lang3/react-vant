import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends BaseTypeProps {
  width?: number | string;
  height?: number | string;
  autoplay?: number | string;
  vertical?: boolean;
  lazyRender?: boolean;
  indicatorColor?: string;
  loop?: boolean;
  duration?: number | string;
  touchable?: boolean;
  initialSwipe?: number | string;
  showIndicators?: boolean;
  stopPropagation?: boolean;
  onChange?: (index: number) => void;
}

export type SwipeStatic = {
  Item?: ForwardRefExoticComponent<{ index: number }>;
};
