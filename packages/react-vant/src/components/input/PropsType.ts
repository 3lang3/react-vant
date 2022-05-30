import React from 'react';

export type InputType = 'tel' | 'text' | 'digit' | 'number' | 'search' | 'password' | 'textarea';

export type InputTextAlign = 'left' | 'center' | 'right';

export type InputClearTrigger = 'always' | 'focus';

export type InputFormatTrigger = 'onBlur' | 'onChange';

export type InputValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit';

export type InputAutosizeConfig = {
  maxHeight?: number;
  minHeight?: number;
};

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>,
  HTMLInputElement & HTMLTextAreaElement
>

export interface InputProps extends Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'autoComplete'
  | 'autoFocus'
  | 'pattern'
  | 'inputMode'
  | 'type'
  | 'name'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'onClick'
> {
  value?: string;
  defaultValue?: string;
  /** 输入框类型 */
  type?: InputType;
  /** 名称，提交表单的标识符	 */
  name?: string | any;
  /** 输入框行数 */
  rows?: number;
  /** 输入框占位提示文字	 */
  placeholder?: string;
  /** 输入的最大字符数	 */
  maxlength?: number;
  /** 输入框对齐方式，可选值为 `center` `right` */
  align?: InputTextAlign;
  /** 是否禁用输入框	 */
  disabled?: boolean;
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autofocus?: boolean;
  /** 是否为只读状态，只读状态下无法输入内容	 */
  readonly?: boolean;
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean;
  /** 自定义清除图标 */
  clearIcon?: React.ReactNode;
  /** 是否将输入内容标红*/
  error?: boolean;
  /** 输入内容格式化函数 */
  formatter?: (val: string | number) => string;
  /**
   * 格式化函数触发的时机
   * @default 'onChange'
   */
  formatTrigger?: InputFormatTrigger;
  /**
   * 显示清除图标的时机，
   * always 表示输入框不为空时展示 focus 表示输入框聚焦且不为空时展示
   * @default 'focus'
   */
  clearTrigger?: InputClearTrigger;
  /** 获取input dom实例 */
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  /**
   * 是否自适应内容高度，只对 textarea 有效
   * 可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px
   */
  autosize?: boolean | InputAutosizeConfig;
  onChange?: (val: string) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  onKeypress?: (e: React.KeyboardEvent) => void;
}

export type InputInstance = {
  focus: () => void;
  blur: () => void;
};
