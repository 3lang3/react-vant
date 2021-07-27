import React, { useMemo, useState, useEffect } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import Icon from '../icon';
import Overlay from '../overlay';
import useLockScroll from '../hooks/use-lock-scroll';
import useEventListener from '../hooks/use-event-listener';

import { createNamespace } from '../utils';
import { PopupProps } from './PropsType';

const [bem] = createNamespace('popup');

const Popup: React.FC<PopupProps> = (props) => {
  const {
    round,
    visible,
    closeable,
    title,
    descrition,
    children,
    duration = 300,
    closeIcon = 'cross',
    position = 'center',
  } = props;

  const [zIndex] = useState<number>(2000);
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);

  useEventListener('popstate', () => {
    if (props.closeOnPopstate) {
      props.onClose?.();
    }
  });

  useEffect(() => {
    if (visible) {
      lockScroll();
      setAnimatedVisible(true);
    } else {
      unlockScroll();
    }
  }, [visible]);

  const renderOverlay = () => {
    const { overlay = true, overlayClosable = true, onClickOverlay, onClose } = props;

    if (overlay) {
      return (
        <Overlay
          visible={visible}
          className={props.overlayClass}
          customStyle={props.overlayStyle}
          zIndex={zIndex}
          duration={props.duration}
          onClick={() => {
            if (onClickOverlay && typeof onClickOverlay === 'function') {
              onClickOverlay();
            }
            if (overlayClosable) {
              onClose();
            }
          }}
        />
      );
    }
    return null;
  };

  const style = useMemo(() => {
    const initStyle = {
      zIndex,
      ...props.style,
    };
    return initStyle;
  }, [zIndex]);

  const onClickCloseIcon = () => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon();
    }
    props.onClose();
  };

  const renderCloseIcon = () => {
    if (closeable) {
      const { closeIconPosition = 'top-right' } = props;
      return (
        <Icon
          name={closeIcon}
          className={classnames(bem('close-icon', closeIconPosition))}
          onClick={onClickCloseIcon}
        />
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (title) {
      return <div className={classnames(bem('title'))}>{title}</div>;
    }
    return null;
  };

  const renderDescrition = () => {
    if (descrition) {
      return <div className={classnames(bem('descrition'))}>{descrition}</div>;
    }
    return null;
  };

  const renderTransition = () => {
    const { transition, destroyOnClose = false, forceRender = false, safeAreaInsetBottom } = props;
    const name = position === 'center' ? 'rv-fade' : `rv-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible}
        timeout={duration}
        classNames={transition || name}
        mountOnEnter={!forceRender}
        unmountOnExit={destroyOnClose}
        onExited={() => {
          setAnimatedVisible(false);
          if (props.onClosed && typeof props.onClosed === 'function') {
            props.onClosed();
          }
        }}
      >
        <div
          style={{ ...style, display: !animatedVisible && 'none' }}
          className={classnames(
            bem({
              round,
              [position]: position,
              'safe-area-inset-bottom': safeAreaInsetBottom,
            }),
            props.className,
          )}
        >
          {renderCloseIcon()}
          {renderTitle()}
          {renderDescrition()}
          {children}
        </div>
      </CSSTransition>
    );
  };

  return (
    <div>
      {renderOverlay()}
      {renderTransition()}
    </div>
  );
};

Popup.defaultProps = {
  position: 'center',
  lockScroll: true,
};

export default Popup;
