import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Container from './Container';
import Content from './Content';
import Simulator from './Simulator';

const Doc = (props) => {
  const { lang, versions, simulator, langConfigs, config, hideSimulator, currentCompnentName } =
    props;

  const hasSimulator = !!simulator && !hideSimulator;
  return (
    <div className="vant-doc">
      <Nav config={config} lang={lang} navConfig={config.nav} />
      <Container hasSimulator={!!simulator && !hideSimulator}>
        <Header
          lang={lang}
          config={config}
          versions={versions}
          langConfigs={langConfigs}
          // onSwitchVersion="$emit('switch-version', $event)"
        />
        <Content currentCompnentName={currentCompnentName} hasSimulator={hasSimulator}>
          {props.children}
        </Content>
        {hasSimulator && <Simulator src={simulator} />}
      </Container>
    </div>
  );
};

export default Doc;
