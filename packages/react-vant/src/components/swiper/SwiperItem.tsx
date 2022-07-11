import React from 'react';
import cls from 'clsx';
import { SwiperItemProps, SwiperItemInstance } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('swiper-item');

const SwiperItem = React.forwardRef<SwiperItemInstance, SwiperItemProps>((props, ref) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const getHeight = () => {
    return wrapperRef.current?.clientHeight;
  };

  React.useImperativeHandle(ref, () => ({
    getHeight,
    self: wrapperRef.current,
  }));

  return (
    <div
      ref={wrapperRef}
      className={cls(props.className, bem())}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </div>
  );
});

export default SwiperItem;
