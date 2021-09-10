import React, { useRef } from 'react';
import { Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import Sticky from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const container = useRef<HTMLDivElement>(null);

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Sticky>
          <Button type="primary" style={{ marginLeft: '15px' }}>
            基础用法
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title="吸顶距离">
        <Sticky offsetTop={50}>
          <Button type="info" style={{ marginLeft: '115px' }}>
            吸顶距离
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title="指定容器">
        <div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
          <Sticky container={container}>
            <Button type="warning" style={{ marginLeft: '215px' }}>
              指定容器
            </Button>
          </Sticky>
        </div>
      </DemoBlock>
      <DemoBlock title="吸底距离">
        <div style={{ height: 200 }} />
        <Sticky position="bottom" offsetBottom={50}>
          <Button type="info" style={{ marginLeft: '15px' }}>
            吸底距离
          </Button>
        </Sticky>
      </DemoBlock>
    </DemoSection>
  );
};
