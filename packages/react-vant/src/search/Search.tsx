import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';
import { SearchInstance, SearchProps } from './PropsType';
import { createNamespace, preventDefault } from '../utils';

// Components
import Field, { FieldInstance } from '../field';

const [bem] = createNamespace('search');

const Search = forwardRef<SearchInstance, SearchProps>((props, ref) => {
  const filedRef = useRef<FieldInstance>();
  const innerEffect = useRef<boolean>(false);
  const [value, setValue] = useState(() => props.value);

  const blur = () => filedRef.current?.blur();
  const focus = () => filedRef.current?.focus();
  const change = (v) => {
    innerEffect.current = true;
    props.onChange?.(v);
    setValue(v);
  };

  const onCancel = () => {
    if (typeof props.actionText === 'string') {
      change('');
      props.onCancel?.();
    }
  };

  const onKeypress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      preventDefault(event.nativeEvent);
      props.onSearch?.(value);
    }
  };

  const renderLabel = () => {
    if (props.label) {
      return <div className={classnames(bem('label'))}>{props.label}</div>;
    }
    return null;
  };

  const renderAction = () => {
    if (props.showAction) {
      return (
        <div className={classnames(bem('action'))} role="button" tabIndex={0} onClick={onCancel}>
          {props.actionText}
        </div>
      );
    }
    return null;
  };

  const {
    disabled = false,
    maxlength,
    leftIcon,
    rightIcon,
    clearable = true,
    clearTrigger,
    placeholder,
    inputAlign,
    readonly,
    error,
    errorMessage,
    formatter,
    formatTrigger,
    clearIcon,
  } = props;

  const fieldPropNames = {
    leftIcon,
    rightIcon,
    clearable,
    clearTrigger,
    placeholder,
    disabled,
    maxlength,
    inputAlign,
    readonly,
    error,
    errorMessage,
    formatter,
    formatTrigger,
    clearIcon,
  };

  const renderField = () => {
    return (
      <Field
        ref={filedRef}
        type="search"
        rows={1}
        value={value || ''}
        border={false}
        onKeypress={onKeypress}
        onFocus={focus}
        onBlur={blur}
        onChange={change}
        {...fieldPropNames}
      />
    );
  };

  useEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    setValue(props.value);
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));

  return (
    <div
      className={classnames(props.className, bem({ 'show-action': props.showAction }))}
      style={{ ...props.style, background: props.background }}
    >
      <div className={classnames(bem('content', props.shape))}>
        {renderLabel()}
        {renderField()}
      </div>
      {renderAction()}
    </div>
  );
});

Search.defaultProps = {
  shape: 'square',
  leftIcon: 'search',
  actionText: '取消',
  inputAlign: 'left',
} as const;

export default Search;
