import React from 'react';
import { BaseTypeProps, TeleportType } from '../utils';

export type PopoverTheme = 'light' | 'dark';
export type PopoverTrigger = 'manual' | 'click';
export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type PopoverAction = {
  /** 选项文字	 */
  text: string;
  /** 文字左侧的图标，支持传入图标名称或图片链接	 */
  icon?: string;
  /** 选项文字颜色	 */
  color?: string;
  /** 是否为禁用状态	 */
  disabled?: boolean;
  /** 为对应选项添加额外的类名	 */
  className?: string;
};

export interface PopoverProps extends BaseTypeProps {
  /** 是否显示遮罩层	 */
  overlay?: boolean;
  /** 动画时长，单位毫秒，设置为 0 可以禁用动画	 */
  duration?: number;
  /** 图标类名前缀，等同于 Icon 组件的 classPrefix 属性	 */
  iconPrefix?: string;
  /** 自定义遮罩层类名	 */
  overlayClass?: string;
  /** 自定义遮罩层样式	 */
  overlayStyle?: React.CSSProperties;
  /** 是否在点击选项后关闭	 */
  closeOnClickAction?: boolean;
  /** 是否在点击遮罩层后关闭菜单	 */
  closeOnClickOverlay?: boolean;
  /** 是否在点击外部元素后关闭菜单	 */
  closeOnClickOutside?: boolean;
  /**
   * 出现位置的偏移量
   * @default [0,8]
   */
  offset?: [number, number];
  /** 主题风格，可选值为 dark	 */
  theme?: PopoverTheme;
  /** 触发方式，可选值为 manual	 */
  trigger?: PopoverTrigger;
  /** 选项列表	 */
  actions?: PopoverAction[];
  /** 弹出位置	 */
  placement?: PopoverPlacement;
  /** 触发 Popover 显示的元素内容 */
  reference?: string | React.ReactNode;
  /** 指定挂载的节点 */
  teleport?: TeleportType;
  children?: React.ReactNode;
  /** 点击选项时触发	 */
  onSelect?: (action: PopoverAction, index: number) => void;
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
}

export type PopoverInstance = {
  /** 打开popover */
  show: () => void;
  /** 关闭popover */
  hide: () => void;
};
