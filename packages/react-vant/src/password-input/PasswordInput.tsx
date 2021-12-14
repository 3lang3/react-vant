import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useContext,
} from 'react';
import clsx from 'clsx';
import { isFunction, formatNumber, isDef, addUnit } from '../utils';
import { PasswordInputInstance, PasswordInputProps } from './PropsType';
import { useSetState, useUpdateEffect } from '../hooks';
import { BORDER_LEFT, BORDER_SURROUND } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

type InputMode = 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

const PasswordInput = forwardRef<PasswordInputInstance, PasswordInputProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('password-input', prefixCls);

  const innerEffect = useRef<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, updateState] = useSetState({
    code: props.value || '',
    focused: props.autoFocus,
    inputType: props.type,
    inputMode: 'text',
  });

  const codeArr = useMemo(() => state.code.split(''), [state.code]);
  const cursorIndex = useMemo(() => codeArr.length, [codeArr.length]);

  const focus = () => {
    inputRef.current?.focus();
    updateState({ focused: true });
  };

  const blur = () => {
    inputRef.current?.blur();
    updateState({ focused: false });
  };

  const clear = () => {
    updateState({ code: '' });
  };

  const formatValue = (val: string, callback?: (v: string) => void) => {
    if (isDef(props.length) && val.length > +props.length) {
      val = val.slice(0, props.length);
    }

    if (props.type === 'number') {
      val = formatNumber(val, false, false);
    }

    if (isFunction(props.validator)) {
      if (props.validator(val)) {
        updateState({ code: val });
        if (isFunction(callback)) callback(val);
      }
    } else {
      updateState({ code: val });
      if (isFunction(callback)) callback(val);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    innerEffect.current = true;
    formatValue(val, props.onChange);
  };

  const renderPoints = () => {
    const Points: JSX.Element[] = [];
    const { mask, length, gutter } = props;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      const char = codeArr[i];
      const showBorder = i !== 0 && !gutter;
      const showCursor = state.focused && cursorIndex === i && !char;
      let style;
      if (i !== 0 && gutter) {
        style = { marginLeft: addUnit(gutter) };
      }

      Points.push(
        <li
          key={i}
          className={clsx(
            {
              [BORDER_LEFT]: showBorder,
              [props.highlightClass]: props.highlightClass && char && !props.mask,
            },
            bem('item', { focus: showCursor }),
          )}
          style={style}
        >
          {mask ? <i style={{ visibility: char ? 'visible' : 'hidden' }} /> : char}
          {showCursor && <div className={clsx(bem('cursor'))} />}
        </li>,
      );
    }

    return Points;
  };

  useUpdateEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    formatValue(props.value);
  }, [props.value]);

  useEffect(() => {
    if (state.code.length >= props.length) {
      inputRef?.current?.blur?.();
      props?.onSubmit?.(state.code);
    }
  }, [state.code]);

  useUpdateEffect(() => {
    if (props.type === 'number') {
      updateState({ inputType: 'tel', inputMode: 'numeric' });
    } else {
      updateState({ inputType: 'text' });
    }
  }, [props.type]);

  useImperativeHandle(ref, () => ({
    focus,
    blur,
    clear,
  }));

  const info = props.errorInfo || props.info;

  return (
    <div className={clsx(bem(), props.className)} style={props.style}>
      <input
        ref={inputRef}
        type={state.inputType}
        inputMode={state.inputMode as InputMode}
        pattern="[0-9]*"
        maxLength={props.length}
        value={state.code}
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={props.autoFocus}
        spellCheck="false"
        onChange={handleChange}
        onFocus={(e) => {
          updateState({ focused: true });
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          updateState({ focused: false });
          props.onBlur?.(e);
        }}
      />
      <ul className={clsx(bem('security'), { [BORDER_SURROUND]: !props.gutter })}>
        {renderPoints()}
      </ul>
      {info ? (
        <div className={clsx(bem(props.errorInfo ? 'error-info' : 'info'))}>{info}</div>
      ) : null}
    </div>
  );
});

PasswordInput.defaultProps = {
  length: 6,
  gutter: 0,
  mask: true,
  type: 'text',
};

export default PasswordInput;
