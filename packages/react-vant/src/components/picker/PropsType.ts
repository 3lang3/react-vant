import React from 'react';
import { SharedPopupProps } from '../popup/PropsType';
import { BaseTypeProps } from '../utils';

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerFieldNames = {
  text?: string;
  value?: string;
  values?: string;
  children?: string;
};

export type PickerObjectOption = {
  text?: string | number;
  disabled?: boolean;
} & Record<string, {}>;

export type PickerOption = string | number | PickerObjectOption;

export type PickerObjectColumn<T = PickerOption> = {
  /** 列中对应的备选值 */
  values?: T[];
  /** 级联选项 */
  children?: PickerColumn<T>;
  /** 为对应列添加额外的类名 */
  className?: unknown;
} & Record<string, any>;

export type PickerColumn<T> = T[] | PickerObjectColumn<T>;

export type PickerPopupActions = {
  open: () => void
  close: () => void
  toggle: () => void
}

export type PickerInstance = {
  /** 停止惯性滚动并触发 onConfirm 事件 */
  confirm: () => void;
  /** 获取所有列的选中option */
  getOptions: <T = PickerOption>() => T[];
  /** 获取所有列选中的值 */
  getValues: <T = PickerOption>(returnOption?: boolean) => T[];
  /** 设置所有列选中的值 */
  setValues: (values: string[]) => void;
  /** 获取所有列的索引 */
  getIndexes: () => number[];
  /** 设置所有列的索引 */
  setIndexes: (indexes: number[]) => void;
  /** 获取对应列选中项的索引 */
  getColumnIndex: (index: number) => number;
  /** 设置对应列选中项的索引 */
  setColumnIndex: (columnIndex: number, optionIndex: number) => void;
  /** 获取对应列的值 */
  getColumnValue: (index: number) => string;
  /** 设置对应列的值 */
  setColumnValue: (index: number, value: string) => void;
  /** 获取对应列的选项 */
  getColumnOptions: <T = PickerOption>(index: number) => T[];
  /** 设置对应列的选项 */
  setColumnOptions: (index: number, options: PickerOption[], columnIndex?: number) => void;
};

export interface Column {
  values?: string[];
  className?: string;
  children?: Column[];
  disabled?: boolean;
}

export interface PickerCommonProps<T> extends Omit<BaseTypeProps, 'children'> {
  popup?: boolean | SharedPopupProps;
  visible?: boolean;
  onClose?: () => void;
  /** 对象数组，配置每一列显示的数据 */
  columns?: T[] | PickerColumn<T>[];
  /** 自定义 columns 结构中的字段 */
  columnsFieldNames?: PickerFieldNames;
  /** 顶部栏标题 */
  title?: React.ReactNode;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 是否只读状态 */
  readOnly?: boolean;
  /**  确认按钮文字 */
  cancelButtonText?: React.ReactNode;
  /** 取消按钮文字 */
  confirmButtonText?: React.ReactNode;
  /**  是否显示顶部栏 */
  showToolbar?: boolean;
  /** 选项高度，支持 px vw vh rem 单位，默认 px */
  itemHeight?: number;
  /** 可见的选项个数 */
  visibleItemCount?: number;
  /** 快速滑动时惯性滚动的时长，单位 ms */
  swipeDuration?: number | string;
  /** 顶部栏位置，可选值为 bottom */
  toolbarPosition?: PickerToolbarPosition;
  /** 自定义整个顶部栏的内容 */
  toolbar?: React.ReactNode;
  /** 自定义选项上方内容 */
  columnsTop?: React.ReactNode;
  /** 自定义选项下方内容 */
  columnsBottom?: React.ReactNode;
  /** 自定义确认按钮内容 */
  optionRender?: (option: string | object) => React.ReactNode;
  children?: (val: string | string[], options: T | T[], actions: PickerPopupActions) => React.ReactNode;
}

export interface PickerSingleProps<T = PickerOption> extends PickerCommonProps<T> {
  /** 选中项 */
  value?: string;
  /** 默认选中项 */
  defaultValue?: string;
  /** 选项改变时触发 */
  onChange?: (value: string, option: T, index?: number) => void;
  /** 点击完成按钮时触发 */
  onConfirm?: (value: string, options: T, index: number) => void;
  /** 点击取消按钮时触发 */
  onCancel?: (value: string, index: number) => void;
}

export interface PickerMultipleProps<T = PickerOption> extends PickerCommonProps<T> {
  /** 选中项 */
  value?: string[];
  /** 默认选中项 */
  defaultValue?: string[];
  /** 选项改变时触发 */
  onChange?: (value: string[], options: T[], index?: number) => void;
  /** 点击完成按钮时触发 */
  onConfirm?: (value: string[], options: T[], index: number[]) => void;
  /** 点击取消按钮时触发 */
  onCancel?: (value: string[], index: number[]) => void;
}

export type PickerProps<T = PickerOption> = PickerSingleProps<T> | PickerMultipleProps<T>;
export interface PickerColumnProps extends BaseTypeProps {
  index?: number;
  textKey: string;
  valueKey?: string;
  readOnly?: boolean;
  itemHeight: number;
  defaultValue?: number;
  swipeDuration?: number | string;
  visibleItemCount?: number | string;
  options?: PickerOption[];
  optionRender?: (option: any) => React.ReactNode;
  onChange?: (value?: number, ingoreChange?: boolean) => void;
}
