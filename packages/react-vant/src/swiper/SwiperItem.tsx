import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SwiperItemProps } from './PropsType';

const SwiperItem: React.FC<SwiperItemProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swiper-item', prefixCls);

  return (
    <div className={cls(props.className, bem())} onClick={props.onClick} style={props.style}>
      {props.children}
    </div>
  );
};

export default SwiperItem;
