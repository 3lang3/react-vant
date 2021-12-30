import React from 'react';
import { BaseTypeProps } from '../utils';

/** HTML 标签	 */
export type HtmlTagType = keyof HTMLElementTagNameMap;

export interface BadgeProps extends BaseTypeProps {
  /** 徽标内容 */
  content?: React.ReactNode;
  /** 是否展示为小红点	 */
  dot?: boolean;
  /** 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效	 */
  max?: number | string;
  /** 徽标背景颜色	 */
  color?: string;
  /** 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 px	 */
  offset?: Array<number | string>;
  /**
   * 当 content 为数字 0 时，是否展示徽标
   * @default true
   */
  showZero?: boolean;
  /** badge指定渲染为html元素
   * @default div
   */
  tag?: string;
  onClick?: (e: React.MouseEvent) => void;
  onTouchStart?: (e: React.MouseEvent) => void;
}

export type BadgeSettingProps = Omit<
  BadgeProps,
  'children' | 'tag' | 'onClick' | 'style' | 'className'
>;
