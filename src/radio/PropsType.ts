import { BaseTypeProps } from '../utils';
import { CheckerProps } from '../checkbox/PropsType';

export interface RadioGroupProps extends BaseTypeProps {
  disabled?: boolean;
  iconSize?: number | string;
  direction?: string;
  checkedColor?: string;
  value?: string | number;
  defaultValue?: string | number;
  asyncChange?: boolean;
  onChange?: (name: string | number) => void;
}

export interface RadioProps extends CheckerProps<RadioGroupProps> {
  value?: string | number;
}
