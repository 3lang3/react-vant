import React, { useContext, useRef } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { LazyloadProps } from './PropsType';
import { useInViewport } from '../hooks';
import { Skeleton } from '../skeleton';

const Lazyload: React.FC<LazyloadProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('lazyload', prefixCls);
  const ref = useRef<HTMLDivElement>();
  const inViewPort = useInViewport(ref);

  const { height, placeholder, children, className, style } = props;

  return inViewPort ? (
    <>{children}</>
  ) : (
    <div ref={ref} className={cls(bem(), className)} style={{ height, ...style }}>
      {placeholder}
    </div>
  );
};

Lazyload.defaultProps = {
  placeholder: <Skeleton title />,
};

export default Lazyload;
