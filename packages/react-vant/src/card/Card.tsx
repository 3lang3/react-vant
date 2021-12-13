import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { CardProps } from './PropsType';

const Card: React.FC<CardProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card', prefixCls);

  return (
    <div className={cls(bem(), props.className)} style={props.style} onClick={props.onClick}>
      {props.title && (
        <div className={cls(bem('header'))}>
          {props.title}{' '}
          {props.extra && <div className={cls(bem('header__extra'))}>{props.extra}</div>}
        </div>
      )}
      <div className={cls(bem('body'))}>{props.children}</div>
      {props.footer && <div className={cls(bem('footer'))}>{props.footer}</div>}
    </div>
  );
};

// defaultProps defined if need
Card.defaultProps = {};

export default Card;
