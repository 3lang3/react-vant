import React, { forwardRef } from 'react';
import classnames from 'classnames';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

import { DateTimePickerProps, DateTimePickerInstance } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('datetime-picker');

const DateTimePicker = forwardRef<DateTimePickerInstance, DateTimePickerProps>((props, ref) => {
  const isTimePicker = props.type === 'time';
  const Component = isTimePicker ? TimePicker : DatePicker;

  return <Component ref={ref} className={classnames(bem())} {...props} />;
});

export default DateTimePicker;
export { DateTimePicker };
export type { DateTimePickerProps } from './PropsType';
