import React from 'react'
import { BaseTypeProps } from '../utils'

export type StepperTheme = 'default' | 'round'

export interface StepperProps extends BaseTypeProps {
  theme?: StepperTheme
  /** 是否只允许输入整数	 */
  integer?: boolean
  /** 是否禁用步进器	 */
  disabled?: boolean
  /** 是否允许输入的值为空	 */
  allowEmpty?: boolean
  /** 输入框宽度，默认单位为 px	 */
  inputWidth?: number | string
  /** 按钮大小以及输入框高度，默认单位为 px	 */
  buttonSize?: number | string
  /** 输入框占位提示文字	 */
  placeholder?: string
  /** 是否禁用增加按钮	 */
  disablePlus?: boolean
  /** 是否禁用减少按钮	 */
  disableMinus?: boolean
  /** 是否禁用输入框	 */
  disableInput?: boolean
  /** 固定显示的小数位数	 */
  decimalLength?: number
  /** 标识符，可以在 onChange 事件回调参数中获取	 */
  name?: string
  /** 最小值	 */
  min?: number
  /** 最大值	 */
  max?: number
  /** 步长，每次点击时改变的值	 */
  step?: number
  /** 是否显示增加按钮	 */
  showPlus?: boolean
  /** 是否显示减少按钮	 */
  showMinus?: boolean
  /** 是否显示输入框	 */
  showInput?: boolean
  /** 是否开启长按手势	 */
  longPress?: boolean
  /** 输入框点击事件 */
  onClick?: (event: React.MouseEvent) => void
  /** 当前输入的值	 */
  value?: number | null
  /** 默认值 */
  defaultValue?: number | null
  /** 当绑定值变化时触发的事件	 */
  onChange?: (val: number | null, detail?: { name: string }) => void
  /** 点击增加按钮时触发	 */
  onPlus?: (event: React.MouseEvent, val: number | null) => void
  /** 点击减少按钮时触发	 */
  onMinus?: (event: React.MouseEvent, val: number | null) => void
  /** 输入框聚焦时触发	 */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** 输入框失焦时触发	 */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  /** 点击不可用的按钮时触发	 */
  onOverlimit?: (actinType: string) => void
}

export type StepperInstance = {
  focus: () => void
  blur: () => void
}
