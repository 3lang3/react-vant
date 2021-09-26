import React from 'react';
import cls from 'classnames';
import { addUnit, createNamespace } from '../utils';

import { GridProps } from './PropsType';
import { BORDER_TOP } from '../utils/constant';

const [bem] = createNamespace('grid');

const Grid: React.FC<GridProps> = ({ children, className, style, ...props }) => {
  return (
    <div
      style={{ paddingLeft: addUnit(props.gutter), ...style }}
      className={cls(className, bem(), { [BORDER_TOP]: props.border && !props.gutter })}
    >
      {React.Children.toArray(children).filter(Boolean).map((child: React.ReactElement, index: number) =>
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
