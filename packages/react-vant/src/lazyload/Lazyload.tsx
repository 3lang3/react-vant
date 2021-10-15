import React, { useContext } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { LazyloadProps } from './PropsType';

const Lazyload: React.FC<LazyloadProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('lazyload', prefixCls);

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      Lazyload
    </div>
  );
};

// defaultProps defined if need
Lazyload.defaultProps = {};

export default Lazyload;
