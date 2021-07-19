import React from 'react';
import classnames from 'classnames';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

import { DatePickerProps, TimePickerProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('datetime-picker');

const DateTimePicker: React.FC<DatePickerProps & TimePickerProps> = (props) => {
  const isTimePicker = props.mode === 'time';
  const Component = isTimePicker ? TimePicker : DatePicker;

  return <Component className={classnames(bem())} {...props} />;
};

export default DateTimePicker;
