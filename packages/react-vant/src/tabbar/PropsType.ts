import React from 'react';
import { BadgeSettingProps } from '../badge/PropsType';
import { BaseTypeProps } from '../utils';

export interface TabbarProps<T = number | string> extends BaseTypeProps {
  /** 当前选中标签的名称或索引值	 */
  value?: T;
  /** 默认选中标签的名称或索引值	 */
  defaultValue?: T;
  /** 是否固定在底部	 */
  fixed?: boolean;
  /** 是否显示外边框	 */
  border?: boolean;
  /** 元素 z-index	 */
  zIndex?: number;
  /** 选中标签的颜色	 */
  activeColor?: string;
  /** 未选中标签的颜色	 */
  inactiveColor?: string;
  /** 固定在底部时，是否在标签位置生成一个等高的占位元素	 */
  placeholder?: boolean;
  /** 是否开启底部安全区适配，设置 fixed 时默认开启	 */
  safeAreaInsetBottom?: boolean;
  /** 切换标签时触发	 */
  onChange?: (name: T) => void;
}

export interface TabbarItemProps<T = number | string> extends BaseTypeProps {
  name?: T;
  icon?: string | ((active: boolean) => React.ReactNode);
  iconPrefix?: string;
  badge?: BadgeSettingProps;
  onClick?: (event: React.MouseEvent) => void;
  /** @private */
  index?: number;
  /** @private */
  setActive?: (active: T) => void;
  children?: React.ReactNode | ((active: boolean) => React.ReactNode);
}
