import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());

  console.log(value);
  return (
    <DatetimePicker
      type="month-day"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
      onChange={setValue}
      formatter={(type: string, val: string) => {
        if (type === 'month') {
          return `${val}月`;
        }
        if (type === 'day') {
          return `${val}日`;
        }
        return val;
      }}
    />
  );
};
