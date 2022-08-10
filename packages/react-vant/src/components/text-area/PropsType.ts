import React from 'react'
import { InputSharedProps } from '../input/PropsType'

export type AutosizeConfig = {
  maxHeight?: number
  minHeight?: number
}

type NativeTextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export type TextAreaSelfProps = {
  /** 输入的最大字符数 */
  maxLength?: number
  /** 输入框行数 */
  rows?: number
  /** 是否显示字数统计，需要设置maxlength属性 */
  showWordLimit?:
    | boolean
    | (({
        currentCount,
        maxLength,
      }: {
        currentCount: number
        maxLength: number
      }) => React.ReactNode)
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autoSize?: boolean | AutosizeConfig
}

export interface TextAreaProps
  extends Pick<
      NativeTextAreaProps,
      | 'autoComplete'
      | 'autoFocus'
      | 'disabled'
      | 'readOnly'
      | 'name'
      | 'onFocus'
      | 'onBlur'
      | 'onCompositionStart'
      | 'onCompositionEnd'
      | 'onKeyUp'
      | 'onKeyDown'
      | 'onKeyPress'
      | 'onClick'
    >,
    InputSharedProps,
    TextAreaSelfProps {}

export type TextAreaInstance = {
  focus: () => void
  blur: () => void
  clear: () => void
  nativeElement: HTMLTextAreaElement | null
}
