import React, { useEffect, forwardRef, useImperativeHandle, useContext, useRef } from 'react';
import clsx from 'clsx';
import { TextAreaInstance, TextAreaProps } from './PropsType';
import { isDef, isObject, resetScroll } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { usePropsValue } from '../hooks';

const TextArea = forwardRef<TextAreaInstance, TextAreaProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('textarea', prefixCls);
  const nativeTextAreaRef = useRef<HTMLTextAreaElement>();
  const compositionStartRef = useRef(false);
  const [value, setValue] = usePropsValue(props);

  const {
    className,
    style,
    name,
    rows,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    showWordLimit,
    autoFocus,
  } = props;

  const focus = () => {
    if (nativeTextAreaRef?.current) {
      nativeTextAreaRef.current.focus();
    }
  };

  const blur = () => {
    if (nativeTextAreaRef?.current) {
      nativeTextAreaRef.current.blur();
    }
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus,
    blur,
    get nativeElement() {
      return nativeTextAreaRef.current;
    },
  }));

  const adjustSize = () => {
    const input = nativeTextAreaRef.current;

    if (!input) return;

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

  const controlClass = React.useMemo(() => {
    return bem('control', [
      {
        'min-height': !props.autosize,
      },
    ]);
  }, [props.autosize]);

  const handleChange = (e) => {
    const inputValue = e?.currentTarget?.value;
    let finalValue = inputValue;

    if (isDef(maxLength) && finalValue.length > +maxLength) {
      finalValue = finalValue.slice(0, maxLength);
    }

    setValue(finalValue);
  };

  const handleFocus = (e) => {
    props.onFocus?.(e);

    // readonly not work in legacy mobile safari
    if (readOnly) {
      blur();
    }
  };

  const handleBulr = (e) => {
    props.onBlur?.(e);
    resetScroll();
  };

  const renderWordLimit = () => {
    if (showWordLimit && maxLength) {
      const count = (value ? `${value}` : '').length;
      return (
        <div className={clsx(bem('word-limit'))}>
          <span className={clsx(bem('word-num'))}>{count}</span>/{maxLength}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={clsx(bem(), className)} style={style}>
      <textarea
        ref={nativeTextAreaRef as React.RefObject<HTMLTextAreaElement>}
        name={name}
        rows={rows}
        className={clsx(controlClass)}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readOnly}
        placeholder={placeholder || ''}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyPress={props.onKeypress}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        onCompositionStart={(e) => {
          compositionStartRef.current = true;
          props.onCompositionStart?.(e as any);
        }}
        onCompositionEnd={(e) => {
          compositionStartRef.current = false;
          props.onCompositionEnd?.(e as any);
        }}
        onClick={props.onClick as unknown as React.HTMLAttributes<HTMLTextAreaElement>['onClick']}
      />
      {renderWordLimit()}
    </div>
  );
});

TextArea.defaultProps = {
  rows: 2
}

export default TextArea;
