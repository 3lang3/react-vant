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

const emptyImageStaticValue = {
  default: 'https://img01.yzcdn.cn/vant/empty-image-default.png',
  error: 'https://img01.yzcdn.cn/vant/empty-image-error.png',
  network: 'https://img01.yzcdn.cn/vant/empty-image-default.png',
  search: 'https://img01.yzcdn.cn/vant/empty-image-search.png',
}

const Empty: React.FC<EmptyProps> = (props) => {
  const { image = 'default', description, className } = props;

  return (
    <div className={classnames(bem(), className)}>
      <img src={emptyImageStaticValue[image] || image} className={classnames(bem('image'))} alt="empty" />
      <p className={classnames(bem('description'))}>{description}</p>
    </div>
  );
};

export default Empty;
