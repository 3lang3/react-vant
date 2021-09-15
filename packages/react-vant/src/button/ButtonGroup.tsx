import React, { FC } from 'react';
import classnames from 'classnames';
import { BaseTypeProps, createNamespace } from '../utils';

const [bem] = createNamespace('button-group');

export const ButtonGroup: FC<BaseTypeProps> = ({ className, style, children }) => (
  <div style={style} className={classnames(className, bem())}>
    {children}
  </div>
);

export default ButtonGroup;
