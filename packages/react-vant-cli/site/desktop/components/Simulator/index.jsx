import React from 'react';
import clsx from 'clsx';

import './index.less';

const Simulator = (props) => {
  const { src } = props;

  return (
    <div className={clsx('vant-doc-simulator')}>
      <iframe title="vant-ui-iframe" src={src} frameBorder="0" />
    </div>
  );
};

export default Simulator;
