import React, { useMemo } from 'react';
import clsx from 'clsx';
import { TypographyBaseProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('typography');

const TypographyBase: React.FC<TypographyBaseProps & { renderType: string }> = ({
  tag = 'div',
  type,
  size = 'md',
  level = 5,
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
  const TagElement = useMemo<React.ElementType>(() => {
    if (renderType === 'title') {
      if (level === 1) return 'h1';
      if (level === 2) return 'h2';
      if (level === 3) return 'h3';
      if (level === 4) return 'h4';
      if (level === 5) return 'h5';
      return 'h6';
    }
    return tag as React.ElementType;
  }, [tag]);

  return (
    <TagElement
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
    </TagElement>
  );
};

export default TypographyBase;
