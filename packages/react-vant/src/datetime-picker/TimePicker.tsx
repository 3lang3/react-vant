import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import Picker, { PickerInstance } from '../picker';

import { DateTimePickerInstance, TimePickerProps } from './PropsType';
import { times } from './utils';

import { range, padZero } from '../utils';
import { useUpdateEffect } from '../hooks';

const TimePicker = forwardRef<DateTimePickerInstance, TimePickerProps>((props, ref) => {
  const formatValue = (value) => {
    const { minHour, maxHour, maxMinute, minMinute } = props;

    if (!value) {
      value = `${padZero(minHour)}:${padZero(minMinute)}`;
    }

    let [hour, minute] = value.split(':');
    hour = padZero(range(hour, +minHour, +maxHour));
    minute = padZero(range(minute, +minMinute, +maxMinute));

    return `${hour}:${minute}`;
  };

  const picker = useRef<PickerInstance>(null);
  const [currentDate, setCurrentDate] = useState(() => formatValue(props.value));
  const currentDateRef = useRef<string>();

  currentDateRef.current = currentDate;

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
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
          padZero(rangeArr[0] + index),
        ) as string[];

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
    const pair = currentDateRef.current.split(':');
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
    updateColumnValue();
  };

  const onConfirm = () => {
    if (props.onConfirm) props.onConfirm(currentDateRef.current);
  };
  const onCancel = () => {
    if (props.onCancel) props.onCancel();
  };

  const onChange = () => {
    updateInnerValue();
    if (props.onChange) {
      props.onChange(currentDateRef.current);
    }
  };

  useEffect(() => {
    updateColumnValue();
  }, [columns]);

  useUpdateEffect(() => {
    updateInnerValue();
  }, [props.filter, props.maxHour, props.minMinute, props.maxMinute]);

  useUpdateEffect(() => {
    setTimeout(updateInnerValue, 0);
  }, [props.minHour]);

  useUpdateEffect(() => {
    const value = formatValue(props.value);

    if (value !== currentDate) {
      setCurrentDate(value);
      updateColumnValue();
    }
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    getPicker: () => picker.current,
  }));

  return (
    <Picker
      ref={picker}
      columns={columns}
      readonly={props.readonly}
      onChange={onChange}
      onConfirm={onConfirm}
      onCancel={onCancel}
      title={props.title}
      loading={props.loading}
      showToolbar={props.showToolbar}
      cancelButtonText={props.cancelButtonText}
      confirmButtonText={props.confirmButtonText}
      itemHeight={props.itemHeight}
      visibleItemCount={props.visibleItemCount}
      swipeDuration={props.swipeDuration}
    />
  );
});

TimePicker.defaultProps = {
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  formatter: (type: string, value: string) => value,
};

export default TimePicker;
