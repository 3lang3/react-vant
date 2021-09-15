import React from 'react';
import { BadgeSettingProps } from '../badge/PropsType';
import { BaseTypeProps } from '../utils';

export type GridDirection = 'horizontal' | 'vertical';

export interface GridProps extends BaseTypeProps {
  /** 是否将格子固定为正方形	 */
  square?: boolean;
  /** 是否将格子内容居中显示	 */
  center?: boolean;
  /** 是否显示边框	 */
  border?: boolean;
  /** 格子之间的间距，默认单位为`px` */
  gutter?: number;
  /** 是否调换图标和文本的位置	 */
  reverse?: boolean;
  /** 图标大小，默认单位为`px` */
  iconSize?: number | string;
  /** 格子内容排列的方向，可选值为 `horizontal`	 */
  direction?: GridDirection;
  /** 列数	 */
  columnNum?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface GridItemProps extends BaseTypeProps {
  /**  图标右上角徽标	 */
  badge?: BadgeSettingProps;
  /** 文字 */
  text?: string | React.ReactNode;
  /** 图标名称或图片链接	 */
  icon?: string | React.ReactNode;
  /** 图标类名前缀，等同于 Icon 组件的 classPrefix 属性	 */
  iconPrefix?: string;
  /** 图标颜色，等同于 Icon 组件的 color 属性	 */
  iconColor?: string;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
