import { PickerProps } from '../picker/PropsType';

type Mode = 'date' | 'year-month' | 'month-day' | 'datehour' | 'datetime' | 'time' | 'weektime';

export interface SharedProps extends Omit<PickerProps, 'onConfirm' | 'onChange'> {
  filter?: Function;
  value?: Date;
  columnsOrder?: string[];
  formatter?: Function;
  onConfirm?: (value: Date) => void;
  onChange?: (value: Date) => void;
}

export interface DatePickerProps extends SharedProps {
  mode?: Mode;
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
