import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Container from './Container';
import Content from './Content';
import Simulator from './Simulator';
import { SimulatorContext } from '../context';

const Doc = (props) => {
  const {
    lang,
    versions,
    simulatorSrc,
    searchConfig,
    langConfigs,
    config,
    hideSimulator,
    currentCompnentName,
  } = props;
  const hasSimulator = !!simulatorSrc && !hideSimulator;
  const [visible, updateVisible] = React.useState(false);
  const toggleSimulator = React.useCallback((visibleStatus) => {
    updateVisible(visibleStatus);
  }, []);

  React.useEffect(() => {}, []);

  return (
    <div className="vant-doc">
      <Nav config={config} lang={lang} navConfig={config.nav} versions={versions} />
      <Container>
        <Header lang={lang} config={config} searchConfig={searchConfig} langConfigs={langConfigs} />
        <SimulatorContext.Provider value={{ visible, toggleSimulator }}>
          <Content currentCompnentName={currentCompnentName}>{props.children}</Content>
          {hasSimulator && <Simulator src={simulatorSrc} />}
        </SimulatorContext.Provider>
      </Container>
    </div>
  );
};

export default Doc;
