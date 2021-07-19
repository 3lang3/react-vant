import { BaseTypeProps } from '../utils';

export interface SwitchProps extends BaseTypeProps {
  size?: number | string;
  loading?: boolean;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  activeValue?: any;
  inactiveValue?: any;
  onChange?: (val: any) => void;
}
