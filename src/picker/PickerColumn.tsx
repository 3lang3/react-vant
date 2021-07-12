/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
  useCallback,
  forwardRef,
} from 'react';
import classnames from 'classnames';

import useTouch from '../hooks/use-touch';

import { PickerColumnProps, Column } from './PropsType';
import { createNamespace, isObject, range } from '../utils';
import { deepClone } from '../utils/deep-clone';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const [bem] = createNamespace('picker-column');

function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}

const PickerColumn = forwardRef<{}, PickerColumnProps>((props, ref) => {
  const { itemHeight, visibleItemCount, defaultIndex, initialOptions } = props;

  const root = useRef(null);
  const wrapper = useRef(null);

  const moving = useRef(false);
  const startOffset = useRef(null);
  const transitionEndTrigger = useRef(null);
  const touchStartTime = useRef(0);
  const momentumOffset = useRef(0);

  const index = useRef(defaultIndex);

  const [offset, setOffset] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [options, _setOptions] = useState(deepClone(initialOptions));

  const touch = useTouch();

  const count = useMemo(() => options.length, [options]);

  const baseOffset = useMemo(() => {
    // 默认转入第一个选项的位置
    return (itemHeight * ((visibleItemCount as number) - 1)) / 2;
  }, [itemHeight, visibleItemCount]);

  const adjustIndex = (_index: number): number => {
    _index = range(_index, 0, count);

    for (let i = _index; i < count; i += 1) {
      if (!isOptionDisabled(options[i])) return i;
    }
    for (let i = _index - 1; i >= 0; i -= 1) {
      if (!isOptionDisabled(options[i])) return i;
    }

    return null;
  };

  const setIndex = (_index: number, emitChange?: boolean) => {
    _index = adjustIndex(_index) || 0;

    const _offset = -_index * props.itemHeight;
    const trigger = () => {
      if (_index !== index.current) {
        index.current = _index;

        if (emitChange && props.onChange) {
          props.onChange(index.current);
        }
      }
    };

    // trigger the change event after transitionend when moving
    if (moving.current && _offset !== offset) {
      transitionEndTrigger.current = trigger;
    } else {
      trigger();
    }
    setOffset(_offset);
  };

  const setOptions = (_options: Column) => {
    if (JSON.stringify(_options) !== JSON.stringify(options)) {
      _setOptions(deepClone(_options));
      setIndex(props.defaultIndex);
    }
  };

  const onClickItem = (_index: number) => {
    if (moving.current || props.readonly) {
      return;
    }

    transitionEndTrigger.current = null;
    setDuration(DEFAULT_DURATION);
    setIndex(_index, true);
  };

  const getOptionText = (option: []) => {
    if (isObject(option) && props.textKey in option) {
      return option[props.textKey];
    }
    return option;
  };

  const getIndexByOffset = (_offset: number) =>
    range(Math.round(-_offset / props.itemHeight), 0, count - 1);

  const momentum = (distance: number, _duration: number) => {
    const speed = Math.abs(distance / _duration);

    distance = offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

    const _index = getIndexByOffset(distance);
    setDuration(+props.swipeDuration);
    setIndex(_index, true);
  };

  const stopMomentum = () => {
    moving.current = false;
    setDuration(0);

    if (transitionEndTrigger.current) {
      transitionEndTrigger.current();
      transitionEndTrigger.current = null;
    }
  };

  const onTouchStart = (event) => {
    if (props.readonly) {
      return;
    }

    touch.start(event);

    if (moving.current) {
      const translateY = getElementTranslateY(wrapper.current);
      setOffset(Math.min(0, translateY - baseOffset));
      startOffset.current = offset;
    } else {
      startOffset.current = offset;
    }

    setDuration(0);
    touchStartTime.current = Date.now();
    momentumOffset.current = startOffset.current;
    transitionEndTrigger.current = null;
  };

  const onTouchMove = (event: TouchEvent | React.TouchEvent) => {
    if (props.readonly) {
      return;
    }

    touch.move(event as TouchEvent);

    if (touch.isVertical()) {
      moving.current = true;
    }

    setOffset(
      range(startOffset.current + touch.deltaY, -(count * props.itemHeight), props.itemHeight),
    );

    const now = Date.now();
    if (now - touchStartTime.current > MOMENTUM_LIMIT_TIME) {
      touchStartTime.current = now;
      momentumOffset.current = offset;
    }
  };

  const onTouchEnd = () => {
    if (props.readonly) {
      return;
    }
    const distance = offset - momentumOffset.current;
    const _duration = Date.now() - touchStartTime.current;

    const allowMomentum =
      _duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

    if (allowMomentum) {
      momentum(distance, _duration);
      return;
    }

    const _index = getIndexByOffset(offset);
    setDuration(DEFAULT_DURATION);
    setIndex(_index, true);

    // compatible with desktop scenario
    // use setTimeout to skip the click event triggered after touchstart
    setTimeout(() => {
      moving.current = false;
    }, 0);
  };

  const renderOptions = () => {
    const optionStyle = {
      height: `${props.itemHeight}px`,
    };

    return options.map((option, _index: number) => {
      const text = getOptionText(option);
      const disabled = isOptionDisabled(option);

      const data = {
        role: 'button',
        key: _index,
        style: optionStyle,
        tabIndex: disabled ? -1 : 0,
        className: classnames(
          bem('item', {
            disabled,
            selected: _index === index.current,
          }),
        ),
        onClick: () => {
          onClickItem(index.current);
        },
      };

      const childData = {
        className: 'zf-ellipsis',
        children: text,
      };

      return (
        <li {...data}>
          <div {...childData} />
        </li>
      );
    });
  };

  const setValue = (value: string) => {
    for (let i = 0; i < options.length; i += 1) {
      if (getOptionText(options[i]) === value) {
        return setIndex(i);
      }
    }
    return null;
  };

  const getValue = useCallback(() => options[index.current], [index.current, options]);

  useEffect(() => {
    setIndex(defaultIndex);
  }, [defaultIndex]);

  useEffect(() => {
    setOptions(deepClone(initialOptions));
  }, [initialOptions]);

  useImperativeHandle(ref, () => ({
    index,
    setIndex,
    getValue,
    setValue,
    setOptions,
    stopMomentum,
  }));

  const wrapperStyle = {
    transform: `translate3d(0, ${offset + baseOffset}px, 0)`,
    transitionDuration: `${duration}ms`,
    transitionProperty: duration ? 'all' : 'none',
  };

  return (
    <div
      ref={root}
      className={classnames(bem(), props.className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <ul
        ref={wrapper}
        style={wrapperStyle}
        className={classnames(bem('wrapper'))}
        onTransitionEnd={stopMomentum}
      >
        {renderOptions()}
      </ul>
    </div>
  );
});

export default PickerColumn;
