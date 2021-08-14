import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';

export type PopupCloseIconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';

export interface PopupProps extends BaseTypeProps {
  /** 自定义标题 */
  title?: string | React.ReactNode;
  /** 自定义描述 */
  descrition?: string | React.ReactNode;
  /** 是否显示圆角 */
  round?: boolean;
  /** 是否显示弹出层	 */
  visible?: boolean;
  /**  是否显示遮罩层	 */
  overlay?: boolean;
  /** 是否显示关闭图标	 */
  closeable?: boolean;
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
  /** 关闭图标名称或图片链接	 */
  closeIcon?: string;
  /** 弹出位置，可选值为 `top` `bottom` `right` `left` */
  position?: Position;
  /** 动画类名 @see https://reactcommunity.org/react-transition-group/ */
  transition?: string;
  /** 是否开启底部安全区适配 */
  safeAreaInsetBottom?: boolean;
  /** 关闭图标位置，可选值为`top-left` `bottom-left` `bottom-right` */
  closeIconPosition?: string;
  /** 是否在点击遮罩层后关闭	 */
  overlayClosable?: boolean;
  /** 是否在页面回退时自动关闭	 */
  closeOnPopstate?: boolean;
  /** 点击弹出层时触发 */
  onClick?: (e: React.MouseEvent) => void;
  /** 点击关闭图标时触发	 */
  onClickCloseIcon?: (e: React.MouseEvent) => void;
  /** 点击遮罩层时触发 */
  onClickOverlay?: (e: React.MouseEvent) => void;
  /** 关闭弹出层时触发	*/
  onClose?: () => void;
  /** 关闭弹出层且动画结束后触发	 */
  afterClose?: () => void;
  onEntered?: () => void;
}
