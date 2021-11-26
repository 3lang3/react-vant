/* eslint-disable no-plusplus */
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import Icon from '../icon';
import Overlay from '../overlay';
import useEventListener from '../hooks/use-event-listener';

import { isDef } from '../utils';
import { PopupInstanceType, PopupProps } from './PropsType';
import { callInterceptor } from '../utils/interceptor';
import { renderToContainer } from '../utils/dom/renderToContainer';
import useSsrCompat from '../hooks/use-ssr-compat';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import PopupContext from './PopupContext';

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

let globalZIndex = 2000;

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('popup', prefixCls);

  const { round, visible, closeable, title, descrition, children, duration, closeIcon, position } =
    props;
  const opened = useRef(false);
  const zIndex = useRef<number>(props.zIndex ?? globalZIndex);
  const popupRef = useRef<HTMLDivElement>();
  const [animatedVisible, setAnimatedVisible] = useState(visible);
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
      zIndex.current = +props.zIndex;
    } else {
      zIndex.current = globalZIndex++;
    }

    opened.current = true;
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
          lockScroll={props.lockScroll}
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
      if (typeof closeIcon === 'string') {
        return (
          <Icon
            name={closeIcon}
            className={clsx(bem('close-icon', closeIconPosition))}
            classPrefix={props.iconPrefix}
            onClick={onClickCloseIcon}
          />
        );
      }
      return (
        <div className={clsx(bem('close-icon', closeIconPosition))} onClick={onClickCloseIcon}>
          {closeIcon}
        </div>
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (title) {
      return <div className={clsx(bem('title'))}>{title}</div>;
    }
    return null;
  };

  const renderDescrition = () => {
    if (descrition) {
      return <div className={clsx(bem('descrition'))}>{descrition}</div>;
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
          display: !visible && !animatedVisible ? 'none' : undefined,
        }}
        className={clsx(
          bem({
            round,
            [position]: position,
          }),
          { 'rv-safe-area-bottom': safeAreaInsetBottom },
          props.className,
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
    const name =
      position === 'center' ? `${prefixCls}-fade` : `${prefixCls}-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible && rendered}
        /**
         * https://github.com/reactjs/react-transition-group/pull/559
         */
        nodeRef={popupRef}
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
      setAnimatedVisible(true);
    }
  }, [visible, rendered]);

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

  return ssrCompatRender(() =>
    renderToContainer(
      props.teleport,
      <PopupContext.Provider value={{ visible }}>
        {renderOverlay()}
        {renderTransition()}
      </PopupContext.Provider>,
    ),
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
  teleport: () => document.body,
};

export default Popup;
