import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import { BadgeProps } from './PropsType';
import { isDef, addUnit, createNamespace } from '../utils';
import { isNumeric } from '../utils/validate/number';

const [bem] = createNamespace('badge');

const Badge: React.FC<BadgeProps> = (props) => {
  const { content, max, dot, showZero = true, tag = 'div' } = props;

  const hasContent = () => {
    if (props.content) {
      return true;
    }
    return isDef(content) && content !== '' && (showZero || +content !== 0);
  };

  const renderContent = () => {
    if (!dot && hasContent()) {
      if (isDef(max) && isNumeric(content?.toString()) && +content > max) {
        return `${max}+`;
      }

      return content;
    }
    return null;
  };

  const renderBadge = () => {
    if (hasContent() || props.dot) {
      const style: CSSProperties = {
        background: props.color,
      };

      if (props.offset) {
        const [x, y] = props.offset;

        if (props.children) {
          style.top = addUnit(y);
          style.right = `-${addUnit(x)}`;
        } else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }
      return (
        <div
          className={classnames(bem({ dot: props.dot, fixed: !!props.children }))}
          style={{ ...style, ...props.style }}
        >
          {renderContent()}
        </div>
      );
    }
    return null;
  };

  return React.createElement(
    tag,
    {
      className: classnames(props.className, bem('wrapper')),
      style: props.style,
      onClick: props.onClick,
    },
    props.children,
    renderBadge(),
  );
};

export default Badge;
