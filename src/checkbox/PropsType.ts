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
  name?: number | string;
  disabled?: boolean;
  iconSize?: number | string;
  iconRender?: ({ checked, disabled }: { checked: boolean; disabled: boolean }) => React.ReactNode;
  checkedColor?: string;
  labelPosition?: string;
  labelDisabled?: boolean;
  shape?: Shape;
  role?: string;
  bem?: Function;
  parent?: { props: T };
  bindGroup?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  asyncChange?: boolean;
  onToggle?: () => void;
  onClick?: (event: MouseEvent) => void;
  onChange?: (value: boolean) => void;
}

export type CheckboxProps = CheckerProps<CheckBoxGroupProps>;
