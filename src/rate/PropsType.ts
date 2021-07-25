import { BaseTypeProps } from '../utils';

export interface RateProps extends BaseTypeProps {
  size: number | string;
  color: string;
  gutter:  number | string;
  readonly: boolean;
  disabled: boolean;
  allowHalf: boolean;
  voidColor: string;
  /** @default true */
  touchable?: boolean;
  iconPrefix: string;
  disabledColor: string;
  /** @default 0 */
  value?: number;
  onChange?: (v: number) => void;
  /**
   * @default 'star'
   * */
  icon?: string;
  /** @default 'star-o' */
  voidIcon: string;
  /** @default 5 */
  count: number | string;
}
