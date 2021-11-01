import { CSSProperties, ReactElement, ReactNode } from 'react';
import { BaseTypeProps } from '../utils';

export type PageIndicatorProps = {
  total: number;
  current: number;
  color?: 'primary' | 'white';
  style?: CSSProperties;
  className?: string;
} & Pick<SwiperProps, 'vertical'>;

export interface SwiperProps extends BaseTypeProps {
  /** 初始位置索引值 */
  initialSwipe?: number;
  /** 是否允许手势滑动	 */
  touchable?: boolean;
  /** 自动轮播间隔，单位为 ms	 */
  autoplay?: boolean | number;
  /** 是否开启循环播放	 */
  loop?: boolean;
  /** 是否为纵向滚动 */
  vertical?: boolean;
  /** 每一页轮播结束后触发 */
  onChange?: (index: number) => void;
  /** 指示器属性 */
  indicatorProps?: Pick<PageIndicatorProps, 'color' | 'style' | 'className'>;
  /** 自定义指示器 */
  indicator?: (total: number, current: number) => ReactNode;
  children?: ReactElement | ReactElement[];
}

export interface SwiperItemProps extends BaseTypeProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type SwiperInstance = {
  swipeTo: (index: number) => void;
  swipeNext: () => void;
  swipePrev: () => void;
};
