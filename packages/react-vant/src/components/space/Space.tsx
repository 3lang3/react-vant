import React from 'react';
import clsx from 'clsx';
import { SpaceProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const formatGap = (gap: string | number) => (typeof gap === 'number' ? `${gap}px` : gap);

const Space: React.FC<SpaceProps> = (props) => {
  const { wrap, block, direction, align, justify } = props;
  const { prefixCls, createNamespace } = React.useContext(ConfigProviderContext);
  const [bem] = createNamespace('space', prefixCls);

  const style = React.useMemo(() => {
    if (props.gap) {
      if (Array.isArray(props.gap)) {
        const [gapH, gapV] = props.gap;
        return {
          ...props.style,
          '--gap-vertical': formatGap(gapV),
          '--gap-horizontal': formatGap(gapH),
        };
      }
      return { ...props.style, '--gap': formatGap(props.gap as string | number) };
    }
    return props.style;
  }, [props.style, props.gap]);

  return (
    <div
      className={clsx(
        props.className,
        bem({
          wrap,
          block,
          [`${direction}`]: !!direction,
          [`align-${align}`]: !!align,
          [`justify-${justify}`]: !!justify,
        }),
      )}
      style={style}
      onClick={props.onClick}
    >
      {React.Children.map(props.children, (child) => {
        return (
          child !== null && child !== undefined && <div className={clsx(bem('item'))}>{child}</div>
        );
      })}
    </div>
  );
};

Space.defaultProps = {
  direction: 'horizontal',
};

export default Space;
