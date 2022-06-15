import React, { CSSProperties, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { OverlayProps } from './PropsType';
import { isDef, preventDefault } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { useEventListener } from '../hooks';

const Overlay: React.FC<OverlayProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('overlay', prefixCls);
  const nodeRef = useRef(null);
  const { visible, duration } = props;

  const preventTouchMove = (event: TouchEvent) => {
    if (!props.lockScroll) return;
    preventDefault(event, true);
  };

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      touchAction: props.lockScroll && 'none',
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
      >
        {props.children}
      </div>
    );
  };

  useEventListener('touchmove', preventTouchMove, { target: nodeRef });

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
