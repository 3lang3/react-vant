import { BaseTypeProps } from '../utils';

export interface PasswordInputProps extends BaseTypeProps {
  // 默认值
  value?: string;
  // 输入框类型, ['number', 'text]
  type?: string;
  // 密码长度
  length?: number;
  // 自动聚焦
  autoFocus?: boolean;
  // 是否隐藏密码内容
  mask?: boolean;
  // 输入校验规则
  validator?: Function;
  // 高亮样式
  highlightClass?: string;
  // 密码change事件
  onChange?: Function;
  // 密码提交事件(位数满了自动提交)
  onSubmit: Function;
}
