import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Container from './Container';
import Content from './Content';
import Simulator from './Simulator';

const Doc = (props) => {
  const { lang, versions, simulator, langConfigs, config } = props;

  return (
    <div className="vant-doc">
      <Header
        lang={lang}
        config={config}
        versions={versions}
        langConfigs={langConfigs}
        // onSwitchVersion="$emit('switch-version', $event)"
      />
      <Nav lang={lang} navConfig={config.nav} />
      <Container hasSimulator={!!simulator}>
        <Content>{props.children}</Content>
      </Container>
      {simulator && <Simulator src={simulator} />}
    </div>
  );
};

export default Doc;
