import React from 'react';
import { BaseTypeProps } from '../utils';

export type CircleStartPosition = 'top' | 'right' | 'bottom' | 'left';

export interface CircleProps extends BaseTypeProps {
  /** 默认进度 */
  defaultRate?: number;
  /** 当前进度 */
  rate?: number;
  /** 圆环直径，默认单位为 px	 */
  size?: number | string;
  /** 进度条颜色，传入对象格式可以定义渐变色	 */
  color?: string | Record<string, string>;
  /** 轨道颜色	 */
  layerColor?: string;
  /** 填充颜色	 */
  fill?: string;
  /** 动画速度（单位为 rate/s） */
  speed?: number;
  /** 进度条宽度	 */
  strokeWidth?: number | string;
  /** 进度条端点的形状，可选值为 square butt	 */
  strokeLinecap?: React.CSSProperties['strokeLinecap'];
  /** 是否顺时针增加	 */
  clockwise?: boolean;
  /** 进度起始位置 */
  startPosition?: CircleStartPosition;
  text?: string;
  children?: React.ReactNode;
  onChange?: (value: number) => void;
}
