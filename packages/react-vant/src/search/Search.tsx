import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { SearchInstance, SearchProps } from './PropsType';
import { preventDefault } from '../utils';

// Components
import Field, { FieldInstance } from '../field';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Search = forwardRef<SearchInstance, SearchProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('search', prefixCls);

  const filedRef = useRef<FieldInstance>();
  const innerEffect = useRef<boolean>(false);
  const [value, setValue] = useState(() => props.value);

  const blur = () => {
    filedRef.current?.blur();
  };

  const focus = () => {
    filedRef.current?.focus();
  };

  const change = (v) => {
    innerEffect.current = true;
    props?.onChange?.(v);
    setValue(v);
  };

  const onCancel = () => {
    if (typeof props.actionText === 'string') {
      change('');
      props?.onCancel?.();
    }
  };

  const onKeypress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      preventDefault(event.nativeEvent);
      props?.onSearch?.(value);
    }
  };

  const onClear = (event: React.MouseEvent<HTMLDivElement>) => {
    change('');
    props?.onClear?.(event);
  };

  const onClickInput = (event: React.MouseEvent<HTMLDivElement>) => {
    props?.onClickInput?.(event);
  };

  const renderLabel = () => {
    if (props.label) {
      return <div className={clsx(bem('label'))}>{props.label}</div>;
    }
    return null;
  };

  const renderAction = () => {
    if (props.showAction) {
      return (
        <div className={clsx(bem('action'))} role="button" tabIndex={0} onClick={onCancel}>
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
        className={clsx(bem('field'))}
        type="search"
        rows={1}
        value={value || ''}
        border={false}
        onKeypress={onKeypress}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={change}
        onClear={onClear}
        onClickInput={onClickInput}
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
      className={clsx(props.className, bem({ 'show-action': props.showAction }))}
      style={{ ...props.style, background: props.background }}
    >
      <div className={clsx(bem('content', props.shape))}>
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
