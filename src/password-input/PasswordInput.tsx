import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { isFunction, createNamespace, formatNumber, isDef } from '../utils';
import { PasswordInputInstance, PasswordInputProps } from './PropsType';

const [bem] = createNamespace('password-input');
type InputMode = 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

const PasswordInput = forwardRef<PasswordInputInstance, PasswordInputProps>((props, ref) => {
  const {
    value = '',
    type = 'text',
    length = 6,
    onChange,
    onSubmit,
    validator,
    className,
    autoFocus = false,
    highlightClass = 'highlight',
    mask = true,
  } = props;
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [codeArr, setCodeArr] = useState<Array<string>>([]);
  const [inputType, setInputType] = useState<string>('');
  const [inputMode, setInputMode] = useState<InputMode>('text');
  const inputRef = useRef<HTMLInputElement>(null);

  const generateRandom = () => {
    return Math.ceil(Math.random() * 10000000000);
  };

  const random = generateRandom();

  const focus = () => {
    inputRef?.current?.focus();
    setFocused(true);
  };

  const blur = () => {
    inputRef?.current?.blur();
    setFocused(false);
  };

  const clear = () => {
    setCode('');
    setCursorIndex(0);
  };

  const formatValue = (val: string, callback?: (v: string) => void) => {
    if (isDef(length) && val.length > +length) {
      val = val.slice(0, length);
    }

    if (type === 'number') {
      val = formatNumber(val, false, false);
    }

    if (isFunction(validator)) {
      if (validator(val)) {
        setCode(val);
        if (isFunction(callback)) callback(val);
      }
    } else {
      setCode(val);
      if (isFunction(callback)) callback(val);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    formatValue(val, (v: string) => {
      if (isFunction(onChange)) onChange(v);
    });
  };

  useEffect(() => {
    formatValue(value);
    if (autoFocus) {
      // 聚焦
      setCursorIndex(0);
      setTimeout(() => {
        focus();
      }, 300);
    }
  }, []);

  useEffect(() => {
    setCodeArr(code.split(''));
    if (code.length >= length) {
      inputRef?.current?.blur?.();
      onSubmit(code);
    } else {
      setCursorIndex(code.length);
    }
  }, [code]);

  useEffect(() => {
    if (type === 'number') {
      setInputType('tel');
      setInputMode('numeric');
    } else {
      setInputType('text');
    }
  }, [type]);

  useImperativeHandle(ref, () => ({
    focus,
    blur,
    clear,
  }));

  return (
    <div className={classnames(bem(), className)}>
      <input
        ref={inputRef}
        id={`code${random}`}
        type={inputType}
        inputMode={inputMode}
        pattern="[0-9]*"
        maxLength={6}
        value={code}
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {new Array(length).fill('').map((item, index) => {
        return (
          <label
            htmlFor={`code${random}`}
            className={classnames(
              'line',
              focused && cursorIndex === index && !codeArr[index] ? 'animated' : '',
              codeArr[index] && !mask ? highlightClass : '',
            )}
            key={`label_${index + 1}`}
          >
            {mask && codeArr[index] ? (
              <span className={classnames('dot')} />
            ) : (
              <span>{codeArr[index]}</span>
            )}
          </label>
        );
      })}
    </div>
  );
});

export default PasswordInput;
