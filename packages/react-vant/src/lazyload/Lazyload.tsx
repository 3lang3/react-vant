import React, { useContext, useRef } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { LazyloadProps } from './PropsType';
import { useInViewport } from '../hooks';
import { Skeleton } from '../skeleton';

const Lazyload: React.FC<LazyloadProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('lazyload', prefixCls);
  const ref = useRef<HTMLDivElement>();
  const inViewPort = useInViewport(ref);

  const { className, style, height, placeholder, children } = props;

  return inViewPort ? (
    children
  ) : (
    <div ref={ref} className={cls(className, bem())} style={{ height, ...style }}>
      {placeholder}
    </div>
  );
};

// defaultProps defined if need
Lazyload.defaultProps = {
  placeholder: <Skeleton title />,
};

export default Lazyload;
