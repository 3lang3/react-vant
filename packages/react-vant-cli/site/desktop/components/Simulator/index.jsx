import React from 'react';
import clsx from 'clsx';
import { SimulatorContext } from '../../context';
import './index.less';

const Simulator = (props) => {
  const { src } = props;
  return (
    <SimulatorContext.Consumer>
      {({ visible }) => (
        <div className={clsx('vant-doc-simulator')} style={{ display: visible ? 'block' : 'none' }}>
          <iframe title="vant-ui-iframe" src={src} frameBorder="0" />
        </div>
      )}
    </SimulatorContext.Consumer>
  );
};

export default React.memo(Simulator, (prevProps, nextProps) => prevProps.src === nextProps.src);
