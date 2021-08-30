import React, { useMemo } from 'react';
import classnames from 'classnames';
import FlexContext from './FlexContext';
import { FlexProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('flexbox');

const Flex: React.FC<FlexProps> = (props) => {
  const { direction, wrap, justify, align, gutter, style, className, children, ...rest } = props;

  const getGutter: [number, number] = useMemo(
    () => (Array.isArray(gutter) ? gutter : [gutter, 0]),
    [gutter],
  );

  const rowStyle = {
    ...(getGutter[0]! > 0
      ? {
          marginLeft: getGutter[0]! / -2,
          marginRight: getGutter[0]! / -2,
        }
      : {}),
    ...(getGutter[1]! > 0
      ? {
          marginTop: getGutter[1]! / -2,
          marginBottom: getGutter[1]! / 2,
        }
      : {}),
    ...style,
  };

  const wrapCls = classnames(
    className,
    bem([
      direction,
      wrap,
      justify ? `justify-${justify}` : false,
      align ? `align-${align}` : false,
    ]),
  );

  return (
    <FlexContext.Provider value={{ gutter: getGutter }}>
      <div className={wrapCls} style={rowStyle} {...rest}>
        {children}
      </div>
    </FlexContext.Provider>
  );
};

Flex.defaultProps = {
  gutter: 0,
};

export default Flex;
