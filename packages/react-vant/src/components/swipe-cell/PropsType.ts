import React from 'react';
import { BaseTypeProps } from '../utils';

export interface SwipeCellProps extends BaseTypeProps {
  /** 标识符，可以在事件参数中获取到 */
  name?: string | number;
  /** 指定左侧滑动区域宽度，单位为px */
  leftWidth?: string | number;
  /** 指定右侧滑动区域宽度，单位为 px */
  rightWidth?: string | number;
  /** 左侧滑动区域的内容 */
  leftAction?: React.ReactNode;
  /** 右侧滑动区域的内容 */
  rightAction?: React.ReactNode;
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  beforeClose?: (...args: any[]) => Promise<boolean> | boolean;
  /** 是否阻止滑动事件冒泡	 */
  stopPropagation?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 打开时触发 */
  onOpen?: ({ name, position }: { name: string | number; position: SwipeCellSide }) => void;
  /** 关闭时触发 */
  onClose?: ({ name, position }: { name: string | number; position: SwipeCellPosition }) => void;
  /** 点击时触发 */
  onClick?: (position: SwipeCellPosition) => void;
  children?: React.ReactNode;
}

export type SwipeCellSide = 'left' | 'right';

export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';

export type SwipeCellInstance = {
  open: (side: SwipeCellSide) => void;
  close: () => void;
};
