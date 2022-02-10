import React, { useContext } from 'react';
import cls from 'clsx';
import { addUnit } from '../utils';

import { GridProps } from './PropsType';
import { BORDER_TOP } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Grid: React.FC<GridProps> = ({ children, className, style, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('grid', prefixCls);
  return (
    <div
      style={{ paddingLeft: addUnit(props.gutter), ...style }}
      className={cls(className, bem(), { [BORDER_TOP]: props.border && !props.gutter })}
    >
      {React.Children.toArray(children)
        .filter(Boolean)
        .map((child: React.ReactElement, index: number) =>
          React.cloneElement(child, {
            index,
            parent: props,
          }),
        )}
    </div>
  );
};

Grid.defaultProps = {
  center: true,
  border: true,
  columnNum: 4,
};

export default Grid;
