import React, { MouseEvent } from 'react';
import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner';

export interface NavBarProps extends BaseTypeProps {
  /** 标题	 */
  title?: React.ReactNode;
  /** 是否固定在顶部	 */
  fixed?: boolean;
  /** 导航栏 z-index	 */
  zIndex?: number | string;
  /** 左侧文案	 */
  leftText?: React.ReactNode;
  /** 右侧文案	 */
  rightText?: React.ReactNode;
  /** 是否显示左侧箭头	 */
  leftArrow?: boolean;
  /** 是否开启顶部安全区适配	 */
  safeAreaInsetTop?: boolean;
  /** 是否显示下边框	 */
  border?: boolean;
  /** 固定在顶部时，是否在标签位置生成一个等高的占位元素 */
  placeholder?: boolean;
  onClickLeft?: (e: MouseEvent) => void;
  onClickRight?: (e: MouseEvent) => void;
}
