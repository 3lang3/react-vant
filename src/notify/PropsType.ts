import React from 'react';
import { BaseTypeProps, TeleportType } from '../utils';

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning';

export type NotifyMessage = string | React.ReactNode;

export interface NotifyProps extends BaseTypeProps {
  visible?: boolean;
  /** 字体颜色	 */
  color?: string;
  /** 展示时长(ms)，值为 0 时，notify 不会消失	 */
  duration?: number;
  /** 展示文案，支持通过\n换行	 */
  message?: NotifyMessage;
  /** 背景颜色	 */
  background?: string;
  /** 是否锁定背景滚动	 */
  lockScroll?: boolean;
  /**
   * 类型
   * @default 'danger'
   */
  type?: NotifyType;
  /** 点击时的回调函数	 */
  onClick?: (event: React.MouseEvent) => void;
  /** 关闭时的回调函数	 */
  onClose?: () => void;
  /** 完全展示后的回调函数	 */
  onOpened?: () => void;
  /** 弹出时的的父容器 */
  teleport?: TeleportType;
  children?: React.ReactNode;
}

export type NotifyPrivateProps = {
  /** @private */
  onClosed?: () => void;
};

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
  /** 展示提示	 */
  show: (option: NotifyProps | string) => void;
  /** 关闭提示	 */
  clear: () => void;
  /** 修改默认配置，对所有 Notify 生效	 */
  setDefaultOptions: (options: NotifyOptions) => void;
  /** 重置默认配置，对所有 Notify 生效	 */
  resetDefaultOptions: () => void;
  /** @private */
  currentOptions: NotifyOptions;
};
