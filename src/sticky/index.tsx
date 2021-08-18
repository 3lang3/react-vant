import React, { CSSProperties, useState, useRef, useMemo, useEffect } from 'react';
import classnames from 'classnames';

import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import { createNamespace, getScrollTop, getElementTop, unitToPx, isHidden } from '../utils';
import { StickyProps } from './PropsType';

const [bem] = createNamespace('sticky');

const Sticky: React.FC<StickyProps> = (props) => {
  const { container } = props;

  const mounted = useRef(false);

  const [fixed, setFixed] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [transform, setTransform] = useState<number>(0);

  const root = useRef<HTMLDivElement>(null);
  const scrollParent = useScrollParent(root);

  const rootStyle: CSSProperties = {
    height: fixed ? `${height}px` : undefined,
  };

  const offsetTop = useMemo<number>(() => unitToPx(props.offsetTop), [props.offsetTop]);

  const style = useMemo<CSSProperties | undefined>(() => {
    if (!fixed) {
      return null;
    }

    const top = offsetTop ? `${offsetTop}px` : undefined;
    const $transform = transform ? `translate3d(0, ${transform}px, 0)` : undefined;

    return {
      top,
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      transform: $transform,
    };
  }, [fixed, transform]);

  const emitScrollEvent = (scrollTop: number) => {
    if (props.onScroll) {
      props.onScroll({
        scrollTop,
        isFixed: fixed,
      });
    }
  };

  const onScroll = () => {
    if (!root.current || isHidden(root.current)) {
      return;
    }

    const $height = root.current.offsetHeight;
    setHeight(root.current.offsetHeight);

    const scrollTop = getScrollTop(window);
    const topToPageTop = getElementTop(root.current);

    if (container && container.current) {
      const bottomToPageTop = topToPageTop + container.current.offsetHeight;

      if (scrollTop + offsetTop + $height > bottomToPageTop) {
        const distanceToBottom = $height + scrollTop - bottomToPageTop;

        if (distanceToBottom < $height) {
          setFixed(true);
          setTransform(-(distanceToBottom + offsetTop));
        } else {
          setFixed(false);
        }

        emitScrollEvent(scrollTop);
        return;
      }
    }
    if (scrollTop + offsetTop > topToPageTop) {
      setFixed(true);
      setTransform(0);
    } else {
      setFixed(false);
    }
    emitScrollEvent(scrollTop);
  };

  useEventListener('scroll', onScroll, { target: scrollParent });

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    props.onChange?.(fixed);
  }, [fixed]);

  return (
    <div ref={root} style={rootStyle}>
      <div className={classnames(bem({ fixed }))} style={style}>
        {props.children}
      </div>
    </div>
  );
};

Sticky.defaultProps = {
  offsetTop: 0,
};

export default Sticky;
