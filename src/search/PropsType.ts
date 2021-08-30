import { FieldClearTrigger } from '../field/PropsType';
import { BaseTypeProps } from '../utils';

export interface SearchProps extends BaseTypeProps {
  value?: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  modelValue: string;
  actionText?: string;
  background?: string;
  showAction?: Boolean;
  clearTrigger?: FieldClearTrigger;
  shape?: string;
  clearable?: boolean;
  placeholder?: string;
  disabled?: boolean;
  maxlength?: number;

  onSearch?: (val: string | number) => void;
  onChange?: (val: string | number) => void;
  onCancel?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  // onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (val: string | number) => void;
  onBlur?: (val: string | number) => void;
  onKeypress?: (val: string | number) => void;
}
