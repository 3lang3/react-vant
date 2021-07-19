import React, { useMemo, CSSProperties, forwardRef } from 'react';
import classnames from 'classnames';

import { TabsTitleProps } from './PropsType';
import { isDef, createNamespace } from '../utils';

const [bem] = createNamespace('tab');

const TabsTitle = forwardRef<HTMLDivElement, TabsTitleProps>((props, ref) => {
  const { type, color, isActive, activeColor, inactiveColor, disabled, className } = props;

  const customStyle = useMemo(() => {
    const style: CSSProperties = {};
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
  }, []);

  const renderText = () => {
    const Text = (
      <span className={classnames(bem('text', { ellipsis: !props.scrollable }))}>
        {props.renderTitle ? props.renderTitle() : props.title}
      </span>
    );

    if (props.dot || (isDef(props.badge) && props.badge !== '')) {
      return (
        <div>312</div>
        // <Badge dot={props.dot} content={props.badge}>
        //   {Text}
        // </Badge>
      );
    }

    return Text;
  };

  return (
    <div
      ref={ref}
      className={classnames([
        bem({
          active: props.isActive,
          disabled: props.disabled,
        }),
        className,
      ])}
      onClick={props.onClick}
      style={customStyle}
      aria-selected={props.isActive}
    >
      {renderText()}
    </div>
  );
});

export default TabsTitle;
