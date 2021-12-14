import React, { CSSProperties, useContext, useMemo } from 'react';
import cls from 'clsx';
import { CalendarDayProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CalenderDay: React.FC<CalendarDayProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('calendar', prefixCls);

  const style = useMemo(() => {
    const { item, index, color, offset, rowHeight } = props;
    const iternalStyle: CSSProperties = {
      height: rowHeight,
    };

    if (item.type === 'placeholder') {
      iternalStyle.width = '100%';
      return iternalStyle;
    }

    if (index === 0) {
      iternalStyle.marginLeft = `${(100 * offset) / 7}%`;
    }

    if (color) {
      switch (item.type) {
        case 'end':
        case 'start':
        case 'start-end':
        case 'multiple-middle':
        case 'multiple-selected':
          iternalStyle.background = color;
          break;
        case 'middle':
          iternalStyle.color = color;
          break;
        default:
          break;
      }
    }

    return iternalStyle;
  }, [props.item, props.index, props.color, props.offset, props.rowHeight]);

  const onClick = () => {
    if (props.item.type !== 'disabled') {
      props.onClick?.(props.item);
    }
  };

  const renderTopInfo = () => {
    const { topInfo } = props.item;

    if (topInfo || props.topInfoRender) {
      return (
        <div className={cls(bem('top-info'))}>
          {props.topInfoRender ? props.topInfoRender(props.item) : topInfo}
        </div>
      );
    }
    return null;
  };

  const renderBottomInfo = () => {
    const { bottomInfo } = props.item;

    if (bottomInfo || props.bottomInfoRender) {
      return (
        <div className={cls(bem('bottom-info'))}>
          {props.bottomInfoRender ? props.bottomInfoRender(props.item) : bottomInfo}
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    const { item, color, rowHeight } = props;
    const { type, text } = item;

    const Nodes = (
      <>
        {renderTopInfo()}
        {text}
        {renderBottomInfo()}
      </>
    );

    if (type === 'selected') {
      return (
        <div
          className={cls(bem('selected-day'))}
          style={{
            width: rowHeight,
            height: rowHeight,
            background: color,
          }}
        >
          {Nodes}
        </div>
      );
    }

    return Nodes;
  };

  const { type, className } = props.item;

  if (type === 'placeholder') {
    return <div className={cls(bem('day'))} style={style} />;
  }

  return (
    <div
      role="gridcell"
      style={style}
      className={cls(bem('day', type), className)}
      tabIndex={type === 'disabled' ? undefined : -1}
      onClick={onClick}
    >
      {renderContent()}
    </div>
  );
};

CalenderDay.defaultProps = {
  offset: 0,
};

export default CalenderDay;
