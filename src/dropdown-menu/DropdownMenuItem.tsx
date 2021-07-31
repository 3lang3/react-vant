// Components
import classnames from 'classnames';
import React, { CSSProperties, useState, forwardRef, useImperativeHandle } from 'react';
import Cell from '../cell';
import Icon from '../icon';
import Popup from '../popup';
import { createNamespace, getZIndexStyle } from '../utils';
import { DropdownMenuItemProps, DropdownMenuItemOption } from './PropsType';

const [bem] = createNamespace('dropdown-item');

const DropdownMenuItem = forwardRef<{}, DropdownMenuItemProps>((props, ref) => {
  const [state, setState] = useState({
    showPopup: false,
    transition: true,
    showWrapper: false,
  });

  const currentValue = props.parentValue?.[props.name];

  const onClose = () => {
    setState((v) => ({ ...v, showPopup: false }));
  };

  const onClosed = () => {
    setState((v) => ({ ...v, showWrapper: false }));
  };

  const toggle = (show = !state.showPopup, options: { immediate?: boolean } = {}) => {
    if (show === state.showPopup) {
      return;
    }
    const newState = {} as typeof state;
    newState.showPopup = show;
    newState.transition = !options.immediate;

    if (show) {
      newState.showWrapper = true;
    }
    setState((v) => ({ ...v, ...newState }));
  };

  const renderTitle = (itemValue) => {
    if (props.title) {
      return props.title;
    }
    const match = props.options.find((option) => option.value === itemValue);
    return match ? match.text : props.placeholder;
  };

  useImperativeHandle(ref, () => ({
    toggle,
    renderTitle,
    state: () => state,
    props: {
      titleClass: props.titleClass,
      disabled: props.disabled,
      name: props.name,
      options: props.options,
    },
  }));

  const renderOption = (option: DropdownMenuItemOption) => {
    const { activeColor } = props.parentProps;
    const active = option.value === currentValue;

    const onClick = () => {
      const newState = {} as typeof state;
      newState.showPopup = false;
      setState((v) => ({ ...v, ...newState }));
      if (option.value !== currentValue) {
        // emit('update:modelValue', option.value);
        // emit('change', option.value);
        props.onChange?.({ [props.name]: option.value });
      }
    };

    return (
      <Cell
        clickable
        key={option.value}
        icon={option.icon}
        title={option.text}
        className={classnames(bem('option', { active }))}
        style={{ color: active ? activeColor : '' }}
        onClick={onClick}
      >
        {active && <Icon className={classnames(bem('icon'))} color={activeColor} name="success" />}
      </Cell>
    );
  };

  const renderContent = () => {
    const { offset } = props;
    const { zIndex, overlay, duration, direction, closeOnClickOverlay } = props.parentProps;

    const style: CSSProperties = getZIndexStyle(zIndex);

    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }
    return (
      <div
        style={{ ...style, display: state.showWrapper ? 'block' : 'none' }}
        className={classnames(bem([direction]))}
      >
        <Popup
          visible={state.showPopup}
          className={classnames(bem('content'))}
          overlay={overlay}
          position={direction === 'down' ? 'top' : 'bottom'}
          duration={state.transition ? +duration : 0}
          overlayStyle={{ position: 'absolute' }}
          overlayClosable={closeOnClickOverlay}
          onClose={onClose}
          afterClose={onClosed}
        >
          {props.options.map(renderOption)}
          {props.children}
        </Popup>
      </div>
    );
  };

  return renderContent();
});

DropdownMenuItem.defaultProps = {
  placeholder: '请选择',
};

export default DropdownMenuItem;
