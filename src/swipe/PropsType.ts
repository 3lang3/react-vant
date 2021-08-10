import React, { ForwardRefExoticComponent } from 'react';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends BaseTypeProps {
  ref?: React.MutableRefObject<SwipeActionType>;
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
  children?: React.ReactNode;
}

export type SwipeStatic = {
  Item: ForwardRefExoticComponent<{
    index?: number;
    className?: string;
    children: React.ReactNode;
  }>;
};

export type SwipeActionType = {
  rect: () => any;
  resize: () => void;
};
