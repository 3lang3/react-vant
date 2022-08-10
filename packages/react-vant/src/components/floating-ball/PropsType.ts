import React from 'react'
import { BaseTypeProps } from '../utils'

export type AdsorbProps = {
  /**
   * 滚动时是否缩进
   * @default false
   * - 0-1的数字，默认0.5 缩进一半
   * - 1 全部缩进
   * - 0和false一致 不缩进
   */
  indent?: boolean | number
  /** 缩进时可添加class */
  indentClassName?: string
  /**
   * 距离吸附边的距离
   * @default 0
   */
  distance?: number
}

export interface FloatingBallProps extends Omit<BaseTypeProps, 'children'> {
  /** 近边吸附能力 */
  adsorb?: boolean | AdsorbProps
  /** 是否开启拖拽 */
  draggable?: boolean
  /** 限制拖动范围在屏幕边界内 */
  boundary?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 禁用时的class */
  disabledClassName?: string
  /** 初始位置 */
  offset?: {
    left?: React.CSSProperties['left']
    right?: React.CSSProperties['left']
    top?: React.CSSProperties['top']
    bottom?: React.CSSProperties['bottom']
  }
  /** 菜单项 */
  menu?: {
    /** 激活状态 */
    active?: boolean
    /** 默认的激活状态 */
    defaultActive?: boolean
    /** 菜单激活状态变化的回调 */
    onChange?: (active?: boolean) => void
    /** 菜单项 */
    items?: React.ReactNode[]
    /** 菜单展开方向 */
    direction?: 'around' | 'vertical' | 'horizontal'
    /**
     * 点击菜单项关闭菜单
     * @default true
     */
    itemClickClose?: boolean
  }
  /**
   * 支持 childrenRenderProps 方式
   * @param active 菜单激活状态
   * @param indenting 是否处于滚动缩进中
   */
  children?:
    | React.ReactNode
    | ((p: { active: boolean; indenting: boolean }) => React.ReactNode)
}

export type FloatingBallInstance = {
  /** 打开菜单 */
  open: () => void
  /** 关闭菜单 */
  close: () => void
}

export interface FloatingBallItemProps extends BaseTypeProps {
  disabled?: boolean
  color?: string
  children: React.ReactNode
  onClick?: () => void
}
