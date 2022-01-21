import React from 'react';
import DemoSection from '../DemoSection';
import DemoBlock from '../DemoBlock';

export default ({ blocks = [], children }) => {
  return (
    <DemoSection>
      {typeof children === 'function' ? children() : children}
      {blocks.map(({ Component, id, title }) => (
        <DemoBlock key={id} title={title}>
          <Component />
        </DemoBlock>
      ))}
    </DemoSection>
  );
};
