import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { addUnit, preventDefault } from '../utils';
import { IconPropsType } from './PropsType';
import Badge from '../badge';

export interface IconProps extends IconPropsType {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onTouchStart?: (e: React.MouseEvent<HTMLDivElement>) => void;
  classPrefix?: string;
  style?: React.CSSProperties;
}

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<IconProps> = (props) => {
  const { tag = 'i', name, className, onClick, onTouchStart } = props;

  const imageIcon = isImage(name);
  const ref = useRef(null);

  useEffect(() => {
    // 解决touchstart无法preventDefault的问题
    // touchstart事件passive默认开启
    ref.current?.addEventListener(
      'touchstart',
      (e) => {
        preventDefault(e, true);
        onTouchStart?.(e);
      },
      { passive: false },
    );
  }, []);

  const renderContent = () => {
    return React.createElement(
      tag,
      {
        ref,
        className: classnames(
          className,
          props.classPrefix,
          imageIcon ? '' : `${props.classPrefix}-${name}`,
        ),
        style: {
          color: props.color,
          fontSize: addUnit(props.size),
        },
        onClick,
      },
      imageIcon && <img className={classnames('van-icon__image')} src={name} alt={name} />,
    );
  };

  return (
    <Badge dot={props.dot} content={props.badge} color={props.badgeColor}>
      {renderContent()}
    </Badge>
  );
};

Icon.defaultProps = {
  classPrefix: 'van-icon',
};

export default Icon;
