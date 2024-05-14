import React from 'react'
import { SharedPopupProps } from '../popup/PropsType'
import { BaseTypeProps } from '../utils'

export type PickerToolbarPosition = 'top' | 'bottom'

/** 列选项 */
export type PickerColumnOption = {
  text?: React.ReactNode
  value?: string | number
  children?: PickerColumnOption[]
  disabled?: boolean
} & Record<string, any>

/** 列 */
export type PickerColumn<T = PickerColumnOption> = (string | T)[]

export type PickerFieldNames = {
  text?: string
  value?: string
  children?: string
}

export type PickerPopupActions = {
  open: () => void
  close: () => void
  toggle: () => void
}

export interface PickerCommonProps<T> extends Omit<BaseTypeProps, 'children'> {
  popup?: boolean | Omit<SharedPopupProps, 'closeable'>
  visible?: boolean
  onClose?: () => void
  /** 对象数组，配置每一列显示的数据 */
  columns?: PickerColumn<T> | PickerColumn<T>[]
  /** 自定义 columns 结构中的字段 */
  columnsFieldNames?: PickerFieldNames
  /** 顶部栏标题 */
  title?: React.ReactNode
  /** 是否显示加载状态 */
  loading?: boolean
  /** 是否只读状态 */
  readOnly?: boolean
  /**  确认按钮文字 */
  cancelButtonText?: React.ReactNode
  /** 取消按钮文字 */
  confirmButtonText?: React.ReactNode
  /**  是否显示顶部栏 */
  showToolbar?: boolean
  /** 选项高度，支持 px vw vh rem 单位，默认 px */
  itemHeight?: number | string
  /** 可见的选项个数 */
  visibleItemCount?: number
  /** 快速滑动时惯性滚动的时长，单位 ms */
  swipeDuration?: number | string
  /** 顶部栏位置，可选值为 bottom */
  toolbarPosition?: PickerToolbarPosition
  /** 自定义整个顶部栏的内容 */
  toolbar?: React.ReactNode
  /** 自定义选项上方内容 */
  columnsTop?: React.ReactNode
  /** 占位符 */
  placeholder?: false | React.ReactNode | React.ReactNode[]
  /** 自定义选项下方内容 */
  columnsBottom?: React.ReactNode
  /** 自定义确认按钮内容 */
  optionRender?: (option: string | object) => React.ReactNode
  children?: (
    val: string | string[],
    options: PickerColumnOption[],
    actions: PickerPopupActions
  ) => React.ReactNode
  /** 点击取消按钮时触发 */
  onCancel?: () => void
}

export interface PickerSingleProps<T> extends PickerCommonProps<T> {
  /** 选中项 */
  value?: string
  /** 默认选中项 */
  defaultValue?: string
  /** 选项改变时触发 */
  onChange?: (value: string, selectedRow: T, index?: number) => void
  /** 点击完成按钮时触发 */
  onConfirm?: (value: string, selectedRow: T, index: number) => void
}

export interface PickerMultipleProps<T> extends PickerCommonProps<T> {
  /** 选中项 */
  value?: string[]
  /** 默认选中项 */
  defaultValue?: string[]
  /** 选项改变时触发 */
  onChange?: (value: string[], selectedRows: T[], indexes?: number[]) => void
  /** 点击完成按钮时触发 */
  onConfirm?: (value: string[], selectedRows: T[], indexes: number[]) => void
}

export type PickerProps<T = PickerColumnOption> =
  | PickerSingleProps<T>
  | PickerMultipleProps<T>
export interface PickerColumnProps extends BaseTypeProps {
  /** column 列索引 */
  index?: number
  readOnly?: boolean
  itemHeight: number | string
  value?: string
  valueKey: string
  textKey: string
  placeholder?: React.ReactNode
  swipeDuration?: number | string
  visibleItemCount?: number | string
  options?: PickerColumnOption[]
  optionRender?: (option: any) => React.ReactNode
  onSelect: (
    value: PickerColumnOption,
    index: number,
    ignoreChange?: boolean
  ) => void
}

export type PickerValueExtend = {
  columns: PickerColumnOption[][]
  items: (PickerColumnOption | null | any)[]
  indexes: number[]
}
