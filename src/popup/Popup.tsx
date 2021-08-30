/* eslint-disable no-plusplus */
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import Icon from '../icon';
import Overlay from '../overlay';
import useLockScroll from '../hooks/use-lock-scroll';
import useEventListener from '../hooks/use-event-listener';

import { createNamespace, isDef } from '../utils';
import { PopupInstanceType, PopupProps } from './PropsType';
import { callInterceptor } from '../utils/interceptor';
import { renderToContainer } from '../utils/dom/renderToContainer';

const [bem] = createNamespace('popup');

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
  const { round, visible, closeable, title, descrition, children, duration, closeIcon, position } =
    props;
  const popupRef = useRef<HTMLDivElement>();
  const [zIndex] = useState<number>(2000);
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);

  const style = useMemo(() => {
    const initStyle = {
      zIndex,
      ...props.style,
    };

    if (isDef(props.duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${props.duration}ms`;
    }
    return initStyle;
  }, [zIndex]);

  const close = () => {
    callInterceptor({
      interceptor: props.beforeClose,
      args: ['close'],
      done: () => {
        props.onClose?.();
      },
    });
  };

  const onClickOverlay = (event) => {
    props.onClickOverlay?.(event);

    if (props.closeOnClickOverlay) {
      close();
    }
  };

  const renderOverlay = () => {
    if (props.overlay) {
      return (
        <Overlay
          visible={visible}
          className={props.overlayClass}
          customStyle={props.overlayStyle}
          zIndex={zIndex}
          duration={duration}
          onClick={onClickOverlay}
        />
      );
    }
    return null;
  };

  const onClickCloseIcon = (e) => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon(e);
    }
    close();
  };

  const renderCloseIcon = () => {
    if (closeable) {
      const { closeIconPosition } = props;
      return (
        <Icon
          name={closeIcon}
          className={classnames(bem('close-icon', closeIconPosition))}
          classPrefix={props.iconPrefix}
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

  const renderPopup = () => {
    const { safeAreaInsetBottom } = props;
    return (
      <div
        ref={popupRef}
        style={{ ...style, display: !visible && !animatedVisible ? 'none' : undefined }}
        className={classnames(
          bem({
            round,
            [position]: position,
          }),
          { 'safe-area-inset-bottom': safeAreaInsetBottom },
        )}
        onClick={props.onClick}
      >
        {renderTitle()}
        {renderDescrition()}
        {children}
        {renderCloseIcon()}
      </div>
    );
  };

  const renderTransition = () => {
    const { transition, destroyOnClose, forceRender } = props;
    const name = position === 'center' ? 'rv-fade' : `rv-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible}
        timeout={duration}
        classNames={transition || name}
        mountOnEnter={!forceRender}
        unmountOnExit={destroyOnClose}
        onEnter={props.onOpen}
        onEntered={props.onOpened}
        onExited={() => {
          setAnimatedVisible(false);
          props.onClosed?.();
        }}
      >
        {renderPopup()}
      </CSSTransition>
    );
  };

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

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

  return renderToContainer(
    props.teleport,
    <>
      {renderOverlay()}
      {renderTransition()}
    </>,
  );
});

Popup.defaultProps = {
  duration: 300,
  overlay: true,
  lockScroll: true,
  position: 'center',
  closeIcon: 'cross',
  closeIconPosition: 'top-right',
  closeOnClickOverlay: true,
};

export default Popup;
