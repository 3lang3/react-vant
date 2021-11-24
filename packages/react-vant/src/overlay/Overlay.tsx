import React, { CSSProperties, TouchEvent, useContext, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { OverlayProps } from './PropsType';
import { noop, preventDefault, isDef } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import useLockScroll from '../hooks/use-lock-scroll';

const Overlay: React.FC<OverlayProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('overlay', prefixCls);
  const nodeRef = useRef(null);
  const { visible, duration } = props;
  const [lockScroll, unlockScroll] = useLockScroll(() => props.lockScroll);
  const innerLockRef = useRef(false);

  const preventTouchMove = (event: TouchEvent) => {
    preventDefault(event, true);
  };

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      ...props.style,
      ...props.customStyle,
    };

    if (isDef(duration)) {
      style.animationDuration = `${duration}ms`;
    }

    return (
      <div
        ref={nodeRef}
        style={style}
        onClick={props.onClick}
        className={clsx(bem(), props.className)}
        onTouchMove={props.lockScroll ? preventTouchMove : noop}
      >
        {props.children}
      </div>
    );
  };

  useEffect(() => {
    if (!props.lockScroll) return;
    if (visible) {
      lockScroll();
      innerLockRef.current = true;
    }
    if (!visible && innerLockRef.current) {
      unlockScroll();
      innerLockRef.current = false;
    }
  }, [visible]);

  useEffect(() => {
    return () => {
      if (props.lockScroll) unlockScroll();
    };
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={visible}
      timeout={duration}
      classNames={`${prefixCls}-fade`}
    >
      {renderOverlay()}
    </CSSTransition>
  );
};

Overlay.defaultProps = {
  lockScroll: true,
  duration: 300,
};

export default Overlay;
