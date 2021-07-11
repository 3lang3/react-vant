import React from 'react';
import classnames from 'classnames';
import { EmptyPropsType } from './PropsType';
import { createNamespace } from '../utils';

export interface EmptyProps extends EmptyPropsType {
  onClick?: (e: Event) => void;
  className?: string;
  style?: React.CSSProperties;
}

const [bem] = createNamespace('empty');

const Empty: React.FC<EmptyProps> = (props) => {
  const { image, description, className } = props;

  return (
    <div className={classnames(bem(), className)}>
      <img src={image} className={classnames(bem('image'))} alt="empty" />
      <p className={classnames(bem('description'))}>{description}</p>
    </div>
  );
};

export default Empty;
