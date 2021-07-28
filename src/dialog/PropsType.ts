/* eslint-disable @typescript-eslint/ban-types */
import { BaseTypeProps } from '../utils';

export interface DialogProps extends BaseTypeProps {
  visible?: boolean;
  /** 是否显示右上角关闭按钮 */
  closeable?: boolean;
  /**
   * 关闭按钮icon值
   * @see https://3lang3.github.io/react-vant/#/zh-CN/icon
   */
  closeIcon?: string;
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
  /** 异步关闭 */
  beforeClose?: (action: 'cancel' | 'confirm') => Promise<boolean>;
  /** Dialog完全关闭后的回调 */
  afterClose?: () => void;
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
  /** 点击背景关闭 */
  closeOnClickOverlay?: boolean;
  callback?: (value: string) => void;
  /** 点击关闭icon按钮时调用方法 */
  onClickCloseIcon?: () => void;
}

export type DialogStatic = {
  (): (options: Partial<DialogProps>) => Promise<void>;
  confirm: (options: Partial<Omit<DialogProps, 'showCancelButton'>>) => Promise<void>;
  alert: (options: Partial<DialogProps>) => Promise<void>;
  close: () => void;
};
