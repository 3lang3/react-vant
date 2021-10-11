import React, { useContext, useMemo } from 'react';
import classnames from 'classnames';
import { addUnit } from '../utils';
import { IconProps } from './PropsType';
import Badge from '../badge';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<IconProps> = (props) => {
  const { iconPrefix } = useContext(ConfigProviderContext);

  const { tag, name, className, onClick, onTouchStart } = props;

  const imageIcon = isImage(name);

  const classPrefix = useMemo(() => props.classPrefix || iconPrefix, [props.classPrefix, iconPrefix]);

  return (
    <Badge
      tag={tag}
      className={classnames(
        className,
        classPrefix,
        imageIcon ? '' : `${classPrefix}-${name}`,
      )}
      style={{
        color: props.color,
        fontSize: addUnit(props.size),
        ...props.style,
      }}
      onClick={onClick}
      onTouchStart={onTouchStart}
      {...props.badge}
    >
      {props?.children}
      {imageIcon && <img className={classnames('van-icon__image')} src={name} alt={name} />}
    </Badge>
  );
};

Icon.defaultProps = {
  tag: 'i',
};

export default Icon;
