/* eslint-disable no-plusplus */
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import cls from 'clsx';
import { CalendarDayItem, CalendarDayType, CalendarMonthProps } from './PropsType';
import { addUnit, setScrollTop } from '../utils';
import { compareDay, formatMonthTitle, getNextDay, getPrevDay } from './utils';
import { getMonthEndDay } from '../datetime-picker/utils';
import CalendarDay from './CalendarDay';
import { getRect } from '../hooks/use-rect';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CalenderMonth = forwardRef<unknown, CalendarMonthProps>((props, ref) => {
  const [visible, setVisible] = useState();
  const daysRef = useRef<HTMLDivElement>();
  const [monthRef, setMonthRef] = useState<HTMLDivElement>();
  const height = useRef<number>(0);

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('calendar', prefixCls);

  useEffect(() => {
    if (monthRef) {
      height.current = getRect(monthRef).height;
    }
  }, [monthRef]);

  const title = useMemo(() => {
    const formatterFn = props.formatMonthTitle || formatMonthTitle;
    return formatterFn(props.date);
  }, [props.date]);
  const rowHeight = useMemo(() => addUnit(props.rowHeight), [props.rowHeight]);
  const offset = useMemo(() => {
    const realDay = props.date.getDay();

    if (props.firstDayOfWeek) {
      return (realDay + 7 - props.firstDayOfWeek) % 7;
    }
    return realDay;
  }, [props.date, props.firstDayOfWeek]);

  const totalDay = useMemo(
    () => getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1),
    [props.date],
  );

  const shouldRender = useMemo(() => visible || !props.lazyRender, [visible]);

  const getTitle = () => title;

  const scrollIntoView = (body: Element) => {
    const el = props.showSubtitle ? daysRef.current : monthRef;

    const scrollTop =
      el!.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;

    setScrollTop(body, scrollTop);
  };

  const getMultipleDayType = (day: Date) => {
    const isSelected = (date: Date) =>
      (props.currentDate as Date[]).some((item) => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return 'multiple-middle';
      }
      if (prevSelected) {
        return 'end';
      }
      if (nextSelected) {
        return 'start';
      }
      return 'multiple-selected';
    }

    return '';
  };

  const getRangeDayType = (day: Date) => {
    const [startDay, endDay] = props.currentDate as Date[];

    if (!startDay) {
      return '';
    }

    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? 'start' : '';
    }

    const compareToEnd = compareDay(day, endDay);

    if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return 'start-end';
    }
    if (compareToStart === 0) {
      return 'start';
    }
    if (compareToEnd === 0) {
      return 'end';
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle';
    }

    return '';
  };

  const getDayType = (day: Date): CalendarDayType => {
    const { type, minDate, maxDate, currentDate } = props;

    if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
      return 'disabled';
    }

    if (currentDate === null) {
      return '';
    }

    if (Array.isArray(currentDate)) {
      if (type === 'multiple') {
        return getMultipleDayType(day);
      }
      if (type === 'range') {
        return getRangeDayType(day);
      }
    } else if (type === 'single') {
      return compareDay(day, currentDate as Date) === 0 ? 'selected' : '';
    }

    return '';
  };

  const getBottomInfo = (dayType: CalendarDayType) => {
    if (props.type === 'range') {
      if (dayType === 'start') {
        return '开始';
      }
      if (dayType === 'end') {
        return '结束';
      }
      if (dayType === 'start-end') {
        return '开始/结束';
      }
    }
    return null;
  };

  const renderTitle = () => {
    if (props.showMonthTitle) {
      return <div className={cls(bem('month-title'))}>{title}</div>;
    }
    return null;
  };

  const renderMark = () => {
    if (props.showMark && shouldRender) {
      return <div className={cls(bem('month-mark'))}>{props.date.getMonth() + 1}</div>;
    }
    return null;
  };

  const placeholders = useMemo<CalendarDayItem[]>(() => {
    const count = Math.ceil((totalDay + offset) / 7);
    return Array(count).fill({ type: 'placeholder' });
  }, [totalDay, offset]);

  const days = useMemo(() => {
    const internalDays: CalendarDayItem[] = [];
    const year = props.date.getFullYear();
    const month = props.date.getMonth();

    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const type = getDayType(date);

      let config: CalendarDayItem = {
        date,
        type,
        text: day,
        bottomInfo: getBottomInfo(type),
      };

      if (props.formatter) {
        config = props.formatter(config);
      }

      internalDays.push(config);
    }

    return internalDays;
  }, [getDayType, props.date, props.formatter]);

  const renderDay = (item: CalendarDayItem, index: number) => (
    <CalendarDay
      key={index}
      item={item}
      index={index}
      color={props.color}
      offset={offset}
      rowHeight={rowHeight}
      onClick={props.onClick}
      topInfoRender={props.topInfoRender}
      bottomInfoRender={props.bottomInfoRender}
    />
  );

  const renderDays = () => (
    <div ref={daysRef} role="grid" className={cls(bem('days'))}>
      {renderMark()}
      {(shouldRender ? days : placeholders).map(renderDay)}
    </div>
  );

  useImperativeHandle(ref, () => ({
    getTitle,
    getHeight: () => height.current,
    setVisible,
    scrollIntoView,
  }));

  return (
    <div className={cls(bem('month'))} ref={setMonthRef}>
      {renderTitle()}
      {renderDays()}
    </div>
  );
});

export default CalenderMonth;
