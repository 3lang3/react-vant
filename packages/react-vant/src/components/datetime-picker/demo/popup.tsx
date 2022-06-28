import React, { useState } from 'react';
import { DatetimePicker, Field } from 'react-vant';

export default () => {
  const [value, setValue] = useState(new Date());
  console.log(value);
  return (
    <DatetimePicker
      popup={{
        round: true,
      }}
      type="date"
      title="请选择日期"
      onConfirm={setValue}
      minDate={new Date(2021, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      value={value}
    >
      {(v, p, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="日期"
            value={v.toDateString()}
            placeholder="选择选择日期"
            onClick={() => actions.open()}
          />
        );
      }}
    </DatetimePicker>
  );
};
