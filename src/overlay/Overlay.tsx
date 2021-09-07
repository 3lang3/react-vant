import React, { CSSProperties, TouchEvent, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import { OverlayProps } from './PropsType';
import { noop, createNamespace, preventDefault, isDef } from '../utils';

const [bem] = createNamespace('overlay');

const OverLay: React.FC<OverlayProps> = (props) => {
  const { duration } = props;
  const [visible, setVisible] = useState(false);

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
        style={style}
        onClick={props.onClick}
        className={classnames(bem(), props.className)}
        onTouchMove={props.lockScroll ? preventTouchMove : noop}
      >
        {props.children}
      </div>
    );
  };

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  return (
    <CSSTransition mountOnEnter unmountOnExit in={visible} timeout={duration} classNames="rv-fade">
      {renderOverlay()}
    </CSSTransition>
  );
};

OverLay.defaultProps = {
  lockScroll: true,
  duration: 300,
};

export default OverLay;
