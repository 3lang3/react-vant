import { LoadMoreProps, LoadMoreInstance } from '../load-more'
import { BaseTypeProps } from '../utils'

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
