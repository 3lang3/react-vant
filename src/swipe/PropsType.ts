import { ForwardRefExoticComponent } from 'react';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends BaseTypeProps {
  width?: number | string;
  height?: number | string;
  autoplay?: number | string;
  vertical?: boolean;
  lazyRender?: boolean;
  indicatorColor?: string;
  indicatorWrapperClass?: string;
  indicatorRender?: ({ current, count }: Record<string, number>) => React.ReactNode;
  loop?: boolean;
  duration?: number | string;
  touchable?: boolean;
  initialSwipe?: number | string;
  showIndicators?: boolean;
  stopPropagation?: boolean;
  onChange?: (index: number) => void;
}

export type SwipeStatic = {
  Item: ForwardRefExoticComponent<{ index?: number; children: React.ReactNode }>;
};
