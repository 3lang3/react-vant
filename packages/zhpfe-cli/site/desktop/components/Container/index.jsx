import React from 'react';
import classnames from 'classnames';
import './index.less';

export default (props) => {
  const { hasSimulator } = props;
  return (
    <div
      className={classnames('vant-doc-container', 'vant-doc-row', {
        'vant-doc-container--with-simulator': hasSimulator,
      })}
    >
      {props.children}
    </div>
  );
};
