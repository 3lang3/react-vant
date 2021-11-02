import React from 'react';
import { Swiper } from 'swiper/swiper-react';
import SwiperClass from 'swiper/types/swiper-class';
import { BaseTypeProps } from '../utils';

export interface SwipeProps extends Omit<Swiper, 'onChange' | 'autoplay' | 'style'>, BaseTypeProps {
  /** 是否为纵向滚动	 */
  vertical?: boolean;
  /** 动画时长，单位为 ms	*/
  duration?: number;
  /** 初始位置索引值	 */
  initialSwipe?: number;
  /** 是否显示指示器	 */
  showIndicators?: boolean;
  /** 每一页轮播结束后触发	 */
  onChange?: (index: number) => void;
  children?: React.ReactNode;
  /** 自动轮播间隔，单位为 ms	 */
  autoplay?: number | Swiper['autoplay'];
}

export type SwipeInstance = SwiperClass;
