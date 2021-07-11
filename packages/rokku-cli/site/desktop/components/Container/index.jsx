import React from 'react';
import classnames from 'classnames';
import './index.less';

export default (props) => {
  const { hasSimulator } = props;
  return (
    <div
      className={classnames('rokku-doc-container', 'rokku-doc-row', {
        'rokku-doc-container--with-simulator': hasSimulator,
      })}
    >
      {props.children}
    </div>
  );
};
