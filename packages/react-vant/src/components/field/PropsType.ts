import React from 'react'
import { CellProps } from '../cell/PropsType'
import { DialogProps } from '../dialog/PropsType'
import { TextAreaSelfProps } from '../text-area/PropsType'
import { InputSharedProps, InputTextAlign } from '../input/PropsType'

export type FieldType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password'
  | 'textarea'

export type FieldClearTrigger = 'always' | 'focus'

export type FieldFormatTrigger = 'onBlur' | 'onChange'

export type FieldAutosizeConfig = {
  maxHeight?: number
  minHeight?: number
}

export type FieldTooltipProps = Omit<DialogProps, 'visible'> & {
  icon?: React.ReactNode
}

export interface FieldCommonProps extends InputSharedProps, TextAreaSelfProps {
  align?: InputTextAlign
  /** 是否将输入内容标红	 */
  error?: boolean
  /** 底部错误提示文案，为空时不展示 */
  errorMessage?: React.ReactNode
  /** 左侧图标名称或图片链接	 */
  leftIcon?: React.ReactNode
  /** 右侧图标名称或图片链接	 */
  rightIcon?: React.ReactNode
  /** 输入内容格式化函数 */
  formatter?: (val: string | number) => string
  /**
   * 格式化函数触发的时机
   * @default 'onChange'
   */
  formatTrigger?: FieldFormatTrigger
  /**
   * 显示清除图标的时机，
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: FieldClearTrigger
  /** 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效。 */
  children?: React.ReactNode
}

export interface FieldProps
  extends FieldCommonProps,
    Partial<Omit<CellProps, 'value' | 'style' | 'children'>> {
  /** Field 类型 */
  type?: FieldType
  /** 左侧文本额外类名	 */
  labelClass?: string
  /** 左侧文本宽度，默认单位为 px	 */
  labelWidth?: number | string
  /** 左侧文本对齐方式 */
  labelAlign?: InputTextAlign
  /** 右侧输入控件容器的对齐方式 */
  controlAlign?: InputTextAlign
  /** 是否在 label 后面添加冒号	 */
  colon?: boolean
  /** 错误提示文案对齐方式 */
  errorMessageAlign?: InputTextAlign
  /** 额外的提示信息 */
  intro?: React.ReactNode
  /** 字段提示信息 */
  tooltip?: React.ReactNode | FieldTooltipProps
  /** 自定义输入框尾部按钮 */
  suffix?: React.ReactNode
  /** @deprecated
   * 请使用 suffix 代替
   */
  button?: React.ReactNode
  /** 设置前置内容 */
  prefix?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyPress?: (e: React.KeyboardEvent) => void
  onClickInput?: (e: React.MouseEvent) => void
  onClickLeftIcon?: (e: React.MouseEvent<HTMLDivElement>) => void
  onClickRightIcon?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export type FieldInstance = {
  focus: () => void
  blur: () => void
  clear: () => void
  nativeElement: HTMLTextAreaElement | HTMLInputElement | null
}
