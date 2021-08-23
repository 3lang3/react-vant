import React from 'react';
import cls from 'classnames';
import { DividerProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('divider');

const Divider: React.FC<DividerProps> = ({ children, className, ...props }) => {
  return (
    <div
      role="separator"
      className={cls(
        className,
        bem({
          dashed: props.dashed,
          hairline: props.hairline,
          [`content-${props.contentPosition}`]: !!children,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Divider.defaultProps = {
  hairline: true,
  contentPosition: 'center',
};

export default Divider;
