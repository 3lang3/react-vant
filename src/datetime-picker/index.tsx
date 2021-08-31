import React from 'react';
import classnames from 'classnames';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

import { DateTimePickerProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('datetime-picker');

const DateTimePicker: React.FC<DateTimePickerProps> = (props) => {
  const isTimePicker = props.mode === 'time';
  const Component = isTimePicker ? TimePicker : DatePicker;

  return <Component className={classnames(bem())} {...props} />;
};

export default DateTimePicker;
export { DateTimePicker };
export type { DateTimePickerProps } from './PropsType';
