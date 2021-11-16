import React from 'react';
import clsx from 'clsx';
import './index.less';

export default (props) => {
  return (
    <div className={clsx('vant-doc-content', `vant-doc-content--${props.currentCompnentName}`)}>
      {props.children}
    </div>
  );
};
