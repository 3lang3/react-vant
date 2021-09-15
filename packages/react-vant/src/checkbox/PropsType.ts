import type { MouseEvent } from 'react';
import React from 'react';
import { BaseTypeProps } from '../utils';

type Shape = 'round' | 'square';

export interface CheckboxGroupProps extends BaseTypeProps {
  /**
   * 最大可选数，0 为无限制
   * @default 0
   */
  max?: number | string;
  /** 所有选中项的标识符	 */
  value?: any[];
  /** 默认选中项 */
  defaultValue?: any[];
  /** 是否禁用所有复选框	 */
  disabled?: boolean;
  /** 所有复选框的图标大小，默认单位为 px	 */
  iconSize?: number | string;
  /** 自定义图标	 */
  iconRender?: ({ checked, disabled }: { checked: boolean; disabled: boolean }) => React.ReactNode;
  /** 排列方向，可选值为 horizontal	 */
  direction?: string;
  /** 所有复选框的选中状态颜色	 */
  checkedColor?: string;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (name: any[]) => void;
  children?: React.ReactNode;
}

type IconRenderParams = {
  /** 是否选中 */
  checked: boolean;
  /** 是否禁用 */
  disabled: boolean;
};

export interface CheckerProps<T> extends BaseTypeProps {
  /** 标识符	 */
  name?: number | string;
  /**  是否禁用复选框	 */
  disabled?: boolean;
  /** 图标大小，默认单位为 px	 */
  iconSize?: number | string;
  /** 自定义图标	 */
  iconRender?: (params: IconRenderParams) => React.ReactNode;
  /** 所有复选框的选中状态颜色	 */
  checkedColor?: string;
  /** 文本位置，可选值为 left	 */
  labelPosition?: string;
  /** 是否禁用复选框文本点击	 */
  labelDisabled?: boolean;
  /** 形状，可选值为 square	 */
  shape?: Shape;
  role?: string;
  /**
   * 是否与复选框组绑定
   * @default true
   */
  bindGroup?: boolean;
  /** 勾选状态 */
  checked?: boolean;
  /** 默认勾选状态 */
  defaultChecked?: boolean;
  /** 切换选择状态时触发 */
  onToggle?: () => void;
  /** 点击时触发 */
  onClick?: (event: MouseEvent) => void;
  /** 当绑定值变化时触发的事件	 */
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  /** @private  */
  bem?: Function;
  /** @private  */
  parent?: { props: T };
}

export type CheckboxProps = CheckerProps<CheckboxGroupProps>;

export type CheckboxInstance = {
  toggle: (newValue?: boolean) => void;
  /**
   * @private
   */
  props: CheckboxProps;
  /**
   * @private
   */
  checked: boolean;
};

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean;
      skipDisabled?: boolean;
    };

export type CheckboxGroupInstance = {
  toggleAll: (options?: CheckboxGroupToggleAllOptions) => void;
};
