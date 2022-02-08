import React from 'react';
import clsx from 'clsx';
import MdPreviewer from '../MdPreviewer';
import SimulatorContext from '../../context';
import './index.less';

const previewer = (props) => <MdPreviewer {...props} />;

const MdPageComponent = ({
  toggleSimulator,
  simulatorVisible,
  children,
  frontmatter = {},
  hideSimulator,
}) => {
  const { simulator = true, fluid } = frontmatter;
  const pageSimulator = simulator && !hideSimulator;

  React.useEffect(() => {
    if (simulator !== simulatorVisible) {
      toggleSimulator(simulator);
    }
  }, [simulator, simulatorVisible, toggleSimulator]);
  return (
    <div
      className={clsx({
        'vant-doc-md-page--simulator': pageSimulator,
      })}
    >
      <section
        className={clsx('vant-doc-md-page', {
          'vant-doc-md-page--fluid': fluid,
        })}
      >
        {children({ previewer })}
      </section>
    </div>
  );
};

export default (props) => {
  return (
    <SimulatorContext.Consumer>
      {({ visible, toggleSimulator }) => (
        <MdPageComponent simulatorVisible={visible} toggleSimulator={toggleSimulator} {...props} />
      )}
    </SimulatorContext.Consumer>
  );
};
