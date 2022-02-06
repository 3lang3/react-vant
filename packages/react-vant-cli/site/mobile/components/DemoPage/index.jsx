import React from 'react';
import DemoSection from '../DemoSection';
import DemoBlock from '../DemoBlock';

export default ({ blocks = [], children }) => {
  return (
    <DemoSection>
      {typeof children === 'function' ? children() : children}
      {blocks.map(({ Component, key, title, ...props }) => (
        <DemoBlock key={key} title={title} {...props}>
          <Component />
        </DemoBlock>
      ))}
    </DemoSection>
  );
};
