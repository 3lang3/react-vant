import { CSSProperties, ReactElement, ReactNode } from 'react';
import { BaseTypeProps } from '../utils';

export type PageIndicatorProps = {
  total: number;
  current: number;
  style?: CSSProperties;
  className?: string;
} & Pick<SwiperProps, 'vertical'>;

export interface SwiperProps extends BaseTypeProps {
  /** 初始位置索引值 */
  initialSwipe?: number;
  /** 是否允许手势滑动 */
  touchable?: boolean;
  /** 自动轮播间隔，单位为 ms	 */
  autoplay?: boolean | number;
  /** 是否开启循环播放	 */
  loop?: boolean;
  /** 是否为纵向滚动 */
  vertical?: boolean;
  /** 动画时长，单位为 ms */
  duration?: number;
  /** 每一页轮播结束后触发 */
  onChange?: (index: number) => void;
  /** 指示器属性 */
  indicatorProps?: Pick<PageIndicatorProps, 'style' | 'className'>;
  /** 自定义指示器 */
  indicator?: boolean | ((total: number, current: number) => ReactNode);
  /** 滑块的宽度百分比 */
  slideSize?: number;
  /** 滑块轨道整体的偏移量百分比	 */
  trackOffset?: number;
  /** 是否在边界两边卡住，避免出现空白，仅在非 loop 模式且 slideSize < 100 时生效	 */
  stuckAtBoundary?: boolean;
  children?: ReactElement | ReactElement[];
}

export interface SwiperItemProps extends BaseTypeProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type SwiperInstance = {
  activeIndex: number;
  swipeTo: (index: number) => void;
  swipeNext: () => void;
  swipePrev: () => void;
  lock: () => void;
  unlock: () => void;
};
