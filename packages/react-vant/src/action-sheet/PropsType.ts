import React from 'react';
import { SharedPopupProps } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type ActionSheetAction = {
  /** 标题	 */
  name?: string;
  /** 选项文字颜色	 */
  color?: string;
  /** 二级标题	 */
  subname?: string;
  /** 是否为加载状态	 */
  loading?: boolean;
  /** 是否为禁用状态	 */
  disabled?: boolean;
  /** 点击时触发的回调函数	 */
  callback?: (action: ActionSheetAction) => void;
  className?: string;
  style?: React.CSSProperties;
};

export interface ActionSheetProps extends BaseTypeProps, SharedPopupProps {
  visible?: boolean;
  /** 面板选项列表	 */
  actions?: ActionSheetAction[];
  /** 顶部标题	 */
  title?: React.ReactNode;
  /** 取消按钮文字	 */
  cancelText?: React.ReactNode;
  /** 选项上方的描述信息	 */
  description?: React.ReactNode;
  /** 关闭图标名称或图片链接 */
  closeIcon?: string | React.ReactNode;
  /** 是否在点击选项后关闭	 */
  closeOnClickAction?: boolean;
  /** 点击选项时触发，禁用或加载状态下不会触发	 */
  onSelect?: (item: ActionSheetAction, index: number) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: () => void;
}
