import React from 'react';
import { BaseTypeProps } from '../utils';

export type Direction = 'up' | 'down';

export interface ListProps extends BaseTypeProps {
  /** 是否加载失败，加载失败后点击错误提示可以重新触发 onLoad 事件	 */
  error?: boolean;
  /** 是否处于加载状态，加载过程中不触发 onLoad 事件	 */
  loading?: boolean;
  /** 是否已加载完成，加载完成后不再触发 onLoad 事件	 */
  finished?: boolean;
  /** 加载失败后的提示文案	 */
  errorText?: React.ReactNode;
  /**
   * 加载过程中的提示文案
   * @default '加载中...'
   */
  loadingText?: React.ReactNode;
  /** 加载完成后的提示文案	 */
  finishedText?: React.ReactNode;
  /**
   * 滚动条与底部距离小于 offset 时触发 onLoad 事件
   * @default 300
   */
  offset?: number | string;
  /**
   * @default 'down'
   */
  direction?: Direction;
  /**
   * 是否在初始化时立即执行滚动位置检查
   * @default true
   */
  immediateCheck?: boolean;
  /**
   * 是否在onLoad执行后再次检查滚动位置
   * @default true
   * @import 请确保onLoad在执行数次后, List会铺满页面
   * @example
   * ```jsx
   * // 这样会无限触发onLoad事件
   * <List
   *  onLoad={() => null}
   * >
   *  {...}
   * </List>
   * ```
   */
  autoCheck?: boolean;
  /** 滚动条与底部距离小于 offset 时触发	 */
  onLoad?: () => Promise<unknown> | void;
  children?: React.ReactNode;
}

export type ListInstance = {
  /** 检查当前的滚动位置，若已滚动至底部，则会触发 onLoad 事件	 */
  check: () => void;
  state: {
    loading: boolean;
    error: boolean;
  };
};
