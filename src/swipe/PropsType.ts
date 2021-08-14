import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import SwiperClass from 'swiper/types/swiper-class';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends Omit<Swiper, 'onChange'>, BaseTypeProps {
  vertical?: boolean;
  duration?: number;
  initialSwipe?: number;
  showIndicators?: boolean;
  onChange?: (index: number) => void;
  children?: React.ReactNode;
}

export type SwipeStatic = {
  Item: React.FC<SwiperSlide>;
};

export type SwipeActionType = SwiperClass;
