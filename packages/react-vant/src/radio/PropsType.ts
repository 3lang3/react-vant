import { BaseTypeProps } from '../utils';
import { CheckerProps } from '../checkbox/PropsType';

type RadioValueType = number | string;

export interface RadioGroupProps<T = RadioValueType> extends BaseTypeProps {
  /** 是否为禁用状态	 */
  disabled?: boolean;
  /** 图标大小，默认单位为px	 */
  iconSize?: number | string;
  /** 排列方向，可选值为horizontal	 */
  direction?: string;
  /** 选中状态颜色	 */
  checkedColor?: string;
  /** 当前值 */
  value?: T;
  /** 默认值 */
  defaultValue?: T;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (name: T) => void;
}

export interface RadioProps<T = RadioValueType> extends CheckerProps<RadioGroupProps<T>> {
  value?: T;
}
