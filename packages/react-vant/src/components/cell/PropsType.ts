import React from 'react';
import { BaseTypeProps } from '../utils';

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface CellProps extends BaseTypeProps {
  /** 左侧标题	*/
  title?: React.ReactNode;
  /** 右侧内容 */
  value?: number | string | React.ReactNode;
  /**  标题下方的描述信息	*/
  label?: React.ReactNode;
  /** 单元格大小 */
  size?: 'large';
  /** 是否使内容垂直居中	  */
  center?: boolean;
  /**  是否展示右侧箭头并开启点击反馈	*/
  isLink?: boolean;
  /** 是否显示表单必填星号	 */
  required?: boolean;
  /** 是否开启点击反馈	 */
  clickable?: boolean;
  /** 左侧标题额外样式	 */
  titleStyle?: React.CSSProperties;
  /** 左侧标题额外类名	 */
  titleClass?: string;
  /** 右侧内容额外类名	 */
  valueClass?: string;
  /** 描述信息额外类名	 */
  labelClass?: string;
  /** 箭头方向 */
  arrowDirection?: CellArrowDirection;
  /** 是否显示内边框	 */
  border?: boolean;
  /** 自定义左侧图标 */
  icon?: React.ReactNode;
  /** 右侧自定义图标 */
  rightIcon?: React.ReactNode;
  /** 自定义单元格最右侧的额外内容 */
  extra?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface CellGroupProps extends BaseTypeProps {
  /** 分组标题	 */
  title?: React.ReactNode;
  /** 是否显示外边框	 */
  border?: boolean;
  /**
   * 是否展示为圆角卡片风格
   * @deprecated
   */
  inset?: boolean;
  /** 是否展示为圆角卡片风格 */
  card?: boolean;
}
