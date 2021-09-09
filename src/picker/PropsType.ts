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
  /** 列中对应的备选值	 */
  values?: PickerOption[];
  /** 级联选项	 */
  children?: PickerColumn;
  /** 为对应列添加额外的类名	 */
  className?: unknown;
  /** 初始选中项的索引，默认为 0	 */
  defaultIndex?: number;
} & Record<string, any>;

export type PickerColumn = PickerOption[] | PickerObjectColumn;

export type PickerExpose = {
  /** 停止惯性滚动并触发 onConfirm 事件	 */
  confirm: () => void;
  /** 获取所有列选中的值	 */
  getValues: <T = PickerOption>() => T[];
  /** 设置所有列选中的值	 */
  setValues: (values: string[]) => void;
  /** 获取所有列选中值对应的索引	 */
  getIndexes: () => number[];
  /** 设置所有列选中值对应的索引	 */
  setIndexes: (indexes: number[]) => void;
  /** 获取对应列选中项的索引	 */
  getColumnIndex: (index: number) => number;
  /** 设置对应列选中项的索引	 */
  setColumnIndex: (columnIndex: number, optionIndex: number) => void;
  /** 获取对应列选中的值	 */
  getColumnValue: <T = PickerOption>(index: number) => T;
  /** 设置对应列选中的值	 */
  setColumnValue: (index: number, value: string) => void;
  /** 获取对应列中所有选项	 */
  getColumnValues: <T = PickerOption>(index: number) => T[];
  /** 设置对应列中所有选项	 */
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

export interface PickerCommonProps extends BaseTypeProps {
  /** 对象数组，配置每一列显示的数据	 */
  columns?: PickerOption[] | PickerColumn[];
  /** 自定义 columns 结构中的字段	 */
  columnsFieldNames?: PickerFieldNames;
  /** 顶部栏标题	 */
  title?: React.ReactNode;
  /** 是否显示加载状态	 */
  loading?: boolean;
  /** 是否只读状态 */
  readonly?: boolean;
  /**  确认按钮文字	 */
  cancelButtonText?: React.ReactNode;
  /** 取消按钮文字	 */
  confirmButtonText?: React.ReactNode;
  /**  是否显示顶部栏	 */
  showToolbar?: boolean;
  /** 单列选择时，默认选中项的索引	 */
  defaultIndex?: number;
  /** 选项高度，支持 px vw vh rem 单位，默认 px	 */
  itemHeight?: number;
  /** 可见的选项个数	 */
  visibleItemCount?: number;
  /** 快速滑动时惯性滚动的时长，单位 ms	 */
  swipeDuration?: number | string;
  /** 顶部栏位置，可选值为 bottom	 */
  toolbarPosition?: PickerToolbarPosition;
  /** 自定义整个顶部栏的内容	 */
  toolbar?: React.ReactNode;
  /** 自定义选项上方内容	 */
  columnsTop?: React.ReactNode;
  /** 自定义选项下方内容	 */
  columnsBottom?: React.ReactNode;
  /** 自定义确认按钮内容	 */
  optionRender?: (option: string | object) => React.ReactNode;
}

export interface PickerSingleProps extends PickerCommonProps {
  /** 选项改变时触发	 */
  onChange?: (value: number | string, index?: number) => void;
  /** 点击完成按钮时触发	 */
  onConfirm?: (value: number | string, index?: number) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: (value: number | string, index?: number) => void;
}

export interface PickerMultipleProps extends PickerCommonProps {
  /** 选项改变时触发	 */
  onChange?: (value: (number | string)[], index?: number) => void;
  /** 点击完成按钮时触发	 */
  onConfirm?: (value: (number | string)[], index?: number[]) => void;
  /** 点击取消按钮时触发	 */
  onCancel?: (value: (number | string)[], index?: number[]) => void;
}

export type PickerProps = PickerSingleProps | PickerMultipleProps;
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
