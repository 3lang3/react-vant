import React, { CSSProperties, TouchEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import { OverlayProps } from './PropsType';
import { noop, createNamespace, preventDefault, isDef } from '../utils';

const [bem] = createNamespace('overlay');

const OverLay: React.FC<OverlayProps> = (props) => {
  const preventTouchMove = (event: TouchEvent) => {
    preventDefault(event, true);
  };

  const { show, duration = 300 } = props;

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
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

  return (
    <CSSTransition in={show} timeout={duration} classNames="rk-fade" mountOnEnter unmountOnExit>
      {renderOverlay()}
    </CSSTransition>
  );
};

export default OverLay;
