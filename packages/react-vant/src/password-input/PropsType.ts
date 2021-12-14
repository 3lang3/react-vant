import { BaseTypeProps } from '../utils';

export interface PasswordInputProps extends BaseTypeProps {
  /** 默认值 */
  value?: string;
  /** 输入框下方文字提示 */
  info?: React.ReactNode;
  /** 输入框下方错误提示 */
  errorInfo?: React.ReactNode;
  /** 输入框格子之间的间距，如 20px 2em，默认单位为px	 */
  gutter?: string | number;
  /**  输入框类型, ['number', 'text] */
  type?: string;
  /** 密码最大长度	 */
  length?: number;
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 是否隐藏密码内容 */
  mask?: boolean;
  /** 输入校验规则 */
  validator?: Function;
  /** 高亮样式 */
  highlightClass?: string;
  /** 密码change事件 */
  onChange?: (v: string) => void;
  /** 密码提交事件(位数满了自动提交) */
  onSubmit?: (v: string) => void;
  /** 输入框聚焦时触发 */
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

export type PasswordInputInstance = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
};
