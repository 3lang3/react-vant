import React from 'react'
import { BaseTypeProps } from '../utils'

export interface LoadMoreProps extends Omit<BaseTypeProps, 'children'> {
  onLoad: (isRetry: boolean) => Promise<void>
  done?: boolean
  /**
   * @default 300
   */
  threshold?: number
  loadingText?: React.ReactNode
  doneText?: React.ReactNode
  failedRender?: (retry: () => void) => React.ReactNode
  children?:
    | React.ReactNode
    | ((done: boolean, failed: boolean, retry: () => void) => React.ReactNode)
}
