import React from 'react';


export type AutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

type NativeTextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export interface TextAreaProps extends Pick<
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
  | 'onClick'
> {
  value?: string;
  defaultValue?: string;
  maxLength?: string;
  /** 输入框行数 */
  rows?: number;
  /** 输入框占位提示文字	 */
  placeholder?: string;
  /** 是否禁用输入框	 */
  disabled?: boolean;
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autoFocus?: boolean;
  /** 是否显示字数统计，需要设置maxlength属性 */
  showWordLimit?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autosize?: boolean | AutosizeConfig;
  onChange?: (val: string) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onKeypress?: (e: React.KeyboardEvent) => void;
}

export type TextAreaInstance = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  nativeElement: HTMLTextAreaElement | null
};
