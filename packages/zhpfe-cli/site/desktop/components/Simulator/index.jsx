import React, { useMemo, useEffect, useState } from 'react';
import classnames from 'classnames';

import './index.less';

const Simulator = (props) => {
  const { src } = props;
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);
    return {
      height: height + 'px',
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
      className={classnames('rokku-doc-simulator', {
        'rokku-doc-simulator-fixed': scrollTop > 60,
      })}
    >
      <iframe src={src} style={simulatorStyle} frameBorder="0" />
    </div>
  );
};

export default Simulator;
