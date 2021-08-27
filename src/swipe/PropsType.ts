import React from 'react';
import { Swiper } from 'swiper/swiper-react';
import SwiperClass from 'swiper/types/swiper-class';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends Omit<Swiper, 'onChange' | 'autoplay'>, BaseTypeProps {
  vertical?: boolean;
  duration?: number;
  initialSwipe?: number;
  /** 是否显示指示器	 */
  showIndicators?: boolean;
  onChange?: (index: number) => void;
  children?: React.ReactNode;
  autoplay?: number | Swiper['autoplay'];
}

export type SwipeInstance = SwiperClass;
