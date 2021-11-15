import React, { useContext, useMemo } from 'react';
import cls from 'clsx';
import { addUnit } from '../utils';
import { GridProps, GridItemProps } from './PropsType';
import { BORDER } from '../utils/constant';
import Badge from '../badge';
import Icon from '../icon';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

type InternalProps = {
  parent?: GridProps;
  index?: number;
};

const GridItem: React.FC<GridItemProps & InternalProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('grid-item', prefixCls);
  const { index, parent } = props;
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[React Vant] <GridItem> must be a child component of <Grid>.');
    }
  }

  const rootStyle = useMemo(() => {
    const { square, gutter, columnNum } = parent;
    const percent = `${100 / +columnNum}%`;
    const internalStyle: React.CSSProperties = {
      ...style,
      flexBasis: percent,
    };

    if (square) {
      internalStyle.paddingTop = percent;
    } else if (gutter) {
      const gutterValue = addUnit(gutter);
      internalStyle.paddingRight = gutterValue;

      if (index >= columnNum) {
        internalStyle.marginTop = gutterValue;
      }
    }

    return internalStyle;
  }, [parent.style, parent.gutter, parent.columnNum]);

  const contentStyle = useMemo(() => {
    const { square, gutter } = parent;

    if (square && gutter) {
      const gutterValue = addUnit(gutter);
      return {
        ...props.contentStyle,
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto',
      };
    }
    return props.contentStyle;
  }, [parent.gutter, parent.columnNum, props.contentStyle]);

  const renderIcon = () => {
    if (typeof props.icon === 'string') {
      return (
        <Icon
          badge={props.badge}
          name={props.icon as string}
          size={parent.iconSize}
          className={cls(bem('icon'))}
          classPrefix={props.iconPrefix}
          color={props.iconColor}
        />
      );
    }

    if (React.isValidElement(props.icon)) {
      return <Badge {...props.badge}>{props.icon}</Badge>;
    }

    return null;
  };

  const renderText = () => {
    if (React.isValidElement(props.text)) {
      return props.text;
    }
    if (props.text) {
      return <span className={cls(bem('text'))}>{props.text}</span>;
    }
    return null;
  };

  const renderContent = () => {
    if (children) {
      return children;
    }
    return (
      <>
        {renderIcon()}
        {renderText()}
      </>
    );
  };

  const { center, border, square, gutter, reverse, direction } = parent;

  const classes = cls(
    props.contentClassName,
    bem('content', [
      direction,
      {
        center,
        square,
        reverse,
        clickable: !!props.onClick,
        surround: border && gutter,
      },
    ]),
    { [BORDER]: border },
  );

  return (
    <div className={cls(className, bem({ square }))} style={rootStyle}>
      <div
        role={props.onClick ? 'button' : undefined}
        className={classes}
        style={contentStyle}
        onClick={props.onClick}
      >
        {renderContent()}
      </div>
    </div>
  );
};

GridItem.defaultProps = {
  index: 0,
  parent: {},
};

export default GridItem;
