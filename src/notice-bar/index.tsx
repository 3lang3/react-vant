/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import Icon from '../icon';

import useRect from '../hooks/use-rect';
import useEventListener from '../hooks/use-event-listener';

import { NoticeBarProps } from './PropsType';
import { createNamespace, isDef } from '../utils';
import { raf, doubleRaf } from '../utils/raf';

const [bem] = createNamespace('notice-bar');

const NoticeBar: React.FC<NoticeBarProps> = (props) => {
  const {
    text,
    color,
    background,
    leftIcon,
    wrapable,
    scrollable = false,
    speed = 50,
    delay = 1,
  } = props;

  const [show, setShow] = useState<boolean>(true);

  const [state, setState] = useState({
    offset: 0,
    duration: 0,
  });

  const wrapRef = useRef();
  const contentRef = useRef();

  const wrapWidth = useRef(0);
  const contentWidth = useRef(0);
  const startTimer = useRef(null);

  //  动画结束
  const onTransitionEnd = () => {
    setState({
      offset: wrapWidth.current,
      duration: 0,
    });

    raf(() => {
      // use double raf to ensure animation can start
      doubleRaf(() => {
        setState({
          offset: -contentWidth.current,
          duration: (contentWidth.current + wrapWidth.current) / speed,
        });

        if (props.onReplay) {
          props.onReplay();
        }
      });
    });
  };

  const getRightIconName = () => {
    if (props.mode === 'closeable') {
      return 'cross';
    }
    if (props.mode === 'link') {
      return 'arrow';
    }
    return '';
  };

  const onClickRightIcon = () => {
    if (props.mode === 'closeable') {
      setShow(false);
      if (props.onClose) {
        props.onClose();
      }
    }
  };

  //  左侧图标
  const renderLeftIcon = () => {
    if (props.leftIconSlot) {
      return props.leftIconSlot();
    }
    if (props.leftIcon) {
      if (typeof props.leftIcon === 'string') {
        return <Icon className={classnames(bem('left-icon'))} name={leftIcon} />;
      }
      return props.leftIcon;
    }
    return null;
  };

  //  右侧图标
  const renderRightIcon = () => {
    const name = getRightIconName();
    if (name) {
      return (
        <Icon name={name} className={classnames(bem('right-icon'))} onClick={onClickRightIcon} />
      );
    }
    return null;
  };

  //  文字部分
  const renderMarquee = () => {
    const ellipsis = scrollable === false && !props.wrapable;

    const style = {
      transform: state.offset ? `translateX(${state.offset}px)` : '',
      transitionDuration: `${state.duration}s`,
    };

    return (
      <div className={classnames(bem('wrap'))} ref={wrapRef}>
        <div
          className={classnames(bem('content'), { 'zf-ellipsis': ellipsis })}
          ref={contentRef}
          style={style}
          onTransitionEnd={onTransitionEnd}
        >
          {props.children || text}
        </div>
      </div>
    );
  };

  const reset = () => {
    wrapWidth.current = 0;
    contentWidth.current = 0;

    setState({
      offset: 0,
      duration: 0,
    });
  };

  //  开始动画
  const start = () => {
    const ms = isDef(delay) ? delay * 1000 : 0;

    reset();

    clearTimeout(startTimer.current);

    startTimer.current = setTimeout(() => {
      if (!wrapRef.current || !contentRef.current || scrollable === false) {
        return;
      }

      const wrapRefWidth = useRect(wrapRef.current).width;
      const contentRefWidth = useRect(contentRef.current).width;

      if (scrollable || contentRefWidth > wrapRefWidth) {
        doubleRaf(() => {
          wrapWidth.current = wrapRefWidth;
          contentWidth.current = contentRefWidth;

          setState({
            offset: -contentWidth.current,
            duration: contentWidth.current / speed,
          });
        });
      }
    }, ms);
  };

  // fix cache issues with forwards and back history in safari
  // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
  useEventListener('pageshow', start);

  useEffect(() => {
    start();
  }, [text, scrollable]);

  return (
    show && (
      <div
        role="alert"
        className={classnames(bem({ wrapable }), props.className)}
        style={{ color, background, ...props.style }}
        onClick={() => props.onClick && props.onClick()}
      >
        {renderLeftIcon()}
        {renderMarquee()}
        {renderRightIcon()}
      </div>
    )
  );
};

export default NoticeBar;
