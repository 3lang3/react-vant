import React from 'react'

export type InputType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password'

export type InputTextAlign = 'left' | 'center' | 'right'

export type InputClearTrigger = 'always' | 'focus'

export type InputAutosizeConfig = {
  maxHeight?: number
  minHeight?: number
}

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputNativeProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'autoComplete'
  | 'autoFocus'
  | 'pattern'
  | 'name'
  | 'readOnly'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'onClick'
>
export interface InputSharedProps {
  value?: string
  defaultValue?: string
  className?: string
  style?: React.CSSProperties
  /** 输入框占位提示文字	 */
  placeholder?: string
  /** 是否禁用输入框	 */
  disabled?: boolean
  name?: string
  readOnly?: boolean
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autoFocus?: boolean
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean
  /** 自定义清除图标 */
  clearIcon?: React.ReactNode
  /**
   * 显示清除图标的时机，
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: InputClearTrigger
  onChange?: (val: string) => void
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void
  /** 当输入值超出maxLength时触发 */
  onOverlimit?: () => void
}

export interface InputProps extends InputNativeProps, InputSharedProps {
  /** 输入框类型 */
  type?: InputType
  /** 输入框对齐方式，可选值为 `center` `right` */
  align?: InputTextAlign
  /** 自定义前置内容 */
  prefix?: React.ReactNode
  /** 自定义后置内容 */
  suffix?: React.ReactNode
}

export type InputInstance = {
  focus: () => void
  blur: () => void
  clear: () => void
  nativeElement: HTMLInputElement | null
}
