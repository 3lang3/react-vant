import React, { CSSProperties, useContext, useMemo, useRef, useState } from 'react';
import cls from 'clsx';
import { SliderProps, SliderValue } from './PropsType';
import { addUnit, range, addNumber, preventDefault, getSizeStyle, stopPropagation } from '../utils';
import useTouch from '../hooks/use-touch';
import { getRect } from '../hooks/use-rect';
import useEventListener from '../hooks/use-event-listener';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

type NumberRange = [number, number];

const Slider: React.FC<SliderProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('slider', prefixCls);

  const [buttonRef1, setButtonRef1] = useState<HTMLDivElement>(null);
  const [buttonRef2, setButtonRef2] = useState<HTMLDivElement>(null);
  const buttonIndex = useRef<0 | 1>();
  const startValue = useRef<SliderValue>();
  const currentValue = useRef<SliderValue>(props.value);

  const root = useRef<HTMLDivElement>();
  const dragStatus = useRef<'start' | 'dragging' | ''>();
  const touch = useTouch(true);

  const scope = useMemo(() => Number(props.max) - Number(props.min), [props.max, props.min]);

  const wrapperStyle = useMemo(() => {
    const crossAxis = props.vertical ? 'width' : 'height';
    return {
      background: props.inactiveColor,
      [crossAxis]: addUnit(props.barHeight),
      ...props.style,
    };
  }, [props.vertical, props.barHeight, props.inactiveColor, props.style]);

  const isRange = (val: unknown): val is [number, number] => props.range && Array.isArray(val);

  // 计算选中条的长度百分比
  const calcMainAxis = () => {
    const { value, min } = props;
    if (isRange(value)) {
      return `${((value[1] - value[0]) * 100) / scope}%`;
    }
    return `${((+value - Number(min)) * 100) / scope}%`;
  };

  // 计算选中条的开始位置的偏移量
  const calcOffset = () => {
    const { value, min } = props;
    if (isRange(value)) {
      return `${((value[0] - Number(min)) * 100) / scope}%`;
    }
    return '0%';
  };

  const barStyle = useMemo<CSSProperties>(() => {
    const mainAxis = props.vertical ? 'height' : 'width';

    const style: CSSProperties = {
      [mainAxis]: calcMainAxis(),
      background: props.activeColor,
    };

    if (dragStatus.current) {
      style.transition = 'none';
    }
    const getPositionKey = () => {
      if (props.vertical) {
        return props.reverse ? 'bottom' : 'top';
      }
      return props.reverse ? 'right' : 'left';
    };

    style[getPositionKey()] = calcOffset();

    return style;
  }, [calcOffset]);

  const format = (value: number) => {
    const min = +props.min;
    const max = +props.max;
    const step = +props.step;

    value = range(value, min, max);
    const diff = Math.round((value - min) / step) * step;
    return addNumber(min, diff);
  };

  const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
    JSON.stringify(newValue) === JSON.stringify(oldValue);

  const handleRangeValue = (value: NumberRange) => {
    // 设置默认值
    const left = value[0] ?? Number(props.min);
    const right = value[1] ?? Number(props.max);
    // 处理两个滑块重叠之后的情况
    return left > right ? [right, left] : [left, right];
  };

  const updateValue = (value: SliderValue, end?: boolean) => {
    if (isRange(value)) {
      value = handleRangeValue(value).map(format) as [number, number];
    } else {
      value = format(value) as number;
    }
    if (!isSameValue(value, props.value)) {
      props.onChange?.(value as number & [number, number]);
    }
    if (end && !isSameValue(value, startValue.current)) {
      props.onChangeAfter?.(value as number & [number, number]);
    }
    return value;
  };

  const onClick = (event) => {
    event.stopPropagation();

    if (props.disabled || props.readonly) {
      return;
    }

    const { min, reverse, vertical, value: modelValue } = props;
    const rect = getRect(root.current);

    const getDelta = () => {
      if (vertical) {
        if (reverse) {
          return rect.bottom - event.clientY;
        }
        return event.clientY - rect.top;
      }
      if (reverse) {
        return rect.right - event.clientX;
      }
      return event.clientX - rect.left;
    };

    const total = vertical ? rect.height : rect.width;
    const value = Number(min) + (getDelta() / total) * scope;

    if (isRange(modelValue)) {
      const [left, right] = modelValue;
      const middle = (left + right) / 2;

      if (value <= middle) {
        updateValue([value, right], true);
      } else {
        updateValue([left, value], true);
      }
    } else {
      updateValue(value, true);
    }
  };

  const onTouchStart = (event) => {
    if (props.disabled || props.readonly) {
      return;
    }

    touch.start(event);
    currentValue.current = JSON.parse(JSON.stringify(props.value));

    if (isRange(currentValue.current)) {
      startValue.current = currentValue.current.map(format) as [number, number];
    } else {
      startValue.current = format(currentValue.current as number);
    }

    dragStatus.current = 'start';
  };

  const onTouchMove = (event) => {
    if (props.disabled || props.readonly) {
      return;
    }

    if (dragStatus.current === 'start') {
      props.onDragStart?.(event, startValue.current as number & [number, number]);
    }

    preventDefault(event, true);
    touch.move(event);
    dragStatus.current = 'dragging';

    const rect = getRect(root.current);
    const delta = props.vertical ? touch.deltaY : touch.deltaX;
    const total = props.vertical ? rect.height : rect.width;
    let diff = (delta / total) * scope;
    if (props.reverse) {
      diff = -diff;
    }

    if (isRange(startValue.current)) {
      const index = props.reverse ? 1 - buttonIndex.current : buttonIndex.current;
      (currentValue.current as [number, number])[index] = startValue.current[index] + diff;
    } else {
      currentValue.current = +startValue.current + diff;
    }
    updateValue(currentValue.current);
  };

  const onTouchEnd = (event) => {
    if (props.disabled || props.readonly) {
      return;
    }

    if (dragStatus.current === 'dragging') {
      const value = updateValue(currentValue.current, true);
      props.onDragEnd?.(event, value as number & [number, number]);
    }

    dragStatus.current = '';
  };

  const getButtonClassName = (index?: 0 | 1) => {
    if (typeof index === 'number') {
      const position = ['left', 'right'];
      return bem('button-wrapper', position[index]);
    }
    return bem('button-wrapper', props.reverse ? 'left' : 'right');
  };

  const renderButtonContent = (value: SliderValue, index?: 0 | 1) => {
    if (typeof index === 'number') {
      const slot = props[index === 0 ? 'leftButton' : 'rightButton'];
      if (slot) {
        return slot;
      }
    }

    if (typeof props.button === 'function') {
      return props.button({ value });
    }

    if (props.button) {
      return props.button;
    }

    return <div className={cls(bem('button'))} style={getSizeStyle(props.buttonSize)} />;
  };

  const renderButton = (buttounRef, index?: 0 | 1) => {
    const value =
      typeof index === 'number'
        ? (props.value as [number, number])[index]
        : (props.value as number);

    return (
      <div
        ref={buttounRef}
        key={index}
        role="slider"
        className={cls(getButtonClassName(index))}
        tabIndex={props.disabled || props.readonly ? -1 : 0}
        aria-valuemin={props.min}
        aria-valuenow={value}
        aria-valuemax={props.max}
        aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
        onTouchStart={(event) => {
          if (typeof index === 'number') {
            // save index of current button
            buttonIndex.current = index;
          }
          onTouchStart(event);
        }}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={stopPropagation}
      >
        {renderButtonContent(currentValue.current, index)}
      </div>
    );
  };

  useEventListener('touchmove', onTouchMove as EventListener, {
    target: buttonRef1,
    depends: [touch.deltaX, touch.deltaY, props.disabled, props.readonly],
  });
  useEventListener('touchmove', onTouchMove as EventListener, {
    target: buttonRef2,
    depends: [touch.deltaX, touch.deltaY, props.disabled, props.readonly],
  });

  return (
    <div
      ref={root}
      style={wrapperStyle}
      className={cls(
        props.className,
        bem({
          vertical: props.vertical,
          disabled: props.disabled,
        }),
      )}
      onClick={onClick}
    >
      <div className={cls(bem('bar'))} style={barStyle}>
        {props.range
          ? [renderButton(setButtonRef1, 0), renderButton(setButtonRef2, 1)]
          : renderButton(setButtonRef1)}
      </div>
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

export default Slider;
