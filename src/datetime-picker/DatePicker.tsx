import React, { useEffect, useMemo, useRef, useState } from 'react';

import Picker from '../picker';

import { DatePickerProps } from './PropsType';
import { getMonthEndDay, getTrueValue, getDaysBetweenDate, format, times } from './utils';
import { doubleRaf } from '../utils/raf';
import { isDate } from '../utils/validate/date';
import { padZero } from '../utils';

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const formatValue = (value) => {
    if (!isDate(value)) {
      value = props.minDate;
    }

    value = Math.max(value, props.minDate.getTime());
    value = Math.min(value, props.maxDate.getTime());

    return new Date(value);
  };

  const picker = useRef(null);
  const [currentDate, setCurrentDate] = useState(formatValue(props.value));

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

    switch (props.mode) {
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
      case 'weektime':
        result = [
          {
            type: 'week',
            range: [],
          },
        ].concat(result.slice(3));
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
        });

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

    doubleRaf(() => {
      picker.current.setValues(values);
    });
  };

  const updateInnerValue = () => {
    const { mode } = props;
    const indexes = picker.current.getIndexes();

    const getValue = (type: 'year' | 'month' | 'day' | 'week' | 'hour' | 'minute') => {
      let index = 0;
      originColumns.forEach((column, columnIndex) => {
        if (type === column.type) {
          index = columnIndex;
        }
      });
      const { values } = originColumns[index];
      if (type === 'week') {
        return (values[indexes[index]] as { date: Date }).date;
      }
      return getTrueValue(values[indexes[index]] as string);
    };

    let year = null;
    let month = null;
    let day = null;
    if (mode === 'month-day') {
      year = currentDate.getFullYear();
      month = getValue('month');
      day = getValue('day');
    } else if (mode === 'weektime') {
      const date = getValue('week');

      year = new Date(date).getFullYear();
      month = new Date(date).getMonth() + 1;
      day = new Date(date).getDate();
    } else {
      year = getValue('year');
      month = getValue('month');
      day = mode === 'year-month' ? 1 : getValue('day');
    }

    const maxDay = getMonthEndDay(year, month);
    day = day > maxDay ? maxDay : day;

    let hour = 0;
    let minute = 0;

    if (mode === 'datehour') {
      hour = getValue('hour') as number;
    }

    if (mode === 'datetime') {
      hour = getValue('hour') as number;
      minute = getValue('minute') as number;
    }

    if (mode === 'weektime') {
      hour = getValue('hour') as number;
      minute = getValue('minute') as number;
    }

    const value = new Date(year, month - 1, day, hour, minute);
    setCurrentDate(formatValue(value));

    if (props.onChange) {
      props.onChange(formatValue(value));
    }
  };

  const onChange = () => {
    updateInnerValue();
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

  return (
    <Picker {...props} ref={picker} columns={columns} onChange={onChange} onConfirm={onConfirm} />
  );
};

const currentYear = new Date().getFullYear();

DatePicker.defaultProps = {
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  formatter: (type: string, value: unknown) => value,
};

export default DatePicker;
