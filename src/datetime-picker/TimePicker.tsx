import React, { useEffect, useMemo, useRef, useState } from 'react';

import Picker from '../picker';

import { TimePickerProps } from './PropsType';
import { times } from './utils';

import { range, padZero } from '../utils';

const TimePicker: React.FC<TimePickerProps> = (props) => {
  const formatValue = (value) => {
    const { minHour, maxHour, maxMinute, minMinute } = props;

    if (!value) {
      value = `${padZero(minHour)}:${padZero(minMinute)}`;
    }

    let [hour, minute] = value.split(':');
    hour = padZero(range(hour, minHour as number, maxHour as number));
    minute = padZero(range(minute, minMinute as number, maxMinute as number));

    return `${hour}:${minute}`;
  };

  const picker = useRef(null);
  const [currentDate, setCurrentDate] = useState(formatValue(props.value));

  const ranges = useMemo(
    () => [
      {
        type: 'hour',
        range: [+props.minHour, +props.maxHour],
      },
      {
        type: 'minute',
        range: [+props.minMinute, +props.maxMinute],
      },
    ],
    [props.minHour, props.maxHour, props.minMinute, props.maxMinute],
  );

  const originColumns = useMemo(
    () =>
      ranges.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => padZero(rangeArr[0] + index));

        if (props.filter) {
          values = props.filter(type, values);
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
      originColumns.map((column) => ({
        values: column.values.map((value) => props.formatter(column.type, value)),
      })),
    [originColumns],
  );

  const updateColumnValue = () => {
    const pair = currentDate.split(':');
    const values = [props.formatter('hour', pair[0]), props.formatter('minute', pair[1])];

    setTimeout(() => {
      picker.current.setValues(values);
    }, 0);
  };

  const updateInnerValue = () => {
    const [hourIndex, minuteIndex] = picker.current.getIndexes();
    const [hourColumn, minuteColumn] = originColumns;

    const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
    const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

    setCurrentDate(formatValue(`${hour}:${minute}`));
  };

  const onChange = () => {
    updateInnerValue();

    // nextTick(() => {
    //   nextTick(() => {
    //     emit('change', currentDate.value);
    //   });
    // });
  };

  useEffect(() => {
    updateColumnValue();
  }, [columns]);

  return (
    <Picker
      ref={picker}
      columns={columns}
      readonly={props.readonly}
      onChange={onChange}
      // onConfirm={onConfirm}
      // {...pick(props, Object.keys(pickerProps))}
    />
  );
};

TimePicker.defaultProps = {
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  formatter: (type: string, value: unknown) => value,
};

export default TimePicker;
