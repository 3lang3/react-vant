import React from 'react';
import clsx from 'clsx';
import './index.less';

export default (props) => {
  const { hasSimulator } = props;
  return (
    <div
      className={clsx('vant-doc-content', `vant-doc-content--${props.currentCompnentName}`, {
        'vant-doc-content--with-simulator': hasSimulator,
      })}
    >
      {props.children}
    </div>
  );
};
