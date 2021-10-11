/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { BaseTypeProps } from '../utils';

export interface DialogBtnProps {
  loading?: boolean;
  disabled?: boolean;
}
export interface DialogProps extends BaseTypeProps {
  visible?: boolean;
  /** 是否显示右上角关闭按钮 */
  closeable?: boolean;
  /**
   * 关闭按钮icon值
   * @see https://3lang3.github.io/react-vant/#/zh-CN/icon
   */
  closeIcon?: string | React.ReactNode;
  /** 标题 */
  title?: string | React.ReactNode;
  /** 样式风格，可选值为`round-button`	 */
  theme?: string;
  /** 设置宽度 */
  width?: string | number;
  /** 设置主题内容 */
  message?: string | React.ReactNode;
  /** 动画类名 @see https://reactcommunity.org/react-transition-group/ */
  transition?: string;
  /** message内容对齐 */
  messageAlign?: string;
  /** 是否显示取消按钮 */
  showCancelButton?: boolean;
  /** 取消按钮文本设置 */
  cancelButtonText?: string;
  /** 取消按钮文字颜色 */
  cancelButtonColor?: string;
  /** 是否显示确认按钮 */
  showConfirmButton?: boolean;
  /** 确认按钮文本设置 */
  confirmButtonText?: string;
  /** 确认按钮文本颜色 */
  confirmButtonColor?: string;
  /** 是否显示背景遮罩层	 */
  overlay?: boolean;
  overlayClass?: string;
  overlayStyle?: React.CSSProperties;
  /** 是否在页面回退时自动关闭	 */
  closeOnPopstate?: boolean;
  /** 点击背景关闭 */
  closeOnClickOverlay?: boolean;
  /** 点击关闭icon按钮时调用方法 */
  onClickCloseIcon?: () => void;
  children?: React.ReactNode;
  /** 取消按钮的状态 */
  cancelProps?: DialogBtnProps;
  /** 确认按钮的状态 */
  confirmProps?: DialogBtnProps;
  /** Dialog弹出时的的父容器 */
  teleport?: HTMLElement | (() => HTMLElement);
  /** 自定义底部按钮区域 */
  footer?: React.ReactNode;
  /** Dialog关闭时的回调 */
  onClose?: () => void;
  /** Dialog完全关闭后的回调 */
  onClosed?: () => void;
  /** 点击确认的回调 */
  onConfirm?: (
    e: React.MouseEvent,
  ) => void | boolean | Promise<boolean> | Promise<void> | Promise<void | boolean>;
  /** 是否支持点击遮罩关闭对话框 */
  onCancel?: (
    e: React.MouseEvent,
  ) => void | boolean | Promise<boolean> | Promise<void> | Promise<void | boolean>;
}

export type AlertDialogProps = Omit<DialogProps, 'confirmButtonText' | 'onCancel'>;

export type DialogStatic = {
  (props: DialogProps): JSX.Element;
  show: (props: DialogProps) => void;
  confirm: (props: DialogProps) => Promise<boolean>;
  alert: (props: DialogProps) => Promise<React.MouseEvent>;
};
