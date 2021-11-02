import React, { CSSProperties } from 'react';
import { BaseTypeProps, TeleportType } from '../utils';

export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export type PopupCloseIconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';

export interface SharedPopupProps {
  /** 是否显示圆角 */
  round?: boolean;
  /** css z-index值 */
  zIndex?: number;
  /** 是否显示关闭图标	 */
  closeable?: boolean;
  /**  是否显示遮罩层	 */
  overlay?: boolean;
  /** 自定义遮罩层类名 */
  overlayClass?: string;
  /** 自定义遮罩层样式 */
  overlayStyle?: CSSProperties;
  /** 关闭时销毁 Popup 里的子元素 */
  destroyOnClose?: boolean;
  /** 强制渲染 Popup */
  forceRender?: boolean;
  /** 是否锁定背景滚动	 */
  lockScroll?: boolean;
  /** 动画时长 */
  duration?: number;
  /** 动画类名 @see https://reactcommunity.org/react-transition-group/ */
  transition?: string;
  /** 是否开启底部安全区适配 */
  safeAreaInsetBottom?: boolean;
  /** 是否在点击遮罩层后关闭	 */
  closeOnClickOverlay?: boolean;
  /** 是否在页面回退时自动关闭	 */
  closeOnPopstate?: boolean;
  /** 点击遮罩层时触发 */
  onClickOverlay?: (e: React.MouseEvent) => void;
  /** 打开弹出层时触发	 */
  onOpen?: () => void;
  /** 关闭弹出层触发	*/
  onClose?: () => void;
  /** 打开弹出层且动画结束后触发 */
  onOpened?: () => void;
  /** 关闭弹出层且动画结束后触发 */
  onClosed?: () => void;
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise	 */
  beforeClose?: (action: string | number) => boolean | Promise<boolean>;
  /** 指定挂载的节点 */
  teleport?: TeleportType;
}

export interface PopupProps extends BaseTypeProps, SharedPopupProps {
  /** 自定义标题 */
  title?: string | React.ReactNode;
  /** 自定义描述 */
  descrition?: string | React.ReactNode;
  /** 是否显示弹出层	 */
  visible?: boolean;
  /** 关闭图标名称或图片链接	 */
  closeIcon?: string | React.ReactNode;
  /** 图标类名前缀，等同于 Icon 组件的 classPrefix 属性	 */
  iconPrefix?: string;
  /** 弹出位置 */
  position?: PopupPosition;
  /** 关闭图标位置 */
  closeIconPosition?: string;
  /** 点击弹出层时触发 */
  onClick?: (e: React.MouseEvent) => void;
  /** 点击关闭图标时触发	 */
  onClickCloseIcon?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export type PopupInstanceType = {
  popupRef: React.MutableRefObject<HTMLDivElement>;
};
