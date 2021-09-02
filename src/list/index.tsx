import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import Loading from '../loading';
import { getRect } from '../hooks/use-rect';
import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import { createNamespace, isHidden } from '../utils';
import { ListRefreshProps } from './PropsType';

const [bem] = createNamespace('list');

const List: React.FC<ListRefreshProps> = (props) => {
  const [loading, setLoading] = useState(props.loading);

  const root = useRef<HTMLDivElement>();
  const scrollParent = useRef(null);
  const placeholder = useRef<HTMLDivElement>();

  scrollParent.current = useScrollParent(root);

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  // 判断是否需要加载
  const check = () => {
    if (loading || props.finished || props.error) {
      return;
    }
    const { offset } = props;
    const scrollParentRect = getRect(scrollParent.current);
    if (!scrollParentRect.height || isHidden(root.current)) {
      return;
    }
    const placeholderRect = getRect(placeholder.current);
    if (placeholderRect.bottom - scrollParentRect.bottom <= offset) {
      setLoading(true);
      props.onLoad();
    }
  };

  useEffect(() => {
    if (props.immediateCheck) {
      check();
    }
  }, [scrollParent.current]);

  useEffect(() => {
    check();
  }, [loading, props.finished]);

  const renderFinishedText = () => {
    if (props.finished && props.finishedText) {
      return <div className={classnames(bem('finished-text'))}>{props.finishedText}</div>;
    }
    return null;
  };

  const clickErrorText = () => {
    // emit('update:error', false);
    check();
  };

  const renderErrorText = () => {
    if (props.error) {
      if (props.errorText) {
        return (
          <div className={classnames(bem('error-text'))} onClick={clickErrorText}>
            {props.errorText}
          </div>
        );
      }
    }
    return null;
  };

  const renderLoading = () => {
    if (loading && !props.finished) {
      return (
        <div className={classnames(bem('loading'))}>
          <Loading size={16}>{props.loadingText}</Loading>
        </div>
      );
    }
    return null;
  };

  useEventListener('scroll', check, {
    target: scrollParent.current,
    depends: [loading, props.finished, props.error],
  });

  return (
    <div ref={root} role="feed" className={classnames(bem())} aria-busy={loading}>
      {props.children}
      {renderLoading()}
      {renderFinishedText()}
      {renderErrorText()}
      <div ref={placeholder} className={classnames(bem('placeholder'))} />
    </div>
  );
};

List.defaultProps = {
  offset: 300,
  immediateCheck: true,
  loadingText: '加载中...',
  finishedText: '没有更多了',
};

export default List;
