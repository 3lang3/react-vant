import React, { useContext, useMemo } from 'react';
import classnames from 'classnames';
import { RateProps } from './PropsType';
import { addUnit, preventDefault } from '../utils';
import useTouch from '../hooks/use-touch';
import useRefs from '../hooks/use-refs';
import Icon from '../icon';
import useMergedState from '../hooks/use-merged-state';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

type RateStatus = 'full' | 'half' | 'void';

type RateListItem = {
  value: number;
  status: RateStatus;
};

function getRateStatus(
  value: number,
  index: number,
  allowHalf: boolean,
  readonly: boolean,
): RateListItem {
  if (value >= index) {
    return { status: 'full', value: 1 };
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return { status: 'half', value: 0.5 };
  }

  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10;
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal,
    };
  }

  return { status: 'void', value: 0 };
}

const Rate: React.FC<RateProps> = ({ count, touchable, onChange, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('rate', prefixCls);
  const [value, setValue] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });
  const touch = useTouch();
  const [itemRefs, setItemRefs] = useRefs();

  const untouchable = () => props.readonly || props.disabled || !touchable;

  const list = useMemo<RateListItem[]>(
    () =>
      Array(count)
        .fill('')
        .map((_, i) => getRateStatus(value, i + 1, props.allowHalf, props.readonly)),
    [value, count],
  );

  let ranges: Array<{ left: number; score: number }>;

  const updateRanges = () => {
    const rects = itemRefs.map((item) => item.getBoundingClientRect());

    ranges = [];
    rects.forEach((rect, index) => {
      if (props.allowHalf) {
        ranges.push(
          { score: index + 0.5, left: rect.left },
          { score: index + 1, left: rect.left + rect.width / 2 },
        );
      } else {
        ranges.push({ score: index + 1, left: rect.left });
      }
    });
  };

  const getScoreByPosition = (x: number) => {
    // eslint-disable-next-line no-plusplus
    for (let i = ranges.length - 1; i > 0; i--) {
      if (x > ranges[i].left) {
        return ranges[i].score;
      }
    }
    return props.allowHalf ? 0.5 : 1;
  };

  const select = (index: number) => {
    if (!props.disabled && !props.readonly && index !== value) {
      setValue(index);
      onChange?.(index);
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    if (untouchable()) {
      return;
    }

    touch.start(event.nativeEvent);
    updateRanges();
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (untouchable()) {
      return;
    }

    touch.move(event.nativeEvent);

    if (touch.isHorizontal()) {
      const { clientX } = event.touches[0];
      preventDefault(event);
      select(getScoreByPosition(clientX));
    }
  };

  const renderStar = (item: RateListItem, index: number) => {
    const {
      icon,
      size,
      color,
      gutter,
      voidIcon,
      disabled,
      voidColor,
      allowHalf,
      iconPrefix,
      disabledColor,
    } = props;
    const score = index + 1;
    const isFull = item.status === 'full';
    const isVoid = item.status === 'void';

    const renderHalf = allowHalf && item.value > 0 && item.value < 1;

    let style;
    if (gutter && score !== +count) {
      style = {
        paddingRight: addUnit(gutter),
      };
    }

    const onClickItem = (event: React.MouseEvent) => {
      updateRanges();
      select(allowHalf ? getScoreByPosition(event.clientX) : score);
    };

    return (
      <div
        key={index}
        ref={setItemRefs(index)}
        role="radio"
        style={style}
        className={classnames(bem('item'))}
        tabIndex={0}
        aria-setsize={parseInt(count?.toString(), 10)}
        aria-posinset={score}
        aria-checked={!isVoid}
        onClick={onClickItem}
      >
        <Icon
          size={size}
          name={isFull ? icon : voidIcon}
          className={classnames(bem('icon', { disabled, full: isFull }))}
          // eslint-disable-next-line no-nested-ternary
          color={disabled ? disabledColor : isFull ? color : voidColor}
          classPrefix={iconPrefix}
        />
        {renderHalf && (
          <Icon
            size={size}
            style={{ width: `${item.value}em` }}
            name={isVoid ? voidIcon : icon}
            className={classnames(bem('icon', ['half', { disabled, full: !isVoid }]))}
            // eslint-disable-next-line no-nested-ternary
            color={disabled ? disabledColor : isVoid ? voidColor : color}
            classPrefix={iconPrefix}
          />
        )}
      </div>
    );
  };

  return (
    <div
      role="radiogroup"
      className={classnames(
        bem({
          readonly: props.readonly,
          disabled: props.disabled,
        }),
      )}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {list.map(renderStar)}
    </div>
  );
};

Rate.defaultProps = {
  size: 20,
  count: 5,
  gutter: 4,
  icon: 'star',
  voidIcon: 'star-0',
  touchable: true,
};

export default Rate;
