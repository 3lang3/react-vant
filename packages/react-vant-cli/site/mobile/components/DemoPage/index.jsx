import React from 'react';
import DemoSection from '../DemoSection';
import DemoBlock from '../DemoBlock';
import './index.less';

export default ({ blocks = [], children, frontmatter = {} }) => {
  const { background, className } = frontmatter;
  return (
    <DemoSection className={className} style={{ background }}>
      {typeof children === 'function' ? children() : children}
      {blocks.map(({ Component, key, title, ...rest }) => (
        <DemoBlock key={key} title={title} {...rest}>
          <Component />
        </DemoBlock>
      ))}
    </DemoSection>
  );
};
