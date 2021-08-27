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
  visible?: boolean;
  title?: React.ReactNode;
  numberKeyRender?: (item: KeyConfig) => React.ReactNode;
  deleteRender?: () => React.ReactNode;
  extraKeyRender?: () => React.ReactNode;
  zIndex?: number;
  transition?: boolean;
  blurOnClose?: boolean;
  showDeleteKey?: boolean;
  randomKeyOrder?: boolean;
  closeButtonText?: number | string;
  deleteButtonText?: number | string;
  closeButtonLoading?: boolean;
  hideOnClickOutside?: boolean;
  safeAreaInsetBottom?: boolean;
  theme?: NumberKeyboardTheme;
  value?: string;
  extraKey?: string | string[];
  maxlength?: number;
  /** Dialog弹出时的的父容器 */
  getContainer?: HTMLElement | (() => HTMLElement);
  onShow?: () => void;
  onHide?: () => void;
  onBlur?: () => void;
  onInput?: (key: string) => void;
  onClose?: () => void;
  onDelete?: () => void;
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
