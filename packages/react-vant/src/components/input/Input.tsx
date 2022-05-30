import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useContext,
  useRef,
} from 'react';
import { Clear } from '@react-vant/icons';
import clsx from 'clsx';
import { InputInstance, InputProps } from './PropsType';
import { isDef, formatNumber, isObject, preventDefault, resetScroll } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { usePropsValue } from '../hooks';

const ICON_SIZE = '16px';

const Input = forwardRef<InputInstance, InputProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('input', prefixCls);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>();
  const [inputFocus, setInputFocus] = useState(false);
  const [value, setValue] = usePropsValue(props);

  const focus = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const blur = () => {
    if (inputRef?.current) {
      inputRef.current.blur();
    }
  };

  useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));

  const showClear = useMemo(() => {
    const { readonly } = props;

    if (props.clearable && !readonly) {
      const hasValue = value !== '';
      const trigger =
        props.clearTrigger === 'always' || (props.clearTrigger === 'focus' && inputFocus);

      return hasValue && trigger;
    }
    return false;
  }, [value, props.clearTrigger, inputFocus]);

  const adjustSize = () => {
    const input = inputRef.current;

    if (!(props.type === 'textarea' && props.autosize) || !input) {
      return;
    }

    input.style.height = 'auto';

    let height = input.scrollHeight;
    if (isObject(props.autosize)) {
      const { maxHeight, minHeight } = props.autosize;
      if (maxHeight) {
        height = Math.min(height, maxHeight);
      }
      if (minHeight) {
        height = Math.max(height, minHeight);
      }
    }

    if (height) {
      input.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    adjustSize();
  }, [value]);

  const renderInput = () => {
    const { align, type, error, name, rows, placeholder, disabled, readonly } = props;
    const controlClass = bem('control', [
      align,
      {
        error,
        'min-height': props.type === 'textarea' && !props.autosize,
      },
    ]);

    const handleChange = (e) => {
      const { maxlength } = props;
      const inputValue = e?.currentTarget?.value;
      let finalValue = inputValue;

      if (isDef(maxlength) && finalValue.length > +maxlength) {
        finalValue = finalValue.slice(0, maxlength);
      }

      if (type === 'number' || type === 'digit') {
        const isNumber = type === 'number';
        finalValue = formatNumber(finalValue, isNumber, isNumber);
      }

      setValue(finalValue);
    };

    const handleFocus = (e) => {
      setInputFocus(true);
      props.onFocus?.(e);

      // readonly not work in legacy mobile safari
      if (readonly) {
        blur();
      }
    };

    const handleBulr = (e) => {
      setInputFocus(false);
      props.onBlur?.(e);
      resetScroll();
    };

    const handleKeypress = (e) => {
      if (e.key === 'Enter' || +e.charCode === 13) {
        if (props.type !== 'textarea') {
          preventDefault(e);
        }
        // trigger blur after click keyboard search button
        if (props.type === 'search') {
          blur();
        }
      }
      props.onKeypress?.(e);
    };

    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          rows={rows}
          className={clsx(controlClass)}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          placeholder={placeholder || ''}
          onBlur={handleBulr}
          onFocus={handleFocus}
          onChange={handleChange}
          onKeyPress={handleKeypress}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          onKeyDown={props.onKeyDown}
          onKeyUp={props.onKeyUp}
          onCompositionStart={props.onCompositionStart}
          onCompositionEnd={props.onCompositionEnd}
          onClick={props.onClick as unknown as React.HTMLAttributes<HTMLTextAreaElement>['onClick']}
        />
      );
    }

    let inputType = type;
    let inputMode;

    // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers
    if (type === 'number') {
      inputType = 'text';
      inputMode = 'decimal';
    }

    if (type === 'digit') {
      inputType = 'tel';
      inputMode = 'numeric';
    }

    return (
      <input
        value={value}
        type={inputType}
        inputMode={inputMode}
        ref={inputRef as React.RefObject<HTMLInputElement>}
        name={name}
        className={clsx(controlClass)}
        disabled={disabled}
        readOnly={readonly}
        placeholder={placeholder || ''}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onCompositionStart={props.onCompositionStart}
        onCompositionEnd={props.onCompositionEnd}
        onClick={props.onClick}
      />
    );
  };

  const handleClear = (e) => {
    setValue('');
    props.onClear?.(e);
  };

  return (
    <div className={clsx(bem())}>
      {renderInput()}
      {showClear &&
        React.cloneElement(props.clearIcon as React.ReactElement, {
          className: clsx(bem('clear')),
          onTouchStart: handleClear,
          size: ICON_SIZE,
        })}
    </div>
  );
});

Input.defaultProps = {
  clearIcon: <Clear />,
  clearTrigger: 'focus',
};

export default Input;
