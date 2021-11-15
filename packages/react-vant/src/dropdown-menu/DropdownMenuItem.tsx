// Components
import clsx from 'clsx';
import React, { CSSProperties, forwardRef, useImperativeHandle, useContext } from 'react';
import Cell from '../cell';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { useSetState } from '../hooks';
import useSsrCompat from '../hooks/use-ssr-compat';
import Icon from '../icon';
import Popup from '../popup';
import { getZIndexStyle, pick } from '../utils';
import { renderToContainer } from '../utils/dom/renderToContainer';
import DropdownMenuContext from './DropdownMenuContext';
import { DropdownMenuItemProps, DropdownMenuItemOption, DropdownItemInstance } from './PropsType';

const inheritPropsKey = [
  'overlay',
  'overlayClass',
  'overlayStyle',
  'disabled',
  'placeholder',
  'onOpen',
  'onClosed',
  'onOpened',
  'teleport',
  'closeOnClickOverlay',
] as const;

function inheritProps(parentProps, props) {
  return { ...parentProps, ...props };
}

const DropdownMenuItem = forwardRef<DropdownItemInstance, DropdownMenuItemProps>((props, ref) => {
  const [state, setState] = useSetState({
    transition: true,
    showWrapper: false,
  });
  const [ssrCompatRender] = useSsrCompat();

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('dropdown-item', prefixCls);
  const parent = useContext(DropdownMenuContext);
  const currentValue = parent.value?.[props.name];

  const onClosed = () => {
    setState({ showWrapper: false });
    (props.onClosed ?? parent.props.onClosed)?.();
  };

  const onClickWrapper = (event) => {
    // prevent being identified as clicking outside and closed when using teleport
    if (props.teleport) {
      event.stopPropagation();
    }
  };

  const onClose = () => {
    parent.close();
    (props.onClose ?? parent.props.onClose)?.();
  };

  const toggle = (show = !props.showPopup, options: { immediate?: boolean } = {}) => {
    if (show === props.showPopup) {
      return;
    }
    const newState = {} as typeof state;
    newState.transition = !options.immediate;

    if (show) {
      newState.showWrapper = true;
    } else {
      onClose();
    }
    setState(newState);
  };

  const renderTitle = (itemValue) => {
    if (props.title) {
      return props.title;
    }
    const match = props.options.find((option) => option.value === itemValue);
    return match ? match.text : props.placeholder;
  };

  const renderOption = (option: DropdownMenuItemOption) => {
    const { activeColor } = parent.props;
    const active = option.value === currentValue;

    const onClick = () => {
      if (option.value !== currentValue) {
        parent.onChange({ [props.name]: option.value });
      }
      onClose();
    };

    return (
      <Cell
        clickable
        key={option.value}
        icon={option.icon}
        title={option.text}
        className={clsx(bem('option', { active }))}
        style={{ color: active ? activeColor : '' }}
        onClick={onClick}
      >
        {active && <Icon className={clsx(bem('icon'))} color={activeColor} name="success" />}
      </Cell>
    );
  };

  const renderContent = () => {
    const { offset } = props;
    const { zIndex, overlayStyle, duration, direction } = parent.props;

    const style: CSSProperties = getZIndexStyle(zIndex);
    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }

    const attrs = pick(inheritProps(parent.props, props), inheritPropsKey);
    return (
      <div
        style={{ ...style, display: state.showWrapper ? 'block' : 'none' }}
        className={clsx(bem([direction]))}
        onClick={onClickWrapper}
      >
        <Popup
          {...attrs}
          teleport={null}
          visible={props.showPopup}
          className={clsx(bem('content'))}
          position={direction === 'down' ? 'top' : 'bottom'}
          duration={state.transition ? +duration : 0}
          overlayStyle={{ position: 'absolute', ...overlayStyle }}
          onClose={onClose}
          onClosed={onClosed}
        >
          {props.options?.map(renderOption)}
          {props.children}
        </Popup>
      </div>
    );
  };

  useImperativeHandle(ref, () => ({
    toggle,
    renderTitle,
    state,
    titleClass: props.titleClass,
    disabled: props.disabled,
    name: props.name,
    options: props.options,
  }));

  if (props.teleport)
    return ssrCompatRender(() => renderToContainer(props.teleport, renderContent()));
  return renderContent();
});

DropdownMenuItem.defaultProps = {
  placeholder: '请选择',
  options: [],
};

export default DropdownMenuItem;
