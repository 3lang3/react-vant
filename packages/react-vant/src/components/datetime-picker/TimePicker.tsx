import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';

import Picker from '../picker';

import { DateTimePickerInstance, TimePickerProps } from './PropsType';
import { times } from './utils';

import { range, padZero } from '../utils';
import { useUpdateEffect } from '../hooks';

const TimePicker = forwardRef<DateTimePickerInstance, TimePickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    formatter,
    filter,
    minHour,
    maxHour,
    minMinute,
    maxMinute,
    ...pickerProps
  } = props;

  const formatValue = (value) => {
    if (!value) {
      value = `${padZero(minHour)}:${padZero(minMinute)}`;
    }

    let [hour, minute] = value.split(':');
    hour = padZero(range(hour, +minHour, +maxHour));
    minute = padZero(range(minute, +minMinute, +maxMinute));

    return `${hour}:${minute}`;
  };

  const picker = useRef<DateTimePickerInstance>(null);
  const [currentDate, setCurrentDate] = useState(() => formatValue(value || defaultValue));

  const ranges = useMemo(
    () => [
      {
        type: 'hour',
        range: [+minHour, +maxHour],
      },
      {
        type: 'minute',
        range: [+minMinute, +maxMinute],
      },
    ],
    [minHour, maxHour, minMinute, maxMinute],
  );

  const originColumns = useMemo(
    () =>
      ranges.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
          padZero(rangeArr[0] + index),
        ) as string[];

        if (filter) {
          values = filter(type, values);
        }

        return {
          type,
          values,
        };
      }),
    [ranges],
  );

  const columns = useMemo(
    () =>
      originColumns.map((column) => column.values.map((value) => formatter(column.type, value))),
    [originColumns],
  );

  const pickerValue = useMemo(() => {
    const pair = props.popup ? formatValue(props.value) : currentDate;
    const values = [formatter('hour', pair[0]), formatter('minute', pair[1])];

    return values;
  }, [props.value, currentDate, formatValue]);

  const onConfirm = () => {
    props.onConfirm?.(currentDate);
  };
  const onCancel = () => {
    props.onCancel?.();
  };

  const onChange = (val: string[]) => {
    const nextValue = formatValue(val.join(':'));
    setCurrentDate(nextValue);
    props.onChange?.(nextValue);
  };

  useUpdateEffect(() => {
    const nextValue = formatValue(currentDate);
    setCurrentDate(nextValue);
  }, [filter, minHour, maxHour, minMinute, maxMinute]);

  useUpdateEffect(() => {
    const nextValue = formatValue(value);

    if (nextValue !== currentDate) {
      setCurrentDate(nextValue);
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    ...picker.current,
  }));

  return (
    <Picker
      {...pickerProps}
      ref={picker}
      columns={columns}
      value={pickerValue}
      onChange={onChange}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      {(_, selectRows, actions) => props.children?.(value, selectRows, actions)}
    </Picker>
  );
});

TimePicker.defaultProps = {
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  placeholder: false,
  formatter: (type: string, value: string) => value,
};

export default TimePicker;
