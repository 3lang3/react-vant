import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  const [value, setValue] = React.useState(new Date());

  console.log(value);
  return (
    <>
      <DatetimePicker
        title="选择年月日"
        type="date"
        minDate={new Date(2020, 0, 1)}
        maxDate={new Date(2025, 10, 1)}
        value={value}
        onChange={setValue}
      />
      <button onClick={() => setValue(new Date(2024, 10, 24))}>change</button>
    </>
  );
};
