import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SwiperItemProps, SwiperItemInstance } from './PropsType';

const SwiperItem = React.forwardRef<SwiperItemInstance, SwiperItemProps>((props, ref) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swiper-item', prefixCls);

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
