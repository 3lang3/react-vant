import { BaseTypeProps } from '../utils';

export type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';

export interface Column {
  values?: string[];
  defaultIndex?: number;
  className?: string;
  children?: Column[];
  disabled?: boolean;
}

export interface PickerProps extends BaseTypeProps {
  valueKey?: string;
  loading?: boolean;
  readonly?: boolean;
  columns?: Column[];
  showToolbar?: boolean;
  defaultIndex?: number;
  showSubmitBtn?: boolean;
  itemHeight?: number;
  visibleItemCount?: number;
  swipeDuration?: number | string;
  onChange?: (value?: number | string, index?: number) => void;
  onConfirm?: (value?: number | string, index?: number) => void;
}

export interface PickerColumnProps extends BaseTypeProps {
  index?: number;
  textKey?: string;
  readonly?: boolean;
  allowHtml?: boolean;
  className?: string;
  itemHeight?: number;
  defaultIndex?: number;
  swipeDuration?: number | string;
  visibleItemCount?: number | string;
  initialOptions?: [];
  onChange?: (value?: number | string, index?: number) => void;
}

export interface PickerRef {
  getValues: () => void;
  setValues: Function;
  getIndexes: () => void;
  setIndexes: Function;
  getColumnIndex: (index: number) => number;
  setColumnIndex: Function;
  getColumnValue: (index: number) => string | string[];
  setColumnValue: Function;
  getColumnValues: (index: number) => any;
  setColumnValues: Function;
}
