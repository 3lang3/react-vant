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
import useSsrCompat from '../hooks/use-ssr-compat';

export const sharedPopupProps = [
  'round',
  'zIndex',
  'closeable',
  'overlay',
  'overlayClass',
  'overlayStyle',
  'destroyOnClose',
  'forceRender',
  'lockScroll',
  'duration',
  'transition',
  'closeOnClickOverlay',
  'closeOnPopstate',
  'onClickOverlay',
  'safeAreaInsetBottom',
  'onOpen',
  'onClose',
  'onOpened',
  'onClosed',
  'beforeClose',
] as const;

const [bem] = createNamespace('popup');

let globalZIndex = 2000;

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
  const { round, visible, closeable, title, descrition, children, duration, closeIcon, position } =
    props;
  const opened = useRef(false);
  const zIndex = useRef(globalZIndex);
  const popupRef = useRef<HTMLDivElement>();
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);
  const [ssrCompatRender, rendered] = useSsrCompat();

  const style = useMemo(() => {
    const initStyle = {
      zIndex: zIndex.current,
      ...props.style,
    };

    if (isDef(props.duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${props.duration}ms`;
    }
    return initStyle;
  }, [zIndex.current, props.style, props.duration]);

  const open = () => {
    if (props.zIndex !== undefined) {
      globalZIndex = +props.zIndex;
    }

    opened.current = true;
    zIndex.current = ++globalZIndex;

    props.onOpen?.();
  };

  const close = () => {
    if (opened.current) {
      callInterceptor({
        interceptor: props.beforeClose,
        args: ['close'],
        done: () => {
          opened.current = false;
          props.onClose?.();
        },
      });
    }
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
          visible={visible && rendered}
          className={props.overlayClass}
          customStyle={props.overlayStyle}
          zIndex={zIndex.current}
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
        style={{
          ...style,
          display: !visible && !rendered && !animatedVisible ? 'none' : undefined,
        }}
        className={classnames(
          props.className,
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
        in={visible && rendered}
        timeout={duration}
        classNames={transition || name}
        mountOnEnter={!forceRender}
        unmountOnExit={destroyOnClose}
        onEnter={open}
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
      close();
    }
  });

  useEffect(() => {
    if (!rendered) return;
    if (visible) {
      lockScroll();
      setAnimatedVisible(true);
    } else {
      unlockScroll();
    }
  }, [visible, rendered]);

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

  return ssrCompatRender(() =>
    renderToContainer(
      props.teleport,
      <>
        {renderOverlay()}
        {renderTransition()}
      </>,
    ),
  );
});

Popup.defaultProps = {
  zIndex: 2000,
  duration: 300,
  overlay: true,
  lockScroll: true,
  position: 'center',
  closeIcon: 'cross',
  closeIconPosition: 'top-right',
  closeOnClickOverlay: true,
  teleport: () => document.body,
};

export default Popup;
