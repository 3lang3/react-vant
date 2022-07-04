import React, { useMemo, CSSProperties, forwardRef } from 'react';
import clsx from 'clsx';

import { TabsTitleProps } from './PropsType';
import { createNamespace, isDef } from '../utils';
import Badge from '../badge';

const [bem] = createNamespace('tab');

const TabsTitle = forwardRef<HTMLDivElement, TabsTitleProps>((props, ref) => {
  const { type, color, isActive, activeColor, inactiveColor, disabled, className } = props;

  const customStyle = useMemo(() => {
    const style: CSSProperties = { ...props.style };
    const isCard = type === 'card';

    // card theme color
    if (color && isCard) {
      style.borderColor = color;

      if (!disabled) {
        if (isActive) {
          style.backgroundColor = color;
        } else {
          style.color = color;
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor;
    if (titleColor) {
      style.color = titleColor;
    }

    return style;
  }, [type, color, disabled, isActive, activeColor, inactiveColor]);

  const renderText = () => {
    const Text = (
      <span className={clsx(bem('text', { ellipsis: !props.scrollable }))}>
        {(() => {
          if (typeof props.title === 'function') {
            return props.title(isActive);
          }
          return props.title;
        })()}
      </span>
    );

    if (props.dot || (isDef(props.badge) && props.badge !== '')) {
      return (
        <Badge dot={props.dot} content={props.badge} showZero={props.showZeroBadge}>
          {Text}
        </Badge>
      );
    }

    return Text;
  };

  return (
    <div
      ref={ref}
      className={clsx([
        bem({
          active: props.isActive,
          disabled: props.disabled,
        }),
        className,
      ])}
      style={customStyle}
      aria-selected={props.isActive}
      onClick={props.onClick}
    >
      {renderText()}
    </div>
  );
});

TabsTitle.defaultProps = {
  showZeroBadge: true,
};

export default TabsTitle;
