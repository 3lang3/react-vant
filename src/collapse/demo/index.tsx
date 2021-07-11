import React from 'react';
import { Collapse } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Collapse.Group initExpanded={['1']}>
          <Collapse title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
        </Collapse.Group>
      </DemoBlock>
      <DemoBlock title="手风琴">
        <Collapse.Group initExpanded="1" accordion>
          <Collapse title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题2" name="2">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题3" name="3">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
        </Collapse.Group>
      </DemoBlock>
      <DemoBlock initExpanded={[]} title="禁用状态">
        <Collapse.Group>
          <Collapse title="标题1" name="1">
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题2" name="2" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
          <Collapse title="标题3" name="3" disabled>
            代码是写出来给人看的，附带能在机器上运行
          </Collapse>
        </Collapse.Group>
      </DemoBlock>
    </DemoSection>
  );
};
