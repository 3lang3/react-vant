import React from 'react';
import { BaseTypeProps } from '../utils';

export type DividerContentPosition = 'left' | 'center' | 'right';
export interface DividerProps
  extends BaseTypeProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** 是否使用虚线	 */
  dashed?: boolean;
  /**
   * 是否使用 0.5px 线
   * @default true
   */
  hairline?: boolean;
  /**
   * 内容位置
   * @default 'center'
   */
  contentPosition?: DividerContentPosition;
}
