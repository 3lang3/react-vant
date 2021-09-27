import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

import { DateTimePickerProps, DateTimePickerInstance } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const DateTimePicker = forwardRef<DateTimePickerInstance, DateTimePickerProps>((props, ref) => {
  const { prefixCls,  createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('datetime-picker', prefixCls);

  const isTimePicker = props.type === 'time';
  const Component = isTimePicker ? TimePicker : DatePicker;

  return <Component ref={ref} className={classnames(bem())} {...props} />;
});

export default DateTimePicker;
export { DateTimePicker };
export type { DateTimePickerProps } from './PropsType';
