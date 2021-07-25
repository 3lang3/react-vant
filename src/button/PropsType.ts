import { LoadingType } from '../loading/PropsType';
import { BaseTypeProps } from '../utils';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export interface ButtonProps extends BaseTypeProps {
  tag?: keyof HTMLElementTagNameMap | string;
  type?: ButtonType;
  size?: ButtonSize;
  text?: string;
  icon?: string;
  color?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  shadow?: boolean | 1 | 2 | 3;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  iconPrefix?: string;
  loadingSize?: string;
  loadingType?: LoadingType;
  loadingText?: string;
  onClick?: (e: Event) => void;
}
