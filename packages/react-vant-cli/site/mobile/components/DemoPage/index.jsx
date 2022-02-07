import React from 'react';
import clsx from 'clsx';
import DemoSection from '../DemoSection';
import DemoBlock from '../DemoBlock';
import DemoNav from '../DemoNav';
import './index.less';

export default ({ blocks = [], children, frontmatter = {}, ...props }) => {
  const { background, className, flex = true } = frontmatter;
  return (
    <div className={clsx('vant-doc-demo-page', { 'vant-doc-demo-page--flex': flex })}>
      <DemoNav title={props.title} />
      <DemoSection className={className} style={{ background }}>
        {typeof children === 'function' ? children() : children}
        {blocks.map(({ Component, key, title, ...rest }) => (
          <DemoBlock key={key} title={title} {...rest}>
            <Component />
          </DemoBlock>
        ))}
      </DemoSection>
    </div>
  );
};
