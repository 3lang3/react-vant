import React from 'react';
import { BaseTypeProps } from '../utils';

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning';

export type NotifyMessage = string | React.ReactNode;

export interface NotifyProps extends BaseTypeProps {
  visible?: boolean;
  color?: string;
  duration?: number;
  message?: NotifyMessage;
  background?: string;
  lockScroll?: boolean;
  type?: NotifyType;
  onClick?: (event: React.MouseEvent) => void;
  onClose?: () => void;
  onOpened?: () => void;
  /** Dialog弹出时的的父容器 */
  getContainer?: HTMLElement | (() => HTMLElement);
}

export type NotifyOptions = {
  type?: NotifyType;
  color?: string;
  message?: NotifyMessage;
  duration?: number;
  className?: string;
  background?: string;
  lockScroll?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onClose?: () => void;
};

export type NotifyMethodProps = string | Omit<NotifyProps, 'visible' | 'type'>;

export type NotifyStatic = {
  (props: NotifyProps): React.ReactNode;
  show: (NotifyProps) => void;
  clear: () => void;
  currentOptions: NotifyOptions;
  setDefaultOptions: (options: NotifyOptions) => void;
  resetDefaultOptions: () => void;
};
