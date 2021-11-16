import React, { useMemo, useEffect, useState } from 'react';
import clsx from 'clsx';

import './index.less';

const Simulator = (props) => {
  const { src } = props;
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);
    return {
      height: `${height}px`,
    };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY);
    });
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  return (
    <div
      className={clsx('vant-doc-simulator', {
        'vant-doc-simulator-fixed': scrollTop > 60,
      })}
    >
      <iframe title="vant-ui-iframe" src={src} style={simulatorStyle} frameBorder="0" />
    </div>
  );
};

export default Simulator;
