import React from 'react'
import { BaseTypeProps } from '../utils';

export interface FloatingBallProps extends BaseTypeProps {
  adsorb?: number | null;  // 无操作自动靠边吸附 单位: s  (number >= 5)
  color?: string;  // 显示的颜色
  direction?: 'around' | 'vertical' | 'horizontal';  // 方向
  disdrag?: boolean;  // 是否禁止拖拽
  disabled?: boolean;  // 是否禁用
  icon?: React.ReactNode;  // Icon图标
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';  // 初始位置
  onAction?: (active?: boolean) => void;
}

export type FloatingBallInstance = {
  /** 设置悬浮球是否激活 */
  action: (active: boolean) => void;
}

export interface FloatingBallItemProps extends BaseTypeProps {
  disabled?: boolean;
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
}