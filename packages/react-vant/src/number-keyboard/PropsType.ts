import React from 'react';
import { BaseTypeProps } from '../utils';

export type KeyType = '' | 'delete' | 'extra' | 'close';

export type NumberKeyboardTheme = 'default' | 'custom';

export type KeyConfig = {
  text?: number | string;
  type?: KeyType;
  color?: string;
  wider?: boolean;
};

export interface NumberKeyboardProps extends BaseTypeProps {
  /** 是否显示键盘	 */
  visible: boolean;
  /** 键盘标题	 */
  title?: React.ReactNode;
  /** 自定义按键内容 */
  numberKeyRender?: (item: KeyConfig) => React.ReactNode;
  /** 自定义删除按键内容 */
  deleteRender?: () => React.ReactNode;
  /** 自定义左下角按键内容 */
  extraKeyRender?: () => React.ReactNode;
  /** 键盘 z-index 层级	 */
  zIndex?: number;
  /** 是否开启过场动画	 */
  transition?: boolean;
  /** 是否在点击关闭按钮时触发 blur 事件	 */
  blurOnClose?: boolean;
  /** 是否展示删除图标	 */
  showDeleteKey?: boolean;
  /** 是否将通过随机顺序展示按键	 */
  randomKeyOrder?: boolean;
  /** 关闭按钮文字，空则不展示	 */
  closeButtonText?: number | string;
  /** 删除按钮文字，空则展示删除图标	 */
  deleteButtonText?: number | string;
  /** 是否将关闭按钮设置为加载中状态，仅在 theme="custom" 时有效	 */
  closeButtonLoading?: boolean;
  /** 是否在点击外部时收起键盘	 */
  hideOnClickOutside?: boolean;
  /** 是否开启底部安全区适配	 */
  safeAreaInsetBottom?: boolean;
  /** 样式风格，可选值为 custom	 */
  theme?: NumberKeyboardTheme;
  /** 当前输入值	 */
  value?: string;
  /** 底部额外按键的内容	 */
  extraKey?: string | string[];
  /** 输入值最大长度	 */
  maxlength?: number;
  /** 弹出时的的父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
  /** 键盘完全弹出时触发	 */
  onShow?: () => void;
  /** 键盘完全收起时触发		 */
  onHide?: () => void;
  /** 点击关闭按钮或非键盘区域时触发	 */
  onBlur?: () => void;
  /** 点击按键时触发	 */
  onInput?: (key: string) => void;
  /** 点击关闭按钮时触发	 */
  onClose?: () => void;
  /** 点击删除键时触发	 */
  onDelete?: () => void;
  /** 输入内容变化时触发 */
  onChange?: (key: string) => void;
}

export interface NumberKeyboardKeyProps extends BaseTypeProps {
  type?: KeyType;
  text?: number | string;
  color?: string;
  wider?: boolean;
  large?: boolean;
  loading?: boolean;
  onPress?: (text, type) => void;
}
