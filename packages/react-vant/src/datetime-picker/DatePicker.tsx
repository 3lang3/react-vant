import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import Picker, { PickerInstance } from '../picker';

import { DatePickerProps, DatetimePickerColumnType, DateTimePickerInstance } from './PropsType';
import { getMonthEndDay, getTrueValue, getDaysBetweenDate, format, times } from './utils';
import { raf } from '../utils/raf';
import { isDate } from '../utils/validate/date';
import { padZero } from '../utils';
import { useUpdateEffect } from '../hooks';

const DatePicker = forwardRef<DateTimePickerInstance, DatePickerProps>((props, ref) => {
  const formatValue = (value) => {
    if (!isDate(value)) {
      value = props.minDate;
    }

    value = Math.max(value, props.minDate.getTime());
    value = Math.min(value, props.maxDate.getTime());

    return new Date(value);
  };

  const picker = useRef<PickerInstance>(null);
  const [currentDate, setCurrentDate] = useState(() => formatValue(props.value));
  const currentDateRef = useRef<Date>(undefined);

  currentDateRef.current = currentDate;

  const getBoundary = (type: 'max' | 'min', value: Date) => {
    const boundary = props[`${type}Date`];
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (type === 'max') {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }

    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
    };
  };

  const ranges = useMemo(() => {
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary('max', currentDate);
    const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary('min', currentDate);

    let result = [
      {
        type: 'year',
        range: [minYear, maxYear],
      },
      {
        type: 'month',
        range: [minMonth, maxMonth],
      },
      {
        type: 'day',
        range: [minDate, maxDate],
      },
      {
        type: 'hour',
        range: [minHour, maxHour],
      },
      {
        type: 'minute',
        range: [minMinute, maxMinute],
      },
    ];

    switch (props.type) {
      case 'date':
        result = result.slice(0, 3);
        break;
      case 'year-month':
        result = result.slice(0, 2);
        break;
      case 'month-day':
        result = result.slice(1, 3);
        break;
      case 'datehour':
        result = result.slice(0, 4);
        break;
      default:
        break;
    }

    if (props.columnsOrder) {
      const columnsOrder = props.columnsOrder.concat(result.map((column) => column.type));
      result.sort((a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type));
    }

    return result;
  }, [currentDate]);

  const originColumns = useMemo(
    () =>
      ranges.map(({ type, range: rangeArr }) => {
        if (type === 'week') {
          return {
            type,
            values: getDaysBetweenDate(props.minDate, props.maxDate),
          };
        }

        // 根据范围获取每列的值
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index: number) => {
          return padZero(rangeArr[0] + index);
        }) as string[];

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

  const updateColumnValue = () => {
    const { formatter } = props;

    const values = originColumns.map((column) => {
      switch (column.type) {
        case 'year':
          return formatter('year', `${currentDate.getFullYear()}`);
        case 'month':
          return formatter('month', padZero(currentDate.getMonth() + 1));
        case 'day':
          return formatter('day', padZero(currentDate.getDate()));
        case 'hour':
          return formatter('hour', padZero(currentDate.getHours()));
        case 'minute':
          return formatter('minute', padZero(currentDate.getMinutes()));
        case 'week':
          return format(currentDate);
        default:
          // no default
          return null;
      }
    });

    raf(() => {
      picker.current?.setValues(values);
    });
  };

  const updateInnerValue = () => {
    const { type } = props;
    const indexes = picker.current?.getIndexes();

    const getValue = (datetimePickerColumnType: DatetimePickerColumnType) => {
      let index = 0;
      originColumns.forEach((column, columnIndex) => {
        if (datetimePickerColumnType === column.type) {
          index = columnIndex;
        }
      });
      const { values } = originColumns[index];
      return getTrueValue(values[indexes[index]]);
    };

    let year = null;
    let month = null;
    let day = null;
    if (type === 'month-day') {
      year = (currentDate || props.minDate).getFullYear();
      month = getValue('month');
      day = getValue('day');
    } else {
      year = getValue('year');
      month = getValue('month');
      day = type === 'year-month' ? 1 : getValue('day');
    }

    const maxDay = getMonthEndDay(year, month);
    day = day > maxDay ? maxDay : day;

    let hour = 0;
    let minute = 0;

    if (type === 'datehour') {
      hour = +getValue('hour');
    }

    if (type === 'datetime') {
      hour = +getValue('hour');
      minute = +getValue('minute');
    }

    const value = new Date(year, month - 1, day, hour, minute);
    setCurrentDate(formatValue(value));
  };

  const onChange = () => {
    updateInnerValue();
    if (props.onChange) {
      props.onChange(currentDateRef.current);
    }
  };

  const onConfirm = () => {
    if (props.onConfirm) {
      props.onConfirm(currentDate);
    }
  };

  const columns = useMemo(() => {
    return originColumns.map((column) => ({
      values: column.values.map((value) => props.formatter(column.type, value)),
    }));
  }, [originColumns]);

  useEffect(() => {
    updateColumnValue();
  }, [columns]);

  useUpdateEffect(() => {
    updateInnerValue();
  }, [props.filter, props.maxDate]);

  useUpdateEffect(() => {
    setTimeout(updateInnerValue, 0);
  }, [props.minDate]);

  useUpdateEffect(() => {
    const value = formatValue(props.value);

    if (value && value.valueOf() !== currentDate?.valueOf()) {
      setCurrentDate(value);
    }
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    getPicker: () => picker.current,
  }));

  return (
    <Picker
      {...props}
      ref={picker}
      columns={columns}
      onChange={onChange}
      onConfirm={onConfirm}
      onCancel={props.onCancel}
    />
  );
});

const currentYear = new Date().getFullYear();

DatePicker.defaultProps = {
  type: 'datetime',
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  formatter: (type: string, value: string) => value,
} as const;

export default DatePicker;
