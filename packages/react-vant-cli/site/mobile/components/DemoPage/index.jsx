import React from 'react';
import DemoSection from '../DemoSection';
import DemoBlock from '../DemoBlock';

export default ({ blocks = [], children, ...frontmatter }) => {
  const { background, className } = frontmatter;
  return (
    <DemoSection className={className} style={{ background }}>
      {typeof children === 'function' ? children() : children}
      {blocks.map(({ Component, key, title, ...props }) => (
        <DemoBlock key={key} title={title} {...props}>
          <Component />
        </DemoBlock>
      ))}
    </DemoSection>
  );
};
