import React, { useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import { addUnit, preventDefault } from '../utils';
import { IconProps } from './PropsType';
import Badge from '../badge';

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<IconProps> = (props) => {
  const { tag, name, className, onClick, onTouchStart } = props;

  const imageIcon = isImage(name);
  const ref = useRef(null);

  const classPrefix = useMemo(() => props.classPrefix || 'van-icon', [props.classPrefix]);

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

  return (
    <Badge
      tag={tag}
      className={classnames(
        className,
        classPrefix,
        imageIcon ? '' : `${props.classPrefix}-${name}`,
      )}
      style={{
        color: props.color,
        fontSize: addUnit(props.size),
        ...props.style,
      }}
      onClick={onClick}
      {...props.badge}
    >
      {props?.children}
      {imageIcon && <img className={classnames('van-icon__image')} src={name} alt={name} />}
    </Badge>
  );
};

Icon.defaultProps = {
  classPrefix: 'van-icon',
  tag: 'i',
};

export default Icon;
