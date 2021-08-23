import React, { CSSProperties, useMemo, useRef } from 'react';
import cls from 'classnames';
import { SliderProps, SliderValue } from './PropsType';
import {
  addUnit,
  createNamespace,
  range,
  addNumber,
  preventDefault,
  getSizeStyle,
  stopPropagation,
} from '../utils';
import useTouch from '../hooks/use-touch';
import { getRect } from '../hooks/use-rect';

const [bem] = createNamespace('slider');

const Slider: React.FC<SliderProps> = (props) => {
  const buttonIndex = useRef<0 | 1>();
  const startValue = useRef<SliderValue>();
  const currentValue = useRef<SliderValue>(props.value);

  const root = useRef<HTMLDivElement>();
  const dragStatus = useRef<'start' | 'dragging' | ''>();
  const touch = useTouch();

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
    return {
      [mainAxis]: calcMainAxis(),
      left: props.vertical ? undefined : calcOffset(),
      top: props.vertical ? calcOffset() : undefined,
      background: props.activeColor,
      transition: dragStatus.current ? 'none' : undefined,
    };
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

  // 处理两个滑块重叠之后的情况
  const handleOverlap = (value: [number, number]) => {
    if (value[0] > value[1]) {
      return value.slice(0).reverse();
    }
    return value;
  };

  const updateValue = (value: SliderValue, end?: boolean) => {
    if (isRange(value)) {
      value = handleOverlap(value).map(format) as [number, number];
    } else {
      value = format(value);
    }
    if (!isSameValue(value, props.value)) {
      props.onChange?.(value);
    }
    if (end && !isSameValue(value, startValue.current)) {
      props.onChangeAfter?.(value);
    }
    return value;
  };

  const onClick = (event) => {
    event.stopPropagation();

    if (props.disabled || props.readonly) {
      return;
    }

    const { min, vertical, value: modelValue } = props;
    const rect = getRect(root.current);
    const delta = vertical ? event.clientY - rect.top : event.clientX - rect.left;
    const total = vertical ? rect.height : rect.width;
    const value = Number(min) + (delta / total) * scope;

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
      startValue.current = format(currentValue.current);
    }

    dragStatus.current = 'start';
  };

  const onTouchMove = (event) => {
    if (props.disabled || props.readonly) {
      return;
    }

    if (dragStatus.current === 'start') {
      props.onDragStart?.(event, startValue.current);
    }

    preventDefault(event, true);
    touch.move(event);
    dragStatus.current = 'dragging';

    const rect = getRect(root.current);
    const delta = props.vertical ? touch.deltaY : touch.deltaX;
    const total = props.vertical ? rect.height : rect.width;
    const diff = (delta / total) * scope;
    if (isRange(startValue.current)) {
      (currentValue.current as [number, number])[buttonIndex.current] =
        startValue.current[buttonIndex.current] + diff;
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
      props.onDragStart?.(event, value);
    }

    dragStatus.current = '';
  };

  const getButtonClassName = (index?: 0 | 1) => {
    if (typeof index === 'number') {
      const position = ['left', 'right'];
      return bem(`button-wrapper-${position[index]}`);
    }
    return bem('button-wrapper');
  };

  const renderButtonContent = (value: SliderValue, index?: 0 | 1) => {
    if (typeof index === 'number') {
      const slot = props[index === 0 ? 'leftButton' : 'rightButton'];
      if (slot) {
        return slot;
      }
    }

    if (props.button) {
      return props.button;
    }

    return <div className={cls(bem('button'))} style={getSizeStyle(props.buttonSize)} />;
  };

  const renderButton = (index?: 0 | 1) => {
    const value =
      typeof index === 'number'
        ? (props.value as [number, number])[index]
        : (props.value as number);

    return (
      <div
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
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={stopPropagation}
      >
        {renderButtonContent(currentValue.current, index)}
      </div>
    );
  };

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
        {props.range ? [renderButton(0), renderButton(1)] : renderButton()}
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
