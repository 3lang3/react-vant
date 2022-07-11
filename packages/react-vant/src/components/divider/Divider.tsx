import React from 'react';
import cls from 'clsx';
import { DividerProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('divider');

const Divider: React.FC<DividerProps> = ({
  children,
  className,
  hairline,
  dashed,
  contentPosition,
  ...props
}) => {

  return (
    <div
      role="separator"
      className={cls(
        className,
        bem({
          dashed,
          hairline,
          [`content-${contentPosition}`]: !!children,
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
