import React from 'react';
import classnames from 'classnames';
import { TypographyProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('typography');

const TypographyContent: React.FC<TypographyProps & { renderType: string }> = ({
  type,
  size = 'md',
  level,
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
  const elli = ellipsis === true ? 1 : ellipsis;
  return (
    <div
      className={classnames(
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

const Typography = {
  Text: (props) => <TypographyContent renderType="text" {...props} />,
  Title: (props) => <TypographyContent renderType="title" level={4} {...props} />,
  Link: (props: Omit<TypographyProps, 'title'>) => (
    <TypographyContent renderType="link" {...props} />
  ),
} as {
  Text: React.FC<Omit<TypographyProps, 'level'>>;
  Title: React.FC<TypographyProps>;
  Link: React.FC<Omit<TypographyProps, 'level'>>;
};

export default Typography;
