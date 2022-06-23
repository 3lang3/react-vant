import React, { useMemo, useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import clsx from 'clsx';
import { PickerColumnProps, PickerOption } from './PropsType';
import { isObject, range } from '../utils';
import { useMount, usePropsValue, useSetState, useTouch, useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

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

  const { itemHeight, visibleItemCount, options } = props;

  const root = useRef(null);
  const wrapper = useRef(null);

  const moving = useRef(false);
  const startOffset = useRef(0);
  const transitionEndTrigger = useRef(null);
  const touchStartTime = useRef(0);
  const momentumOffset = useRef(0);

  // Cascade mode will trigger change many times
  const ignoreChangeRef = useRef(false);

  const [columnIndex, setColumnIndex] = usePropsValue({
    value: props.index,
    defaultValue: props.defaultValue,
    onChange: (v) => {
      props.onChange(v, ignoreChangeRef.current);
      ignoreChangeRef.current = false;
    },
  });

  // Save columnIndex value
  const columnIndexRef = useRef(0);

  // Options use ref save
  const optionsRef = useRef(options as PickerOption[]);

  columnIndexRef.current = columnIndex;

  const [state, updateState] = useSetState({
    offset: 0,
    duration: 0,
  });

  const touch = useTouch();

  const baseOffset = useMemo(() => {
    // 默认转入第一个选项的位置
    return (itemHeight * (+visibleItemCount - 1)) / 2;
  }, [itemHeight, visibleItemCount]);

  const adjustIndex = (index: number) => {
    index = range(index, 0, optionsRef.current.length);

    for (let i = index; i < optionsRef.current.length; i += 1) {
      if (!isOptionDisabled(optionsRef.current[i])) return i;
    }
    for (let i = index - 1; i >= 0; i -= 1) {
      if (!isOptionDisabled(optionsRef.current[i])) return i;
    }

    return null;
  };

  const setIndex = (index: number, ignoreChange?: boolean) => {
    index = adjustIndex(index) || 0;
    const offset = -index * props.itemHeight;
    const trigger = () => {
      if (index !== columnIndex) {
        columnIndexRef.current = index;
        if (ignoreChange) ignoreChangeRef.current = true;
        setColumnIndex(index);
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

  const setOptions = (nextOptions: PickerOption[], optionIndex?: number) => {
    if (JSON.stringify(nextOptions) !== JSON.stringify(optionsRef.current)) {
      const currentOption = optionsRef.current[columnIndex];
      const nextCurrentOption = nextOptions[columnIndex];

      let nextIndex = optionIndex ?? props.defaultValue;

      // 更新后的option选中项和更新前一样时，无需更新选中index
      if (getOptionValue(currentOption) === getOptionValue(nextCurrentOption)) {
        nextIndex = columnIndex;
      }

      optionsRef.current = nextOptions;
      // Ignore change when update options
      setIndex(nextIndex, true);
      return nextOptions[nextIndex];
    }
  };

  const onClickItem = (index: number) => {
    if (moving.current || props.readOnly) {
      return;
    }
    transitionEndTrigger.current = null;
    updateState({ duration: DEFAULT_DURATION });
    setIndex(index);
  };

  const getOptionText = (option): string => {
    if (isObject(option) && props.textKey in option) {
      return option[props.textKey];
    }
    return option;
  };

  const getOptionValue = (option): string => {
    if (isObject(option)) {
      if (props.valueKey in option && option[props.valueKey]) return option[props.valueKey];
      if (props.textKey in option) return option[props.textKey];
    }
    return option;
  };

  const getIndexByOffset = (offset: number) =>
    range(Math.round(-offset / props.itemHeight), 0, optionsRef.current.length - 1);

  const momentum = (distance: number, _duration: number) => {
    const speed = Math.abs(distance / _duration);

    distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

    const index = getIndexByOffset(distance);
    updateState({ duration: +props.swipeDuration });
    setIndex(index);
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
    if (props.readOnly) {
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
    if (props.readOnly) {
      return;
    }

    touch.move(event as TouchEvent);

    if (touch.isVertical()) {
      moving.current = true;
    }

    const offset = range(
      startOffset.current + touch.deltaY.current,
      -(optionsRef.current.length * props.itemHeight),
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
    if (props.readOnly) {
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
    setIndex(index);

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

    return optionsRef.current.map((option, index: number) => {
      const text = getOptionText(option);
      const disabled = isOptionDisabled(option);

      const data = {
        role: 'button',
        style: optionStyle,
        tabIndex: disabled ? -1 : 0,
        className: clsx(
          bem('item', {
            disabled,
            selected: index === columnIndex,
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
        <li {...data} key={index}>
          {props.optionRender ? props.optionRender(option) : <div {...childData} />}
        </li>
      );
    });
  };

  const setValue = (value) => {
    for (let i = 0; i < optionsRef.current.length; i += 1) {
      if (getOptionValue(optionsRef.current[i]) === value) {
        return setIndex(i, true);
      }
    }
    return null;
  };

  const getValue = (returnOption?: boolean) => {
    const { valueKey, textKey } = props;
    const currentOption = optionsRef.current[columnIndexRef.current];
    if (returnOption) return currentOption;
    if (isObject(currentOption)) {
      if (valueKey in currentOption && currentOption[valueKey]) return currentOption[valueKey];
      return currentOption[textKey];
    }
    return currentOption;
  };

  useImperativeHandle(ref, () => ({
    get indexRef() {
      return columnIndexRef;
    },
    setIndex: (index: number) => setIndex(index, true),
    // 获取选中项的值
    getValue,
    setValue,
    // 获取选择项
    getOption: () => optionsRef.current[columnIndexRef.current],
    // 获取所以选项
    getOptions: () => optionsRef.current,
    setOptions,
    // 立即停止滚动
    stopMomentum,
  }));

  useUpdateEffect(() => {
    setOptions(options);
  }, [JSON.stringify(options)]);

  useMount(() => {
    setIndex(columnIndex);
  });

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
  options: [],
  defaultValue: 0,
};

export default PickerColumn;
