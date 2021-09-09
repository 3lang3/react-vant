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
  children?: React.ReactNode;
}

export interface SidebarItemProps {
  /** 是否显示右上角小红点	 */
  dot?: boolean;
  /** 内容 */
  title?: React.ReactNode;
  /** 图标右上角徽标的内容	 */
  badge?: number | string;
  /** v */
  disabled?: boolean;
  /** 点击时触发	 */
  onClick?: (value: number) => void;
}
