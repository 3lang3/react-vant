import { BaseTypeProps } from '../utils';
import { CheckerProps } from '../checkbox/PropsType';

type RadioValueType = number | string;

export interface RadioGroupProps<T = RadioValueType> extends BaseTypeProps {
  disabled?: boolean;
  iconSize?: number | string;
  direction?: string;
  checkedColor?: string;
  value?: T;
  defaultValue?: T;
  asyncChange?: boolean;
  onChange?: (name: T) => void;
}

export interface RadioProps<T = RadioValueType> extends CheckerProps<RadioGroupProps<T>> {
  value?: T;
}
