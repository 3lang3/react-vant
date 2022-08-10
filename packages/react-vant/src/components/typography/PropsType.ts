import React from 'react'
import { BaseTypeProps, PropagationEvent } from '../utils'

export type EllipsisProps = {
  children: string
  rows?: number
  symbol?: string
  expandText?: string
  collapseText?: string
  suffixText?: string
  suffixCount?: number
  stopPropagationForActionButtons?: PropagationEvent[]
  onExpend?: (isExpend: boolean) => void
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & Omit<BaseTypeProps, 'children'>

export type TypographyType =
  | 'danger'
  | 'secondary'
  | 'light'
  | 'primary'
  | 'success'
  | 'warning'
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface TypographyBaseProps extends BaseTypeProps {
  type?: TypographyType
  color?: string | TypographyType
  size?: TypographySize
  level?: TypographyTitleLevel
  disabled?: boolean
  delete?: boolean
  underline?: boolean
  center?: boolean
  strong?: boolean
  ellipsis?: boolean | number | Omit<EllipsisProps, 'children'>
  onClick?: (event: React.MouseEvent) => void
  tag?: string
}

export type TypographyTextProps = Omit<TypographyBaseProps, 'level'>
export type TypographyTitleProps = Omit<TypographyBaseProps, 'size' | 'tag'>
export type TypographyLinkProps = Omit<TypographyBaseProps, 'level'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
