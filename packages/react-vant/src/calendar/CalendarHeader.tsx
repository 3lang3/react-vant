import React, { useContext } from 'react';
import cls from 'clsx';
import { CalendarHeaderProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CalenderHeader: React.FC<CalendarHeaderProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('calendar', prefixCls);

  const renderTitle = () => {
    if (props.showTitle) {
      const text = props.title || '日期选择';
      return <div className={cls(bem('header-title'))}>{text}</div>;
    }
    return null;
  };

  const onClickSubtitle = (event) => {
    props.onClickSubtitle?.(event);
  };

  const renderSubtitle = () => {
    if (props.showSubtitle) {
      return (
        <div className={cls(bem('header-subtitle'))} onClick={onClickSubtitle}>
          {props.subtitle}
        </div>
      );
    }
    return null;
  };

  const renderWeekDays = () => {
    const { weekdays: customWeekdays, firstDayOfWeek } = props;
    const defaultWeekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekdays = customWeekdays
      ? defaultWeekdays.map((wk, i) => customWeekdays[i] || wk)
      : defaultWeekdays;
    const renderWeekDaysContent = [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek),
    ];

    return (
      <div className={cls(bem('weekdays'))}>
        {renderWeekDaysContent.map((text, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i} className={cls(bem('weekday'))}>
            {text}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cls(bem('header'))}>
      {renderTitle()}
      {renderSubtitle()}
      {renderWeekDays()}
    </div>
  );
};

export default CalenderHeader;
