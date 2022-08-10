import React from 'react'

export interface BaseTypeProps {
  style?: React.CSSProperties | any
  className?: string
  children?: React.ReactNode
}

/** 指定挂载的节点 */
export type TeleportType = HTMLElement | (() => HTMLElement) | null

export type WithDisplayNameReactElement = React.ReactElement & {
  type: { displayName: string }
}
