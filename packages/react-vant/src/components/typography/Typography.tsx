import React from 'react';
import clsx from 'clsx';
import { TypographyBaseProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('typography');

const TypographyBase: React.FC<TypographyBaseProps & { renderType: string }> = ({
  type,
  size = 'md',
  level = 4,
  center,
  ellipsis,
  className,
  children,
  strong,
  underline,
  disabled,
  renderType,
  delete: del,
  ...props
}) => {
  const elli = ellipsis === true ? 1 : (ellipsis as number);
  return (
    <div
      className={clsx(
        className,
        bem([
          type,
          size,
          renderType,
          {
            center,
            strong,
            underline,
            disabled,
            delete: del,
            [`l${level}`]: renderType === 'title' && level,
          },
        ]),
        {
          'rv-ellipsis': elli === 1,
          [`rv-multi-ellipsis--l${elli}`]: elli && elli > 1,
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TypographyBase;
