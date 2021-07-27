import React from 'react';
import { BaseTypeProps } from '../utils';

export type ActionSheetAction = {
  name?: string;
  color?: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  className?: unknown;
};

export interface ActionSheetProps extends BaseTypeProps {
  visible?: boolean;
  title?: string | React.ReactNode;
  round?: boolean;
  actions?: ActionSheetAction[];
  closeable?: boolean;
  cancelText?: string | React.ReactNode;
  renderCancel?: boolean | string | React.ReactNode;
  description?: string | React.ReactNode;
  closeOnPopstate?: boolean;
  closeOnClickAction?: boolean;
  safeAreaInsetBottom?: boolean;
  closeIcon?: string | React.ReactNode;
  onSelect?: (item, index) => void;
  onCancel?: () => void;
}
