import React from 'react'
import { BaseTypeProps } from '../utils'

export type LoadMoreDirection = 'up' | 'down'
export interface LoadMoreProps extends Omit<BaseTypeProps, 'children'> {
  /** 滚动条与底部距离小于 threshold 时触发 */
  onLoad: (isRetry: boolean) => Promise<void>
  /** 是否已加载完成，加载完成后不再触发 onLoad 事件	 */
  finished?: boolean
  /**
   * @default 300
   */
  threshold?: number
  /** 加载过程中的提示文案 */
  loadingText?: React.ReactNode
  /** 加载完成后的提示文案 */
  finishedText?: React.ReactNode
  /** 加载失败后的提示文案 */
  errorText?: React.ReactNode | ((retry: () => void) => React.ReactNode)
  children?: React.ReactNode
}

export type LoadMoreInstance = {
  check: (...args) => void
}

export interface ListProps
  extends Omit<BaseTypeProps, 'children'>,
    Omit<LoadMoreProps, 'threshold'> {
  /**
   * 滚动条与底部距离小于 offset 时触发 onLoad 事件
   * @default 300
   */
  offset?: LoadMoreProps['threshold']
}

export type ListInstance = LoadMoreInstance
