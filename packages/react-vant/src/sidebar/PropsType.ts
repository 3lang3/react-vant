import React from 'react';
import { BaseTypeProps } from '../utils';

export type SidebarProvide = {
  /** @private */
  parent?: {
    getActive: () => number;
    setActive: (value: number) => void;
  };
  /** @private */
  index?: number;
};

export interface SidebarProps extends BaseTypeProps {
  /** 当前导航项的索引	 */
  value?: number;
  /** 默认索引 */
  defaultValue?: number;
  /** 切换导航项时触发	 */
  onChange?: (value: number) => void;
  children?: React.ReactElement | React.ReactElement[];
}

export interface SidebarItemProps {
  /** 是否显示右上角小红点	 */
  dot?: boolean;
  /** 内容 */
  title?: React.ReactNode;
  /** 图标右上角徽标的内容	 */
  badge?: number | string;
  /** 是否禁用该项	 */
  disabled?: boolean;
  /** 内容区域类名 */
  contentClassName?: string;
  /** 内容区域样式 */
  contentStyle?: React.CSSProperties;
  /** 点击时触发	 */
  onClick?: (value: number) => void;
  children?: React.ReactNode;
}
