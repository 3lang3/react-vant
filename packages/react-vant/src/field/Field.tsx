import React, {
  useRef,
  useState,
  useEffect,
  CSSProperties,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useContext,
} from 'react';
import clsx from 'clsx';
import Icon from '../icon';
import Cell from '../cell';
import Dialog from '../dialog';
import { FieldInstance, FieldProps, FieldTooltipProps } from './PropsType';
import { isDef, addUnit, formatNumber, isObject, preventDefault, resetScroll } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { COMPONENT_TYPE_KEY } from '../utils/constant';

const ICON_SIZE = '16px';

const Field = forwardRef<FieldInstance, FieldProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('field', prefixCls);

  const [inputFocus, setInputFocus] = useState(false);
  const fieldRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.getFieldRef) props.getFieldRef(fieldRef);
    if (props.getInputRef) props.getInputRef(inputRef);
  }, [props.getFieldRef, props.getInputRef]);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const blur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));

  const getProp = (key) => {
    if (isDef(props[key])) {
      return props[key];
    }
    return null;
  };
  const getModelValue = () => String(props.value ?? '');

  const showClear = useMemo(() => {
    const readonly = getProp('readonly');

    if (props.clearable && !readonly) {
      const hasValue = getModelValue() !== '';
      const trigger =
        props.clearTrigger === 'always' || (props.clearTrigger === 'focus' && inputFocus);

      return hasValue && trigger;
    }
    return false;
  }, [props.value, props.clearTrigger, inputFocus]);

  const labelStyle = (): CSSProperties => {
    const labelW = getProp('labelWidth');
    if (labelW) {
      return { width: addUnit(labelW) };
    }

    return {};
  };

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
  }, [props.value]);

  const formatValue = (inputValue, trigger = 'onChange') => {
    const { formatTrigger, formatter } = props;
    if (formatter && trigger === formatTrigger) {
      return formatter(inputValue);
    }

    return inputValue;
  };

  const renderInput = () => {
    const { type, error, name, rows, value, placeholder, disabled, readonly } = props;
    const controlClass = bem('control', [
      getProp('inputAlign'),
      {
        error,
        custom: !!props.children,
        'min-height': props.type === 'textarea' && !props.autosize,
      },
    ]);

    if (props.children) {
      return <div className={clsx(controlClass)}>{props.children}</div>;
    }

    const handleChange = (e) => {
      const { maxlength, onChange } = props;
      const inputValue = e?.currentTarget?.value;
      let finalValue = inputValue;

      if (isDef(maxlength) && finalValue.length > +maxlength) {
        finalValue = finalValue.slice(0, maxlength);
      }

      if (type === 'number' || type === 'digit') {
        const isNumber = type === 'number';
        finalValue = formatNumber(finalValue, isNumber, isNumber);
      }

      finalValue = formatValue(finalValue, 'onChange');

      // if (inputRef.value && inputValue !== inputRef.value.value) {
      //   inputRef.value.value = inputValue;
      // }

      if (onChange && typeof onChange === 'function') {
        onChange(finalValue);
      }
    };

    const handleFocus = (e) => {
      const { onFocus } = props;
      setInputFocus(true);
      if (onFocus && typeof onFocus === 'function') {
        onFocus(e);
      }

      // readonly not work in legacy mobile safari
      if (readonly) {
        blur();
      }
    };

    const handleBulr = (e) => {
      const { onBlur } = props;
      setInputFocus(false);
      if (onBlur && typeof onBlur === 'function') {
        onBlur(e);
      }
      resetScroll();
    };

    const handleKeypress = (e) => {
      const { onKeypress } = props;

      if (e.key === 'Enter' || +e.charCode === 13) {
        if (props.type !== 'textarea') {
          preventDefault(e);
        }
        // trigger blur after click keyboard search button
        if (props.type === 'search') {
          blur();
        }
      }

      if (onKeypress && typeof onKeypress === 'function') {
        onKeypress(e);
      }
    };

    if (type === 'textarea') {
      return (
        <textarea
          ref={inputRef}
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
        ref={inputRef}
        name={name}
        className={clsx(controlClass)}
        disabled={disabled}
        readOnly={readonly}
        placeholder={placeholder || ''}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyPress={handleKeypress}
      />
    );
  };

  const renderLeftIcon = () => {
    const { leftIcon, onClickLeftIcon } = props;
    if (!leftIcon) return null;
    return (
      <div className={clsx(bem('left-icon'))} onClick={onClickLeftIcon}>
        {typeof leftIcon !== 'string' ? (
          leftIcon
        ) : (
          <Icon name={leftIcon} classPrefix={props.iconPrefix} />
        )}
      </div>
    );
  };

  const renderRightIcon = () => {
    const { rightIcon, iconPrefix, onClickRightIcon } = props;
    if (!rightIcon) return null;
    return (
      <div className={clsx(bem('right-icon'))} onClick={onClickRightIcon}>
        {typeof rightIcon === 'string' ? (
          <Icon name={rightIcon} classPrefix={iconPrefix} />
        ) : (
          rightIcon
        )}
      </div>
    );
  };

  const renderWordLimit = () => {
    const { value, showWordLimit, maxlength } = props;
    if (showWordLimit && maxlength) {
      const count = (value ? `${value}` : '').length;
      return (
        <div className={clsx(bem('word-limit'))}>
          <span className={clsx(bem('word-num'))}>{count}</span>/{maxlength}
        </div>
      );
    }

    return null;
  };

  const renderMessage = () => {
    const message = props.errorMessage;

    if (message) {
      const errorMessageAlign = getProp('errorMessageAlign');
      return <div className={clsx(bem('error-message', errorMessageAlign))}>{message}</div>;
    }
    return null;
  };

  const renderIntro = () => {
    if (props.intro) {
      return <div className={clsx(bem('intro', getProp('inputAlign')))}>{props.intro}</div>;
    }
    return null;
  };

  const renderTooltip = () => {
    const { tooltip } = props;
    if (tooltip) {
      let icon = (<Icon name="question-o" />) as React.ReactNode;
      let dialogProps = { message: tooltip };
      if (!(React.isValidElement(tooltip) || typeof tooltip === 'string')) {
        const { icon: customIcon, ...customDialogProps } = tooltip as FieldTooltipProps;
        icon = customIcon || icon;
        dialogProps = customDialogProps as typeof dialogProps;
      }

      return (
        <div className={clsx(bem('tooltip'))} onClick={() => Dialog.show(dialogProps)}>
          {icon}
        </div>
      );
    }
    return null;
  };

  const renderLabel = () => {
    const { label, colon } = props;

    if (label) {
      return (
        <>
          {label}
          {colon && ':'}
          {renderTooltip()}
        </>
      );
    }
    return null;
  };

  const handleClear = (e) => {
    const { onClear, onChange } = props;
    inputRef.current.value = '';
    if (onChange && typeof onChange === 'function') {
      onChange('');
    }
    if (onClear && typeof onClear === 'function') {
      onClear(e);
    }
  };

  const {
    type,
    size,
    center,
    border,
    isLink,
    required,
    clickable,
    labelAlign,
    className,
    labelClass,
    valueClass,
    arrowDirection,
    autosize,
    disabled,
    button,
    titleStyle,
    error,
  } = props;

  return (
    <Cell
      title={renderLabel()}
      size={size}
      icon={renderLeftIcon()}
      center={center}
      border={border}
      isLink={isLink}
      required={required}
      clickable={clickable}
      extra={props.extra}
      titleStyle={{ ...labelStyle(), ...titleStyle }}
      valueClass={clsx(bem('value'), valueClass)}
      titleClass={clsx(bem('label', labelAlign), labelClass)}
      arrowDirection={arrowDirection}
      onClick={props.onClick}
      style={props.style}
      className={clsx(
        bem({
          error,
          disabled,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': type === 'textarea' && !autosize,
        }),
        className,
      )}
    >
      <div className={clsx(bem('body'))}>
        {props.prefix && <div className={clsx(bem('prefix'))}>{props.prefix}</div>}
        <div className={clsx(bem('control-wrapper'))} onClick={props.onClickInput}>
          {renderInput()}
        </div>
        {showClear &&
          (typeof props.clearIcon === 'string' ? (
            <Icon
              className={clsx(bem('clear'))}
              onTouchStart={handleClear}
              name={props.clearIcon}
              size={ICON_SIZE}
            />
          ) : (
            props.clearIcon
          ))}
        {renderRightIcon()}
        {button && <div className={clsx(bem('button'))}>{button}</div>}
      </div>
      {renderWordLimit()}
      {renderMessage()}
      {renderIntro()}
    </Cell>
  );
});

Field.defaultProps = {
  clearIcon: 'clear',
  clearTrigger: 'focus',
  formatTrigger: 'onChange',
};

export const FIELD_KEY = Symbol('field');

const FieldNamespace = Object.assign(Field, { [COMPONENT_TYPE_KEY]: FIELD_KEY });

export default FieldNamespace;
