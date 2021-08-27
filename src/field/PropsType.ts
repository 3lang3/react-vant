import { ReactElement } from 'react';
import { JsxElement } from 'typescript';
import { BaseTypeProps } from '../utils';
import { CellProps } from '../cell/PropsType';

export type TAlignment = 'center' | 'right' | 'left';

export interface FieldProps extends BaseTypeProps, Partial<CellProps> {
  value?: string | number;
  type?: string;
  name?: string;
  rows?: number;
  placeholder?: string;
  autosize?: boolean;
  isLink?: boolean;
  errorMessage?: string;
  className?: string;
  labelClass?: string;
  labelWidth?: string;
  maxlength?: number;
  labelAlign?: TAlignment;
  inputAlign?: TAlignment;
  errorMessageAlign?: TAlignment; //
  showWordLimit?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  colon?: boolean;
  clickable?: boolean;
  autofocus?: boolean;
  required?: boolean;
  border?: boolean;
  error?: boolean;
  labelIcon?: string;
  leftIcon?: string;
  rightIcon?: string | React.ReactNode;
  formatTrigger?: string;
  onChange?: (val: string | number) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (val: string | number) => void;
  onBlur?: (val: string | number) => void;
  onKeypress?: (val: string | number) => void;
  onClickInput?: (e: React.MouseEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onClickLeftIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickRightIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  getFieldRef?: (ref) => void;
  getInputRef?: (ref) => void;
  formatter?: (val: string | number) => string;
  button?: ReactElement;
}
