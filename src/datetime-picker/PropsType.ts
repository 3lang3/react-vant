import { PickerInstance, PickerProps } from '../picker/PropsType';

export type DatetimePickerColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';

export type DatetimePickerType =
  | 'date'
  | 'time'
  | 'datetime'
  | 'datehour'
  | 'month-day'
  | 'year-month';

export type DatetimePickerExpose = {
  getPicker: () => PickerInstance;
};

export interface SharedProps extends Omit<PickerProps, 'onConfirm' | 'onChange' | 'columns'> {
  filter?: Function;
  value?: Date;
  columnsOrder?: string[];
  formatter?: Function;
  onConfirm?: (value: Date) => void;
  onChange?: (value: Date) => void;
}

export interface DatePickerProps extends SharedProps {
  type?: DatetimePickerType;
  minDate?: Date;
  maxDate?: Date;
}

export interface TimePickerProps extends SharedProps {
  minHour?: number | string;
  maxHour?: number | string;
  minMinute?: number | string;
  maxMinute?: number | string;
}

export type DateTimePickerProps = DatePickerProps & TimePickerProps;

export type DateTimePickerInstance = {
  getPicker: () => PickerInstance;
};
