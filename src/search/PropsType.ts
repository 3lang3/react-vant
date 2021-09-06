import React from 'react';
import { FieldClearTrigger } from '../field/PropsType';
import { BaseTypeProps } from '../utils';

export interface SearchProps extends BaseTypeProps {
  /** 输入框内容 */
  value?: string;
  /** 搜索框左侧文本	 */
  label?: React.ReactNode;
  /** 输入框左侧图标名称或图片链接	 */
  leftIcon?: string | React.ReactNode;
  /**  输入框右侧图标名称或图片链接	*/
  rightIcon?: string | React.ReactNode;
  /** 取消按钮文字	 */
  actionText?: React.ReactNode;
  /** 搜索框外部背景色	 */
  background?: string;
  /** 是否在搜索框右侧显示取消按钮	 */
  showAction?: Boolean;
  /**
   * 显示清除图标的时机
   * - always 表示输入框不为空时展示，
   * - focus 表示输入框聚焦且不为空时展示
   */
  clearTrigger?: FieldClearTrigger;
  /**  搜索框形状，可选值为 round	 */
  shape?: 'square' | 'round';
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean;
  /** 占位提示文字	 */
  placeholder?: string;
  /**  是否禁用输入框	 */
  disabled?: boolean;
  /** 输入的最大字符数	  */
  maxlength?: number;

  /**  确定搜索时触发	 */
  onSearch?: (val: string) => void;
  /** 输入框内容变化时触发	 */
  onChange?: (val: string) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: () => void;
  /** 点击清除按钮后触发	 */
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export type SearchInstance = {
  /** 获取输入框焦点	 */
  focus?: () => void;
  /** 取消输入框焦点	 */
  blur?: () => void;
};
