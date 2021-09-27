import React, { useContext } from 'react';
import classnames from 'classnames';
import { ActionSheetProps, ActionSheetAction } from './PropsType';
import { pick } from '../utils';
import Icon from '../icon';
import Loading from '../loading';
import Popup from '../popup';
import { sharedPopupProps } from '../popup/Popup';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const { prefixCls,  createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('action-sheet', prefixCls);

  const onCancel = () => {
    props.onClose?.();
    props.onCancel?.();
  };

  const renderHeader = () => {
    if (!props.title) return null;
    return (
      <div className={classnames(bem('header'))}>
        {props.title}
        {props.closeable &&
          (typeof props.closeIcon === 'string' ? (
            <Icon name={props.closeIcon} className={classnames(bem('close'))} onClick={onCancel} />
          ) : (
            <div className={classnames(bem('close'))} onClick={onCancel}>
              {props.closeIcon}
            </div>
          ))}
      </div>
    );
  };

  const renderCancel = () => {
    if (!props.cancelText) return null;
    return [
      <div key="cancel-gap" className={classnames(bem('gap'))} />,
      <button
        key="cancel-btn"
        type="button"
        className={classnames(bem('cancel'))}
        onClick={onCancel}
      >
        {props.cancelText}
      </button>,
    ];
  };

  const renderOption = (item: ActionSheetAction, index: number) => {
    const { name, color, subname, loading, callback, disabled, className, style } = item;

    const Content = loading ? (
      <Loading className={classnames(bem('loading-icon'))} />
    ) : (
      [
        <span key={`${index}-1`} className={classnames(bem('name'))}>
          {name}
        </span>,
        subname && (
          <div key={`${index}-2`} className={classnames(bem('subname'))}>
            {subname}
          </div>
        ),
      ]
    );

    const onClick = () => {
      if (disabled || loading) {
        return;
      }

      if (callback) {
        callback(item);
      }

      if (props.closeOnClickAction) {
        onCancel();
      }
      setTimeout(() => {
        props.onSelect?.(item, index);
      }, 0);
    };

    return (
      <button
        key={index}
        type="button"
        style={{ color, ...style }}
        className={classnames(bem('item', { loading, disabled }), className)}
        onClick={onClick}
      >
        {Content}
      </button>
    );
  };

  const renderDescription = () => {
    if (props.description) {
      return <div className={classnames(bem('description'))}>{props.description}</div>;
    }
    return null;
  };

  const renderOptions = () => {
    if (props.actions) {
      return props.actions.map(renderOption);
    }
    return null;
  };

  return (
    <Popup
      visible={props.visible}
      className={classnames(bem())}
      position="bottom"
      {...pick(props, sharedPopupProps)}
      onClose={onCancel}
      closeable={false}
    >
      {renderHeader()}
      {renderDescription()}
      <div className={classnames(bem('content'))}>
        {renderOptions()}
        {props.children}
      </div>
      {renderCancel()}
    </Popup>
  );
};

ActionSheet.defaultProps = {
  closeIcon: 'cross',
  closeable: true,
  safeAreaInsetBottom: true,
  round: true,
  lockScroll: true,
  overlay: true,
  closeOnClickOverlay: true,
};

export default ActionSheet;
