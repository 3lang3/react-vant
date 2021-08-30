import React from 'react';
import classnames from 'classnames';
import { SearchProps } from './PropsType';
import { createNamespace, preventDefault } from '../utils';

// Components
import Field from '../field';

const [bem] = createNamespace('search');

const Search: React.FC<SearchProps> = (props) => {
  const { label, shape = 'square', showAction, actionText, value, background } = props;
  const { onCancel, onClear, onSearch, onChange, onFocus, onBlur } = props;

  const handleCancel = (e) => {
    onCancel(e);
  };

  const handleKeypress = (event) => {
    const ENTER_CODE = 13;
    if (event.keyCode === ENTER_CODE) {
      preventDefault(event);
      onSearch(value);
    }
  };

  const renderLabel = () => {
    if (label) {
      return <div className={classnames(bem('label'))}>{label}</div>;
    }
    return '';
  };

  const {
    disabled = false,
    maxlength,
    leftIcon = 'search',
    rightIcon,
    clearable = true,
    modelValue,
    clearTrigger,
    placeholder,
  } = props;
  const fieldPropNames = {
    leftIcon,
    rightIcon,
    clearable,
    modelValue,
    clearTrigger,
    placeholder,
    disabled,
    maxlength,
  };

  const renderField = () => {
    return (
      <Field
        type="search"
        value={value}
        border={false}
        rows={1}
        onClear={onClear}
        onKeypress={handleKeypress}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        {...fieldPropNames}
      />
    );
  };

  const renderAction = () => {
    if (showAction) {
      const text = actionText || 'cancel';
      return (
        <div className={classnames(bem('action'))} onClick={handleCancel}>
          {text}
        </div>
      );
    }
    return '';
  };

  return (
    <div className={classnames(bem({ 'show-action': showAction }))} style={{ background }}>
      <div className={classnames(bem('content', shape))}>
        {renderLabel()}
        {renderField()}
      </div>
      {renderAction()}
    </div>
  );
};

export default Search;
