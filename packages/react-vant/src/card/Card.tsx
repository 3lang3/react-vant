import React, { useContext } from 'react';
import cls from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardCoverProps,
} from './PropsType';
import { BORDER_BOTTOM, BORDER_TOP } from '../utils/constant';

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card-header', prefixCls);
  return (
    <div
      className={cls(props.className, bem(), { [BORDER_BOTTOM]: props.border })}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={cls(bem('content'))}>{props.children}</div>
      {props.extra && <div className={cls(bem('extra'))}>{props.extra}</div>}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card-body', prefixCls);
  return (
    <div className={cls(props.className, bem())} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card-footer', prefixCls);
  return (
    <div
      className={cls(props.className, bem({ compact: props.compact }), {
        [BORDER_TOP]: props.border,
      })}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export const CardCover: React.FC<CardCoverProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card-cover', prefixCls);
  return (
    <div className={cls(props.className, bem())} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const Card: React.FC<CardProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('card', prefixCls);

  const { className, style, round, border, children } = props;

  return (
    <div className={cls(bem({ round, border }), className)} style={style} onClick={props.onClick}>
      {children}
    </div>
  );
};

// defaultProps defined if need
Card.defaultProps = {};

export default Card;
