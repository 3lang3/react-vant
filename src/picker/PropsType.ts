import React from 'react';
import { BaseTypeProps } from '../utils';

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerFieldNames = {
  text?: string;
  values?: string;
  children?: string;
};

export type PickerObjectOption = {
  text?: string | number;
  disabled?: boolean;
} & Record<string, {}>;

export type PickerOption = string | number | PickerObjectOption;

export type PickerObjectColumn = {
  values?: PickerOption[];
  children?: PickerColumn;
  className?: unknown;
  defaultIndex?: number;
} & Record<string, any>;

export type PickerColumn = PickerOption[] | PickerObjectColumn;

export type PickerExpose = {
  confirm: () => void;
  getValues: <T = PickerOption>() => T[];
  setValues: (values: string[]) => void;
  getIndexes: () => number[];
  setIndexes: (indexes: number[]) => void;
  getColumnIndex: (index: number) => number;
  setColumnIndex: (columnIndex: number, optionIndex: number) => void;
  getColumnValue: <T = PickerOption>(index: number) => T;
  setColumnValue: (index: number, value: string) => void;
  getColumnValues: <T = PickerOption>(index: number) => T[];
  setColumnValues: (index: number, options: PickerOption[]) => void;
};

export type PickerInstance = PickerExpose;
export interface Column {
  values?: string[];
  defaultIndex?: number;
  className?: string;
  children?: Column[];
  disabled?: boolean;
}

export interface PickerProps extends BaseTypeProps {
  title?: React.ReactNode;
  valueKey?: string;
  loading?: boolean;
  readonly?: boolean;
  cancelButtonText?: React.ReactNode;
  confirmButtonText?: React.ReactNode;
  showToolbar?: boolean;
  defaultIndex?: number;
  itemHeight?: number;
  visibleItemCount?: number;
  swipeDuration?: number | string;
  columnsFieldNames?: PickerFieldNames;
  columns?: PickerOption[] | PickerColumn[];
  toolbarPosition?: PickerToolbarPosition;
  toolbar?: React.ReactNode;
  columnsTop?: React.ReactNode;
  columnsBottom?: React.ReactNode;
  optionRender?: (option: string | object) => React.ReactNode;
  onChange?: (value?: number | string, index?: number) => void;
  onConfirm?: (value?: number | string, index?: number) => void;
  onCancel?: (value?: number | string, index?: number) => void;
}

export interface PickerColumnProps extends BaseTypeProps {
  index?: number;
  textKey: string;
  readonly?: boolean;
  itemHeight: number;
  defaultIndex?: number;
  swipeDuration?: number | string;
  visibleItemCount?: number | string;
  initialOptions?: PickerOption[];
  optionRender?: (option: string | object) => React.ReactNode;
  onChange?: (value?: number | string, index?: number) => void;
}
