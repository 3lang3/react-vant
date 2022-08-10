import React from 'react'
import { CellProps } from '../cell/PropsType'
import { BaseTypeProps } from '../utils'

export interface CollapseProps extends BaseTypeProps {
  /** 组件根部DOM元素引用 */
  nativeRef?: React.RefObject<HTMLDivElement>
  /** 是否开启手风琴模式	 */
  accordion?: boolean
  /** 默认打开的面板name */
  initExpanded?: string | number | Array<number | string>
  /** 是否显示外边框	 */
  border?: boolean
  /** 当前展开面板的 name	 */
  value?: number | string | Array<number | string>
  /** 切换面板时触发	*/
  onChange?: (activeNames: number | string | Array<number | string>) => void
}

export interface CollapseItemProps extends CellProps {
  /** 唯一标识符，默认为索引值	 */
  name?: number | string
  /** 是否禁用面板	 */
  disabled?: boolean
  /** 是否为只读状态，只读状态下无法操作面板	 */
  readOnly?: boolean
  /** @private */
  index?: number
  children: React.ReactNode
}

export type CollapseItemInstance = {
  toggle: (expand: boolean) => void
}
