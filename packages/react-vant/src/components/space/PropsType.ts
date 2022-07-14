import React from 'react'
import { BaseTypeProps } from '../utils'

export interface SpaceProps extends BaseTypeProps {
  /** 间距方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical'
  /** 交叉轴对齐方式	 */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /** 主轴对齐方式	 */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  /** 是否自动换行，仅在 horizontal 时有效	 */
  wrap?: boolean
  /** 是否渲染为块级元素	 */
  block?: boolean
  /**
   * 间距大小
   * 设为数组时则分别设置垂直方向和水平方向的间距大小
   * @default 8px
   */
  gap?: number | string | [number | string, number | string]
  /** 分隔内容 */
  divider?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
