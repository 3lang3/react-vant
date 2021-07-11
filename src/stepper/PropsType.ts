import { FormEvent } from 'react';
import { BaseTypeProps } from '../utils';

export interface StepperProps extends BaseTypeProps {
  theme?: string;
  integer?: boolean;
  disabled?: boolean;
  allowEmpty?: boolean;
  value?: number | string;
  inputWidth?: number | string;
  buttonSize?: number | string;
  placeholder?: string;
  disablePlus?: boolean;
  disableMinus?: boolean;
  disableInput?: boolean;
  beforeChange?: Function;
  decimalLength?: number | string;
  name?: number | string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  defaultValue?: number | string;
  showPlus?: boolean;
  showMinus?: boolean;
  showInput?: boolean;
  longPress?: boolean;
  asyncChange?: boolean;
  onChange?: (val: string | number) => void;
  onPlus?: () => void;
  onMinus?: () => void;
  onFocus?: (event: FormEvent) => void;
  onBlur?: (event: FormEvent) => void;
  onOverlimit?: () => void;
}
