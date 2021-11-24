/* eslint-disable @typescript-eslint/naming-convention */
import React, {
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  useCallback,
  forwardRef,
  useContext,
} from 'react';
import clsx from 'clsx';

import useTouch from '../hooks/use-touch';

import { PickerColumnProps, PickerOption } from './PropsType';
import { isObject, range } from '../utils';
import { deepClone } from '../utils/deep-clone';
import { useSetState, useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { raf } from '../utils/raf';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

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
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('picker-column', prefixCls);

  const { itemHeight, visibleItemCount, defaultIndex, initialOptions } = props;

  const root = useRef(null);
  const wrapper = useRef(null);

  const moving = useRef(false);
  const startOffset = useRef(0);
  const transitionEndTrigger = useRef(null);
  const touchStartTime = useRef(0);
  const momentumOffset = useRef(0);

  const [state, updateState] = useSetState({
    index: defaultIndex,
    offset: 0,
    duration: 0,
    options: deepClone(initialOptions),
  });

  const touch = useTouch();

  const count = useMemo(() => state.options.length, [state.options.length]);

  const baseOffset = useMemo(() => {
    // 默认转入第一个选项的位置
    return (itemHeight * (+visibleItemCount - 1)) / 2;
  }, [itemHeight, visibleItemCount]);

  const adjustIndex = (index: number) => {
    index = range(index, 0, count);

    for (let i = index; i < count; i += 1) {
      if (!isOptionDisabled(state.options[i])) return i;
    }
    for (let i = index - 1; i >= 0; i -= 1) {
      if (!isOptionDisabled(state.options[i])) return i;
    }

    return null;
  };

  const setIndex = (index: number, emitChange?: boolean) => {
    index = adjustIndex(index) || 0;

    const offset = -index * props.itemHeight;
    const trigger = () => {
      if (index !== state.index) {
        updateState({ index });

        if (emitChange && props.onChange) {
          raf(() => {
            props.onChange(index);
          });
        }
      }
    };

    // trigger the change event after transitionend when moving
    if (moving.current && offset !== state.offset) {
      transitionEndTrigger.current = trigger;
    } else {
      trigger();
    }
    updateState({ offset });
  };

  const setOptions = (options: PickerOption[]) => {
    if (JSON.stringify(options) !== JSON.stringify(state.options)) {
      updateState({ options: deepClone(options) });
      setIndex(props.defaultIndex);
    }
  };

  const onClickItem = (index: number) => {
    if (moving.current || props.readonly) {
      return;
    }
    transitionEndTrigger.current = null;
    updateState({ duration: DEFAULT_DURATION });
    setIndex(index, true);
  };

  const getOptionText = (option: []) => {
    if (isObject(option) && props.textKey in option) {
      return option[props.textKey];
    }
    return option;
  };

  const getIndexByOffset = (offset: number) =>
    range(Math.round(-offset / props.itemHeight), 0, count - 1);

  const momentum = (distance: number, _duration: number) => {
    const speed = Math.abs(distance / _duration);

    distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

    const index = getIndexByOffset(distance);
    updateState({ duration: +props.swipeDuration });
    setIndex(index, true);
  };

  const stopMomentum = () => {
    moving.current = false;
    updateState({ duration: 0 });

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
    let { offset } = state;

    if (moving.current) {
      const translateY = getElementTranslateY(wrapper.current);
      offset = Math.min(0, translateY - baseOffset);
      startOffset.current = offset;
    } else {
      startOffset.current = offset;
    }

    updateState({ duration: 0, offset });
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

    const offset = range(
      startOffset.current + touch.deltaY,
      -(count * props.itemHeight),
      props.itemHeight,
    );

    updateState({
      offset,
    });

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
    const distance = state.offset - momentumOffset.current;
    const duration = Date.now() - touchStartTime.current;

    const allowMomentum =
      duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

    if (allowMomentum) {
      momentum(distance, duration);
      return;
    }

    const index = getIndexByOffset(state.offset);
    updateState({ duration: DEFAULT_DURATION });
    setIndex(index, true);

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

    return state.options.map((option, index: number) => {
      const text = getOptionText(option);
      const disabled = isOptionDisabled(option);

      const data = {
        role: 'button',
        key: index,
        style: optionStyle,
        tabIndex: disabled ? -1 : 0,
        className: clsx(
          bem('item', {
            disabled,
            selected: index === state.index,
          }),
        ),
        onClick: () => {
          onClickItem(index);
        },
      };

      const childData = {
        className: 'rv-ellipsis',
        children: text,
      };

      return (
        <li {...data}>
          {props.optionRender ? props.optionRender(option) : <div {...childData} />}
        </li>
      );
    });
  };

  const setValue = (value: string) => {
    const { options } = state;
    for (let i = 0; i < options.length; i += 1) {
      if (getOptionText(options[i]) === value) {
        return setIndex(i);
      }
    }
    return null;
  };

  const getValue = useCallback<() => PickerOption>(
    () => state.options[state.index],
    [state.index, state.options],
  );

  useEffect(() => {
    setIndex(defaultIndex);
  }, [defaultIndex]);

  useUpdateEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  useImperativeHandle(ref, () => ({
    state,
    setIndex,
    getValue,
    setValue,
    setOptions,
    stopMomentum,
  }));

  return (
    <div
      ref={root}
      className={clsx(bem(), props.className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <ul
        ref={wrapper}
        style={{
          transform: `translate3d(0, ${state.offset + baseOffset}px, 0)`,
          transitionDuration: `${state.duration}ms`,
          transitionProperty: state.duration ? 'all' : 'none',
        }}
        className={clsx(bem('wrapper'))}
        onTransitionEnd={stopMomentum}
      >
        {renderOptions()}
      </ul>
    </div>
  );
});

PickerColumn.defaultProps = {
  initialOptions: [],
  defaultIndex: 0,
};

export default PickerColumn;
