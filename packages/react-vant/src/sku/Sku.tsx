import React, { useContext } from 'react';
import cls from 'classnames';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { SkuProps } from './PropsType';

const Sku: React.FC<SkuProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sku', prefixCls);

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      Sku
    </div>
  );
};

// defaultProps defined if need
Sku.defaultProps = {};

export default Sku;
