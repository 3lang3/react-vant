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

const [bem] = createNamespace('popup');

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
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

  const popupRef = useRef<HTMLDivElement>();
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

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

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
          onClick={(e) => {
            if (onClickOverlay && typeof onClickOverlay === 'function') {
              onClickOverlay(e);
            }
            if (overlayClosable) {
              onClose?.();
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

    if (isDef(props.duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${props.duration}s`;
    }
    return initStyle;
  }, [zIndex]);

  const onClickCloseIcon = (e) => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon(e);
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
        onEntered={props.onEntered}
        onExited={() => {
          setAnimatedVisible(false);
          if (props.afterClose && typeof props.afterClose === 'function') {
            props.afterClose();
          }
        }}
      >
        <div
          ref={popupRef}
          style={{ ...style, display: !visible && !animatedVisible ? 'none' : undefined }}
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
    <>
      {renderOverlay()}
      {renderTransition()}
    </>
  );
});

Popup.defaultProps = {
  position: 'center',
  lockScroll: true,
};

export default Popup;
