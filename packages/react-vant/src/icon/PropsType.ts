import React from 'react';
import { BadgeSettingProps, HtmlTagType } from '../badge/PropsType';
import { BaseTypeProps } from '../utils';

export interface IconProps extends BaseTypeProps {
  /** HTML 标签
   * @default 'i'
   */
  tag?: HtmlTagType;
  /** 图标名称或图片链接   */
  name: string;
  /** 图标颜色   */
  color?: string;
  /**
   * 图标大小，如 20px 2em，默认单位为px
   * @default 'inherit''
   */
  size?: number | string;
  /** 徽标内容 */
  badge?: BadgeSettingProps;
  /** 旋转 */
  spin?: boolean;
  /**
   * 类名前缀，用于使用自定义图标
   * @default 'van-icon'
   */
  classPrefix?: string;
  /** 点击图标时触发   */
  onClick?: (e: React.MouseEvent) => void;
  onTouchStart?: (e: React.MouseEvent) => void;
}
