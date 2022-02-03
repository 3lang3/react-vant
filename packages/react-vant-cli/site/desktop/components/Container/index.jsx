import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import './index.less';

export default (props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current?.scrollTo(0, 0);
  });

  return (
    <div ref={ref} className={clsx('vant-doc-container', 'vant-doc-row')}>
      {props.children}
    </div>
  );
};
