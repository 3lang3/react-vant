/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent, FormEvent, TouchEvent } from 'react';
import classnames from 'classnames';

import { StepperProps } from './PropsType';
import { isNaN } from '../utils/validate/number';
import { callInterceptor } from '../utils/interceptor';
import {
  addUnit,
  getSizeStyle,
  isDef,
  createNamespace,
  formatNumber,
  resetScroll,
  preventDefault,
} from '../utils';

const [bem] = createNamespace('stepper');

const LONG_PRESS_INTERVAL = 200;
const LONG_PRESS_START_TIME = 600;

function equal(value1?: string | number, value2?: string | number) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

const Stepper: React.FC<StepperProps> = (props) => {
  const emit = (type?: string, args?: unknown) => {
    const name = `on${type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`;
    if (props[name] && typeof props[name] === 'function') {
      props[name](args);
    }
  };

  const format = (value: string | number) => {
    const { min, max, allowEmpty, decimalLength } = props;

    if (allowEmpty && value === '') {
      return value;
    }

    value = formatNumber(String(value), !props.integer);
    value = value === '' ? 0 : +value;
    value = isNaN(value) ? +min : value;
    value = Math.max(Math.min(+max, value), +min);

    // format decimal
    if (isDef(decimalLength)) {
      value = value.toFixed(+decimalLength);
    }

    return value;
  };

  const getInitialValue = () => {
    const defaultValue = props.value ?? props.defaultValue;
    return format(defaultValue);
  };

  let actionType: 'plus' | 'minus';
  const inputRef = useRef(null);
  const preValue = useRef(getInitialValue());
  const [current, setCurrent] = useState(getInitialValue());

  const minusDisabled = useMemo(
    () => props.disabled || props.disableMinus || current <= +props.min,
    [props.disabled, props.disableMinus, current],
  );

  const plusDisabled = useMemo(
    () => props.disabled || props.disablePlus || current >= +props.max,
    [props.disabled, props.disablePlus, current],
  );

  const inputStyle = useMemo(
    () => ({
      width: addUnit(props.inputWidth),
      height: addUnit(props.buttonSize),
    }),
    [props.inputWidth, props.buttonSize],
  );

  const buttonStyle = useMemo(() => getSizeStyle(props.buttonSize), [props.buttonSize]);

  const check = () => {
    const value = format(current);
    if (!equal(value, current)) {
      emit('change', value);
    }
  };

  const setValue = (value: string | number) => {
    if (props.beforeChange) {
      callInterceptor({
        args: [value],
        interceptor: props.beforeChange,
        done() {
          emit('change', value);
        },
      });
    } else {
      emit('change', value);
    }
  };

  const onChange = () => {
    if ((actionType === 'plus' && plusDisabled) || (actionType === 'minus' && minusDisabled)) {
      emit('overlimit', actionType);
      return;
    }

    const diff = actionType === 'minus' ? -props.step : +props.step;
    const value = format(add(+preValue.current || +current, diff));
    setValue(value);
    preValue.current = value;
    emit(actionType);
  };

  const onInput = (event: FormEvent) => {
    const input = event.target as HTMLInputElement;
    const { value } = input;
    const { decimalLength } = props;

    let formatted = formatNumber(String(value), !props.integer);

    // limit max decimal length
    if (isDef(decimalLength) && formatted.indexOf('.') !== -1) {
      const pair = formatted.split('.');
      formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
    }

    if (props.beforeChange) {
      input.value = String(current);
    } else if (!equal(value, formatted)) {
      input.value = formatted;
    }
  };

  const onFocus = (event: FormEvent) => {
    // readonly not work in lagacy mobile safari
    if (props.disableInput && inputRef.current) {
      inputRef.current.blur();
    } else {
      emit('focus', event);
    }
  };

  const onBlur = (event: FormEvent) => {
    const input = event.target as HTMLInputElement;
    const value = format(input.value);
    input.value = String(value);
    preValue.current = value;
    emit('change', value);
    emit('blur', event);
    resetScroll();
  };

  const onMousedown = (event: MouseEvent) => {
    // fix mobile safari page scroll down issue
    if (props.disableInput) {
      event.preventDefault();
    }
  };

  const isLongPress = useRef<boolean>(false);
  const longPressTimer = useRef<NodeJS.Timeout>(null);

  const longPressStep = () => {
    longPressTimer.current = setTimeout(() => {
      onChange();
      longPressStep();
    }, LONG_PRESS_INTERVAL);
  };

  const onTouchStart = () => {
    if (props.longPress) {
      isLongPress.current = false;
      clearTimeout(longPressTimer.current);
      longPressTimer.current = setTimeout(() => {
        isLongPress.current = true;
        onChange();
        longPressStep();
      }, LONG_PRESS_START_TIME);
    }
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (props.longPress) {
      clearTimeout(longPressTimer.current);
      if (isLongPress.current) {
        preventDefault(event);
      }
    }
  };

  const createListeners = (type: 'plus' | 'minus') => ({
    onClick: (event: MouseEvent) => {
      // disable double tap scrolling on mobile safari
      event.preventDefault();
      actionType = type;
      onChange();
    },
    onTouchStart: () => {
      actionType = type;
      onTouchStart();
    },
    onTouchEnd,
    onTouchCancel: onTouchEnd,
  });

  useEffect(() => check, [props.max, props.min, props.integer, props.decimalLength]);

  useEffect(() => {
    setCurrent(props.value);
  }, [props.value]);

  return (
    <div className={classnames(bem([props.theme]))}>
      {props.showMinus && (
        <button
          type="button"
          aria-label="minus"
          style={buttonStyle}
          className={classnames(bem('minus', { disabled: minusDisabled }))}
          {...createListeners('minus')}
        />
      )}
      {props.showInput && (
        <input
          ref={inputRef}
          type={props.integer ? 'tel' : 'text'}
          role="spinbutton"
          className={classnames(bem('input'))}
          value={current}
          style={inputStyle}
          disabled={props.disabled}
          readOnly={props.disableInput}
          // set keyboard in mordern browers
          inputMode={props.integer ? 'numeric' : 'decimal'}
          placeholder={props.placeholder}
          aria-valuemax={+props.max as number}
          aria-valuemin={+props.min as number}
          aria-valuenow={+current as number}
          onChange={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseDown={onMousedown}
        />
      )}
      {props.showPlus && (
        <button
          type="button"
          aria-label="add"
          style={buttonStyle}
          className={classnames(bem('plus', { disabled: plusDisabled }))}
          {...createListeners('plus')}
        />
      )}
    </div>
  );
};

Stepper.defaultProps = {
  name: '',
  max: Number.MAX_VALUE,
  min: 1,
  step: 1,
  defaultValue: 1,
  showPlus: true,
  showMinus: true,
  showInput: true,
  longPress: true,
};

export default Stepper;
