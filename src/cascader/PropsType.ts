import React from 'react';
import { BaseTypeProps } from '../utils';

export type CascaderOption = {
  text?: string;
  value?: string | number;
  color?: string;
  disabled?: boolean;
  children?: CascaderOption[];
  className?: unknown;
  // for custom filed names
  [key: string]: any;
};

export type CascaderTab = {
  options: CascaderOption[];
  selectedOption: CascaderOption | null;
};

export type CascaderFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export interface CascaderProps extends BaseTypeProps {
  title?: React.ReactNode;
  closeable?: boolean;
  swipeable?: boolean;
  value?: number | string;
  fieldNames?: CascaderFieldNames;
  placeholder?: string;
  activeColor?: string;
  options?: CascaderOption[];
  optionRender?: ({
    option,
    selected,
  }: {
    option: CascaderOption;
    selected: boolean;
  }) => React.ReactNode;
  closeIcon?: string;
  onClose?: () => void;
  onChange?: ({ value, selectedOptions, tabIndex }) => void;
  onFinish?: ({ value, selectedOptions, tabIndex }) => void;
  onClickTab?: (tabIndex: number, title: string) => void;
}
