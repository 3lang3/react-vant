import type { MouseEvent } from 'react';
import { BaseTypeProps } from '../utils';

type Shape = 'round' | 'square';

export interface CheckBoxGroupProps extends BaseTypeProps {
  max?: number | string;
  value?: any[];
  defaultValue?: any[];
  disabled?: boolean;
  iconSize?: number | string;
  iconRender?: ({ checked, disabled }: { checked: boolean; disabled: boolean }) => React.ReactNode;
  direction?: string;
  checkedColor?: string;
  asyncChange?: string;
  initChecked?: (string | number)[];
  onChange?: (name: (string | number)[]) => void;
}

export interface CheckerProps<T> extends BaseTypeProps {
  /** 标识符	 */
  name?: number | string;
  /**  是否禁用复选框	 */
  disabled?: boolean;
  /** 图标大小，默认单位为 px	 */
  iconSize?: number | string;
  /** 自定义图标	 */
  iconRender?: ({ checked, disabled }: { checked: boolean; disabled: boolean }) => React.ReactNode;
  /** 所有复选框的选中状态颜色	 */
  checkedColor?: string;
  /** 文本位置，可选值为 left	 */
  labelPosition?: string;
  /** 是否禁用复选框文本点击	 */
  labelDisabled?: boolean;
  /** 形状，可选值为 square	 */
  shape?: Shape;
  role?: string;
  /** @private  */
  bem?: Function;
  /** @private  */
  parent?: { props: T };
  /**
   * 是否与复选框组绑定
   * @default true
   */
  bindGroup?: boolean;
  /** 勾选状态 */
  checked?: boolean;
  /** 默认勾选状态 */
  defaultChecked?: boolean;
  /** 是否开启异步更新 */
  asyncChange?: boolean;
  /** 切换选择状态时触发 */
  onToggle?: () => void;
  /** 点击时触发 */
  onClick?: (event: MouseEvent) => void;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (value: boolean) => void;
}

export type CheckboxProps = CheckerProps<CheckBoxGroupProps>;
