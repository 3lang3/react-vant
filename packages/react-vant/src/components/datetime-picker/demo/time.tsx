import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return <DatetimePicker onChange={(v) => console.log(v)} onConfirm={(v) => console.log(v)} type="time" minHour="10" maxHour="20" value="12:00" />;
};
