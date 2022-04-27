import React from 'react';
import { DatetimePicker } from 'react-vant';

export default () => {
  return <DatetimePicker type="time" minHour="10" maxHour="20" value="12:00" />;
};
