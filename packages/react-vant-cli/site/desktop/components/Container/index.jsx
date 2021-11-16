import React from 'react';
import clsx from 'clsx';
import './index.less';

export default (props) => {
  const { hasSimulator } = props;
  return (
    <div
      className={clsx('vant-doc-container', 'vant-doc-row', {
        'vant-doc-container--with-simulator': hasSimulator,
      })}
    >
      {props.children}
    </div>
  );
};
