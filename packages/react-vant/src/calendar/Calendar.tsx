/* eslint-disable no-plusplus */
import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import cls from 'clsx';
import { CalendarDayItem, CalendarInstance, CalendarProps } from './PropsType';
import { getScrollTop, pick } from '../utils';
import {
  calcDateNum,
  cloneDate,
  cloneDates,
  compareDay,
  compareMonth,
  getDayByOffset,
  getNextDay,
  getPrevDay,
  getToday,
} from './utils';
import useRefs from '../hooks/use-refs';
import { raf } from '../utils/raf';
import { getRect } from '../hooks/use-rect';
import Toast from '../toast';
import CalendarMonth from './CalendarMonth';
import Button from '../button';
import CalendarHeader from './CalendarHeader';
import Popup from '../popup';
import useSetState from '../hooks/use-set-state';
import useUpdateEffect from '../hooks/use-update-effect';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Calendar = forwardRef<CalendarInstance, CalendarProps>(
  ({ className, style, ...props }, ref) => {
    const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
    const [bem] = createNamespace('calendar', prefixCls);

    const limitDateRange = (date: Date, minDate = props.minDate, maxDate = props.maxDate) => {
      if (compareDay(date, minDate) === -1) {
        return minDate;
      }
      if (compareDay(date, maxDate) === 1) {
        return maxDate;
      }
      return date;
    };

    const getInitialDate = (defaultDate = props.defaultDate) => {
      const { type, minDate, maxDate } = props;

      if (defaultDate === null) {
        return defaultDate;
      }

      const now = getToday();

      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }
        const start = limitDateRange(defaultDate[0] || now, minDate, getPrevDay(maxDate));
        const end = limitDateRange(defaultDate[1] || now, getNextDay(minDate));
        return [start, end];
      }

      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map((date) => limitDateRange(date));
        }
        return [limitDateRange(now)];
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }
      return limitDateRange(defaultDate);
    };

    const bodyRef = useRef<HTMLDivElement>();
    const bodyHeightRef = useRef<number>(0);

    const [state, updateState] = useSetState({
      subtitle: '',
      currentDate: getInitialDate(),
    });

    const [monthRefs, setMonthRefs] = useRefs();

    const dayOffset = useMemo(
      () => (props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0),
      [props.firstDayOfWeek, props.firstDayOfWeek],
    );

    const months = useMemo(() => {
      const internalMonths = [];
      const cursor = new Date(props.minDate);

      cursor.setDate(1);

      do {
        internalMonths.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, props.maxDate) !== 1);

      return internalMonths;
    }, [props.minDate, props.maxDate]);

    const buttonDisabled = useMemo(() => {
      const { currentDate } = state;

      if (currentDate) {
        if (props.type === 'range') {
          return !(currentDate as Date[])[0] || !(currentDate as Date[])[1];
        }
        if (props.type === 'multiple') {
          return !(currentDate as Date[]).length;
        }
      }

      return !currentDate;
    }, [props.type, state.currentDate]);

    // calculate the position of the elements
    // and find the elements that needs to be rendered
    const onScroll = () => {
      const top = getScrollTop(bodyRef.current!);
      const bottom = top + bodyHeightRef.current;

      const heights = months.map((item, index) => monthRefs[index].getHeight());
      const heightSum = heights.reduce((a, b) => a + b, 0);

      // iOS scroll bounce may exceed the range
      if (bottom > heightSum && top > 0) {
        return;
      }

      let height = 0;
      let currentMonth;
      const visibleRange = [-1, -1];

      for (let i = 0; i < months.length; i++) {
        const month = monthRefs[i];
        const visible = height <= bottom && height + heights[i] >= top;

        if (visible) {
          visibleRange[1] = i;

          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }

          if (!monthRefs[i].showed) {
            monthRefs[i].showed = true;
            props.onMonthShow?.({
              date: month.date,
              title: month.getTitle(),
            });
          }
        }

        height += heights[i];
      }

      months.forEach((_, index) => {
        const visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs[index].setVisible(visible);
      });

      /* istanbul ignore else */
      if (currentMonth) {
        updateState({ subtitle: currentMonth.getTitle() });
      }
    };

    const scrollToDate = (targetDate: Date) => {
      raf(() => {
        months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            if (bodyRef.current) {
              monthRefs[index].scrollIntoView(bodyRef.current);
            }
            return true;
          }

          return false;
        });

        onScroll();
      });
    };

    // scroll to current month
    const scrollIntoView = () => {
      if (props.poppable && !props.visible) {
        return;
      }

      const { currentDate } = state;
      if (currentDate) {
        const targetDate = props.type === 'single' ? currentDate : (currentDate as Date[])[0];
        scrollToDate(targetDate);
      } else {
        raf(onScroll);
      }
    };

    const init = () => {
      if (props.poppable && !props.visible) {
        return;
      }
      raf(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        bodyHeightRef.current = Math.floor(getRect(bodyRef.current).height);
        scrollIntoView();
      });
    };

    const reset = (date = getInitialDate()) => {
      updateState({ currentDate: date });
      scrollIntoView();
    };

    const checkRange = (date: [Date, Date]) => {
      const { maxRange, rangePrompt, showRangePrompt } = props;

      if (maxRange && calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          Toast.info(rangePrompt || `选择天数不能超过 ${maxRange} 天`);
        }
        props.onOverRange?.();
        return false;
      }

      return true;
    };

    const onConfirm = () => {
      props.onConfirm?.(cloneDates(state.currentDate));
    };

    const select = (date: Date | Date[], complete?: boolean) => {
      const setCurrentDate = (current: Date | Date[]) => {
        state.currentDate = current;
        updateState({ currentDate: current });
        props.onSelect?.(cloneDates(state.currentDate));
      };

      if (complete && props.type === 'range') {
        const valid = checkRange(date as [Date, Date]);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (props.showConfirm) {
            setCurrentDate([
              (date as Date[])[0],
              getDayByOffset((date as Date[])[0], +props.maxRange - 1),
            ]);
          } else {
            setCurrentDate(date);
          }
          return;
        }
      }

      setCurrentDate(date);

      if (complete && !props.showConfirm) {
        onConfirm();
      }
    };

    const onClickDay = (item: CalendarDayItem) => {
      if (props.readonly || !item.date) {
        return;
      }

      const { date } = item;
      const { type } = props;
      const { currentDate } = state;

      if (type === 'range') {
        if (!currentDate) {
          select([date]);
          return;
        }

        const [startDay, endDay] = currentDate;

        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            select([startDay, date], true);
          } else if (compareToStart === -1) {
            select([date]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date]);
        }
      } else if (type === 'multiple') {
        if (!currentDate) {
          select([date]);
          return;
        }

        let selectedIndex;
        const selected = state.currentDate.some((dateItem: Date, index: number) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });

        if (selected) {
          const [unselectedDate] = currentDate.splice(selectedIndex, 1);
          props.onUnselect?.(cloneDate(unselectedDate));
        } else if (props.maxRange && currentDate.length >= props.maxRange) {
          Toast(props.rangePrompt || `选择天数不能超过 ${props.maxRange} 天`);
        } else {
          select([...currentDate, date]);
        }
      } else {
        select(date, true);
      }
    };

    const renderMonth = (date: Date, index: number) => {
      const showMonthTitle = index !== 0 || !props.showSubtitle;
      return (
        <CalendarMonth
          key={index}
          ref={setMonthRefs(index)}
          date={date}
          currentDate={state.currentDate}
          showMonthTitle={showMonthTitle}
          firstDayOfWeek={dayOffset}
          {...pick(props, [
            'type',
            'color',
            'minDate',
            'maxDate',
            'showMark',
            'formatter',
            'rowHeight',
            'showSubtitle',
            'lazyRender',
            'allowSameDay',
            'topInfoRender',
            'bottomInfoRender',
            'formatMonthTitle',
          ])}
          onClick={onClickDay}
        />
      );
    };

    const renderFooterButton = () => {
      if (props.footer) {
        return props.footer;
      }

      if (props.showConfirm) {
        const text = buttonDisabled ? props.confirmDisabledText : props.confirmText;

        return (
          <Button
            round
            block
            type="danger"
            color={props.color}
            className={cls(bem('confirm'))}
            disabled={buttonDisabled}
            nativeType="button"
            onClick={onConfirm}
          >
            {text || '确定'}
          </Button>
        );
      }
      return null;
    };

    const renderFooter = () => (
      <div className={cls(bem('footer'), { 'rv-safe-area-bottom': props.safeAreaInsetBottom })}>
        {renderFooterButton()}
      </div>
    );

    const renderCalendar = () => (
      <div className={cls(className, bem())} style={style}>
        <CalendarHeader
          weekdays={props.weekdays}
          title={props.title}
          subtitle={props.subtitle || state.subtitle}
          showTitle={props.showTitle}
          showSubtitle={props.showSubtitle}
          firstDayOfWeek={dayOffset}
          onClick-subtitle={(event) => {
            props.onClickSubtitle?.(event);
          }}
        />
        <div ref={bodyRef} className={cls(bem('body'))} onScroll={onScroll}>
          {months.map(renderMonth)}
        </div>
        {renderFooter()}
      </div>
    );

    useEffect(() => {
      init();
    }, [props.visible]);

    useUpdateEffect(() => {
      reset(getInitialDate(state.currentDate));
    }, [props.type, props.minDate, props.maxDate]);

    useUpdateEffect(() => {
      updateState({ currentDate: props.defaultDate });
      scrollIntoView();
    }, [props.defaultDate]);

    useImperativeHandle(ref, () => ({
      reset,
      scrollToDate,
    }));

    if (props.poppable) {
      return (
        <Popup
          visible={props.visible}
          className={cls(bem('popup'))}
          round={props.round}
          position={props.position}
          closeable={props.showTitle || props.showSubtitle}
          closeOnPopstate={props.closeOnPopstate}
          closeOnClickOverlay={props.closeOnClickOverlay}
          onClose={props.onClose}
          onClosed={props.onClosed}
        >
          {renderCalendar()}
        </Popup>
      );
    }

    return renderCalendar();
  },
);

Calendar.defaultProps = {
  round: true,
  poppable: true,
  showMark: true,
  showTitle: true,
  showConfirm: true,
  showSubtitle: true,
  lazyRender: true,
  closeOnPopstate: true,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: true,
  type: 'single',
  position: 'bottom',
  maxRange: null,
  minDate: getToday(),
  maxDate: (() => {
    const now = getToday();
    return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
  })(),
  firstDayOfWeek: 0,
  showRangePrompt: true,
};

export default Calendar;
