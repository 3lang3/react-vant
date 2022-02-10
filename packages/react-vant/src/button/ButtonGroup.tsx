import React, { FC, useContext } from 'react';
import clsx from 'clsx';
import { BaseTypeProps } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

export const ButtonGroup: FC<BaseTypeProps> = ({ className, style, children }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('button-group', prefixCls);

  return (
    <div style={style} className={clsx(className, bem())}>
      {children}
    </div>
  );
};

export default ButtonGroup;
